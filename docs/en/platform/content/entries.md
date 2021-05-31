---
search: true
---

# Entries

## About the interface

The entry list displays every type of non-archived entry within in that space.

By default, this list displays entries by their "Updated on" date, meaning either by the date the entry was created, or last updated.

The columns by which you can sort the list of entries are:

- **Status**: State in which you are in the process of publishing the content. In this case, the statuses are four: Draft, Published, Scheduled, and Archived.
- **Name**: Name of the content.
- **Type**: Content Type (View [Types](/es/platform/content/types.html)).
- **Updated**: Date of last saved content update.
- **Author**: Name of the author of the content.

In the admin you can also filter the view according to several default filters that you can adjust according to your need, regardless of how you order the list of your contents.

In this case, the filters are six:

- **Type**: Type of Content that was created (View [Types](/es/platform/content/types.html))
- **Status**: State in which you are in the process of publishing the content. In this case, the statuses are four: Draft, Published, Scheduled, and Archived.
- **Category**: Category to which entries are assigned.
- **Language**: The language in which the content is written.
- **Translation**: This filter is associated with the selected language and filters by the translation status of the entries for that language. Ex: This means that if an entry does not have a version in the selected language, it will fall under "Not translated".
- **Tags**: Tags available in the account. You can occupy the search bar inside the filter for tags in a simpler way.
- **Search Bar**: Filter by the content of the title of the entries.

## Mass Actions

By selecting entries with the _checkbox_ to the left of each entry, you can use the bulk actions that appear at the bottom of the list.

- **Mass Edit**: You will enter the interface that allows you to modify multiple entries at once.
- **Publish**: Selected entries that have pending changes or are in Draft status will be published.
- **Force Publish**: If team review is enabled, space administrators can use this action to force the publication of entries that have pending changes or are in Draft status without having to go through the review process.
- **Desublicar**: Selected posts that are published will be unpublished.
- **Archive**: Selected entries that are unpublished will be archived.

:::warning Attention
- Mass publishing will only be effective on selected entries that have pending changes.
- Mass unpublishing will only take effect on selected entries that have a published version.
- Bulk Archive will only take effect on selected entries that are not published.

So if you try to archive an entry that is published, this action will be skipped and will not take effect.
:::

:::tip Tip
Mass actions run in the background and you may not see the changes immediately, so we recommend waiting a moment and refreshing the view after running a mass action.
:::

## Massively Edit

:::warning Attention
This option is only available if you have the index of entries filtered by a particular type and you also have entries selected for mass actions.

If you select multiple entries, but are not using the filter by type in the table, you won't see this option.
:::

When you select entries of the same type, you'll see this option in the bulk actions at the bottom left of the table. By clicking on it, you will enter a new view that will allow you to select the fields you want to overwrite from the selected entries. Once you check the selector on the left of each field, you can enter the value associated with the field.

You can make changes to all fields of the type. Once you've finished adding values in the fields you need, tap "Next" at the top of the screen to see the summary of your changes. If you agree with the changes, press "confirm" to have Modyo start applying the changes to all selected entries

:::warning Attention
By using bulk editing entries you are overwriting the values for the selected fields in all the selected entries, so the values that existed before the joint editing will no longer be available in the editable version.

If you need to retrieve a specific value from an entry, you can use the "Differences" option in the Entry Edit View to review the previous values that a particular entry had.
:::

Once Modyo has finished modifying the fields for the selected entries, you will notice that all entries are now with pending changes and you must publish them. For this, you can make use of the mass action "Publish".

## Create an Entry

To create an entry, click on the button at the top right of the screen.

First, **Modyo** asks for the name, slug, and type of entry you want to create, to organize the format to be presented, which can be created in the [Types section](/es/platform/content/types.html).

:::warning Attention
If the name field is empty, the platform defaults the UUID of the entry as a slug.
:::

By clicking on **Create**, the entry will be created and you will be redirected to editing it where you can fill with the content you want, it will contain the structure defined in the content type you selected.

