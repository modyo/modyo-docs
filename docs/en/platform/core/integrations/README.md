---
search: true
---

# Integrations

One of the features Modyo has to facilitate the interaction between other user systems and Modyo is the integration with different authentication services.

The platform is currently compatible with:

- [Facebook](/en/platform/core/integrations/facebook.html)
- [Google](/en/platform/core/integrations/google.html)
- [LDAP] (/es/platform/core/integrations/ldap.html)
- [SAML] (/es/platform/core/integrations/saml.html)
- [OAuth2] (/es/platform/core/integrations/oauth2.html)
- [OpenID Connect] (/es/platform/core/integrations/oidc.html)

Remember to have at hand all the data and certificates that are required of you before changing them or integrating a service, so that there are no problems with the general income of users.

:::tip Tip
From Modyo 9 onwards, users (Customers>Users) and administrators (Settings>Computer) are logically separated. Both have support for all integrations that support the platform, but with different logins, so you can configure Facebook for your users and Oauth2 for your administrators, for example.
:::

### Webhooks

The platform also allows the use of Webhooks for certain specific events within your account. To do this, they must be enabled and configured from the webhooks section in the account settings.

A webhook is an automatic _POST_ action to a given URL with certain information.

To enable them, you must check the top of the page and then proceed to create all the webhooks you want.

Webhooks can be created from site or space actions.

Site webhooks are:

* Response of the created form
* Updated form response
* Page created
* Deleted page
* Published page
* Unpublished page
* Updated page
* Login
* Logout
* Approved navigation
* Published navigation
* Navigation sent for review
* Updated navigation
* Updated profile
* Site created
* Deleted site
* Deactivated site
* Site Enabled
* Hidden Site
* Site put in development
* Visible Site
* Updated site
* Approved templates
* Submitted templates for review
* Updated templates
* Theme Installed
* Reinstated topic
* Updated topic
* Approved widget
* Cloned widget
* Widget created
* Published widget
* Refurbished widget
* Widget sent for review
* Unpublished widget
* Updated widget

Spaces webhooks are:

* Category created
* Deleted category
* Updated Category
* Approved entry
* Entry created
* Published entry
* Entry sent for review
* Unpublished entry
* Updated entry
* Space created
* Updated space
* Type created
* Removed Type
* Updated type

When creating a webhook, you must have the URL to which you want to send the information, select the type of log and site (if necessary) that will trigger the webhook and then save the changes.

After this, you will be able to see in the list all the webhooks that are active.

Once the webhook is created, you will be able to send a test notification with false information to prove that your URL is correctly receiving the Posts from Modyo.