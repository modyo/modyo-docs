---
search: true
---

# Integration with Salesforce

## Introduction

In this tutorial we will integrate Salesforce, a customer relationship management (CRM) platform, with Modyo's Customers module where the platform's end users are managed. For example, when the <b>Premium Customer</b> field of a contact changes in Salesforce, a Salesforce flow updates the matching custom field of the user in Modyo, so your sales or marketing teams don't have to leave Salesforce.

This tutorial doesn't use the [Salesforce integration](/en/platform/customers/settings.html#salesforce) that you set up in the realm integrations: the flow calls the Modyo Administration API directly. If you need to sync Salesforce contacts with the realm users, use that integration instead.

## Prerequisites

- A Modyo platform account with Administrator permissions

## Step 1 Initial setup

The first thing we need to do is log into our Salesforce account, where we'll set up the integration with Modyo Platform.

Once we log into our account, click <b>Setup</b>.

<img src="/assets/img/tutorials/salesforce/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Salesforce home page UI"/>

The link to <b> Setup </b> is located in the upper right corner of our screen, and its icon is a gear:

<img src="/assets/img/tutorials/salesforce/setup.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" alt="Image with closeup to the Setup button"/>

## Step 2 Apex class

The first thing we have to do inside the Setup is in the search engine type <b> Apex Classes </b> to go and generate a new Apex Class, which will be used to create the Authentication Provider. 

<img src="/assets/img/tutorials/salesforce/search_apex.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Image searching for Apex classes in Setup"/>

The Apex class contains the different rules and processes needed to authenticate a user with the custom authentication provider.

To create a new user authentication, click **New** and paste the following code into the Apex class editor.

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

                String token = response.oauthToken;
                userAPIUrl = authProviderConfiguration.get('API_User_Url__c');
                userLoginUrl = authProviderConfiguration.get('API_Login_Url__c');

                // Create HTTP request to send.
                HttpRequest request = new HttpRequest();
                // Set authorization header
                request.setHeader('Authorization', 'Bearer ' + token);
                // Set the endpoint URL.
                request.setEndPoint(userAPIUrl);
                // Set the HTTP verb to GET.
                request.setMethod('GET');
                // Send the HTTP request and get the response.
                // The response is in JSON format.

                Http httpProtocol = new Http();
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

## Step 3 Custom metadata types

The purpose of Custom Metadata Types is to define which fields we should collect for authentication.

Within these fields, we will have the default fields in Modyo authentication such as Access Token, Key, Secret, among others.

To configure the fields search for <b>Custom Metadata Types</b> and click <b>New Custom Metadata Type</b>.

<img src="/assets/img/tutorials/salesforce/custom_metadata_type.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the New Custom Metadata Type UI."/>

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
   API_Login_Url
  </td>
  <td>
   Text(255)    
  </td>
 </tr>
</table>

## Step 4 Authentication providers

Once the Apex Class configuration and Custom Metadata Types are ready, you need to generate an authentication provider, which will use the newly defined Apex class.

In order to generate an authenticator, from the Modyo platform, within **Settings**, click **API access**. Click **New API Access** at the top right and fill in the fields as follows. In **Redirect URI**, enter your Salesforce URL followed by <b>services/authcallback/Modyo</b>.

<img src="/assets/img/tutorials/salesforce/api-access.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Image with New Application for API Access in Modyo Platform"/> 

:::warning Copy the secret when you create the application
Modyo shows the application secret only once, in the **A new secret token has been generated** dialog. Copy it before closing the dialog: you need it for the **Secret** field of the Authentication Provider, and you can't retrieve it afterward.
:::

Then, in **Settings**, <b>Team</b>, click your username. In the section of <b>API access</b> click <b>+ New Access Token</b> and create one with the one we already configured <b>SF Dynamic</b> to have an Access Token for your user.

After we have the configuration in Modyo, we return to Salesforce. Within Setup, go to the <b>Auth section. Providers</b>.

To create a new one, click <b>New</b> and within the list we select <b>Modyo_Connector</b>.

<img src="/assets/img/tutorials/salesforce/Auth_Provider.png" style="border: 1px solid rgb(238, 238, 238);max-width: 500px;margin: auto 0;" alt="Authentication Provider Edit in Salesforce"/>

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
   [ Modyo Account ]/api/admin/profile
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
   [ API access - Secret ]
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   API_Login_Url    
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

:::tip Tip
The **API_User_Url** value points to the profile of the authenticated admin user. As of Modyo 10.2 that data comes from `[ Modyo Account ]/api/admin/profile`: the `/api/admin/admin_users/me` endpoint no longer exists and returns 404. If you are migrating an integration built on an earlier version, update the value in the Authentication Provider.
:::


## Step 5 Named credentials

Named Credentials allow users to authenticate to an external service provider. There are several default options, in order to connect to Modyo, we need to create a custom authentication.

