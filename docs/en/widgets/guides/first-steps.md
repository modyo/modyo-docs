---
search: true
---

# First steps

Initialize and publish a widget locally using Modyo CLI.

### Prerequisites

This guide was created for users who are already familiar with the following topics:
- [Modyo Platform](/en/platform/)
- Have [access to the administrative API](en/platform/core/api.html#bearer-token)

### Install Modyo-CLI

The Modyo command line interface allows you to interact with the platform and our widget catalog from a terminal. To install it, run the command:

<code>Via yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Via npm</code>

```sh
$ npm i -g @modyo/cli
```

> Verify that the installation was successful using the command: `modyo-cli help`

### Initialize a Widget

The fastest way to initialize a Widget is to use one of the templates in this catalog as an accelerator and modify it for your needs. You can find the `<widget-name` as part of the Widget documentation.

1. Use the `get` command in `modyo-cli` to download the required files for the widget:

```bash
modyo-cli get <nombre-del-Widget> <directorioDestino>
```

For example, if we want to use the Retail `Consumer Loan` template, the command would be as follows:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

2. Change directory and initialize the server in development mode:

```shell
cd ~/Desktop/MyLoanWidget && yarn serve
```

:::warning Alert
If you encounter problems compiling, try installing a compatible version of PostCSS with this line

`npm i -D @fullhuman /postcss-purgecss @3 .0.0 postcss @7 .0.351`
:::

### Publish a Widget

To load our Widget to the platform and publish it, we'll use the `modyo-cli` `push` command. This can be done locally or using continuous integration (recommended).

1. Create a `.env` environment variable file at the root of the project with the following variables:

```shell
MODYO_ACCOUNT_URL= [AccountURL] //URL of the account that owns the site
MODYO_VERSION=9 //The version of the Modyo platform
MODYO_TOKEN= [SiteToken] //The token for accessing the administrative API
MODYO_SITE_HOST= [SiteHost] //The Hostname, located within the platform, in the sites section
MODYO_WIDGET_NAME= [WidgetName] //The name of the widget
Modyo_build_command=build //The command for package.json (default: build) 
modyo_build_directory=Dist //The widget path (default: dist) 
```

> If you do not use an environment variable file, you can also send the necessary data directly from the command line. For example:

```
modyo-cli push MyWidget -b build -d dist -n myHost -v 9 -u "https://test.miModyo.com" -t $TOKEN 
```

:::tip Tip
To learn more about obtaining an API access token, see [Management API](en/platform/core/api.html)

To see all the options available for `modyo-cli push`, see [Modyo-cli Push] (/en/platform/channels/widgets.html#modyo-cli-push-name)
:::

![Host](/assets/img/widgets/host.png)

2. Open a terminal in the project and use `push` to send the widget to the platform:

```shell
modyo-cli push
```

Once the loading process is finished, the Widget will be available in the **Widgets** section of the site waiting to be reviewed and published.

![widgets-list](/assets/img/widgets/widgets_list.png)

If you want automatically publish the Widget when it finishes loading, use the `--publish` option.

```shell
modyo-cli push --publish
```

