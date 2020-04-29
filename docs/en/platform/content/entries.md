---
search: true
translated: true
---

# Entries

## About the interface

The entry list displays every type of non-archived entry within in that space.

By default, this list displays entries by their "Updated on" date, meaning either by the date the entry was created, or last updated.

The columns in the list display the following details:

- **Status**: Current status of the entry in the publishing process: Draft, Published, Pending Changes, Scheduled and Archived.
- **Name**: Title of the entry.
- **Type**: Entry Type (See [Types](en/en/platform/content/types.html)).
- **Updated on**: Date of the last saved update.
- **Author**: Original creator of the entry.

You can also filter the list by six different attributes:

- **Types**: Filter the list by any single type. (See [Types](/en/platform/content/types.html)).
- **Status**: Filter the list by the following statuses: **Published, Not Published, Scheduled, Archived, and All**. Filtering by **All** does not show Archived entries. Filtering by **Not Published** displays entries in either the **Draft** or **Scheduled** status.
- **Category**: Filter the list by a single category. Displays "All" by default.
- **Locale**: Filter the list by a particular language. Entries without a translation in the filtered language display **Not translated** in the **Status** column.
- **Translation**: This filter is associated with the **Locale** filter, and further filters the list by either **Translated** or **Not Translated**.
- **Tags**: Filter by a selectable, searchable list of the current tags available in the account.
- **Search**: Not a filter, but a search that returns entries that match your criteria, by title.

## Create an Entry

To create an entry, click the "+ New" button in the upper right of the screen. In the New Entry modal that appears, give your entry a name. You can fill in the "Slug" field, or let it autocomplete based on the entry name. Lastly, select the content type of the entry. Types can be created in the [Types section](en/en/platform/content/types.html).

When you click Create, the entry edit view opens and you can fill in your content in the necessary fields based on the type you chose.

::: tip Tip
To translate an already written entry into a different language, click the language dropdown along the top and select the new language you want to translate. This opens a blank version of the entry, where you can press the **Copy from locale** button in the upper-right section of the editor to bring in the content of another locale of the entry and work to translate it directly.
:::

### Publish an Entry

To publish an entry, Modyo assures you a gradual check process in order to certify that the content you are going to offer is correct.

After finishing your writing, editing, and then clicking the **Save** button, one of two things happens: it will change into a **Publish** button if you have the correct role to publish. If you don't, then you are limited to only saving your changes.

If the space has Team Review enabled, your entry goes through a review process with assigned users before publishing.

To learn more, please go to [Team Review.](en/en/platform/platform/team-review.html)


### Unpublish an entry

To unpublish an entry, open it and click on the Unpublish button at the top of the screen. This changes the status of the entry to Draft, is no longer published.

If you want to republish the entry, it must go through the Team Review process again (if enabled).

### Categories

Categories are one of the most useful ways to order your Entries. Applying a category to an entry establishes a relative path in its URL that allows us to access the entry without going through other pages.

To see the Categories, click on the Categories section in the main menu on the left. There, we can see all the categories that are already made.

#### Create a Category

To create a category, click on the green button at the top of the screen. This takes us to the next screen where we define the Title, Path (for the url), and optionally, a Parent category, e.g. a category "dogs" with the parent category "pets" would resolve to "pets/dogs" in the URL.

::: tip Tip
When the category title is entered, the path field will default to matching the same letters, in a url-accepted format. To change it, just edit the field.

If we change the path, remember to change all links in any channel using it.
:::

::: warning Warning
If you want to delete a category, click the three-point icon at the end of its name, then select **Delete**. If there are entries assigned to that category, they will lose their category assignment, and you will need to reassign them another category.
:::

::: danger Danger
If you delete a Parent Category, you also delete all its subcategories. Entries associated with these categories will lose their category assignments.
:::

### Slug

If you want to make a link easier to read with any microservice or endpoint that you want to connect, you can provide a custom slug.

When you create an entry, the platform will randomly assign you a slug. However, to change it you just have to change the field in the properties window.

This value must be unique for entries of the same type. If two entries with the same slug are saved, this will be modified at the time of posting the entry.

## Private Content

If you want the content to be private or exclusive for users who have a current authenticated session within the platform, you must enable this option.

Depending on how you are consuming the content, you will need to perform extra steps to access it. If you are using the public API, go to the section on [private content in the API](en/en/platform/content/public-api-reference.html#private-content). If you are consuming the content through [Liquid](/en/platform/channels/liquid-markup.html), it is enough for users to log in to the site in order to view private content.

### Targets

Targeted content is essential for any organization that wants to send specific information to their different audiences or customer segments.

With Targets, it is possible to enable an entry to have its content only be visible specific audiences. To do this, just check the **Private** option in the entry's properties, then check the **Enable targeting** option, and select from the list of targets. You can select more than one target audience.

To create a specific target, review the [Targets section](en/en/platform/customers/targets.html).





