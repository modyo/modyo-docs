---
search: true
---

# Objects

Objects (also known as Liquid Variables) allow access to dynamic information in Modyo Platform. They are predefined data containers that Modyo provides to access information about users, sites, content, and more.

### What are objects in Modyo?

In Modyo, objects are special variables that contain structured information about different aspects of your platform:

- **User information**: Authenticated user data
- **Site data**: Configuration and properties of the current site
- **Dynamic content**: Entries, spaces, and content types
- **Page context**: Information about the current page
- **System configuration**: Account data and global configuration

These objects are automatically available in your templates and you can access their properties using dot notation or brackets.

### Available objects

Below are all the objects available in Modyo Platform, organized alphabetically:

## account

Account objects are mainly used in the context of account authentication, which means that they can be called from anywhere as they are considered global in scope. The available attributes are:

| Object                 | Description                                                                                                | Example                                       |
|------------------------|------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| **account.url**        | The Modyo Platform URL, including the protocol and sub-domain.                                             | ```https://test.modyo.com```                  |
| **account.host**       | The name of the Modyo Platform sub-domain.                                                                 | ```test```                                    |
| **account.google_key** | If there is authentication with Google, it returns the credential key; otherwise, it returns empty (void). | ```AIzaSyDmrYmbFpzqdIxHycHbgtJrs9lhKOfggEE``` |

## adminuser

Account administrators are users with privileges to make changes at the Account level, as well as in the configuration of Spaces or Sites.

| Object                   | Description                                       | Example                   |
|--------------------------|---------------------------------------------------|---------------------------|
| **adminuser.avatar**     | Asset type object for the administrator's avatar. |                           |
| **adminuser.email**      | Administrator email.                              | ```john.doe@modyo.com ``` |
| **adminuser.first_name** | Administrator's first name.                       | ```John```                |
| **adminuser.last_name**  | Administrator's last name.                        | ```Doe```                 |
| **adminuser.name**       | Administrator's full name.                        | ```John Doe```            |

## asset

Asset type object. Contains relevant information about a file within the [File Manager](/en/platform/content/asset-manager).

| Object                   | Description                                                | Example                                                                                                                 |
|--------------------------|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| **asset.data_file_name** | The name of the asset.                                     | ```foto.jpg```                                                                                                          |
| **asset.description**    | Description of the file, if configured.                    | ```Platón uses this allegory to explain what it is like for the philosopher and teacher to guide people to knowledge``` |
| **asset.title**          | The title associated with the asset.                       | ```Photo```                                                                                                             |
| **asset.uuid**           | The uuid of the asset.                                     | ```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```                                                                              |
| **asset.alt**            | Alternative text associated with the asset, if configured. | ```The myth of Plato's cave```                                                                                          |
| **asset.alt_text**       | Alternative text associated with the asset, if configured. | ```The myth of Plato's cave```                                                                                          |
| **asset.content_type**   | Content type associated with the asset.                    | ```image/jpeg```                                                                                                        |
| **asset.name**           | The name assigned to the asset.                            | ```foto.jpg```                                                                                                          |
| **asset.size**           | Size (in bytes) of the uploaded file.                      | ```20959```                                                                                                             |
| **asset.thumbnail_url**  | URL of the asset's thumbnail.                              | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```                                                     |
| **asset.url**            | URL where the asset is located.                            | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```                                                   |

### audio_asset

The Audio object is a subclass that inherits the same attributes as Asset. You can use `audio_asset` instead of `asset`.

It inherits the following attributes from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### file_asset

The File object is a subclass that inherits the same attributes as Asset. You can use `file_asset` instead of `asset`.

It inherits the following attributes from [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

| Object                             | Description                                                    | Example                                                                 |
|------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------|
| **file_asset.url**                 | The URL of the file.                                           | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv``` |
| **file_asset.thumbnail_url**       | The URL of the file's thumb.                                   | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```   |
| **file_asset.image_thumbnail_url** | The URL of the file.                                           | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv```   |
| **file_asset.is_image?**           | Boolean indicating if the file is an image.                    | ```false```                                                             |
| **file_asset.is_video?**           | Boolean indicating if the file is a video.                     | ```false```                                                             |
| **file_asset.is_audio?**           | Boolean indicating if the file is an audio.                    | ```false```                                                             |
| **file_asset.is_pdf?**             | Boolean indicating if the file is a PDF.                       | ```false```                                                             |
| **file_asset.is_another?**         | Boolean indicating if the file is of another unspecified type. | ```false```                                                             |
| **file_asset.pdf_thumbnail_url**   | PDF thumbnail URL (if asset is a PDF).                         | ```/uploads/.../thumb.pdf.png```                                        |
| **file_asset.temp_url**            | Ephemeral (expiring) URL for secure access.                    | ```https://cdn.example.com/temporary/abc123```                          |

### video_asset

The Video object is a subclass that inherits the same attributes as Asset. You can use `video_asset` instead of `asset`.

| Object                        | Description                     | Example                                                                   |
|-------------------------------|---------------------------------|---------------------------------------------------------------------------|
| **video_asset.url**           | The URL of the video.           | ```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm``` |
| **video_asset.thumbnail_url** | The URL of the video thumbnail. | ```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```     |

## category

Category type object (Tag). Contains relevant information about an entry's categories.

