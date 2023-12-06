---
search: true
---

# Modyo Command Line Interface

The Modyo Command Line Interface (CLI) is a tool based on two fundamental principles: acceleration and integration. These principles are implemented through the _get_ and _push_ commands, respectively.

The main benefits of working with the Modyo CLI are:
- **Work locally:** Allowing you to create widgets of any size or complexity.
- **Store widgets in local repositories:** Making it easier to manage widgets and collaborate with other developers.
- **Create a widget once and reuse it on multiple sites**

## Installation

To use the Modyo Command Line, you must first install it globally on your local machine. This will allow you to use the `modyo-cli` command, which allows you to initialize a project with some predefined front-end architectural decisions using the Modyo base template or with an experience from the [Dynamic Framework](en/dynamic/) catalog.


To use the Modyo CLI you can choose one of the following options:
- Install modyo-cli globally for use from the terminal


```sh
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

- Run it without installation using npx

```sh
$ npx @modyo/cli #via npx
$ npx @modyo/cli@version #via npx - señalando una versión en específico
```

To verify that the installation was successful and confirm the installed version of the CLI, run this command:

```sh
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
In some cases, it is necessary to reload the terminal profile or start a new session for the `modyo-cli` command to be available.
:::

Modyo offers the ability to configure the auto-completion of CLI commands. For instructions on how to set it up, run one of the following commands:

```sh
$ modyo-cli autocomplete zsh
# o
$ modyo-cli autocomplete bash
```

## Initializing a new project

The fastest and easiest way to create your first micro-frontend is to use the React base template of our framework using the `get` command.

```sh
$ modyo-cli get dynamic-react-base-template my-project-name
```
This initializes a functional project to begin a new development.

