---
search: true
---

# Administration API

In addition to the features provided by Modyo Platform, it also comes with an administrative API. It allows you, to access different actions such as listing, creating, and deleting elements such as forms, layouts, content, custom fields, navigation menus, email campaigns, among others in an authenticated, external way.

In this way, it is possible to carry out administrative tasks by consuming the API and without relying on the Modyo interface, which gives you greater freedom to control your work.

:::danger Danger
It is important to ensure that the API portal is not publicly exposed to the Internet. Calls to the APIs should be made from a secure environment using appropriate security protocols (HTTPS) and authentication tokens should not be shared.
:::

## General Information

To start benefiting from the Modyo API, it is important to first know which services are available to you, the operations that can be invoked, and how to use them.

Modyo facilitates this task by describing its _headless_ API using Swagger (also known as the OpenAPI specification) in lists of services grouped according to their role: administrative, public content, and user profile.

You can access the OpenAPI documentation through the following URLs:

```http
https://[account_host]/api/admin/docs
https://[account_host]/api/content/docs
https://[account_host]/api/customers/docs
```

For example, the public content API details can be found in the following path:

```http
https://[account_host]/api/content/docs
```
Thus, the public Swagger documentation for the Content API for the account https://un.modyo.test can be found at https://un.modyo.test/api/content/docs.

In each page you will find the details of the different resources that Modyo provides and the different operations you can perform on them.

For example, the Administrative API (/api/admin/docs) shows different sections, such as “Locks”, “Layout pages”, “Email templates”, or “Content”. If you focus on the latter, you see that it has a list of operations that it performs on the Modyo Content module, we are going to focus on Spaces:

```http
Content

...
GET /content/spaces Spaces List
POST/content/spaces Create a space
...
```

The list shows for each operation the HTTP method, the route, and the description of what it does.

### Parts of a call

For example, when making a call to `/content/spaces`, you will get a response from the server. The `body` of this `response` is a JSON object that contains an element called “spaces”, which corresponds to an `array` of elements of this type.

It also contains metadata referring to the `response`, which includes data such as the total entries that satisfy this query (`total_entries`), the maximum number of entries or items returned for each `request` (` per_page`), the current "window" of data or current page (`current_page`), and the total pages (`total_pages`). With this you can easily browse the data of a particular service by passing the required parameters.

With this data, you can easily traverse the data of a given service by passing the required parameters.

Each API also has a list of possible _responses_ that you get by invoking these methods, so that you can properly prepare your application to handle the data.

### Example Value

Within the __Response__ section, in **Example Value** you get an example of listing spaces when the answer is 200:     

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

When you click on **Model**, you will see the JSON structure that makes up the response, the various fields, their data types, example values, set of possible values where applicable, and format of the parameters (`string`, `integer`, `boolean`, etc).

Additionally, possible cases of failure that may occur are shown, in order to control them properly.

### List of Models

At the end of the documentation, you will find a section called “Models” that contains all the models involved in the documentation. These allow you to explore the resources available and their attributes used in APIs.

The following code is a part of the model for **User** object:

```
User{
schemas     [...]
id          string example: 2441309d85324e7793ae
externalId  string example: 2441309d85324e7793ae
meta          string example: OrderedMap { "resourceType": "User", "created": "2018-03-27T19:59:26.000Z", "lastModified": "2018-03-27T19:59:26.000Z" }
userName      string example: Test_User_dfeef4c5-5681-4387-b016-bdf221e82081
name          string example: OrderedMap { "familyName": "familyName", "givenName": "givenName" }
active      string
example:    true
emails      [...]
}
```

## Calling the API