| Object                | Description                                                             | Example           |
|-----------------------|-------------------------------------------------------------------------|-------------------|
| **category.id**       | Category ID.                                                            | ```12345```       |
| **category.slug**     | Category slug.                                                          | ```category-1```  |
| **category.name**     | Category name.                                                          | ```Category 1```  |
| **category.url**      | Canonical URL of the category.                                          | ```/category-1``` |
| **category.children** | Array of `category` type objects with all the children in the category. |                   |
| **category.parent**   | `category` type object corresponding to the category's parent.          |                   |
| **category.siblings** | Array of `category` type objects with all the siblings in the category. |                   |

## entry

Create dynamic content in your spaces using Entries. In this object you have access to all relevant information about the entries. The available attributes are:

| Object                  | Description                                                                                  | Example                                                                   |
|-------------------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **entry.space**         | Name of the space associated with the entry.                                                 | ```space1```                                                              |
| **entry.category**      | Category path for this entry.                                                                | ```category-1/category-2```                                               |
| **entry.category_name** | Category name for this entry.                                                                | ```category 2```                                                          |
| **entry.category_slug** | This entry's category slug.                                                                  | ```category-2```                                                          |
| **entry.type**          | Entry type.                                                                                  | ``type2``                                                                 |
| **entry.type_uid**      | Unique ID of the entry type.                                                                 | ``type2``                                                                 |
| **entry.tags**          | Array of strings with the tags for this entry.                                               | ```tag1, tag2```                                                          |
| **entry.excerpt**       | Excerpt associated with the entry.                                                           | ```This is the excerpt of a very cool entry```                            |
| **entry.account_url**   | Account URL.                                                                                 | ```https://test.modyo.com```                                              |
| **entry.url**           | Canonical URL of the entry.                                                                  | ```https://test.modyo.com/entry```                                        |
| **entry.author**        | User object who wrote the entry.                                                             |                                                                           |
| **entry.meta**          | Metadata: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private. |                                                                           |
| **entry.fields**        | Array of objects with the entry's fields.                                                    |                                                                           |
| **entry.as_json**       | JSON representation (meta + fields).                                                         | ```{"meta":{"uuid":"abc"},"fields":[{"name":"title","value":"Hello"}]}``` |

## field

Displays all information about an entry's fields.

| Object                                    | Description                                    | Example                               |
|-------------------------------------------|------------------------------------------------|---------------------------------------|
| **field.name**                            | Custom field name.                             | ```Field1```                          |
| **field.type**                            | Name of the type associated with the field.    | ```Type1```                           |
| **repeatable_group_field.fields_schema**  | Schema for fields in a repeatable group.       | ```[{"name":"item","type":"text"}]``` |
| **repeatable_group_field.json_format**    | Group value as JSON string.                    | ```"[{\"item\":\"Value\"}]"```        |
| **repeatable_group_field.representation** | Human-readable group representation.           | ```"Item: Value"```                   |
| **repeatable_group_field.editable?**      | Indicates if the group is editable.            | ```true```                            |
| **repeatable_group_field.locale**         | Locale of the group's content.                 | ```"en"```                            |
| **repeatable_group_field.space**          | Space identifier for the group.                | ```"marketing"```                     |
| **repeatable_group_field.as_json**        | JSON representation of the group.              | ```{"fields":[{"item":"Value"}]}```   |
| **asset_field.pdf_thumbnail_url**         | PDF thumbnail when field references PDF asset. | ```/uploads/.../pdf-thumb.png```      |
| **asset_field.temp_url**                  | Ephemeral URL of referenced asset.             | ```https://cdn.example.com/tmp/xyz``` |
| **asset_field.special_image?**            | Indicates special image variant.               | ```false```                           |

## form

These objects allow you to get information via Liquid for a form in the Customers module.

| Object        | Description | Example            |
|---------------|-------------|--------------------|
| **form.slug** | Form slug.  | ```the-new-form``` |

### alternative

| Object                   | Description           | Example                  |
|--------------------------|-----------------------|--------------------------|
| **alternative.id**       | Alternative ID.       | ```The first question``` |
| **alternative.question** | Question type object. |                          |

### answer

| Object                        | Description                                        | Example                                                                                        |
|-------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------|
| **answer.edit_url**           | Response editing URL.                              | ```"https://test.modyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"``` |
| **answer.id**                 | Answer ID.                                         | ```5```                                                                                        |
| **answer.question**           | Question type object associated with the answer.   |                                                                                                |
| **answer.response**           | Response type object associated with the response. |                                                                                                |
| **answer.text_field**         | Text field associated with the answer.             | ```This is the answer in the text field```                                                     |
| **answer.type**               | Response type.                                     | ```text_answer```                                                                              |
| **answer.alternative**        | Selected alternative (for multiple choice).        |                                                                                                |
| **answer.dynamic_target_url** | Dynamic URL based on answer value.                 | ```https://example.com/path```                                                                 |

### form_response

| Object                        | Description                    | Example                                                                                              |
|-------------------------------|--------------------------------|------------------------------------------------------------------------------------------------------|
| **form_response.description** | Form description.              | ```This form is the new user form```                                                                 |
| **form_response.name**        | Form name.                     | ```The new form```                                                                                   |
| **form_response.questions**   | Array with the form questions. | ```[{"title"=>"What is your job title?", "type"=>"textquestion", "answer"=>"Software developer"}]``` |

### question

These objects allow you to get information via Liquid for questions on a form in the Customers module.

