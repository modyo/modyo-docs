---
search: true
collapsible: true
sidebarDepth: 3
---

# Drops

Also known as Liquid Objects or Variables, Modyo has drops available for different contexts within Modyo Platform to send information to be called dynamically. You can find drops for account contexts, content, channels, and customers.

## Account

Account drops are mainly used in the context of account authentication, which means that they can be called from anywhere as they are considered global in scale. The available attributes are:

| Description  | Example  |
|---|---|
| **account.url** The Modyo Platform URL, including the protocol and sub-domain. | ```https://test.miModyo.com``` |
|  **account.host** The name of the Modyo Platform sub-domain.  | ```test``` |
| **account.google_key** If there is authentication with Google, display the credential key, otherwise display empty (void).  | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## Administrator

Account administrators are those users with privileges to make changes at the Account level in addition to changes to the Spaces or Sites configuration.

| Description  | Example  |
|---|---|
| **[adminuser.avatar](#asset)** Asset type object for the administrator's avatar. |  |
|  **adminuser.email** Administrator email.  | ```john.doe@modyo.com ``` |
| **adminuser.first_name** Name of the administrator.  | ```John``` |
| **adminuser.last_name** Last name of the administrator. | ```Doe``` |
| **adminuser.name** Full name of the administrator. | ```John Doe``` |

## Asset

Object of type asset. Contains the information relevant to a file within the [Asset Manager](/en/platform/content/asset-manager).

| Description  | Example  |
|---|---|
| **asset.data_file_name** The name of the asset. | ```photo.jpg``` |
|  **asset.description** The description of the file if one has been configured.  | ```Plato uses this allegory to explain what it is like for the philosopher and teacher to guide people to knowledge``` |
| **asset.title** The title associated with the asset.  | ```Photo``` |
| **asset.uuid** The uuid of the asset. | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c``` |
| **asset.alt** The alt associated with the asset if one has been configured.  | ```The Myth of Plato's Cavern``` |
| **asset.alt_text** The alt associated with the asset if one has been configured.  | ```The Myth of Plato's Cavern``` |
| **asset.content_type** The content type associated with the asset. | ```image/jpeg``` |
| **asset.name** The name assigned to the asset. | ```photo.jpg``` |
| **asset.size** The size (in bytes) of the uploaded file. | ```20959``` |
| **asset.thumbnail_url** The URL of the asset's thumbnail. | ```/Uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/c50x50/photo.jpg``` |
| **asset.url** The URL where the asset is located. | ```/Uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg``` |

### Audio

The Audio drop is a subclass that inherits the same attributes as Asset. You can use **audio_asset** and replace it instead of asset.

The following attributes are inherited from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### Asset

The File drop is a subclass that inherits the same attributes as Asset. You can use **file_asset** and replace it instead of asset.

The following attributes are inherited from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Description  | Example  |
|---|---|
| **file_asset.url** The URL of the file. | ```/Uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url** The URL of the file's thumb. | ```/Uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/c50x50/platon.jpg``` |
| **file_asset.image_thumbnail_url** The URL of the file. | ```/Uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/c200x200/cave.csv``` |
| **file_asset.is_image? ** Boolean to know if the file is an image. | ```false``` |
| **file_asset.is_video? ** Boolean to know if the file is video. | ```false``` |
| **file_asset.is_audio? ** Boolean to know if the file is audio. | ```false``` |
| **file_asset.is_pdf? ** Boolean to know if the file is a PDF. | ```false``` |
| **file_asset.is_another? ** Boolean to know if the file is of another unspecified type. | ```false``` |
| **file_asset.temp_url** The temporary URL of the file. | ```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t``` |

### Video

The Video drop is a subclass that inherits the same attributes as Asset. You can use **video_asset** and replace it instead of asset.

| Description  | Example  |
|---|---|
| **video_asset.url** The URL of the video. | ```/Uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** The video thumbnail URL. | ```/Uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/c50x50/platon.jpg``` |

## Category

Object of the category type (Tag). Contains information pertinent to the categories of an entry.

| Description  | Example  |
|---|---|
| **category.id** Category ID.  | ```12345``` |
| **category.slug** Category slug. | ```category-1``` |
| **category.name** Name of the category. | ```Category 1``` |
| **category.url** Canonical URL of the category. | ```/category-1``` |
| **category.children** An array of category-type objects with all the children in the category. |  |
| **category.parent** The category type object corresponding to the parent of the category. |  |
| **category.siblings** Array of category-type objects with all the siblings in the category. |  |

## Entry

Create dynamic content in your spaces using Entries. In this object you have access to all information relevant to the entries. The available attributes are:

| Description  | Example  |
|---|---|
| **entry.space** The name of the space associated with the entry. | ```space1``` |
| **entry.category** The category path for this entry. | ```category-1/category-2``` |
| **entry.category_name** The category name for this entry. | ```category 2``` |
| **entry.category_slug** This entry's category slug. | ```category-2``` |
| **entry.type** The type of the entry. | ``type2`` |
| **entry.type_uid** The unique id of the entry type. | ``type2`` |
| **entry.tags** String arrangement for the tags in this entry. | ```tag1, tag2``` |
| **entry.excerpt** The excerpt associated with the entry. | ```This is the excerpt of a very cool entry``` |
| **entry.account_url** The account url. | ```https://test.miModyo.com``` |
| **entry.url** Canonical URL of the entry. | ```https://test.miModyo.com/entry``` |
| ** [entry.author] (#usuario)** The object of the user who wrote the post. | ```tag1, tag2``` |
| **entry.meta** The metadata object for the entry. | This object has the following attributes: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, and private. |
| **[entry.fields](#field)** Array with objects from the fields in the entry. |  |

## Field

Displays all the information in the fields of an entry.

| Description  | Example  |
|---|---|
| **field.name** Name of the custom field.  | ```Field1``` |
| **field.type** Name of the type associated with the field. | ```Type1``` |


## Form

These drops allow you to get information through Liquid from a form in the Customers module.

| Description  | Example  |
|---|---|
| **form.slug** The form slug.  | ```the-new-form``` |

### Alternative

| Description  | Example  |
|---|---|
| **alternative.id** The id of the alternative.  | ```The first question``` |
| **[alternative.question](#question)** Question type object.  | |

### Answer

| Description  | Example  |
|---|---|
| **answer.edit_url** The editing URL for the response.  | ```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id** The id of the answer.  | ```5``` |
| **[answer.question](#question)** Question type object associated with the answer.  |  |
| **[answer.response](#answer)** Response type object associated with the response.  |  |
| **answer.text_field** The text field associated with the answer.  | ```This is the answer in the text field``` |
| **answer.type** The type of response.  | ```text_answer``` |

### Response

| Description  | Example  |
|---|---|
| **form_response.description** The description of the form.  | ```This form is the new user form``` |
| **form_response.name** The form name.  | ```The new form``` |
| **form_response.questions** Fix the questions in the form.  | ```[{"title"=>” What is your job title?” , “type"=>"textquestion”, “Answer"=>"software developer"}] ``` |

### Question

These drops allow you to obtain information through Liquid for questions on a form in the Customers module.

| Description  | Example  |
|---|---|
| **question.allow_alternatives?** Boolean to check if the question accepts alternatives.  | ```false``` |
| **question.alternatives** Array with alternatives type objects.  | |
| **question.allow_alternatives?** Boolean to check if the question accepts alternatives.  | ```false``` |
| **[question.form](#form)** Form-type object.  | |
| **question.id** Returns the question id.  | ```3``` |
| **question.label** The label of the question. | ```The first question``` |

## Grid

The definition contains a Grid on a Page.


| Description  | Example  |
|---|---|
| **grid.id** The id of the grid.  | ```508``` |
| **grid.cache_key** The cache key associated with the grid.  | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type** The type of the grid with underscore.  | ```full_grid``` |

### Full Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[full_grid.main_widgets](#widget)** Array of widget-type objects.  |  |

### Full Three Column Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[full_three_cols_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[full_three_cols_grid.col1_widgets](#widget)** Array of widget-type objects.  | |
| **[full_three_cols_grid.col2_widgets](#widget)** Array of widget-type objects.  | |
| **[full_three_cols_grid.col3_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_three_cols_grid.main_widgets](#widget)** Array of widget-type objects.  | |


### Full Two Col Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[full_two_cols_grid.main_widgets] (#widget)** Array of widget-type objects.  | |
| **[full_two_cols_grid.col1_widgets] (#widget)** Array of widget-type objects.  | |
| **[full_two_cols_grid.col2_widgets](#widget)** Array of widget-type objects.  | |


### Side Left Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_left_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_grid.side_left_widgets](#widget)** Array of widget-type objects.  | |


### Side Left One Col Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_left_one_col_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_one_col_grid.side_left_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_one_col_grid.full_widgets](#widget)** Array of widget-type objects.  | |

### Side Left Three Col Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_left_three_cols_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_three_cols_grid.side_left_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_three_cols_grid.col1_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_three_cols_grid.col1_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_three_cols_grid.col2_widgets](#widget)** Array of widget-type objects.  | |
| **[side_left_three_cols_grid.col3_widgets](#widget)** Array of widget-type objects.  | |

### Side Right Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_right_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_grid.side_right_widgets](#widget)** Array of widget-type objects.  | |

### Side Right One Col Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_right_one_col_grid.main_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_one_col_grid.side_right_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_one_col_grid.full_widgets](#widget)** Array of widget-type objects.  | |


### Side Right Three Col Grid

Extends the functionality of the drop Grid and additionally contains the following attributes:

| Description  | Example  |
|---|---|
| **[side_right_three_cols_grid.side_right_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_three_cols_grid.col1_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_three_cols_grid.col2_widgets](#widget)** Array of widget-type objects.  | |
| **[side_right_three_cols_grid.col3_widgets](#widget)** Array of widget-type objects.  | |


## Location

Object of the type location. It contains the information pertinent to a geolocation point.

| Description  | Example  |
|---|---|
| **location.location_street** Name of the location as it appears on Google Maps.  | ```Main street 3883``` |
| **location.latitude** Latitude of the Google Maps point.  | ```-33.3982607``` |
| **location.longitude** Length of the Google Maps point.  | ```-70.6003616``` |

## Menu

Object of type Menu. Contains the information for the items of a menu.

| Description  | Example  |
|---|---|
| **menu.items** Array of objects of type menu_items associated with this menu.  |  |

### Menu Items

| Description  | Example  |
|---|---|
| **menu_item.category** The category associated with the item menu.  | ```home``` |
| **menu_item.child_items** Array of the child item objects of the current item.  |  |
| **menu_item.classes** CSS classes associated with this item.  | ```mdi, mdi-circle``` |
| **menu_item.description** The description for this item.  |  |
| **menu_item.label** The label of the item menu.  | ```Home``` |
| **menu_item.parameterized_label** The parameterized label associated with the item menu.  | ```home``` |
| **menu_item.position** The position associated with the item menu starting from 0 as the first position.  | ```0``` |
| **menu_item.url** The URL associated with the item menu.  | ```https://test.miModyo.com/newsite/``` |

## Notification

These drops allow you to obtain information through Liquid for notifications in the Customers module.

| Description  | Example  |
|---|---|
| **notification.opened** Boolean if the notification was opened or not.  | ```true``` |
| **notification.sent_at** The date the notification was sent.  | ```2012-11-16 00:46:40 ``` |
| **notification.body** The body of the notification.  | ```mdi, mdi-circle``` |
| **menu_item.description** The description for this item.  | ```<p>This is a test message in campaigns via notifications``` </p> |
| **notification.subject** The subject of the notification.  | ```Modyo Developers Update``` |
| **notification.url** The URL of the notification.  | ```https://test.myModyo.com/profile?notification_id=65345``` |


# Order

These drops allow you to obtain information through Liquid for Commerce module orders.

## Notification

These drops allow you to obtain information through Liquid for notifications in the Customers module.

| Description  | Example  |
|---|---|
| **order.created_at** String with the date the order was created. |  |
| **order.current_state** String with the status of the order.  | ```2012-11-16 00:46:40 ``` |
| **order.id** Order ID.  |  |
| **[order.order_items](#order-item)** Array of objects with order_item type. |  |
| **order.payment_info** Hash with the payment information for the order.  |  |
| **order.short_uuid** String with the short uuid of the order.  |  |
| **order.tax_total** Float with the amount of taxes paid for the order.  |  |
| **order.total** Float with the total amount of the order.  |  |
| **order.updated_at** String with the date of last modification.  |  |
| **order.url** String with the url of the order.  |  |
| **order.uuid** String with the full uuid of the order.  |  |
| **order.confirmation_code** String with the order confirmation code.  |  |
| **order.customer_email** String with the customer's email associated with this order.  |  |
| **order.customer_name** String with the full name of the associated customer. |  |
| **order.order_description** String with the description of the order. |  |
| **order.order.reference_id** String with the reference id for this command. |  |

## Order Item


| Description  | Example  |
|---|---|
| **order_item.created_at** Date the order was created. |  |
| **order_item.id** Order item id.  |  |
| **order_item.name** Name of the order item.  |  |
| **order_item.price** Price of the order item. |  |
| **order_item.quantity** Number of items in the order.  |  |
| **order_item.updated_at** Date the order item was last updated.  |  |

## Page

These drops are very useful when you want to make dynamic pages using Liquid.


| Description  | Example  |
|---|---|
| **page.content** The content of the page. | ```Home Main Sectionx Build better digital products to unify your customer experiences and accelerate growth. Welcome to the Minimal theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Go to Modyo Read the docs Create and launch digital products faster Welcome to the Minimal Theme. This is an HTML widget that you can modify in the Page Builder section. You can also modify the style in the Template Builder section. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more Loren Ipsum pain Lorem ipsum pain sit amet, consectetur adipiscing elit, thirst for eismod tempor. Learn more HTML dsfdfdfs customize Content list Content list newentry 7 Feb, 2022 42838bbc-8ce8-4401-9898-3c0f2590c992 2022-02-08 14:59:31 UTC on newentry 2022-02-07 21:09:18 UTC 2022-02-08 14:59:31 UTC false``` |
| **page.name** The name associated with the page.  | ```Home``` |
| **page.parent** The page-type object that is the parent of the page, if there is no parent, displays void. |  |
| **page.url** The URL of the page. | ```https://test.miModyo.com/newsite/``` |
| **page.current_path** The path associated with the page.  | ```/examples``` |
| **page.description** The description of the page.  | ```This is the description of a very cool page``` |
| **page.excerpt** The excerpt associated with the page.  | ```This is the excerpt of a very cool page```
 |
| ** [page.grid] (#grilla) ** The grid-type object associated with the page. |  |
| **page.meta_tags** Arrangement of strings with the meta tags associated with the page.  | ```My, Test, Metatag``` |
| **page.title** The title associated with the page.  | ```Home``` |

## Realm

| Description  | Example  |
|---|---|
| **realm.disable_modyo_credentials** Boolean to determine if Modyo credentials are deactivated. True will turn off credentials. |  |
| **realm.oauth2_callback_url** String that determines the oauth2 callback URL.  |  |
| **realm.oidc_callback_url** Order item name. String to determine the OIDC callback URL. |  |

## Request

These drops allow you to obtain information when making a request.

| Description  | Example  |
|---|---|
| **request.domain** The domain of the request. | ```Mimodyo.com``` |
| **request.host** The host of the request.  | ```test.mimodyo.com``` |
| **request.protocl** The protocol associated with the request. | ```https://``` |
| **request.user_agent** The details of the user agent. | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) applewebkit/537.36 (khtml, like gecko) chrome/96.0.4664.110 safari/537.36``` |
| **request.comments_url** Comments URL of the request.  | ```https://test.miModyo.com/newsite/requests/123124/comments``` |
| **request.interact_url** The interact URL of the request. | ```https://test.miModyo.com/newsite/requests``` |
| **request.is_app_shell? ** Boolean to know if the user agent of the request belongs to a Modyo app. | ```false``` |
| **request.path** The path of the request.  | ```/newsite/the-new-type/newentry``` |
| **request.refresh_url** The refresh URL of the request. | ```https://test.miModyo.com/newsite/requests/refresh``` |
| **request.url** The URL of the request.  | ```https://test.miModyo.com/ivansite/the-new-type/newentry``` |

## Site

Site drops are used to obtain all the information of a site. The available attributes are:

| Description  | Example  |
|---|---|
| **[site.account](#account)** The Account-type object associated with this site. |  |
| **site.apple_touch_icons** String with the link for the Apple touch icon.  | |
| **site.cache_key** The cache key associated with the site. |  |
| **site.description** A string with the description of the site.  | |
| **site.favicon_link** A string with the link to the favicon.|  |
| **site.host** A string with the site host.  | |
| **site.keywords** A string with all the keywords separated by commas on the site. |  |
| **site.language** A string containing the language of the site.  | |
| **site.login_url** A string with the URL to log in to the site. |  |
| **site.logo** A string with the location of the logo for the site.  | |
| **site.logout_url** A string containing the site's logout URL. |  |
| **site.name** A string with the name of the site. |  |
| **site.profile_url** A string with the profile link for the site. |  |
| **[site.pwa_icon](#asset)** Asset type object that contains the PWA icon information. |  |
| **site.search_url** A string with the URL for the site's search bar. |  |
| **site.tag_manager_id** A string with the Google Tag Manager ID of the site. |  |
| **site.tagline** A string describing the site's tagline. |  |
| **site.use_pwa_manifest** Boolean that determines if the site uses PWA manifest. |  |
| **site.uuid** A string with the UUID of the site. |  |
| **site.account_url** A string with the URL of the account associated with the site. |  |
| **site.breadcrumb** A string with the CSS class of the breadcrumb div. |  |
| **site.cache_version** A string with the cache key for this version of the site. |  |
| **site.csrf_meta_tag** A string with the CSRF meta tag. |  |
| **site.css_path** A string with the location of the site's CSS file. |  |
| **site.current_year** A string with the current year of the site. |  |
| **site.js_path** A string with the location of the site's JS file. |  |
| **site.login_enabled** Boolean that determines if the site uses login.|  |
| **site.manifest_url** A string with the URL of the manifest for the site. |  |
| **site.meta_tags** A string with the site's meta tags separated by commas. |  |
| **site.root_path** A string with the root location of the site. |  |
| **site.service_worker_enabled** Boolean that determines if the top-level service worker is activated (alias: sw_enabled) |  |
| **site.service_worker_scope** A string with the scope of the site's service worker.|  |
| **site.service_worker_url** A string with the service worker URL for the site.
 |  |
| **site.url** A string with the URL associated with the site. |  |

## Site Browser

These drops allow you to obtain information from a site's browser.

| Description  | Example  |
|---|---|
| **sitesearch.have_results** Boolean that determines if the search has results. |  |
| **[sitesearch.results](#page)** Page-type object that meets the search parameters.  | |
| **sitesearch.have_less_pertint_results** Boolean that determines if there are more results that exceed the maximum result limit.  | |

## Space

Display dynamic content created in your spaces from anywhere on your site. In this object you have access to all information relevant to the entries, the content types, and the file manager. The available attributes are:

| Description  | Example  |
|---|---|
| **[space.categories](#category)** An array of objects of the category type that contains all the categories of space. |  |
| **[space.entries](#entry)** Page-type object that meets the search parameters.  | |
| **[space.types](#content)** Content-type object array that contains all the types of space.  | |
| **space.name** The name of the space.  | ```New Space``` |

## Target

These drops allow you to obtain information from Targets. The available attributes are:

| Description  | Example  |
|---|---|
| **target.id** A string with the ID associated with the target. |  |
| **target.name** A string with the name associated with the target.  | |

## Content Type

Use the Content Type drops to get information about your content types from the Content module.

| Description  | Example  |
|---|---|
| **[type.entries](#entry)** Entry object array containing all entries of the type. |  |
| **[type.fields](#field)** Object array of fields within the selected content type.  | |
| **[type.entry](#entry)** Object of the first entry of the selected type. This is also used with single cardinality entries.  | |
| **type.name** Name of the type.  | ```NewType``` |


# User

Use the user drops to get information about your users from the Customers module.

| Description  | Example  |
|---|---|
| **user.access_token** The user's access token. | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ``` |
| **user.age** The user's age  | ```39``` |
| **[user.avatar](#asset)** Asset type object that represents the user avatar.  | |
| **type.name** Name of the type.  | ```508``` |
| **user.birth_at** The user's date of birth.  | ```1982-09-01``` |
| **user.change_password_url** The password change URL.  | ```https://test.miModyo.com/newsite/password/change``` |
| **user.custom_fields** Hash with the user's custom field data.  | ```{"_UCF_Job"=>"Software Engineer"}``` |
| **user.email** The user's email.  | ```ivan@modyo.com``` |
| **user.external_access_token** The user's external access token, if not, displays empty (void).  | ``UEL7K69VUWhSXxX9DjDilB7BtM1I_KQIPWeKV9pTNHLQ```` |
| **user.external_user_id** The user's external user id if they have one.  | ```aswerr1m@mdaa.com``` |
| **user.female_sex_value** The default value when the gender is female.  | ```1``` |
| **user.first_name** Returns the user's first name.  | ```Ivan``` |
| **user.genders** The genres present on the platform.  | ```{:id=>0, :name=>"Male"}{:id=>1, :name=>"Female"}``` |
| **user.generated_password** Boolenano that determines if the password was automatically generated (true) or created by the user (false).  | ```false``` |
| **user.id** The user's id.  | ```16``` |
| **user.initials** The initials of the username.  | ```IM``` |
| **user.last_name** The last name of the user.  | ```Modyo``` |
| **user.male_sex_value** The default value when the gender is male.  | ```0``` |
| **user.member_since** The date from which you are a user you have been a member of the site.  | ```2021-11-23 18:25:07 UTC``` |
| **user.name** The user's full name.  | ```Ivan Modyo Gonzalez``` |
| **[user.notifications](#notificacion)** Array of notification type objects.  |  |
| **user.profile_url** The URL of the user's profile.  | ```https://test.miModyo.com/realms/default/profile``` |
| **user.sex** The gender value configured for the user. | ```0``` |
| **[user.targets](#target)** Array of objects of the target type.  |  |
| **user.undefined_sex_value** The default value when gender is undefined.  | ```3``` |
| **[user.unread_notifications](#notification)** Array of notification-type objects.  |  |
| **user.unread_notifications_count** The count of unread notifications.
  | ```2``` |
| **user.username** The user's username.  | ```ivan@modyo.com``` |
| **user.uuid** The uuid of the user.  | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572``` |

## User Agent

Use the user agent drops to get agent information from the web browser.

| Description  | Example  |
|---|---|
| **user_agent.agent** A string with the type of agent that is running.  | |
| **user_agent.as_json** A string in JSON format with all the agent configuration running.  | |
| **user_agent.browser** A string with the browser name for the agent.  | |
| **user_agent.browser_version** A string with the browser version for the agent.  | |
| **user_agent.is_modyo_shell** Boolean that determines if the agent is being managed by a Modyo application  | |
| **user_agent.platform** A string with the version of the agent's operating system.  | |


# Widget

These drops get the information relevant to Widgets.

| Description  | Example  |
|---|---|
| **widget.cache_key** The cache key associated with the widget.  | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at** The creation date of the widget.  | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00``` |
| **widget.id** The ID associated with the respective widget.  | ```506``` |
| **widget.resolve_type** The type of the widget with underscore.  | ```content_list_widget``` |
| **widget.title** The title of the widget.  | ```Content list``` |
| **widget.css_class** The css class associated with the widget.  | ```content-list-widget``` |
| **widget.name** The name of the widget.  | ```Content list``` |
| **widget.type** The type of the widget.  | ```content-list``` |
| **widget.use_default_title** Boolean indicating if the widget uses the default title.  | ```false``` |
| **widget.wid** The widget wid.  | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3``` |
| **widget.width** The width configured in the widget.  | ```full``` |

### Content List Widget

| Description  | Example  |
|---|---|
| **content_list_widget.context_params** The context parameters associated with the widget.  | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **[content_list_widget.entries](#entry)** Array of Entries type Objects associated with the widget.  | |
| **content_list_widget.show_caption** Boolean if the show caption option is active. | ```true``` |
| **content_list_widget.space_id** The ID of the Space associated with the widget. | ```5``` |
| **content_list_widget.type_uid** The uid of the type associated with the widget. | ```the-new-type``` |

### Custom Widget

| **custom_widget.manager_uuid** The uuid of the custom widget. | ```a6090e3f-1d46-44e3-885c-14971ca8fc27``` |
| **custom_widget.sync** Boolean that determines if the load is synchronous (true) or asynchronous (false). | ```true``` |
| **custom_widget.css** A string with the CSS associated with the widget. | |
| **custom_widget.html** A string with the HTML associated with the widget. | |
| **custom_widget.js** A string with the JavaScript associated with the widget. | |
| **custom_widget.version** The hash version of the custom widget. | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### Rich Text Widget

| **rich_text_widget.html** El contenido html del widget. | ```<p><strong><span style=\"color: rgb(216, 55, 98);\">Hello World&nbsp;<span class=\"fr-emoticon fr-deletable\">😃</span>&nbsp;</span></strong></p>``` |


### Text Widget

| **text_widget.html** The html associated with the text widget. | ```Hello world``` |







<style>
table, th, td {
  border: 1px solid white;
}
</style>