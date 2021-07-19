---
search: true
---

# Administration API

In addition to the functionality that is provided by the Modyo Back End, the platform has an administrative API that, when authenticated, gives you external access to different actions such as listing, creating and deleting elements such as forms, layouts, content, etc. You can also create custom fields, navigation menus, send email campaigns, among others.

In this way, it is possible to perform administrative tasks consuming the API without having to depend on the Modyo interface, which gives you greater freedom to control the way you work with Modyo.

## Exploring the API

To start benefiting from the Modyo API, it is important to first know which services are available to you, the operations that can be invoked and how to use them.

Modyo facilitates this task, making the description of your _headless_ API available through the use of Swagger (which in turn implements the OpenAPI specification) in lists of services grouped according to their functionality: administrative functions, public content and user profile.

Each list of services is automatically displayed in your Modyo account by visiting the corresponding URL with your browser.

For example, you can find the details of the public content API in the following route:

```http
https://[account_host]/api/content/docs
```
In this way, the public Swagger documentation of the public content API corresponding to the https://un.modyo.be account is found at https://un.modyo.be/api/content/docs. Likewise, the corresponding documentation for administrative functions and the user profile can be found respectively in:

```http
https://[account_host]/api/admin/docs
https://[account_host]/api/profile/docs
```

In each documentation view you will find the details of the different resources that Modyo provides and the different operations you can perform on them.

For example, the Administrative API (/api/admin/docs) displays different sections, such as "Locks", "Layout pages", "Email templates" or "Segments". If we focus on the latter, we can see that this section has a list of operations that we can perform on the segments of the application:

```http
Segments

GET      /segments                Segments List
POST     /segments                Create a segment
PUT      /segments/{id}           Update a segment
DELETE   /segments/{id}           Delete a Segment
POST     /segments/apply_filters  Create a temporary segment
POST     /segments/count_matches  Create a temporary segment, and return the total number of matching users
```
The list shows us the HTTP method for each operation, the route and the description of what
it does.

If we click on any of these methods, like "Segments List", it shows us a description of the parameters that can be used when invoking it (in this case `query`,` sort_by` and `order`), its data types and a field to enter a test value for each parameter.

Additionally, you can call the API directly from Swagger filling in the parameters described earlier and then clicking on "Execute". This will invoke the API and deliver the result in the same view.

In our example, the view will invoke the URL `https://[account_host]/api/admin/segments` with GET and will show us the JSON response to this _request_:

