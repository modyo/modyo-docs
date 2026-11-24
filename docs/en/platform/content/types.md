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
- **Identifier**
- **Cardinality**
- **Updated on**

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

- **Add**
- **Field**
- **Settings**

This interface allows you to create each of the types and format them as needed, according to your needs.

## Fields

:::tip Tip
The name of the field is of utmost importance, as it will be used to access its value in the Liquid and JS SDKs. To access the value of a field in an entry, you can use the syntax <span v-pre>`{{entry["field name"]}}`</span>.

For more information, go to the [API reference](/en/platform/content/public-api-reference)
:::

Every field you can add to a type shares three properties, which you configure in the **Field** tab of the right-hand panel:

- **Name**: Identifies the field and is the key you use to access its value from Liquid, the SDKs, and the API. It is required, accepts up to 255 characters, and cannot begin with an underscore (`_`) or contain dots. If you type a character that isn't allowed, the panel discards what you typed and shows "Field names cannot begin with underscore nor contain dots".
- **Hint**: Optional help text. It is displayed below the field when creating or modifying an entry, to guide whoever fills it in.
- **Required**: When creating or modifying an entry, you must provide a value for that field. Otherwise, you will not be able to save the changes made.

Within the same type, two fields can't share a name: if you repeat one, the type isn't saved and you'll see the message "Cannot save this type because it has repeated field names".

:::warning Attention
Renaming a field changes the key you use to read its value from Liquid, the SDKs, and the API. Before renaming a field that is already in use, review the templates and integrations that consume it.
:::

:::danger Danger
Deleting a field from a type erases that field's value in every entry of the type, and it can't be undone. When you remove it, the panel asks you to confirm with the message "Are you sure you want to delete this field? Once you save, this action will remove this field from all entries of this type, and cannot be undone." and warns you again when you save. As long as you don't save, the field and its values stay intact: if you made a mistake, leave the screen without saving.
:::

### Single-line text

