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

To get the variable value anywhere that accepts Liquid markup (entries, widgets, templates), use: <span v-pre>`{{ vars.identifier }}`</span>
:::

## Variable Scopes

A variable lives in one of three scopes, and each scope has its own screen:

- **Account**: in the Channels side menu, click **Variables**. Whatever you create here is available to every web app in the account.
- **App**: inside a web app, under **App settings**, click **App variables**. Here you create variables that belong to the app and overwrite, for that app only, the value of an account variable. See [Site Variables](/en/platform/channels/sites.html#site-variables).
- **Widget**: in the **Variables** tab of the widget definition. See [Widget Variables](/en/platform/channels/widgets.html#widget-variables).

When a variable is resolved, the most specific scope always wins: the widget value overrides the app value, and the app value overrides the account value. Be careful when reusing, in a widget or an app, an identifier that already exists at the account level.

## Create a Global Variable

To create a global variable, follow these steps:

1. From the side menu, click Channels and then **Variables**.
2. Here you can see the list of the account's global variables, their general information, and a button to copy their **Liquid markup**. Click **New Variable**.
3. Fill in the **Name** and the **Value** of the variable.
4. Click **Save**.

The text you type in **Name** is normalized as you type: it is lowercased and spaces are replaced with hyphens. That result is the identifier you use to read the variable from Liquid, there is no separate title. The value you save is tied to the app's language and is marked as the default value.

## Values per Language

A variable does not store a single value, but one value per language, and only three languages are supported: **Spanish**, **English**, and **Portuguese**. Any other language code is rejected on save.

To add or change the value of a language:

1. In the list, click the variable's name.
2. In the window header, pick the language in the selector next to the title.
3. Type the **Value** and click **Save**.

Exactly one of the values is marked as the variable's default value: it is the one returned when the variable is accessed without a resolved language. The **Default** column in the list tells you which one it is. To change it, leave the **Locale** filter on the language you want to promote, select one or more variables, and use the **Set as default** bulk action.

Widget variables do not have this dimension: they store a single value, with no language.

:::tip Tip
**Name** can only be edited from the value marked as default. If you open the variable in another language, the field is disabled.
:::

## Activate and Deactivate a Variable

You can deactivate a variable without deleting it. Select one or more variables in the list and use the **Deactivate** bulk action. To revert it, switch the **Active** filter to **No**, select the variables, and use **Activate**.

While a variable is deactivated:

- It cannot be edited. When you open it you see the notice "This variable is deactivated. If you want to edit it you must activate it first" and the save button becomes **Activate**.
- It stops being available in Liquid: templates that use it start receiving an empty string.

## The Variable List

On the account and app screens, the list shows one row per variable with its **Status**, **Name**, **Value**, whether it is the **Default** value, and a button that copies its **Liquid markup**.

The **Status** column uses these indicators:

- **Translated** or **Not translated**, depending on whether the variable has a value loaded in the language you are filtering by.
- **Not overwritten**, on the app screen, when the variable comes from the account and this app does not give it its own value yet.
- **Overwritten**, when the variable also exists in a higher scope and is being given a different value here.

To narrow the list you have the **Locale**, **Active**, and **Translation** filters, the latter with the **Translated** and **Not translated** options. On the app screen the **Overwritten** filter is added. The search box filters by identifier. By default, only the active variables of the app's language are listed.

In the **Variables** tab of a widget definition you also see the **In use** indicator, which marks the variables the widget code actually references.

## Read a Variable from Liquid

To read a variable anywhere that accepts Liquid markup, use <code v-pre>vars.identifier</code>, where the identifier is the one shown in **Name**. The button in the **Liquid markup** column copies the full expression, ready to paste into a template.

When rendering, Modyo layers three sets of values and the last one wins:

1. The value marked as default for each variable.
2. The value of the language configured in the app.
3. The value of the active language of the request being rendered.

Scope inheritance is applied on top of that result: account, then app, and finally widget.

:::tip Tip
If the identifier does not exist in any scope, or if the variable is deactivated, <code v-pre>vars.identifier</code> returns an empty string and the render continues: no error is raised and the page is not interrupted. Keep this in mind when a variable's value disappears from a template without any signal.
:::

## Change a Variable's Identifier

The **Name** of an existing variable is locked. To edit it, you have to unlock the field with **Unlock identifier field** and confirm the notice.

:::warning Attention
Changing the identifier breaks every reference that already uses that variable: templates, widgets, content, the API, and the SDKs stop finding it and start receiving an empty string. If you need a different identifier, create a new variable, update the references, and only then delete the old one.
:::

:::danger Danger
Global variables do not have a publishing workflow, versioning, or team review. Only account and site administrators can modify them. Therefore, when making changes to these values, they will be immediately reflected everywhere they are being used.
This does not apply to variables defined in widgets, since widgets and pages do have a publishing flow.
:::