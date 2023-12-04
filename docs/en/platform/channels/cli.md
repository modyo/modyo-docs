---
search: true
---

# Modyo Command Line Interface

The Modyo Command Line Interface (CLI) is a command-line tool based on two principles of acceleration and integration, these principles have a get and push command respectively.

## Installation

First, you need to install the Modyo CLI globally on your local machine to have the `modyo-cli` command available, this will allow you to initialize a project with some predefined front-end architectural decisions using our base template, or initialize from one of our predefined experiences available in the dynamic framework catalog.

To install modyo-cli globally for use from a terminal, you can use one of these options:

```sh
$ npm i -g @modyo /cli #via npm
$ yarn global add @modyo /cli #via yarn
```
or you can run it without installation using npx

```sh
$ npx @modyo /cli #via npx
$ npx @modyo /cli @version #via npx - pointing to a specific version
```
You can verify that the installation was successful and view the installed version of the CLI by running:

```sh
$ modyo-cli version
@modyo /cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
In some cases, it may be necessary to reload the terminal profile or start a new session to make the `modyo-cli` command available
:::


Modyo offers the ability to configure an autocompletion of CLI commands. You can access the instructions for its configuration by:

```sh
$ modyo-cli autocomplete zsh
# or
$ modyo-cli autocomplete bash
```

## Initializing a new project

The fastest and easiest way to start creating our first micro-frontend is by using our framework's react-based template using the `get` CLI command

```sh
$ modyo-cli get dynamic-react-base-template my-project-name 
```
which will initialize a functional project with everything we need to start a new development.

We also have a set of financial experience templates available, which allow us to accelerate and further accelerate the development of solutions in the field of digital banking and the financial industry. Experiences and how to obtain their templates can be found in the [Experiences section](https://docs.modyo.com/es/dynamic/experiences/retail/dashboard.html) of the [dynamic framework](https://docs.modyo.com/es/dynamic/#dynamic-framework) documentation.

:::tip Tip
Each template obtained from the dynamic framework has a README file with a small documentation that indicates its requirements and how to use it.
:::

As an organization, they can also create their custom initialization templates with their own standards. To obtain them you can do so using the `organization` option

```sh
$ modyo-cli get --organization=MyOrganization my-custom-template-repo my-project-name
```
From this point, there is already a functional project, which can be visualized, obtaining its dependencies and running the integrated server

```sh
$ npm install
$ npm run start
```
in a web browser you can visit the url [`http://localhost:8081/`](http://localhost:8081/) to see the newly initialized project in action.

## Initial Setup

The next step is to configure our project to make it easier to load the micro-frontend on the Modyo platform and to be able to include it in the pages that are built on it. Although everything can be indicated as parameters in the `push` call, there is a `.env` file in which you can define a set of environment variables to specify all the attributes such as the account's url, the site where it will be hosted and the access token, among others.
for this configuration we need some previous actions

### Obtaining a Modyo access token