| Object                           | Description                                            | Example                  |
|----------------------------------|--------------------------------------------------------|--------------------------|
| **question.allow_alternatives?** | Boolean to check if the question accepts alternatives. | ```false```              |
| **question.alternatives**        | Array with alternatives type objects.                  |                          |
| **question.allow_alternatives?** | Boolean to check if the question accepts alternatives. | ```false```              |
| **question.form**                | Form-type object.                                      |                          |
| **question.id**                  | Returns the question id.                               | ```3```                  |
| **question.label**               | The label of the question.                             | ```The first question``` |
| **question.name**                | The name of the question.                              | ```The first question``` |
| **question.uid**                 | The uid of the question.                               | ```text-question-1```    |

## grid

Contains the definition of a Grid on a Page.

| Object                | Description                         | Example                            |
|-----------------------|-------------------------------------|------------------------------------|
| **grid.id**           | Grid ID.                            | ```508```                          |
| **grid.cache_key**    | Cache key associated with the grid. | ```layouts/grids/full_grids/508``` |
| **grid.resolve_type** | Grid type with underscore.          | ```full_grid```                    |

### full_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                     | Description                   | Example |
|----------------------------|-------------------------------|---------|
| **full_grid.main_widgets** | Array of widget type objects. |         |

### full_three_cols_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                      | Description                   | Example |
|---------------------------------------------|-------------------------------|---------|
| **full_three_cols_grid.main_widgets**       | Array of widget type objects. |         |
| **full_three_cols_grid.col1_widgets**       | Array of widget type objects. |         |
| **full_three_cols_grid.col2_widgets**       | Array of widget type objects. |         |
| **full_three_cols_grid.col3_widgets**       | Array of widget type objects. |         |
| **side_right_three_cols_grid.main_widgets** | Array of widget type objects. |         |

### full_two_cols_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                              | Description                   | Example |
|-------------------------------------|-------------------------------|---------|
| **full_two_cols_grid.main_widgets** | Array of widget type objects. |         |
| **full_two_cols_grid.col1_widgets** | Array of widget type objects. |         |
| **full_two_cols_grid.col2_widgets** | Array of widget type objects. |         |

### side_left_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                               | Description                   | Example |
|--------------------------------------|-------------------------------|---------|
| **side_left_grid.main_widgets**      | Array of widget type objects. |         |
| **side_left_grid.side_left_widgets** | Array of widget type objects. |         |

### side_left_one_col_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                       | Description                   | Example |
|----------------------------------------------|-------------------------------|---------|
| **side_left_one_col_grid.main_widgets**      | Array of widget type objects. |         |
| **side_left_one_col_grid.side_left_widgets** | Array of widget type objects. |         |
| **side_left_one_col_grid.full_widgets**      | Array of widget type objects. |         |

### side_left_three_cols_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                          | Description                   | Example |
|-------------------------------------------------|-------------------------------|---------|
| **side_left_three_cols_grid.main_widgets**      | Array of widget type objects. |         |
| **side_left_three_cols_grid.side_left_widgets** | Array of widget type objects. |         |
| **side_left_three_cols_grid.col1_widgets**      | Array of widget type objects. |         |
| **side_left_three_cols_grid.col2_widgets**      | Array of widget type objects. |         |
| **side_left_three_cols_grid.col3_widgets**      | Array of widget type objects. |         |

### side_right_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                 | Description                   | Example |
|----------------------------------------|-------------------------------|---------|
| **side_right_grid.main_widgets**       | Array of widget type objects. |         |
| **side_right_grid.side_right_widgets** | Array of widget type objects. |         |

### side_right_one_col_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                         | Description                   | Example |
|------------------------------------------------|-------------------------------|---------|
| **side_right_one_col_grid.main_widgets**       | Array of widget type objects. |         |
| **side_right_one_col_grid.side_right_widgets** | Array of widget type objects. |         |
| **side_right_one_col_grid.full_widgets**       | Array of widget type objects. |         |

### side_right_three_cols_grid

Extends the functionality of the Grid object and contains the following additional attributes:

| Object                                            | Description                   | Example |
|---------------------------------------------------|-------------------------------|---------|
| **side_right_three_cols_grid.side_right_widgets** | Array of widget type objects. |         |
| **side_right_three_cols_grid.col1_widgets**       | Array of widget type objects. |         |
| **side_right_three_cols_grid.col2_widgets**       | Array of widget type objects. |         |
| **side_right_three_cols_grid.col3_widgets**       | Array of widget type objects. |         |

## location

Location type object. Contains relevant information about a geolocation point.

| Object                                   | Description                            | Example                     |
|------------------------------------------|----------------------------------------|-----------------------------|
| **location.location_street**             | Location name in Google Maps.          | ```Main street 3883```      |
| **location.latitude**                    | Latitude of the point in Google Maps.  | ```-33.3982607```           |
| **location.longitude**                   | Longitude of the point in Google Maps. | ```-70.6003616```           |
| **location.country**                     | Country name/code.                     | ```Chile```                 |
| **location.administrative_area_level_1** | First-level administrative division.   | ```Santiago Metropolitan``` |
| **location.administrative_area_level_2** | Second-level administrative division.  | ```Santiago```              |
| **location.administrative_area_level_3** | Third-level administrative division.   |                             |
| **location.administrative_area_level_4** | Fourth-level administrative division.  |                             |
| **location.administrative_area_level_5** | Fifth-level administrative division.   |                             |

## menu

Menu type object. Contains relevant information about menu items.

| Object         | Description                                                   | Example |
|----------------|---------------------------------------------------------------|---------|
| **menu.items** | Array of `menu_items` type objects associated with this menu. |         |

### menu_item

