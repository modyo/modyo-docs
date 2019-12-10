---
search: true
---

# Content types

![Types](/assets/img/content/types/types.jpg)

The Types within Modyo, are tools that will allow us to structure content templates to insert into the service we are providing, with more than 15 types of fields.

With the Types, you can avoid having to elaborate content of the same format many times, establishing a predetermined style that will allow you to optimize time and quality when creating it.

## About the Interface

At first glance, you can find a green button at the top that, by clicking there, will allow you to create a Type.

Below, you can find the Type search bar, which will allow you to find any word you are looking for in the Name field.

Then, you can see the table with the Types already created, which will be sorted by default according to the updated date and time, starting from the most recent element backwards.

To reorder it, you just have to click on the symbols that are next to each category.

The categories by which you can reorder are four:

- First name
- UID
- Creation date
- Update date

If you want to enter any type, you must click on its name to open the corresponding editor.

## Create a Type

<img src="/assets/img/content/types/new-type.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="450">

To create a Type, it is necessary to click on the top green button on the screen and enter the name and the corresponding User Identifier (UID).

::: tip Tip
It is a good practice to put inside the UID, the format of what will be published as they are, for example, videos, posts, etc. Thus, any user of the platform will know what type of content it is and can use it as a template without having to generate a new one.
:::

In the creation interface, you can see an empty template at the center of your screen, while on the right side, you can see a table with three tabs.

- Add fields
- Field configuration
- Configuration

This interface will help us to create each of our types, giving them the format that is required.

## Fields

::: tip Tip
The name of the field is of the utmost importance because it will be through what its value can be accessed in the Liquid and JS SDKs. To access the value of a field in an entry you can use for example <span v-pre> `{{entry [" field name "]}}` </span>. For more information go to the [API reference](/guides/content/public-api-reference.html)
:::

All fields that can be added in a type, have a name, and the possibility of being required. When a field is required, at the time of creating or modifying an entry, there must be an associated value for that field, otherwise, changes cannot be saved.

### Text of a line

This field allows you to enter single line texts. and has the following restrictions:

- **Minimum length**: Allows you to require a minimum length of the text entered.
- **Maximum length**: Limit the maximum length to the text entered.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the text that is entered at the time of creating/modifying an entry matches a certain format.


### Rich text

This field translates into a multi-line text WYSIWYG editor that also allows you to modify its HTML code. This field has the following restrictions:

- **Minimum length**: Allows you to require a minimum length of the text entered.
- **Maximum length**: Limit the maximum length to the text entered.

### Dropdown

This field allows you to add a drop-down list to select only one option.

### Radio

This field allows you to add a fixed list of items to select only one option.

### Check box

This field allows you to add a list from which you can select more than one option or leave blank.

### Multiple choices

This field allows you to add a field in which you can type to select an option that can be predetermined or proposed.

### Boolean

This field allows you to add a question or statement (True/True or False/False).

### Whole

This field allows you to add an integer that must be by default between the numbers `-65325` and` + 65325`. However, it can be bounded using the restrictions:

- **Minimum length**: Allows you to require a minimum length of the text entered.
- **Maximum length**: Limit the maximum length to the text entered.

### Decimal

This field allows you to add a decimal number that must be by default between the numbers `-65325` and` + 65325`. However, it can be bounded using the restrictions:

- **Minimum length**: Allows you to require a minimum length of the text entered.
- **Maximum length**: Limit the maximum length to the text entered.

### Date

It allows you to add a date picker. You can restrict the values of dates that can be chosen, using the restrictions:

- **From**: Limit the lowest selectable.
- **Until**: Limit the highest selectable date.

### Location

It allows you to add a field in which you can select a geographic address, according to the Google Maps fields, or if you do not have a Google _API key_, it will allow you to enter by hand the name, latitude, longitude and five geopolitical location limitations


### Archive

This field allows you to attach a single file to the entry using the file manager.

### File List

This field allows you to attach multiple files to the entry using the file manager.

### Content (link to one)

This field allows you to link an Entry to another Entry that is already created and published within the Space. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that the entries that can be selected as a link are only of the selected type.

### Content List (link to many)

This field allows you to link many Entries that are already created within the Space to another Entry. This field has the following restrictions:

- **Restrict type**: Allows you to select a default type so that the entries that can be selected as a link are only of the selected type.

## Properties

In this tab, you can see the name of the type, along with its UID. The UID is important as it will be what the type is called from the Liquid SDK, Javascript and API. Below you will see a button that can be in 2 states:

- **Reindexar**: Allows you to reindex the model if you encountered a problem with your public API.
- **Cancel reindexation**: If there is already a reindexation in progress, you can cancel the process by clicking on this button.

::: warning Warning
When you reindex any of your types, the model that was previously reindexed will remain available until the new index is complete. At the end of the new reindexation, the old index will be overwritten with the new index.
:::

::: warning Warning
Note that depending on the [cache settings you have in your space](/guides/content/spaces.html # cache), you may not see the changes immediately after you have finished re-indexing.
:::
