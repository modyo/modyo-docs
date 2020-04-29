---
search: true
---

# Administration API

In addition to the functionality that is provided by the Modyo Back End, the platform has an administrative API that allows, in an authenticated way, external access to different actions such as listing, creating and deleting elements such as forms, layouts, content, etc. , create custom fields, navigation menus, send email campaigns, among others. In this way, it is possible to perform administrative tasks consuming the API and without depending on the Modyo interface, which gives you greater freedom to control the way you work with Modyo.

## Exploring the API

To start taking advantage of the Modyo API, it is first important to know the services of
those available, the operations that can be invoked and how to use them. Modyo facilitates
This task, making the description of your headless API available through the use of Swagger (which in turn
implements the OpenAPI specification) in lists of services grouped according to their functionality:
administrative functions, public content and user profile.

Each list of services is automatically displayed in your Modyo account, to which you can
Access your browser by visiting the corresponding URL. For example, the public API detail
You will find content in the following route:

``` http
https://[account_host]/api/content/docs
```
In this way, the public Swagger documentation of the account's content API https://un.modyo.be is found
 at https://un.modyo.be/api/content/docs. Likewise, the documentation of administrative functions
 and you will find the user profile respectively in:
 
``` http
https://[account_host]/api/admin/docs
https://[account_host]/api/profile/docs
```

In each documentation view you will find the detail of the different resources that Modyo provides and
the different operations you can perform on them. For example, in the Administrative API (/api/admin/docs)
different sections are displayed, such as "Locks", "Layout pages", "Email templates" or "Targets". If we
we focus on the latter, we can see that this section has a list of operations that we can
perform on the targets of the application:

``` http
Targets

GET/Targets Targets List
POST/targets Create a target
PUT/targets/{id} Update a target
DELETE/targets/{id} Delete a Target
POST/targets/apply_filters Create a temporary target
POST/targets/count_matches Create a temporary target, and return the total number of matching users
```
The list shows us for each operation, the HTTP method, the route and the description of what
makes. If we click on any of these methods, for example "Targets List", it shows us
a section with the parameters that can be used when invoking it, in this case `query`,` sort_by` and
`order`, its data types and a field to enter a test value for each parameter. Additionally
we can consult the API directly from the view in Swagger completing the parameters before
described and then clicking on "Execute", which will invoke the API and deliver the result in the
same view. In the example, the view will invoke the URL `https://[account_host]/api/admin/targets` with
GET and will show us the response in JSON to this _request_:

``` json
{
  "targets": [
    {
      "id": 4,
      "uuid": "46a80345-6e27-4262-9ea3-7e2f4e9af26a",
      "name": "Men",
      "filters_summary": "Gender Male",
      "matches_count": 1234,
      "created_at": "2018-08-09T16: 11: 25.000-03: 00",
      "updated_at": "2018-08-09T16: 11: 25,000-03: 00"
    },
    {
      "id": 3,
      "uuid": "35fe710e-6f01-4f06-bba2-b44fa13d3ee3",
      "name": "Women",
      "filters_summary": "Gender Female",
      "matches_count": 4532,
      "created_at": "2018-06-04T17: 20: 39.000-03: 00",
      "updated_at": "2018-06-04T17: 20: 39,000-03: 00"
    },
    {
      "id": 2,
      "uuid": "cd72f535-6df0-4ebf-b4e3-9649ac02a144",
      "name": "Target mobile users",
      "filters_summary": "Login Device Mobile",
      "matches_count": 4413,
      "created_at": "2018-06-04T17: 20: 21.000-03: 00",
      "updated_at": "2018-06-04T17: 20: 21,000-03: 00"
    },
    {
      "id": 1,
      "uuid": "6c30c2a6-8db4-4580-8ede-2a913c8a1b6b",
      "name": "Target 01",
      "filters_summary": "Age between 18 and 65",
      "matches_count": 1023,
      "created_at": "2018-06-04T17: 20: 05.000-03: 00",
      "updated_at": "2018-06-04T17: 20: 05.000-03: 00"
    }
  ],
  "goal": {
    "total_entries": 4,
    "per_page": 10,
    "current_page": 1,
    "total_pages": 1
  }
}
```

As you can see, the `body` of this` response` is a JSON object contains an element called "targets",
which corresponds to a list (`array`) of elements of this type, and additionally contains metadata
referring to the `response`, which includes data such as the total entries that satisfy this
query (`total_entries`), the maximum number of entries or items returned for each
`request` (` per_page`), the current "window" of data or current page (`current_page`) and the total pages
 (`total_pages`). With this data you can easily browse the data of a particular service
 just by passing the required parameters.