| Object                            | Description                                                   | Example                               |
|-----------------------------------|---------------------------------------------------------------|---------------------------------------|
| **menu_item.category**            | Category associated with the menu item.                       | ```home```                            |
| **menu_item.child_items**         | Array of child item objects of the current item.              |                                       |
| **menu_item.classes**             | CSS classes associated with this item.                        | ```mdi, mdi-circle```                 |
| **menu_item.description**         | Description for this item.                                    |                                       |
| **menu_item.label**               | Menu item label.                                              | ```Home```                            |
| **menu_item.parameterized_label** | Parameterized label associated with the menu item.            | ```home```                            |
| **menu_item.position**            | Position associated with the menu item (0 as first position). | ```0```                               |
| **menu_item.url**                 | URL associated with the menu item.                            | ```https://test.modyo.com/newsite/``` |
| **menu_item.target**              | Link target (e.g. _blank, _self).                             | ```_blank```                          |

## notification

These objects allow you to get information via Liquid for notifications in the Customers module.

| Object                    | Description                                        | Example                                                            |
|---------------------------|----------------------------------------------------|--------------------------------------------------------------------|
| **notification.opened**   | Boolean indicating if the notification was opened. | ```true```                                                         |
| **notification.sent_at**  | Notification sent date.                            | ```2012-11-16 00:46:40```                                          |
| **notification.body**     | Notification body.                                 | ```mdi, mdi-circle```                                              |
| **menu_item.description** | Description for this item.                         | ```<p>This is a test message in campaigns via notifications</p>``` |
| **notification.subject**  | Notification subject.                              | ```Modyo Developers Update```                                      |
| **notification.url**      | Notification URL.                                  | ```https://test.modyo.com/profile?notification_id=65345```         |

## order

These objects allow you to get information via Liquid for Commerce module orders.

| Object                       | Description                                                  | Example                   |
|------------------------------|--------------------------------------------------------------|---------------------------|
| **order.created_at**         | String with the order creation date.                         |                           |
| **order.current_state**      | String with the current order status.                        | ```2012-11-16 00:46:40``` |
| **order.id**                 | Order ID.                                                    |                           |
| **order.order_items**        | Array of `order_item` type objects.                          |                           |
| **order.payment_info**       | Hash with the order payment information.                     |                           |
| **order.short_uuid**         | String with the short UUID of the order.                     |                           |
| **order.tax_total**          | Float with the total amount of taxes paid for the order.     |                           |
| **order.total**              | Float with the total amount of the order.                    |                           |
| **order.updated_at**         | String with the last modification date.                      |                           |
| **order.url**                | String with the order URL.                                   |                           |
| **order.uuid**               | String with the full UUID of the order.                      |                           |
| **order.confirmation_code**  | String with the order confirmation code.                     |                           |
| **order.customer_email**     | String with the customer's email associated with this order. |                           |
| **order.customer_name**      | String with the full name of the associated customer.        |                           |
| **order.order_description**  | String with the order description.                           |                           |
| **order.order.reference_id** | String with the reference ID for this order.                 |                           |
| **order.reference_order**    | Identifier for a related/reference order.                    | ```REF-2025-01```         |

### order_item

| Object                    | Description                         | Example |
|---------------------------|-------------------------------------|---------|
| **order_item.created_at** | Order item creation date.           |         |
| **order_item.id**         | Order item ID.                      |         |
| **order_item.name**       | Order item name.                    |         |
| **order_item.price**      | Order item price.                   |         |
| **order_item.quantity**   | Number of items in the order.       |         |
| **order_item.updated_at** | Last update date of the order item. |         |

## origination

These objects obtain the information relevant to Originations.

| Object                             | Description                                                                | Example                                                                                                 |
|------------------------------------|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| **origination.name**               | The name of the origination flow.                                          | ```My new Origination```                                                                                |
| **origination.description**        | The description of the origination flow.                                   | ```Origination process to guide customers from personal information register to bank data validation``` |
| **origination.due_value**          | The value of the due date for the origination flow.                        | ```15```                                                                                                |
| **origination.due_unit**           | The unit of the due date for the origination flow (e.g., "days", "weeks"). | ```days```                                                                                              |
| **origination.uid**                | The unique identifier of the origination flow.                             | ```my-origination```                                                                                    |
| **origination.url**                | The URL of the origination flow page.                                      | ```https://test.modyo.com/new-site/myorigination```                                                     |
| **origination.steps**              | The steps of the origination flow.                                         | ```[{"uid":"step-01"}]```                                                                               |
| **origination.can_begin**          | Whether the user can begin the origination flow.                           | ```true```                                                                                              |
| **origination.can_create**         | Whether the user can create a new submission for the origination flow.     | ```true```                                                                                              |
| **origination.can_resume**         | Whether the user can resume a submission for the origination flow.         | ```true```                                                                                              |
| **origination.begin_message**      | The beginning message for the origination flow.                            | ```"Welcome!"```                                                                                        |
| **origination.completion_message** | The message to display upon completion of the origination flow.            | ```"All done"```                                                                                        |
| **origination.ordered_steps**      | Whether the steps of the origination flow are ordered.                     | ```true```                                                                                              |
| **origination.new_submission_url** | The URL to create a new submission for the origination flow.               | ```/originations/my-origination/new```                                                                  |

## page

These objects are very useful for creating dynamic pages using Liquid.

