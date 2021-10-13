---
search: true
---

# Global variables

Modyo has a feature to define global variables that you can use everywhere Liquid can be used, so you can for example, share a code _snippets_ between sites.

:::tip Tip
You can use plain text, HTML, JavaScript, and CSS within global variables, however you can't use Liquid code inside them. You should keep in mind that the content is a maximum of 65,535 characters.
:::

You can create global variables in your account settings, and you can add values for different languages. If required, you can also overwrite the values for certain sites in the site variables menu in the site settings, or in each of the custom widgets of the builder widget.

:::warning Warning
When using global variables, the variables defined at the deepest level will be taken first, with variables defined in the widget first, then those defined in the site, and finally variables defined at the account level. Be careful when defining variables in widgets or in sites where you use the same variable names as the variables in the account.
:::

:::danger Danger
Global variables do not have a publishing, versioning, or team review workflow. Only account and site administrators can modify them, be mindful of that when you make a change to the value of the variable, as they will be immediately reflected wherever they are being used. This does not apply to variables defined in widgets or pages, as widgets and pages do have a publishing flow.
:::
