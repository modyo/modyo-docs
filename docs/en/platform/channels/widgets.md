---
search: true
---

# Widgets

Widgets allow you to create encapsulated _micro frontends_ for your sites and applications.

When you enter the **Widgets** section of any site or channel, you see a list of all the widgets in that channel. In the top bar, you can filter the list of widgets by status, author or tags, or search for any widget by either its name or tags.

In the upper right corner you can select the **+ New** primary button to create a new widget. Give the widget a name, then click Create to begin building your widget.

In the widget editing view, you can see three areas: the top action bar, the main work area and the properties column on the right.

![Widget Builder](/assets/img/platform/widget-builder.png)

Along the **top bar**, on the left, you can see the widget name and current status:

- **Draft**: This status means a widget is new or is unpublished.
- **Published**: This status means a widget is published and the version in the editor contains no unpublished changes.
- **Pending changes**: This status means there is a published version of a widget, and the editor contains unpublished, pending changes.
- **In review**: This status means [team review](/en/platform/core/key-concepts.html) is enabled and this widget is in review.
- **Approved**: This status means [team review](/en/platform/core/key-concepts.html) is enabled and a widget passed the review process. You can now publish this widget.

On the right, these are the different actions: **Preview** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Open the preview of the editable version of the widget in a new tab.

:::warning
Attention You can preview widgets as a user without session or user with Modyo session. Para esto, es recomendable iniciar o cerrar la sesión de Modyo en el sitio antes de entrar al modo vista previa, dado que si se inicia o cierra sesión dentro del modo vista previa, podrías encontrarte con errores de seguridad del tipo _x-frame-options_ o _mixed-content_, dependiendo de la configuración de dominios personalizados y SSL del sitio
:::

**Differences** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M19 3h-5v2h5v13l-5-6v9h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9 15H5l5-6m0-9H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h5v2h2V1h-2v2z" fill="#626262"/> </svg>: Clicking this icon opens the [differences view](/en/platform/channels/sites.html#review-and-joint-publication) in which you can see the differences between multiple versions of a widget.

By default, you see the differences between the published version and the editable version you are currently working on, but you can use the selectors to compare older backed up versions as well. Si este ícono no aparece, entonces no hay ninguna versión publicada de este widget.

**Activity** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.18-.44.29-.7.29H12m1-6v3.08L16.08 17H21V7H7v10h6M3 15H1V3a2 2 0 0 1 2-2h16v2H3v12m6-6h10v2H9V9m0 4h8v2H9v-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Displays a sidebar with activity history and comments.

**Other options** <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"> <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2z" fill="#626262"/> <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> </svg>: Archive and create a copy of the current widget.

**Primary actions:**

