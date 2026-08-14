---
search: true
---

# Entries

Entries are the way to display the content created in a space on your sites. You can view your entries from sites created on the Modyo Platform, in the Channels module, or on external sites using our API.

In a space, entries are separated by content types. The content type defines the basic structure and the requirements and validations necessary for an entry to be published.

Additionally, by using the Channels and Customers modules, you can create sites capable of segmenting entries and showing them only to specific users.


## About the interface

In the entry interface, you can see a list of all user-generated content, ordered by the date of the last update.

The columns for sorting the list of entries are:

- **Status**: Draft, Published, Scheduled, or Archived.
- **Name**: Content title.
- **Type**: Content [type](/en/platform/content/types).
- **Updated on**: Date of the last saved content update.
- **Author**: Content author's name.

You can also filter the view with predefined filters:

- **Type**: Content [type](/en/platform/content/types).
- **Status**: Draft, Published, Scheduled, or Archived.
- **Category**: Category assigned to entries. The result also includes the entries assigned to the subcategories of the category you choose.
- **Language**: Content language.
- **Translation**: Entry translation status. If an entry has no version in the selected language, it is considered "not translated".
- **Tags**: Labels available in the account.
- **Author**: Administrator who created the entry. The list only offers the users who have at least one entry in the space.
- **Segments**: Segments assigned to the entries. This filter only appears when the space is associated with a user realm.
- **Search bar**: Type a word to display entries that contain that word in their name or metadata.

:::tip Tip
Click on the Filters menu in the upper right of the entry list to add or remove any of the filtering options in the header.
:::

### Type field filters

When you filter the list by **Type**, a **Type fields filters** block appears below the common filters, with one filter for each filterable field of the type you chose. With them you narrow the list down to the entries that hold a given value in one of their fields.

Only eight field types can be used as a filter: **Boolean**, **Checkbox**, **Date**, **Decimal**, **Dropdown**, **Integer**, **Multiple options**, and **Radio**. The remaining field types of the content type do not appear in the block.

Each filter adapts to the field it represents:

- **Date**: filters by a date range.
- **Integer** and **Decimal**: filter by a numeric comparison.
- **Boolean**: filters by True or False.
- **Checkbox**, **Dropdown**, **Multiple options**, and **Radio**: filter by the **Allowed values** you defined in the field. In **Checkbox** and in **Multiple options** you can select more than one value at a time.

:::tip Tip
The block only exists while the **Type** filter is active, because each content type defines its own fields. If you change or remove the **Type** filter, the field filters are discarded.
:::


## Bulk actions

Select one or more entries and click on the Bulk Actions box to:

- **Bulk edit**: This option opens an interface where you can modify multiple entries at once, by selecting the fields you want to overwrite and applying the changes.

:::warning Important
The option to bulk edit entries is only available for entries of the same type and is only visible if you filter entries by type.
:::

You can make changes to all fields of the type. Once the changes are made, click **Next** at the top of the screen to see the summary of your changes. Click "Save" to confirm the changes.

These entries will now have pending changes and must be published. To do this, you can use the "Publish" bulk action.


:::warning Attention
By using bulk editing of entries, you are overwriting the values for the selected fields in all selected entries, so the values that existed before the bulk edit will no longer be available in the editable version.

To retrieve a specific value from an entry, access the entry editing view and select the **Differences** option to review the previous values of an entry.
:::

- **Add or remove tags**: Opens a window to change the tags of the whole selection. In **Add new tags** you type or pick the tags you want to add, and under **Tags among selected elements** you see the tags those entries already have, with the number of entries that use each one: **Apply to all** adds that tag to the rest of the selection and the delete icon removes it from all of them. Click **Save** and confirm to apply the changes.
- **Publish**: Publishes selected entries that have pending changes or are in draft status.
- **Force publication**: If team review is enabled, space administrators can use this action to force the publication of entries that have pending changes or are in draft status, without having to go through the review process.
- **Unpublish**
- **Archive**: Bulk archiving only affects selected entries that are not published. If you try to archive a published entry, the action will have no effect.
- **Restore**: Takes the selected entries out of the archive and returns them to draft status. It only reaches archived entries, so it is worth filtering the list by the **Archived** status before using it.
- **Delete**: Deletes the archived entries in the selection. It requires the **Delete Entries** permission.

