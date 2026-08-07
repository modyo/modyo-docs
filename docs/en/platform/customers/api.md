---
search: true
---

# Customer APIs

Modyo Customers contains a variety of APIs with which you can obtain information about Realms, notifications, and users.


## Authentication

Every endpoint under `ACCOUNT_URL/api/customers/realms/{realm_uid}/` answers on behalf of an end user of the realm, so each call needs a credential for that user. The only exception is [OTP code verification](#otp-code-verification).

The realm accepts two credentials:

- **OAuth2 access token**, in the `Authorization: Bearer` header. It takes precedence: when the request carries a recognized access token, the session cookie is not evaluated.
- **Session cookie** of the user in the realm. It is used when the request does not carry a recognized access token. It is the natural option when your application runs inside a Modyo site, because the browser sends it on its own.

Both resolve to the same user and grant access to the same endpoints. Choose the access token when your application lives outside the account domains, for example a mobile application or a front end on another domain.

### Get an access token

Each realm exposes its own OAuth2 server:

| Endpoint | What it is for |
|----------|----------------|
| `ACCOUNT_URL/realms/{realm_uid}/oauth/authorize` | Authorizes the user and returns the code. |
| `ACCOUNT_URL/realms/{realm_uid}/oauth/token` | Exchanges the code for the access token. |
| `ACCOUNT_URL/realms/{realm_uid}/oauth/revoke` | Invalidates an already issued token. |

The only supported flow is `authorization_code`. The realm does not issue tokens with `client_credentials`, `password` or `implicit`, and it does not deliver refresh tokens either.

To start you need an OAuth client of the realm, created as described in [OAuth client](/en/platform/customers/settings.html#oauth-client). Clicking the client name shows its **UID** and its **Secret**, which are the `client_id` and the `client_secret` of the flow, together with the ready-made authorization URL in **Client Web** and the realm endpoints ready to copy in **Client Mobile**.

1. Send the user to `ACCOUNT_URL/realms/{realm_uid}/oauth/authorize` with the `response_type=code`, `client_id` and `redirect_uri` parameters and, if you need them, `scope` and `state`.
2. If the user does not have a session in the realm yet, Modyo sends them to the login screen and resumes the authorization when they finish. There is no consent screen: as soon as there is a session, Modyo redirects to your **Redirect URI** with the `code` parameter.
3. Exchange the code at the token endpoint. The code lives ten minutes and works only once.
4. Use the `access_token` from the response in the `Authorization` header of your calls.

The code exchange looks like this:

```shell
curl -X POST "ACCOUNT_URL/realms/{realm_uid}/oauth/token" \
  -d "grant_type=authorization_code" \
  -d "code=THE_CODE" \
  -d "client_id=THE_CLIENT_UID" \
  -d "client_secret=THE_CLIENT_SECRET" \
  -d "redirect_uri=YOUR_REDIRECT_URI"
```

And an already authenticated call, like this:

```shell
curl -X GET "ACCOUNT_URL/api/customers/realms/{realm_uid}/me" \
  -H "Authorization: Bearer THE_ACCESS_TOKEN"
```

The realm recognizes `public` as the default scope and `admin` as the only optional scope. The `scope` you request must be among those values and, if the OAuth client defines **Scopes**, within its own as well; otherwise the authorization fails before delivering the code.

Public clients, such as a mobile application or a front end without a backend, can use PKCE: if you send `code_challenge` and `code_challenge_method` in the authorization step, you must send the matching `code_verifier` when exchanging the code.

:::warning Attention
The OAuth client belongs to the realm where you created it and can only authorize users of that same realm. If your account has several realms, you need one client for each one.
:::

:::warning Attention
The access token does not carry an expiration of its own, but that does not make it eternal: it is tied to the session of the user who authorized the flow. When that session expires because of the realm session expiration policy, when the user logs out, or when their sessions are revoked from the panel, the token stops working. While it keeps being used, the session renews itself before expiring, so a token in continuous use does not fall on its own.
:::

### Authentication errors

Every Customers API endpoint shares these error bodies:

| Code | Body | When it happens |
|------|------|-----------------|
| `401` | <code v-pre>{"error":{"user_session":"user not found"}}</code> | The request carries no usable credentials, the access token does not match a user of the realm, or the user is inactive. |
| `401` | <code v-pre>{"error":{"grant_expired":"session expired"}}</code> | The credential identifies a user, but the session behind it expired or was revoked. |
| `404` | <code v-pre>{}</code> | The `realm_uid` in the URL does not match any active realm of the account. |

:::tip Tip
Telling the two `401` apart saves you debugging time. `user_session` means that no usable credential ever arrived, so check the `Authorization` header or the cookie. `grant_expired` means that the credential was correct and what ran out was the session, so what you need is to authenticate the user again instead of retrying.
:::

## Customer APIs

Access the Customers API to manage realms and users through the URL `ACCOUNT_URL/api/customers/docs`. Examples of endpoints:

- **Notifications**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/notifications`
- **User Information**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/me`
- **Events**: `ACCOUNT_URL/api/customers/realms/{realm_uid}/events`


### Delegated tokens

By enabling the [**Show delegation information**](/en/platform/core/integrations/identity-providers) option in your identity providers, using the API `account_url/api/customers/realms/{realm_uid}/me`, you'll get a JSON with added information about delegated tokens similar to this:

If you enable the [**Show delegation information**](/en/platform/core/integrations/identity-providers) option in identity providers, the `account_url/api/customers/realms/{realm_uid}/me` endpoint will include a JSON with information about delegated tokens:


``curl -X GET test.modyo.com/api/customers/realms/miRealm/me``

```json
{
  "avatar": {
    "id": 100,
    "file_name": "user_avatar.png",
    "url_original": "/user_avatar_original.png",
    "url_small": "/user_avatar_small.png",
    "url_medium": "/user_avatar_medium.png"
  },
  "id": 2332,
  "external_id": "11111111-1",
  "name": "Clifton Feil",
  "first_name": "Clifton",
  "last_name": "Feil",
  "second_last_name": "Smith",
  "email": "test.user@modyo.com",
  "username": "test.user",
  ...
  ...
   "delegated_token":{
      "uuid":"af57d947-69dc-4ed7-b5af-418c957d827f",
      "access_token":"TOKEN",
      "access_token_expires_in":300,
      "access_token_expires_in_datetime":"2021-04-15T21:42:55.995+00:00"
   }
```

:::tip Tip
If you do not have the **Show delegation information** option enabled, null (void) will be displayed.
:::

### Update user information

With `PUT ACCOUNT_URL/api/customers/realms/{realm_uid}/me` the session user updates their own data. Besides the profile attributes, the body accepts `custom_fields` as an array of `key` and `value` pairs.

:::warning Attention
Custom fields that do not have **Visible to front end users** and **Editable by front end users** checked in the [realm settings](/en/platform/customers/settings.html#custom-fields) are silently discarded: the response is `200`, the rest of the attributes are saved and those fields keep their previous value, with no error to signal it.
:::

## Origination submissions

### Get a submission

`GET ACCOUNT_URL/api/customers/realms/{realm_uid}/submissions/{uuid}`

Returns the [origination submission](/en/platform/customers/origination.html#submission-management) identified by `uuid`, as long as it belongs to the session user. If the identifier does not exist or the submission belongs to another user, the endpoint returns `404`.

The body carries the following attributes:

| Attribute | Description |
|-----------|-------------|
| `id`, `uuid` | Submission identifiers. |
| `status` | `not_started`, `pending`, `completed` or `canceled`. |
| `progress` | Percentage of completed tasks, as text. For example, `25%`. |
| `due` | Ready-to-display text with the deadline and its status. |
| `due_deadline_at` | Raw deadline date and time. It is `null` when the origination has no deadline configured or when the submission has not started, is completed or is canceled. |
| `due_label` | Label that replaces the date when there is no deadline, such as `Not started` or `--`. It is `null` when `due_deadline_at` carries a value. |
| `due_status_label` | Deadline status label in parentheses, such as `(On track)`, `(Due soon)` or `(Overdue)`. It is `null` when the submission is not pending. |
| `due_extension_days` | Extension days granted to the deadline, or `null` if the origination has no deadline configured. |
| `created_at`, `updated_at`, `started_at` | Creation, last update and start dates of the submission. |
| `origination_name`, `origination_uuid` | Name and identifier of the origination. |
| `cancellation_reason` | Cancellation reason entered when the submission was canceled, or `null`. |
| `user` | Owner of the submission, with `id`, `uuid`, `name`, `first_name` and `last_name`. |
| `assignee` | Assigned admin or group, or `null` if the submission is not assigned. |
| `tasks` | Array with the responses to the origination tasks. |

:::tip Tip
`due`, `due_label` and `due_status_label` are texts meant to be displayed as they arrive. To make decisions in your code use `status` and `due_deadline_at`.
:::

#### The assignee object

Up to version 10.1, `assignee` was a flat object with the assigned admin data: `id`, `uuid`, `name`, `first_name` and `last_name`. From 10.2 a submission can be assigned to a whole group or to an admin picked inside a group, as described in [Assign submission](/en/platform/customers/origination.html#assign-submission), so `assignee` adds the `type` attribute and the rest of its content changes according to that value:

| `type` | Attributes |
|--------|------------|
| `group` | `id` and `name` of the assigned group, and `label` with the group name. It does not carry `uuid`, `first_name` or `last_name`. |
| `user_in_group` | `id`, `uuid`, `name`, `first_name` and `last_name` of the admin, `group_id` and `group_name` of the group they were picked from, and `label` with the format `Admin name (Group name)`. |
| `user` | `id`, `uuid`, `name`, `first_name` and `last_name` of the admin, and `label` with their name. |

```json
{
  "assignee": {
    "type": "group",
    "id": 14,
    "name": "Account managers",
    "label": "Account managers"
  }
}
```

:::warning Attention
If your application reads `assignee.uuid` without checking `type`, it breaks when the submission is assigned to a group: that variant does not include `uuid` and its `id` belongs to the group, not to an admin. Always check `assignee.type` before reading the rest of the attributes, and use `assignee.label` when you only need to display the assignee.
:::

#### The task responses

Each element of `tasks` carries `task`, with the `uid`, `name`, `type` and `step_name` of the task; `status`, with `not_started`, `pending` or `completed`; `user_id`, and the assignee data of that task in `assignee_id`, `assignee_group_id`, `assignee_context_group_id` and `assignee_label`. Input tasks add `fields` with the user answers, and pending review tasks add `content`. Task responses whose task no longer exists in the origination are not included in the array.

:::warning Attention
Pending review tasks stopped returning the boolean `completed` key in 10.2. To know whether the review is finished, compare `status` with `completed`.
:::

## OTP code verification

`POST ACCOUNT_URL/api/customers/realms/{realm_uid}/verify_otp_code`

Verifies the one-time code of [Soft login](/en/platform/customers/settings.html#soft-login). It is the only Customers API endpoint that does not require an active session. The body carries `identifier`, with the username, and `code`, with the received code.

| Code | Meaning |
|------|---------|
| `200` | The code is valid. The body arrives as an empty object. |
| `409` | The code is not valid or already expired. |
| `429` | The maximum of five failed attempts was exceeded. New in 10.2. |

Both `409` and `429` carry the `errors` array with a ready-to-display text:

```json
{
  "errors": ["You have exceeded the maximum number of attempts."]
}
```

:::warning Attention
After five failed attempts the endpoint responds `429` even when the code sent is the correct one, because the validation stops at the attempt count before comparing the code. Treat `429` as a case apart from `409`: the user cannot keep retrying and the only way out is to request a new code, which resets the counter.
:::

The code stops being valid once the time set in **OTP validity duration (in minutes)** of the realm goes by, five minutes by default. Check [Soft login](/en/platform/customers/settings.html#soft-login) for the details of that setting.

## Submission attachments

File questions of an origination receive their attachments through these two endpoints. Both require an active session, always work on the files of the session user, and do not appear in the interactive reference at `ACCOUNT_URL/api/customers/docs`.

### Upload a file

`POST ACCOUNT_URL/api/customers/realms/{realm_uid}/private_upload/answer`

Send a `multipart/form-data` request with these parameters:

- `file`: the file to upload. It is required.
- `question_id`: identifier of the file question the attachment belongs to. It is optional.

With `200`, the body describes the stored file:

```json
{
  "id": 431,
  "uuid": "586e591c-1f07-4f6d-b886-a66fea953afe",
  "name": "receipt.pdf",
  "size": 60548,
  "url": "/uploads/586e591c-1f07-4f6d-b886-a66fea953afe/original/receipt.pdf"
}
```

The file is stored as private and associated with the session user. Use the numeric `id` as the value of the answer to the file question, and the `uuid` to delete the attachment.

| Code | Meaning |
|------|---------|
| `401` | There is no active session. |
| `404` | The `question_id` sent does not match any file question. |
| `422` | The file did not pass the validations. |

The `422` body carries the `errors` array with one text per rejection reason, prefixed with the file name. A file is rejected when it is missing, when its extension is not allowed on the platform, when its content does not match the declared extension, or when it exceeds the maximum size allowed on your account.

### Delete a file

`DELETE ACCOUNT_URL/api/customers/realms/{realm_uid}/private_upload/answer/{uuid}`

Deletes the attachment identified by `uuid`. With `200` the body arrives empty.

| Code | Meaning |
|------|---------|
| `401` | There is no active session. |
| `404` | There is no attachment with that `uuid` among the files of the session user. |

:::warning Attention
The deletion is immediate and cannot be undone. If the attachment was already associated with the answer to a question, that answer is left without a file.
:::

## Zendesk API

With these endpoints you will be able to obtain the tokens needed for an integration with Modyo and Zendesk.

The only requisite is to have an integration with Zendesk ready before using these APIs.

### Zendesk token

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_token`.

### Zendesk SSO URL

`test.modyo.com/api/customers/realms/<realm_uid>/integrations/zendesk_sso_url`

Make sure to replace the URL with that of your site and `<realm_uid>`by the Identifier of your realm, located in the realms list.

