---
search: true
---

# Consent

The Consent dashboard shows how the holders of a realm decide on the published consent definitions, how many have a consent that is no longer current, and how rights requests progress.

This dashboard only appears if the account's plan includes the [Consent](/en/platform/customers/consent.html) module, and it requires the **View Consent Dashboards** permission, which is part of **Admin Insights**. Only realms in production with at least one published definition are listed.

### Available filters

- **Realm**: The realm being analyzed.
- **Definition**: Limits the metrics to one published consent definition.
- **Date range**: The period for the indicators and charts. When you open the dashboard, the preselected range is **Last 3 months**.

### Main Indicators

- **Consents granted**: Grant decisions recorded in the period.
- **Consents declined**: Decline decisions recorded in the period.
- **Consents revoked**: Consent withdrawals recorded in the period.
- **Holders with gaps**: Holders whose latest decision on a definition is not current.

### Consents per Week

Chart of the consents granted and revoked in each week of the period.

### Compliance by Definition

Table with the current status of the holders of each published definition and its **Compliance** percentage. The statuses are:

- **Compliant**: The holder has a current agreement with the current version.
- **Outdated**: The holder decided on a previous version and a material change was published.
- **Expired**: The consent's validity has ended.
- **Declined**: The holder did not grant the consent.
- **Revoked**: The holder withdrew the consent.

:::tip Metrics that do not depend on the period
**Compliance by definition** and **Holders with gaps** show the current status of holders, regardless of the selected date range. Each holder with gaps is counted only once, by their most severe gap.
:::

### Rights Requests by Type

Table with the rights request items received in the period for each right type, with the number **Received**, **Resolved**, and **Overdue**.
