---
search: true
collapsible: true
---

# Drops

Also known as Liquid Objects or Variables, Modyo has drops available for different contexts within Modyo Platform to send information to be called dynamically. You can find drops for account contexts, content, channels, and customers.

## Account

Account drops are mainly used in the context of account authentication, which means that they can be called from anywhere as they are considered global in scale. The available attributes are:

### account.url

The Modyo Platform URL, including the protocol and sub-domain.

#### output
```https://test.miModyo.com```

### account.host

The name of the Modyo Platform sub-domain. 

#### output
```test```

### account.google_key

If there is authentication with Google, it displays the credential key, otherwise it displays empty (void).

#### output
```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE```

## Space

Display dinamic content created in your spaces from any part of your site. In this object you'll have access to all information related to entries, content types, and the archive manager. The available attributes are:

### [space.categories](#category)

Array of objects of type category that contains all the categories of the space.

### [space.entries](#entry)

Array of object entry that contains all the entries of a space.

### [space.types](#type)

Array of object of content types that contain all the types in a space.

### space.name

The name of the space

#### output
```Espacio Nuevo```

## Type

### [type.entries](#entrada)

An array of input objects containing all entries of the type.

### [type.fields](#campo)

Arrangement of objects in fields within the selected content type.

### [type.entry](#entrada)

Object of the first entry of the selected type. This is also used with individual cardinality entries.

### type.name

Name of the type.

#### output
```NewType```

## Entry

Get all the information pertaining to tickets with this drop.

### entry.space

The name of the space associated with the entry.

#### output
```space1```

### entry.category

The category path for this entry.

#### output
```category-1/category-2```

The space of this entrance.

### entry.category_name

The name of the category for this entry.

#### output
```category 2```

### entry.category_slug

The slug of the category of this entry.

#### output
```category-2```

### entry.type

The guy at the entrance.

#### output

```type2```

### entry.type_uid

The unique id of the entry type.

#### output

```type2```

### entry.tags

String array of the tags of this post.

#### output

```tag1, tag2```

### entry.account_url

The url of the account

#### output

```https://test.miModyo.com```

### entry.url

Canonical URL of the entry

#### output

```https://test.miModyo.com/entry```

### [entry.author](#user)

The object of the user who authored the post

### [entry.meta](#meta)

The object of the metadata of the entry. This object has the following attributes: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private

### [entry.fields](#field)

Array with objects in the input fields.

## Field

Displays all the information in the fields of an entry.

### field.name

Name of the custom field.

#### output

```Field1```

### field.type

Name of the type associated with the field.

#### output

```Type1```

## Location

Object of the type location. It contains the information pertinent to a geolocation point.

### location.location_street

Name of the location as it appears in Google Maps.

#### output

```Main street 3883```

### location.latitude

Latitude of the Google Maps point.

#### output

```-33.3982607```

### location.length

Length of the Google Maps point.

#### output

```-70.6003616```

### location.country

Country of the point in Google Maps.


#### output

```Mexico```

### location.administrative_area_#

Information from the administrative area of the Google Maps point, can include data such as name of the city, state, region, municipality, etc.

#### output

```Jalisco```

## Category

Object of the category type (Tag). Contains information pertinent to the categories of an entry.

### category.id

Category ID. 

#### output

```12345```

### category.slug

Slug of the category.

#### output

```category-1```

### category.name

Name of the category.

#### output

```Category 1```

### category.url

Canonical URL of the category.

#### output

```/category-1```

### category.children

Array of category objects with all the children of the category.

### category.parent

The category object corresponding to the parent of the category.

### category.siblings

Array of category objects with all the siblings of the category.

## Asset

Object of the asset type. Contains information pertaining to a file within the [file manager](/en/platform/content/asset-manager).

### asset.url

The URL where the asset is located.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/photo.jpg```

### asset.thumbnail_url

The URL of the asset's thumbnail.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```

### asset.uuid

Asset UUID.

#### output

```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```

### asset.data_file_name
The file name related to the asset.