| Object                | Description                                                                                     | Example                                                    |
|-----------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| **page.content**      | Page content.                                                                                   | ```Home Main Sectionx Build better digital products ...``` |
| **page.name**         | Name associated with the page.                                                                  | ```Home```                                                 |
| **page.parent**       | Page type object that is the parent of the page; if it does not exist, it returns empty (void). |                                                            |
| **page.url**          | Page URL.                                                                                       | ```https://test.modyo.com/newsite/```                      |
| **page.current_path** | Path associated with the page.                                                                  | ```/examples```                                            |
| **page.description**  | Page description.                                                                               | ```This is the description of a very cool page```          |
| **page.excerpt**      | Excerpt associated with the page.                                                               | ```This is the excerpt of a very cool page```              |
| **page.grid**         | Grid type object associated with the page.                                                      |                                                            |
| **page.meta_tags**    | Array of strings with the meta tags associated with the page.                                   | ```My, Test, Metatag```                                    |
| **page.title**        | Title associated with the page.                                                                 | ```Home```                                                 |

## realm

| Object                              | Description                                                                                   | Example |
|-------------------------------------|-----------------------------------------------------------------------------------------------|---------|
| **realm.disable_modyo_credentials** | Boolean that determines if Modyo credentials are deactivated. `true` deactivates credentials. |         |
| **realm.oauth2_callback_url**       | String that determines the OAuth2 callback URL.                                               |         |
| **realm.oidc_callback_url**         | String that determines the OIDC callback URL.                                                 |         |

## request

These drops allow you to get information when making a request.

| Object                    | Description                                                                    | Example                                                       |
|---------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------|
| **request.domain**        | Request domain.                                                                | ```modyo.com```                                               |
| **request.host**          | Request host.                                                                  | ```test.modyo.com```                                          |
| **request.protocol**      | Protocol associated with the request.                                          | ```https://```                                                |
| **request.user_agent**    | User agent details.                                                            | ```mozilla/5.0 (macintosh; intel mac os x 10_15_2) ...```     |
| **request.comments_url**  | Request comments URL.                                                          | ```https://test.modyo.com/newsite/requests/123124/comments``` |
| **request.interact_url**  | Request interaction URL.                                                       | ```https://test.modyo.com/newsite/requests```                 |
| **request.is_app_shell?** | Boolean indicating if the request's user agent belongs to a Modyo application. | ```false```                                                   |
| **request.path**          | Request path.                                                                  | ```/newsite/the-new-type/newentry```                          |
| **request.refresh_url**   | Request refresh URL.                                                           | ```https://test.modyo.com/newsite/requests/refresh```         |
| **request.url**           | Request URL.                                                                   | ```https://test.modyo.com/ivansite/the-new-type/newentry```   |

## segment

These drops allow you to obtain information from Segments. The available attributes are:

| Object           | Description                                         | Example |
|------------------|-----------------------------------------------------|---------|
| **segment.id**   | A string with the ID associated with the segment.   |         |
| **segment.name** | A string with the name associated with the segment. |         |

## site

Site objects are used to get all the information about a site. The available attributes are:

| Object                          | Description                                                                                            | Example                |
|---------------------------------|--------------------------------------------------------------------------------------------------------|------------------------|
| **site.account**                | The Account-type object associated with this site.                                                     |                        |
| **site.apple_touch_icons**      | String with the link for the Apple touch icon.                                                         |                        |
| **site.cache_key**              | The cache key associated with the site.                                                                |                        |
| **site.description**            | A string with the description of the site.                                                             |                        |
| **site.favicon_link**           | A string with the link to the favicon.                                                                 |                        |
| **site.host**                   | A string with the site host.                                                                           |                        |
| **site.keywords**               | A string with all the keywords separated by commas on the site.                                        |                        |
| **site.language**               | A string containing the language of the site.                                                          |                        |
| **site.login_url**              | A string with the URL to log in to the site.                                                           |                        |
| **site.logo**                   | A string with the location of the logo for the site.                                                   |                        |
| **site.logout_url**             | A string containing the site's logout URL.                                                             |                        |
| **site.name**                   | A string with the name of the site.                                                                    |                        |
| **site.profile_url**            | A string with the profile link for the site.                                                           |                        |
| **site.pwa_icon**               | Asset type object that contains the PWA icon information.                                              |                        |
| **site.search_url**             | A string with the URL for the site's search bar.                                                       |                        |
| **site.tag_manager_id**         | A string with the Google Tag Manager ID of the site.                                                   |                        |
| **site.tagline**                | A string describing the site's tagline.                                                                |                        |
| **site.use_pwa_manifest**       | Boolean that determines if the site uses PWA manifest.                                                 |                        |
| **site.uuid**                   | A string with the UUID of the site.                                                                    |                        |
| **site.account_url**            | A string with the URL of the account associated with the site.                                         |                        |
| **site.breadcrumb**             | A string with the CSS class of the breadcrumb div.                                                     |                        |
| **site.cache_version**          | A string with the cache key for this version of the site.                                              |                        |
| **site.csrf_meta_tag**          | A string with the CSRF meta tag.                                                                       |                        |
| **site.css_path**               | A string with the location of the site's CSS file.                                                     |                        |
| **site.current_year**           | A string with the current year of the site.                                                            |                        |
| **site.js_path**                | A string with the location of the site's JS file.                                                      |                        |
| **site.login_enabled**          | Boolean that determines if the site uses login.                                                        |                        |
| **site.manifest_url**           | A string with the URL of the manifest for the site.                                                    |                        |
| **site.meta_tags**              | A string with the site's meta tags separated by commas.                                                |                        |
| **site.originations**           | Origination object array containing all originations with associated origination page on current site. |                        |
| **site.root_path**              | A string with the root location of the site.                                                           |                        |
| **site.service_worker_enabled** | Boolean that determines if the top-level service worker is activated (alias: sw_enabled)               |                        |
| **site.service_worker_scope**   | A string with the scope of the site's service worker.                                                  |                        |
| **site.service_worker_url**     | A string with the service worker URL for the site.                                                     |                        |
| **site.url**                    | A string with the URL associated with the site.                                                        |                        |
| **site.vapid_public_key**       | Public VAPID key for Web Push.                                                                         | ```BNa...xyz```        |
| **site.time_zone**              | Site time zone identifier.                                                                             | ```America/New_York``` |
| **site.realm_slug**             | Slug of the realm the site belongs to.                                                                 | ```default```          |