The first thing we must obtain is access to Modyo, for this we must [create a user](https://docs.modyo.com/es/platform/core/roles.html#crear-usuario) who at least has the [role](https://docs.modyo.com/es/platform/core/roles.html#roles) of developer-cli in the sites or stages where we will deploy our micro-frontend, then [configure an access token] (https://docs.modyo.com/es/platform/core/api.html#autenticacion) for this user which we will use to obtain the necessary information for the configuration and to trigger the deployments to the platform.

### Identification of the site or stage
Then we must have the information of the site or stage in which the micro-frontend will be deployed and obtain some essential data such as the URL of the account, the host or id of the site or the id of some stage of the site. For this we can do this using the modyo administrative API using the access token obtained previously and attach it as an authorization header of the Bearer type as follows:

```sh
$ curl https://my-org.modyo.cloud/api/admin/sites\?only\[\]\=id\&only\[\]\=host\&only\[\]\=stages -H 'Authorization: Bearer gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8'
```
which will output the following list:
```sh
{
  "sites": [
    {
      "id": 1,
      "host": "my-Site",
      "stages": []
    },
    {
      "id": 2,
      "host": "portal",
      "stages": [
        {
          "id": 3,
          "uuid": "7a5d4b2d-de98-4c7f-8f0d-2c08599a218c",
          "name": "Portal",
          "host": "portal",
          "stage_name": "main",
          "created_at": "2019-03-15T11:02:07.000-03:00",
          "original_stage": "",
          "base_stage": true
        },
        {
          "id": 4,
          "uuid": "951b258b-5c86-4e7b-a21a-8e605e9cf0de",
          "name": "Portal Certification",
          "host": "cert-portal",
          "stage_name": "Cert",
          "created_at": "2022-08-10T18:03:19.000-04:00",
          "original_stage": "main",
          "base_stage": false
        }
      ]
    }
  ]
}

```

the list shows the sites with their respective stages to which the user has access. From this list we can obtain the id and the host that will be required in the configuration for deployment.

### .env file
Now with the information about the site to which we will deploy, we must configure our `.env` file, as a basis we can use renaming the `.env.example` file that is included in the base template, which has the necessary variables predefined and a brief description of each of them.
```sh
# The url base of the organization in Modyo
MODYO_ACCOUNT_URL=https://my-org.modyo.cloud/
# Where you will deploy your micro frontend, you can use either the host or the ID but not both.
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=1
# The token authorizing the deployment, taken from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# The major version of the Modyo platform where the deployment will take place (8 or 9)
MODYO_VERSION=9
# The name of the directory that contains the bundle of the micro frontend
MODYO_BUILD_DIRECTORY=build
# The name that will identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# This directive is necessary to safely remove some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```
* `MODYO_ACCOUNT_URL`: This is the URL of the domain of our modyo deployment.
* `MODYO_SITE_HOST`: It's the host of the site where we want to deploy our micro-frontend, it's not necessary if the site id is specified.
* `MODYO_SITE_ID`: This is the id of the site where we want to deploy our micro-frontend. 
* `MODYO_TOKEN`: It is the user's access token which will be used for micro-frontend deployments
* `MODYO_VERSION`: This is the modyo version, for legacy versions it's 8 and the current one is 9
* `MODYO_BUILD_DIRECTORY`: We indicate the name of the folder that produces the build depending on the framework used, for example dist or build
* `MODYO_WIDGET_NAME`: is the name that the widget will have after it is deployed on the platform
* `MODYO_DISABLE_LIQUID_REGEX`: Define a regular expression to select files that need to disable the use of liquid, for example template files where the definition or use of variables is likely to collide with the use in liquid

## Deploy
Once we have everything configured and ready to take our micro-frontend to Modyo we must build our widget:

```sh
$ npm run build
```
This command will do everything necessary to make the micro-frontend ready for production, cleaning and minifying the final files. To send to Modyo, we use the `push` command, which will use our settings to select the site or stage and check if the micro-frontend previously exists in Modyo, as the case may be, it will create or update it on the platform.

```sh
$ modyo-cli push
```

Using the push command, we can trigger the automatic publication of the micro-fronent on the platform, this is done with the parameter `-p`

```sh
$ modyo-cli push -p
```

:::tip Note
The user who owns the token must have a reviewer or admin role on the site where we are deploying our micro-frontends so that the publication can be carried out correctly.
:::

## Next steps
When a widget is deployed and published on the Modyo platform, it is available to be used on the pages of the site to which it belongs, if [variables](http://localhost:8080/es/platform/core/key-concepts.html#global-variables) its values can be specified at different levels to be set globally or individually to each instance of the micro-frontend, for more information on what you can do on Modyo sites, consult the [Channels documentation](https://docs.modyo.com/en/platform/channels/#frontmatter-title) specifically the [Widgets Page](https://docs.modyo.com/en/platform/channels/pages.html#widget-page) section and [widgets](http://localhost:8080/es/platform/channels/widgets.html)

## Quick guide

The available CLI commands are:

- [modyo-cli (-v|--version|version)](#modyo-cli-version)
- [modyo-cli help [COMMAND]](#modyo-cli-help-command)
- [modyo-cli autocomplete [SHELL]](#modyo-cli-autocomplete-shell)
- [modyo-cli get NAME [DIRECTORY]](#modyo-cli-get-name-directory)
- [modyo-cli push NAME](#modyo-cli-push-name)

Below we show the help for each of the available commands and the description of each of their options.

### `modyo-cli (-v|--version|version)`
Print the `modyo-cli` version.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

### `modyo-cli help`
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

### `modyo-cli help autocomplete`

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

### `modyo-cli help get`

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

### `modyo-cli help push`

Integrate a widget written in Vue to the selected Site in Modyo Platform.

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