Once you know the service you will be querying according to [Exploring the API](/en/platform/core/api.html#exploring-the-api) and a [Authentication](/en/platform/core/api.html#authentication) method, you can make a _request_ to the URL of the requested resource.

For this example, we'll get the list of all email campaigns that were created on the platform. According to the documentation in Swagger _ (test.modyo.com/api/admin/docs) _, you need to call the following URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```
This service accepts parameters via URL to filter by type (`mailing` and `notification`) using the `type` parameter. It allows you to include only campaigns that have _deliveries_ (`filtered` parameter) or require only a short list of attributes to be included in the _response_ (`only` parameter).

#### Call using cURL

For example, if you only want to include campaigns of type `mailing` (`type=mailing`) and an authentication token in the _request_, it would look something like this:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

When calling the service, we will get an `HTTP 200 OK` and the _response_ will contain a JSON object that looks as follows:

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

#### Call using the Swagger portal

1. Open your API portal in your browser. (e.g. https://un.modyo.test/api/admin/docs)
2. In Campaigns, expand the **Campaign List** call.
3. Here you can refine the search parameters of the call. Click **Execute**.
4. In the **Response** section, you will be able to see the following:
- How to run the same command using cURL
- The Request URL
- The response of the Modyo platform.

The JSON response corresponds to a list (or collection) of mail campaigns (`campaigns`) and the attributes of each object in the collection contain information relevant to the queried resource. In the example, the name of the campaign (`name`), the last date it was sent (`last_sent`), or whether this campaign was targeted or not (`segments_enabled`).

Apart from the list, you can also see an object called `meta` which contains information about the pagination of this resource.

Continuing with the exercise, we can use the data obtained in the previous consultation to obtain more information. For example, we might be interested in the number of times that a particular campaign was executed (Campaign Deliveries) by using the ID of that particular campaign. To do this, you can go back to the "catalog" of services where you will find the following _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries   Campaign deliveries list
```

In this way, a _request_ can be made to view the information specific to the _campaign deliveries_ of the campaign called “Test campaign 01", passing in the `campaign_id` parameter the corresponding campaign ID (in this case it is `15`):

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/campaigns/15/deliveries -H 'Authorization: Bearer 8c280c01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
```

Similar to the previous example, the _response_ will look like this

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

The _response_ is a JSON object that contains a list of _deliveries_ of mail campaigns (`deliveries`). In the example, you can verify that the campaign with ID `15` has been executed only once, the execution has already ended successfully (its `status` is` completed`) and was received by 1078 people (`sent_count` attribute).

Following this example, you can use Modyo's extensive catalog of services and build your application in the way that best suits your needs.

## Authentication

To use Modyo API, it is required to authenticate the user who will be invoking the different services.

Modyo provides 2 possible authentication methods to invoke the API:

* Bearer Token
* Admin session cookie

We will explain how to use each of these methods below.

### Bearer Token

The first thing you need to do is register the application to consume the API. Follow these steps to create a new Bearer Token:

1. From the Modyo platform, in the side menu, expand **Settings** and click **Access to API**.
2. Click the **+ New API Access** button.
3. Fill in the name, description, and redirect URI of the access.

When saving the information of your application, Modyo will show you a view where you will see the _callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and the _Application ID_ and _Secret_ fields that you can use later.

:::warning Warning
Keep in mind that when you sign out of any of your sites, a _GET_ will be made to all the logout URLs of your API access apps, which could result in some unwanted redirects if a careless URL is used in that field.
:::

4. Once the application is registered, it assigns the application to the users who will make use of the API. To do this, in the side menu, expand **Settings** and click on **Team**.
5. Select a user with an administrative role within the desired application. 

For more details, see [Users and Roles](/en/platform/core/roles.html)

6. In the admin user edit view, click _API Access_ and select the option **+ New API Access**.

7. In the _popup_ shown below, select the name of the application you just created, and then click **+ New Access Token**.

:::warning Warning
You should keep in mind that admin users can only execute actions through the Modyo administrative API if they have the necessary permissions. For example, an administrator with the role of "Developer" on a site cannot execute the "Publish" action on that site.
:::

Finally, you will now see that in the “Manage Access Tokens” section, the application (“My application”) will appear, along with a value highlighted in red which corresponds precisely to the _access token_, and which you will then use to perform authenticated _requests_ in Modyo API.

Well done! Now that you have created your token, you can start benefiting from the wide range of options provided by the Modyo Administration API. For example, if you want to see a list of available roles for admin users, you can perform a _request_ to the `/api/admin/roles` _endpoint_, including in the HTTP _header_ the value of the previously obtained _access token_ for the _"Authorization: Bearer"_ field:

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

The response obtained from the service is an `HTTP 200 OK` and contains the information of the roles in its _response_ in JSON format:

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

What happens if someone tries to make a _request_ to the API without having a valid token? If you try to make a call without authenticating or with an invalid token, the system will respond with an `HTTP 401 Unauthorized` error:

```shell
curl GET https://test.modyo.com/api/admin/roles -v

> GET /api/admin/HTTP roles/1.1
> Host: test.modyo.com
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
....
```

### Admin session cookie

If you are using Modyo from a web browser and are logged in as an administrator, then you will be able to access API URLs from the same browser. You can make _requests_ simply by having the session cookie in your browser.

Remember that you will only be able to access the same sections of the API that you are allowed to access from the Modyo interface.

## Pagination

When it comes to APIs, sometimes the number of results of a query is too high to be human-readable. In order to improve the understanding of this data, you can use **pagination**.

Imagine that we now want to review the complete list of mails delivered to customers (`message deliveries`) of a particular mail campaign (`campaign`) and a specific campaign delivery (`campaign delivery`). With the data obtained from the _requests_ in the previous sections, we can use the _endpoint_ that lists the _message deliveries_, passing in the corresponding `campaign_id` and` delivery_id` as parameters:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```
For example, take a look at the _response_ from this call:

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
As you can see, the ``message_deliveries`` object within the JSON contains a list of 10 elements, each representing a _message delivery_ or specific delivery of a campaign email to a given user, and each object has attributes relevant to this concept, such as the customer's name and email or the date it was sent. Where are the other records? Resource pagination is an important part of making use of APIs.

The `meta` object contains the information you need to be able to traverse a large number of records, through small groups of records or pages.

The 4 attributes are the following:

* `total_entries`: The total number of items of the requested resource
* `per_page`: The number of items that will be delivered per page
* `current_page`: The current data window
* `total_pages`: The total number of pages or groups of elements that we can request.

In the example above, apart from having the first 10 records, there are a total of 1078 entries, grouped into 108 pages. If you want to get the second page of this data, you need to add the `page` parameter with a value equal to 2 to the cURL call. To modify the number of records per page, add the `per_page` parameter with the desired value.

For example, let's get page 30, but this time with the _message deliveries_ grouped into pages of 5 elements:

```shell script
curl -X GET https://test.modyo.com/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

This gives us the following result:

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
        "current_pag": 30,
        "total_pages": 216
    }
}
```

Finally, the API will always return the first page (`current_page: 1`) of resources grouped by 10-item pages (`per_page: 10`) by default.

## Logs

With the Logs API you can get all the logs that happen inside Modyo Platform, you can choose between User or Administrator logs. If you want to consult the User logs, use:  

```shell script
curl -X GET https://test.modyo.com/api/admin/logs?user_type=User"   -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

This query gets the following results and displays them as a JSON:

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

If you want to know the administrator records, change the user type to: `user_type=AdminUser`.

To learn more about how to query Content information via API, see our guide and examples at [API](/en/platform/content/public-api-reference).
