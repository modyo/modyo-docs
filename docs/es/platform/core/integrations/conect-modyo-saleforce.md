---
search: true
---

# Integracion con Salesforce

## Introducción

En este tutorial integraremos Salesforce, una plataforma de gestión de las relaciones con los clientes (CRM), con el módulo de Customers de Modyo donde se tienen a los usuarios finales de la plataforma. Esta integración nos permite administrar todos lo usuarios desde un solo lugar y así no cambiar el flujo de trabajo de nuestros equipos de ventas, marketing, organización, etc.

## Requisitos Previos

- Una cuenta a la plataforma Modyo con permisos de Administrador

## Paso 1: Configuración Inicial

Lo primero que tenemos que hacer es ingresar a nuestra cuenta de Salesforce, donde configuraremos la integración con Modyo Platform.

Una vez que ingresamos a nuestra cuenta, haz click en <b>Setup</b>.

<img src="/assets/img/tutorials/saleforce/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Salesforce home page UI"/>

El link de <b>Setup</b> se encuentra en la esquina superior derecha de nuestra pantalla y su ícono es una tuerca:

<img src="/assets/img/tutorials/saleforce/setup.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" alt="Image with closeup to the Setup button"/>

## Paso 2: Apex Class

Lo primero que tenemos hacer dentro del Setup es en el buscador escribir <b>Apex Classes</b> para ir a generar un nuevo Apex Class, el cual se utilizará para crear el Proveedor de Autenticación. 

<img src="/assets/img/tutorials/saleforce/search_apex.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Image searching for Apex classes in Setup"/>

La clase Apex codifica las diferentes reglas y procesos necesarios para autenticar a un usuario con el proveedor de autenticación personalizado.

Para crear una nueva autentificación de usuarios, haz click en **Nuevo** y pega el código siguiente dentro del editor de Apex class.

```java
global class Modyo_Connector extends Auth.AuthProviderPluginClass {
          // Use this URL for the endpoint that the 
          // authentication provider calls back to for configuration.
          public String redirectUrl; 
          private String key;
          private String secret;
          // Application redirection to the Modyo_Connector website for 
          // authentication and authorization.
          private String authUrl;  
          // URI to get the new access token from Modyo using the GET verb.
          private String accessToken; 
          // Api name for the custom metadata type created for this auth provider.
          private String customMetadataTypeApiName; 
          // Api URL to access the user in Modyo
          private String userAPIUrl; 
          private String userLoginUrl; 
          // Version of the user api URL to access data from Modyo
          private String userAPIVersionUrl; 
          global String getCustomMetadataType() {
              return 'OAuth_provider__mdt';
          } 
          global PageReference initiate(Map<string,string> 
            authProviderConfiguration, String stateToPropagate) 
            { 
                authUrl = authProviderConfiguration.get('Auth_Url__c'); 
                key = authProviderConfiguration.get('Key__c');
                redirectUrl = authProviderConfiguration.get('Redirect_Url__c');
                // Here the developer can build up a request of some sort. 
                // Ultimately, they return a URL where we will redirect the user. 
                String url = authUrl + '?response_type=code&client_id='+ key +'&scope=&redirect_uri='+ redirectUrl + '&state=' + stateToPropagate; 
                return new PageReference(url); 
            } 
            global Auth.AuthProviderTokenResponse handleCallback(Map<string,string> 
            authProviderConfiguration, Auth.AuthProviderCallbackState state ) 
            { 
                // Here, the developer will get the callback with actual protocol. 
                // Their responsibility is to return a new object called 
                // AuthProviderTokenResponse. 
                // This will contain an optional accessToken and refreshToken 
                key = authProviderConfiguration.get('Key__c'); 
                secret = authProviderConfiguration.get('Secret__c'); 
                accessToken = authProviderConfiguration.get('Access_Token__c'); 
                Map<String,String> queryParams = state.queryParameters; 
                String code = queryParams.get('code'); 
                String sfdcState = queryParams.get('state'); 
                return new Auth.AuthProviderTokenResponse('Modyo_Connector', accessToken, 
                'refreshToken', sfdcState); 
            } 
            global Auth.UserData getUserInfo(Map<string,string> 
            authProviderConfiguration, 
            Auth.AuthProviderTokenResponse response) 
            { 
                //Here the developer is responsible for constructing an 
                //Auth.UserData object 
                userAPIUrl = authProviderConfiguration.get('API_User_Url__c'); 
                userLoginUrl = authProviderConfiguration.get('API_Login_Url__c'); 
                Http httpProtocol = new Http();
                // Create HTTP request to send.
                HttpRequest request = new HttpRequest();
                // Set the endpoint URL.
                request.setEndPoint(userAPIUrl);
                // Set the HTTP verb to GET.
                request.setMethod('GET');
                // Send the HTTP request and get the response.
                // The response is in JSON format.
                HttpResponse res = httpProtocol.send(request);
                String responseBody = res.getBody();
                System.debug(responseBody);            
                String locale = 'en-us';
                String userId = getValueFromResponse(responseBody, 'id');
                String fullName = getValueFromResponse(responseBody, 'name');
                String firstName = getValueFromResponse(responseBody, 'first_name');
                String lastName = getValueFromResponse(responseBody, 'last_name');
                String uname = getValueFromResponse(responseBody, 'email');
                return new Auth.UserData(
                    userId,
                    firstName,
                    lastName,
                    fullName,
                    uname,
                    null, 
                    uname,
                    locale,
                    'Modyo',
                    userLoginUrl,
                    null
                  );
            }               
            private String getValueFromResponse(String response, 
            String json_key) 
            { 
                Map<String, Object> result = (Map<String, Object>)JSON.deserializeUntyped(response);               
                String ret = String.valueof(result.get(json_key));
            return ret; 
            } 
        }
```

