---
search: true
---

# First steps

Initialize and publish a widget locally using Modyo CLI.

### Prerequisites

This guide was created for users who are already familiar with the following topics:
- [Modyo Platform](/en/platform/)
- [`modyo-cli` command-line interface](/en/platform/channels/widgets.md#modyo-cli) installed and its [documentation](/en/platform/channels/widgets.html#modyo-cli)
- Have [access to the administrative API](en/platform/core/api.html#bearer-token)

### Initialize a Widget

The quickest way to initialize a Widget is to use one of the templates in this catalog as a template and modify it for your business needs.

1. Use the `get` command in `modyo-cli` to download the necessary files for the widget:

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

### Publish a Widget

To load our Widget to the platform and publish it, we'll use the `modyo-cli` `push` command. This can be done locally or using continuous integration (recommended).

1. Create a `.env` environment variable file at the root of the project with the following variables:

```shell
MODYO_TOKEN=[siteToken]         //The token to access the admin API
MODYO_ACCOUNT_URL=[accountUrl] //Account URL
MODYO_SITE_HOST=[siteHost]     //Site host name, found inside the platform, in the sites section
MODYO_WIDGET_NAME=[widgetName] //The widget's name
```

:::tip Tip
To learn more about obtaining an API access token, see [Administration API](en/platform/core/api.html)
:::

![Host](/assets/img/widgets/host.png)

2. Open a terminal in the project and use `push` to send the widget to the platform:

```shell
modyo-cli push
```

Once the loading process is finished, the Widget will be available in the**Widgets** section of our site waiting to be reviewed and published.

![widgets-list](/assets/img/widgets/widgets_list.png)

If we want the Widget to be published automatically when it finishes loading, we can use the `--publish` option.

```shell
modyo-cli push --publish
```