To generate one, we are going to search for <b>Named Credentials</b> inside Setup, and click on <b>New Named Credential</b>. We fill in the fields as follows:

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
   Named Principal
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Authentication Protocol      
  </td>
  <td>
   OAuth 2.0
  </td>
 </tr>
 <tr>
  <td style="font-weight: bold;">
   Authentication Provider      
  </td>
  <td>
   [ The one we created ]
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

<img src="/assets/img/tutorials/salesforce/named_credentials.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with Named Credentials flow in Salesforce"/>

Click on <b> Save </b>.

## Step 6 Remote site

The last step is the definition of the external service within Salesforce. 

External services allow us to connect Salesforce to third-party services, sharing an API schema in OpenAPI format and we find them in Setup -> External services.

To generate the integration, create a new External Service by clicking on the <b>New External Service</b> button on the top right of the screen.

Enter <b>DynamicModyo</b> as the name, select the Named Credential you created, and at the bottom paste the following code, selecting <b>Service Schema Complete JSON</b>. Step 8 uses the types that Salesforce generates with that name, such as <b>ExternalService__DynamicModyo_UserInput</b>.

The schema describes a single operation, the one that updates a realm user. Its paths are relative to the Named Credential URL, so the final call is `PUT [account.url]/api/admin/customers/{realm_uid}/users/{user_id}`. It's adapted from the Administration API documentation, available at `[account.url]/api/admin/docs`: `operationId` sets the name of the action you'll use in Step 8, and `user_id` is declared as text so that it accepts the <b>ModyoID</b> text variable, which holds the user's `id`.


```json
{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Modyo Admin API",
    "description": "Describe Modyo Admin API methods",
    "termsOfService": "http://www.modyo.com/terms/",
    "contact": {
      "name": "MODYO API Team"
    },
    "license": {
      "name": "MIT"
    }
  },
  "securityDefinitions": {
    "access_token": {
      "type": "apiKey",
      "in": "header",
      "name": "Authorization"
    }
  },
  "security": [{
    "access_token": []
  }],
  "basePath": "/",
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json; charset=utf-8"
  ],
  "paths": {
    "/customers/{realm_uid}/users/{user_id}": {
      "put": {
        "summary": "Update a User",
        "operationId": "putUsersByUser_id",
        "tags": [
          "Users"
        ],
        "parameters": [{
          "name": "realm_uid",
          "in": "path",
          "description": "Realm UID",
          "required": true,
          "type": "string"
        }, {
          "name": "user_id",
          "in": "path",
          "description": "User id",
          "required": true,
          "type": "string"
        }, {
          "name": "user",
          "in": "body",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UserInput"
          }
        }],
        "responses": {
          "200": {
            "description": "Successfully updated user"
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "User not found"
          },
          "409": {
            "description": "The user is locked by another admin"
          },
          "422": {
            "description": "The user could not be saved"
          }
        }
      }
    }
  },
  "definitions": {
    "UserInput": {
      "properties": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "first_name": {
          "type": "string"
        },
        "last_name": {
          "type": "string"
        },
        "custom_fields": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UserCustomField"
          }
        }
      }
    },
    "UserCustomField": {
      "properties": {
        "key": {
          "type": "string",
          "example": "_ucf_premium_customer"
        },
        "value": {
          "type": "string",
          "example": "true"
        }
      }
    }
  }
}
```
<img src="/assets/img/tutorials/salesforce/add_an_external_service.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with Add an External Service in Salesforce."/>

Click <b>Save & Next</b>, select all operators and click Next and Done.

## Step 7 Creating custom fields

So the sync can identify each user and carry the custom attribute, create the fields on both ends: first in Salesforce and then in Modyo.

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

<img src="/assets/img/tutorials/salesforce/custom_field.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image adding a New Custom Field in Modyo."/>

Click on <b>Create</b>, activate it in the 3 points and save.

<img src="/assets/img/tutorials/salesforce/activate.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image activating the custom field in Modyo."/>

## Step 8 Creating flow

After the setup to connect Salesforce to Modyo is complete, the flow needs to be created to synchronize Salesforce users with Modyo.

For this, go to Setup -> Flows and click <b>New Flow</b>. Select <b>Autolaunched Flow</b>, and then <b>Freeform</b>.

<img src="/assets/img/tutorials/salesforce/autolaunched.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with a New Autolaunched Flow in Salesforce."/>

To get started, go to the <b>Manager</b> tab and create new resources.

Creates a new variable named <b>IsPremiumCustomer</b> of the Boolean Type and of default value <b>{!$GlobalConstant.False}</b>, enable the two fields below and click <b>Done</b>.

<img src="/assets/img/tutorials/salesforce/IsPremiumCustomer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the new variable called IsPremiumCustomer in the New Resource window."/>

Creates a new variable <b>ModyoID</b> of type Text and, like the previous one, enables for input and Available for output.

<img src="/assets/img/tutorials/salesforce/ModyoID.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with a new varible called ModyoID in the New Resource window."/>

