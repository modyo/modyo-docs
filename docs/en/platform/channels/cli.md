---
search: true
---

# Modyo CLI

The Modyo Command Line Interface (CLI) is a command-line tool based on two principles of acceleration and integration, these principles have a get and push command respectively.

### Introduction

First, you need to install the Modyo CLI globally on your local machine to have the `modyo-cli` command available, this will allow you to initialize a project with some predefined front-end architectural decisions, or use to initialize a widget from catalog if you have access.

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
  autocomplete Display autocomplete installation instructions 
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

:::tip Tip
Options can be set in environment variables or within a _.env_ file in the project root directory. The file method is recommended to prevent logging sensitive information.
:::

The following list are the environment variables you can configure:

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

:::tip Tip
Options can be set in environment variables or within a _.env_ file. The option of a file is recommended because it avoids logging sensitive information
:::

### `modyo-cli autocomplete [SHELL]`

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
  -f, --force        Override folder if exist
  -h, --help         Output usage information
  -o, --organization [default: modyo] Github organization
  -x, --no-install   Don't install packages

EXAMPLE
  $ modyo-cli get name [directory]
```

>There are some public widget names that can be accessed via this command

```bash
  EJEMPLOS
    $ modyo-cli get modyo-widgets-template-vue [DIRECTORY] #to initialize a widget
```

>From this command and on you can continue using the widget like any other vue-cli widget.

### `modyo-cli push NAME`

The `push` command is responsible for integrating the widget into the selected site on the Modyo platform.

You'll use a name argument to load the widget into the platform and some required indicators such as `site_base id` or `host` token to identify the Modyo platform that hosts the widget and have an additional indicator to avoid the manual process flow of publishing the widget.

```bash
USAGE
  $ modyo-cli push NAME

ARGUMENTS
  NAME  The name of the widget

OPTIONS
  -b, --build-command=build-command      [default: build] Build command in package.json
  -d, --build-directory=build-directory  [default: dist] Build directory path
  -h, --help                             Output usage information
  -i, --site-id=site-id                  Id of the site where the widget will be pushed
  -l, --disable-liquid                   Disable Liquid
  -n, --site-host=site-host              Host of the site where the widget will be pushed
  -p, --publish                          Force widget publication
  -t, --token=token                      (required) Modyo Api token
  -u, --account-url=account-url          (required) URL of your Modyo account ex("https://account.modyo.com")
  -v, --version=8|9                      [default: 9] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>
```