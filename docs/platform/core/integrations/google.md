---
search: true
---

### Google

In order to integrate Google login with Modyo, you must have:

- Application ID
- Key

These values can be obtained after creating an application in the Google Platform with login permissions. You can learn more about how to create and configure a Google application in your [Official Documentation](https://developers.google.com/identity/sign-in/web/sign-in).

You should keep in mind that the callback URL (_Callback URI_) is available at the end of the form. You need to use that URL in the application or project that you create in Google to be able to complete the login flow correctly.

In addition to the necessary values, you can configure additional data to control the Google login experience. If you enable the _Restrict domains_ option, you can use two extra fields:

- **Domain example**: These will be the domains that are shown as a suggestion when you are signing in to Google.
- **Supported domains**: If the email domain that the user uses when signing in with Google is not in this list, then the login will not be valid and the user will be redirected to the Modyo login view without an active session.