:::tip Tip
To translate an already written entry into a different language, keep in mind that your space must be configured for the languages you want to type in. (Check [Configure a Space](/es/platform/content/spaces.html #configurar -a-space))

Then, you just need to click on the current language and select the language you want to type it in.

You'll get to a blank version of the entry, where you can press the**Copy from language** button to bring the content from another version of the entry and be able to translate it easier.
:::

### Publish an Entry

To post an entry, Modyo ensures a gradual checkup process to certify that the content you are going to offer is correct.

At the end of your entry development, at the top of the screen you will find the **Save** button, which will record all your content.

If you click on it, the button will undergo two changes. If you have Space Manager permissions, you can publish automatically. If you don't have those permissions, you can't publish the resource, but another user with a role greater than you can do it.

However, if the Team Review option is found, you will go to the check-up process by other users, where you can assign specific reviewers who can publish.

To learn more, you can see [Team Review.](/es/platform/core/key-concepts.html)


### Unpublish an entry

To unpublish an entry, you must access the ticket and click on the **Desublicar** button at the top of the screen. With this, the resource will return to Draft status and will not be in the Published state.

If you want to republish the entry, it will go through the Team Review process again, so if you make a change, it will be saved again and the user with a higher role must approve it to be published correctly.

### Delete Entries

Modyo only allows you to delete entries that are archived. To perform this action, enter the edit view of the entry and in the additional options use the "Delete" option from the selector to the left of the main button of the view.

#### Preview

As a headless platform, Modyo allows you to preview an entry on multiple sites.

If you already have [Content Views on your sites](/es/platform/channels/templates.html #vistas -for-content), you can see the**Site Preview button**, where you want to see how your resource is developing.

::: danger Attention
If Space is not associated with a site, you can only view the JSON code for the entry you are developing.
:::

:::warning Attention
You will only be able to preview on the site the content that is of a language equal to the language of the site. If the entry is in another language, when you arrive at the preview you will encounter a 404 error.
:::

:::warning Attention
You can preview the content as a user without session or user with Modyo session. For this, it is advisable to log out or log out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings, depending on your site's SSL and custom domain settings
:::

#### Edit an entry

If you want to edit an entry, just click on the name inside the administrator.

After that, you enter the edit view where you can change the content and properties of the edit view, such as name, slug, and tags.

In the event that the entry is published, the changes will be made automatically. If the Team Review is in the process of Team Review, reviewers will need to update their view in order to notice the changes.

### Categories

Categories are one of Modyo's most useful ways to sort your Tickets. In this case, each time a Category is used, a route is generated on the web that allows you to access the resource without having to go through other websites, in the event that it is public.

To view the Categories, you need to click on the **Categories** section, which is located on the left side of the input interface. There, you can see all the categories that are ready-made.

#### Create a Category

If you want to create a category, just click on the green button at the top of the screen. Then, you can see a window asking to enter the name of it, the Path, and if it has a Parent Category.

:::tip Tip
When the category name is entered, the path is defaulted as a slug. If you want to change it, just click on it.

If you change the route, also remember to change all links to it, if they are on a website.
:::

:::warning Attention
If you want to delete a category, simply click on the icon at the end of the category name. However, if there are Entries assigned to that category, they are not deleted but are not assigned to any category. To re-assign some category to them, you need to perform the assignment again.
:::

::: danger danger
If the Parent Category is deleted, all subcategories assigned to the Parent Category are also deleted. And the entries associated with those categories are without assigned category.
:::

### Slug

If you want to make a much friendlier link to any microservice you want to connect, you can write a simple slug that allows you to make the work easier on the URL.

When you create an entry, the platform randomly assigns you a slug. However, to change it you just have to change the field in the properties window.

This value must be unique for entries of the same type. In case two entries are saved with the same slug, it will be modified at the time of publishing the entry.

## Private Content

If you want content to be unique to users who have a session on the platform you must enable this option.

Depending on how you are consuming the content, you need to take a few extra steps to access it. If you're using the public API, go to the section on [private content in the API](/es/platform/content/public-api-reference.html #contenido -private). If you're consuming content through Liquid, you just need users to sign in to the site to view the private content.

### Targets

Targeted content is essential for any entity or company that wants to send specific information to a user group.

To do this, you can enable the content to be visible to a particular group of your choice in the Entry. To do this, simply check the option that Content is private and then that you want to enable targetizing and then select which user target the entry is directed to.

To create a specific target, review the [Targets section](/es/platform/customers/targets.html).
