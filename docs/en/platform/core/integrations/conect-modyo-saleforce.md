---
search: true
---

# Integration with Salesforce

## Introduction

In this tutorial we will integrate Salesforce, a customer relationship management (CRM) platform with Modyo's Customers module where the platform's end users are managed. This integration allows us to manage all users from one place and thus centralize the workflow of our sales, marketing, and organization teams.

## Prerequisites

- A Modyo platform account with Administrator permissions

## Step 1: Initial Setup

The first thing we need to do is log into our Salesforce account, where we'll set up the integration with Modyo Platform.

Once we log into our account, click <b>Setup</b>.

<img src="/assets/img/tutorials/saleforce/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

The link to <b> Setup </b> is located in the upper right corner of our screen and its icon is a nut:

<img src="/assets/img/tutorials/saleforce/setup.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Step 2: Apex Class

The first thing we have to do inside the Setup is in the search engine type <b> Apex Classes </b> to go and generate a new Apex Class, which will be used to create the Authentication Provider. 

<img src="/assets/img/tutorials/saleforce/search_apex.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;"/>

The Apex class contains the different rules and processes needed to authenticate a user with the custom authentication provider.

To create a new user authentication, click **New** and paste the following code into the Apex class editor.

```
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

Click Save.

## Step 3: Custom Metadata Types

The purpose of Custom Metadata Types is to define which fields we should collect for authentication.

Within these fields, we will have the default fields in Modyo authentication such as Access Token, Key, Secret, among others.

To configure the fields search for <b>Custom Metadata Types</b> and click <b>New Custom Metadata Type</b>.

<img src="/assets/img/tutorials/saleforce/custom_metadata_type.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Click <b>Save</b> and on the settings of <b>Custom Metadata Types
 </b>, fill in the Custom Fields table with the following:

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

## Step 4: Authentication Providers

Once the Apex Class configuration and Custom Metadata Types are ready, you need to generate an authentication provider, which will use the newly defined Apex class.

In order to generate an authenticator, from the Modyo platform, within **Configuration**, click on <b> Access to the API </b>. Generate a new API access in the button on the right above and fill in the fields as follows, where the Callback URL is our Salesforce URL by adding <b> services/AuthCallback/Modyo </b> 

<img src="/assets/img/tutorials/saleforce/api-access.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;"/> 

Then, in **Settings**, <b> Team </b>, click your username. In the section of <b>API access</b> click <b>+ New Access Token</b> and create one with which we already configured <b>SF Dynamic</b> to have an Access Token for your user.

After we have the configuration in Modyo, we return to Salesforce. Within Setup, go to the <b>Auth section. Providers</b>.

To create a new one, click <b>New</b> and within the list we select <b>Modyo_Connector</b>.

<img src="/assets/img/tutorials/saleforce/Auth_Provider.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;"/>

Fill in the following data:

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


## Step 5: Named Credentials

Named Credentials allow users to authenticate to an external service provider. There are several default options, in order to connect to Modyo, we need to create a custom authentication.

To generate one we are going to search for <b> Named Credentials </b> inside Setup, and click on <b>New Named Credential</b>. We fill in the fields as follows:

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

<img src="/assets/img/tutorials/saleforce/named_credentials.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Click on <b> Save </b>.

## Step 6: External services

The last step is the definition of the external service within Salesforce. 

External services allow us to connect Salesforce to third-party services, sharing an API schema in OpenAPI format and we find them in Setup -> External services.

To generate the integration, create a new External Service by clicking on the <b> New External Service </b> button on the top right of the screen.

Enter a name, select the Named Credential you created and at the bottom we paste the following code, selecting <b> Service Schema Complete JSON </b> 

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
<img src="/assets/img/tutorials/saleforce/add_an_external_service.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Click <b>Save & Next</b>, select all operators and click Next and Done.

## Step 7: Create User Custom Fields

Within <b>Setup</b>, click on <b> Contact </b> to create the fields we'll need.

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

Mark everything in <b>Visible</b> and save.

Then in Modyo Platform, select <b>Customers</b> and click **Realms**. Select your Realm and in <b>Realm Settings</b> click <b>Custom Fields</b>. Click <b>New Custom Field</b> and fill in the following fields:

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

<img src="/assets/img/tutorials/saleforce/custom_field.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Click on <b>Create</b>, we activate it in the 3 points and save.

<img src="/assets/img/tutorials/saleforce/activate.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

## Step 8: Creating Flow

After the setup to connect Salesforce to Modyo is complete, the flow needs to be created to synchronize Salesforce users with Modyo.

For this, go to Setup -> Flows and click <b>New Flow</b>. Select <b>Autolaunched Flow</b>, and then <b>Freeform</b>.

<img src="/assets/img/tutorials/saleforce/autolaunched.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

To get started, go to the <b>Manager</b> tab and create new resources.

Creates a new variable named <b>isPremiumCustomer</b> of the Boolean Type and of default value <b>{! $globalconstant.false}</b>, enable the two fields below and click <b>Done</b>.

<img src="/assets/img/tutorials/saleforce/IsPremiumCustomer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Creates a new variable <b>ModyoID</b> of type Text and, like the previous one, enables for input and Available for output.

<img src="/assets/img/tutorials/saleforce/ModyoID.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Then create another variable called <b>DynamicCustomField</b> and unlike the previous ones, in <b>Data Type</b> select <b>Apex-Defined</b>. In <b>Apex Class</b> type <b>ExternalService__DynamicModyo_UserCustomField</b>, enable input and output, and click <b>Done</b>.

Repeat the same procedure but changing the name to <b> DynamicUserInput
 </b> and <b> Apex Class </b> by <b> ExternalService__DynamicModyo_UserInput </b>.


Once the Variables are created, return to the tab of <b> Elements </b> and add to the flow an <b> Pause </b>, named <b> async pause </b> 8z0 and inside <b> Resume event </b> add <b> {! $flow.currentDateTime} </b> in <b> Base Time </b> inside <b> Define Resume Time </b>.

<img src="/assets/img/tutorials/saleforce/async_pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

<img src="/assets/img/tutorials/saleforce/base_time.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

Now the dots have to be joined.

<img src="/assets/img/tutorials/saleforce/flow1.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

Add an <b> Decision </b> to the flow, named <b> Is Premium Customer </b>, and fill it with the following fields:

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

<img src="/assets/img/tutorials/saleforce/decision.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Then connect the dots by activating the pause.

<img src="/assets/img/tutorials/saleforce/pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

And the result looks something like this:

<img src="/assets/img/tutorials/saleforce/decision_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Now we are going to perform two Assignments depending on the Decision, one for Default Outcome and one for Is Premium Customer with the following attributes:

Default Outcome:
 <img src="/assets/img/tutorials/saleforce/Assign_False.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/> 

Is Premium Customer:

<img src="/assets/img/tutorials/saleforce/Assign_True.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

After creating the Assignments, they are connected as follows:

<img src="/assets/img/tutorials/saleforce/assignment_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Now that the input is true or false, let's generate a new Assignment with the following fields:

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

<img src="/assets/img/tutorials/saleforce/Assign_User_Input.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

To end the flow, add a last item <b>Interaction</b>, specifically an <b>Action</b> named <b>Update_Dynamic_User</b>.

In the action finder, click <b> PutUsersByUser_ID </b>:

<img src="/assets/img/tutorials/saleforce/New_Action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Complete the following information:

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

And connect all the dots so that the Flow looks like this:

<img src="/assets/img/tutorials/saleforce/flujo.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Finally, save and test that it is working correctly.

## Step 9: Creating Process

Now we need to search <b> Process builder </b> in the search engine,

<img src="/assets/img/tutorials/saleforce/Process_builder.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

And generate a new one with the name <b> Change Modyo Customer </b> and in **The process starts when** select <b> A record changes </b>, which looks like this:

<img src="/assets/img/tutorials/saleforce/Modyo_Customer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Then in Object click <b>Add Object</b>, add a <b>Contact</b>, select <b>when a record is created or edited</b> and click Save.

<img src="/assets/img/tutorials/saleforce/object.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Then click on <b> Add Criteria </b> and fill in the following fields:

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

IN the table of <b> Set Conditions </b> 

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

With this we ensure that the contact has Modyo ID, click <b> Save </b> and on <b> IMMEDIATE ACTIONS
 </b> click on <b> Add Action </b> with the following data:

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

In Set Flow Variables add two lines with the following:

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

<img src="/assets/img/tutorials/saleforce/action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;"/>

Click on <b> Activate </b>.

## Conclusion

Congratulations! You have finished the tutorial, in order to test that everything is OK, we need to create a user by filling in the required fields (First Name, Last Name, Email and Modyo ID).

To find out the user ID in Modyo we can do it through the Customers API at the following url {acount.url} /customers/ {realm_uid} /users or on the Modyo platform, by clicking the user within Realms. The Modyo ID will be located as part of the URL and looks something like: `987eb795-9476-49f7-b511-efb5ba3f07de`.