#### output

```photo.jpg```

### asset.name

The name assigned to the asset.

#### output
```photo.jpg```

### asset.content_type

The content type associated with the asset.

#### output

```image/jpeg```

### asset.title

The title associated with the asset.

#### output

```Photo```

### asset.alt

The alt associated with the asset if one is configured. 

#### output

```The Myth of Plato's Cavern```

### asset.size

The size (in bytes) of the uploaded file.

#### output

```20959```

### asset.description

The asset's description, if it exists.

#### output

```The description for my asset```

### audio_asset.url

The URL of the audio file.

#### output

```/uploads/8of5a204-74e6-4d6b-a319-6f7896c09135/original/platon.mp3```

### file_asset.url

The URL of the file.

#### output

```/uploads/8of5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv```


### file_asset.thumbnail_url

The URL of the file's thumb.

#### output

```/Uploads/7B1B3F82-C9F5-4C51-87DC-B93FC9918C9C/C50x50/Platon.JPG```


### file_asset.image_thumbnail_url

The URL of the file.

#### output

```/Uploads/8of5a204-74E6-4D6B-A319-6F7896C09135/C200x200/Cave.csv```

### file_asset.is_image?

Boolean to know if the file is image.

#### output

```false```

### file_asset.is_video?

Boolean to find out if the file is video.

#### output

```false```

### file_asset.is_audio?
Boolean to know if the file is audio.

#### output

```false```

### file_asset.is_pdf?
Boolean to see if the file is a PDF.

#### output

```false```

### file_asset.is_another?
Boolean to find out if the file is of another type not specified.

#### output

```true```

### file_asset.temp_url
The temporary URL of the file.

#### output

```/var/folders/VM/FK9_XG_D7QS8XBXJ28CSW1000000GP/T/E8CA0956-A576-43C0-9F37-2BE39CF9660120210602-6475-1LVFH9T```

### video_asset.url

The URL of the video.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/cave.webm"```

### video_asset.thumbnail_url

The URL of the video's thumb.

#### output

```/Uploads/7B1B3F82-C9F5-4C51-87DC-B93FC9918C9C/C50x50/Platon.JPG```


## Site

Get all the information related to sites using these drops:

### site.breadcrumb

The `breadcrumb` class div associated with the site.

#### output

```sh
<div class="breadcrumb">
          <div class="breadcrumb-inner container">
            <a class="first item-0" href="https://test.miModyo.com/testsite">Home</a>
            <span class="separator">/</span> <span class="last item-1">About Us</span>
          </div>
   </div>
```

### site.url

The URL associated with the site.

#### output

```https://test.miModyo.com/newsite```

### site.account_url

The URL of the account associated with the site.

#### output

```https://test.miModyo.com```

### site.current_year

The current year associated with the site

#### output

```2022```

### site.manifest_url

The URL of the manifest.

#### output

```” https://test.miModyo.com/newsite/manifest.json “```

### site.sw_enabled

Boolean to see if the top level service worker is active.

#### output

```false```

### site.sw_url

The URL of the service worker if it exists, otherwise it displays empty (void).

#### output

```https://test.miModyo.com/newsite/serviceworker.js```

### site.sw_scope

The scope of the service worker

#### output

```/newsite```

### site_search.have_results

Boolean to see if the search has results.

#### output

```false```

### site_search.results

The objects associated with the search result.

### site_search.have_less_relevant_results

Boolean to find out if the search has more results exceeding max page.

#### output

```true```

## Request

These drops allow you to obtain information at the time of making a request. 

### request.user_agent

The details of the user agent.

#### output

```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36```

### request.host

The host of the request.

#### output

```test.mimodyo.com```

### request.domain

The domain of the request.

#### output

```Mimodyo.com```

### request.protocol

The protocol associated with the request.

#### output

```https://```

### request.url
The URL of the request.

#### output

```https://test.miModyo.com/ivansite/the-new-type/newentry```

### request.path

The path of the request.

#### output

```/newsite/the-new-type/newentry```