```json
{
  "segments": [
    {
      "id": 4,
      "uuid": "46a80345-6e27-4262-9ea3-7e2f4e9af26a",
      "name": "Hombres",
      "filters_summary": "Gender Male",
      "matches_count": 1234,
      "created_at": "2018-08-09T16:11:25.000-03:00",
      "updated_at": "2018-08-09T16:11:25.000-03:00"
    },
    {
      "id": 3,
      "uuid": "35fe710e-6f01-4f06-bba2-b44fa13d3ee3",
      "name": "Mujeres",
      "filters_summary": "Gender Female",
      "matches_count": 4532,
      "created_at": "2018-06-04T17:20:39.000-03:00",
      "updated_at": "2018-06-04T17:20:39.000-03:00"
    },
    {
      "id": 2,
      "uuid": "cd72f535-6df0-4ebf-b4e3-9649ac02a144",
      "name": "Segment mobile users",
      "filters_summary": "Login Device Mobile",
      "matches_count": 4413,
      "created_at": "2018-06-04T17:20:21.000-03:00",
      "updated_at": "2018-06-04T17:20:21.000-03:00"
    },
    {
      "id": 1,
      "uuid": "6c30c2a6-8db4-4580-8ede-2a913c8a1b6b",
      "name": "Segment 01",
      "filters_summary": "Age between 18 and 65",
      "matches_count": 1023,
      "created_at": "2018-06-04T17:20:05.000-03:00",
      "updated_at": "2018-06-04T17:20:05.000-03:00"
    }
  ],
  "meta": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

As you can see, the `body` of this` response` is a JSON object containing an element called "segments", which corresponds to a list (`array`) of elements of this type.

It also contains metadata referring to the `response`, which includes data such as the total entries that satisfy this query (`total_entries`), the maximum number of entries or items returned for each `request` (` per_page`), the current "window" of data or current page (`current_page`) and the total pages (`total_pages`). With this data you can easily browse the data of a particular service just by passing in the required parameters.

 Each of the sections also has a list of possible _responses_ that you will get when you invoke the corresponding method, so that you can properly prepare your application to handle the data.


Also each of the sections has a list of possible _responses_ that you get by invoking these methods, so that you can properly prepare your application to handle the data.

For the previous example, we can check the _response_ with the list of segments we get when the answer is 200:

```json
{
  "segments": [
    {
      "id": 0,
      "uuid": "string",
      "name": "string",
      "filters_summary": "string",
      "matches_count": 0,
      "created_at": "2019-11-19T20:19:17.152Z",
      "updated_at": "2019-11-19T20:19:17.152Z"
    }
  ]
}
```

Each of the sections also has a list of possible `responses` that you will get when you invoke the corresponding method, so that you can properly prepare your application to handle the data `model`.

 This will return JSON structure of the answer, the different fields, their data types, example values, set of possible values (where appropriate) and format of the texts (`date-time`,` ipv4`, `email`, etc).

Additionally, possible cases of failure that may occur are shown, in order to control them properly.

For example, if we try to find a resource that does not exist:

```http
404            Not found
```

Finally, in each of the three catalogs (admin, content and profile), you will find a section
called "Models", which contains the models involved in the services, and will allow you to better understand the available resources and their attributes.


## Using the API


### Authentication

To use the Modyo API, it is first necessary to authenticate the user who will be invoking the different services.

Modyo provides 2 possible authentication methods to invoke the API:

* Bearer Token
* Admin session cookie

We will explain how to use each of these methods below.

#### Bearer Token

The first thing you must do is register your application to consume the API. To do this, you can access the _Settings_/_API access_ section in the administrative menu and click on the **+ New** button.

In the next view you can name your application (in our example we will call it "My application") and a description to distinguish it from other applications. You must also enter a redirection URL and a session logout URL, which will be invoked when a user's session is closed.

![New API Access](/assets/img/platform/new-API-access.png)

When saving the information of your application, Modyo will show you a view where you will see the _callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and the _Application ID_ and _Secret_ fields that you can use later.

![New API Access](/assets/img/platform/save-API-access.png)

:::warning Warning
Keep in mind that when you sign out of any of your sites, a _GET_ will be made to all the logout URLs of your API access apps, which could result in some unwanted redirects if a careless URL is used in that field.
:::

Once your application is registered, you can assign that application to the user or users that will make use of the API. For this, you must access the _Settings_/_Team_ section of the menu and select an existing user or create a new one. This user must have an administrative role within the application (for more details refer to [Users and Roles section](/en/platform/core/roles.html)).

In the edit view of the administrator user, you can click on the _API Access_ tab and select the `+ New Access Token` option.

![Team Member API Access 1](/assets/img/platform/team-member-API-access-1.png)

In the _popup_ shown below, select the name of the application we just created, in our example "My application", and then `Create Token`.

![Team Member API Access 2](/assets/img/platform/team-member-API-access-2.png)

:::warning Attention
You should keep in mind that administrative users can only execute actions through the Modyo administrative API if they have the necessary permissions. For example, an administrator with the role of "Developer" on a site cannot execute the "Publish" action on that site.
:::

Finally, you will now see your application ("My application") in the "Manage Access Tokens", along with a highlighted value in red which corresponds to the _access token_ that you will need to use to perform authenticated _requests_ with the Modyo API.

![Team Member API Access 3](/assets/img/platform/team-member-API-access-3.png)

All done! Now that you have created your token, you can start benefiting from the wide range of options provided by the Modyo Administrative API. For example, if you want to see a list of available roles for administrative users, you can perform a _request_ to the `/api/admin/roles` _endpoint_, including in the HTTP _header_ the value of the previously obtained _access token_ for the _"Authorization: Bearer"_ field:

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

And what happens if someone tries to make a _request_ to the API without having a valid token? If you try to make a call without authenticating or with an invalid token, the system will answer with an `HTTP 401 Unauthorized` error:

```shell
curl  GET https://modyodev.modyo.me:3000/api/admin/roles -v

