---
search: true
---

# Integrations

One of the features Modyo has to facilitate the interaction between other user systems and Modyo is the integration with different authentication services.

The platform is currently compatible with:

- [Facebook](/platform/core/integrations/facebook.html)
- [Google](/platform/core/integrations/google.html)
- [LDAP](/platform/core/integrations/ldap.html)
- [SAML](/platform/core/integrations/saml.html)
- [OAuth2](/platform/core/integrations/oauth2.html)
- [OpenID Connect](/platform/core/integrations/oidc.html)

Remember to have all the required data and certificates at hand before changing them or integrating a service, to avoid any potential issues with user access.

::: tip Tip
From Modyo 9 onwards, users (Customers> Users) and administrators (Settings> Team) are logically separated. Both have support for all the integrations compatible with the platform, but with different logins. This way you can configure, for example, Facebook for your users and Oauth2 for your administrators.
:::


### Webhooks

The platform also makes it possible to trigger Webhooks with specific events within your account. To do this, they must be enabled and configured from the webhooks section in the account settings.

A webhook is an automatic _POST_ action at a given URL with certain information.

To enable them, you must check the box at the top of the page and then proceed to create all the webhooks you want.

Webhooks can be created from actions of sites or spaces.

Site webhooks are:

* Response of the form created
* Updated form response
* Page created
* Page deleted
* Page published
* Page unpublished
* Page updated
* Login
* Logout
* Navigation approved
* Navigation published
* Navigation sent for review
* Navigation updated
* Profile updated
* Site created
* Site removed
* Site disabled
* Site enabled
* Site hidden
* Site staged
* Visible site
* Site updated
* Templates approved
* Templates sent for review
* Templates updated
* Theme installed
* Theme restored
* Theme updated
* Widget approved
* Widget cloned
* Widget created
* Widget published
* Widget restored
* Widget sent to review
* widget unpublished
* Widget updated

Space webhooks are:

* Category created
* Category deleted
* Category updated
* Entry approved
* Entry created
* Entry published
* Entry sent for review
* Entry unpublished
* Entry updated
* Space created
* space updated
* Type created
* Type removed
* Type updated

When creating a webhook, you must have the URL to which you want to send the information, select the type of log and site (if necessary) that will trigger the webhook and then save the changes.

After this, you will see in the list all the webhooks that are active.

Once the webhook is created, you can send a test notification with false information to prove that your URL is correctly receiving the POSTs from Modyo.
