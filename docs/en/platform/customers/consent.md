---
search: true
---

# Consent

**Consent** is the Modyo Customers module for requesting, recording, and managing the consents that the users of a realm give over the processing of their personal data, and for handling the requests they submit to exercise their rights over that data.

The module covers the full cycle: the realm's catalog of data and purposes, the legal documents that back each consent, capture in forms, originations, and sign up, the privacy center where users review and change their decisions, the evidence of each decision, and the rights requests inbox.

This feature is not included by default in all Modyo plans. To enable it, contact the Modyo team. If the account's plan does not include it, the consent menu, permissions, roles, and fields are not shown in the platform.

:::tip Each organization's responsibility
Modyo provides the tools to manage consents and rights. Defining the legal bases, response deadlines, texts, and documents required by the applicable law is the responsibility of each organization, with its own legal counsel.
:::

## Key Concepts

| Concept | What it represents |
|---|---|
| **Holder** | The realm user who owns the personal data. |
| **Data category** | A type of personal data the realm collects, such as email or income, with its risk level and whether it is sensitive. |
| **Data use** | What the data is used for, with its legal basis and retention period. In a consent definition, each data use is a **purpose**. |
| **Legal basis** | The legal ground for a data use: consent, contract, legal obligation, legitimate interest, or other. |
| **Scope** | A product or branch to which an authorization can be limited. |
| **Legal document** | A versioned privacy policy, terms of use, or specific notice that backs a consent. |
| **Consent definition** | What the realm asks the holder for: purposes, data, texts, documents, and validity. It is published in versions. |
| **Agreement** | The current state of what a holder decided about each purpose of a definition. |
| **Consent action** | Each decision of the holder (grant, decline, or revoke), recorded immutably as evidence. |
| **Rights request** | What the holder asks for regarding their data, such as access, correction, or deletion. |

