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
- **In review**: This status means [team review](/platform/core/key-concepts.html) is enabled and this widget is in review.
- **Approved**: This status means [team review](/platform/core/key-concepts.html) is enabled and a widget passed the review process. You can now publish this widget.

::: tip Tip
You may notice that some widgets with **Pending changes** and **In review** statuses have a small green mark. This green mark indicates that there is an active, published version of this widget available.
:::

Here are the available actions on the right side of the top bar:
**Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>: Opens a preview of the widget in a new tab.

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/></svg>: Clicking this icon opens the [differences view](/platform/channels/sites.html#review-and-joint-publication) in which you can see the differences between multiple versions of a widget.

By default, you see the differences between the published version and the editable version you are currently working on, but you can use the selectors to compare older backed up versions as well.

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
- **Publish**: Once reviewers approve the widget, you can go to the [publish view](/platform/channels/sites.html#review-and-joint-publication) to review and publish changes across the site.

**Other primary actions** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>:

- **Reject**: Returns the widget status to the "Pending changes", notifying reviewers that the changes were rejected.
- **Force Publish**: Admin team members have the option to forcibly publish widgets, circumventing the established reviewal process.
- **Unpublish**: If the widget is published, you can take it out of production using this option.

::: tip Tip
Only unpublished widgets can be archived.
:::

::: tip Tip
Archived widgets do not appear in the main widget list or in the Custom widget selection in Page Builder. You can restore an archived widget by editing it and using the restore option in the upper right corner of the editing view.
:::

Once a widget is published, it is available as a custom widget in the [page builder.](/platform/channels/pages.html)

::: tip Tip
To learn more about publication lifecycles in Modyo, review the [Versioning](/platform/core/key-concepts.html#versioning) section.
:::


In the main **work area** you can see the following:

- **Code tabs**: The Widget Builder has a JavaScript, CSS and HTML tab at your disposal to build your widgets.
- **Asset manager**: Opens a modal that lists all account files and provides filters and searching. Clicking the image preview or file name opens an editor where you can resize/crop the image, and change attributes such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste, and you can select the "Upload files" tab to upload files. You can learn more about By clicking on it, you will raise the file management modal, where you can filter and search the files you have uploaded in the [File manager](/platform/content/asset-manager.html) and copy its URL to use them in your widget. You can also upload new files from this modal.
- **Shortcuts helper**: A small pop-up that displays useful keyboard shortcuts for the Widget Builder.
- **Snippets**: Displays a list of custom snippets where you can copy their reference code and insert them in your widget.
- **Changes**: A list of every "Save" state of this widget since it was last published. Click on any of these save states to change the content of the widget to that particular save state. If doing so, all your current changes will be lost.

::: tip Tip
To avoid losing any changes you currently have, be sure to save before jumping between save states. This way, you can always return to the most recently saved version in the **Changes** list.
:::

::: tip Tip
If you publish a new version of your widget, the **Changes** list resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

You can make use of Liquid in the Javascript, CSS, and HTML tabs in the widget builder. For more information check [the associated Liquid documentation.](/platform/channels/liquid-markup.html)

The **Properties** on the right contains the following fields:

- **Name**: Use this field to update the name of your widget.
- **Tags**: Use this field to add tags to your widget. Tagging a widget makes it easier to search and filter. As your digital channels scale in size and complexity, good tagging helps keep your channel management well organized.

:::warning Warning
If you delete a widget from a page and publish, you will still see that page in this listing since the widget is still referenced in the backups of that page. From version 9.1.10 onwards, you can unpublish any published widget, even if it is in use. Active references on pages will become inactive, so you will not see the widget on the site if you unpublished it. Also, you will be able to archive any unpublished widget, so if there are still references on some pages of the widget you want to archive, they will be removed when you archive the widget.
:::
## Widget variables

In the variables tab you can see the list of variables created in the widget, and their respective actions for:

* **Copy** the liquid code to use that variable.
* **Edit** the variable
* **Delete** the variable.

Next to the name of each variable you will see an "overwritten" indicator if the variable also exists at the account or site level in the [global variables](/platform/core/key-concepts.html#global-variables).

When modifying a variable, you can choose the name and default value that the variable will take in the widget. In addition, you can decide if you want to make a list of values available so that when you instantiate the widget on a page, you can choose from these different values.

When you use the list of possible values, you must leave each value on a new line, and leave a `*` in front of the value you want to be taken as the default.

When you instantiate the widget on a page, you will see that now all variables being used (whether account, site, or widget) will be listed as "disabled" with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.


:::warning Warning
Adding the widget on a page will list all the variables that that widget is using, so if you don't see any of the variables that are defined in the widget, chances are that the variable in the widget code is not being used.
:::

## Synchronous and asynchronous loading

:::warning Warning
This is an experimental feature and it may be subject to changes.
:::

You can choose to load your widgets synchronously, meaning that the HTML, CSS and JavaScript code of your widget will load along with the rest of the page from the server, or you can choose to load them asynchronously, so that all static content of the page will load and once the main document is loaded, the content of your widget will load via JavaScript. By default, all widgets load asynchronously.

To change the way each widget loads, go to the edit view of the page containing the widget, select the widget and check or uncheck the "Sync loading" option.

:::warning Warning
You must take into consideration that using very heavy widgets in a synchronous way can decrease the performance of your page, so you must decide carefully which widgets will be loaded in a synchronous way and which in an asynchronous way
:::

## Modyo CLI

The Modyo Command Line Interface (CLI) is a command line tool based in two principles acceleration and integration, and this principles has a command get and push respectively.

### Introduction

First, you need to install the Modyo CLI globally on your local machine to have the `modyo-cli` command available, this will allow you to initialize a project with some Front end architectural decisions already taken, or use to initialize a widget from the catalog if you have access.

To install the modyo-cli globally you must use one of these options

```bash
  $ npm i -g @modyo/cli #via npm
  $ yarn global add @modyo/cli #via yarn
```

> This command will make the command modyo-cli available on the terminal session globally

The available commands are get, push and help

- [`modyo-cli (-v|--version|version)`](#modyo-cli-version)
- [`modyo-cli help [COMMAND]`](#modyo-cli-help-command)
- [`modyo-cli get NAME [DIRECTORY]`](#modyo-cli-get-name-directory)
- [`modyo-cli push NAME`](#modyo-cli-push-name)

### `modyo-cli (-v|--version|version)`

Print the `modyo-cli` version

```bash
  $ modyo-cli (-v|--version|version)
  modyo-cli/3.0.6 darwin-x64 node-v12.13.1
```

### `modyo-cli help [COMMAND]`

```shell
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  get   Pull a widget from our catalog into a new directory
  help  Display help for modyo-cli
  push  Push widget to Modyo platform
```

### Get a template for a project

The Modyo CLI is designed to work based on micro front-end architecture, and will accelerate the process of initialization of a widget, with modyo decisions.

### `modyo-cli get NAME [DIRECTORY]`

In general, the `get` command is used to obtain a boilerplate widget.
If you have a token provided by Modyo, the same command can be used to pull any of our premium widgets from our Widget Library.:

```bash
USAGE
  $ modyo-cli get NAME [DIRECTORY]

ARGUMENTS
  NAME       The name of the widget
  DIRECTORY  Name of directory to init

OPTIONS
  -f, --force       Override folder if exist
  -h, --help        Output usage information
  -x, --no-install  Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

>Hay algunas plantillas de widgets públicos a los que se puede acceder a través de este comando
>El CLI de Modyo está diseñado para funcionar en base a una arquitectura de micro front-end y acelerará el proceso de inicialización de un widget, con decisiones modyo.

```bash
  EXAMPLE
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>From this command and on you can continue using the widget like any other vue-cli widget.

### `modyo-cli push NAME`

The `push` command is the one in charge of the integration principle, used to send the widget to the selected site in the modyo platform.

It will use an argument called name to upload the widget to the platform and some required flags like token site_base id or host to can identify the ®Modyo platform which host the widget and have an additional flag to avoid the manual process flow of widget publication.

```bash
USAGE
  $ modyo-cli push NAME

ARGUMENTS
  NAME  The name of the widget

OPTIONS
  -b, --build-command=build-command      [default: build] Build command in package.json
  -d, --build-directory=build-directory  [default: dist] Build directory path
  -h, --help                             Output usage information
  -i, --site-id=site-id                  Id of the site where the widget will be push
  -n, --site-host=site-host              Host of the site where the widget will be push
  -p, --publish                          Force widget publication
  -t, --token=token                      (required) Modyo Api token
  -u, --account-url=account-url          (required) URL of your ®Modyo account ex("https://account.modyo.com")
  -v, --version=8|9                      [default: 9] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>
```

>Many of the options can be defined as environment variables or inside of an .env file that is recommended to avoid the publication to the github registry because can contain some delicate information

```bash
MODYO_BUILD_DIRECTORY=buildDirectoryPath
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_ACCOUNT_URL=account-url
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
MODYO_WIDGET_NAME=name of widget
```
