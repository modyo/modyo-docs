---
search: true
---

# Administration API

In addition to the functionality provided by the Modyo platform, it has an administrative API. It allows you to access various actions externally and authenticated, such as listing, creating and deleting elements like forms, layouts, content, custom fields, navigation menus, email campaigns, among others.

This way, it is possible to perform administrative tasks by consuming the API without depending on the Modyo interface, giving you greater freedom to control your work.

:::warning Permissions
The API Key generated for a user will inherit the same permissions that the user has on the administration console.
:::

## General Information

To start taking advantage of the Modyo API, it is first important to know the available services, the operations that can be invoked, and how to use them.

Modyo facilitates this task by providing the description of its _headless_ API through the use of Swagger (also known as OpenAPI specification) in lists of services grouped according to their function: administrative, public content, and user profile.

You can access the OpenAPI documentation through the following URLs:

```http
https://[account_host]/api/admin/docs
https://[account_host]/api/content/docs
https://[account_host]/api/customers/docs
```

For example, you will find the public Content API details at the following path:

```http
https://[account_host]/api/content/docs
```

This way, the public Swagger documentation for the Content API of the account https://un.modyo.test is found at https://un.modyo.test/api/content/docs.

In each documentation view, you will find the details of the different resources that Modyo provides and the operations you can perform on them.

For example, in the Administrative API (/api/admin/docs) different sections are shown, such as "Locks", "Layout pages", "Email templates" or "Content". If you focus on the latter, you can see that it has a list of operations it performs on the Modyo Content module. We will focus on just some calls to Spaces:

```http
Content

...
GET    /content/spaces   Spaces List
POST   /content/spaces   Create a space
...
```

The list shows for each operation the HTTP method, the path, and a description of what it performs.

### Parts of a Call

For example, when making a call to `/content/spaces`, you will get a response from the server. The `body` of this `response` is a JSON object containing an element called "spaces", which corresponds to a list (`array`) of elements of this type.

It also contains metadata referring to the `response`, which includes data such as the total number of entries that satisfy this query (`total_entries`), the maximum number of entries or elements returned per `request` (`per_page`), the current "window" of data or current page (`current_page`) and the total pages (`total_pages`).

With this data you can easily navigate through the data of a given service by passing the required parameters.

Each API also has a list of possible _responses_ that you get when invoking these methods, so you can properly prepare your application to handle the data.

### Example value

Within the __Response__ section, in **Example Value** you get an example of a list of spaces when the response is 200:

```json
{
  "spaces": [
    {
      "id": 10,
      "name": "My new space",
      "uid": "my-new-space",
      "uuid": "3c808ef3-4390-416f-a042-a4829d88fbfd",
      "default_locale": "en",
      "locales": [
        "en",
        "es-cl",
        "es-mx"
      ],
      "team_review": false,
      "created_at": "2019-08-22T10:57:36.000-03:00",
      "content_types_count": 8,
      "entries_count": 245,
      "cors_enabled": false,
      "cors_allow_all": false,
      "cors_allowed_origins": "",
      "approvals_quantity": 1,
      "locked_review": false,
      "enforced_review": false,
      "enforce_all_review": false,
      "enforced_reviewers_attributes": [],
      "cache_max_age": 300,
      "cache_enabled": false
    }
  ],
  "meta": {
    "total_entries": 2,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

### Model

By clicking on **Model**, you will see the JSON structure that composes the response, the different fields, their data types, example values, set of possible values when applicable, and parameter format (`string`, `integer`, `boolean`, etc.).

Additionally, possible failure cases that may occur are shown so you can handle them appropriately.

### Model List

At the end of the documentation, you will find a section called "Models" that contains all the models involved in the documentation. These allow you to understand the available resources and their attributes used in the APIs.

The following code is part of the model for the **User** object:

```shell
User{
schemas	    [...]
id	        string example: 2441309d85324e7793ae
externalId	string example: 2441309d85324e7793ae
meta	      string example: OrderedMap { "resourceType": "User", "created": "2018-03-27T19:59:26.000Z", "lastModified": "2018-03-27T19:59:26.000Z" }
userName	  string example: Test_User_dfeef4c5-5681-4387-b016-bdf221e82081
name	      string example: OrderedMap { "familyName": "familyName", "givenName": "givenName" }
active	    string
example:    true
emails	    [...]
}
```

## Calling the API

Once you know the service you will query according to [Exploring the API](/en/platform/core/api.html#exploring-the-api) and an [Authentication](/en/platform/core/api.html#authentication) method, you can make a _request_ to the URL of the required resource.

For this example, we will obtain the list of all email campaigns that were created on the platform. According to the documentation in Swagger _(test.modyo.com/api/admin/docs)_, you need to call the following URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```

