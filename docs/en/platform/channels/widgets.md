---
search: true
translated: true
---

# Widgets

Widgets are independently managed, small applications that perform specific tasks, which you can develop and deliver across your digital channels. Widgets are what allow you to create a [microfrontend](/#) architectural style for better maintainable codebases, more scalable, autonomous teamwork within your organization, and updates to your digital channels in a more consistent, incremental fashion.

When you enter the Widgets section of any site or channel, you see a list of all the widgets in that channel. In the top bar, you can filter the list of widgets by status, author or tags, or search for any widget by either its name or tags.

In the upper right corner you can select the **+ New** primary button to create a new widget. Give the widget a name, then click **Create** to begin building your widget.

In the widget editing view, you can see three areas: the top action bar, the main work area and the properties column on the right.

![Widget builder](/assets/img/platform/widget-builder.png)

Along the **top bar**, on the left, you can see the widget name and current status:

- **Draft**: This status means a widget is new or is unpublished.
- **Published**: This status means a widget is published and the version in the editor contains no unpublished changes.
- **Pending changes**: This status means there is a published version of a widget, and the editor contains unpublished, pending changes.
- **In review**: This status means [team review](/en/platform/platform/team-review.html) is enabled and this widget is in review.
- **Approved**: This status means [team review](/en/platform/platform/team-review.html) is enabled and a widget passed the review process. You can now publish this widget.

::: tip Tip
You may notice that some widgets with **Pending changes** and **In review** statuses have a small green mark. This green mark indicates that there is an active, published version of this widget available.
:::

Here are the available actions on the right side of the top bar:
**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Opens a preview of the widget in a new tab.

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Clicking this icon opens a modal to compare the differences between the active published version of this widget, and the editable version you are currently working on. You can use the version selectors to compare either the editable or active published versions to older back up versions as well.

::: tip Tip
If you do not see the **Differences** icon, then there is no published version of this widget.
:::

**Show activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Displays a sidebar with activity history and comments. At the bottom of the sidebar, you can submit comments. Next to each activity, click on "see detail" to show the complete information of an activity log.

**More actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: 

- **Archive**: Archives the widget. You cannot archive published widgets.
- **Copy**: Instantly creates a copy of the widget, prepending "Copy of " on the widget name.

**Primary actions**

- **Save**: Saves current changes.
- **Send to review**: Changes the widget status to "In review". You can continue making changes, but each change sends a notification to all assigned reviewers via email.
- **Publish**: Once reviewers approve the widget, it can be published.

**Other primary actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Reject**: Returns the widget status to the "Pending changes", notifying reviewers that the changes were rejected.
- **Force Publish**: Admin team members have the option to forcibly publish widgets, circumventing the established reviewal process.
- **Unpublish**: If the widget is published, you can take it out of production using this option.

::: tip Tip
Only unpublished widgets can be archived.
:::

::: tip Tip
Widgets that are active in one or more pages of your site or channel cannot be unpublished. In order to unpublish a widget, you must first remove it from all pages.
:::

::: tip Tip
Archived widgets do not appear in the main widget list or in the Custom widget selection in Page Builder. You can restore an archived widget by editing it and using the restore option in the upper right corner of the editing view.
:::

Once a widget is published, it is available as a custom widget in the [page builder.](/en/platform/channels/pages.html)

::: tip Tip
To learn more about publication lifecycles in Modyo, review the [Versioning](/en/platform/platform/team-review.html#versioning) section.
:::


In the main **work area** you can see the following:

- **Code tabs**: The Widget Builder has a JavaScript, CSS and HTML tab at your disposal to build your widgets.
- **Asset manager**: Opens a modal that lists all account files and provides filters and searching. Clicking the image preview or file name opens an editor where you can resize/crop the image, and change attributes such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste, and you can select the "Upload files" tab to upload files. You can learn more about By clicking on it, you will raise the file management modal, where you can filter and search the files you have uploaded in the [File manager](/en/platform/content/asset-manager.html) and copy its URL to use them in your widget. You can also upload new files from this modal.
- **Shortcuts helper**: A small pop-up that displays useful keyboard shortcuts for the Widget Builder.
- **Snippets**: Displays a list of custom snippets where you can copy their reference code and insert them in your widget.
- **Changes**: A list of every "Save" state of this widget since it was last published. Click on any of these save states to change the content of the widget to that particular save state. If doing so, all your current changes will be lost.

::: tip Tip
To avoid losing any changes you currently have, be sure to save before jumping between save states. This way, you can always return to the most recently saved version in the **Changes** list.
:::

::: tip Tip
If you publish a new version of your widget, the **Changes** list resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

You can make use of Liquid in the Javascript, CSS, and HTML tabs in the widget builder. For more information check [the associated Liquid documentation.](/en/platform/channels/liquid-markup.html)

The **Properties** on the right contains the following fields:

- **Name**: Use this field to update the name of your widget.
- **Tags**: Use this field to add tags to your widget. Tagging a widget makes it easier to search and filter. As your digital channels scale in size and complexity, good tagging helps keep your channel management well organized.

## Modyo CLI

The Modyo Command Line Interface (CLI) is a command line tool developers use to generate local environments to work on and update Modyo widgets.

### Introduction

First, you need to install the Modyo CLI globally on your local machine to have the `modyo-cli` command available.

**NPM**:

``` plain
npm i -g @ modyo/cli
```

**Yarn**:

``` plain
yarn global add @ modyo/cli
```

### Create a project

The Modyo CLI is designed to work with one or more widgets in a project or in structures that function as a container. After creating a project, you can create, edit and delete widgets locally.

To create a project:

``` plain
# We recommend you name your projects using `PascalCase` format
modyo-cli project create <projectName>
cd projectName
modyo-cli project start
```

The project must have at least one widget for the server to run.

### The Modyo session

To be able to push your widgets to the Modyo platform and obtain the relevant site dependency files, you need to have a session in the account in which you plan to deploy your widgets. For that, you must use the following command:

``` plain
modyo-cli project login
```

### Working with widgets

To add a new widget to the project, use the following command:

``` plain
# We recommend you name your widgets using `PascalCase` format
modyo-cli widget add <widgetName>
```

To start the development server, use the following command:

``` plain
modyo-cli widget start <name>
# You can also use this command without passing the the widget name. This displays a list of available widgets.
```

### Commands available

| Command | Description |
|-------------------------|-----------------------------------------------------|
| `project` | Show help for the project |
| `project create <name>` | Create a project |
| `project start` | Start the development server with all widgets created |
| `project login` | Get the session cookie from the Modyo platform |
| `project logout` | Revoke the Modyo session token |
| `widget` | Show help for the widget command |
| `widget add <name>` | Add a widget to the project |
| `widget start <name>` | Start the development server in standalone mode |
| `widget delete <name>` | Remove an existing widget | |
| `push widget <name>` | Send a widget to the Modyo platform |
| `push --all widget` | Send all widgets to the Modyo platform |
| `push --force widget` | Force sending widgets |
| `help <command>` | Show help for a specific command |

### Common problems

#### `TypeError: Cannot read property 'vue' of undefined`

You must force the `14.2.2` version of the` vue-loader` package

#### `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

When you start `modyo-cli demo <widget_name>` you may see the error `No parser and no filepath given, using the 'babylon' parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

To fix this error, modify the file `node_modules\vue-loader\lib\template-compiler/index.jx` and replace:

``` javascript
//prettify render fn
    if (! isProduction) {
      code=prettier.format (code, {semi: false})
    }
```

with:

``` javascript
//prettify render fn
if (! isProduction) {
  code=prettier.format (code, {semi: false, parser: 'babylon'})
}
```

[According to this fix on StackOverflow](https://stackoverflow.com/questions/50561649/module-build-failed-error-no-parser-and-no-file-path-given-couldnt-infer-a-p)

This error has already been fixed in `vue-loader`, but has not yet been deployed—[Pull Request](https://github.com/vuejs/vue-loader/pull/1323/files)
