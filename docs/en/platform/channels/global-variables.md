---
search: true
sidebarDepth: 2
---

# Global variables

Modyo offers the functionality to define elements globally and reuse them everywhere Liquid is used, allowing you to share code between different sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS inside global variables; however, you can't use Liquid code. The content has a maximum of 65,535 characters.

To get the variable's value anywhere that accepts Liquid markup (entries, widgets, templates), use: <span v-pre>`{{vars.Name}}`</span>
:::

### Create a global variable

To create a global variable, follow these steps:

1. From the main side menu, click **Settings**, then select **Global Variables**.
2. Here you can see the list of all the global variables of the account, their general information, and a button to copy their name in Liquid. Click **+ New Variable**.
3. Fill in the **Name** and **Value** of the variable.
4. Click **Save**.

Global variables can be used to add values for different languages. If required, you also have the option of overwriting the values of global variables in sites and widgets, using the [site configuration](/en/platform/channels/sites.html#site-variables) and [custom widgets](/en/platform/channels/widgets.html#widget-variables) sections, respectively.

:::warning Attention
When using global variables, the variables defined at the lowest level will always take precedence (first those defined in the widget, then those defined in the site, and finally those defined at the account level). Therefore, you must be careful when defining variables in widgets or the site with the same name as the account variables.
:::

:::danger Danger
Global variables do not have a publishing, versioning, or team review workflow. Only account and site administrators can modify them. Therefore, when making changes to these values, they will be immediately reflected wherever they are being used.
This does not apply to variables defined in widgets, as widgets and pages do have a publishing flow.
:::