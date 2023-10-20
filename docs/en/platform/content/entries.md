---
search: true
---

# Entries

Entries are the way to display content created in Spaces for all your sites. These Entries can be viewed from Sites created in Modyo Platform, in the Channels module, or on external sites, using our API.

Entries are a part of Modyo Content, the module responsible for creating dynamic content repositories that we call Spaces. In a Space, Entries are separated by Content Types. The Type defines the basic structure with its requirements and validations so that an Entry can be published.

In addition, if you use the Channels and Customers modules, you can create sites with the ability to show entries if they belong to a segment of your users in a site.

## About the interface

The entry list displays every type of non-archived entry within in that space.

By default, this list displays entries by their "Updated on" date, meaning either by the date the entry was created, or last updated.

The columns in the list display the following details:

- **Status**: Filter the list by the following statuses: Published, Not Published, Scheduled, Archived, and All. Filtering by All does not show Archived entries. Filtering by Not Published displays entries in either the Draft or Scheduled status.
- **Name**: Title of the entry.
- **Type**: Entry Type (See [Types](/en/platform/content/types.html)).
- **Updated on**: Date of the last saved update.
- **Author**: Original creator of the entry.

You can also filter the view by other default filters that you can adjust depending on your need, regardless of how you order your entry list.

You can also filter the list by six different attributes:

- **Types**: Filter the list by any single type. (See [Types](/en/platform/content/types.html)).
- **Status**: Filter the list by the following statuses: Published, Not Published, Scheduled, Archived, and All. Filtering by All does not show Archived entries. Filtering by Not Published displays entries in either the Draft or Scheduled status.
- **Category**: Filter the list by a single category. Displays "All" by default.
- **Locale**: Filter the list by a particular language. Entries without a translation in the filtered language display Not translated in the Status column.
- **Translation**: This filter is associated to the selected language and filters by the translation status of the entries for that language. Ex: If an entry does not have a version in the selected language, it will be set to "Not translated".
- **Tags**: Filter by a selectable, searchable list of the current tags available in the account.
- **Search**: Not a filter, but a search that returns entries that match your criteria, by title.

## Bulk actions

By selecting entries with the _checkbox_ to the left of each entry, you can use the bulk actions that appear at the bottom of the list.

- **Mass Edit**: You will enter the interface that allows you to modify multiple entries at once.
- **Publish**: The selected entries that have pending changes or are in a Draft status will be published.
- **Force publish**: If team review is enabled, space admins can use this action to force publish entries that have pending changes or are in draft status without going through the review process.
- **Unpublish**: Selected entries that are published will be unpublished.
- **Archive**: Selected entries that are unpublished will be archived.

:::warning Warning
- Bulk publication will only be effective on selected entries that have pending changes.
- Bulk unpublish will only take effect on selected entries that have a published version.
- Bulk archiving will only take effect on selected entries that are not published.

If you try to archive an entry that is published, this action will be omitted and will have no effect.
:::

:::tip Tip
Bulk actions are executed in the background and you may not see the changes immediately, we recommend waiting a moment and refreshing the view after executing a mass action.
:::

## Bulk edit

:::warning Warning
This option is only available if you have the index of entries filtered by a particular type and you also have entries selected for bulk actions.

If you select multiple entries, but are not using the filter by table type, you will not see this option.
:::

When selecting entries of the same type, you will see this option in the bulk actions at the bottom left of the table. By clicking on it, you will enter a new view that will allow you to select the fields you want to overwrite from the selected entries. Once you have checked the selector to the left of each field, you will be able to enter the value associated with the field.

You can make changes to all fields of the type. Once you have finished adding values to the fields you need, press "Next" at the top of the screen to see a summary of your changes. If you agree with the changes, press "Save" to have Modyo start applying the changes to all selected entries.

:::warning Warning
By using bulk editing of entries you are overwriting the values for the selected fields in all selected entries, so the values that existed before the bulk edit will no longer be available in the editable version.

If you need to restore a specific value from an entry, you can make use of the "Differences" option in the edit entries view to review the previous values that a particular entry had.
:::

Once Modyo has finished modifying the fields for the selected entries, you will notice that all entries are now pending changes and you must publish them. For this, you can use the "Publish" mass action.

## Create and Publish an Entry

To create an entry, follow these steps:

1. In the side menu of Modyo Platform, select **Content** and click **Space**.
2. Select your **Space**.
3. Click **+ New Entry**.
4. Select the **Content Type**, **Name**, and **Identifier**. Click **Create**.
When you click **Create**, the Edit Entry view opens and you can fill in your content in the required fields based on the Content Type you chose.
5. Click **Save** and then click **Publish**.

In the next window, **Modyo** asks for the name, slug, and type of post you want to create, which can be created in [Content Types](/en/platform/content/types.html).

:::warning Warning
If the name field is empty, the platform defaults the UUID of the entry as a slug.
:::

## Translate an Entry

Modyo Platform allows you to add different languages to your Spaces and create Entries for them. To translate an existing post into a different language, you must ensure that the language has been added to the Localization section in the Space settings.

To translate an entry, follow these steps:

1. From Modyo Platform, in the side menu, expand **Content**, and click **Spaces**.
1. Click your **Space**.
1. Expand **Space Settings** and click **Location**.
1. Select the language you want to add and click **Add Language**.
1. Click **Save**.
1. In the side menu, click **Entries**.
1. Select the entry you want to translate and select the language.
1. Click on the more actions button (...) and select **Copy from Language**.