## sitesearch

These drops allow you to get information from a site's browser.

| Object                                    | Description                                                                      | Example |
|-------------------------------------------|----------------------------------------------------------------------------------|---------|
| **sitesearch.have_results**               | Boolean that determines if the search has results.                               |         |
| **sitesearch.results**                    | Page type object that meets the search parameters.                               |         |
| **sitesearch.have_less_relevant_results** | Boolean that determines if there are more results that exceed the maximum limit. |         |

## space

Displays dynamic content created in your spaces from anywhere on your site. In this object you have access to all relevant information about entries, content types, and the file manager. The available attributes are:

| Object                              | Description                                                            | Example         |
|-------------------------------------|------------------------------------------------------------------------|-----------------|
| **spaces['space_name'].categories** | Array of category type objects containing all categories in the space. |                 |
| **spaces['space_name'].entries**    | Page type objects that meet the search parameters.                     |                 |
| **spaces['space_name'].name**       | Space name.                                                            | ```New Space``` |

## submission

These objects obtain the information relevant to the Submissions.

| Object                                  | Description                                                  | Example                                                    |
|-----------------------------------------|--------------------------------------------------------------|------------------------------------------------------------|
| **submission.status**                   | The status of the submission (e.g., "pending", "completed"). | ```completed```                                            |
| **submission.progress**                 | The progress of the submission as a percentage.              | ```100```                                                  |
| **submission.assignee**                 | The user assigned to the submission.                         |                                                            |
| **submission.created_at**               | The date and time when the submission was created.           | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00```                 |
| **submission.updated_at**               | The date and time when the submission was last updated.      | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00```                 |
| **submission.started_at**               | The date and time when the submission was started.           | ```Tue, 15 Feb 2025 15:14:03 UTC +00:00```                 |
| **submission.completed_at**             | The date and time when the submission was completed.         | ```Tue, 15 Feb 2025 20:30:10 UTC +00:00```                 |
| **submission.due_date**                 | The due date of the submission.                              | ```Tue, 22 Feb 2025 12:00:00 UTC +00:00```                 |
| **submission.origination**              | The origination flow of the submission.                      |                                                            |
| **submission.url**                      | The URL of the submission page.                              | ```https://test.modyo.com/new-site/myorigination```        |
| **submission.uuid**                     | The unique identifier of the submission.                     | ```abcd-1234-5678-0000```                                  |
| **submission.tasks['task_identifier']** | The task responses for the submission.                       | ```[{"task_id":"t1"}]```                                   |
| **submission.resume_url**               | The URL to resume the submission.                            | ```/originations/my-origination/submissions/uuid/resume``` |
| **submission.start_info**               | Information about the start of the submission.               | ```{"started_by":"user","at":"2025-02-15"}```              |
| **submission.steps**                    | The steps of the submission.                                 | ```[{"uid":"step-01"}]```                                  |

### step

| Objeto         | Descripción                          | Ejemplo                    |
|----------------|--------------------------------------|----------------------------|
| **step.uid**   | Unique identifier (UID) of the step. | ```step-01```              |
| **step.name**  | Step name.                           | ```Personal Information``` |
| **step.tasks** | Step tasks (array of tasks).         | ```[{"uid":"task-01"}]```  |

### task

| Objeto               | Descripción                          | Ejemplo                                |
|----------------------|--------------------------------------|----------------------------------------|
| **task.uid**         | Unique identifier (UID) of the task. | ```task-01```                          |
| **task.step**        | Step to which the task belongs.      |                                        |
| **task.name**        | Name of the task.                    | ```Enter your personal information:``` |
| **task.type**        | Task type.                           | ```user_input```                       |
| **task.description** | Task description.                    | ```Collect user data```                |


### Task Response Types

| Object                                        | Description                                                         | Example                                       |
|-----------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------|
| **pending_review_task_response.approved**     | Whether the task has been approved.                                 | ```true```                                    |
| **pending_review_task_response.content**      | The content of the review.                                          | ```This is the content of the review```       |
| **code_snippet_task_response.data**           | The content of the code snippet. Alias for the `content` attribute. | ```{"language":"rb","snippet":"puts 'Hi'"}``` |
| **code_snippet_task_response.completed**      | Whether the task has been completed.                                | ```false```                                   |
| **code_snippet_task_response.content**        | The content of the code snippet.                                    | ```puts 'Hi'```                               |
| **validation_task_response.validated**        | Whether the task has been validated.                                | ```true```                                    |
| **digital_signature_task_response.signed**    | Whether the task has been signed.                                   | ```false```                                   |
| **origination_flow_task_response.submission** | The submission of the origination flow task.                        |                                               |

### user_input_task

| Object                     | Description                           | Example                                                          |
|----------------------------|---------------------------------------|------------------------------------------------------------------|
| **user_input_task.fields** | The questions of the user input task. | ```[{"id":1,"uid":"question-1","label":"What is your name?"}]``` |