Modyo also has a set of financial experience templates that further accelerate the development of solutions in the field of digital banking and the financial industry. You can find information about these experiences and how to obtain their templates in the [Experiences](en/dynamic/experiences/retail/dashboard.html) section of the [Dynamic Framework](en/dynamic/ #dynamic -framework) documentation.

:::tip Tip
All [Dynamic Framework](en/dynamic/) templates have a README file with information about their requirements and use.
:::

An organization can also create its own templates to customize the initialization process. To get a customized template, use the `organization` option.

```sh
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
From this point on, you already have a functional project, and you can get its dependencies and run the integrated server.

```sh
$ cd my-project-name
$ npm install
$ npm run start
```
In a web browser, visit [`http://localhost:8081/`](http://localhost:8081/) to view the initialized project.

## Initial Setup

The next step is to configure your project to make it easier to load the microfrontend on Modyo platform and include it in the pages you build. You can specify everything as parameters in the `push` call, however, there is a `.env` file in which you can define a set of environment variables to specify all the attributes, such as the URL of the account, the site where it will be hosted and the access token, among others. For this configuration, you need to perform these actions beforehand:


1. **Get an access token to Modyo:** To obtain the token you need to have a user or [create one](en/platform/core/roles.html#create-user) that has at least the site developer-cli [role](en/platform/core/roles.html #roles) in the sites or stages where you will deploy your micro-frontend. Once you've created the user, you can [set up an access token](en/platform/core/api.html#autentication) for it. You will use this access token to obtain the necessary information to configure and activate deployments on the platform.

2. **Identify the site or stage:** Use the Modyo administrative API with the access token obtained previously, to obtain the information of the site or stage where the microfrontend will be deployed as well as the URL of the account, the host or ID of the site or the ID of any stage of the site. To do this, attach the Bearer type authorization header as follows:

```sh
$ curl https://my-org.modyo.cloud/api/admin/sites\?only\[\]\=id\&only\[\]\=host\&only\[\]\=stages -H 'Authorization: Bearer gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8'
```
The command returns a list with the information needed to configure your microfrontend in Modyo. It shows the sites, with their respective stages, to which the user has access. From this list you can get the id and the host you need to configure the deployment.

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



3. **Configure the .env file:** Once you have obtained the list of sites and stages where you can identify the ID and the host, configure the `.env` file with the corresponding information. You can use the example file provided, called `.env.example`, that is included in the base template, which includes the necessary variables predefined and a brief description of each of them.
```sh
# Base URL base of the organization in Modyo
MODYO_ACCOUNT_URL= https://my-org.modyo.cloud/
# Where you will deploy your micro frontend, you can use either the host or the ID but not both.
# modyo_site_host=my-site
MODYO_SITE_ID=1
# The token authorizing the deployment, taken from Modyo
modyo_token=GT0OGW43LSY4NV9CYTC_HH0I_SUNQ01Q-12PTFZow8
# The version of Modyo platform where the deployment will take place (8 or 9)
MODYO_VERSION=9
# The name of the directory that contains the micro frontend's bundle
modyo_build_directory=Build
# The name that will identify your Micro Frontend in Modyo
modyo_widget_name=my-project
# This directive is necessary to safely remove some libraries from the Liquid parser
modyo_disable_liquid_regex=RAW
```
* `MODYO_ACCOUNT_URL` The URL of the domain of our Modyo deployment.
* `MODYO_SITE_HOST` The host of the site where you want to deploy the micro-frontend. It is not necessary if the site id is specified.
* `MODYO_SITE_ID` The id of the site where you want to deploy the micro-frontend.
* `MODYO_TOKEN` The user access token to be used for micro-frontend deployments.
* `MODYO_VERSION` The version of Modyo. For older versions it is 8 and the current one is 9.
* `MODYO_BUILD_DIRECTORY` The name of the folder containing the build result, such as “dist” or “build” depending on the framework used.
* `MODYO_WIDGET_NAME` The name the widget will have after being deployed on the platform.
* `MODYO_DISABLE_LIQUID_REGEX` Defines a regular expression for selecting files that need to disable the use of Liquid, for example, template files where the definition or use of variables is likely to collide with their use in Liquid.

## Deploy
Once your micro-frontend is configured and ready, you can build your widget.

This command will perform the necessary actions to prepare your microfrontend for production, cleaning and minifying the final files.

```sh
$ npm run build
```
To send it to Modyo, use the push command. This command uses your settings to select the site or stage and check if the microfrontend already exists in Modyo. Depending on the case, you will create or update it on the platform.


```sh
$ modyo-cli push
```

Activate the automatic publication of the microfrontend on the platform using the `-p` parameter.

```sh
$ modyo-cli push -p
```

:: :warning Attention
The user who owns the token must have a [site reviewer or admin] role (es/platform/core/roles.html #roles) on the site where you are deploying the micro-frontend so that the publication can be carried out correctly.
:::

## Next steps
Once a widget is deployed and published in Modyo, it is available for use on the pages of the site to which it belongs.

If you have defined [variables] (es/platform/core/key-concepts.html #variables -globals) their values can be specified globally or privately to each instance of the microfrontend. For more information on functionalities on Modyo sites, see the [Channels documentation] (es/platform/channels/ #frontmatter -title) specifically the [widget page] (es/platform/channels/pages.html #widget -page) and [widgets] (es/platform/channels/widgets.html) section

## Quick guide
The commands available in the Modyo CLI and the description of each of its options are:

- **`modyo-cli (-v|--version|version) `**
Print the `modyo-cli` version.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

- **`modyo-cli help`**
Show contextual help for the specified command.

```bash
USAGE
 $ modyo-cli help [COMMAND]

ARGUMENTS
 Autocomplete Display Autocomplete Installation Instructions
 Get Pull a widget from our catalog into a new directory
 Help Display help for modyo-cli
 Push Push widget to Modyo platform
```

- **`modyo-cli help autocomplete`**

Show autocomplete instructions, if the option is configured.

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

- **`modyo-cli help get`**

The `get` command is used to get a widget template from our [experience catalog] (es/dynamic/experiences/) using a token provided by Modyo.

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

- **`modyo-cli help push`**

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