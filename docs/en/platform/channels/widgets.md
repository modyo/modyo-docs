---
search: true
---

# Widgets

Widgets allow you to create encapsulated _micro frontends_ for your sites and applications.

By entering the **Widgets** section of the site, you can see a list of all the widgets that have been created. In the top bar you can filter the widget list by status, author or tags, or do a text search by the name of the widget.

In the upper right corner there is a main button **+ New** that allows you to create a new widget. To do this, you must enter a name and then enter the edit view of the widget.

In the edit view of the widget, you can see the top action bar, the workspace, and the properties column.

! [Widget Builder](/assets/img/platform/widget-builder.png) 

The following sections are located on the top bar:

- **Draft**: This status appears when a widget has just been created or when it has been unopened.
- **Published**: This status appears after you have made a publication and when the editable and published versions are the same.
- **Pending changes**: This status appears if there is already a published version, but there are changes pending to publish in editable version.
- **In Review**: This status appears when [computer hotfix] is enabled (/es/platform/core/key-concepts.html) and the editable version has been sent for revision.
- **Approved**: This status appears when [Computer Patch] is enabled (/es/platform/core/key-concepts.html) and if the item review conditions were met. If you are in this state, the templates are ready to be published.

On the right, these are the different actions:
**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Open the preview of the editable version of the widget in a new tab.

