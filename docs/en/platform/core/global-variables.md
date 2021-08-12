---
search: true
---

# Global variables

Modyo allows you to define global variables that you can use in all the sites where you have Liquid. This way you can, for example, share a code _snippet_ between sites.

:::tip Tip
You can use plain text, HTML code, JavaScript and CSS within the global variables. However, you cannot use Liquid code in a global variable. Keep in mind that the content of a global variable has a limit of 65,535 characters.
:::

You can create global variables in your account settings, and you can add values for different languages. If required, you can also overwrite the values for certain sites in the site variables menu in the site settings, or in each of the custom widgets of the builder widget.

:::warning Warning
When using global variables, always take as preference the variables defined at the lowest level, being first the variables defined in the widget, then the ones defined in the site and then the variables defined at the account level, so you must be careful when defining variables in widgets or the site with the same name as the account variables.
:::

:::danger Danger
The global variables do not have a publishing, versioning or team review workflow, and only the account and site administrators can modify them, so you should consider that when you make a change in the value of these, it will be reflected immediately wherever they are being used. This does not apply to the variables defined in the widgets, since the widgets and pages do have a publishing flow.
:::
