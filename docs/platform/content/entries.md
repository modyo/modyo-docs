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
- **Type**: Entry Type (See [Types](/platform/content/types.html)).
- **Updated on**: Date of the last saved update.
- **Author**: Original creator of the entry.

You can also filter the list by six different attributes:

- **Types**: Filter the list by any single type. (See [Types](/platform/content/types.html)).
- **Status**: Filter the list by the following statuses: **Published, Not Published, Scheduled, Archived, and All**. Filtering by **All** does not show Archived entries. Filtering by **Not Published** displays entries in either the **Draft** or **Scheduled** status.
- **Category**: Filter the list by a single category. Displays "All" by default.
- **Locale**: Filter the list by a particular language. Entries without a translation in the filtered language display **Not translated** in the **Status** column.
- **Translation**: This filter is associated with the **Locale** filter, and further filters the list by either **Translated** or **Not Translated**.
- **Tags**: Filter by a selectable, searchable list of the current tags available in the account.
- **Search**: Not a filter, but a search that returns entries that match your criteria, by title.

## Create an Entry

To create an entry, click the "+ New" button in the upper right of the screen. In the New Entry modal that appears, give your entry a name. You can fill in the "Slug" field, or let it autocomplete based on the entry name. Lastly, select the content type of the entry. Types can be created in the [Types section](/platform/content/types.html).

When you click Create, the entry edit view opens and you can fill in your content in the necessary fields based on the type you chose.

:::tip Tip
To translate an already written entry into a different language, click the language dropdown along the top and select the new language you want to translate. This opens a blank version of the entry, where you can press the **Copy from locale** button in the upper-right section of the editor to bring in the content of another locale of the entry and work to translate it directly.
:::

## Bulk actions

By selecting entries with the _checkbox_ to the left of each entry, you can use the bulk actions that appear at the bottom of the list.

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

:::warning Caution
By using bulk editing of entries you are overwriting the values for the selected fields in all selected entries, so the values that existed before the bulk edit will no longer be available in the editable version.

If you need to restore a specific value from an entry, you can make use of the "Differences" option in the edit entries view to review the previous values that a particular entry had.
:::

Once Modyo has finished modifying the fields for the selected entries, you will notice that all entries are now pending changes and you must publish them. For this, you can make use of the "Publish" mass action.

### Publish an Entry

To publish an entry, Modyo assures you a gradual check process in order to certify that the content you are going to offer is correct.

After finishing your writing, editing, and then clicking the **Save** button, one of two things happens: it will change into a **Publish** button if you have the correct role to publish. If you don't, then you are limited to only saving your changes.

If the space has Team Review enabled, your entry goes through a review process with assigned users before publishing.

To learn more, please go to [Team Review.](/platform/core/key-concepts.html)


### Unpublish an entry

To unpublish an entry, open it and click on the Unpublish button at the top of the screen. This changes the status of the entry to Draft, is no longer published.

If you want to republish the entry, it must go through the Team Review process again (if enabled).

### Delete entries

Modyo only allows you to delete entries that are archived. To do this open the additional options in the edit view and use the "Delete" option of the selector to the left of the main view button.

#### Preview

As a headless platform, Modyo allows you to preview an entry in multiple sites.

If you already have [content views on your sites](/platform/channels/templates.html#content-views), you can see the **Site Preview** button, where you select where you want to see your resource.

::: danger Warning
If the Space is not associated with a site, you can only see the JSON code of the entry you are developing.
:::

:::warning Warning
Solo podrás previsualizar en el sitio los contenidos que son de un idioma igual al idioma del sitio. Si la entrada está en otro idioma, al llegar a la vista previa te encontrarás con un error 404.
You can only preview the contents on a site if the language corresponds to the language of the site. If the entry is in another language, you will receive a 404 error when you reach the preview.
:::

:::warning Warning
You can preview the content either as a logged in user or as a user that has not logged in. To do this, it is recommended that you log in or out of Modyo on the site before entering preview mode, as logging in or out during preview mode may result in _x-fame-options_ or _mixed-content_ security errors, depending on the site's custom domain and SSL settings.
:::

#### Edit an entry

Si deseas editar una entrada, solo debes hacer click en el nombre dentro del administrador.

Después de esto, entras a la vista de edición en la que puedes cambiar el contenido y las propiedades de esta, como el nombre, el slug y los tags.

En el caso de que la entrada se encuentre publicada, los cambios se harán automáticamente. Si esta se encuentra en proceso de Revisión en Equipo, los revisores deberán actualizar su vista para poder notar los cambios.

If you want to edit an entry, just click on the entry's name inside the entry manager.

This will take you to the edit view where you can change the content and properties of the post, such as the name, slug and tags.

In case the post is published, the changes will be made automatically. If the entry is in the Team Review process, reviewers must update their view in order to see the changes.

### Categories

Categories are one of the most useful ways to order your Entries. Applying a category to an entry establishes a relative path in its URL that allows us to access the entry without going through other pages.

To see the Categories, click on the Categories section in the main menu on the left. There, we can see all the categories that are already made.

#### Create a Category

To create a category, click on the green button at the top of the screen. This takes us to the next screen where we define the Title, Path (for the url), and optionally, a Parent category, e.g. a category "dogs" with the parent category "pets" would resolve to "pets/dogs" in the URL.

:::tip Tip
When the category title is entered, the path field will default to matching the same letters, in a url-accepted format. To change it, just edit the field.

If we change the path, remember to change all links in any channel using it.
:::

:::warning Warning
If you want to delete a category, click the three-point icon at the end of its name, then select **Delete**. If there are entries assigned to that category, they will lose their category assignment, and you will need to reassign them to another category.
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

Depending on how you are consuming the content, you will need to perform extra steps to access it. If you are using the public API, go to the section on [private content in the API](/platform/content/public-api-reference.html#private-content). If you are consuming the content through [Liquid](/platform/channels/liquid-markup.html), it is enough for users to log in to the site in order to view private content.

### Targets

Targeted content is essential for any organization that wants to send specific information to their different audiences or customer segments.

With Targets, it is possible to enable an entry to have its content only be visible specific audiences. To do this, just check the **Private** option in the entry's properties, then check the **Enable targeting** option, and select from the list of targets. You can select more than one target audience.

To create a specific target, review the [Targets section](/platform/customers/targets.html).