Haz click en guardar.

## Paso 3: Custom Metadata Types

El propósito del Custom Metadata Types es definir qué campos debemos recopilar para la autenticación.
 
Dentro de estos campos, tendremos los campos por defecto en la autenticación Modyo como el Access Token, Key, Secret, entre otros.

Para configurar los campos busca <b>Custom Metadata Types</b> y haz click en <b>New Custom Metadata Type</b>.

<img src="/assets/img/tutorials/saleforce/custom_metadata_type.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the New Custom Metadata Type UI."/>

Haz click en <b>Save</b> y en la configuración de <b>Custom Metadata Types
</b>, llena la tabla de Custom Fields con los siguientes campos.

<table>
 <tr>
  <td style="font-weight: bold;">
   Field Label
  </td>
  <td style="font-weight: bold;">
   Data Type	
  </td>
 </tr>
 <tr>
  <td>
   Access_Token
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   API_User_Url
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   Auth_Url
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   Key
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   Redirect_Url
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   Secret
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
 <tr>
  <td>
   User_Login_Url
  </td>
  <td>
   Text(255)	
  </td>
 </tr>
</table>

## Paso 4: Authentication Providers

Una vez la configuración de Apex Class y el Custom Metadata Types estén listos, hay que generar un  proveedor de autenticación, que utilizará la clase Apex recién definida.

Para poder generar un autenticador, desde la plataforma Modyo, dentro de **Configuración**, haz click en <b>Accesos a la API</b>. Genera un nuevo API access en el boton a la derecha arriba y llena los campos de la siguiente forma, donde la Callback URL es nuestra URL de Salesforce agregándole <b>services/authcallback/Modyo</b>

<img src="/assets/img/tutorials/saleforce/api-access.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Image with New Application for API Access in Modyo Platform"/> 

Luego, en **Configuración**, <b>Equipo</b>, haz click en tu usuario. En la sección de <b>API access</b> haz click en el botón <b>+ New Access Token</b> y crea uno con el que ya configuramos <b>SF Dynamic</b> para tener un Access Token para tu usuario.

Luego de tener la configuración en Modyo, volvemos a Salesforce. Dentro de Setup, ve a la sección <b>Auth. Providers</b>.

Para crear uno nuevo, haz click en <b>New</b> y dentro de el listado seleccionamos <b>Modyo_Connector</b>

<img src="/assets/img/tutorials/saleforce/Auth_Provider.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Authentication Provider Edit in Salesforce"/>