:::warning Attention
You can preview widgets as a user without session or user with Modyo session. For this, it is advisable to log out or log out of Modyo from your site before entering preview mode, because if you log out in preview mode you might encounter security errors like _x-fame-options_ or _mixed-content_, depending on your site's SSL and custom domain settings, depending on your site's SSL and custom domain settings
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: By clicking on this icon, you will go to the [difference view](/es/platform/channels/sites.html #revision -y-publication-joint), in which you can compare changes between multiple versions of the widget.

By default you start by comparing the published version with the editable version, but when using the version selectors, you can also with the backup versions. If this icon does not appear, then there is no published version of this widget.

**Activiti** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Allows you to display a side tab showing widget activity and comments.

**Other options** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Archive and create a copy of the current widget.

**Main button: **

- **Save**: Save the current changes.
- **Send to Review**: If team review is enabled, then it can be submitted for review and notify reviewers that the widget is ready to be reviewed.
- **Publish**: Takes you to the [joint publication] view (/es/platform/channels/sites.html #revision -and-joint publication) where you can publish your widgets.

**Other main actions: ** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg> 

- **After**: If the widget is published, it can be taken out of production using this option.
- **Force Publishing**: If you are an administrator of the site, you can use this option to immediately publish a widget, even if Team Review is enabled.

:::tip Tip
Only widgets that have been previously unpublished can be archived.
:::

:::tip Tip
Archived widgets will not appear in the initial listing or in the widget selection modal in Page Builder. To restore an archived widget, you must enter the edit view, using the**Restore** option in the upper right corner of the view.
:::

Once a widget is published, it will be visible in the custom widget selection modal in the [Page Builder.](/es/platform/channels/pages.html)

:::tip Tip
To learn more about the publication flow, review the [Versioning.] section (/es/platform/core/key-concepts.html #versionado)
:::


In the work area you can see:

- **Code Tabs**: A JavaScript, CSS and HTML tab is available to build widgets.
- **File Manager**: Clicking lifts the file management modal, where you can filter and search the files you uploaded in the [File Manager](/es/platform/content/asset-manager.html) and copy its URL to use them in the widget. You can also upload new files from this modal.
- **Keyboard Shortcuts: Displays a small information window with some useful keyboard shortcuts.
- **Snippets**: Displays a list of snippets available from the [Template Builder](/es/platform/channels/templates.html #snippets) and copy their code for reference in the widget.
- **Changes**: If changes have been saved and not published, it will display this list of all the times saved each of the files (JS, CSS and HTML). Clicking on a sub-version changes the content of the tab to the content of the sub-version that was clicked.

:::tip Tip
In order not to lose the changes you currently have, it must be saved before jumping between sub-versions, so that you can always return to the latest version saved in the changelist.
:::

:::tip Tip
When the widget is published, no changes are available. This is because each version parts unchanged from the productive version. If you restore the widget to a previous version, so will sub-versions, so can access all instances where changes were saved in that version.
:::

In the three tabs of the widget you can make use of Liquid. For more information, see [the documentation associated with Liquid.](/es/platform/channels/liquid-markup.html)

In the properties column you can see: 

- **Name**: Allows you to change the name of the widget
- **Tags**: Add tags to a widget. The tags are for administrative use and are used to search and filter widgets so you can find them quickly.
- **Pages using this widget**: You will see a list of pages that are using this widget. While viewing pages in this listing, you will not be able to download or archive the widget.

:::warning Attention
If you delete a widget from a page and publish, you'll still see that page in this listing because the widget is still referenced in the backups of that page. From version 9.1.10 onwards, you can download any published widget, even if it's in use. Active references on pages will be inactive, so you won't see the widget on the site if you unpublished it. In addition, you can archive any widget that is not published, so if there are still references on some widget pages that you want to archive, they will be deleted when you archive the widget. 
:::

## Widget Variables

In the variables tab you can see the list of variables created in the widget, and their respective actions to:

* **Copy** the liquid code to use that variable.
* **Modify** the variable
* **Remove** the variable.

Next to the name of each variable you will see an “overwritten” indicator if the variable also exists at the account or site level in the [global variables](/es/platform/core/key-concepts.html #variables -global).

By modifying a variable, you can decide which name and default value that variable will take in the widget. In addition, you can decide whether you want to make a list of values available so that when you instantiate the widget on a page, you can choose between these different values. 

When you use the list of possible values, you must leave each value in a new line, and leave a `*` before the value you want to be taken as the default value.

When you instantiate the widget on a page, you'll see that now all variables that are being used (whether account, site or widget) will be listed as “disabled” with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

:::warning Attention
Instantiating the widget on a page will list all the variables that that widget is using, so if you don't see any of the variables that are defined in the widget, the variable is most likely not being used in the widget code.
:::

## Synchronous load

:::warning Attention
This is an experimental functionality and may be subject to change.
:::

You can decide whether you want to load your widgets synchronously, that is, that your widget's HTML, CSS, and JavaScript code will load along with the rest of the page from the server, or load asynchronously, so that all the static content of the page will be loaded and once the main document is loaded, the content of your widget will be loaded using JavaScript. By default, all widgets are loaded asynchronously.

To change the way each widget loads, you must go to the edit view of the page containing the widget, select the widget, and check or uncheck the “Synchronous load” option.

:::warning Attention
Keep in mind that using very heavy widgets synchronously can cause your page's performance to be diminished, so you should carefully decide which widgets will load synchronously and which asynchronously
:::

## Modyo CLI

The Modyo Command Line Interface (CLI) is a command-line tool based on two principles of acceleration and integration, and these principles have a get and push command respectively.

### Introduction

First, you need to install the Modyo CLI globally on your local machine to have the `modyo-cli` command available, this will allow you to initialize a project with some front-end architectural decisions already taken, or use to initialize a widget from catalog if you have access.

To install modyo-cli globally, you must use one of these options

```bash
$ npm i -g @modyo /cli #via npm
$ yarn global add @modyo /cli #via yarn
```

> This command will make the modyo-cli command available in the terminal session globally

The available commands are get, push, and help

- [`modyo-cli (-v|—version|version) `](#modyo -cli-version)
- [`modyo-cli help [COMMAND] `](#modyo -cli-help-command)
- [`modyo-cli get NAME [DIRECTORY] `](#modyo -cli-get-name-directory)
- [modyo-cli push name](#modyo -cli-push-name)

### modyo-cli (-v|—version|version) `
Print the `modyo-cli` version

```bash
$modyo-cli (-v|—version|version)
modyo-cli/3.0.6 darwin-x64 node-v12.13.1
```

### modyo-cli help [COMMAND] `

```bash
USAGE
 $modyo-cli help [COMMAND]

ARGUMENTS
 get Pull a widget from our catalog into a new directory
 help Display help for modyo-cli
 push push widget to Modyo platform
```

### Get a template for a project

The Modyo CLI is designed to work based on a micro-front-end architecture and will speed up the initialization process of a widget, with modyo decisions.

### `modyo-cli get NAME [DIRECTORY] `

Generally, the `get `command is used to get a widget template.
If you have a token provided by Modyo, you can use the same command to extract any of our premium widgets from our Widget Library:

```bash
USAGE
 $modyo-cli get NAME [DIRECTORY]

ARGUMENTS
 NAME The name of the widget
 DIRECTORY Name of directory to init

OPTIONS
 -f, —force Override folder if exist
 -h, —help Output usage information
 -x, —no-install Don't install packages

EXAMPLE
 $modyo-cli get name [directory]
```

>There are some public widget templates that can be accessed through this command

```bash
 EXAMPLES
 $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>From this command and thereafter, you can continue to use the widget like any other vue-cli widget.

### Modyo Cli Push Name`

The command `push` is responsible for the principle of integration, used to send the widget to the selected site on the modyo platform.

It will use an argument called name to load the widget into the platform and some indicators required as a site_base id token or host to identify the® Modyo platform that hosts the widget and have an additional indicator to prevent manual process flow of widget publication.

```bash
USAGE
 $ modyo-cli push NAME

ARGUMENTS
 NAME The name of the widget

OPTIONS
 -b, —build-command=build-command [default: build] Build command in package.json
 -d, —build-directory=build-directory [default: dist] Build directory path
 -h, —help Output usage information
 -i, —site-id=site-id Id of the site where the widget will be push
 -n, —site-host=site-host host of the site where the widget will be push
 -p, —publish force widget publication
 -t, —token=token (required) Modyo Api token
 -u, —account-url=account-url=account-url (required) URL of your® Modyo account ex (” https://account.modyo.com “)
 -v, —version=8|9 [default: 9] Version of Modyo platform

EXAMPLE
 $ modyo-cli push <NAME> 
```

>Many of the options can be defined as environment variables or within a.env file that is recommended to prevent publishing to the github registry because it may contain sensitive information

```bash
modyo_build_directory=BuildDirectoryPath
modyo_version=version
modyo_token=Token
modyo_account_url=account-url
modyo_site_id=siteID
modyo_site_host=SiteHost
modyo_build_command=BuildCommand
modyo_regex_exclude=RegExtoExcludeFiles
```
