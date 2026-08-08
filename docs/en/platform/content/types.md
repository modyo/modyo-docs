---
search: true
---

# Content types


Content Types are the basis for your Entries. They define which fields and validations are required for the Entries, with more than 15 types of fields.

Content Types can be assigned cardinality. This variable indicates how many Entries can exist for this Type. You can add languages to the repository and generate Multilingual Entries, stored in one place. In addition, you can create Users, with different roles and permissions, thus achieving a division of labor called Team Review.

## About the Interface

When you first enter the Types section, click the green **+New Type** button to create a new Type.

Once you've created your first Type, you can create additional types by clicking on the **+New Type** button in the upper right.

The search bar allows you to search and filter your types by any word that appears in the Name field.

The table below the search bar shows the Types already created, ordered by default according to the updated date and time, starting from the most recent item and going back.

To reorder the table, click on the symbols next to each category. The categories by which you can reorder are:

- **Name**
- **Identifier (UID)**
- **Creation Date**
- **Update Date**

Click on the name of a Type to open the corresponding editor.

## Create a Type

To create a new type of content that will serve as the basis for your entries, follow these steps:

1. From the main menu, click **Content**.
2. Select the space where you want to create a new Type.
3. Click on **Types**.
2. Click the **New Type** button.
3. Type the name and identifier (UID).
4. Select the type's cardinality.
5. Click **Create**.

:::tip Tip
We recommend writing the format of the entries within the identifier, for example, videos, posts, etc. This way, any team member will know what type of content it is and can use it as a template for their entries without having to create a new one.

Cardinality refers to the number of entries that can exist for that content type. If you select "individual cardinality", only one such entry is allowed. If you choose "multiple cardinality", there is no limit to the number of entries allowed.
:::

:::warning Attention
The number of content types you can create per space is set by your account plan, and the default is 50. If you try to create one beyond the quota, creation fails with the message "You've reached the maximum number of content types on this space". If you need a larger quota, talk to your Modyo account manager.
:::

In the creation interface, you'll find an empty template in the center of the screen and on the right side, a table with three tabs:

- **Add fields**
- **Field Configuration**
- **Configuration**

This interface allows you to create each of the types and format them as needed, according to your needs.

## Fields

:::tip Tip
The name of the field is of utmost importance, as it will be used to access its value in the Liquid and JS SDKs. To access the value of a field in an entry, you can use the syntax <span v-pre>`{{entry["field name"]}}`</span>.

For more information, go to the [API reference](/en/platform/content/public-api-reference)
:::

All fields that can be added to a type have a name and can optionally be set as required.

When a field is marked as required, when creating or modifying an entry, you must provide a value for that field. Otherwise, you will not be able to save the changes made.

### Single-line text

This field allows you to enter single-line texts. It has the following restrictions:

- **Minimum length**: Allows you to require a minimum number of characters for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the entered text, when creating or modifying an entry, complies with a certain format.
- **Unique**: Requires that the value isn't repeated in other entries of the same type. This is the platform's only uniqueness validation, and Single-line text is the only field that offers it. If the value is already in use, the entry isn't saved and the field shows "Must be unique".

The scope of **Unique** is the whole type: the comparison goes through every entry of the type, including drafts, scheduled entries, and translations into other languages. Backup versions and the entry you are editing are left out, so republishing an entry never collides with itself. An empty field is never considered repeated.

:::warning Attention
**Unique** has no effect on a field that lives inside a **Group**. The checkbox is still displayed when you configure the field, but the validation isn't evaluated and repeated values are saved without an error. If you need to guarantee uniqueness, keep the field outside the group.
:::

### Multiline text

This field allows you to enter plain text on several lines, with no formatting options. Unlike **Single-line text**, which accepts up to 255 characters, here you can store long texts. It has the following restrictions:

- **Minimum length**: Allows you to require a minimum number of characters for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the entered text, when creating or modifying an entry, complies with a certain format.

This field doesn't offer the **Unique** validation: uniqueness is only available in [Single-line text](#single-line-text).

