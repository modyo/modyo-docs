---
search: true
sidebarDepth: 2
---

# Global variables

Modyo offers you the functionality to define elements globally and reuse them everywhere Liquid is used. This allows you to share code between different sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS inside global variables; however, you can't use Liquid code inside them. You should keep in mind that the content has a maximum of 65,535 characters.

To get the value of the variable anywhere that accepts Liquid markup (entries, widgets, templates), use:<span v-pre>`{{vars.Name}}`</span>
:::

### Create a global variable

To create a global variable, follow these steps:

1. From the main side menu, click **Settings**, then select **Global Variables**.
1. Here you can see the list of all the global variables of the account, their general information, and a button to copy their name to Liquid. Click **+ New Variable**.
1. Fill in the **Name** and **Value** of the variable.
1. Click **Save**.

Global variables can be used to add values for different languages. If you require it, you also have the option of overwriting the values of global variables in sites and widgets, using the [site configuration](/en/platform/channels/sites.html#site-variables) and [custom widgets](/en/platform/channels/widgets.html#widget-variables) sections, respectively.

:: :warning Attention
When using global variables, the variables defined at the lowest level will always be taken as a preference, leaving first the variables defined in the widget, then those defined on the site, and finally the variables defined at the account level, so you should be careful when defining variables in widgets or the site with the same name as the variables in the account.
:::

:: :danger Danger
Global variables don't have a publishing, versioning, or team review workflow. Only account and site administrators can modify them, so you should consider that when you make changes to these values, they will be immediately reflected wherever they are being used.
This does not apply to variables defined in widgets, since widgets and pages do have a publishing flow.
:::
