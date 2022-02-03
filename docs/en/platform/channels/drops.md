## Drops

Modyo has drops available for different contexts within, for example you can find drops for account, content, channels, and customers.

### Account Drops
The drops available globally are:

```
account:
  - url
  - host
  - disable_modyo_credentials
  - google_key
  - oauth2_callback_url
  - oidc_callback_url
```

### Content drops
The drops available for content are:

```
space:
  - entries
  - types
  - name
type:
  - entries
  - fields
  - name
entry:
  - space
  - category
  - category_name
  - category_slug
  - type
  - type_uid
  - tags
  - account_url
  - url
  - author
  - meta
  - fields
field:
  - name
  - type
location:
  - location_street
  - latitude
  - longitude
category:
  - id
  - slug
  - name
  - url
  - parent
  - children
  - siblings
  - products_url
  - support_url
  - networks_url
  - profiles_url
  - posts_url
  - promotions_url
  - albums_url
  - videos_url
  - files_url
  - audio_url
  - places_url
asset:
  - url
  - thumbnail_url
  - uuid
  - data_file_name
  - name
  - content_type
  - title
  - alt
  - size
  - description
audio_asset:
  - url
file_asset:
  - url
  - thumbnail_url
  - image_thumbnail_url
  - pdf_thumbnail_url
  - is_image
  - is_video
  - is_audio
  - is_pdf
  - is_another
  - temp_url
video_asset:
  - url
  - thumbnail_url
```

### Channels drops
The drops available for channels are:

```
site:
  - breadcrumb
  - categories
  - csrf_meta_tag
  - url
  - menu_items
  - account_url
  - current_year
  - manifest_url
  - sw_enabled
  - sw_url
  - sw_scope
  - add_parent_breadcrumb
site_search:
  - have_results
  - results
  - have_less_relevant_results
request:
  - user_agent
  - host
  - domain
  - protocol
  - url
  - path
  - interact_url
  - refresh_url
  - comments_url
  - is_app_shell
user_agent:
  - initialize
  - browser
  - browser_version
  - platform
  - platform_version
  - agent
  - is_modyo_shell
page:
  - grid
  - name
  - content
  - title
  - excerpt
  - name
  - url
  - parent
  - description
menu:
  - items
menu_item:
  - label
  - child_items
  - url
  - parameterized_label
  - category
  - position
  - segment
widget:
  - id
  - cache_key
  - type
  - created_at
  - css_class
  - width
  - name
  - use_default_title
  - title
  - resolve_type
  - uuid
  - wid
  - permanent_cache
rich_text_widget:
  - html
custom_widget:
  - manager_uuid
  - version
text_widget:
  - html
content_list_widget:
  - show_caption
  - entries
  - context_params
  - space_id
  - type_uid
grid:
  - id
  - cache_key
  - resolve_type
full_three_cols_grid:
  - main_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
side_right_three_cols_grid:
  - main_widgets
  - side_right_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
side_left_grid:
  - main_widgets
  - side_left_widgets
side_left_one_col_grid:
  - main_widgets
  - side_left_widgets
  - full_widgets
side_right_one_col_grid:
  - main_widgets
  - side_right_widgets
  - full_widgets
full_grid:
  - main_widgets
full_two_cols_grid:
  - main_widgets
  - col1_widgets
  - col2_widgets
side_right_grid:
  - main_widgets
  - side_right_widgets
side_left_three_cols_grid:
  - main_widgets
  - side_left_widgets
  - col1_widgets
  - col2_widgets
  - col3_widgets
```

### Customers drops
The drops available for customers are:

```
- user:
  - access_token
  - age
  - avatar
  - birth_at
  - change_password_url
  - custom_fields
  - email
  - external_access_token
  - external_user_id
  - female_sex_value
  - first_name
  - genders
  - generated_password
  - id
  - initials
  - last_name
  - male_sex_value
  - member_since
  - name
  - notifications
  - profile_url
  - sex
  - segment_names
  - targets
  - undefined_sex_value
  - unread_notifications
  - unread_notifications_count
  - username
  - uuid
notification:
  - subject
  - body
  - sent_at
  - url
  - opened
- user_agent:
  - agent
  - browser
  - browser_version
  - initialize
  - is_modyo_shell
  - platform
  - platform_version
- user_session:
  - email
  - password
- segment:
  - id
  - name
- form:
  - slug
- form_response:
  - description
  - name
  - parse_answer
  - parse_answers
  - questions
- question:
  - allow_alternatives
  - alternatives
  - form
  - id
  - label
- alternative:
  - id
  - question
- answer:
  - alternative
  - dynamic_segment_url
  - edit_url
  - id
  - question
  - response
  - text_field
  - type
```
