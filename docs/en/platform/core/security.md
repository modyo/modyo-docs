---
search: true
---

# Platform Security

## Activity logs

<img src="/assets/img/platform/activity-logs.jpg" style="margin-top: 40px; border: 1px solid #EEE;" />

The platform allows you to see all activity and changes made throughout the entire duration of the platform's existence.

In this section, you can filter by date, activity type, or platform team member.

In addition, you can see the details of what activity was done and in which section of the platform it originated.

These activity logs are especially useful when you need to stay on top of changes and updates made by many concurrent users and will help you to detect errors and changes in the production and development chain.



## Security

In this section we will explain how to configure various options to improve the security of your Modyo account:

* Password policy
* Share resources across different domains ([CORS - Cross Origin Resource Sharing](https://www.w3.org/TR/cors/))
* Content delivery token ([JWT](https://tools.ietf.org/html/rfc7519))
* Two-Step Authentication

<img src="/assets/img/platform/cors.png" style="margin-top: 40px; border: 1px solid #EEE;" />

### Password policy

This section will allow you to set the password security policy for team members. Within the options you can choose the following:

* **Enforce minimum password length**: By default the minimum length required by Modyo is 8 characters, but if you require it, you can force the minimum length of team members' passwords to be longer.
* **Require at least one lowercase letter from the Latin alphabet (a to z)**: With this option you can ensure that at least one lower case letter exists within team members' passwords.
* **Require at least one uppercase letter from the Latin alphabet (A to Z)**: With this option you ensure that at least one capital letter exists within team members' passwords.
* **Require at least one non-alphanumeric character (! @ # $ % ^ & * () _ + - = [] {} |)**: With this option you force your team members to use at least one of the special characters indicated in the list in their passwords.

When saving this configuration, existing users will have to comply with these conditions whenever they change their passwords.

### Share resources across different domains

In this section we can activate Cross Origin Resource Sharing (CORS), so that Modyo resources can be accessed from other websites that are not necessarily secure.

When you enable this option, you will need to specify the domains (separated by comma and no slash at the end) that you want to allow access from to share resources with your site. For example:
`http://api.mydomain.com, http://mysubdomain.mydomain.com, http://mydomain.com`

### Content Delivery Token (JWT)

After configuring CORS, the platform will give you a key or _secret_ to be able to decode users' JWTs in order to access [private content via the API](/en/platform/content/public-api-reference.html#private-content).

:::warning Warning
The key or _secret_ is used by Modyo to sign users' JWTs. Generating a new key will force all requests for private content to go through Modyo, since JWTs signed by Modyo with the old key will no longer be valid.
:::

The key or _secret_ has a specific time duration in seconds that can be configured in the box labeled _Content delivery token TTL_. By default, the duration is 1 hour (3600 seconds). It is not recommended to use a very small duration, as this could affect the performance of the platform.

### Two-Step Authentication

Two-step authentication adds an extra layer of security to your account. Each time team members sign in, they'll need to enter both their password and a dynamic key provided by the _Google Authenticator_ app on their phones.

You can download the app for your phone with the following links:

* Android: [Google Authenticator on Google Play](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
* iOS: [Google Authenticator on the Apple App Store](https://apps.apple.com/us/app/google-authenticator/id388497605)

Each team member can enable two-step authentication from their profile, but as an administrator, you can force two-step authentication for all team members. 

When you force two-step authentication for team members, the next time a team member logs in, you will be required to configure your authentication device in two steps. Once configured, you will need to log in using your password and the code provided by _Google Authenticator_.