Then create another variable called <b>DynamicCustomField</b> and unlike the previous ones, in <b>Data Type</b> select <b>Apex-Defined</b>. In <b>Apex Class</b> type <b>ExternalService__DynamicModyo_UserCustomField</b>, enable input and output, and click <b>Done</b>.

Repeat the same procedure but changing the name to <b>DynamicUserInput
</b> and <b>Apex Class</b> by <b>ExternalService__DynamicModyo_UserInput</b>.


Once the Variables are created, return to the tab of <b>Elements</b> and add to the flow an <b>Pause</b>, named <b>async pause</b> and in<b>Resume event</b> add <b>{!$Flow.CurrentDateTime}</b> in <b>Base Time</b> inside <b>Define Resume Time</b>.

<img src="/assets/img/tutorials/salesforce/async_pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image adding a new Async Pause in the New Pause window."/>

<img src="/assets/img/tutorials/salesforce/base_time.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Image with the name for the Base Time in the Define Resume Time window."/>

Now the dots have to be joined.

<img src="/assets/img/tutorials/salesforce/flow1.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Image connecting the Autolaunched Flow to the Async Pause."/>

Add an <b>Decision</b> to the flow, named <b>Is Premium Customer</b>, and fill it with the following fields:

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

<img src="/assets/img/tutorials/salesforce/decision.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Is Premium Customer Decision in the New Decision window in Salesforce."/>

Then connect the dots by activating the pause.

<img src="/assets/img/tutorials/salesforce/pause.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image selecting the Pause configuration for this decision."/>

And the result looks something like this:

<img src="/assets/img/tutorials/salesforce/decision_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the decision flow result"/>

Now we are going to perform two Assignments depending on the Decision, one for Default Outcome and one for Is Premium Customer with the following attributes:

Default Outcome:
<img src="/assets/img/tutorials/salesforce/Assign_False.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign True in the Edit Assignment window."/>

Is Premium Customer:

<img src="/assets/img/tutorials/salesforce/Assign_True.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign False in the Edit Assignment window."/>

After creating the Assignments, they are connected as follows:

<img src="/assets/img/tutorials/salesforce/assignment_flow.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the end result after connecting the Assignments."/>

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

<img src="/assets/img/tutorials/salesforce/Assign_User_Input.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image with the Assignment Assign User Input."/>

To end the flow, add a last item <b>Interaction</b>, specifically an <b>Action</b> named <b>Update_Dynamic_User</b>.

In the action finder, click <b>putUsersByUser_id</b>:

<img src="/assets/img/tutorials/salesforce/New_Action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image creating a new Action called put Users by User Id."/>

Complete the following information:

<table>
 <tr>
  <td style="font-weight: bold;">
   Label
  </td>
  <td>
   Update Dynamic User
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
 <tr>
  <td style="font-weight: bold;">
   realm_uid
  </td>
  <td>
   [ Realm Identifier ]
  </td>
 </tr>
</table>

And connect all the dots so that the Flow looks like this:

<img src="/assets/img/tutorials/salesforce/flujo.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the end result after connecting the flows."/>

Finally, save and test that it is working correctly.

## Step 9 Creating process

Now we need to search <b>Process builder</b> in the search engine,

<img src="/assets/img/tutorials/salesforce/Process_builder.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image searching for Process Builder in the Setup window."/>

And generate a new one with the name <b>Change Modyo Customer</b> and in **The process starts when** select <b>A record changes</b>, which looks like this:

<img src="/assets/img/tutorials/salesforce/Modyo_Customer.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the result after adding the processes."/>

Then in Object click <b>Add Object</b>, add a <b>Contact</b>, select <b>when a record is created or edited</b> and click Save.

<img src="/assets/img/tutorials/salesforce/object.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the Choose Object and specify when to start the process window."/>

Then click on <b>Add Criteria</b> and fill in the following fields:

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

In the table of <b>Set Conditions</b> 

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

With this we ensure that the contact has Modyo ID, click <b>Save</b> and on <b>IMMEDIATE ACTIONS
</b> click on <b>Add Action</b> with the following data:

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

<img src="/assets/img/tutorials/salesforce/action.png" style="border: 1px solid rgb(238, 238, 238);max-width: 650px;margin: auto 0;" alt="Image showing the select and define action window."/>

Click on <b>Activate</b>.

## Conclusion

Congratulations! You have finished the tutorial, in order to test that everything is OK, we need to create a user by filling in the required fields (First Name, Last Name, Email and Modyo ID).

To find a user's Modyo ID, query the realm's users API at `[account.url]/api/admin/customers/{realm_uid}/users` and copy the user's `id` field, an integer such as `2332`. You can search for the user by email with the `query` parameter. Don't confuse it with the identifier shown in the user's URL in the Modyo admin: that's the user's `uuid`, something like `987eb795-9476-49f7-b511-efb5ba3f07de`, not their `id`.