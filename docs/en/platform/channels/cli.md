---
search: true
---

# Command Line Interface

The Modyo Command Line Interface (CLI) lets you develop your site's [widgets](/en/platform/channels/widgets.html) in your local environment, preview them inside the site, and deploy them to the site or stage you choose, without writing the code in the panel.

This page describes that flow from Channels. CLI installation, `.env` file configuration, and the full command and option reference are in [Modyo CLI](/en/platform/tools/cli.html).

## Before you start

- Install the CLI and prepare your project's `.env` file following [Environment Configuration](/en/platform/tools/cli.html#environment-configuration).
- Identify the target site or stage: its ID or host are the values you use in `MODYO_SITE_ID` or `MODYO_SITE_HOST`.
- Use the access token of a user who is a member of that site with a role that includes the **Create Widgets CLI** permission, such as **Site Developer CLI**. If the role doesn't include that permission, the platform rejects the push even if the token is valid.

:::tip Tip
Each site and each stage is a separate target. If you work with stages, add the token's user as a [team member](/en/platform/channels/sites.html#team-members) on each one, and change `MODYO_SITE_ID` before deploying to a different target.
:::

## Preview a local widget on your site

With the `preview` command, you mount the widget running on your local server inside your site, with its templates and styles, before uploading it to the platform.

1. Keep your project's local server running.
1. Log in to the Modyo panel in the same browser you will use for the preview: the preview opens on the site, but it needs an active administrator session.
1. Open a new terminal window and run `modyo-cli preview`.
1. Choose whether to see your widget on the site's published templates or on the editable ones.

The local port, the container ID, and the entry file have default values you can change; they are described in [Default variables](/en/platform/tools/cli.html#default-variables).

:::warning Attention
The preview doesn't refresh on its own. After each change in your local code, refresh the page to see it.
:::

## Deploy the widget to the site or stage

1. Build your project.
1. Run `modyo-cli push` with the target configured. If the widget doesn't exist on that site or stage, it is created; if it already exists, it is updated with a new version.
1. Publish the widget from the site's **Widgets** list, or add the `-p` parameter to the push to publish it in the same run.

The details of the command parameters and the permissions required to publish are in [Deployment](/en/platform/tools/cli.html#deployment).

## Widgets deployed with the CLI

In the site's **Widgets** list, widgets that arrived through a push are marked with a **CLI** label next to their name, and they behave differently from the ones you create in the panel:

- Their code is read-only: you can open it in the **Widget Builder** to review it, but you can't save changes there. To modify it, change your local project and run `modyo-cli push` again.
- Their [variables](/en/platform/channels/widgets.html#widget-variables) are detected from the code you push, and their values are still managed from the panel.
- You can publish it and instantiate it on the site's [pages](/en/platform/channels/pages.html) like any other widget.