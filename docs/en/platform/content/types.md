---
search: true
---

# Content types


Content Types are the basis for your Entries. Types define what fields and validations are required for Inputs, with more than 15 types of fields.

These Content Types can be assigned a cardinality, a variable that defines how many Entries can exist for this Type. Languages can be added to the repository and you can generate multi-language entries, protected from one place. You can also create Users, with various roles and permissions, achieving a division of labor that we call Team Review.

<img src="/assets/img/content/types/types.jpg" alt="The UI for the Content Type module.">

## About the Interface

In the Types section of a space, you can find a green **+ New** button at the top you can click to create a new Type.

Below, you can see the Type search bar, which will allow you to filter by any word that is in the Name field.

Then, you will find the table with the Types that have already been created, which will be sorted by default according to the updated date and time, starting from the most recent item back.

To reorder it, you just need to click on the symbols on one side of each category.

There are four categories by which you can reorder:

- **Name**
- **Identifier (UID) **
- **Creation Date**
- **Updated on** Date

If you want to enter any Type, you must click on its Name to open the corresponding editor.

## Create a Type

Create a content type which will function as a template to future entries.

1. From the main menu, click **Content**, then select **Types**.
2. Click **+ New Type**.
3. Type the name and identifier (UID).
4. Select the type's cardinality.
5. Click **Create**.

:::tip Tip
We recommend writing the format of the entries within the identifier, for example, videos, posts, etc. This way, any teammate will know what type of content it is and can use it as a template for their posts without generating a new one.

Cardinality refers to the number of entries that can exist for this type of content. Single Cardinality means that only one such entry can exist. With multiple cardinality there is no limit to the number of entries.
:::

:::warning Warning
There is a limit of 50 Content Types per Space.
:::


In the creation interface, you can see an empty template at the center of your screen, while on the right side, you can see a table with three tabs.

- **Add fields**
- **Field Configuration**
- **Configuration**

This interface is where we populate our types with the correct fields we need based on our content requirements.

## Fields

:::tip Tip
The field name is important because this name is how you access the field value through Liquid and JavaScript SDKs. To access the value of a field of an entry through Liquid, use the format <span v-pre>`{{entry["field name"]}}`</span>.

For more information go to the [API reference](/en/platform/content/public-api-reference.html)
:::

All fields require a name, and can optionally be set as required.

When a field is required, at the time of creating or modifying an entry, there must be an associated value for that field, otherwise, the entry cannot be saved.

### Single-line text

This field allows you to enter single-line texts. and has the following restrictions:

- **Minimum length**: Allows you to require a minimum integer value.
- **Maximum length**: Limit the maximum length of the text entered.
- **Regular expression validation**: Allows you to add a regular expression to validate that the text matches a certain format.


### Rich Text

This field translates into a multi-line text WYSIWYG editor that also allows you to modify its HTML code. This field has the following restrictions:

- **Minimum length**: Allows you to require a minimum integer value.
- **Maximum length**: Limit the maximum length of the text entered.

### Dropdown

This field allows you to add a drop-down list to select only one option.

### Radio

This field allows you to add a fixed list of items to select only one option.

### Checkbox

This field allows you to add a list from which you can select more than one option or leave it blank.

### Multiple choices

This field allows you type and select an option that can be predetermined or proposed.

### Boolean

This field allows you to add a question or statement (True or False).

### Integer

This field allows you to add an integer that must be by default between `-65325` and `+65325`. However, it can be bounded using the restrictions:

- **Minimum length**: Allows you to require a minimum integer value.
- **Maximum length**: Limit the maximum length of the text entered.

### Decimal

This field allows you to add a decimal number that must be by default between `-65325` and `+65325`. However, it can be bounded using the restrictions:

- **Minimum length**: Allows you to require a minimum integer value.
- **Maximum length**: Limit the maximum length of the text entered.

### Date

Allows you to add a date picker. You can restrict the values of dates that can be chosen, using the restrictions:

- **From**: Limit the oldest selectable date.
- **Until**: Limit the newest selectable date.

### Location

Allows you to add a field in which you can select a geographic address, according to the Google Maps fields, or if you do not have a Google _API key_, it will allow you to enter the name, latitude, longitude and five geopolitical location limitations by hand.

:::warning Attention
For location maps to work properly with the Google API Key configured in your account, the key must have permissions to access to:

* Maps JavaScript API
* Places API
* Geocoding API
:::

### Asset

This field allows you to attach a single file to the entry using the file manager.

### Asset List

This field allows you to attach multiple files to the entry using the file manager.

### Content (links to one)

This field allows you to link an entry to another entry that is already created and published within the same space. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that the entries that can be selected as a link are only of the selected type.

### Content List (links to many)

This field allows you to link many entries in the space to another entry. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that the entries that can be selected as a link are only of the selected type.

## Settings

In this tab, you can see the name of the type, along with its UID. The UID is important as it will be what the type is called from through the Liquid SDK, Javascript and API. Below you will see a button that can be in 2 states:

- **Reindex type**: Allows you to reindex the model if you encountered a problem with your public API.
- **Cancel reindexation**: If there is already a reindexation in progress, you can cancel the process by clicking on this button.

:::warning Warning
When you reindex any of your types, the model that was previously reindexed will remain available until the new reindex is complete. At the end of the new reindexation, the old index will be overwritten with the new index.
:::

:::warning Warning
Note that depending on the [cache settings you have in your space](/en/platform/content/spaces.html#cache), you may not see the changes immediately after you have finished reindexing.
:::
