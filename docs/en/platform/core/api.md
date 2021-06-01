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

For example, the Administrative API (/api/admin/docs) displayes different sections, such as "Locks", "Layout pages", "Email templates" or "Targets". If we focus on the latter, we can see that this section has a list of operations that we can perform on the targets of the application:

```http
Targets

GET      /targets                Targets List
POST     /targets                Create a target
PUT      /targets/{id}           Update a target
DELETE   /targets/{id}           Delete a Target
POST     /targets/apply_filters  Create a temporary target
POST     /targets/count_matches  Create a temporary target, and return the total number of matching users
```
The list shows for each operation, the HTTP method, the route and the description of what
performs.

If you click on any of these methods, for example "Targets List", it shows
a section with the parameters that can be used when invoking it, in this case `query, `sort_by` and
`order, its data types and a field to enter a test value for each parameter.

Additionally, you will be able to query the API directly from the Swagger view by completing the parameters before
described and then clicking on "Execute", which will invoke the API and gives you the result in the
same view.

In the example, the view invokes the URL `https://[account_host]/api/admin/targets` with
GET and displays the answer in JSON to this _request_:

```json
{
  "targets": [
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
      "name": "Target mobile users",
      "filters_summary": "Login Device Mobile",
      "matches_count": 4413,
      "created_at": "2018-06-04T17:20:21.000-03:00",
      "updated_at": "2018-06-04T17:20:21.000-03:00"
    },
    {
      "id": 1,
      "uuid": "6c30c2a6-8db4-4580-8ede-2a913c8a1b6b",
      "name": "Target 01",
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

As you can notice, the `body` of this `response` is a JSON object that contains an element called "targets",
which corresponds to a list (`array`) of items of this type.

It also contains metadata
regarding the `response`, which includes data such as the total number of entries that satisfy this
query (`total_entries'), the maximum number of entries or items returned for each
`request` (`per_page`), the current data window or current page (`current_page`), and total pages
 (total_pages).

 With this data you can easily traverse the data of a given service,
 just by passing the required parameters.


Also each of the sections has a list of possible _responses_ that you get by invoking these methods, so that you can properly prepare your application to handle the data.

In the above example, you will see the _response_ that is obtained from the target list when
the answer is 200:     

```json
{
  "targets": [
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

This corresponds to what you call `Example Value`, showing an example of what
which you can get, but you can also view the corresponding model by clicking on `model`.

 There you will see the JSON structure that makes up the answer, the different fields, their data types, example values, a set of possible values where appropriate and text format (`date-time`, `ipv4`, `email`, etc).

In addition, there are possible cases of failure that may occur in order to control them properly.

For example, if you try to search for a resource that does not exist:

```http
404            Not found
```

Finally, in each of the three catalogs (admin, content and profile), you will find a section
called "Models", which contains the models involved in the services, and will allow you to better understand the available resources and their attributes.


## Using the API


### Authentication

To use the Modyo API, you must first be able to authenticate a particular user who will invoke the various services.

Modyo provides 2 possible authentication methods for invoking the API:

* Bearrer Token
* Admin session cookie

Here's how to use each of these methods

#### Bearrer Token

The first thing you need to do is register the application to consume the API. For this,
In the administrative menu you will access the _Settings_/_API access_ option and click the**+ New** button.

In the following view, you can give the application a name (in the example "My application") and a description that distinguish it, and you must also enter a redirect URL and a logout URL, which will be invoked at the end
the session of a user.

![New API Access](/assets/img/platform/new-API-access.png)

When you save the application information, Modyo will display a view where you will see the
_callback URL_ (which corresponds to the Redirect URI field entered in the previous step) and also the _Application ID_ and _Secret_ fields that you can use later.

![New API Access](/assets/img/platform/save-API-access.png)

:::warning Warning
Keep in mind that when you sign out of any of your sites, a _GET_ will be made to all the logout URLs of your API access apps, which could result in some unwanted redirects if a careless URL is used in that field.
:::

With the already registered application, it is only enough to assign that application to the user or users
that will make use of the API. To do this, you must access the _Settings_/_Team_ menu and select an existing user or create a new user, which must have an administrative role within the application (for more details refer to [Users and Roles section](/es/platform/core/roles.html)).

In the edit view
admin user, you will access the _API Access_ tab and select the `+New Access Token` option

![Team Member API Access 1](/assets/img/platform/team-member-API-access-1.png)

In the _popup_ shown below, select the name of the application you just created, "My application" in our example, and then `Create Token`.

![Team Member API Access 2](/assets/img/platform/team-member-API-access-2.png)

:::warning Attention
Keep in mind that administrative users will only be able to execute actions through the Modyo Administrative API if they have the necessary permissions to perform each action. For example, an administrator with the "Developer" role on a site will not be able to execute the "Publish" action on that site.
:::

Finally, you will now see that in the "Manage Access Tokens" section the application ("My application") will appear, along with a red highlighted value that corresponds precisely to _access token_, and that
you will then use to perform authenticated _requests_ on the Modyo API.

![Team Member API Access 3](/assets/img/platform/team-member-API-access-3.png)

Ready! With the token already created, you can start taking advantage of all the options provided by the Modyo Administrative API. For example, if you want to see a list of roles for users
available administrators, you can perform a _request_ to the _endpoint_ `/api/admin/roles`, including in
_header_ HTTP _"Authorization: Bearer"_ the value of _access token_ previously obtained:

```shell
curl -X GET https://example.modyo.com/api/admin/roles -H 'Authorization: Bearer
 8c280dcc1fcff361aa1120836841b4b82faab23e912148c91766bbf5e452ab56'
