---
search: true
---

# Content types

![Types](/assets/img/content/types/types.jpg)

The Types within Modyo are tools that will allow us to structure content templates to insert into the service you are granting, with more than 15 types of fields.

With Types, you can avoid having to be often producing content of the same format, setting a default style that will allow you to optimize times and quality when it comes to creating it.

## About the Interface

At first glance, you can find at the top a green button that, by clicking there, will allow you to create a Type.

Below, you can see the Type search bar, which will allow you to filter by any word that is in the Name field.

Then, you will find the table with the Types already created, which will be sorted by default according to the updated date and time, starting from the most recent item back.

To reorder it, you just need to click on the symbols on one side of each category.

The categories by which you can reorder are four:

- **Name**
- **UID**
- **Creation Date**
- **Update Date**

If you want to enter any Type, you must click on the name of it to open the corresponding editor.

## Create a Type

 <img src="/assets/img/content/types/new-type.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="450"> 

To create a Type, you need to click on the top green button on the screen and enter the corresponding name and User ID (UID).

:::tip Tip
It is a good practice to put within the UID, the format of what will be published as they are, for example, videos, posts, etc. 

Thus, any user of the platform will know what kind of content it is and can use it as a template without having to generate a new one.
:::

In the creation interface, you can see an empty template at the center of your screen, while on the right side, you can see a table with three tabs. 

- **Add fields**
- **Field Configuration**
- **Settings**

This interface is used to create each of the types, giving them the format that is required.

## Fields

::: tip Tip
The field name is of the utmost importance because it will be through what its value can be accessed in the Liquid and JS SDKs. To access the value of a field in an entry you can for example use <span v-pre> `{{entry ["field name"]}}` </span>. 

For more information go to the [API reference](/es/platform/content/public-api-reference.html)
:::

All fields that can be added in a type, have a name, and the possibility of being required.

When a field is required, at the time of creating or modifying an entry, there must be an associated value for that field, otherwise changes cannot be saved.

### Text of a line

This field allows you to enter single-line texts. and has the following restrictions:

- **Minimum Length**: Allows you to require a minimum length of the entered text.
- **Maximum Length**: Allows you to limit the maximum length to the entered text.
- **Regular Expression Validation**: Allows you to add a regular expression to validate that the text entered at the time of creating/modifying an entry matches a given format. 


### Rich Text

This field translates into a WYSIWYG multi-line text editor that also allows you to modify the HTML code of the same. This field has the following restrictions:

- **Minimum Length**: Allows you to require a minimum length of the entered text.
- **Maximum Length**: Allows you to limit the maximum length to the entered text.

### Dropdown

This field allows you to add a drop-down list to select only one option.

### Airwaves

This field allows you to add a fixed list of items to select only one option.

### Checkbox

This field allows you to add a list from which you can select more than one option or leave blank.

### Multiple Options

This field allows you to add a field in which you can type to select an option that can be default or proposed.

### Boolean

This field allows you to add a question or statement (True/True oo False/False).

### Integer

This field allows you to add an integer that should be by default between the numbers `-65325` and `+65325`. However, it can be dimensioned by using the constraints:

- **Minimum Length**: Allows you to require a minimum length of the entered text.
- **Maximum Length**: Allows you to limit the maximum length to the entered text.

### Decimal

This field allows you to add a decimal number that should be by default between the numbers `-65325` and `+65325`. However, it can be dimensioned by using the constraints:

- **Minimum Length**: Allows you to require a minimum length of the entered text.
- **Maximum Length**: Allows you to limit the maximum length to the entered text.

### Date

Allows you to add a date picker. You can restrict the date values you can choose by using the restrictions:

- **From**: Allows you to limit the least selectable.
- **Ast**: Allows you to limit the highest selectable date.

### Location

Allows you to add a field where you can select a geographic address, depending on Google Maps fields, or if you don't have a google _key_ API, will allow you to manually enter the name, latitude, longitude and the five political limitations of the location. These areas of administration are not standard and depend on each country. In the case of Chile these are: Region, Province, Commune and City.

:::warning Attention
For location maps to work correctly with the Google key API configured on the account, the key must have permissions to access:

* Map API via JavaScript
* Places API
* Geocoding API
:::

### File

This field allows you to attach a single file to the entry using the file manager.

### File Listing

This field allows you to attach multiple files to the entry using the file manager.

### Content (link to a)

This field allows you to link an Entry to another Entry that is already created and published within the Space. This field has the following restrictions:

- **Restrict Type**: Allows you to select a default type so that entries that can be selected as a link are only of the selected type.

### Content List (link to muchas)

This field allows you to link many Entries that are already created within Space to another Entry. This field has the following restrictions:

- **Restrict Type**: Allows you to select a default type so that entries that can be selected as a link are only of the selected type.

## Properties

In this tab, you can see the name of the type, along with its UID. The UID is important as it will be what the type is called from the Liquid SDKs, Javascript and API. Below you will see a button that can be in 2 states:

- **Reindexar**: Allows you to reindex the model if you encountered a problem with your public API.
- **Cancel reindexation**: If there is already a reindex in progress, you can cancel the process by clicking on this button. 

:::warning Attention
When you reindex any of your types, the model that was previously reindexed will be available until the new index is complete. At the end of the new reindexation, the old index will be overwritten with the new index.
:::

:::warning Attention
Please note that depending on the [cache settings you have in your space](/es/platform/content/spaces.html #cache), you may not see the changes immediately after reindexing is complete.
:::