Each of the sections also has a list of possible _responses_ that you will get at
invoke these methods, so that you can properly prepare your application to handle the data.
In the previous example, we can review the _response_ that is obtained from the list of targets when
The answer is 200:

``` json
{
  "targets": [
    {
      "id": 0,
      "uuid": "string",
      "name": "string",
      "filters_summary": "string",
      "matches_count": 0,
      "created_at": "2019-11-19T20: 19: 17.152Z",
      "updated_at": "2019-11-19T20: 19: 17.152Z"
    }
  ]
}
```

The above corresponds to what we call `Example Value`, and shows precisely an example of what
that we can expect to obtain, but we can also consult the corresponding model by clicking on
`model`, where we will see the JSON structure that composes the answer, the different fields, their data types,
example values, set of possible values where appropriate and format of the texts (`date-time`,` ipv4`, `email`, etc).

Additionally, possible cases of failure that may occur are shown, in order to control them properly.
For example, if we try to find a resource that does not exist:

``` http
404 Not found
```

Finally, in each of the three catalogs (admin, content and profile), you will find a section
called "Models", which contains the models involved in the services, and will allow you to better understand the available resources and their attributes.


## Using the API


### Authentication

To use the Modyo API, it is first necessary to authenticate a specific user
who will be the one to invoke the different services.

Modyo provides 2 possible authentication methods to invoke the API:

* Bearer Token
* Admin session cookie

The following explains how to use each of these methods.

#### Bearer Token

The first thing we must do is register our application to consume the API. For this,
in the administrative menu we will access the option _Settings _/_ API access_ and click on the **+ New** button.
In the following view, we will give our application a name (in our example "My application") and a description that distinguish it, and we must also enter a redirection URL and a session logout URL, which will be invoked at the end
A user's session.

![New API Access](/assets/img/platform/new-API-access.png)

When saving the information of our application, Modyo will show us a view where we will see the
_callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and also
the _Application ID_ and _Secret_ fields that we can use later.

![New API Access](/assets/img/platform/save-API-access.png)

::: warning Warning
Keep in mind that when you log out of one of your sites, a _GET_ will be made to all the logout URLs of your API access applications, which could generate some unwanted redirects if a URL is used No care in that field.
:::

With our application already registered, just assign that application to the user or users
that will make use of the API. For this, we must access the option _Settings _/_ Team_ in the menu and select
an existing user or create a new one, which must have an administrative role within the application
(for more details refer to [Users and Roles section](/en/platform/core/roles.html)). In the edit view of the
administrator user, we will access the _API Access_ tab and select the option `+ New Access Token`

![Team Member API Access 1](/assets/img/platform/team-member-API-access-1.png)

In the _popup_ shown below, select the name of the application we just created,
in our example "My application", and then `Create Token`

![Team Member API Access 2](/assets/img/platform/team-member-API-access-2.png)

::: warning Warning
You should keep in mind that administrative users can only execute actions through the Modyo administrative API if they have the necessary permissions to perform each action. For example, an administrator with the role of "Developer" on a site cannot execute the "Publish" action on that site.
:::

Finally, we will now see that in the "Manage Access Tokens" section our application ("My application") will appear, along with a highlighted value in red which corresponds precisely to the _access token_, and that
We will use below to perform authenticated _requests_ on the Modyo API.

![Team Member API Access 3](/assets/img/platform/team-member-API-access-3.png)

Ready! With our token already created, we can begin to take advantage of all the options that we
gives the Modyo Administrative API. For example, if we want to see a list of roles for users
administrators available, we can perform a _request_ to _endpoint_ `/api/admin/roles`, including in the
_header_ HTTP _ "Authorization: Bearer" _ the value of the _access token_ previously obtained:

``` shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56 '
```

The response obtained from the service is an `HTTP 200 OK`, and contains the information of the roles
in its _response_ in JSON format:

``` json
{
"roles": [{
"id": 65,
"key": "space_writer",
"name": "Writer",
"context": "space",
"read_only": true,
"restorable": true,
"users_count": 0,
"created_at": "2019-07-09T17: 15: 14.000-03: 00"
}, {
"id": 66,
"key": "space_editor",
"name": "Editor",
"context": "space",
"read_only": true,
"restorable": true,
"users_count": 1,
"created_at": "2019-07-09T17: 15: 14.000-03: 00"
}],
"goal": {
"total_entries": 2,
"per_page": 10,
"current_page": 1,
"total_pages": 1
}
}
```