Llenamos los siguientes datos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Name
  </td>
  <td>
   Modyo
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   URL Suffix
  </td>
  <td>
   Modyo
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Access_Token
  </td>
  <td>
   [ Team - API access ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   API_User_Url	
  </td>
  <td>
   [ Modyo Account ]/api/admin/admin_users/me
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Auth_Url	
  </td>
  <td>
   [ Modyo Account ]/admin/oauth/authorize
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Key	
  </td>
  <td>
   [ API access - Application Id ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Redirect_Url	
  </td>
  <td>
   [ API access - Callback URL ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Secret	
  </td>
  <td>
   [ API access - Callback URL ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   User_Login_Url	
  </td>
  <td>
   [ Modyo Account ]/admin/login
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Registration Handler	
  </td>
  <td>
   AutocreatedRegHandler1626881065042
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Execute As	
  </td>
  <td>
   [ Modyo User ]
  </td>
 </tr>
</table>


## Paso 5: Named Credentials

Las "Named Credentials" permiten a los usuarios autenticar a un proveedor de servicios externo. Hay varias opciones predeterminadas, para conectarnos a Modyo, tenemos que crear una autenticación personalizada.

Para generar una vamos a buscar <b>Named Credentials</b> dentro de Setup, y hacemos click en <b>New Named Credential</b>. Llenamos los campos de la siguiente forma:

<table>
 <tr>
  <td style="font-weight: bold;">
   Label
  </td>
  <td>
   Modyo
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Name
  </td>
  <td>
   Modyo
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   URL
  </td>
  <td>
   [account.url]/api/admin
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Identity Type		
  </td>
  <td>
   Named Pricipal
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Authentication Protocol		
  </td>
  <td>
   OAith 2.0
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Authentication Provider		
  </td>
  <td>
   [ El que ya creamos ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Generate Authorization Header		
  </td>
  <td>
   Check
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Allow Merge Fields in HTTP Header		
  </td>
  <td>
   Check
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Allow Merge Fields in HTTP Body	
  </td>
  <td>
   Check
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/saleforce/named_credentials.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with Named Credentials flow in Salesforce"/>

Haz click en <b>Save</b>.

## Paso 6: External services

El último paso es la definición del servicio externo dentro de Salesforce. 

Los servicios externos nos permiten conectar Salesforce a servicios de terceros, compartiendo un esquema de API en formato OpenAPI y las encontramos en Setup -> External services.

Para generar la integración, crea un nuevo Servicio Externo haciendo click en el botón <b>New External Service</b> a la derecha arriba en la pantalla.

Escribe un nombre, selecciona el Named Credential que creaste y en la parte inferior pegamos el siguiente código, seleccionando <b>Service Schema Complete JSON</b>

```
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Modyo public profile API",
    "description": "Describe Modyo public profile API methods",
    "termsOfService": "http://www.modyo.com/terms/",
    "contact": {
      "name": "MODYO API Team"
    },
    "license": {
      "name": "MIT"
    }
  },
  "schemes": [
    "https"
  ],
  "basePath": "/",
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json; charset=utf-8"
  ],
  "paths": {
    "/users": {
      "get": {
        "summary": "Users List",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "required": false,
            "type": "string",
            "description": "Keywords (searched in mail and name)"
          },
          {
            "name": "active",
            "in": "query",
            "required": false,
            "type": "string",
            "enum": [
              "0",
              "1"
            ],
            "description": "Active or inactive users"
          },
          {
            "name": "verified",
            "in": "query",
            "required": false,
            "type": "string",
            "enum": [
              "0",
              "1"
            ],
            "description": "Verified or unverified users"
          },
          {
            "name": "page",
            "description": "Pagination page",
            "in": "query",
            "type": "integer",
            "minimum": 1,
            "example": 1
          },
          {
            "name": "per_page",
            "description": "Registers per page",
            "in": "query",
            "type": "integer",
            "minimum": 0,
            "example": 10
          }
        ],
        "responses": {
          "200": {
            "schema": {
              "properties": {
                "users": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/UserList"
                  }
                },
                "meta": {
                  "$ref": "#/definitions/PaginationMeta"
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a User",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "user",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UserInput"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created",
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "422": {
            "description": "Unprocessable Entity",
            "example": "{ \"errors\" : { \"username\" : [ \"has already been taken\" ] } }"
          }
        }
      }
    },
    "/users/{user_id}": {
      "get": {
        "summary": "Show a User",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "user_id",
            "in": "path",
            "description": "User id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "404": {
            "description": "User not found"
          }
        }
      },
      "put": {
        "summary": "Update a User",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "user_id",
            "in": "path",
            "description": "User id",
            "required": true,
            "type": "string"
          },
          {
            "name": "user",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UserInput"
            }
          }
        ],
        "responses": {
          "200": {
            "schema": {
              "$ref": "#/definitions/User"
            }
          },
          "404": {
            "description": "User not found"
          },
          "422": {
            "description": "Unprocessable entity",
            "example": "{ \"errors\" : { \"username\" : [ \"has already been taken\" ] } }"
          }
        }
      },
      "delete": {
        "summary": "Delete a User",
        "tags": [
          "Users"
        ],
        "parameters": [
          {
            "name": "user_id",
            "in": "path",
            "description": "User id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Delete operation completed successfully",
            "example": "{}"
          },
          "404": {
            "description": "User not found"
          }
        }
      }
    },
    "/targets": {
      "get": {
        "summary": "Targets List",
        "tags": [
          "Targets"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "required": false,
            "type": "string",
            "description": "Query on targets name"
          },
          {
            "name": "only[]",
            "in": "query",
            "description": "List of requested targets attributes to include on response",
            "type": "array",
            "collectionFormat": "multi",
            "items": {
              "type": "string",
              "required": false,
              "enum": [
                "id",
                "uuid",
                "name",
                "filters_summary",
                "matches_count",
                "created_at",
                "updated_at"
              ]
            }
          },
          {
            "name": "sort_by",
            "description": "Sort by an attribute. If blank, results are sorted by created_at",
            "in": "query",
            "type": "string",
            "enum": [
              "name",
              "created_at"
            ]
          },
          {
            "name": "order",
            "description": "Sort ascendant or descending. If blank, sort by asc",
            "in": "query",
            "type": "string",
            "enum": [
              "asc",
              "desc"
            ]
          },
          {
            "name": "page",
            "description": "Pagination page",
            "in": "query",
            "type": "integer",
            "minimum": 1,
            "example": 1
          },
          {
            "name": "per_page",
            "description": "Registers per page",
            "in": "query",
            "type": "integer",
            "minimum": 0,
            "example": 10
          }
        ],
        "responses": {
          "200": {
            "description": "Targets list",
            "schema": {
              "properties": {
                "targets": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/TargetList"
                  }
                },
                "meta": {
                  "$ref": "#/definitions/PaginationMeta"
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a target",
        "tags": [
          "Targets"
        ],
        "parameters": [
          {
            "name": "target",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Target"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created",
            "schema": {
              "$ref": "#/definitions/Target"
            }
          },
          "422": {
            "description": "unprocessable entity"
          }
        }
      }
    },
    "/targets/{id}": {
      "get": {
        "summary": "Show a target",
        "tags": [
          "Targets"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Target id",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "schema": {
              "$ref": "#/definitions/Target"
            }
          },
          "404": {
            "description": "Category not found"
          }
        }
      },
      "put": {
        "summary": "Update a target",
        "tags": [
          "Targets"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "target id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "target",
            "in": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Target"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Ok",
            "schema": {
              "$ref": "#/definitions/Target"
            }
          },
          "404": {
            "description": "Not found"
          },
          "422": {
            "description": "unprocessable entity"
          }
        }
      },
      "delete": {
        "summary": "Delete a Target",
        "tags": [
          "Targets"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "target id",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Target deleted"
          },
          "404": {
            "description": "Not found"
          },
          "422": {
            "description": "Unprocessable entity"
          }
        }
      }
    },
    "/token": {
      "get": {
        "summary": "Get user token",
        "tags": [
          "User Info"
        ],
        "responses": {
          "200": {
            "description": "User perishable token",
            "schema": {
              "properties": {
                "id": {
                  "type": "integer",
                  "example": 202
                },
                "token": {
                  "type": "string",
                  "example": "isyOzr3g1_cj34dk7VsU"
                }
              }
            }
          },
          "404": {
            "description": "Not found"
          }
        }
      }
    },
    "/delivery_token": {
      "get": {
        "summary": "Delivery token",
        "tags": [
          "User Info"
        ],
        "responses": {
          "200": {
            "description": "Delivery token",
            "schema": {
              "properties": {
                "delivery_token": {
                  "type": "string",
                  "example": "eyJhbGciOiJub25lIn0.eyJpc3MiOiJodHRwczovL3N0YXJrLm1vZHlvLm1lOjMwMDAvYXBpL3Byb2ZpbGUvZGVsaXZlcn"
                }
              }
            }
          },
          "404": {
            "description": "Not found"
          }
        }
      }
    }
  },
  "definitions": {
    "PaginationMeta": {
      "properties": {
        "total_entries": {
          "type": "integer",
          "minimum": 0,
          "example": 2
        },
        "per_page": {
          "type": "integer",
          "minimum": 0,
          "example": 10
        },
        "current_page": {
          "type": "integer",
          "minimum": 1,
          "example": 1
        },
        "total_pages": {
          "type": "integer",
          "minimum": 1,
          "example": 1
        }
      }
    },
    "Avatar": {
      "properties": {
        "file_name": {
          "type": "string",
          "example": "user_avatar.png"
        },
        "url_original": {
          "type": "string",
          "format": "uri",
          "example": "https://stark.modyo.me:3000/assets/avatar/user_avatar_original.png"
        },
        "url_small": {
          "type": "string",
          "format": "uri",
          "example": "https://stark.modyo.me:3000/assets/avatar/user_avatar_small.png"
        },
        "url_medium": {
          "type": "string",
          "format": "uri",
          "example": "https://stark.modyo.me:3000/assets/avatar/user_avatar_medium.png"
        }
      }
    },
    "Membership": {
      "properties": {
        "id": {
          "type": "integer",
          "example": 412
        },
        "site_id": {
          "type": "integer",
          "example": 1
        }
      }
    },
    "TargetList": {
      "properties": {
        "id": {
          "type": "integer",
          "example": 23
        },
        "uuid": {
          "type": "string",
          "example": "6c30c2a6-8db4-4580-8ede-2a913c8a1b6b"
        },
        "name": {
          "type": "string",
          "example": "Adults"
        },
        "filters_summary": {
          "type": "string",
          "example": "Age between 18 and 65"
        },
        "matches_count": {
          "type": "integer",
          "example": 2344
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        }
      }
    },
    "Target": {
      "properties": {
        "id": {
          "type": "integer",
          "example": 4
        },
        "uuid": {
          "type": "string",
          "example": "46a80345-6e27-4262-9ea3-7e2f4e9af26a"
        },
        "description": {
          "type": "string",
          "example": "Male clients"
        },
        "name": {
          "type": "string",
          "example": "Male"
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        },
        "filters": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TargetFilter"
          }
        }
      }
    },
    "TargetFilter": {
      "properties": {
        "id": {
          "type": "integer",
          "example": 12
        },
        "type": {
          "type": "string",
          "example": "gender_filter",
          "enum": [
            "active_filter",
            "age_filter",
            "birth_at_filter",
            "device_filter",
            "custom_field_filter",
            "order_rejected_filter",
            "order_paying_filter",
            "order_paid_filter",
            "order_confirming_filter",
            "order_confirmation_failed_filter",
            "order_completed_filter",
            "multiple_values_user_field_filter",
            "answer_filter",
            "tag_filter",
            "register_date_filter",
            "open_notification_count_filter",
            "open_notification_filter",
            "open_email_filter",
            "open_email_count_filter",
            "not_opened_email_filter",
            "login_at_filter",
            "multiple_log_count_filter",
            "last_login_filter",
            "gender_filter",
            "form_responses_count_filter",
            "email_spam_report_filter",
            "email_delivered_filter"
          ]
        },
        "operator": {
          "type": "string",
          "example": "lte",
          "enum": [
            "lte",
            "gte",
            "between",
            "eq",
            "after",
            "before",
            "first_name",
            "last_name",
            "email",
            "sex",
            "birth_at"
          ]
        },
        "operator_2": {
          "type": "string"
        },
        "filterable_type": {
          "type": "string",
          "example": "Messaging::Campaign",
          "enum": [
            "Messaging::Campaign",
            "Forms::Question",
            "CustomFields::UserCustomField"
          ]
        },
        "filterable_id": {
          "type": "integer",
          "example": 45
        },
        "svalue": {
          "type": "string",
          "example": "30,65"
        },
        "svalue_2": {
          "type": "string"
        },
        "site_id": {
          "type": "integer",
          "example": 1
        },
        "target_id": {
          "type": "integer",
          "example": 4
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "example": "2018-06-04T17:20:05.000-03:00"
        },
        "operator_label": {
          "type": "string",
          "example": "admin.targets.filters.operators.date.between"
        },
        "operator_2_label": {
          "type": "string"
        },
        "filterable": {
          "type": "object",
          "example": [
            "email_opened_log"
          ]
        },
        "filterable_label": {
          "type": "string",
          "example": "Email opened"
        },
        "selected_filterable_alternatives_value": {
          "type": "integer",
          "example": 9
        },
        "site_label": {
          "type": "string"
        },
        "svalue_label": {
          "type": "string",
          "example": "admin.commons.male"
        },
        "selected_filterable_alternatives_label": {
          "type": "string",
          "example": "Lastname"
        },
        "svalue_2_label": {
          "type": "string"
        },
        "operator_divider": {
          "type": "string",
          "example": "admin.targets.filters.operators.divider.and"
        },
        "operator_2_divider": {
          "type": "object"
        },
        "label_translated": {
          "type": "boolean",
          "example": true,
          "enum": [
            true,
            false
          ]
        },
        "condition_type": {
          "type": "integer",
          "example": 0
        },
        "condition_type_label": {
          "type": "string",
          "example": "All"
        },
        "multiple_filterables": {
          "type": "boolean",
          "example": true
        }
      }
    },
    "TargetSummary": {
      "properties": {
        "id": {
          "type": "integer",
          "example": 4
        },
        "name": {
          "type": "string",
          "example": "Seniors (65+)"
        }
      }
    },
    "UserCustomField": {
      "properties": {
        "key": {
          "type": "string",
          "example": "_ucf_single_line_text_user_custom_field"
        },
        "name": {
          "type": "string",
          "example": "Single Line Text User Custom Field"
        },
        "type": {
          "type": "string",
          "example": "string"
        },
        "value": {
          "type": "string",
          "example": "Single Line Text made by: Clifton"
        }
      }
    },
    "User": {
      "properties": {
        "avatar": {
          "$ref": "#/definitions/Avatar"
        },
        "id": {
          "type": "integer",
          "example": 2332
        },
        "external_id": {
          "type": "string",
          "example": "11111111-1"
        },
        "name": {
          "type": "string",
          "example": "Clifton Feil"
        },
        "first_name": {
          "type": "string",
          "example": "Clifton"
        },
        "last_name": {
          "type": "string",
          "example": "Feil"
        },
        "email": {
          "type": "string",
          "format": "email",
          "example": "test.user@modyo.com"
        },
        "username": {
          "type": "string",
          "example": "test.user"
        },
        "url": {
          "type": "string",
          "format": "uri",
          "example": "https://stark.modyo.me:3000/admin/users/283d2baa-c3e1-4a8c-91d7-752aea8937ab"
        },
        "sex": {
          "type": "string",
          "example": 0,
          "enum": [
            0,
            1,
            3
          ]
        },
        "birth_at": {
          "type": "string",
          "example": "1952-09-04"
        },
        "active": {
          "type": "boolean",
          "example": true,
          "enum": [
            true,
            false
          ]
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-08T16:08:55.000-03:00"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-23T18:30:19.000-03:0"
        },
        "last_login_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-22T20:40:35.000Z"
        },
        "targets": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TargetSummary"
          }
        },
        "last_login_ip": {
          "type": "string",
          "format": "ipv4",
          "example": "127.0.0.1"
        },
        "memberships": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Membership"
          }
        },
        "custom_fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UserCustomField"
          }
        }
      }
    },
    "UserInput": {
      "properties": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "username": {
          "type": "string"
        },
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "second_last_name": {
          "type": "string"
        },
        "password": {
          "type": "string",
          "format": "password",
          "description": "Plaintext password, will be encrypted"
        },
        "birth_at": {
          "type": "string",
          "example": "1978-06-01"
        },
        "sex": {
          "type": "integer",
          "enum": [
            0,
            1,
            3
          ],
          "example": 0,
          "description": "0: male, 1: female, 3: undefined"
        },
        "external_id": {
          "type": "string"
        },
        "tag_list": {
          "type": "string",
          "example": "tag01, tag02"
        },
        "created_at": {
          "type": "string",
          "example": "2019-03-31 10:23:00"
        },
        "updated_at": {
          "type": "string",
          "example": "2019-06-26 08:24:45"
        },
        "login_count": {
          "type": "integer"
        },
        "failed_login_count": {
          "type": "integer"
        },
        "last_login_at": {
          "type": "string",
          "example": "2019-06-26 08:24:45"
        },
        "last_login_ip": {
          "type": "string",
          "format": "ipv4",
          "example": "127.0.0.1"
        },
        "current_login_at": {
          "type": "string",
          "example": "2019-06-26 08:24:45"
        },
        "current_login_ip": {
          "type": "string",
          "format": "ipv4",
          "example": "127.0.0.1"
        },
        "activate": {
          "type": "boolean",
          "example": true,
          "enum": [
            true,
            false
          ]
        },
        "custom_fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UserCustomField"
          }
        },
        "time_zone": {
          "type": "string"
        },
        "locale": {
          "type": "string",
          "example": "en"
        },
        "send_email": {
          "type": "boolean",
          "enum": [
            true,
            false
          ],
          "description": "Send email to created user"
        }
      }
    },
    "UserList": {
      "properties": {
        "avatar": {
          "$ref": "#/definitions/Avatar"
        },
        "id": {
          "type": "integer",
          "example": 2332
        },
        "uuid": {
          "type": "string",
          "example": "5379068f-4bc2-4858-8c37-6f59858e0a5b"
        },
        "external_id": {
          "type": "string",
          "example": "11111111-1"
        },
        "email": {
          "type": "string",
          "format": "email",
          "example": "test.user@modyo.com"
        },
        "username": {
          "type": "string",
          "example": "test.user"
        },
        "first_name": {
          "type": "string",
          "example": "Clifton"
        },
        "last_name": {
          "type": "string",
          "example": "Feil"
        },
        "name": {
          "type": "string",
          "example": "Clifton Feil"
        },
        "full_name": {
          "type": "string",
          "example": "Clifton Feil"
        },
        "sex": {
          "type": "string",
          "example": 0,
          "enum": [
            0,
            1,
            3
          ]
        },
        "active": {
          "type": "boolean",
          "example": true,
          "enum": [
            true,
            false
          ]
        },
        "created_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-08T16:08:55.000-03:00"
        },
        "updated_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-23T18:30:19.000-03:0"
        },
        "last_login_at": {
          "type": "string",
          "format": "date-time",
          "example": "2019-10-22T20:40:35.000Z"
        },
        "login_count": {
          "type": "integer",
          "example": 3
        },
        "custom_fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UserCustomField"
          }
        }
      }
    },
    "UserWithCards": {
      "properties": {
        "cards": {
          "type": "array",
          "items": {
            "properties": {
              "card_type": {
                "type": "string"
              },
              "number": {
                "type": "string"
              },
              "site_id": {
                "type": "integer"
              }
            }
          }
        }
      }
    }
  }
}
```
<img src="/assets/img/tutorials/saleforce/add_an_external_service.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with Add an External Service in Salesforce."/>

Haz click en <b>Save & Next</b>, selecciona todos lo operadores y haz click en Next y Done.

## Paso 7: Crear Custom Fields de usuarios

Dentro de <b>Setup</b>, haz click en <b>Contact</b> para crear los campos que necesitaremos.

<table>
 <tr>
  <td style="font-weight: bold;">
   Modyo ID
  </td>
  <td>
   Text(255) (External ID) (Unique Case Insensitive)
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Premium Customer
  </td>
  <td>
   Checkbox
  </td>
 </tr>
</table>

Marcar todo en <b>Visible</b> y guardar.

Luego vamos a ir a la cuenta en Modyo, selecciona <b>Customers</b> y haz click en **Realms**. Selecciona tu Reino y una vez dentro, selecciona <b>Configuración de Reino</b> y haz click en <b>Custom fields</b>, haz click en <b>New Custom Field</b> y llena los siguientes campos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Field type
  </td>
  <td>
   Checkbox
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Field name
  </td>
  <td>
   Premium Customer
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/saleforce/custom_field.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image adding a New Custom Field in Modyo."/>

Haz click en <b>Create</b>, lo activamos en los 3 puntos y guardamos.

<img src="/assets/img/tutorials/saleforce/activate.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image activating the custom field in Modyo."/>

## Paso 8: Creación de Flow

Una vez terminada la configuración para conectar Salesforce con Modyo, se tiene que crear el flujo para sincronizar los usuarios de Salesforce con Modyo.

Para esto, ve a Setup -> Flows y haz click a <b>New Flow</b>. Selecciona <b>Autolaunched Flow</b> y luego <b>Freeform</b>.

<img src="/assets/img/tutorials/saleforce/autolaunched.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with a New Autolaunched Flow in Salesforce."/>

Para comenzar, ve a la pestaña <b>Manager</b> y a crear nuevos recursos.

Crea una nueva variable llamada <b>IsPremiumCustomer</b> del Tipo Boolean y de valor por defecto  <b>{!$GlobalConstant.False}</b>, habilita los dos campos de abajo y haz click en <b>Done</b>.

<img src="/assets/img/tutorials/saleforce/IsPremiumCustomer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the new variable called IsPremiumCustomer in the New Resource window."/>

Crea una nueva variable <b>ModyoID</b> de tipo Text y al igual que el anterior, habilita for input y Available for output.

<img src="/assets/img/tutorials/saleforce/ModyoID.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with a new varible called ModyoID in the New Resource window."/>

Luego crea otra variable llamada <b>DynamicCustomField</b> y a diferencia de las anteioriores en <b>Data Type</b> selecciona <b>Apex-Defined</b>. En <b>Apex Class</b> llenamos con <b>ExternalService__DynamicModyo_UserCustomField</b>, habilita input y output, y hacemos click en <b>Done</b>.

Repite el mismo procedimiento pero cambiando el nombre por <b>DynamicUserInput
</b> y <b>Apex Class</b> por <b>ExternalService__DynamicModyo_UserInput</b>.


Una vez creadas las Variables, vuelve a la pestaña de <b>Elements</b> y agrega al flujo un <b>Pause</b>, llamado <b>async pause</b> y dentro de <b>Resume event</b> agrega <b>{!$Flow.CurrentDateTime}</b> en <b>Base Time</b> dentro de <b>Define Resume Time</b>.

<img src="/assets/img/tutorials/saleforce/async_pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image adding a new Async Pause in the New Pause window."/>

<img src="/assets/img/tutorials/saleforce/base_time.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Image with the name for the Base Time in the Define Resume Time window."/>

Ahora se tienen que unir los puntos.

<img src="/assets/img/tutorials/saleforce/flow1.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Image connecting the Autolaunched Flow to the Async Pause."/>

Agrega un <b>Decision</b> al flujo, llamado <b>Is Premium Customer</b> y llénalo con los siguientes campos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Label
  </td>
  <td>
   Is Premium Customer
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   API Name
  </td>
  <td>
   Is_Premium_Customer
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Label
  </td>
  <td>
   Is Premium Customer
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Outcome API Name
  </td>
  <td>
   IsPremiumC
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Condition Requirements to Execute Outcome
  </td>
  <td>
   IsPremiumC
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Outcome API Name
  </td>
  <td>
   All Condition Are Met (AND)
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Resource
  </td>
  <td>
   {!IsPremiumCustomer}
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Operator
  </td>
  <td>
   Equals
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Value
  </td>
  <td>
   {!$GlobalConstant.True}
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/saleforce/decision.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Is Premium Customer Decision in the New Decision window in Salesforce."/>

Luego conecta los puntos activando la pausa.

<img src="/assets/img/tutorials/saleforce/pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image selecting the Pause configuration for this decision."/>

Y el resultado luce algo asi:

<img src="/assets/img/tutorials/saleforce/decision_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the decision flow result"/>

Ahora vamos a realizar dos Assignment dependiendo del Decision, uno para Default Outcome y otro para Is Premium Customer con los siguientes atributos:

Default Outcome:
<img src="/assets/img/tutorials/saleforce/Assign_False.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign True in the Edit Assignment window."/>

Is Premium Customer:

<img src="/assets/img/tutorials/saleforce/Assign_True.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign False in the Edit Assignment window."/>

Luego de crear los Assignments, se conectan de la siguiente forma:

<img src="/assets/img/tutorials/saleforce/assignment_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the end result after connecting the Assignments."/>

Ahora que el input es true o false, vamos a generar un nuevo Assignment con los siguientes campos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Variable
  </td>
  <td>
   {!DynamicUserInput.customx5ffields}
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Operator
  </td>
  <td>
   Add
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Value
  </td>
  <td>
   {!DynamicCustomField}
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/saleforce/Assign_User_Input.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign User Input."/>

Para terminar el flujo, se agrega un útimo elemento <b>Interaction</b>, especifícamente un <b>Action</b> llamado <b>Update_Dynamic_User</b>.

En el buscador de actions, haz click en <b>putUsersByUser_id</b>:

<img src="/assets/img/tutorials/saleforce/New_Action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image creating a new Action called put Users by User Id."/>

Completa los siguientes datos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Label
  </td>
  <td>
   Uptdate Dynamic User
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   user
  </td>
  <td>
   {!DynamicUserInput}
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   user_id
  </td>
  <td>
   {!ModyoID}
  </td>
 </tr>
</table>

Y conecta todos los puntos para que el Flujo quede de la siguiente forma:

<img src="/assets/img/tutorials/saleforce/flujo.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the end result after connecting the flows."/>

Para finalizar, guarda y prueba que esté funcionando correctamente.

## Paso 9: Creación de Process

Ahora tenemos que buscar <b>Process builder</b> en el buscador,

<img src="/assets/img/tutorials/saleforce/Process_builder.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image searching for Process Builder in the Setup window."/>

Y genera uno nuevo con el nombre <b>Change Modyo Customer</b> y en **The process starts when** seleccion <b>A record changes</b>, que se ve así:

<img src="/assets/img/tutorials/saleforce/Modyo_Customer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the result after adding the processes."/>

Luego haz click en <b>Add Object</b>, en Object agrega <b>Contact</b>, selecciona <b>when a record is created or edited</b> y haz click en guardar.

<img src="/assets/img/tutorials/saleforce/object.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the Choose Object and specify when to start the process window."/>

Luego haz click en <b>Add Criteria</b> y llena los siguientes campos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Criteria Name
  </td>
  <td>
   Customer Status Changed
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Criteria for Executing Actions
  </td>
  <td>
   Conditions are met
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Conditions
  </td>
  <td>
   All of the conditions are met (AND)
  </td>
 </tr>
</table>

EN la tabla de <b>Set Conditions</b>

<table>
 <tr>
  <td style="font-weight: bold;">
   Field
  </td>
  <td style="font-weight: bold;">
   Operator
  </td>
  <td style="font-weight: bold;">
   Type
  </td>
  <td style="font-weight: bold;">
   Value
  </td>
 </tr>
 <tr>
  <td>
   [Contact].Premium_Customer__c
  </td>
  <td>
    Is changed
  </td>
  <td>
   Boolean
  </td>
  <td>
   True
  </td>
 </tr>
<tr>
  <td>
   [Contact].Modyo_ID__c
  </td>
  <td>
    Is null
  </td>
  <td>
   Boolean
  </td>
  <td>
   False
  </td>
 </tr> 
</table>

Con esto nos aseguramos que el contacto tenga Modyo ID, click <b>Save</b> y en <b>IMMEDIATE ACTIONS
</b> haz click en <b>Add Action</b> con los siguientes datos:

<table>
 <tr>
  <td style="font-weight: bold;">
   Action Type
  </td>
  <td>
   Flows
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Action Name
  </td>
  <td>
   Change Customer Status
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Flow
  </td>
  <td>
   Premium Customer Flow
  </td>
 </tr>
</table>

En Set Flow Variables agrega dos renglones con lo siguiente:

<table>
 <tr>
  <td style="font-weight: bold;">
   Flow Variable
  </td>
  <td style="font-weight: bold;">
   Type
  </td>
  <td style="font-weight: bold;">
   Value
  </td>
 </tr>
 <tr>
  <td>
   IsPremiumCustomer
  </td>
  <td>
    Field Reference
  </td>
  <td>
   Premium Customer
  </td>
 </tr>
<tr>
  <td>
   ModyoID
  </td>
  <td>
    Field Reference
  </td>
  <td>
   Modyo ID
  </td>
 </tr> 
</table>

<img src="/assets/img/tutorials/saleforce/action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the select and define action window."/>

Haz click en <b>Activate</b>.

## Conclusiones

¡Felicidades! Haz finalizado el tutorial, para poder probar que este todo esté bien, tenemos que crear un usuario llenando los campos obligatorios (First Name, Last Name, Email y Modyo ID).

Para conocer el ID del usuario en Modyo lo podemos hacer a través de la API de Customers en la siguiente url {acount.url}/customers/{realm_uid}/users o en la plataforma Modyo, haciendo click al usuario dentro de Reinos. El Modyo ID será localizado como parte de la URL y se ve algo como: `987eb795-9476-49f7-b511-efb5ba3f07de`.