---
search: true
---

# Modyo CLI

The Modyo Command Line Interface (CLI) is a tool based on two fundamental principles: acceleration and integration. These principles are implemented through the `get` and `push` commands, respectively.

 #### Benefits of the Modyo CLI

- **Local work: ** You can create widgets of any size or complexity from your local environment.
- **Store widgets in local repositories:** Making it easier to manage widgets and collaborate with other developers using version control systems.
- **Widget reuse: ** Allows you to create a widget once and reuse it on multiple sites and occasions.

## Installation

To use the Modyo Command Line, you must first install it globally on your local machine. This will enable the `modyo-cli` command, which allows you to initialize a project with some predefined front-end architectural decisions using the Modyo base template or with an experience from the [Dynamic Framework](https://dynamicframework.dev) catalog.

You have two options for using the Modyo CLI:

- Global installation using NPM or Yarn
```bash
$ npm i -g @modyo/cli #via npm
$ yarn global add @modyo/cli #via yarn
```

- Run it without installation using npx

```bash
$ npx @modyo/cli #using npx
$ npx @modyo/cli@latest #using npx - pointing to a particular version
```


To verify that the installation was successful and confirm the installed version of the CLI, run this command:

```bash
$ modyo-cli version
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

:::tip Tip
In some cases, it is necessary to reload the terminal profile or start a new session for the `modyo-cli` command to be available.
:::

Modyo offers the ability to configure the auto-completion of CLI commands. For instructions on how to set it up, run one of the following commands:

```bash
$ modyo-cli autocomplete zsh
# o
$ modyo-cli autocomplete bash
```

## Setting up the environment

The next step is to configure your project to make it easier to upload widgets to the Modyo platform and include them in the pages you build. Although you can specify everything as parameters in the push call, we recommend defining a set of environment variables in a `.env` file. This file will allow you to specify attributes such as the URL of the account, the site where it will be hosted and the access token, among others. 

#### Previous Actions

1. **Get a Modyo access token: ** To obtain the token you need to have a user or [create one](/en/platform/core/roles.html#create-user) who has at least the [role](/en/platform/core/roles.html#roles) of site developer-cli in the sites or stages where you will deploy your widget. Once you've created the user, you can [set up an access token](/en/platform/core/api.html#authentication). This token will be used to configure and activate deployments on the platform.

2. **Identify the application where you will publish: **
To get the ID of your application, go to the summary of your application where you will find the corresponding ID. We recommend using this value whenever possible. If you need to use the site host, you'll find it in the general configuration section of your application.

#### Configuring the .env file

 After obtaining your application information and generating the required tokens, configure the `.env` file with the corresponding data.

 You can use the `.env.example` example sample file included in the base template. This file contains the necessary variables predefined and a brief description of each of them.


```bash
# Base URL of your Modyo organization
MODYO_ACCOUNT_URL=https://advocate.modyo.cloud/
# Either the host or the ID where you will deploy your micro frontend (not both)
# MODYO_SITE_HOST=my-site
MODYO_SITE_ID=77
# Token for authorizing the deployment, obtained from Modyo
MODYO_TOKEN=gT0ogW43lSy4nV9cYtc_hH0i_sUNq01q-12ptFzoW8
# Major version of the Modyo platform where the deployment will take place (8, 9 or 10)
MODYO_VERSION=10
# Directory containing the micro frontend bundle
MODYO_BUILD_DIRECTORY=build
# Name to identify your Micro Frontend in Modyo
MODYO_WIDGET_NAME=my-project
# Directive necessary for safely removing some libraries from the liquid parser
MODYO_DISABLE_LIQUID_REGEX=raw
```

#### Description of Variables in the .env

* `MODYO_ACCOUNT_URL` URL of the domain where the deployment will be made to Modyo.
* `MODYO_SITE_HOST` Host of the site where you want to deploy the widget. It's not necessary if you specify the site ID.
* `MODYO_SITE_ID` ID of the site where the deployment will be made.
* `MODYO_TOKEN` User access token for deployments.
* `MODYO_VERSION` Version of the Modyo platform. For older versions it's 8 and the current one is 10.
* `MODYO_BUILD_DIRECTORY` Name of the folder containing the build result, such as “dist” or “build” depending on the framework used.
* `MODYO_WIDGET_NAME` The name that the widget will have after being deployed on the platform.
* `MODYO_DISABLE_LIQUID_REGEX` Defines a regular expression for selecting files that need to disable the use of Liquid, for example, template files where the definition or use of variables is likely to collide with their use in Liquid.

## Initializing a new project

The fastest and easiest way to create your first widget is to use the React base template of our framework using the `get` command.

```bash
$ modyo-cli get dynamic-react-base-template my-project-name
```
This initializes a functional project to begin a new development.

Modyo also has a set of financial experiences templates that accelerate the development of solutions in the digital banking and financial industry even further. You can find information about these experiences and how to obtain their templates in the [Experiences](https://dynamicframework.dev) section of the [Dynamic Framework](https://dynamicframework.dev) documentation.

:::tip Tip
All the [Dynamic Framework](https://dynamicframework.dev) templates have a README file with information about their requirements and usage.
:::

An organization can also create its own templates to customize the initialization process. To get a customized template, use the `organization` option.

```bash
$ modyo-cli get --organization=myOrganization my-custom-template-repo my-project-name
```
From this point on, you already have a functional project, and you can get its dependencies and run the integrated server.

```bash
$ cd my-project-name
$ npm install
$ npm run start
```
In a web browser, visit [`http://localhost:8081/`](http://localhost:8081/) to view the initialized project.


## CLI Commands
The commands available in the Modyo CLI and the description of each of the options are:

### `modyo-cli (-v|--version|version)`
Prints the `modyo-cli` version.

```bash
$ modyo-cli (-v|--version|version)
@modyo/cli/3.3.0 darwin-arm64v8 node-v21.2.0
```

### `modyo-cli help`
Show contextual help for the specified command.

```bash
USAGE
  $ modyo-cli help [COMMAND]

ARGUMENTS
  autocomplete Display autocomplete installation instructions
  get          Pull a widget from our catalog into a new directory
  help         Display help for modyo-cli
  push         Push widget to Modyo platform
```

### `modyo-cli autocomplete`

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

### `modyo-cli get`

The `get` command is used to obtain a widget template from our [experience catalog](https://dynamicframework.dev) using a token provided by Modyo.

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

### `modyo-cli push`

Integrate a widget written in Vue to the selected Site in Modyo Platform.

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
  -v, --version=9|10                      [default: 10] Version of Modyo platform

EXAMPLE
  $ modyo-cli push <NAME>

```

### `modyo-cli preview`

The `preview` command allows you to preview a widget locally to debug its code in a local environment before publishing it.

#### Requirements

To use the `preview` command, make sure you meet the following requirements:

- A properly configured [.env](/en/platform/channels/cli.html#initial-setup) file. The `MODYO_ACCOUNT_URL`, `MODYO_SITE_HOST` or `MODYO_SITE_ID` and `MODYO_TOKEN` fields are required.
- A local server running with the widget you want to preview.

#### Steps to Preview a Widget

Once you have your `.env` file configured and your project running on the local server, follow these steps:

1. Open a new terminal window.
2. Run the `modyo-cli preview` command.

:::warning Important

To see a change, you must manually refresh your web app. Click **refresh** to load the changes.

:::

#### Default Variables
Modyo uses default variables for widgets preview, you can modify them as needed. The predefined variables are:

  - `MODYO_LOCAL_PORT`: Local server port (default: `8080`)
  - `MODYO_LOCAL_DOM_ID`: ID of the widget's container element (default: `widgetName`)
  - `MODYO_LOCAL_ENTRY_JS`: Main JavaScript file (default: `main.js`)


Also, you can select whether you want to preview your widget in the published version of your site or in the editable version. To do this, click on the box under **templates**. The text will change from **published** to **editable**.


These commands allow you to select the local entry points that you want to use.


    OPTIONS

    -p, –port=<value> [default: 8080) Deploy port local widget running
    -s, –dom-id=<value> [default: widgetName] Container id of the widget
    -j, –entry-js=<value> [default: main.js] Entry JS file of the widget

    EXAMPLE

    MODYO_LOCAL_PORT=8080
    MODYO_LOCAL_DOM_ID=widgetName
    MODYO_LOCAL_ENTRY_JS=main.js



### Code Splitting

The [widgets](/en/platform/channels/widgets.html#widgets) allow you to develop complex functionalities in your Modyo web applications, thus increasing the functionality of your sites.

However, by including external libraries or increasing the complexity of a widget, you can face excessive load times or exceed the size limits set for widgets in Modyo, which negatively affects both the development experience and the user experience.

The _code splitting_ technique allows you to divide your widgets' code into components that are loaded on demand or in parallel, solving these problems. The benefits of code splitting include:

* Reduction in loading speed.
* Improved interaction time.
* Elimination of restrictions on the size of widgets.
* Increased performance.

#### CLI commands for code splitting

With Modyo's command line interface (CLI), you can publish and update a widget developed externally or in which you have implemented code splitting.

When you create a widget with Modyo CLI, it will have a label with the CLI text next to its name.

In the case of widgets created with code splitting, you must specify which is the main file and which chunks will be loaded dynamically, as required.

To package a file as a zip in Modyo CLI, use the following options:

 * zip: package the widget bundle to send it to the platform.
 * zip-entry-css: main CSS file of the widget.
 * zip-entry-js: main JS file of the widget.

Example:

```bash
modyo-cli push --zip --zip-entry-css=main.css --zip-entry-js=main.js
```


## Deploy
Once the widget is finished, you can prepare it for publication with the `build` command.

This command will perform the necessary actions to prepare your widget for production, including cleaning and minifying the final files:

```bash
$ npm run build
```

To send it to Modyo, use the `push` command. This command uses your settings to select a destination site or stage and check if the widget already exists in Modyo. Depending on the case, you will create or update it on the platform.

```bash
$ modyo-cli push
```

You can immediately publish the micro-frontend on the platform using the `-p` parameter.

```bash
$ modyo-cli push -p
```

:::warning Attention
The user who owns the token must have a role of [site reviewer or admin](/en/platform/core/roles.html#roles) on the site where you are deploying the widget so that the publication can be done correctly.
:::

Once a widget is deployed and published in Modyo, it is available for use on the pages of the site to which it belongs.

If you have defined [variables](/en/platform/core/key-concepts.html#global-variables) their values can be specified at the global or individual level for each instance of the widget.
