---
search: true
---

# Content types


Content Types are the basis for your Posts. The Types define which fields and validations are required for the Entries, with more than 15 types of fields.

Content Types can be assigned cardinality. This variable indicates how many Entries can exist for this Type. You can add languages to the repository and generate Multilingual Entries, stored in one place. In addition, you can create Users, with different roles and permissions, thus achieving a division of labor called Team Review.

## About the Interface

When you first enter the Types section, click the green **+New Type** button to create a new Type.

Once you've created your first Type, you can create additional types by clicking on the**+New Type** button at the top right.

The search bar allows you to search and filter your types by any word that appears in the Name field.

The table below the search bar shows the Types already created, ordered by default according to the updated date and time, starting from the most recent item and going back.

To reorder the table, click on the symbols next to each category. The categories by which you can reorder are:

- **Name**
- **Identifier (UID) **
- **Creation Date**
- **Updated on** Date

Click on the name of a Type to open the corresponding editor.

## Create a Type

To create a new type of content that will serve as the basis for your posts, follow these steps:

1. From the main menu, click **Content**.
2. Select the space where you want to create a new Type.
3. Click on **Types**.
2. Click the**+ New Type** button.
3. Type the name and identifier (UID).
4. Select the type's cardinality.
5. Click **Create**.

:::tip Tip
We recommend writing the format of the entries within the identifier, for example, videos, posts, etc. This way, any member of the team will know what type of content it is and can use it as a template for their posts without having to create a new one.

Cardinality refers to the number of entries that can exist for that type of content. If you select “individual cardinality”, only one such entry is allowed. If you choose “multiple cardinality”, there is no limit to the number of entries allowed. :::

:::warning Attention
Please note that there is a limit of 50 Content Types per Space.:::

In the creation interface, you'll find an empty template in the center of the screen and on the right side, a table with three tabs: 

- **Add fields**
- **Field Configuration**
- **Configuration**

This interface allows you to create each of the types and format them as needed, according to your requirements.

## Fields

:::tip Tip
The name of the field is of utmost importance, since it will be used to access its value in the Liquid and JS SDKs. To access the value of a field in an entry, you can use the syntax <span v-pre>`{{entry ["field name"]}}`</span>. 

For more information go to the [API reference](/en/platform/content/public-api-reference.html)
:::

All fields require a name, and can optionally be set as required.

If a field is marked as required, when creating or modifying an entry, you must provide a value for that field. Otherwise, you won't be able to save the changes you made.

### Single-line text

This field allows you to enter single-line texts. It has the following restrictions:

- **Minimum length**: Allows you to require a minimum of characters for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the text entered, when creating or modifying an entry, complies with a certain format.

### Rich Text

This field results in a multi-line WYSIWYG text editor that also allows you to modify the HTML code of the text. This field has the following restrictions:

- **Minimum length**: Sets the minimum number of characters for the entered text.
- **Maximum length**: Limits the maximum number of characters for the entered text.

### Dropdown

This field allows you to add a drop-down list where only one option can be selected.

### Radio

Use this field to add a fixed list of items to select only one option.

### Checkbox

This field allows you to add a list from which you can select more than one option or leave it blank.

### Multiple choice

This field allows you to add a text field in which you can type to select an option; it can be predetermined or proposed.

### Boolean

This field allows you to add a question or statement (True or False).

### Integer

This field allows you to add an integer. By default, the value must be in the range of `-65325`to `+65325`. However, you can adjust these limits by applying the following restrictions:

- **Minimum length**: Sets the minimum number of characters for the entered text.
- **Maximum length**: Sets the maximum number of characters for the entered text.

### Decimal

Use this field to enter a decimal number. The number must be between `-65325` and `+65325`. However, it can be limited by making use of the restrictions:

- **Minimum length**: Allows you to set a character minimum for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.

### Date

Use this field to add a date picker. Limit the selectable dates by applying the following restrictions:

- **From**: Set the earliest date you can choose.
- **Till**: Set the latest date you can choose.

### Location

Use this field to select a geographical address, based on the fields in Google Maps. If you don't have a Google API key, you can manually enter the location's name, latitude, longitude, and political divisions. These administrative divisions are not standard and vary from country to country. In the case of Chile, the divisions are: Region, Province, Commune and City.

:::warning Attention
To ensure that location maps work properly with the Google API key configured in your account, the key must have permissions to access:

* JavaScript Maps API
* Places API
* Geocoding API
:::

### File

This field allows you to attach a single file to the entry, using the file manager.

### Asset List

This field allows you to attach multiple files to the entry, using the file manager.

### Content (link to one)

Use this field to link an Entry to another existing Post published within the Space. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that only entries of the specified type can be selected, as a link.

### Content List (link to many)

This field allows you to link more than one existing Entry, within the Space, to another Entry. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that only entries of the selected type can be selected as a link.

### `(coming soon)` group

Use the Group field to house another field inside it. You can assign a name to the group according to your needs, and also name the fields within the group. In the hint field, include the text you want to display to help your users complete the field correctly. 

Once you have more than one type of field within a group, you can drag and order them as needed. 

There is no limit to the number of fields you can include within a group. 

You can validate the contents of the fields as follows: 

- **Required**: Check the **Required** box to force the group or field to be completed.
  - If you mark the group as required, at least one item within the group must be completed. 
  - If you mark an item as required, that item must have content.
- **Unique**: When you mark an entry as unique, its content cannot be repeated within the same group. 

:::tip Tip
A group can host any type of field, except another group. :::


## Settings

In this tab, you can see the name and UID of the type. The UID is important, as it is used to refer to the type from the Liquid SDKs, JavaScript, and the API. Next, you'll see a button that can be in 2 states:

- **Reindex**: Allows you to re-index the model in case of problems with the public API.
- **Cancel reindexing**: If a reindexing is in progress, you can cancel the process by clicking this button. 

:::warning Attention
When you reindex one of your types, the previously indexed model will remain available until the new indexing is complete. Once the reindexing is complete, the old index will be overwritten with the new index.
:::

:::warning Warning
Note that depending on the [cache settings you have in your space](/en/platform/content/spaces.html#cache), you may not see the changes immediately after you have finished reindexing.
:::