This service accepts URL parameters to filter by types (`mailing` and `notification`) through the `type` parameter. It allows you to include only campaigns that have _deliveries_ (parameter `filtered`) or request only a reduced list of attributes to be included in the _response_ (parameter `only`).

#### Call using cURL

For the example, we only want to include campaigns of type `mailing` (`type=mailing`), so the _request_, after adding the necessary authentication headers, would look like this:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

When invoking the service, you get an `HTTP 200 OK` and the _response_ that contains a JSON object that looks like this:

```json
{
	"campaigns": [{
		"id": 15,
		"name": "Test campaign 01",
		"uuid": "52dc64c2-8c31-4de1-b10c-0313ae6486f6",
		"type": "mailing",
		"sent_count": 1078,
		"last_sent": "2019-07-15T17:05:12.000-03:00",
		"segments_enabled": false,
		"segment_list": "--",
		"created_at": "2019-07-15T16:58:43.000-03:00"
	}, {
		"id": 11,
		"name": "Test campaing 02 Mar8 1546",
		"uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
		"type": "mailing",
		"sent_count": 6,
		"last_sent": "2019-03-11T15:17:20.000-03:00",
		"segments_enabled": true,
		"segment_list": "Test Mailing Mar08",
		"created_at": "2019-03-08T15:46:52.000-03:00"
	}, {
		"id": 6,
		"name": "campaign jan7 1210",
		"uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
		"type": "mailing",
		"sent_count": 327,
		"last_sent": "2019-01-07T16:53:33.000-03:00",
		"segments_enabled": true,
		"segment_list": "--",
		"created_at": "2019-01-07T12:10:22.000-03:00"
	}, {
		"id": 5,
		"name": "Spanish Campaign",
		"uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
		"type": "mailing",
		"sent_count": 0,
		"last_sent": null,
		"segments_enabled": false,
		"segment_list": "--",
		"created_at": "2019-01-02T15:59:06.000-03:00"
	}],
	"meta": {
		"total_entries": 4,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

#### Call using the Swagger Portal

1. Open your API portal in your browser. (e.g. https://un.modyo.test/api/admin/docs)
2. In the Campaigns section, expand the **Campaign List** call.
3. Here you can refine the search using the call parameters. Click **Execute**.
4. In the **Response** section, you can see the following:
- How to execute the same command using cURL
- The Request URL
- The response from the Modyo platform.

The JSON response corresponds to a list (or collection) of email campaigns (`campaigns`) and the attributes of each object in the collection contain information relevant to the queried resource. In the example, the campaign name (`name`), the last date it was sent (`last_sent`), or whether this campaign was segmented or not (`segments_enabled`).

Apart from the collection, you can see an object called `meta` that contains information about the pagination of this resource.

Continuing with the exercise, it is possible to use the data obtained in the previous query to get more information. For example, we may be interested in knowing the number of times a particular campaign was executed (Campaign Deliveries) with the ID of that campaign. For this, you can review the service catalog again, and you will find the following _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries   Campaign deliveries list
```