:::danger Danger
**Delete** removes the selected entries along with all their backups, and it cannot be undone. The deletion only reaches the language you have selected in the list: the translations of those entries into other languages are kept.
:::

:::tip Tip
Bulk actions run in the background, and you may not see the changes immediately. You will need to wait a moment and refresh your view after executing a bulk action.
:::

### Bulk creation via API

Through the [administration API](/en/platform/core/api.html), you can create up to **100 entries** in a single request, for example, to feed a space from an external source:

```
POST /api/admin/content/spaces/{space_id}/entries/bulk?bulk_action=create
Content-Type: application/json
```

```json
{
  "target_locale": "es-cl",
  "entries": [
    {
      "content_type_id": 123,
      "name": "My first entry",
      "slug": "my-first-entry",
      "tags": ["alpha"],
      "field_values": [
        { "field_id": 10, "type": "string", "value": "hello" }
      ]
    }
  ]
}
```

Consider the following:

- Creation is **asynchronous**: the endpoint responds `202` with a `job_id`, which is the background job UUID and the value to use in `GET /api/admin/background_jobs/{uuid}` to check the progress and results. The result includes the `uuid` of the created entries and the validation errors per index.
- Invalid entries are reported in the results without aborting the rest of the batch.
- Entries are created as **drafts**: to publish them, use the bulk publish action with the created `uuid`s.
- If you omit `target_locale`, the space's default locale is used. To create the **translation** of an existing entry, send its `uuid` along with a different `target_locale`.
- The `field_values` support the same field types as individual entry creation.



## Create and Publish an Entry

To create an entry, follow these steps:

1. In the side menu, select Content.
1. Select your space.
1. Click on Entries
1. Click **New Entry**.
1. Select the content type, name, and identifier.
1. Click **Create**.
1. Once the entry is created, you can include the content you require. The entry will have the structure defined in the content type you selected.
1. Click **Save**.
1. Click **Publish**.


:::warning Attention
If the name field is empty, the default identifier will be the UUID of the entry.
:::

## Translate an Entry

To translate an entry, you must first add the language to your space. To do this, follow these steps:

1. In the side menu, select Content.
1. Click on your space.
1. Click on Space Settings
1. Click on Localization.
1. Select the language you want to add and click **Add language**.


Once your space has the languages you require, you can now translate your entries. To do this:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to translate to open the editing view.
1. Click on the language box next to the title of your entry and select the language you want to translate your entry into.
1. Click on the more actions button (...) and select **Copy from Language**.
1. Select the language from which you want to copy the content.
1. Confirm your selection.
1. Enter your content in the fields.
1. Click **Save**.
1. Click **Publish**.


### Publish an Entry

To publish an entry in Modyo, follow these steps:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to publish.
1. At the top of the screen, click **Save**.
1. If you have administrator permissions, the **Save** button changes to **Publish** and you can proceed to publish your entry. Otherwise, another user with Administrator permissions can do so. If team review is active, it will go through that process before it is published.