Data categories and data uses follow the open [Fideslang](https://ethyca.github.io/fideslang/) taxonomy. You can choose a taxonomy node or create your own extension when no node describes your case.

## Configure the Catalog

The catalog holds the pieces used to build definitions. To manage it:

- In the side menu, go to **Customers** > **Realms** and select the realm.
- Go to **Realm Settings** > **Consent**.

The settings have the sections **Data categories**, **Data uses**, **Legal bases**, **Scopes**, and **Rights requests**. The last one is described in [Configure right types](#configure-right-types).

In every section, the **Key** cannot be changed after the record is created. A record already used in a definition is not deleted: it is marked as **Obsolete**, is no longer offered in new definitions, and keeps its history.

### Data categories

They describe the personal data the realm collects. Each category has:

- **Key** and **Label**: The Fideslang node or extension, and the visible name.
- **Risk level**: **Low**, **Medium**, or **High**.
- **Sensitive data**: Marks the data the law treats as sensitive, such as health or biometric data.

:::warning Sensitive data
A definition that includes at least one sensitive category is marked as **sensitive**, is presented as its own clause, and can only be captured from a signed-in user.
:::

### Data uses

They describe what the data is used for. Each use has:

- **Key** and **Label**: The Fideslang node or extension, and the visible name.
- **Legal basis**: One of the realm's legal bases.
- **Retention**: The months the data is kept, or **Indefinite**.

Only data uses whose legal basis is of type **Consent** can be used as purposes in a definition.

### Legal bases

Each legal basis has a **Title**, a **Description**, and a **Type**: **Consent**, **Contract**, **Legal obligation**, **Legitimate interest**, or **Other**.

### Scopes

Scopes let you limit a definition to products or branches. Each scope has a **Key**, a **Title**, and a **Type**: **Product** or **Branch**.

## Legal Documents

Legal documents back consents and are presented to the holder next to each definition. To create one:

- Inside the realm, go to **Consent** > **Documents**.
- Click the button to create a document and fill in the **Title**, **Code**, **Type**, and **Format**.
- Write the content on the document page and publish it.

The available types are **Privacy policy**, **Terms of use**, **Specific notice**, and **Other**. The format can be **Text (editor)** or **PDF file**, and it cannot be changed after the document is created. The **Summary** is a short text shown next to the document link in forms.

Documents are published in versions. Their status can be **Draft**, **Published**, or **Pending changes**, when there is a published version and a draft with unpublished changes. Each published version is recorded with its content and a digital fingerprint (hash), so you can later prove which text the holder saw.

:::warning Linked documents
A document linked to a consent definition cannot be unpublished or deleted.
:::

The holder always sees the current published version of the document, in a popup or in a reading view from their profile, and can download it as a PDF. The evidence of each decision records which version was presented.

## Consent Definitions

A definition describes what the realm asks the holder for. To create one:

- Inside the realm, go to **Consent** > **Definitions**.
- Click **New definition**, enter the code and internal name, and click **Create definition**.
- Complete the definition tab by tab. A **What is missing** indicator shows what still prevents publishing it.

### Definition tabs

- **Basics**: The **Code**, the internal **Name**, and the **Description**.
- **Purpose & data**: The purposes being requested. Each purpose is a data use with a consent legal basis, with the data categories it uses and the **Mandatory purpose** option. At least one purpose with its categories is required.
- **Texts**: The **Title** of the check the holder sees and its description, with a **Preview of the check**.
- **Scopes**: The products or branches the definition is limited to.
- **Legal documents**: The documents presented next to the check.
- **Validity & presentation**: How long the consent lasts and how it is presented to someone who already decided.

### Granular selection

With **Granular selection**, the holder accepts or declines each purpose separately, and mandatory purposes must be accepted to continue. Without it, a single check grants every purpose, so they must all be mandatory or all optional.

### Validity and presentation

- **Validity**: The months the consent lasts from the moment it is granted, or **No expiration**. When it ends, the agreement becomes **Expired**.
- **Re-presentation**: What a holder who already has a current agreement on the definition sees in forms and originations: **Ask again** shows the check again, **Notice** shows a notice instead, and **Hide** shows nothing.
- **Required to use the system**: Indicates that the consent is needed to use the service. It is only available when every purpose is mandatory. In the privacy center, the holder gets a warning before withdrawing it.
- **Consent mode**: In this version only **Express** consent is available: the holder actively checks the box.

### Publish a version

Definitions are published in versions. A definition's status can be **Draft**, **Published**, or **Pending changes**. The first published version cannot be modified: each later edit opens a new draft.

When you click **Publish**, the platform shows the **Changes since the published version** and proposes whether the change is material, based on the fields that changed. You must confirm the **Type of change**:

- **Material change**: Consent is requested again from holders in forms, originations, and the privacy center. Previous agreements become outdated.
- **Non-material change**: Existing consents remain valid with the new version.

If the platform proposes a material change and you choose to publish it as non-material, you must write a **Justification** explaining why holders do not need to consent again. The justification is recorded in the version.

## Capture Consent

A published definition can be presented in three places. In all of them, the holder sees the definition's title and description next to the check, with links to its legal documents.

### In forms

In the [forms](/en/platform/customers/forms.html) builder, add the **Consent** field from the **Consent** group and choose the **Consent definition**. The field can be **Required** or **Optional**. Each definition can be used only once in the same form.

If the form accepts submissions without a session, sensitive definitions appear disabled with the label **Requires signed-in users**. If a definition becomes sensitive after you add it, the form omits the question for visitors without a session and rejects an anonymous submission that includes it, without recording any decision.

### In originations

The Input tasks of [Origination](/en/platform/customers/origination.html) offer the same **Consent** field, with the same options as in forms.

### In sign up

In **Realm Settings** > **Custom fields**, create a field of type **Consent** and choose the definition. The check appears in the realm's sign up form. If you load the value through the API, it must be `0` or `1`.

### What is recorded

Each decision of the holder creates a **consent action** with its result (**Granted**, **Declined**, or **Revoked**), the definition version, the versions of the documents presented, the capture point, and the session data. The action cannot be modified or deleted, and it carries a SHA-256 fingerprint calculated over its content.

From the actions, the platform keeps the holder's **agreement** with each purpose, and records the events **Consent granted**, **Consent declined**, and **Consent revoked** in the user's activity. You can use these events in [segment](/en/platform/customers/segments.html) filters.

## Privacy Center

The privacy center is the profile view where the holder reviews what they authorized and exercises their rights. It is at the realm path `/profile/privacy` (see [Realm routes](/en/platform/customers/profile.html#realm-routes)) and has two tabs:

- **My consents**: One card per definition, with its status, the accepted purposes, and the legal documents.
- **My requests**: The holder's rights requests and the form to create a new one.

The status of each card can be **Active**, **Partial**, **Needs review**, **Expired**, **Declined**, or **Withdrawn**. From each card, the holder can:

- **Manage**: Change their decision. Mandatory purposes can only be withdrawn together.
- **Withdraw consent**: Remove every purpose of the definition. If the definition is required to use the system, the holder sees a warning before confirming.
- **Review and accept**: When a version with a material change was published, review the new version and decide again.

## Agreements

To review what holders decided, go to **Consent** > **Agreements** inside the realm. The list shows the user, the definition, the purpose, the **Status** (**Granted**, **Declined**, or **Revoked**), the dates, and the **Source**: **Form**, **Origination flow**, **Privacy center**, or **Sign up**.

In each user's record, the agreements tab shows one card per definition with what the user granted or declined for each purpose, its status (**Active**, **Partial**, **Expired**, **Revoked**, or **Declined**), and the **Valid until** date, along with the history of **Consent actions**.

## Evidence Log

The **Evidence log** is the immutable record of every consent action in the realm. It is in **Consent** > **Evidence log** and lets you search by user, by hash, and by data use.

The detail of each action shows:

- The **Presented version** of the definition and the **Anchor version**.
- The **Legal documents presented**, with their version.
- The **Capture metadata**: capture point, submission, session, and actor.
- The **Canonical payload** over which the fingerprint was calculated.
- The **Stored hash** and the **Recalculated hash**. If they match, the action shows **Hash verified**; if not, **Hash mismatch**, which indicates the record was altered outside the platform.

Form and origination submissions also show a **Consents** section, with the **View evidence** link for each decision captured in that submission.

## Rights Requests

Holders submit their requests from the privacy center, and the realm team handles them in an inbox with deadlines, assignment, and messages.

### Configure right types

In **Realm Settings** > **Consent** > **Rights requests**, create the right types required by your country's law with **New right type**. Each type has:

- **Name**, **Code**, and **Description**. The code cannot be changed after the type is created.
- **Response deadline** and **Unit**: **business days** or **calendar days**.
- **Extension (days)**: The additional days that can be granted once, in the same unit as the deadline. Zero means the type does not allow an extension.
- **Status**: Holders can only request active types.

Changes to a right type apply only to new requests.

:::warning Business days
The business day calculation excludes Saturdays and Sundays, but it does not yet consider holidays. If a legal deadline falls near a holiday, check the request's due date.
:::

In the same section, the **Rejections** block defines the **Control authority** and the **Text added to rejections**. That text is added to every response that denies a right, fully or partially, so the holder knows where and within what period to file a complaint.

### Submit a request

In **My requests**, the holder clicks **Exercise a right**, chooses one or more right types, and describes what they need. The request requires a signed-in session and is free of charge. When it is sent, the holder receives an email with the request number and the response deadline for each right.

### Handle a request

Inside the realm, go to **Consent** > **Rights requests**. The inbox shows each request with its number, requester, rights, status, assignee, and next due date, and lets you filter the **Overdue** ones.

In the request detail you can:

- **Take request** or **Assign** it to another administrator.
- Write **Messages** to the holder, or internal comments the holder does not see.
- **Extend deadline** for a right, only once and with a reason. The holder receives a notice with the new date.
- **Respond** to each right with an **Outcome**: **Granted**, **Partially granted**, or **Denied**. A response cannot be edited or deleted after it is sent.

The request status goes through **Received**, **In progress**, and **Closed**. The holder receives an email and a notification in their profile when the request is received, when the team writes to them, when a deadline is extended, and when a right is answered.

## Roles and Permissions

The module's permissions are granted in roles with realm scope, in the **Consent** and **Rights requests** groups:

| Permission | What it enables |
|---|---|
| **View Consent Catalog** | View data categories, data uses, legal bases, and scopes. |
| **Admin Consent Catalog** | Edit the catalog and the rights request settings. |
| **View Legal Documents** | View legal documents and their versions. |
| **Admin Legal Documents** | Create and edit document drafts. |
| **Publish Legal Documents** | Publish and unpublish document versions. |
| **View Consent Definitions** | View definitions and their versions. |
| **Admin Consent Definitions** | Create, edit, and delete definition drafts. |
| **Publish Consent Definitions** | Publish versions and confirm whether a change is material. |
| **View Agreements** | View agreements, the user's agreements tab, and the Evidence log. |
| **View Rights Requests** | View the inbox and the request detail. |
| **Manage Rights Requests** | Take, assign, write messages, and extend deadlines. |
| **Resolve Rights Requests** | Answer rights and close the request. |

The platform includes two default roles with realm scope:

- **Privacy Manager**: Configures the catalog, writes and publishes documents and definitions, and reviews agreements and requests.
- **Privacy Agent**: Handles the rights requests inbox and reviews users and agreements, without access to the catalog or to publishing.

You can combine permissions in a [custom role](/en/platform/core/roles.html#custom-roles). To separate responsibilities, the person who writes a definition should not be the one who publishes it.

Every administrative change to the catalog, documents, definitions, and requests is recorded in the [activity logs](/en/platform/core/activity-logs.html).

## Metrics

The [Consent](/en/platform/insights/consent.html) dashboard in Insights shows granted and revoked consents, compliance by definition, holders with gaps, and rights requests by type.