This way, you can make a _request_ to see the specific information of the _campaign deliveries_ of the campaign called "Test campaign 01", passing the corresponding campaign ID in the `campaign_id` parameter (in this case it is `15`):

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns/15/deliveries  -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
```

Similar to the previous example, the _response_ will look like this:

```json
{
	"deliveries": [{
		"id": 29,
		"uuid": "b728b957-78e5-4e2d-b28d-8e699a665a2c",
		"campaign_id": 15,
		"starts_at": "2019-07-15T17:05:12.000-03:00",
		"ends_at": "2019-07-15T17:05:20.000-03:00",
		"sent_count": 1078,
		"reach": -1,
		"status": "completed",
		"segment_list": "--"
	}],
	"meta": {
		"total_entries": 1,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

As you can see, the _response_ is nothing more than a JSON object containing a list of email campaign _deliveries_ (`deliveries`). In the example, we verify that the campaign with ID `15` was executed only once, it has already completed successfully (its `status` is `completed`) and was received by 1078 people (`sent_count` attribute).

Following this example, you can use Modyo's extensive catalog of services and build your application in the way that best suits your needs.

## Authentication

To use the Modyo API, it is first necessary to authenticate a specific user who will make the invocation to the different services.

Modyo provides 2 possible authentication methods to invoke the API:

- Bearer Token
- Admin session cookie

Below, we explain how to use each of these methods.

### Bearer token

The first thing you must do is register the application to consume the API. Follow these steps to create a new Bearer Token:

1. From the Modyo platform, in the side menu, expand **Settings** and click on **API Access**.
2. Click the **New API Access** button.
3. Fill in the name, description, and redirect URI of the access.

When saving the application information, Modyo will show a view where you will see the _callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and also the _Application ID_ and _Secret_ fields that you can use later.

:::warning Attention
Keep in mind that when you log out of any of your sites, a _GET_ will be made to all logout URLs of your API access applications, which could generate some unwanted redirects if a URL is used carelessly in that field.
:::

4. Once the application is registered, assign the users who will use the API to the application. To do this, in the side menu, expand **Settings** and click on **Team**.
5. Select a user with an administrative role within the desired application.

For more details, go to [Users and Roles](/en/platform/core/roles.html)

6. In the administrator user's edit view, click on _API Access_ and select the **New API Access** option.

7. In the _popup_ that appears next, select the name of the application you just created and then click **New Access Token**.

:::warning Attention
Keep in mind that administrative users will only be able to execute actions through the Modyo administrative API if they have the necessary permissions to perform each action. For example, an administrator with the "Developer" role on a site will not be able to execute the "Publish" action on that site.
:::

Finally, you will now see that in the "Manage Access Tokens" section the application ("My application") will appear, along with a value highlighted in red which corresponds precisely to the _access token_, which you will use next to make authenticated _requests_ on the Modyo API.

Ready! With the token already created, you can start taking advantage of all the options provided by the Modyo Administrative API. For example, if you want to see a list of available administrative user roles, you can make a _request_ to the _endpoint_ `/api/admin/roles`, including in the HTTP _header_ _"Authorization: Bearer"_ the value of the _access token_ obtained previously:

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

The response obtained from the service is an `HTTP 200 OK`, and contains the role information in its _response_ in JSON format:

```json
{
	"roles": [{
		"id": 65,
		"key": "space_writer",
		"name": "Writer",
		"context": "space",
		"read_only": true,
		"restorable": true,
		"users_count": 0,
		"created_at": "2019-07-09T17:15:14.000-03:00"
	}, {
		"id": 66,
		"key": "space_editor",
		"name": "Editor",
		"context": "space",
		"read_only": true,
		"restorable": true,
		"users_count": 1,
		"created_at": "2019-07-09T17:15:14.000-03:00"
	}],
	"meta": {
		"total_entries": 2,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 1
	}
}
```

#### Unauthenticated requests

What happens if someone tries to make a _request_ to the API without having a valid token? If you try to make a call without authentication or with an invalid token, the system will respond with an `HTTP 401 Unauthorized` error:

```shell
curl  GET https://test.modyo.com/api/admin/roles -v

> GET /api/admin/roles HTTP/1.1
> Host: test.modyo.com
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
....
```

### Admin session cookie

If you are using Modyo from a web browser and have a session started as an administrator, then you can access the API URLs from the same browser. You will be able to make _requests_ simply by having the session cookie in the administrative part of the platform.

Remember that you will only be able to access the same sections of the API that you are allowed to access from the Modyo interface.

## Pagination

When it comes to APIs, sometimes the amount of results from a query is too high to be efficient and organized. To improve the understanding of this data by a person, you can make use of **pagination**.

If you want to review the complete list of customer mail deliveries (`message deliveries`) from a given mail campaign (`campaign`) and a given campaign send execution (`campaign delivery`). With the data obtained in the _requests_ from the previous sections, you can use the _endpoint_ that lists the _message deliveries_, passing as parameters the corresponding `campaign_id` and `delivery_id`:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

For example, when viewing the corresponding _response_ of this call:

```json
{
	"message_deliveries": [{
		"id": 1506,
		"user_name": "Samuel L. Jackson",
		"user_email": "contact@mrjackson.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1505,
		"user_name": "John Travolta",
		"user_email": "john.travolta@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1504,
		"user_name": "Al Pacino",
		"user_email": "mr.pacino@globalmovies.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1503,
		"user_name": "Silvester Stallone",
		"user_email": "stallone.54@gmail.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1502,
		"user_name": "Linda Hamilton",
		"user_email": "hamilton@hamilton.co",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1501,
		"user_name": "Sigourney Weaver",
		"user_email": "contact@weaverproductions.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1500,
		"user_name": "Mark Hamill",
		"user_email": "hamillhimself@modyo.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1499,
		"user_name": "Anthony Daniels",
		"user_email": "bep.bep@daniels.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1498,
		"user_name": "Harrison Ford",
		"user_email": "ford@harrisonford.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}, {
		"id": 1497,
		"user_name": "Meryl Streep",
		"user_email": "meryl@representationms.com",
		"type": "admin.messaging.mail",
		"sent_at": "2019-07-15T17:05:20.000-03:00",
		"opened": false,
		"delivery_id": 29,
		"campaign_name": "Test campaign 01",
		"delivery_start_date": "2019-07-15T17:05:12.000-03:00"
	}],
	"meta": {
		"total_entries": 1078,
		"per_page": 10,
		"current_page": 1,
		"total_pages": 108
	}
}
```

As you can see, the `message_deliveries` object within the JSON contains a list of 10 elements, where each one represents a _message delivery_ or specific delivery of a campaign email to a specific user, and each object has attributes relevant to this concept, such as the customer's name and email or the date it was sent. Where are the other records? Resource pagination is an important part when using APIs.

The `meta` object contains the relevant information to be able to navigate through a large number of records, through small groups of records or pages.

The 4 attributes are:

- `total_entries`: The total number of items of the queried resource
- `per_page`: The number of items that will be delivered per page
- `current_page`: The current window of data
- `total_pages`: The total pages, or groups of elements that you can query.

In the previous example, apart from having the first 10 records, there are a total of 1078 entries, grouped into 108 pages. If you want to get the second page of this data, you need to add the `page` parameter with a value equal to 2, invoking the URL again. To modify the number of records per page, add the `per_page` parameter with the desired value.

For example, if you want to get page 30, but this time with the _message deliveries_ grouped in pages of 5 elements:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

Which returns a response like the following:

```json
{
	"message_deliveries": [{
		"id": 1341,
		"user_name": "Test user 868",
		...
	}, {
		"id": 1342,
		"user_name": "Test user 869",
		...
	}, {
		"id": 1343,
		"user_name": "Test user 870",
		...
	}, {
		"id": 1344,
		"user_name": "Test user 871",
		...
	}, {
		"id": 1345,
		"user_name": "Test user 872",
		...
	}],
	"meta": {
		"total_entries": 1078,
		"per_page": 5,
		"current_page": 30,
		"total_pages": 216
	}
}
```

Finally, the API will always return the first page (`current_page: 1`) of resources grouped by pages of 10 elements (`per_page: 10`) by default.

## Logs

With the Logs API you can get all the records that happen within Modyo Platform, you can choose between User or Administrator logs. If you want to query User logs, use:

```shell script
curl -X GET https://test.modyo.com/api/admin/logs?user_type=User"   -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

This query obtained all the records and displays them in a JSON:

```json
{
  "logs": [
    {
      "id": 26826,
      "account_id": 4,
      "site_id": 0,
      "space_id": 0,
      "site_host": "string",
      "site_name": "string",
      "user": {
        "avatar": {
          "id": 100,
          "file_name": "user_avatar.png",
          "url_original": "https://test.modyo.com:3000/assets/avatar/user_avatar_original.png",
          "url_small": "https://test.modyo.com:3000/assets/avatar/user_avatar_small.png",
          "url_medium": "https://test.modyo.com:3000/assets/avatar/user_avatar_medium.png"
        },
        "id": 344,
        "name": "Sam Johnson",
        "first_name": "Johnson",
        "last_name": "Sam",
        "email": "sam.johnson@modyo.com",
        "url": "https://test.modyo.com/admin/settings/admin_users/930d2b95-e34e-..."
      },
      "type": "Logs::TargetDeletedLog",
      "value_1": "string",
      "value_2": "string",
      "value_3": "string",
      "request_ip": "127.0.0.1",
      "request_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
      "title": "admin.logs.target_deleted_log.title",
      "description": "admin.logs.target_deleted_log.description",
      "loggeable_id": 15,
      "loggeable_type": "Targets::Target",
      "log_origin": "admin.loggeable_types.targets.target",
      "created_at": "2020-02-06T12:20:29.000-03:00",
      "options": "{\\\"title\\\":\\\"\\\"}",
      "log_key_user_action": "admin.logs.target_deleted_log.activity",
      "defaults": {
        "site_or_account": "<a href=\\\"https://test.modyo.com\\\">My Modyo</a>",
        "user": "<a href=\\\"https://test.modyo.com/admin/settings/admin_users/830d2b95-e74e-49b0-b5e9-6c6b90d66447\\\">Sam J.</a>",
        "loggeable": "string",
        "value_1": "string",
        "value_2": "string",
        "value_3": "string"
      }
    }
  ],
  "meta": {
    "total_entries": 2,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

If you want to know the administrator logs, change the user type to: `user_type=AdminUser`

To learn more about how to query Content information via API, see our guide and examples in [API](/en/platform/content/public-api-reference.html).