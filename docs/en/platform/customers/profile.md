---
search: true
---

# User Profile

The **user profile** is the space where each user can:

- Manage their notifications.
- Edit their personal information, such as name, email, custom fields, and email campaign subscriptions.

This profile is available to users upon authentication or when accessing the section to edit their information.

## Activity

In this section, you can view a log of all actions performed by the user on the platform.

:::warning Attention
These records cannot be deleted or edited.
:::

## Notifications

Each user can access their notifications directly from the profile. At the top, unread notifications are listed, followed by read notifications. Both lists are sorted from the most recent to the oldest.

By clicking on a notification, its full content will be displayed, and it will be marked as read.

## Edit Information

In this section, each user can modify their profile data. Depending on the [realm configuration](/en/platform/customers/settings), each user will be able to edit:

- Name
- Surname
- Second surname
- Email
- Mobile
- Profile Image
- Date of Birth
- Gender: **Male**, **Female**, **Non-binary**, **Other (not listed)** or **Prefer not to say**
- Language
- [Custom Fields](/en/platform/customers/settings#custom-fields)
- Password
- Email Campaign Management

Additionally, users have the option to permanently delete their account.

:::danger Danger
Account deletion is irreversible. If a user performs this action, they will need to register again to access the platform.
:::

## Realm routes

Every session and profile view of a realm hangs from the same prefix, built with your account URL and the realm identifier: `https://my_account.modyo.com/realms/my_realm/`. If the realm has a [custom domain](/en/platform/customers/settings.html#domains), the prefix is `https://<your-domain>/realms/`, without the identifier.

| Route | What it is for |
| --- | --- |
| `/login` | The realm's login view. |
| `/logout` | Log out. |
| `/signup` | Registration form. |
| `/activate/:activation_code` | Activates and verifies the account from the link in the activation email, and leaves the user logged in. The link expires after a week. |
| `/password` | Form to request password recovery. |
| `/password/reset/:token` | Sets a new password from the link that arrives by email. The link expires after 3 days. |
| `/password/confirm_info/:token` | Data confirmation screen that may show up during recovery; once saved, the user is verified. |
| `/password/change` | Password change for a logged-in user, asking for their current password. |
| `/reset_password` | Forced password change. Only reachable by users with a pending change; everyone else is sent back to the site. |
| `/profile` | The user's profile, with their notifications. |
| `/profile/edit` | Editing of the profile information. |
| `/profile/change_email` | Email change request. The user confirms their current password and the new address stays pending until they verify it. |
| `/confirm_email/:activation_code` | Confirms the new address from the verification link. The link expires after 5 minutes. |
| `/profile/delete_user` | Permanent deletion of the user's account. |
| `/otp_login` | Login view with a one-time code, available when the realm has Soft login enabled: it asks for the user's identifier instead of the password. |
| `/otp_signup` | Sends the one-time code of a Soft login registration and takes the user to the code screen. |
| `/otp_code` | Screen where the user types the 6-digit code they received. |
| `/session/access/:token` | Starts the session from a single-use access token, which is invalidated as soon as it is used. |

You can review the details of the login with a code in [Soft login](/en/platform/customers/settings.html#soft-login).

The password recovery and email change routes also have anti-abuse limits that can keep an email from being sent or close the user's session, without the screen showing any error. See [Request limits and lockouts](/en/platform/customers/settings.html#request-limits-and-lockouts).

:::tip Tip
There is no Liquid drop that returns the registration URL: build it with the realm identifier, which you have in **site.realm_slug**, as shown in [Sign up and return to a page](/en/platform/customers/profile.html#sign-up-and-return-to-a-page). For login, logout, and the profile you do have **site.login_url**, **site.logout_url**, and **site.profile_url**, which you can review in [Objects](/en/platform/channels/liquid-markup/objects.html#site).
:::

### Redirection parameters

- `site`: Identifier of the site the user came from. The platform adds it on its own when the user enters from a site, and uses it to send them back there when they are done.
- `redirect_uri`: URL the user is sent to after logging in. The realm routes that accept it are `/login`, `/signup`, `/otp_login`, `/activate/:activation_code`, and `/session/access/:token`.
- `redirect_to`: URL the user is sent to after logging out at `/logout`. It is also the parameter used by a site's `/login` route, as explained in [Redirect Login](/en/platform/customers/settings.html#redirect-login).

The destination URL has to be a relative path, point to a site in your own account, or to one of the realm's custom domains. If it isn't, the platform discards it and applies the redirection defined in **After logging in, redirect to** of the [Realm Settings](/en/platform/customers/settings.html#general).

### Sign up and return to a page

At `/signup`, when the user reaches the `redirect_uri` URL depends on the realm's **Account activation** option in the [Realm Settings](/en/platform/customers/settings.html#general):

- **Direct**: when the account is created, because the user is left with an active session.
- **OTP activation**: when the user enters the one-time code they receive.
- **Email activation**: when the user activates the account from the email link, as long as they open it in the same browser they signed up in. Meanwhile, they see the screen that confirms the signup.
- **Moderated**: the user doesn't return when the signup ends, because they can't log in until an administrator activates their account. To take them to the page at that point, use `redirect_uri` in the login link.

If the user already has an active session, `/signup` sends them straight to the `redirect_uri` URL.

For example, to invite a visitor without a session to sign up from an origination page and bring them back to it:

```liquid
{% unless user %}
  <a href="{{ account.url }}/realms/{{ site.realm_slug }}/signup?redirect_uri={{ origination.url | url_encode }}">Sign up to continue</a>
{% endunless %}
```

`origination.url` returns the absolute URL of the origination page, and the `url_encode` filter encodes it so it travels whole as the parameter value. If the realm has a custom domain, use that domain's prefix, as described in [Realm routes](/en/platform/customers/profile.html#realm-routes).

If you don't need to build the link, choose **Signup page** in **On session required redirect to** in the [Realm Settings](/en/platform/customers/settings.html#general). That way, a visitor without a session who tries to access content that requires authentication lands on the signup and, after authenticating, returns to the URL they were trying to access.