### request.interact_url

Interact URL of the request.

#### output

```https://test.miModyo.com/newsite/requests```

### request.refresh_url

The refresh URL of the request

#### output

```https://test.miModyo.com/newsite/requests/refresh```

### request.comments_url

The comments URL of the request.

#### output

```https://test.miModyo.com/newsite/requests/123124/comments```

### request.is_app_shell?

Boolean to find out if the user agent of the request belongs to a Modyo app.

#### output

```false```

## User Agent

These drops allow you to obtain information from the user's user agent (in general, it refers to a web browser).

### user_agent.browser

The browser of the user agent.

#### output

```Chrome```

### user_agent.browser_version

The browser version.

#### output

```96.0.4664.110```

### user_agent.platform

The operating system the browser is running on.

#### output
```macOS```

### user_agent.platform_version

The version of the operating system where the browser is running.

#### output

```10.15.2```

### user_agent.agent

The type of agent that is running.

#### output

```Desktop```

### user_agent.is_modyo_shell

Boolean to find out if the user agent is taking care of it through a Modyo app.

#### output

```Desktop```

## Page

These drops are very useful when you want to make dynamic pages using Liquid.

### [page.grid](#grid)

The grid object associated with the page.

###

The name associated with the page.

#### output

```Home```

### page.content

The content of the page.

#### output

```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal Theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more HTML dsfdfdfs customize Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC on newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false```

### page.title

The title associated with the page.

#### output

```Home```

### page.excerpt

The excerpt associated with the page.

#### output

```This is the excerpt of a very cool page```

### page.url

The URL of the page.

#### output

```https://test.miModyo.com/newsite/```

### [page.parent](#page)

The object of the page type that is the parent of the page, if there is no parent, displays void.

### page description

The description of the page.

#### output

```This is the description of a very cool page```

## Menu 

These drops get the information associated with 

### [menu.items](#menu)

Array of objects of type menu_item associated with the menu.

### menu_item.label

The label of the item menu.

#### output

```Home```

### menu_item.child_items

Array of the child items objects of the current item.

### menu_item.url

The URL associated with the item menu.

#### output

```https://test.miModyo.com/newsite/```

### menu_item.parameterized_label

The parameterized label associated with the item menu.

#### output

```home```

### menu_item.category

The category associated with the item menu.

#### output

```home```

### menu_item.position

The position associated with the item menu starting from 0 as the first position.

#### output

```0```

### menu_item.segment

The position associated with the item menu starting from 0 as the first position.

#### output

```0```

## Widget

These drops get the information relevant to the Widgets.

### widget.id

The ID associated with the respective widget.

#### output

```506```

### widget.cache_key

The cache key associated with the widget.

#### output

```widgets/content_list_widgets/506-20220215151403000000```

### widget.type

The type of the widget.

#### output

```content-list```

### widget.created_at

The date of creation of the widget.

#### output

```Tue, 15 Feb 2022 15:14:03 UTC + 00:00 ```

### widget.css_class

The css class associated with the widget.

#### output

```content-list-widget```

### widget.width

The width set in the widget.

#### output

```full```

### widget.name

The name of the widget.

#### output

```Content list```

### widget.use_default_title

Boolean indicating whether the widget uses the default title.

#### output

```false```

### widget.title

The title of the widget.

#### output

```Content list```

### widget.resolve_type

The type of the widget with underscore.

#### output

```content_list_widget```

### widget.uid

The uuid of the widget.

#### output

```506```

### widget.wid

The widget wid.

#### output

