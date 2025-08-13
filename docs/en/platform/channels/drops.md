---
search: true
collapsible: true
sidebarDepth: 3
---

# Drops

Drops (also known as Liquid Objects or Variables) allow access to dynamic information in Modyo Platform. They are available for account, content, channels, and customers contexts.

## Account

Account drops are mainly used in the context of account authentication, which means that they can be called from anywhere as they are considered global in scope. The available attributes are:

| Description  | Example  |
|---|
| **account.url** The Modyo Platform URL, including the protocol and sub-domain. | ```https://test.miModyo.com``` |
|  **account.host** The name of the Modyo Platform sub-domain.  | ```test``` |
| **account.google_key**: If there is authentication with Google, it returns the credential key; otherwise, it returns empty (void).  | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## Administrator

Account administrators are users with privileges to make changes at the Account level, as well as in the configuration of Spaces or Sites.

| Description  | Example  |
|---|
| **[adminuser.avatar](#asset)** Asset type object for the administrator's avatar. |  |
|  **adminuser.email** Administrator email.  | ```john.doe@modyo.com ``` |
| **adminuser.first_name** Administrator's first name.  | ```John``` |
| **adminuser.last_name** Administrator's last name. | ```Doe``` |
| **adminuser.name** Administrator's full name. | ```John Doe``` |

## Asset

Asset type object. Contains relevant information about a file within the [File Manager](/en/platform/content/asset-manager).

| Description  | Example  |
|---|
| **asset.data_file_name** The name of the asset. | ```foto.jpg``` |
|  **asset.description**: Description of the file, if configured.  | ```Platón uses this allegory to explain what it is like for the philosopher and teacher to guide people to knowledge``` |
| **asset.title** The title associated with the asset.  | ```Photo``` |
| **asset.uuid** The uuid of the asset. | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c``` |
| **asset.alt**: Alternative text associated with the asset, if configured.  | ```The myth of Plato's cave``` |
| **asset.alt_text**: Alternative text associated with the asset, if configured.  | ```The myth of Plato's cave``` |
| **asset.content_type**: Content type associated with the asset. | ```image/jpeg``` |
| **asset.name** The name assigned to the asset. | ```foto.jpg``` |
| **asset.size**: Size (in bytes) of the uploaded file. | ```20959``` |
| **asset.thumbnail_url**: URL of the asset's thumbnail. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg``` |
| **asset.url**: URL where the asset is located. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg``` |

### Audio

The Audio drop is a subclass that inherits the same attributes as Asset. You can use `audio_asset` instead of `asset`.

It inherits the following attributes from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### File

The File drop is a subclass that inherits the same attributes as Asset. You can use `file_asset` instead of `asset`.

It inherits the following attributes from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Description  | Example  |
|---|
| **file_asset.url** The URL of the file. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url** The URL of the file's thumb. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |
| **file_asset.image_thumbnail_url** The URL of the file. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv``` |
| **file_asset.is_image?**: Boolean indicating if the file is an image. | ```false``` |
| **file_asset.is_video?**: Boolean indicating if the file is a video. | ```false``` |
| **file_asset.is_audio?**: Boolean indicating if the file is an audio. | ```false``` |
| **file_asset.is_pdf?**: Boolean indicating if the file is a PDF. | ```false``` |
| **file_asset.is_another?**: Boolean indicating if the file is of another unspecified type. | ```false``` |
| **file_asset.temp_url** The temporary URL of the file. | ```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t``` |

### Video

The Video drop is a subclass that inherits the same attributes as Asset. You can use `video_asset` instead of `asset`.

| Description  | Example  |
|---|
| **video_asset.url** The URL of the video. | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** The URL of the video thumbnail. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg``` |

## Category

Category type object (Tag). Contains relevant information about an entry's categories.

| Description  | Example  |
|---|
| **category.id** Category ID.  | ```12345``` |
| **category.slug** Category slug. | ```category-1``` |
| **category.name** Category name. | ```Category 1``` |
| **category.url** Canonical URL of the category. | ```/category-1``` |
| **category.children**: Array of `category` type objects with all the children in the category. |  |
| **category.parent**: `category` type object corresponding to the category's parent. |  |
| **category.siblings**: Array of `category` type objects with all the siblings in the category. |  |

## Entry

Create dynamic content in your spaces using Entries. In this object you have access to all relevant information about the entries. The available attributes are:

| Description  | Example  |
|---|
| **entry.space**: Name of the space associated with the entry. | ```space1``` |
| **entry.category**: Category path for this entry. | ```category-1/category-2``` |
| **entry.category_name**: Category name for this entry. | ```category 2``` |
| **entry.category_slug**: This entry's category slug. | ```category-2``` |
| **entry.type**: Entry type. | ``type2`` |
| **entry.type_uid**: Unique ID of the entry type. | ``type2`` |
| **entry.tags**: Array of strings with the tags for this entry. | ```tag1, tag2``` |
| **entry.excerpt**: Excerpt associated with the entry. | ```This is the excerpt of a very cool entry``` |
| **entry.account_url**: Account URL. | ```https://test.miModyo.com``` |
| **entry.url**: Canonical URL of the entry. | ```https://test.miModyo.com/entry``` |
| **[entry.author](#user)**: User object who wrote the entry. | ```tag1, tag2``` |
| **entry.meta**: Object with the following metadata attributes: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, and private. | |
| **[entry.fields](#field)**: Array of objects with the entry's fields. |  |

## Field

Displays all information about an entry's fields.

| Description  | Example  |
|---|
| **field.name**: Custom field name.  | ```Field1``` |
| **field.type**: Name of the type associated with the field. | ```Type1``` |


## Form

These drops allow you to get information via Liquid for a form in the Customers module.

| Description  | Example  |
|---|
| **form.slug**: Form slug.  | ```the-new-form``` |

### Alternative

| Description  | Example  |
|---|
| **alternative.id**: Alternative ID.  | ```The first question``` |
| **[alternative.question](#question)**: Question type object.  | |

### Answer

| Description  | Example  |
|---|
| **answer.edit_url**: Response editing URL.  | ```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id**: Answer ID.  | ```5``` |
| **[answer.question](#question)**: Question type object associated with the answer.  |  |
| **[answer.response](#answer)**: Response type object associated with the response.  |  |
| **answer.text_field**: Text field associated with the answer.  | ```This is the answer in the text field``` |
| **answer.type**: Response type.  | ```text_answer``` |

### Response

| Description  | Example  |
|---|
| **form_response.description**: Form description.  | ```This form is the new user form``` |
| **form_response.name**: Form name.  | ```The new form``` |
| **form_response.questions**: Array with the form questions.  | ```[{"title"=>"What is your job title?", "type"=>"textquestion", "answer"=>"Software developer"}]``` |

### Question

These drops allow you to get information via Liquid for questions on a form in the Customers module.

| Description  | Example  |
|---|
| **question.allow_alternatives?**: Boolean indicating if the question accepts alternatives.  | ```false``` |
| **question.alternatives**: Array of alternative type objects.  | |
| **question.allow_alternatives?**: Boolean indicating if the question accepts alternatives.  | ```false``` |
| **[question.form](#form)**: Form type object.  | |
| **question.id**: Returns the question ID.  | ```3``` |
| **question.label**: Question label. | ```The first question``` |

## Grid

Contains the definition of a Grid on a Page.


| Description  | Example  |
|---|
| **grid.id**: Grid ID.  | ```508``` |
| **grid.cache_key**: Cache key associated with the grid.  | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type**: Grid type with underscore.  | ```full_grid``` |

### Full Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[full_grid.main_widgets](#widget)**: Array of widget type objects.  |  |

### Full Three Column Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[full_three_cols_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[full_three_cols_grid.col1_widgets](#widget)**: Array of widget type objects.  | |
| **[full_three_cols_grid.col2_widgets](#widget)**: Array of widget type objects.  | |
| **[full_three_cols_grid.col3_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_three_cols_grid.main_widgets](#widget)**: Array of widget type objects.  | |


### Full Two Col Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[full_two_cols_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[full_two_cols_grid.col1_widgets](#widget)**: Array of widget type objects.  | |
| **[full_two_cols_grid.col2_widgets](#widget)**: Array of widget type objects.  | |


### Side Left Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_left_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_grid.side_left_widgets](#widget)**: Array of widget type objects.  | |


### Side Left One Col Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_left_one_col_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_one_col_grid.side_left_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_one_col_grid.full_widgets](#widget)**: Array of widget type objects.  | |

### Side Left Three Col Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_left_three_cols_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_three_cols_grid.side_left_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_three_cols_grid.col1_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_three_cols_grid.col2_widgets](#widget)**: Array of widget type objects.  | |
| **[side_left_three_cols_grid.col3_widgets](#widget)**: Array of widget type objects.  | |

### Side Right Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_right_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_grid.side_right_widgets](#widget)**: Array of widget type objects.  | |

### Side Right One Col Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_right_one_col_grid.main_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_one_col_grid.side_right_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_one_col_grid.full_widgets](#widget)**: Array of widget type objects.  | |


### Side Right Three Col Grid

Extends the functionality of the Grid drop and contains the following additional attributes:

| Description  | Example  |
|---|
| **[side_right_three_cols_grid.side_right_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_three_cols_grid.col1_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_three_cols_grid.col2_widgets](#widget)**: Array of widget type objects.  | |
| **[side_right_three_cols_grid.col3_widgets](#widget)**: Array of widget type objects.  | |


## Location

Location type object. Contains relevant information about a geolocation point.

| Description  | Example  |
|---|
| **location.location_street**: Location name in Google Maps.  | ```Main street 3883``` |
| **location.latitude**: Latitude of the point in Google Maps.  | ```-33.3982607``` |
| **location.longitude**: Longitude of the point in Google Maps.  | ```-70.6003616``` |

## Menu

Menu type object. Contains relevant information about menu items.

| Description  | Example  |
|---|
| **menu.items**: Array of `menu_items` type objects associated with this menu.  |  |

### Menu Items

| Description  | Example  |
|---|
| **menu_item.category**: Category associated with the menu item.  | ```home``` |
| **menu_item.child_items**: Array of child item objects of the current item.  |  |
| **menu_item.classes**: CSS classes associated with this item.  | ```mdi, mdi-circle``` |
| **menu_item.description**: Description for this item.  |  |
| **menu_item.label**: Menu item label.  | ```Home``` |
| **menu_item.parameterized_label**: Parameterized label associated with the menu item.  | ```home``` |
| **menu_item.position**: Position associated with the menu item (0 as first position).  | ```0``` |
| **menu_item.url**: URL associated with the menu item.  | ```https://test.miModyo.com/newsite/``` |

## Notification

These drops allow you to get information via Liquid for notifications in the Customers module.

| Description  | Example  |
|---|
| **notification.opened**: Boolean indicating if the notification was opened.  | ```true``` |
| **notification.sent_at**: Notification sent date.  | ```2012-11-16 00:46:40``` |
| **notification.body**: Notification body.  | ```mdi, mdi-circle``` |
| **menu_item.description**: Description for this item.  | ```<p>This is a test message in campaigns via notifications</p>``` |
| **notification.subject**: Notification subject.  | ```Modyo Developers Update``` |
| **notification.url**: Notification URL.  | ```https://test.miModyo.com/profile?notification_id=65345``` |


# Order

These drops allow you to get information via Liquid for Commerce module orders.

## Notification

These drops allow you to get information via Liquid for notifications in the Customers module.

| Description  | Example  |
|---|
| **order.created_at**: String with the order creation date. |  |
| **order.current_state**: String with the current order status.  | ```2012-11-16 00:46:40``` |
| **order.id** Order ID.  |  |
| **[order.order_items](#order-item)**: Array of `order_item` type objects. |  |
| **order.payment_info** Hash with the order payment information.  |  |
| **order.short_uuid**: String with the short UUID of the order.  |  |
| **order.tax_total**: Float with the total amount of taxes paid for the order.  |  |
| **order.total** Float with the total amount of the order.  |  |
| **order.updated_at** String with the last modification date.  |  |
| **order.url** String with the order URL.  |  |
| **order.uuid**: String with the full UUID of the order.  |  |
| **order.confirmation_code** String with the order confirmation code.  |  |
| **order.customer_email** String with the customer's email associated with this order.  |  |
| **order.customer_name** String with the full name of the associated customer. |  |
| **order.order_description** String with the order description. |  |
| **order.order.reference_id**: String with the reference ID for this order. |  |

## Order Item


| Description  | Example  |
|---|
| **order_item.created_at**: Order item creation date. |  |
| **order_item.id**: Order item ID.  |  |
| **order_item.name**: Order item name.  |  |
| **order_item.price**: Order item price. |  |
| **order_item.quantity**: Number of items in the order.  |  |
| **order_item.updated_at**: Last update date of the order item.  |  |

## Page

These drops are very useful for creating dynamic pages using Liquid.


| Description  | Example  |
|---|
| **page.content**: Page content. | ```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more Loren Ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Learn more HTML dsfdfdfs customivan Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC en newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false``` |
| **page.name**: Name associated with the page.  | ```Home``` |
| **page.parent**: Page type object that is the parent of the page; if it does not exist, it returns empty (void). |  |
| **page.url**: Page URL. | ```https://test.miModyo.com/newsite/``` |
| **page.current_path**: Path associated with the page.  | ```/examples``` |
| **page.description**: Page description.  | ```This is the description of a very cool page``` |
| **page.excerpt**: Excerpt associated with the page.  | ```This is the excerpt of a very cool page```
 |
| **[page.grid](#grid)**: Grid type object associated with the page. |  |
| **page.meta_tags**: Array of strings with the meta tags associated with the page.  | ```My, Test, Metatag``` |
| **page.title**: Title associated with the page.  | ```Home``` |

## Realm

| Description  | Example  |
|---|
| **realm.disable_modyo_credentials**: Boolean that determines if Modyo credentials are deactivated. `true` deactivates credentials. |  |
| **realm.oauth2_callback_url**: String that determines the OAuth2 callback URL.  |  |
| **realm.oidc_callback_url**: String that determines the OIDC callback URL. |  |

## Request

These drops allow you to get information when making a request.

| Description  | Example  |
|---|
| **request.domain**: Request domain. | ```miModyo.com``` |
| **request.host**: Request host.  | ```test.miModyo.com``` |
| **request.protocol**: Protocol associated with the request. | ```https://``` |
| **request.user_agent**: User agent details. | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36``` |
| **request.comments_url**: Request comments URL.  | ```https://test.miModyo.com/newsite/requests/123124/comments``` |
| **request.interact_url**: Request interaction URL. | ```https://test.miModyo.com/newsite/requests``` |
| **request.is_app_shell?**: Boolean indicating if the request's user agent belongs to a Modyo application. | ```false``` |
| **request.path**: Request path.  | ```/newsite/the-new-type/newentry``` |
| **request.refresh_url**: Request refresh URL. | ```https://test.miModyo.com/newsite/requests/refresh``` |
| **request.url**: Request URL.  | ```https://test.miModyo.com/ivansite/the-new-type/newentry``` |

## Site

Site drops are used to get all the information about a site. The available attributes are:

| Description  | Example  |
|---|
| **[site.account](#account)**: Account type object associated with this site. |  |
| **site.apple_touch_icons**: String with the link for the Apple touch icon.  | |
| **site.cache_key**: Cache key associated with the site. |  |
| **site.description**: String with the site description.  | |
| **site.favicon_link**: String with the link to the favicon.|  |
| **site.host**: String with the site host.  | |
| **site.keywords**: String with all keywords separated by commas on the site. |  |
| **site.language**: String with the site language.  | |
| **site.login_url**: String with the URL to log in to the site. |  |
| **site.logo**: String with the logo location for the site.  | |
| **site.logout_url**: String with the site's logout URL. |  |
| **site.name**: String with the site name. |  |
| **site.profile_url**: String with the profile link for the site. |  |
| **[site.pwa_icon](#asset)**: Asset type object that contains the PWA icon information. |  |
| **site.search_url**: String with the URL for the site's search bar. |  |
| **site.tag_manager_id**: String with the Google Tag Manager ID of the site. |  |
| **site.tagline**: String describing the site's tagline. |  |
| **site.use_pwa_manifest**: Boolean that determines if the site uses the PWA manifest. |  |
| **site.uuid**: String with the site's UUID. |  |
| **site.account_url**: String with the URL of the account associated with the site. |  |
| **site.breadcrumb**: String with the CSS class of the breadcrumb div. |  |
| **site.cache_version**: String with the cache key for this version of the site. |  |
| **site.csrf_meta_tag**: String with the CSRF meta tag. |  |
| **site.css_path**: String with the location of the site's CSS file. |  |
| **site.current_year**: String with the current year of the site. |  |
| **site.js_path**: String with the location of the site's JS file. |  |
| **site.login_enabled**: Boolean that determines if the site uses login.|  |
| **site.manifest_url**: String with the URL of the manifest for the site. |  |
| **site.meta_tags**: String with the site's meta tags separated by commas. |  |
| **site.root_path**: String with the root location of the site. |  |
| **site.service_worker_enabled**: Boolean that determines if the top-level service worker is activated (alias: `sw_enabled`). |  |
| **site.service_worker_scope**: String with the scope of the site's service worker.|  |
| **site.service_worker_url**: String with the service worker URL for the site.
 |
| **site.url**: String with the URL associated with the site. |  |

## Site Browser

These drops allow you to get information from a site's browser.

| Description  | Example  |
|---|
| **sitesearch.have_results**: Boolean that determines if the search has results. |  |
| **[sitesearch.results](#page)**: Page type object that meets the search parameters.  | |
| **sitesearch.have_less_relevant_results**: Boolean that determines if there are more results that exceed the maximum limit.  | |

## Space

Displays dynamic content created in your spaces from anywhere on your site. In this object you have access to all relevant information about entries, content types, and the file manager. The available attributes are:

| Description  | Example  |
|---|
| **[spaces['space_name_'].categories](#category)**: Array of category type objects containing all categories in the space. |  |
| **[spaces['space_name_'].entries](#entry)**: Page type objects that meet the search parameters.  | |
| **space['space_name_'].name**: Space name.  | ```New Space``` |

## Target

These drops allow you to get information from Targets. The available attributes are:

| Description  | Example  |
|---|
| **target.id**: String with the ID associated with the target. |  |
| **target.name**: String with the name associated with the target.  | |

## Content Type

Use Content Type drops to get information about your content types from the Content module.

| Description  | Example  |
|---|
| **[type.entries](#entry)** Array of entry objects containing all entries of the type. |  |
| **[type.fields](#field)** Array of field objects within the selected content type.  | |
| **[type.entry](#entry)** Object of the first entry of the selected type. This is also used with single cardinality entries.  | |
| **type.name** Type name.  | ```NewType``` |


# User


Use user drops to get information about your users from the Customers module.

| Description  | Example  |
|---|
| **user.access_token** The user's access token. | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ``` |
| **user.age** The user's age  | ```39``` |
| **[user.avatar](#asset)** Asset type object representing the user avatar.  | |
| **type.name** Type name.  | ```508``` |
| **user.birth_at** The user's date of birth.  | ```1982-09-01``` |
| **user.change_password_url** The password change URL.  | ```https://test.miModyo.com/newsite/password/change``` |
| **user.custom_fields** Hash with the user's custom field data.  | ```{"_ucf_job"=>"Software Engineer"}``` |
| **user.email** The user's email.  | ```ivan@modyo.com``` |
| **user.external_access_token** The user's external access token; if none, displays empty (void).  | ```Uel7k69VuWhSxX9dJDILB7BtM1I_KQipwEkV9PtnHLQ``` |
| **user.external_user_id** The user's external user ID, if any.  | ```aswerr1m@mdaa.com``` |
| **user.female_sex_value** The default value when gender is female.  | ```1``` |
| **user.first_name** Returns the user's first name.  | ```Ivan``` |
| **user.genders** The genders present on the platform.  | ```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}``` |
| **user.generated_password** Boolean that determines if the password was automatically generated (true) or created by the user (false).  | ```false``` |
| **user.id** The user's ID.  | ```16``` |
| **user.initials** The user's initials.  | ```IM``` |
| **user.last_name** The user's last name.  | ```Modyo``` |
| **user.male_sex_value** The default value when gender is male.  | ```0``` |
| **user.member_since** The date since the user has been a member of the site.  | ```2021-11-23 18:25:07 UTC``` |
| **user.name** The user's full name.  | ```Ivan Modyo Gonzalez``` |
| **[user.notifications](#notification)** Array of notification type objects.  |  |
| **user.profile_url** The user's profile URL.  | ```https://test.miModyo.com/realms/default/profile``` |
| **user.sex** The gender value configured for the user. | ```0``` |
| **[user.targets](#target)** Array of target type objects.  |  |
| **user.undefined_sex_value** The default value when gender is undefined.  | ```3``` |
| **[user.unread_notifications](#notification)** Array of notification type objects.  |  |
| **user.unread_notifications_count** The count of unread notifications.  | ```2``` |
| **user.username** The user's username.  | ```ivan@modyo.com``` |
| **user.uuid** The user's UUID.  | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572``` |
  **user.realm_uid** The user's realm.  |   ```my-realm```

## User Agent

Use user agent drops to get information from the web browser agent.

| Description  | Example  |
|---|
| **user_agent.agent** A string with the type of agent that is running.  | |
| **user_agent.as_json** A string in JSON format with all the agent configuration running.  | |
| **user_agent.browser** A string with the browser name for the agent.  | |
| **user_agent.browser_version** A string with the browser version for the agent.  | |
| **user_agent.is_modyo_shell** Boolean that determines if the agent is being managed by a Modyo application  | |
| **user_agent.platform** A string with the agent's operating system version.  | |


# Widget

These drops obtain relevant information about Widgets.

| Description  | Example  |
|---|
| **widget.cache_key** The cache key associated with the widget.  | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at** The date the widget was created.  | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00``` |
| **widget.id** The ID associated with the respective widget.  | ```506``` |
| **widget.resolve_type** The type of the widget with underscore.  | ```content_list_widget``` |
| **widget.title** The widget title.  | ```Content list``` |
| **widget.css_class** The CSS class associated with the widget.  | ```content-list-widget``` |
| **widget.name** The widget name.  | ```Content list``` |
| **widget.type** The widget type.  | ```content-list``` |
| **widget.use_default_title** Boolean indicating if the widget uses the default title.  | ```false``` |
| **widget.wid** The widget's wid.  | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3``` |
| **widget.width** The width configured in the widget.  | ```full``` |

### Content List Widget

| Description  | Example  |
|---|
| **content_list_widget.context_params** The context parameters associated with the widget.  | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **[content_list_widget.entries](#entry)** Array of Entry type objects associated with the widget.  | |
| **content_list_widget.show_caption** Boolean if the show caption option is active. | ```true``` |
| **content_list_widget.space_id** The ID of the Space associated with the widget. | ```5``` |
| **content_list_widget.type_uid** The UID of the type associated with the widget. | ```the-new-type``` |

### Custom Widget

| Description  | Example  |
|---|
| **custom_widget.manager_uuid** The UUID of the custom widget. | ```a6090e3f-1d46-44e3-885c-14971ca8fc27``` |
| **custom_widget.sync** Boolean that determines if the load is synchronous (true) or asynchronous (false). | ```true``` |
| **custom_widget.css** A string with the CSS associated with the widget. |  |
| **custom_widget.html** A string with the HTML associated with the widget. |  |
| **custom_widget.js** A string with the JavaScript associated with the widget. |  |
| **custom_widget.version** The hashed version of the custom widget. | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### Rich Text Widget

| Description  | Example  |
|---|
| **rich_text_widget.html** The HTML content of the widget. | ```<p><strong><span style="color: rgb(216, 55, 98);">Hello World&nbsp;<span class="fr-emoticon fr-deletable">😃</span>&nbsp;</span></strong></p>``` |


### Text Widget

| Description  | Example  |
|---|
| **text_widget.html** The HTML associated with the text widget. | ```Hello world``` |





<style>
table, th, td {
  border: 1px solid white;
}
</style>