:::warning Attention
As of version 10.2, the value of this field is delivered HTML-escaped when you print it with Liquid: any tags you wrote are shown as literal text instead of being interpreted as markup. If you need to publish HTML from an entry, use a [Rich text](#rich-text) field. Review the templates that were using this field to inject HTML.
:::

### Rich text

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

This field allows you to pick one or more values from a search box that filters as you type. The search box only offers the values defined in the type: when you edit an entry, you can't propose a new value from the field. Values are managed in **Allowed values**, when you configure the field.

:::warning Attention
If you load this field through the API, send the exact labels of the allowed values or the identifiers the API returns. Text that doesn't match any label is silently discarded: the entry is saved without that value and without an error message. A numeric identifier that doesn't belong to the field, on the other hand, prevents the entry from being saved.
:::

### Allowed values

In choice fields (Dropdown, Radio, Checkbox, and Multiple choice), the options are managed in the field's **Allowed values** section: use **Add value** and **Delete value** to manage them, and the selector to mark the **Default value**. Before saving, the interface marks the values as **New** or **Edited** so you can review your changes.

The **Default value** is applied automatically when you create a new entry, and only when the field doesn't already carry a value: it isn't applied when you edit an existing entry and it never replaces what you loaded.

:::warning Attention
That automatic assignment only reaches the choice fields that are at the first level of the type. If you mark a **Default value** on a choice field that lives inside a **Group**, the value isn't applied to new entries and the interface doesn't warn you. Keep the field outside the group if you need that behavior.
:::

Each value is an individual element of the content type:

- When **renaming a value**, the entries that had it selected keep their selection with the new name, across all their versions. The new text is propagated to the entries in the background, so the public API may take a moment to return it.
- When **deleting a value in use**, it is archived: it is no longer offered for new selections, but the entries that already had it selected continue to display it, with no loss of historical data.

:::tip Tip
The name of an active value does not allow line breaks or starting with the `*` character.
:::

### Boolean

This field allows you to add a question or statement (True or False).

### Integer

This field allows you to add an integer between `-2147483648` and `2147483647`. You can narrow that range with the following restrictions:

- **Min value**: Rejects values lower than the number you set.
- **Max value**: Rejects values higher than the number you set.

Both restrictions bound the value of the number, not the number of digits. Leave them empty to apply no such limit. If the number falls outside the range, the entry isn't saved and the field shows "Invalid number. Must be greater than or equal to 18" or "Invalid number. Must be less than or equal to 120", with the limits you configured.

### Decimal

Use this field to enter a number with decimals. It supports up to two decimal places and values between `-9999999999999.99` and `9999999999999.99`. If you save more than two decimal places, the value is rounded without warning you: `10.567` is stored as `10.57`. You can narrow the range with the following restrictions:

- **Min value**: Rejects values lower than the number you set.
- **Max value**: Rejects values higher than the number you set.

Both restrictions bound the value of the number, not the number of digits, and they only accept whole numbers: to require a positive amount, for example, use `0` as **Min value**. If the number falls outside the range, the entry isn't saved and the field shows "Invalid number. Must be less than or equal to", with the limit you configured.

### Date

Use this field to add a date picker. Limit the selectable dates by applying the following restrictions:

- **From**: Set the earliest date you can choose.
- **Till**: Set the latest date you can choose.

### Location

Use this field to select one or more geographical addresses, based on the fields in Google Maps. A single Location field stores an ordered list of locations: add as many as you need and use **Delete location** to remove one from the list. The order you leave them in is the order delivered by the API and the SDKs.

If you do not have a Google API key, you can manually enter the **Location Street**, the **Latitude**, the **Longitude**, and the political divisions of the location. **Latitude** accepts values between -90 and 90, and **Longitude** between -180 and 180; outside that range the entry isn't saved. These administrative divisions are not standard and vary by country. In the case of Chile, the divisions are: Region, Province, Commune, and City.

In the public API and in the SDKs, the value of the field is an array with one object per location, and each object always carries the same eight keys:

- `location_street`: the address written in the **Location Street** field.
- `location`: object with the `lat` and `lon` coordinates.
- `country`: the country of the location.
- `administrative_area_level_1` through `administrative_area_level_5`: the five levels of administrative division, from largest to smallest. The levels the country doesn't use are delivered with no data.

:::warning Attention
To ensure that location maps work properly with the Google API key configured in your account, the key must have permissions to access:

- JavaScript Maps API
- Places API
- Geocoding API
:::

### File

This field allows you to attach a single file to the entry, using the file manager. It has the following restriction:

- **Allowed Types**: Limits the type of file you can attach. You can pick one or more values among **Images**, **Video**, **Audio**, and **Documents**; if you pick none, any file is accepted. If the attached file is of another type, the entry isn't saved and the field shows "Does not match with allowed types", followed by the types you configured.

The check runs against the type the file manager gave the file when you uploaded it, not against its extension.

### Asset list

This field allows you to attach multiple files to the entry, using the file manager. It has the following restriction:

- **Allowed Types**: Limits the type of the files you can attach, with the same options and the same behavior as in [File](#file). A single attached file of another type is enough to prevent the entry from being saved.

### Content (link to one)

Use this field to link an Entry to another existing and published Entry within the Space. This field has the following restrictions:

- **Allowed content type**: Limits the link to entries of one type. You select a single type, and the default value is **All**, which doesn't restrict anything. If the linked entry isn't of the chosen type, the entry isn't saved and the field shows "Does not match with allowed value", followed by the name of the required type.

### Content list (link to many)

This field allows you to link more than one existing Entry within the Space to another Entry. This field has the following restrictions:

- **Allowed content type**: Limits the links to entries of one type. You select a single type, which applies to every entry you link, and the default value is **All**, which doesn't restrict anything. If any of the linked entries isn't of the chosen type, the entry isn't saved and the field shows "Does not match with allowed value", followed by the name of the required type.

### Group

Use the Group field to house another field within it. You can assign a name to the group according to your needs, as well as name the fields within the group. In the hint field, include the text you want to display to help your users complete the field correctly.

Once you have more than one type of field within a group, you can drag and order them as needed.

There is no limit to the number of fields you can include within a group.

In an entry, the group behaves as a repeatable list: the same set of child fields can be filled in several times. To work with the repetitions:

1. Open the entry and find the group.
2. Click **Add new item** to add a repetition with the same fields.
3. Fill in the fields of that repetition.
4. Drag the repetitions to change their order.
5. To delete a repetition, click its delete icon and confirm.

The order you leave the repetitions in is preserved and is the order delivered by the API and the SDKs.

That is why the value of a Group field is always an array of objects, even when it has a single repetition: each object carries the child fields under the name you gave them.

```json
{
  "fields": {
    "my_group": {
      "fields": [
        { "my_field": "First item" },
        { "my_field": "Second item" }
      ]
    }
  }
}
```

From Liquid, loop over the repetitions and read the child fields inside the loop. Each repetition is exposed as a [repeatable_group_field](/en/platform/channels/liquid-markup/objects.html#field) object:

```liquid
{% for item in entry["my_group"] %}
  {{ item["my_field"] }}
{% endfor %}
```

You can validate the contents of the fields as follows:

- **Required**: Check the **Required** box to force the group or field to be completed.
  - If you mark the group as required, at least one item within the group must be completed.
  - If you mark an item as required, that item must have content.
- **Unique**: Doesn't apply inside a group. The checkbox does appear when you configure a [Single-line text](#single-line-text) field that lives inside the group, but the validation isn't evaluated and repeated values are saved without an error.

:::tip Tip
A group can host any type of field, except another group.
:::


## Properties

In this tab, you can see the name and UID of the type. The UID is important, as it is used to refer to the type from the Liquid SDKs, JavaScript, and the API. Next, you will see a button that can be in 2 states:

- **Reindex**: Allows you to re-index the model in case of problems with the public API.
- **Cancel reindexing**: If a reindexing is in progress, you can cancel the process by clicking this button.

:::warning Attention
When you reindex one of your types, the previously indexed model will remain available until the new indexing is complete. Once the reindexing is complete, the old index will be overwritten with the new index.
:::

:::warning Attention
Note that depending on the [cache settings you have in your space](/en/platform/content/spaces#cache), you may not see the changes immediately after you have finished reindexing.
:::