```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### widget.permanent_cache

Wid of the widget

#### output

```63ae60e2-d152-4c70-a5b0-ffa9916162e3```

### rich_text_widget.permanent_cache

The html content of the widget.

#### output

```sh
<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>
```
### custom_widget.manager_uuid

The uuid of the custom widget.

#### output

```a6090e3f-1d46-44e3-885c-14971ca8fc27```

### custom_widget.version

Custom widget version.

#### output

```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe```

### text_widget.html

The text associated with the text widget.

#### output

```Hello world```

### content_list_widget.show_caption

Boolean if the show caption option is active.

#### output

```true```

### [content_list_widget.entries](#entry)

Arrangement of entries associated with the widget.

### content_list_widget.context_params

The context parameters associated with the widget.

#### output

```{:page=>1, :per_page=>10, :account=> #account_object, :user=>nil, :version_type=>:currents}```

### content_list_widget.space_id

The id of the space associated with the widget.

#### output

```4```

### content_list_widget.type_uid

The uid of the type associated with the widget.

#### output

```the-new-type```

## Grid

### grid.id

The grid id.

#### output

```508```

### grid.cache_key

The cache key associated with the grid.

#### output

```layouts/grids/full_grids/508```

### grid.resolve_type

The guy on the grid with an underscore.

#### output

```full_grid```

### [full_three_cols_grid.main_widgets](#widget)

Array of objects of type widget.

### [full_three_cols_grid.col1_widgets](#widget)

Array of objects of type widget.

### [full_three_cols_grid.col2_widgets](#widget)

Array of objects of type widget.

### [full_three_cols_grid.col3_widgets](#widget)

Array of objects of type widget.

### [side_right_three_cols_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_right_three_cols_grid.side_right_widgets](#widget)

Array of objects of type widget.

### [side_right_three_cols_grid.col1_widgets](#widget)

Array of objects of type widget.

### [side_right_three_cols_grid.col2_widgets](#widget)

Array of objects of type widget.

### [side_right_three_cols_grid.col3_widgets](#widget)

Array of objects of type widget.

### [side_left_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_left_grid.side_left_widgets](#widget)

Array of objects of type widget.

### [side_left_one_col_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_left_one_col_grid.side_left_widgets](#widget)

Array of objects of type widget.

### [side_left_one_col_grid.full_widgets](#widget)

Array of objects of type widget.

### [side_right_one_col_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_right_one_col_grid.side_right_widgets](#widget)

Array of objects of type widget.

### [side_right_one_col_grid.full_widgets](#widget)

Array of objects of type widget.

### [full_grid.main_widgets](#widget)

Array of objects of type widget.

### [full_two_cols_grid.main_widgets](#widget)

Array of objects of type widget.

### [full_two_cols_grid.col1_widgets](#widget)

Array of objects of type widget.

### [full_two_cols_grid.col2_widgets](#widget)

Array of objects of type widget.

### [side_right_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_right_grid.side_right_widgets](#widget)

Array of objects of type widget.

### [side_left_three_cols_grid.main_widgets](#widget)

Array of objects of type widget.

### [side_left_three_cols_grid.side_left_widgets](#widget)

Array of objects of type widget.

### [side_left_three_cols_grid.col1_widgets](#widget)

Array of objects of type widget.

### [side_left_three_cols_grid.col2_widgets](#widget)

Array of objects of type widget.

### [side_left_three_cols_grid.col3_widgets](#widget)

Array of objects of type widget.


## User

Use the user drops to obtain information about your users in the Customers module.

### user.access_token

User's access token.

#### output

```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ```

### user.age

The age of the user

#### output

```39```

### [user.avatar](#asset)

An object of the asset type that represents the user avatar.

#### output

```508```

### user.birth_at

The user's date of birth.

#### output

```1982-09-01```

### user.change_password_url

The URL for changing your password.

#### output

```https://test.miModyo.com/newsite/password/change```

### user.custom_fields

Hash with the data of the user's custom fields.

#### output

```{"_UCF_Job"=>"Software Engineer"}```

### user.email

The user's email.

#### output

```ivan@modyo.com```

### user.external_access_token

The external access token of the ser, it will display void in case it doesn't exist.

#### output

```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ```

### user.external_user_id

The external user id of the user if you have one.

#### output

```aswerr1m@mdaa.com```

### user.female_sex_value

The default value when gender is female.

#### output

```1```

### user.first_name

Returns the first name of the user.

#### output

```Ivan```

### user.genders

The genres present on the platform.

#### output

```{:id=>0, :Name=>"Male "} {:id=>1, :Name=>"Female"}```

### user.generated_password

Boolenan that determines whether the password was automatically generated (true) or created by the user (false).

#### output

```false```

### user.id

The id of the user.

#### output

```16```

### user.initials

The initials of the username.

#### output

```IM```

### user.last_name

The last name of the user.

#### output

```Modyo```

### user.male_sex_value

The default value when gender is male.

#### output

```0```

### user.member_since

A user's member since date.

#### output

```2021-11-23 18:25:07 UTC```

### user.name

The full name of the user.

#### output

```Ivan Modyo Gonzalez```

### [user.notifications](#notification)

An array of objects of the type notification.

### user.profile_url

The URL of the user's profile.

#### output

```https://test.miModyo.com/realms/default/profile```

### user.sex

The gender value configured for the user.

#### output

```0```


### [user.targets](#target)

Array of objects of the target type.

### user.undefined_sex_value

The default value when gender is undefined.

#### output

```3```

### [user.unread_notifications](#notification)

An array of objects of the notification type.

### user.unread_notifications_count

The count of unread notifications.

#### output

```2```

### user.username

The username of the user.

#### output

```ivan@modyo.com```

### user.uuid

A user's UUID.

#### output

```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572```

## Notification

These drops allow you to obtain information through Liquid for notifications in the Customers module.

### notification.subject

The subject of the notification.

#### output

```Modyo Developers Update```

### notification.body

The body of the notification.

#### output

```sh
 <p> This is a test message in campaigns via notifications </p> 
```
### notification.sent_at

The date the notification was sent.

#### output

```2012-11-16 00:46:40 ```

### notification.url

The url of the notification.

#### output

```https://test.miModyo.com/profile?notification_id=65345```

### notification.opened

Boolean whether the notification was opened or not.

#### output

```true```

## Form

These drops allow you to obtain information through Liquid for a form in the Customers module.

### form.slug

The slug of the form.

#### output

```the-new-form```

### form_response.description

The description of the form.

#### output

```This form is the new user form```

### form_response.name

The form name.

#### output

```the new form```

### form_response.questions

The questions on the form.

#### output

```[{"title"=>” What is your job title?” , “type"=>"textquestion”, “answer"=>"Software developer"}] ```

## Question

These drops allow you to obtain information through Liquid for questions on a form in the Customers module.

### question.allow_alternatives?

Boolean to check if the question accepts alternatives.

#### output

```false```

### [question.alternatives](#alternatives)

Array with objects of the alternative type.

### question.allow_alternatives?

Boolean to check if the question accepts alternatives.

#### output

```false```

### [question.form](#form)

Object of the form type.

### question.id

Return the question id.

#### output

```3```

### question.label

The label of the question.

#### output

```The first question```

## Alternative

### alternative.id

The id of the alternative.

#### output

```The first question```

### [alternative.question](#question)

Object of the question type.

## Answer

### answer.edit_url

The edit URL of the response.

#### output

```” https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8 “```

### answer.id

The id of the response.

#### output

```5```

### [answer.question](#question)

Object of the question type associated with the answer.

### [answer.response](#question)

Response object associated with the response.

#### output

```The first question```

### answer.text_field

The text field associated with the response.

#### output

```This is the answer in the text field```

### answer.type

The type of answer.

#### output

```text_answer```

## Realm

### realm.disable_modyo_credentials

Boolean that determines whether Modyo credentials are disabled.

#### output

```false```

### realm.oauth2_callback_url

The oauth2 callback URL.

#### output

```” https://test.miModyo.com/realms/default/auth/oauth2/authorize “```

### realm.oidc_callback_url

The OIDC callback URL.

#### output

```https://test.miModyo.com/realms/default/auth/openidc/callback```

## Target 

These drops contain all the information associated with the targets (segments).

### target.id

Target ID (segment).

#### output

```323```

### target.name

Name of the target (segment).

#### output

```Authorized personnel```