This field allows you to enter single-line texts, with a hard limit of 255 characters. If you need to store a longer text, use [Multiline text](#multiline-text). It has the following restrictions:

- **Minimum length**: Allows you to require a minimum number of characters for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the entered text, when creating or modifying an entry, complies with a certain format. A match on part of the text is enough: `\d{3}` accepts `abc123`. To require the whole text to match the format, anchor the expression with `^` at the start and `$` at the end, for example `^\d{3}$`. If the text doesn't match, the entry isn't saved and the field shows "The value does not match the expression". If the expression isn't valid, the type isn't saved and the error shows "Invalid expression".
- **Unique**: Requires that the value isn't repeated in other entries of the same type. This is the platform's only uniqueness validation, and Single-line text is the only field that offers it. If the value is already in use, the entry isn't saved and the field shows "Must be unique".

The scope of **Unique** is the whole type: the comparison goes through every entry of the type in all its languages, including drafts and scheduled entries. Backup versions and the entry you are editing, in any of its languages, are left out: republishing an entry never collides with itself, and its translations can repeat the value. An empty field is never considered repeated.

:::warning Attention
Inside a **Group**, **Unique** doesn't compare the value with other entries of the type: it only prevents repeating it across the group's repetitions within the same entry. If two repetitions have the same value, the entry isn't saved and the field shows "Must be unique". If you need the value not to be repeated in other entries, keep the field outside the group.
:::

### Multiline text

This field allows you to enter text on several lines, with no formatting options in the editor. Unlike **Single-line text**, which accepts up to 255 characters, here you can store long texts. It has the following restrictions:

- **Minimum length**: Allows you to require a minimum number of characters for the entered text.
- **Maximum length**: Allows you to limit the maximum number of characters for the entered text.
- **Validation by regular expression**: Allows you to add a regular expression to validate that the entered text, when creating or modifying an entry, complies with a certain format. As in [Single-line text](#single-line-text), a match on part of the text is enough. Here, in addition, `^` and `$` mark the start and end of each line, so an expression anchored with them passes as soon as one line matches. To require the whole text to match, anchor the expression with `\A` at the start and `\z` at the end.

This field doesn't offer the **Unique** validation: uniqueness is only available in [Single-line text](#single-line-text).

:::warning Attention
As of version 10.2.2, the value of this field is published as HTML, limited to a list of allowed tags and attributes:

- **When publishing**: the Liquid written in the field is evaluated first, also inside tags and attributes (for example <span v-pre>`<a href="{{ site.url }}/contact">`</span>). Then the tags, attributes and URI schemes that are not in the list are removed.
- **When saving**: if the field holds elements outside the list, the entry is not saved and the error names the field and the elements, for example `body: style, <iframe>`. The same applies when editing, publishing, scheduling or restoring a version, and through the administration API.
- **Copy, clone and bulk actions**: copying an entry is rejected if any of its locales doesn't comply. Cloning a space and the bulk actions to publish, edit and tag skip the entries that don't comply and report each one with the field and the elements.
- **Existing content**: content saved before is not modified, and the content APIs return it as it is. An entry with content outside the list can be unpublished, archived and deleted, but not edited or published until it is fixed.
:::

#### Allowed HTML

By default, the field accepts these tags:

`a abbr acronym address b big blockquote br cite code dd del dfn div dl dt em h1 h2 h3 h4 h5 h6 hr i img ins kbd li mark ol p pre samp small span strong sub sup time tt ul var table caption colgroup col thead tbody tfoot tr th td u s strike bdi bdo wbr ruby rt rp article aside section header footer nav main figure figcaption hgroup`

And these attributes:

`abbr alt cite class datetime height href lang name src title width xml:lang colspan rowspan scope dir span`

The `href` and `src` attributes only accept the `http`, `https`, `mailto` and `tel` schemes, plus relative paths. Among others, `script`, `style`, `iframe`, `form`, `input`, `svg`, the `on*` attributes and the `style` attribute are removed.

Each installation can replace these lists with the `MODYO_CONTENT_MULTILINE_HTML_ALLOWED_TAGS` and `MODYO_CONTENT_MULTILINE_HTML_ALLOWED_ATTRS` environment variables. If an entry uses an element the list no longer allows, it can no longer be edited or published until it is fixed.

#### Text that includes the < character

The field is read as HTML, so a `<` followed by a letter opens a tag. For example, `Hello <name>` or `if (a<b && c>d)` are rejected when saving, and `x<y` with no later `>` loses the text that follows. To show the character, write it as `&lt;`. When what is rejected looks like text and not HTML, the error says so.

If a template prints the field as plain text, for example with <span v-pre>`{{ entry.fields.body | escape }}`</span>, `&lt;` is shown literally. In that case, use a [Single-line text](#single-line-text) field or adjust the template.

Liquid that completes the level of a heading, such as <span v-pre>`<h{{ level }}>`</span>, is accepted as long as `h1` to `h6` are in the list.

#### JSON values

<span v-pre>`{{ entry | json }}`</span> delivers the stored value with `<`, `>` and `&` escaped as `\u003c`, `\u003e` and `\u0026`. Use it only inside `<script type="application/json">`, never as the value of an attribute, and read the value with `JSON.parse`.

### Rich text

This field results in a multi-line WYSIWYG text editor that also allows you to modify the HTML code of the text. This field has the following restrictions:

- **Minimum length**: Sets the minimum number of characters for the entered text.
- **Maximum length**: Limits the maximum number of characters for the entered text.

Both lengths are measured on the HTML the editor stores, not on the visible text: tags and their attributes count too. For example, `<p><strong>Hello</strong></p>` adds up to 29 characters, not 5.

### Dropdown

This field allows you to add a drop-down list where only one option can be selected.

### Radio

Use this field to add a fixed list of items to select only one option.

### Checkbox

This field allows you to add a list from which you can select more than one option or leave it blank.

### Multiple choice

This field allows you to pick one or more values from a search box that filters as you type. The search box only offers the values defined in the type: when you edit an entry, you can't propose a new value from the field. Values are managed in **Allowed values**, when you configure the field.

### Allowed values

In choice fields (Dropdown, Radio, Checkbox, and Multiple choice), the options are managed in the field's **Allowed values** section: use **Add value** and **Delete value** to manage them, and the selector to mark the **Default value**. Before saving, the interface marks the values as **New** or **Edited** so you can review your changes.

For the type to be saved, each choice field must follow these rules:

- Have at least one active value.
- Have no repeated labels among its active values.
- In Dropdown and Radio, have a single **Default value**: when you mark another one, the previous one is unmarked. In Checkbox and Multiple choice you can mark several.

If any of them isn't met, the type isn't saved and the error names the field.

:::warning Attention
If you load a choice field through the API, send the exact labels of the allowed values or the identifiers the API returns. Text that doesn't match any label is silently discarded: the entry is saved without that value and without an error message, unless the field is **Required** and ends up empty. A numeric identifier that doesn't belong to the field, on the other hand, prevents the entry from being saved.
:::

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

This field allows you to add a question or statement (True or False). In the entry editor it's shown as a checkbox: checked means True and unchecked means False.

:::warning Attention
If you mark the field as **Required**, you can only save the entry with the box checked: a False value is rejected with the message "Is required". Use it to require a confirmation, such as acknowledging a notice, not to force a choice between True and False.
:::

### Integer

This field allows you to add an integer between `-2147483648` and `2147483647`. You can narrow that range with the following restrictions:

- **Min value**: Rejects values lower than the number you set.
- **Max value**: Rejects values higher than the number you set.

Both restrictions bound the value of the number, not the number of digits. Leave them empty to apply no such limit. If the number falls outside the range, the entry isn't saved and the field shows a message with the limits you configured:

- With only **Min value**: "Invalid number. Must be greater than or equal to 18".
- With only **Max value**: "Invalid number. Must be less than or equal to 120".
- With both: "Invalid number. Must be between 18 and 120".

The **Min value** can't be greater than the **Max value**: if it is, the type isn't saved and the error starts with the field name, for example "Age: Min value must be less than or equal to 120" on a field named Age.

### Decimal

Use this field to enter a number with decimals. It supports up to two decimal places and values between `-9999999999999.99` and `9999999999999.99`. If you save more than two decimal places, the value is rounded without warning you: `10.567` is stored as `10.57`. You can narrow the range with the following restrictions:

- **Min value**: Rejects values lower than the number you set.
- **Max value**: Rejects values higher than the number you set.

Both restrictions bound the value of the number, not the number of digits, and they only accept whole numbers: to require a positive amount, for example, use `0` as **Min value**. If the number falls outside the range, the entry isn't saved and the field shows the same messages as in [Integer](#integer). Here too, the **Min value** can't be greater than the **Max value**.

### Date

Use this field to add a date and time picker. The value is stored with both, so the API, the SDKs, and Liquid deliver the date together with the time, even if you only care about the day. Limit the selectable dates by applying the following restrictions:

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

:::tip Tip
Each entry can link up to 10 entries in a single Content list field. If you select more, the panel shows "Max reference items (10) reached, extra items will be excluded" and keeps only the first 10. That cap is defined per installation: if you need more references, talk to your Modyo account manager.
:::

### Group

Use the Group field to house another field within it. You can assign a name to the group according to your needs, as well as name the fields within the group and use each field's **Hint** to guide whoever fills in the entry.

Once you have more than one type of field within a group, you can drag and order them as needed.

There is no limit to the number of fields you can include within a group.

In an entry, the group behaves as a repeatable list: the same set of child fields can be filled in several times. To work with the repetitions:

1. Open the entry and find the group.
2. Click **Add new item** to add a repetition with the same fields.
3. Fill in the fields of that repetition.
4. Drag the repetitions to change their order.
5. To delete a repetition, click its delete icon and confirm.

The order you leave the repetitions in is preserved and is the order delivered by the API and the SDKs.

In the API and the SDKs, the value of a Group field is an object whose `fields` key holds an array with one object per repetition, even when there's only one: each object carries the child fields under the name you gave them.

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
- **Unique**: On a [Single-line text](#single-line-text) field inside the group, it prevents repeating the value across the repetitions of the same entry, but it doesn't compare it with other entries of the type.

:::tip Tip
A group can host any type of field, except another group.
:::


## Saving changes to a type

The changes you make to a type (adding, renaming, reordering, or deleting fields) are only applied when you click **Save**.

:::warning Attention
If the type already has entries, when you save the panel asks you to confirm with the message "Updating a type will result in the reindex and direct modification of any published entry of this type. Be aware that this process can take some time and in the meantime the entries of that type will not reflect the changes until the process is finished.". While that process is running, the button shows "Reindexing..." and you can't save the type again: hovering over it shows "This Content Type is currently being processed by a reindex process. Saving changes won't be available until it finishes.".
:::

## Properties

In the **Settings** tab of the right-hand panel you can review and edit the general data of the type:

- **Name**: The name the type is listed under.
- **Identifier**: The UID of the type. It is important, as it is used to refer to the type from the Liquid SDKs, JavaScript, and the API.
- **Description**: Free text of up to 4,095 characters. Use it to document, for the rest of the team, what this type is for.
- **Cardinality**: Switch between **Multiple** and **Single**. You can't switch to **Single** if the type already has more than one entry.

In the actions menu of the type editor header you'll also find an option that can be in 2 states:

- **Reindex type**: Allows you to re-index the model in case of problems with the public API.
- **Cancel reindex**: If a reindexing is in progress, you can cancel the process by clicking this option.

:::warning Attention
When you reindex one of your types, the previously indexed model will remain available until the new indexing is complete. Once the reindexing is complete, the old index will be overwritten with the new index.
:::

:::warning Attention
Note that, depending on the cache settings between your browser and the platform, you may not see the changes immediately after you have finished reindexing.
:::

## Delete a type

To delete a type you need the **Admin Types** permission, and the type can't have entries: if it has any, in any language or status, the deletion is rejected with the message "Cannot delete record because dependent entries exist". Delete its entries first and then follow these steps:

1. From the main menu, click **Content**.
2. Select the space where the type lives.
3. Click on **Types**.
4. Click the name of the type to open its editor.
5. In the **Settings** tab of the right-hand panel, click **Delete type**.
6. Confirm in the message "Are you sure you want to delete this element?".

The [content pages](/en/platform/channels/pages#content-page) that used the type are left without an associated type, and you have to assign them another one.

## Clone a type

Cloning a type creates, within the same space, a copy with all its fields and validations. It's useful for starting from a proven structure without rebuilding it field by field. To clone a type:

1. From the main menu, click **Content**.
2. Select the space where the type lives.
3. Click on **Types**.
4. In the **Actions** column of the type's row, click **Clone**.
5. In the **Clone type** window, confirm by clicking **Clone type**.

The clone takes the name of the original prefixed with "Copy of" and the identifier prefixed with "copy-of-". If a type with that name or identifier already exists, a number is appended so it isn't repeated. Only the structure is copied: the entries of the original type aren't duplicated.

:::tip Tip
Cloning runs in the background and may take a while: while it completes, the window shows "This will take some time, the type is being cloned.". When it finishes you'll see "Type cloned successfully" and the new type will appear in the list.
:::