### user_input_task_response

| Object                                                     | Description                                        | Example                                                                                   |
|------------------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------------------------------------|
| **user_input_task_response.task**                          | The user input task to which the response belongs. |                                                                                           |
| **user_input_task_response.fields['question_identifier']** | The answers for the user input task response.      | ```[{"id":1,"text_field":"John Doe","question":{"id":1,"label":"What is your name?"}}]``` |

## type

Use Content Type objects to get information about your content types from the Content module.

| Object           | Description                                                                                        | Example       |
|------------------|----------------------------------------------------------------------------------------------------|---------------|
| **type.entries** | Array of entry objects containing all entries of the type.                                         |               |
| **type.fields**  | Array of field objects within the selected content type.                                           |               |
| **type.entry**   | Object of the first entry of the selected type. This is also used with single cardinality entries. |               |
| **type.name**    | Type name.                                                                                         | ```NewType``` |

## user

Use user objects to get information about your users from the Customers module.

| Object                               | Description                                             | Example                                              |
|--------------------------------------|---------------------------------------------------------|------------------------------------------------------|
| **user.access_token**                | The user's access token.                                | ```Uel7k61VuWhSxX3dJDILB7BtM1I_KQi1wEkV9PtnHLQ```    |
| **user.age**                         | The user's age                                          | ```39```                                             |
| **user.avatar**                      | Asset type object that represents the user avatar.      |                                                      |
| **type.name**                        | Name of the type.                                       | ```508```                                            |
| **user.birth_at**                    | The user's date of birth.                               | ```1982-09-01```                                     |
| **user.change_password_url**         | The password change URL.                                | ```https://test.modyo.com/newsite/password/change``` |
| **user.custom_fields**               | Hash with the user's custom field data.                 | ```{"_UCF_Job"=>"Software Engineer"}```              |
| **user.email**                       | The user's email.                                       | ```ivan@modyo.com```                                 |
| **user.external_access_token**       | The user's external access token, or empty if none.     | ```UEL7K69VUWhSXxX9DjDil...```                       |
| **user.external_user_id**            | The user's external user id if they have one.           | ```ext-12345```                                      |
| **user.female_sex_value**            | Constant value for female gender.                       | ```1```                                              |
| **user.first_name**                  | Returns the user's first name.                          | ```Ivan```                                           |
| **user.genders**                     | The genders present on the platform.                    | ```{:id=>0,:name=>"Male"}{:id=>1,:name=>"Female"}``` |
| **user.generated_password**          | Password auto-generated (true) or user-created (false). | ```false```                                          |
| **user.id**                          | The user's id.                                          | ```16```                                             |
| **user.initials**                    | The initials of the username.                           | ```IM```                                             |
| **user.last_name**                   | The last name of the user.                              | ```Modyo```                                          |
| **user.male_sex_value**              | Constant value for male gender.                         | ```0```                                              |
| **user.member_since**                | Date since user has been a member.                      | ```2021-11-23 18:25:07 UTC```                        |
| **user.name**                        | The user's full name.                                   | ```Ivan Modyo Gonzalez```                            |
| **user.notifications**               | Array of notification type objects.                     |                                                      |
| **user.profile_url**                 | The URL of the user's profile.                          | ```https://test.modyo.com/realms/default/profile```  |
| **user.sex**                         | Current gender value configured for user.               | ```0```                                              |
| **user.submissions**                 | Array of submission type objects.                       |                                                      |
| **user.segments**                    | Array of segment objects.                               |                                                      |
| **user.undefined_sex_value**         | Constant value for undefined gender.                    | ```3```                                              |
| **user.unread_notifications**        | Array of notification-type objects.                     |                                                      |
| **user.unread_notifications_count**  | Count of unread notifications.                          | ```2```                                              |
| **user.username**                    | The user's username.                                    | ```ivan@modyo.com```                                 |
| **user.uuid**                        | The uuid of the user.                                   | ```cdc7f0e2-b5c3-4b92-aa34-962ffa0bi572```           |
| **user.realm_uid**                   | The user's realm.                                       | ```my-realm```                                       |
| **user.current_login_at**            | Timestamp of current login.                             | ```2025-10-21 11:00:00 UTC```                        |
| **user.current_login_ip**            | IP used for current login.                              | ```203.0.113.10```                                   |
| **user.last_login_at**               | Timestamp of previous login.                            | ```2025-10-19 09:30:01 UTC```                        |
| **user.last_login_ip**               | IP of previous login.                                   | ```198.51.100.7```                                   |
| **user.phone**                       | User phone number.                                      | ```+1 555 123 4567```                                |
| **user.responses**                   | Collection of form_response objects.                    | ```[{"name":"Onboarding"}]```                        |
| **user.segment_names**               | Array of segment names.                                 | ```["vip","beta"]```                                 |
| **user.target_names**                | Array of target audience names.                         | ```["retail","premium"]```                           |
| **user.targets**                     | Array of target audience group objects.                 | ```[{"name":"retail"}]```                            |
| **user.realm_default_avatar**        | Default realm avatar (asset).                           |                                                      |
| **user.non_binary_sex_value**        | Constant value for non-binary gender.                   | ```4```                                              |
| **user.other_sex_value**             | Constant value for other gender.                        | ```5```                                              |
| **user.prefer_not_to_say_sex_value** | Constant for prefer-not-to-say gender.                  | ```6```                                              |

## user_agent

Use user agent objects to get information from the web browser agent.

:::warning Public sites
Does not apply to public sites, as in these cases server responses are served from a cache.
:::

