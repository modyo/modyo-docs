---
search: true
---

# Global Variables

In Modyo Channels, variables are key elements for creating dynamic and reusable content. They work within Modyo's template engine, which uses Liquid Markup, a simple and secure template language.

Variables in Modyo Channels are not just a programming concept; they are a platform feature that allows you to:
- **Reuse information**: Define values that can be used in multiple places, such as templates, widgets, and pages, without having to write the same code over and over again.
- **Personalize content**: Insert data that changes (such as usernames, article titles, product prices) into your templates so the user experience is personalized.
- **Manage global configurations**: Control design or functionality aspects centrally.

Modyo offers the functionality to define variables globally and reuse them in all applications that use Liquid, allowing code sharing between different sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS within global variables; however, you cannot use Liquid code. The content has a maximum of 65,535 characters.

To get the variable value anywhere that accepts Liquid markup (entries, widgets, templates), use: <span v-pre>`{{vars.Name}}`</span>
:::

### Create a Global Variable

To create a global variable, follow these steps:

1. From the main side menu, click **Settings**, then select **Global Variables**.
2. Here you can see the list of all global variables for the account, their general information, and a button to copy their name in Liquid. Click **New Variable**.
3. Fill in the **Name** and **Value** of the variable.
4. Click **Save**.

Global variables can be used to add values for different languages. If required, you also have the option to override global variable values in sites and widgets, using the [site configuration](/en/platform/channels/sites#site-variables) and [custom widgets](/en/platform/channels/widgets#widget-variables) sections, respectively.

:::warning Attention
When using global variables, variables defined at the lowest level will always take precedence (first those defined in the widget, then those defined in the site, and finally those defined at the account level). Therefore, you must be careful when defining variables in widgets or the site with the same name as account variables.
:::

:::danger Danger
Global variables do not have a publishing workflow, versioning, or team review. Only account and site administrators can modify them. Therefore, when making changes to these values, they will be immediately reflected everywhere they are being used.
This does not apply to variables defined in widgets, since widgets and pages do have a publishing flow.
:::