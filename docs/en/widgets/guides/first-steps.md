---
search: true
---

# First steps

 If you've never used the Modyo platform and/or Widgets, we recommend starting with [here](/platform/). In addition, this guide assumes that you have the [modyo-cli](/platform/channels/widgets.md#modyo-cli) installed and that you have read its [documentation](/platform/channels/widgets.md#modyo-cli).

:::tip API
access token In order to use the Widgets in this catalog, you need to have an API access token that allows you to download them for use. You can get this through your organization or directly with Modyo.
:::

### Start a Widget

The fastest way to start a Widget is to use one of the templates in this Catalog as an accelerator and then modify it to suit your needs. To use one of our templates we will use the `GET` command in the `modyo-cli`:

```bash
modyo-cli get <widget-name> <widget-folder>```

For example, if we want to use the `Consumer Cred` template from People Banking, the command is as follows:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

And to start the server in development mode:

```shell
modyo-cli get modyo-widgets-retail-consumer-loan ~/Desktop/MyLoanWidget
```

Y para iniciar el servidor en modo de desarrollo:

```shell
cd ~/Desktop/MyLoanWidget && yarn serve
```

### Publish a Widget

To upload our Widget to the platform and publish it, we will use the `PUSH`command of the `modyo-cli`. This can be done locally or by using continuous integration (recommended).

Follow [this](/es/widgets/guides/ci-cd.html) guide to get a token that allows us to upload and publish the Widget.

```shell
MODYO_TOKEN=[siteToken]
MODYO_ACCOUNT_URL=[accountUrl]
MODYO_SITE_HOST=[siteHost]
MODYO_WIDGET_NAME=[widgetName]
```

If we want to publish the Widget automatically after loading, we can use the `—publish` option of the `PUSH` command.

The **AccountUrl** is the URL of the account that owns the site. The **SiteHost** can be searched in the **Channels —> SiteS** section and can be reviewed in the host column of the site list.

![Host](/assets/img/widgets/host.png)

Once the loading process is finished, the Widget will be available in the**Widgets** section of our site waiting to be reviewed and published.

```shell
modyo-cli push
```

Una vez terminado el proceso de carga, el Widget estará disponible en la sección **Widgets** de nuestro sitio esperando para ser revisado y publicado.

![widgets-list](/assets/img/widgets/widgets_list.png)

If we want the Widget to be published automatically at the end of loading, we can use the `—publish` option of the `PUSH` command

```shell
modyo-cli push --publish
```