| Object                          | Description                                                                  | Example      |
|---------------------------------|------------------------------------------------------------------------------|--------------|
| **user_agent.agent**            | A string with the type of agent that is running.                             |              |
| **user_agent.as_json**          | A string in JSON format with all the agent configuration running.            |              |
| **user_agent.browser**          | A string with the browser name for the agent.                                |              |
| **user_agent.browser_version**  | A string with the browser version for the agent.                             |              |
| **user_agent.is_modyo_shell**   | Boolean that determines if the agent is being managed by a Modyo application |              |
| **user_agent.platform**         | A string with the agent's operating system version.                          |              |
| **user_agent.platform_version** | Version of user's OS/platform.                                               | ```"14.7"``` |

## widget

These objects obtain relevant information about Widgets.

| Object                       | Description                                              | Example                                                     |
|------------------------------|----------------------------------------------------------|-------------------------------------------------------------|
| **widget.cache_key**         | The cache key associated with the widget.                | ```widgets/content_list_widgets/506-20220215151403000000``` |
| **widget.created_at**        | The date the widget was created.                         | ```Tue, 15 Feb 2022 15:14:03 UTC +00:00```                  |
| **widget.id**                | The ID associated with the respective widget.            | ```506```                                                   |
| **widget.resolve_type**      | The type of the widget with underscore.                  | ```content_list_widget```                                   |
| **widget.title**             | The widget title.                                        | ```Content list```                                          |
| **widget.css_class**         | The CSS class associated with the widget.                | ```content-list-widget```                                   |
| **widget.name**              | The widget name.                                         | ```Content list```                                          |
| **widget.type**              | The widget type.                                         | ```content-list```                                          |
| **widget.use_default_title** | Boolean indicating if the widget uses the default title. | ```false```                                                 |
| **widget.wid**               | The widget's wid.                                        | ```63ae60e2-d152-4c70-a5b0-ffa9916162e3```                  |
| **widget.width**             | The width configured in the widget.                      | ```full```                                                  |

### content_list_widget

| Object                                 | Description                                             | Example                                                                                          |
|----------------------------------------|---------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **content_list_widget.context_params** | The context parameters associated with the widget.      | ```{:page=>1, :per_page=>10, :account=>#account_object, :user=>nil, :version_type=>:currents}``` |
| **content_list_widget.entries**        | Array of Entry type objects associated with the widget. |                                                                                                  |
| **content_list_widget.show_caption**   | Boolean if the show caption option is active.           | ```true```                                                                                       |
| **content_list_widget.space_id**       | The ID of the Space associated with the widget.         | ```5```                                                                                          |
| **content_list_widget.type_uid**       | The UID of the type associated with the widget.         | ```the-new-type```                                                                               |

### custom_widget

| Object                         | Description                                      | Example                                                                |
|--------------------------------|--------------------------------------------------|------------------------------------------------------------------------|
| **custom_widget.manager_uuid** | The UUID of the custom widget.                   | ```a6090e3f-1d46-44e3-885c-14971ca8fc27```                             |
| **custom_widget.sync**         | Load synchronous (true) or asynchronous (false). | ```true```                                                             |
| **custom_widget.css**          | CSS associated with the widget.                  |                                                                        |
| **custom_widget.html**         | HTML associated with the widget.                 |                                                                        |
| **custom_widget.js**           | JavaScript associated with the widget.           |                                                                        |
| **custom_widget.version**      | Hashed version of the custom widget.             | ```a666a9243ea76806e4fcebfcd99650b27f162ff5f9e4c4719ab9e0f5c7d159fe``` |

### rich_text_widget

| Object                    | Description                     | Example                                                                                 |
|---------------------------|---------------------------------|-----------------------------------------------------------------------------------------|
| **rich_text_widget.html** | The HTML content of the widget. | ```<p><strong><span style="color: rgb(216, 55, 98);">Hello World</span></strong></p>``` |

### text_widget

| Object               | Description                               | Example           |
|----------------------|-------------------------------------------|-------------------|
| **text_widget.html** | The HTML associated with the text widget. | ```Hello world``` |

## Deprecated Attributes

The following attributes are deprecated and should be avoided in new development. Where possible, use the suggested replacement.

| Attribute                                        | Replacement                   | Notes                                           |
|--------------------------------------------------|-------------------------------|-------------------------------------------------|
| entry.meta.created_at (direct)                   | entry.meta.created_at         | Use nested property instead of direct accessor. |
| entry.meta.updated_at (direct)                   | entry.meta.updated_at         | Use nested property instead of direct accessor. |
| entry.meta.published_at (direct)                 | entry.meta.published_at       | Use nested property instead of direct accessor. |
| entry.meta.unpublished_at (direct)               | entry.meta.unpublished_at     | Use nested property instead of direct accessor. |
| entry.meta.slug (direct)                         | entry.meta.slug               | Use nested property instead of direct accessor. |
| entry.meta.uuid (direct)                         | entry.meta.uuid               | Use nested property instead of direct accessor. |
| entry.meta.private (direct)                      | entry.meta.private            | Use nested property instead of direct accessor. |
| location.location                                | location.location_street      | `location` deprecated; use `location_street`.   |
| widget.uuid                                      | widget.wid                    | `uuid` deprecated; use `wid`.                   |
| match_path_url                                   | (remove)                      | Legacy routing helper removed.                  |
| without_category_url                             | entry.url                     | Category-less URL removed.                      |
| location.latitude / longitude (deprecated flags) | location.latitude / longitude | Old flags replaced by same names.               |
