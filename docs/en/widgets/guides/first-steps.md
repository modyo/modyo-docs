---
search: true
---

# First steps

If you've never used the Modyo platform and/or Widgets, we recommend starting with [here](/platform/). In addition, this guide assumes that you have the [modyo-cli](/platform/channels/widgets.md#modyo-cli) installed and that you have read its [documentation](/platform/channels/widgets.md#modyo-cli).

:::tip API access token
In order to use the Widgets in this catalog, you need to have an API access token that will allow you to download them for use. This can be achieved with your organization or directly with Modyo.
:::

### Start a Widget

The fastest way to start a Widget, is to use one of the templates of this Catalog as an accelerator and modify it for our needs.
To use one of our templates we will use the `GET` command of the `modyo-cli`:

```bash
modyo-cli get <widget-name> <widget-folder>```

For example if we want to use the `Consumer Cred` template of the People Banking the command would be as follows:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

And to start the server in development mode:

```shell
cd ~/Desktop/MyLoanWidget && yarn serve
```

### Publish a Widget

To load our Widget to the platform and publish it, we will use the `PUSH `command of the `modyo-cli`. This can be done locally or using continuous integration (recommended).

Before we can load and publish our Widget locally, we must create a `.env` environment variable file at the root of the project with the following variables:

```shell
MODYO_TOKEN=[siteToken]
MODYO_ACCOUNT_URL=[accountUrl]
MODYO_SITE_HOST=[siteHost]
MODYO_WIDGET_NAME=[widgetName]
```

Follow [this](/es/widgets/guides/ci-cd.html) guide to get a token that allows us to upload and publish the Widget.

The **AccountUrl** is the URL of the account that owns the site and the **SiteHost** can be searched in the **Channels —> SiteS** section and review the host column of the site list.

![Host](/assets/img/widgets/host.png)

With the created `.env` file and the added values we can load the Widget to our site:

```shell
modyo-cli push
```

Once the loading process is finished, the Widget will be available in the**Widgets** section of our site waiting to be reviewed and published.

![widgets-list](/assets/img/widgets/widgets_list.png)

If we want the Widget to be published automatically at the end of loading, we can use the `—publish` option of the `PUSH` command

```shell
modyo-cli push --publish
```