You can find more information on team review in the [Key Concepts](https://docs.modyo.com/en/platform/core/key-concepts) section of our documentation.


### Unpublish an Entry

Unpublishing an entry allows you to switch the entry to Draft status and hide it from the public. If team review is turned on, you'll need to go through that flow again to publish it.

To unpublish:
1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, check the box for the entry you want to unpublish.
1. Expand the Bulk Actions menu
1. Click **Unpublish**.


### Schedule the publication of an entry

Instead of publishing right away, you can set the date and time when the entry shows up on your sites and, in the same window, the date when it stops being visible.

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to schedule.
1. At the top of the screen, click **Publish** to open the **Publish Options** window.
1. Check **Publish on** and choose the date and time in **Select a date**.
1. If you also want the entry to stop being visible on a given date, check **Unpublish on** and choose the date and time.
1. Click **Schedule publication**.

Once you confirm, the entry keeps a scheduled version and shows up in the list with the **Scheduled** status. You can keep working on its editable version without altering what was scheduled.

Consider the following:

- Each entry allows a single scheduled publication per language. If you schedule a second publication, the window warns you with "You are going to override the current scheduled publication" and the new one replaces the previous one.
- If you choose **Publish now** when there is already a scheduled publication, the window warns you with "The scheduled publication will be cancelled": once you confirm, the entry is published immediately and the schedule is discarded.
- If you choose a publication date that has already passed, the entry is published immediately instead of being scheduled.
- The unpublish date cannot be in the past. If you try, Modyo rejects the operation with the message "The scheduled unpublish date can't be in the past".

To schedule only the unpublishing of an entry that is already published, click **Unpublish** at the top of the screen, check **Unpublish on** in the **Unpublish Options** window, choose the date and time, and confirm with **Schedule unpublish**.

:::tip Tip
The full behavior of the scheduled version, including the notification you get when the action runs, is in the [versioning](/en/platform/core/#versioning) section.
:::

### Delete entries

To delete an entry:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to delete.
1. Click on the more actions button (...) and select **Delete**. If the entry is not archived, this option will not be active; first select **Archive** and then select **Delete**.
1. Click **Ok** to confirm.

### Preview

Modyo allows you to see what your entry will look like published on multiple sites, before you publish it.

In addition, you can preview the content as a user without a session or as a user with a Modyo session. We recommend starting or closing the Modyo session on the site before entering preview mode to avoid security errors such as x-frame-options or mixed-content.

:::tip Tip
You will need to pre-configure the content page in the application to activate the preview option. For more details on how to configure it, see the [content](https://docs.modyo.com/es/platform/content) section of the documentation.
:::

To preview your content:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to preview.
1. Click on the preview icon in the upper right.

:::warning Attention
We recommend that you consider:

- You can only preview content in the site's language. If the entry is in another language, the preview shows a 404 error.
- If the Space is not associated with a site, you will only be able to see the JSON code of the entry you are developing.
:::

### Edit an Entry

To edit an entry, follow these steps:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to edit.
1. Modify the fields you require.
1. Click **Save**.
1. Click **Publish**. If the entry is undergoing team review, reviewers should update their view to note the changes.


### Clone an Entry

**Clone** creates a new entry from the one you are viewing, with the same values in all of its fields, its tags, and its segments, and it also replicates the translations that already exist.

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on the entry you want to clone.
1. Click on the more actions button (...) and select **Clone**.

When the copy is done, Modyo takes you to the new entry. Consider the following:

- The copy is born in draft status: to make it show up on your sites you have to publish it.
- The copy is an independent entry. Its name becomes "Copy of" followed by the original name, and its identifier is generated with the `copy-of-` prefix, so the references to the original entry from the API or the SDKs keep pointing to the original.
- The author of the copy is the user who runs the action, not the author of the original entry.
- The action requires the **Clone Entries** permission.

:::warning Attention
When you clone, you are redirected to the new entry, so save the pending changes of the current entry before using this action.
:::

:::tip Tip
Do not confuse **Clone** with **Copy from Language**: **Copy from Language** brings the content of another translation into the entry you are editing and does not create a new entry.
:::


## Categories

Categories are a fundamental tool in Modyo for organizing your Entries.

When you create a category, Modyo generates a unique path in the URL that provides access to the resource, as long as it is published.

To view your categories, click on the side menu in Content and then select Categories.


#### Create a Category

To create a category:

1. Click on Content
1. Select Categories
1. Click on the **New Category** button.
1. In the pop-up window, enter the name, path, and, optionally, a parent category.

When you assign an entry to a category, Modyo adds the identifier as a prefix to the URL of the entry, for example:

An entry with URL: test.modyo.com/visita-chile and category 'travel' would now be test.modyo.com/travel/visita-chile.

:::tip Tip
When you enter the category name, the path is automatically set as an identifier. To change it, click on the path.

If you modify the path, be sure to update all linked links.
:::

#### Delete a Category

To delete a category:

1. Click on Content
1. Select Categories
1. Click on the (...) button, after the category name, for more actions
1. Select **Delete**.
1. Click **OK** to confirm the deletion.

:::tip Tip
When you delete a category that has assigned entries, the entries are not deleted; however, they will not be assigned to a category. If you want to assign them a new category, you must do so again.
:::

:::warning Attention
If you delete a parent category, all subcategories associated with it will be deleted. Entries linked to those categories will be left without an assigned category.
:::

### Tags

Tags allow you to add more detail to your entries by combining them with Liquid on your content pages.

When creating entries, you can add a tag that will appear both in the source code and in our content API, allowing you to add specific functionality to that tag.


### Excerpt

The excerpt is a short summary of the entry. You edit it in the **Properties** panel of the editing view, next to the category and the tags, and it allows up to 255 characters.

Unlike fields, the excerpt is not defined in the content type: it is available in every entry without you having to create it. It is published along with the entry, and you retrieve it in `meta.excerpt` in the content API, or with `entry.meta.excerpt` in Liquid.


### Identifier

The identifier is a unique value used to generate the URL of an entry.
When you create an entry, the platform assigns an identifier to it. If you want to create a more friendly link, you can modify it when creating the entry or later when editing it.

By force, the identifier must be a unique value for entries of the same type. If you try to save two entries with the same identifier, the platform will modify the last one when you publish the entry.


:::warning Important
If you want to modify the identifier of your entry after its creation, you must click on the lock in the identifier field and confirm that you want to change it, as making changes to the identifier breaks all references to the content through the API or SDKs.

:::


### Private content

Enable the private content option so that your content is exclusive to users who have a session on the platform.

Depending on how you are consuming the content, you may need to follow some additional steps to access it:

- **Through the public API**: See the section on private content in the API.
- **Through Liquid**: By signing in to your site, your users will be able to view private content.


### Segments

Segmented content is essential for any entity or company that wants to send specific information to a group of users.

To enable an entry to be visible to a specific group of users:

1. Check the private content option
1. Enable segmentation
1. Select the user segment that the entry is aimed at.
1. Click **Save**.

To create a specific segment, review the Segments section.


## Consume externally

You can access the content created in the Content module from anywhere, using our API.
To get the UUID of an entry, follow these steps:

1. In the side menu, select Content.
1. Click on your space.
1. Select Entries.
1. From the list of entries, click on an entry
1. Click on the preview icon.
1. Click on **API Link**. You will be redirected to a new page that uses the API to get the content of the entry. The result will look similar to this:

URL: `https://test.modyo.com/api/content/spaces/test-space/types/nuevo/entries/45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844`

```json
{
  "meta":
  {
    "name": "MyNewEntry",
    "slug": "mynewentry",
    "tags": [],
    "type": "newType",
    "uuid": "45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844",
    "space": "test-space",
    "author":
    {},
    "locale": "es-cl",
    "private": false,
    "targets": [],
    "category": "mycategory",
    "created_at": "2022-02-24T12:44:24.000-03:00",
    "updated_at": "2022-02-25T10:06:46.000-03:00",
    "published_at": "2022-02-25T10:06:46.000-03:00",
    "version_type": "current",
    "category_name": "MyCategory",
    "category_slug": "mycategory",
    "unpublished_at": null,
    "available_locales": ["es-cl"]
  },
  "fields":
  {
    "My items": "..."
  }
}
```

For more information about our API and the different actions you can perform, see [Management API](/en/platform/core/api).