For more information about adding another language, see [Setting Up a Space](/en/platform/content/spaces.html#localization).

### Publish an Entry

To publish an entry, Modyo offers a certification process in order to verify that the content you are going to publish is correct.

After you finish writing and editing, click the **Save** button in the top right part of the screen, which will save all of your content.

If you click on it, the button will respond in two ways. If you have the Space Administrator permission, you can publish automatically. If you don't have the required permissions, you will not be able to publish the resource and another user with a higher role must do it.

If the Space has Team Review enabled, your entry goes through a review process with assigned users before publishing.

To learn more about Team Review, see [Team Review](/en/platform/core/key-concepts.html).


### Unpublish an entry

Unpublishing an entry or part of a site allows you to go to Draft status and will be hidden from the public. In the event that Team Review is enabled, you will have to go through the review flow again when it is published.

To unpublish content, follow these steps:

1. In Modyo Platform, in the side menu, click Channels and select Spaces.
1. Click your Space.
1. In the Entries menu, select your Entry.
1. Expand the Mass Actions menu and click Unpublish.


### Delete Entries

Modyo only allows you to delete entries that are archived. To do this open the additional options in the edit view and use the "Delete" option of the selector to the left of the main view button.

#### Preview

As a headless platform, Modyo allows you to preview an entry in multiple sites.

If you already have [content views on your sites](/en/platform/channels/templates.html#content-views), you can see the **Site Preview** button, where you select where you want to see your resource.

:::danger Danger
If the Space is not associated with a site, you can only see the JSON code of the Entry you are developing.
:::

:::warning Warning
You will only be able to preview content on sites that are the same language as the language of the site. If the entry is in another language, when you get to the preview you will encounter a 404 error.
:::

:::warning Warning
You can preview the content either as a logged in user or as a user that has not logged in. To do this, it is recommended that you log in or out of Modyo on the site before entering preview mode, as logging in or out during preview mode may result in _x-frame-options_ or _mixed-content_ security errors, depending on the site's custom domain and SSL settings.
:::

#### Edit an entry

To edit an entry, click the entry's name in the entry manager.

This will take you to the edit view where you can change the content and properties of the post, such as the name, slug and tags.

In case the post is published, the changes will be made automatically. If the entry is in the Team Review process, reviewers must update their view in order to see the changes.

## Categories

Categories are one of Modyo's most useful ways to sort your Entries. In this case, every time a Category is used, a path is generated in the URL that allows you to access the resource, if it is published.

To see the Categories, click the **Categories** section in the main menu on the left. There, we can see all the categories that are already made.

#### Create a Category

To create a category, click on the green button at the top of the screen. This takes us to the next screen where we define the Title, Path (for the url), and optionally, a Parent category, e.g. a category "dogs" with the parent category "pets" would resolve to "pets/dogs" in the URL.

For entries in these categories, the identifier is added as a prefix to the URL of the entry. For example:

An entry with URL: test.modyo.com/visita-chile and category 'travel' would now be test.modyo.com/travel/visita-chile.

:::tip Tip
When the category title is entered, the path field will default to matching the same letters, in a url-accepted format. To change it, click the field to edit it.

If we change the path, remember to change all links in any channel using it.
:::

:::warning Warning
If you want to delete a category, click the three-point icon at the end of its name, then select **Delete**. If there are entries assigned to that category, they will lose their category assignment, and you will need to reassign them to another category.
:::

:::danger Danger
If the Parent Category is deleted, all subcategories assigned to it are also deleted. And the entries associated with those categories are left without a category assigned to them.
:::

### Tags

Tags allow you to add more granularity to your Entries by combining it with Liquid on your content pages. When creating Entries, you can add a tag that appears both in the source code and in our content API so that you can add specific functionality to this tag.

### Slug

If you want to make a link easier to read with any microservice or endpoint that you want to connect, you can provide a custom slug.

When you create an entry, the platform will randomly assign you a slug. However, to change it you just have to change the field in the properties window.

This value must be unique for entries of the same type. If two entries with the same slug are saved, this will be modified at the time of posting the entry.

### Private Content

If you want the content to be private or exclusive for users who have a current authenticated session within the platform, you must enable this option.

Depending on how you are consuming the content, you will need to perform extra steps to access it. If you are using the public API, go to the section on [private content in the API](/en/platform/content/public-api-reference.html#private-content). If you are consuming the content through [Liquid](/en/platform/channels/liquid-markup.html), it is enough for users to log in to the site in order to view private content.

### Segments

Segmented content is essential for any organization that wants to send specific information to their different audiences or customer segments.

To do this, it is possible to enable the content to be visible to a particular group of your choice in the Input. To do this, just check the option that Content is private, enable targeting, and then select which user segment the entry is directed to.

To create a specific target, review the [Segments section](/en/platform/customers/segments.html).

## Consume externally

Access the content created in the Content module from anywhere using our API.

Follow these steps to get the uuid of an entry:

1. On the Modyo Platform, in the main menu, select **Content** and click **Spaces**.
1. Select your **Space**.
1. Click **Preview**.
1. Click **API Link**.

It will take you to a new page where the API is used to get the content of the post. The result will be similar to this:

URL: `https://test.modyo.com/api/content/spaces/test-space/types/nuevo/entries/45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844`

```json{ "meta": { "name": "MyNewEntry", "slug": "mynewentry", "tags": [], "type": "newType", "uuid": "45fa2ef7-bf12-47a3-8ff7-f7d1f5f36844", "space": "test-space", "author": {}, "locale": "es-cl", "private": false, "targets": [], "category": "mycategory", "created_at": "2022-02-24T12:44:24.000-03:00", "updated_at": "2022-02-25T10:06:46.000-03:00", "published_at": "2022-02-25T10:06:46.000-03:00", "version_type": "current", "category_name": "MyCategory", "category_slug": "mycategory", "unpublished_at": null, "available_locales": ["es-cl"] }, "fields": { "My items": "..." }}```

To learn more about our API and the different actions you can take, see [Management API](/en/platform/core/api).