And what happens if someone tries to make a _request_ to the API without having a valid token? If we try to make a call without authenticating or with an invalid token, the system will answer
with an `HTTP 401 Unauthorized` error:

``` shell
GET curl https://modyodev.modyo.me:3000/api/admin/roles -v

> GET/api/admin/roles HTTP/1.1
> Host: modyodev.modyo.me:3000
> User-Agent: curl/7.54.0
> Accept: */*
>
<HTTP/1.1 401 Unauthorized
....
```

#### Cookie session of admin

If you are using Modyo from a web browser, and you are logged in as an administrator, then you can access API URLs from the same browser, and make _requests_ simply by having the session cookie in the administrative part of the platform. Remember that you can only access the sections of the API that you are allowed to access from the Modyo interface.

### Invoking services

Once we know the service we need to consult, according to what we saw in the section
[Exploring the API](/en/platform/core/api.html # exploring-el-api), and that we have an authentication method
valid (refer to [Authentication section](/en/platform/core/api.html # authentication)), we can now
make a _request_ to the URL of the required resource. For example, let's imagine we need to get
A list of all the email campaigns we have created. According to the documentation in Swagger
available, we know we need to call the following URL:

``` http request
GET https://[account_host]/api/admin/messaging/campaigns
```
This service accepts parameters via URL to filter by type (`mailing` and` notification`) using the parameter
`type`, allows to include only campaigns that have _deliveries_ (parameter` filtered`) or require only a list
reduced attributes to be included in the _response_ (parameter `only`). For our example
We only want to include campaigns of type `mailing` (` type=mailing`), so that our _request_, after
include the necessary authentication headers, it would be as follows:

``` shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

When invoking the service, we will get an `HTTP 200 OK`, and the _response_ will contain a JSON object that
It looks as follows:

``` json
{
"campaigns": [{
"id": 15,
"name": "Test campaign 01",
"uuid": "52dc64c2-8c31-4de1-b10c-0313ae6486f6",
"type": "mailing",
"sent_count": 1078,
"last_sent": "2019-07-15T17: 05: 12,000-03: 00",
"targets_enabled": false,
"target_list": "-",
"created_at": "2019-07-15T16: 58: 43.000-03: 00"
}, {
"id": 11,
"name": "Test campaing 02 Mar8 1546",
"uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
"type": "mailing",
"sent_count": 6,
"last_sent": "2019-03-11T15: 17: 20,000-03: 00",
"targets_enabled": true,
"target_list": "Test Mailing Mar08",
"created_at": "2019-03-08T15: 46: 52.000-03: 00"
}, {
"id": 6,
"name": "campaign jan7 1210",
"uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
"type": "mailing",
"sent_count": 327,
"last_sent": "2019-01-07T16: 53: 33.000-03: 00",
"targets_enabled": true,
"target_list": "-",
"created_at": "2019-01-07T12: 10: 22.000-03: 00"
}, {
"id": 5,
"name": "Spanish Campaign",
"uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
"type": "mailing",
"sent_count": 0,
"last_sent": null,
"targets_enabled": false,
"target_list": "-",
"created_at": "2019-01-02T15: 59: 06.000-03: 00"
}],
"goal": {
"total_entries": 4,
"per_page": 10,
"current_page": 1,
"total_pages": 1
}
}
```

This JSON response corresponds to a list (or collection) of email campaigns (`campaigns`) and attributes
of each object in the collection contain information relevant to the resource consulted, in our example the
campaign name (`name`), the last date it was sent (` last_sent`) or if this campaign was
targeted or not (`targets_enabled`). Apart from the collection, we see an object called `meta`, which contains
information about the pagination of this resource.

Continuing with the exercise, we can use the data obtained in the previous consultation to obtain more information, for example, about the times that a particular campaign was executed (Campaign Deliveries),
in this case with the ID of a particular campaign. For this, we revisit our "catalog"
of services, and we find the following _endpoint_:

``` http request
GET/messaging/campaigns/{campaign_id}/deliveries Campaign deliveries list
```

In this way, we can perform a _request_ to see the specific information of the _campaign deliveries_ of the
campaign called "Test campaign 01", passing in the `campaign_id` parameter the campaign ID
corresponding, in this case, the `15`:

``` shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns/15/deliveries -H 'Authorization: Bearer 8c280cc01fc13361aabb1183bb41b4b82faab23e990148c91406bbf5e452ab56'
```

Similar to the previous example, the _response_ will look like this

``` json
{
"deliveries": [{
"id": 29,
"uuid": "b728b957-78e5-4e2d-b28d-8e699a665a2c",
"campaign_id": 15,
"starts_at": "2019-07-15T17: 05: 12.000-03: 00",
"ends_at": "2019-07-15T17: 05: 20,000-03: 00",
"sent_count": 1078,
"reach": -1,
"status": "completed",
"target_list": "-"
}],
"goal": {
"total_entries": 1,
"per_page": 10,
"current_page": 1,
"total_pages": 1
}
}
```

And as we can see, the _response_ is nothing more than a JSON object that contains a list of _deliveries_
of mail campaigns (`deliveries`). In the example, we verify that the campaign with ID `15` has been executed
only once, that execution has already ended successfully (its `status` is` completed`) and was received
for 1078 people (`sent_count` attribute).

Following this example, you can use Modyo's extensive catalog of services and build your
application in the way that best suits your needs.

### Working with data collections: Pagination

In the examples of the previous section, we could see that on many occasions the amount of results
that are obtained for a consultation is such, that they must be delivered in a parcel form so
be able to be used efficiently and orderly. To this organized and limited delivery of results
we call him **pagination**.

Imagine that we now want to review the complete list of mail deliveries to customers (`message deliveries`) of a particular mail campaign (` campaign`) and a specific campaign delivery (`campaign delivery`). With the data obtained in the _requests_ of the previous sections, we can use the _endpoint_ that
List the _message deliveries_, passing the corresponding `campaign_id` and` delivery_id` as parameters:

``` shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29 -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990568e91ab6ab56ebcb6ab56b6ebc
```
Let's analyze the corresponding _response_ of this call below:

``` json
{
"message_deliveries": [{
"id": 1506,
"user_name": "Samuel L. Jackson",
"user_email": "contact@mrjackson.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1505,
"user_name": "John Travolta",
"user_email": "john.travolta@modyo.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1504,
"user_name": "Al Pacino",
"user_email": "mr.pacino@globalmovies.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1503,
"user_name": "Silvester Stallone",
"user_email": "stallone.54@gmail.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1502,
"user_name": "Linda Hamilton",
"user_email": "hamilton@hamilton.co",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1501,
"user_name": "Sigourney Weaver",
"user_email": "contact@weaverproductions.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1500,
"user_name": "Mark Hamill",
"user_email": "hamillhimself@modyo.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1499,
"user_name": "Anthony Daniels",
"user_email": "bep.bep@daniels.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1498,
"user_name": "Harrison Ford",
"user_email": "ford@harrisonford.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}, {
"id": 1497,
"user_name": "Meryl Streep",
"user_email": "meryl@representationms.com",
"type": "admin.messaging.mail",
"sent_at": "2019-07-15T17: 05: 20.000-03: 00",
"opened": false,
"delivery_id": 29,
"campaign_name": "Test campaign 01",
"delivery_start_date": "2019-07-15T17: 05: 12,000-03: 00"
}],
"goal": {
"total_entries": 1078,
"per_page": 10,
"current_page": 1,
"total_pages": 108
}
}
```
As you can see, the ``` message_deliveries``` object within the JSON contains a list of 10 elements, where each represents a _message delivery_ or concrete delivery of a campaign email to a specific user, and each object has attributes relevant to this concept, like the name and
Customer's mail or the date it was sent. But where are the other records? This is where the pagination of resources plays a very important role, and for this we must lend
attention to the `meta` object within the JSON.

The `meta` object contains the relevant information to be able to traverse a large number of records,
through small groups of records or pages. The 4 attributes we have are the following:


* `total_entries`: The total number of items of the resource consulted
* `per_page`: The number of items that will be delivered per page
* `current_page`: The current data window
* `total_pages`: The total of pages, or groups of elements that we can consult.

In the previous example, apart from having the first 10 records, we already know
for the following _requests_ that there are a total of 1078 entries, grouped into 108 pages. If we wanted
get, for example, the second page of this data, we just need to add the `page` parameter with value
equal to 2, invoking the already known URL again. To modify the number of records by
page, just add the `per_page` parameter with the desired value.

For example, let's get page 30, but this time with the _message deliveries_ grouped into pages of 5 elements:

``` shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/message_deliveries?campaign_id=15&delivery_id=29&page=30&per_page=5 -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841e490b56b23b4bb6ab6ebb4b6b6b5b6b4b6b4b6b5b6b5eb
```

What gives us a response like the following:

``` json
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
"goal": {
"total_entries": 1078,
"per_page": 5,
"current_pag": 30,
"total_pages": 216
}
}
```
Finally, remember that the API by default will always return the first page (`current_page: 1`) of resources grouped into pages of 10 elements (` per_page: 10`).
