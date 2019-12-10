---
search: true
---

# Widgets

Widgets are what allows you to create [microfrontends](/#) encapsulated for your sites and applications.

When you enter the widgets section of your site, you will see a list of all the widgets that have been created. In the top bar you can filter the list of widgets by state, author or tags, or do a text search by the name of the widget.

In the upper right corner you will see a main button **+ New** that will allow you to create a new widget. You must enter a name and then enter the widget edit view.

In the widget editing view, you will see the top action bar, the work area and the properties column.

![Widget builder](/assets/img/platform/widget-builder.png)

In the **top bar** you will see:

On the left, you will find the name of the widget and the current status:

- **Draft**: You will see this status when a widget has just been created or when it has been unpublished.
- **Published**: You will see this status after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: You will see this status if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: You will see this status when [team review](guides/platform/team-review.html) is enabled and the editable version has been submitted for review.
- **Approved**: You will see this status when [team review](guides/platform/team-review.html) is enabled and if the item review conditions were met. If you are in this state, your templates are ready to be published.

On the right, you will find different actions:
**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Allows you to open in a new tab the preview of the editable version of the widget.

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: By clicking on this icon, you will open the mode of differences, in which you can compare the changes between multiple versions of your widget. By default you will start comparing the published version with the editable version, but by using the version selectors, you can also compare with the backup versions. If this icon does not appear, then there is no published version of this widget.

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 23a1 1 0 01-1-1v-3H7a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-4.1l-3.7 3.71a1 1 0 01-.7.29H12zm1-6v3.08L16.08 17H21V7H7v10h6zM3 15H1V3a2 2 0 012-2h16v2H3v12zm6-6h10v2H9V9zm0 4h8v2H9v-2z" fill="#626262"/></svg>: Te allows you to display a side tab that shows the activity and comments of the widget.

**Other options** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Allows you to archive and create a copy of the current widget.

**Main button**

- Save: Save the current changes.
- Send to review: If the review is enabled on a computer, then you can send to review and notify the reviewers that the widget is ready to be reviewed.
- Publish: Pass the editable or approved version (if team review is enabled) to the published version.

**Other main actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- Unpublish: If the widget is published, you can take it out of production using this option
- Force publication: If you are a site administrator, you can use this option to immediately publish a widget, even if the team review is enabled.

::: tip Tip
Only widgets that have been previously unpublished can be archived.
:::

::: tip Tip
Archived widgets will not appear in the initial listing or in the widget selection modality in the Page Builder. You can restore an archived widget, entering its edit view and using the restore option in the upper right corner of the view.
:::

Once a widget is published, it will be visible in the modality of custom widget selection in the [page builder.](/Guides/channels/pages.html)

::: tip Tip
To learn more about the publication flow, review the [Versioning] section (/guides/platform/team-review.html # versioning)
:::


In the **work area** you will see:

- **Code tabs**: You will have a JavaScript, CSS and HTML tab at your disposal to build your widgets.
- **File manager**: By clicking on it, you will raise the file management modal, where you can filter and search the files you have uploaded in the [File manager](/guides/content/asset-manager.html) and copy its URL to use them in your widget. You can also upload new files from this modal.
- **Keyboard shortcuts**: You will see a small informative window with some useful keyboard shortcuts.
- **Snippets**: You will see a list of the snippets available from the [template builder](/guides/channels/templates.html # snippets) and you can copy their code to reference them in your widget.
- **Changes**: If you have saved changes and have not published, you will see this list of all the times you have saved each of the files (JS, CSS and HTML). When you click on a sub-version, you will change the content of the tab to the content of the sub-version that you clicked.

::: tip Tip
To avoid losing the changes you currently have, be sure to save before jumping between sub-versions, so that you can always return to the most recently saved version in the change list.
:::

::: tip Tip
When you publish the widget, you will not see any changes available. This is because each version starts unchanged from the productive version. If you restore the widget to an earlier version, you will also restore the sub-versions, so you can access all instances where changes were saved in that version.
:::

In the three tabs of the widget you can make use of Liquid. For more information check [the documentation associated with Liquid.](/Guides/channels/liquid-markup.html)

In the **properties column** you will see:

- **Name**: It will allow you to change the name of the widget
- **Tags**: It will allow you to add tags to a widget. The tags are for administrative use and are used to search and filter the widgets and thus be able to find them quickly.

## Modyo CLI

Modyo CLI is a command line tool, which serves to generate an environment that allows you to work locally with Modyo widgets.

### Introduction

First, you must install the Modyo CLI globally to have the `modyo-cli` command available.

If you use npm:

``` plain
npm i -g @ modyo/cli
```

Using yarn:

``` plain
yarn global add @ modyo/cli
```

### Create a project

The Modyo CLI is designed to work with one or more widgets of a project or structures that function as a container. After creating a project, you will have the possibility to create, edit and delete widgets locally.

To create a project:

``` plain
# We recommend you name your projects in `PascalCase` format
modyo-cli project create <projectName>
cd projectName
modyo-cli project start
```

The project must have at least one widget to run the server.

### The Modyo session

To be able to push your widgets to the Modyo platform and obtain the site dependency files, you have to have a session in the account in which you plan to deploy your widgets. For that, you must use the following command:

``` plain
modyo-cli project login
```

### Working with widgets

To add a new widget to the project, use the following command:

``` plain
# We recommend you name your widgets in `PascalCase` format
modyo-cli widget add <widgetName>
```

To start the development server, use the following command:

``` plain
modyo-cli widget start <name>
# You can also use this command without passing the name, in that case, a list of available widgets will be displayed.
```

### Commands available

| Command | Description |
| ------------------------- | ----------------------- ------------------------------ |
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
| `push --all widget | Send all widgets to the Modyo platform |
| `push --force widget | Force sending widgets |
| `help <command>` | Show help for a specific command |

### Common problems

#### `TypeError: Cannot read property 'vue' of undefined`

You must force the `14.2.2` version of the` vue-loader` package

#### `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

When you start `modyo-cli demo <widget_name>` an error like this may occur `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

To fix this error, modify the file `node_modules \ vue-loader \ lib \ template-compiler/index.jx` and replace:

``` javascript
//prettify render fn
    if (! isProduction) {
      code=prettier.format (code, {semi: false})
    }
```

by:

``` javascript
//prettify render fn
if (! isProduction) {
  code=prettier.format (code, {semi: false, parser: 'babylon'})
}
```

[According to this arrangement in StackOverflow](https://stackoverflow.com/questions/50561649/module-build-failed-error-no-parser-and-no-file-path-given-couldnt-infer-a-p)

This error has already been fixed in `vue-loader`, but has not yet been deployed [Pull Request](https://github.com/vuejs/vue-loader/pull/1323/files)
