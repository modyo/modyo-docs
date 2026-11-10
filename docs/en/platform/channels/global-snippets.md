---
search: true
---

# Global Snippets

A snippet is a reusable piece of code that modularizes and breaks down complex functionalities into simpler parts. Global snippets are dynamically rendered when the page loads.

Global snippets in Modyo allow you to share code between your different web applications.

:::tip Shared Code
A change in a global snippet affects all web applications where it is used. Therefore, only users with an administrator role can access global snippets.
:::

In the snippet editing view, you can create and manage your global snippets. The top bar offers the following options:

- **Differences**: Allows you to compare changes between multiple versions of a snippet, select versions to compare, and reset or rollback to previous versions.
- **Other actions**:
    - **Archive**: Only available when the snippet does not have a published version. If it is published, use **Unpublish** first.
    - **Delete**: To delete a snippet, you must first archive it. It also cannot have a scheduled publication.
- **Save**: Once your snippet is saved, this button changes status to **Publish**.
- **Unpublish**: If the snippet is published, this option appears in the **Publish** button dropdown. It lets you unpublish it immediately or schedule the unpublication for a specific date.

The following sections are above the work area:

- Media
- Keyboard shortcuts
- Snippets: List of previously created snippets.
- Changes: List of previously saved versions.



### Create and Publish a Global Snippet

To create and publish a global snippet, follow these steps:

1. In the side menu, click Channels.
1. Click on Snippets.
1. Click on the **+** button next to "Global" in the right column.
1. Enter your code.
1. Click **Save**.
1. Click **Publish**.
1. Select whether you want to publish your global snippet immediately or on a specific date. You can also select an unpublish date, if desired.

### Load a Global Snippet
To load and use a previously created global snippet:

1. In the side menu, click Channels.
1. Select your web application.
1. Select Widgets or Templates (if you select Templates, go directly to step 5).
1. Select your widget.
1. Click on the "Snippets" tab, above the work area, to display the list of available global snippets.
1. Click the copy button of the global snippet you want to use. Global snippets always use the nomenclature `global/snippet_name`, and the button copies the <code v-pre>{% snippet "global/snippet_name" %}</code> tag to the clipboard.
1. Paste the tag into the code of the widget or template, where you want the snippet to render.
1. Click **Save** and publish the widget or template so the snippet renders in your web application.

### Preview a Snippet
Changes you save in a global snippet but have not published yet are not visible on the site. To review them before publishing:

1. Open the preview of a page, template, or widget that uses the global snippet.
1. In the preview bar, check the **Global Snippets** option so it shows **Draft**. The preview then shows the latest saved version of the snippet.

If the option shows **Published**, the preview shows the published version of the snippet.


### Edit a Snippet
To modify a snippet, follow these steps:

1. In the side menu, click Channels.
1. Click on Snippets.
1. Select the snippet you want to edit. Global snippets always use the nomenclature `global/snippet_name`.
1. Modify the snippet as required.
1. Click **Save**.
1. Click **Publish**.
1. Select whether you want to publish your global snippet immediately or on a specific date. You can also select an unpublish date, if desired.


:::warning Immediate Publication
Making changes to a global snippet affects all web applications where it is published. Proceed with caution before editing or deleting a snippet.
:::