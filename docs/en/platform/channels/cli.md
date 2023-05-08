---
search: true
---

# Modyo CLI

The Modyo Command Line Interface (CLI) is a command-line tool based on two principles of acceleration and integration, these principles have a get and push command respectively.

## Installation

First, you need to install Modyo CLI globally on your local machine to have the `modyo-cli` command available, this will allow you to initialize a project with some predefined front-end files, or to initialize a widget from the catalog if you have access.

To install modyo-cli globally, you must use one of these options:

```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

> This command will make the command modyo-cli available on the terminal session globally

The available commands are:

- [modyo-cli (-v|--version|version)](#modyo-cli-version)
- [modyo-cli help [COMMAND]](#modyo-cli-help-command)
- [modyo-cli autocomplete [SHELL]](#modyo-cli-autocomplete-shell)
- [modyo-cli get NAME [DIRECTORY]](#modyo-cli-get-name-directory)
- [modyo-cli push NAME](#modyo-cli-push-name)

## Widget templates

In our widget catalog, we offer templates that contain the bare minimum for uploading a widget to Modyo Platform. The templates can be found in the following frameworks:

- [Vue](https://github.com/modyo/modyo-widgets-template-vue)
- [Angular](https://github.com/modyo/modyo-widgets-template-angular)
- [React](https://github.com/modyo/modyo-widgets-template-react)

You can clone these repositories, modify them to your needs, and use modyo-cli to push to the platform. For more information on how to send widgets to Modyo Platform, see [modyo-cli push NAME](#modyo-cli-push-name).

## `modyo-cli (-v|--version|version)`
Print the `modyo-cli` version.

```bash
$ modyo-cli (-v|--version|version)
modyo-cli/3.0.6 darwin-x64 node-v12.13.1
```

## `modyo-cli help [COMMAND]`
Shows contextual help depending on the command you type.

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  autocomplete Display autocomplete installation instructions 
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

The following list are the environment variables you can configure:

```bash
MODYO_ACCOUNT_URL=account-url
MODYO_VERSION=version
MODYO_TOKEN=token
MODYO_SITE_ID=siteId
MODYO_SITE_HOST=siteHost
MODYO_BUILD_COMMAND=buildCommand
MODYO_REGEX_EXCLUDE=regexToExcludeFiles
MODYO_BUILD_DIRECTORY=buildDirectoryPath
```

### Environment variables

To facilitate the process of uploading your widgets to the Modyo platform, you can make use of the `.env` environment variables file. Follow these steps to create your file:

1. Create a `.env` file at the root of your project.
2. Add the following information:

```
modyo_account_url=test.mimodyo.com
MODYO_VERSION=9
modyo_token=AK9CB2... a53s
modyo_site_host=MySite
MODYO_WIDGET_NAME=My NewWidget
Modyo_build_command=Build
Modyo_Build_Directory=dist
```

3. When you make use of modyo-cli within the root of your project, the file data will be added automatically.

:::tip Tip
We recommend using an environment variable file to make modyo-cli easier to use and avoid logging sensitive information.
:::

## `modyo-cli autocomplete [SHELL]`

Modyo offers the ability to autocomplete the commands of our CLI if this option is configured.

```bash
USAGE
  $ modyo-cli autocomplete [SHELL]

ARGUMENTS
  SHELL       shell type

OPTIONS
  -r, --refresh-cache   Refresh cache (ignores displaying instructions)

EXAMPLE
  $ modyo-cli autocomplete
  $ modyo-cli autocomplete bash
  $ modyo-cli autocomplete zsh
  $ modyo-cli autocomplete --refresh-cache
```

### Instructions for using MODYO-CLI CLI Autocomplete

1. Add autocomplete environment variable for your zsh profile and add it to source
```bash
$ printf "eval $(modyo-cli autocomplete:script zsh)" >> ~/.zshrc; source ~/.zshrc
```

:::tip Tip
After the command, you can run `$ compaudit -D` to verify that there are no permission conflicts.
:::

2. Test that it works correctly, e.g.:
```bash
$ modyo-cli <TAB>           #Complete command
$ modyo-cli command --<TAB> #Complete option
```

### Get a template for a project

The Modyo CLI is designed to work based on a micro frontend architecture, which will accelerate the widget creation process.

## `modyo-cli get NAME [DIRECTORY]`

The `get` command is used to obtain a widget template from our [widget catalog](/en/widgets/) using a token provided by Modyo.

```bash
USAGE
  $ modyo-cli get NAME [DIRECTORY]

ARGUMENTS
  NAME       The name of the widget
  DIRECTORY  Name of directory to init

