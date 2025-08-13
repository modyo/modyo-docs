---
search: true
---

# Release Notes

## 10.1


### 10.1.1 - July 23, 2025

<Badge text="Customers" type="customers" vertical="middle"/>

* Visual improvement for conditional flow editing
* Fixes scroll issue in origination builder

<Badge text="Channels" type="channels" vertical="middle"/>

* Adds editing of start, summary, and completion views on origination pages
* Improvement in condition evaluation during submission completion
* Fixes value returned by checkbox field that now returns an array with selected values


### 10.1.0 - July 3, 2025

<Badge text="Core" type="core" vertical="middle"/>

* Adds customizable role creation option
* Security, performance, and dependency improvements

<Badge text="Channels" type="channels" vertical="middle"/>

* Draft/published page check in preview is now persistent across navigation

<Badge text="Customers" type="customers" vertical="middle"/>

* Adds new origination module activatable via plan with the following features:
  * Conditional flows
  * Versioning
  * Forms
  * Code snippets
  * Validations
  * Agent view
  * Flow invitations
  * Flow customization
  * Origination API
  * Liquid drops for access from site views
* Webhooks for user events (Breaking change: this change requires review prior to version upload)
* Adds session expiration policy at realm level
* Adds option to customize username input for login
* Adds new field types for forms
* Adds datasets at realm level that can be used in forms and originations
* Transforms user events (Breaking change: this change requires review prior to version upload)
* Unifies identity providers with integrations into a single module called "integrations."
