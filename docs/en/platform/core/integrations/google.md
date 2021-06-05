---
search: true
---

### Google

In order to integrate Google login with Modyo, you must have:

- Application ID
- Key

These values can be obtained after creating an application in the Google Platform with login permissions. You can learn more about how to create and configure a Google application in your [Official Documentation](https://developers.google.com/identity/sign-in/web/sign-in).

Please note that at the end of the form the callback URL (_Callback URI_) is available. You need to use that URL in the app or project you create on Google in order to successfully complete the login flow.

In addition to the necessary settings, you can set up some extra data to control the behavior of your login with Google. If you enable the _Restrict Domains_ option, you can use two extra fields:

- **Domain example**: These will be the domains shown as a suggestion when you are signing in to Google.
- **Supported domains**: If the domain of the mail that the user entered at the time of logging in to Google is not within this list, then the login will be invalid and the user will be redirected to the Modyo login view without an active session.
