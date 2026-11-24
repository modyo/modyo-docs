---
search: true
---

# Digital Factory

The Digital Factory dashboard displays metrics about team productivity and content creation flow.

### Key metrics

Five counters summarizing team activity across the four resource types the dashboard measures: entries, pages, widgets, and templates.

- **Created**: new elements of any of those four types
- **Edited**: saved modifications
- **Sent to Review**: elements that entered the approval flow
- **Approved**: elements approved and ready to publish
- **Published**: elements that went to production

Each counter includes a trend indicator comparing with the previous period.

:::tip Tip
The counters don't tell resource types apart: **Created** goes up whether the team created an entry, a page, a widget, or a template. To see where the work is concentrated, look at the **Activity by Resource** chart.
:::

### Available filters

- The date range selector
- **App**, listing the account's active apps
- **Space**, listing the account's spaces

Both dropdowns start on **All**.

:::warning Warning
**App** and **Space** add up, they don't intersect. When you pick an app, the dashboard keeps counting entry activity from every space in the account; when you pick a space, it keeps counting page, widget, and template activity from every app. And if you pick an app and a space at the same time, you get the sum of both, never the intersection.
:::

### Created vs published resources

Line chart comparing the volume of content created against published over time, allowing identification of potential bottlenecks in the editorial flow.

### Activity by User

Heat map crossing administrators with the five workflow states: **Created**, **Edited**, **Sent to Review**, **Approved**, and **Published**. Each cell gets more intense the more events that administrator has in that state.

The panel shows at most the 20 administrators with the most activity in the period, and each row is labeled only with the administrator's first name.

:::tip Tip
If two people on your team share a first name, you'll see two rows with the same label. And if more than 20 administrators record activity in the period, the least active ones fall outside the map: narrow the date range to see them.
:::

### Activity by Resource

Bar chart comparing the total events of the four resource types the dashboard measures:

- **Entries**: the entries in your spaces
- **Layouts**: the pages of your apps
- **Widgets**: your widget definitions
- **Templates**: your apps' templates

Each bar adds up the five workflow states for that resource type, so the chart tells you where the team's work is concentrated, not what stage it's in.

:::warning Warning
App navigation is not measured in this dashboard, and neither are assets or anything else outside those four types: their changes show up neither in the bars nor in the top counters.
:::