- **Save**: Saves current changes.
- **Send to review**: Changes the widget status to "In review".
- **Publish**: Once reviewers approve the widget, you can go to the [publish view](/en/platform/channels/sites.html#review-and-joint-publication) to review and publish changes across the site.

**Other primary actions**<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42z" fill="#626262"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>

- **Unpublish**: If the widget is published, you can take it out of production using this option.
- **Force Publish**: Admin team members have the option to forcibly publish widgets, circumventing the established reviewal process.

::: tip
Tip Only unpublished widgets can be archived.
:::

::: tip
Tip Archived widgets do not appear in the main widget list or in the Custom widget selection in Page Builder. You can restore an archived widget by editing it and using the **restore** option in the upper right corner of the editing view.
:::

Once a widget is published, it is available as a custom widget in the [page builder.](/en/platform/channels/pages.html)

:::tip
Tip Para aprender más sobre el flujo de publicación, revise la sección de [Versionado.](/es/platform/core/key-concepts.html#versionado)
:::


In the main work area you can see the following:

- **Code tabs**: The Widget Builder has a JavaScript, CSS and HTML tab at your disposal to build your widgets.
- **Asset manager**: Opens a modal that lists all account files and provides filters and searching. Clicking the image preview or file name opens an editor where you can resize/crop the image, and change attributes such as the title or alternate text. Selecting the copy icon provides you with a URL you can paste, and you can select the "Upload files" tab to upload files. You can also upload new files from this modal.
- **Shortcuts helper**: A small pop-up that displays useful keyboard shortcuts for the Widget Builder.
- **Snippets**: Displays a list of custom snippets where you can copy their reference code and insert them in your widget.
- **Changes**: A list of every "Save" state of this widget since it was last published. Al hacer click en una sub-versión, se cambia el contenido de la pestaña por el contenido de la sub-versión que se hizo click.

:::warning
Warning This is an experimental feature and it may be subject to changes.
:::

::: tip
Tip If you publish a new version of your widget, the **Changes** list resets and erases all save states. This is because the new editable version now matches the version you just published. Saving new changes adds new save states until the next time you publish.
:::

You can make use of Liquid in the Javascript, CSS, and HTML tabs in the widget builder. For more information check [the associated Liquid documentation.](/en/platform/channels/liquid-markup.html)

The Properties on the right contains the following fields:

- **Name**: Use this field to update the name of your widget.
- **Tags**: Use this field to add tags to your widget. Tagging a widget makes it easier to search and filter.
- **Pages using this widget**: You will see a list of pages that are using this widget. While viewing pages in this listing, you will not be able to download or archive the widget.

:::warning
Warning If you delete a widget from a page and publish, you will still see that page in this listing since the widget is still referenced in the backups of that page. From version 9.1.10 onwards, you can unpublish any published widget, even if it is in use. Active references on pages will become inactive, so you will not see the widget on the site if you unpublished it. Also, you will be able to archive any unpublished widget, so if there are still references on some pages of the widget you want to archive, they will be removed when you archive the widget.
:::

## Widget Variables

In the variables tab you can see the list of variables created in the widget, and their respective actions for:

* **Copy** the liquid code to use that variable.
* **Edit** the variable
* **Delete** the variable.

Next to the name of each variable you will see an "overwritten" indicator if the variable also exists at the account or site level in the [global variables](/en/platform/core/key-concepts.html#global-variables).

When modifying a variable, you can choose the name and default value that the variable will take in the widget. In addition, you can decide if you want to make a list of values available so that when you instantiate the widget on a page, you can choose from these different values.

When you use the list of possible values, you must leave each value on a new line, and leave a `*` in front of the value you want to be taken as the default.

When you instantiate the widget on a page, you will see that now all variables being used (whether account, site, or widget) will be listed as "disabled" with their default value. If you want to overwrite the value of a particular variable for that instance of the widget on that page, you must select the checkbox to the left of the variable and change the value it takes.

:::warning
Warning Adding the widget on a page will list all the variables that that widget is using, so if you don't see any of the variables that are defined in the widget, chances are that the variable in the widget code is not being used.
:::

## Synchronous and asynchronous loading

::: tip
Tip To learn more about publication lifecycles in Modyo, review the [Versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

You can choose to load your widgets synchronously, meaning that the HTML, CSS and JavaScript code of your widget will load along with the rest of the page from the server, or you can choose to load them asynchronously, so that all static content of the page will load and once the main document is loaded, the content of your widget will load via JavaScript. By default, all widgets load asynchronously.

To change the way each widget loads, go to the edit view of the page containing the widget, select the widget and check or uncheck the "Sync loading" option.

:::warning
Warning You must take into consideration that using very heavy widgets in a synchronous way can decrease the performance of your page, so you must decide carefully which widgets will be loaded in a synchronous way and which in an asynchronous way
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

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  get   Pull a widget from our catalog into a new directory
  help  Display help for modyo-cli
  push  Push widget to Modyo platform
```

### Get a template for a project

La CLI de Modyo está diseñada para funcionar en base a una arquitectura de micro front-end y acelerará el proceso de inicialización de un widget.

### `modyo-cli get NAME [DIRECTORY]`

In general, the `get` command is used to obtain a boilerplate widget. If you have a token provided by Modyo, the same command can be used to pull any of our premium widgets from our Widget Library.:

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
> There are some public widget names that can be accessed via this command

```bash
  EJEMPLOS
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```
> From this command and on you can continue using the widget like any other vue-cli widget.

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
> Many of the options can be defined as environment variables or inside of an .env file that is recommended to avoid the publication to the github registry because can contain some delicate information

```bash
MODYO_BUILD_DIRECTORY=buildDirectoryPath
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_ACCOUNT_URL=account-url
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
```