```

The response obtained from the service is an `HTTP 200 OK`, and contains the role information
in your _response_ in JSON format:

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

And what happens if someone tries to perform a _request_ to the API without having a valid token? If you try to make an unauthenticated call or with an invalid token, the system will respond
with an error `HTTP 401 Unauthorized`:

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

#### Admin cookie session

If you are using Modyo from a web browser, and you are logged in as an administrator, then you will be able to access the API URLs from the same browser, and make _requests_ simply by having the session cookie on the administrative part of the platform.

Remember that you can only access the sections of the API that you are allowed to access from the Modyo interface.

### Invoking services

Once you know the service you will query, according to what you saw in the [Exploring the API] section (/es/platform/core/api.html #explorando -el-api), and that you have a valid authentication method (refer to [Authentication section](/es/platform/core/api.html #autenticacion)), you can already perform a _request_ to the resource URL required.

For example, if you need to get a list of all the email campaigns that were created. According to the Swagger documentation available, you'll know that you need to call the following URL:

```http request
GET https://[account_host]/api/admin/messaging/campaigns
```
This service accepts parameters via URL to filter by type (`mailing` and` notification`) using the `type` parameter. You can choose to only include campaigns that have _deliveries_ (parameter` filtered`) or only request a list of attributes that should be included in the _response_ (parameter `only`).

For the following example, we only include campaigns with the type set to `mailing` (` type=mailing`), so that our _request_, after including the necessary authentication headers, is as follows:

```shell script
curl -X GET https://modyodev.modyo.me:3000/api/admin/messaging/campaigns?type=mailing -H 'Authorization: Bearer 8c280d601fc1b361aabb20836841b4b82faab23e990148c91406bbf5e452ab56'
```

When invoking the service, you get an `HTTP 200 OK` and the _response_ containing a JSON object that looks as follows:

```json
{
    "campaigns": [{
        "id": 15,
        "name": "Test campaign 01",
        "uuid": "52dc64c2-8c31-4de1-b10c-0313ae6486f6",
        "type": "mailing",
        "sent_count": 1078,
        "last_sent": "2019-07-15T17:05:12.000-03:00",
        "targets_enabled": false,
        "target_list": "--",
        "created_at": "2019-07-15T16:58:43.000-03:00"
    }, {
        "id": 11,
        "name": "Test campaing 02 Mar8 1546",
        "uuid": "2c210b2c-af4e-4f9c-b2c5-b768dde622a2",
        "type": "mailing",
        "sent_count": 6,
        "last_sent": "2019-03-11T15:17:20.000-03:00",
        "targets_enabled": true,
        "target_list": "Test Mailing Mar08",
        "created_at": "2019-03-08T15:46:52.000-03:00"
    }, {
        "id": 6,
        "name": "campaign jan7 1210",
        "uuid": "7dc46be9-ec5e-4468-b74e-a5ba4b88ecb4",
        "type": "mailing",
        "sent_count": 327,
        "last_sent": "2019-01-07T16:53:33.000-03:00",
        "targets_enabled": true,
        "target_list": "--",
        "created_at": "2019-01-07T12:10:22.000-03:00"
    }, {
        "id": 5,
        "name": "Spanish Campaign",
        "uuid": "4b13358e-f2b7-48ef-a720-26b55e4f2502",
        "type": "mailing",
        "sent_count": 0,
        "last_sent": null,
        "targets_enabled": false,
        "target_list": "--",
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

This JSON response corresponds to a list (or collection) of email campaigns (`campaigns`) and the attributes of each object in the collection contain information relevant to the queried resource. In the example, the name of the campaign (`name`), the last date it was sent (`last_sent`), or whether this campaign was targetized or not (`targets_enabled`).

Apart from the collection, you can see an object called `meta` that contains information about the pagination of this resource.

Continuing with the exercise, it is possible to use the data obtained in the previous query for more information. For example, we may be interested to know the number of times a particular campaign (Campaign Deliveries) was run with that campaign ID. To do this, you can revisit the service catalog, and you will find the following _endpoint_:

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
        "target_list": "--"
    }],
    "meta": {
        "total_entries": 1,
        "per_page": 10,
        "current_page": 1,
        "total_pages": 1
    }
}
```

As you can see, the _response_ is nothing more than a JSON object that contains a list of _deliveries_ of mail campaigns (`deliveries`). In the example, it is verified that the campaign with ID `15` was executed only on one opportunity, it has already ended successfully (its `status` is `completed`) and was received by 1078 people (`sent_count` attribute).

By following this example, you can use Modyo's extensive catalog of services and build your application in the way that best suits your needs.

### Working with data collections: Pagination

In the examples in the previous section, it was shown that on many occasions the amount of results obtained for a query is so high that they are delivered in a parceled way to be used efficiently and orderly. This organized and limited delivery of results is called **pagination**.

If you want to review the full list of message deliveries for a particular campaign and a campaign delivery execution. With the data obtained in the _requests_ in the previous sections, you can use the _endpoint_ that
lists the _message deliveries_, passing as parameters the corresponding `campaign_id` and `delivery_id`:

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
As you can see, the ``message_deliveries`` object within the JSON contains a list of 10 items, where each represents a _message delivery_ or a specific delivery of a campaign mail to a given user, and each object has attributes relevant to this concept, such as the name and
customer's mail or the date on which it was sent. But where are the other records? This is where the pagination of resources plays a very important role, and for this you need to pay
attention to the `meta` object within the JSON.

The `meta` object contains the relevant information to be able to traverse a large number of records,
using small groups of records or pages.

The 4 attributes are:


* `total_entries`: The total number of items in the consulted resource
* `per_page`: The number of items to be delivered per page
* `current_page`: The current data window
* `total_pages`: The total number of pages, or groups of items you can view.

In the example above, apart from having the first 10 records, you already know
for the following _requests_ there are a total of 1078 entries, grouped into 108 pages. If you want
get, for example, the second page of this data, you just need to add the parameter `page` with value
equal to 2, invoking the already known URL again. To modify the number of records by
page, just add the parameter `per_page` with the desired value.

For example, if you want to get page 30, but this time with _message deliveries_ grouped into pages of 5 items:

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
Finally, remember that the API by default will always return the first page (`current_page: 1`) of resources grouped into 10-item pages (`per_page: 10`).