> GET /api/admin/roles HTTP/1.1
> Host: modyodev.modyo.me:3000
> User-Agent: curl/7.54.0
> Accept: */*
>
< HTTP/1.1 401 Unauthorized
....
```

#### Admin session cookie

If you are using Modyo through a web browser and you are logged in as an administrator, then you can access API URLs from the same browser, and make _requests_ simply by having a session cookie from the administrative part of the platform.

Remember that you can only access the sections of the API that you are allowed to access in the Modyo interface.

### Invoking services

Once you know which service you need to access, according to what we saw in the [Exploring the API](/platform/core/api.html#exploring-the-api) section and when you have a valid authentication method (refer to [Authentication section](/platform/core/api.html#authentication)), you can make a _request_ to the URL of the required resource.

For example, let's imagine that you need to get a list of all the email campaigns you have created. According to the available Swagger documentation, you can know that you need to call the following URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```
This service accepts parameters via URL to filter by type (`mailing` and` notification`) using the `type` parameter. You can choose to only include campaigns that have _deliveries_ (parameter` filtered`) or only request a list of attributes that should be included in the _response_ (parameter `only`).

For the following example, we only include campaigns with the type set to `mailing` (` type=mailing`), so that our _request_, after including the necessary authentication headers, is as follows:

``` shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
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

This JSON response corresponds to a list (or collection) of email campaigns (`campaigns`) and the attributes of each object has relevant information related to that object. In our example you can see the campaign name (`name`), the last date it was sent (` last_sent`) and whether this campaign was segmented or not (`segments_enabled`).

Apart from the list, you can also see an object called `meta` which contains information about the pagination of this resource.

Continuing with the exercise, we can use the data obtained in the previous consultation to obtain more information. For example, we might be interested in the number of times that a particular campaign was executed (Campaign Deliveries) by using the ID of that particular campaign. To do this, you can go back to the "catalog" of services where you will find the following _endpoint_:

```http request
GET /messaging/campaigns/{campaign_id}/deliveries Campaign deliveries list
```

This way, you could perform a _request_ to see the _campaign deliveries_ information of a campaign called "Test campaign 01" by passing in the `campaign_id` parameter corresponding to the campaign ID (which in this case is `15`):


```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns/15/deliveries  -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
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

As you can see, the _response_ is nothing more than a JSON object that contains a list of _deliveries_ of mail campaigns (`deliveries`). In the example, you can verify that the campaign with ID `15` has been executed only once, the execution has already ended successfully (its `status` is` completed`) and was received by 1078 people (`sent_count` attribute).

Following this example, you can use Modyo's extensive catalog of services and build your application in the way that best suits your needs.

### Working with data collections: Pagination

In the examples shared throughout the previous sections, we could see that the amount of results in many calls is so large that they must be delivered in a parcel form so that they can be used efficiently and in an orderly fashion. We call this organized and limited delivery of results **pagination**.

Imagine that we now want to review the complete list of mails delivered to customers (`message deliveries`) of a particular mail campaign (` campaign`) and a specific campaign delivery (`campaign delivery`). With the data obtained from the _requests_ in the previous sections, we can use the _endpoint_ that lists the _message deliveries_, passing in the corresponding `campaign_id` and` delivery_id` as parameters:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```
Let's analyze the corresponding _response_ of this call below:

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
As you can see, the `` message_deliveries`` object within the JSON contains a list of 10 elements, where each represents a _message delivery_ or concrete delivery of a campaign email to a specific user. Each object also has relevant attributes like the customer's name and email or the date it was sent. But where are the other records? This is where the pagination of resources plays a very important role and you will have to pay attention to the `meta` object within the JSON response.

The `meta` object contains the information you need to be able to traverse a large number of records, through small groups of records or pages.

The 4 attributes we have are the following:

* `total_entries`: The total number of items of the requested resource
* `per_page`: The number of items that will be delivered per page
* `current_page`: The current data window
* `total_pages`: The total number of pages or groups of elements that we can request.

In the previous example, apart from having the first 10 records, we already know for the next _requests_ that there are a total of 1078 entries, grouped into 108 pages. If we want to get the second page of this data, for example, we just need to add the `page` parameter with the value set to 2 and call the same URL again. To modify the number of records by page, just add the `per_page` parameter with the desired value.

For example, let's get page 30, but this time with the _message deliveries_ grouped into pages of 5 elements:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5  -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

What gives us the following response:

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

To finish, remember that the API will always return the first page (`current_page: 1`) with resources grouped into pages of 10 elements (` per_page: 10`) by default.