OPTIONS
  -f, --force        Override folder if exist
  -h, --help         Output usage information
  -o, --organization [default: modyo] Github organization
  -x, --no-install   Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

>There are some public widget names that can be accessed via this command

```bash
  EXAMPLES
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>From this command and onward, you can continue to use the widget like any other widget in Vue.

## `modyo-cli push NAME`

Integrate a widget written in Vue to the selected Site in Modyo Platform.

You'll use a name argument to load the widget into the platform and some required indicators such as `site_base id` or `host` token to identify the Modyo Platform Site that hosts the widget and have an additional indicator to avoid the manual process flow of publishing the widget.

:::warning Warning
At the moment, Modyo CLI only offers support for widgets made and compiled with the tools included in Vue by default.
:::

```bash
USAGE
 $modyo-cli push NAME

ARGUMENTS
 NAME The name of the widget

OPTIONS
 -b, —build-command=build-command [default: build] Build command in package.json
 -d, —build-directory=build-directory [default: dist] Build directory path
 -h, —help Output usage information
 -i, —site-id=site-id Id of the site where the widget will be pushed
 -l, —disable-liquid Disable Liquid
 -n, —site-host=site-host Host of the site where the widget will be pushed
 -p, —publish Force widget publication
 -t, —token=token (required) Modyo API token
 -u, —account-url=account-url (required) URL of your Modyo account ex ("https://account.modyo.com")
 -v, —version=8|9 [default: 9] Version of Modyo platform

EXAMPLE
 $modyo-cli push <NAME> 

```

### Environment variables

To push to the platform, it is necessary to fill in the required options. For this, there are two options: write the command with options or use a `.env` file. They work the same way but are implemented differently.

#### Environment Variable File

In the widget root directory, create a `.env` file containing the following data:

```shell
MODYO_ACCOUNT_URL=https://test.myModyo.com   //URL of the account that owns the site
MODYO_VERSION=9   //The Modyo platform version
modyo_token=AX93... nm3   //The token to access the administrative API
modyo_site_host=MyHost   //The hostname, located within the platform, in the sites section
modyo_site_id=MyStage//(Optional) This variable is only used in the case of pushing to a stage. Only one variable MODYO_SITE_HOST or MODYO_SITE_ID is used. The ID is obtained using our /api/admin/sites API endpoint. 
modyo_widget_name=MyWidget   //The name of the widget
modyo_build_command=BUILD   //The command for package.json (default: build) 
modyo_build_directory=dist   //The path of the widget (default: dist) 
```

#### Option

In a terminal with modyo-cli installed, it is possible to push through the command line as follows:

```
modyo-cli push MyWidget -b build -d dist -n myHost -v 9 -u "https://test.miModyo.com" -t $TOKEN 
```

#### Push to Stage

By using our administration API, you can also push to a stage. Follow these steps to push to your stage from Modyo CLI.

1. Make a call to our administration API */api/admin/sites*, for example:

``curl -X GET https://test.modyo.com/api/admin/sites `` 

You will receive a JSON with all the information related to sites. Within this JSON, in the information about your site, there is a *stages* section where you will find the Id necessary to push to this stage, through Modyo CLI.

```json
"meta": [...],
"sites": [
    ...,
    "name": "miHost",
    "stages": [
        {
          "id": 1044,
          "uuid": "7a5d4b2d-de98-4c7f-8f0d-2c08599a218c",
          "name": "CLI DEMO",
          "host": "cli-demo",
          "stage_name": "main",
          "created_at": "2019-03-15T11:02:07.000-03:00",
          "original_stage": "",
          "base_stage": true
        },
        {
          "id": 2673,
          "uuid": "951b258b-5c86-4e7b-a21a-8e605e9cf0de",
          "name": "Test Stage CLI DEMO",
          "host": "test-cli-demo",
          "stage_name": "Test",
          "created_at": "2022-08-10T18:03:19.000-04:00",
          "original_stage": "main",
          "base_stage": false
        }
    ],
]
```

2. Open your `.env` environment variable file. The MODYO_SITE_HOST variable should be deleted since we will use the site ID. To push to a stage, you can only use MODYO_SITE_ID. Add the MODYO_SITE_ID as follows:

```shell
MODYO_ACCOUNT_URL= https://test.myModyo.com
MODYO_VERSION=9
modyo_token=AX93... nm3
modyo_widget_name=MyWidget
modyo_build_command=Build
modyo_build_directory=dist
MODYO_SITE_ID=2673
```

3. On your terminal, push to your stage using Modyo CLI:

``modyo-cli push MyWidget``

If you want to push to main, you have to modify the MODYO_SITE_ID variable for main or delete this variable and use MODYO_SITE_HOST instead.