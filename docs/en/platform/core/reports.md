---
search: true
---

# Reports and Exports

Several screens in the administration panel let you take their data to a file, so you can analyze it outside Modyo or load it into your own systems. They all use the same mechanism: you pick the rows, you pick the format, and the platform generates the file in the background so you can download it when it is ready.

## What you can export

| Report | Where you request it |
| --- | --- |
| [Activity logs](/en/platform/core/activity-logs.html) | **Settings** > **Activity logs** |
| Team members | **Settings** > [**Team**](/en/platform/core/roles.html) |
| Realm [users](/en/platform/customers/users.html) | **Users**, inside the realm |
| [Form](/en/platform/customers/forms.html) responses | **Forms**, on the form's responses screen |
| Realm orders | [**Payments**](/en/platform/customers/payments.html), inside the realm |

The team members export is available as of Modyo 10.2.

## Generate a report

1. Open the list you want to export and apply the filters you need. The report respects the filters you have set on screen.
2. Check the box on the rows you want to include. Checking the box in the header selects the rows on the page; to include every result of the filter, use the link that appears above the table to extend the selection to the total.
3. Click **Export**, below the list. On screens with more than one bulk action, the option is inside **Bulk Actions**.
4. In the **Export Data** window, choose the format: **Excel** (XLSX file, preselected) or **CSV**.
5. Click **Export**.

When you export form responses, the window also includes the **Start date** field, in yyyy-mm-dd format. If you fill it in, the file only brings the responses created after that date.

:::tip Tip
If your access to the realm is restricted by segments, the users report only includes the users within your scope. Learn more in [Restrict scope with segments](/en/platform/customers/settings.html#restrict-scope-with-segments).
:::

## While the report is being generated

Generation is asynchronous: the platform queues the job and the window keeps checking the status every two seconds until the file is available. While that happens, the window only offers the **Cancel reports in progress** button and cannot be closed.

When the file is ready you see the notice "Your file is ready to download." and the **Download** button appears in the window.

A report goes through these statuses:

| Status | What it means |
| --- | --- |
| Pending | The job is queued or writing rows. |
| Ready | The file was generated and can be downloaded. |
| With error | Generation failed and the window shows the details of the problem. |
| Canceled | You requested the cancellation and the platform is stopping the job. |
| Archived | The cancellation finished. The report is closed and has no file. |

There can only be one report of the same type at a time. If you request a new one while another is pending, or while there is a canceled one that the platform has not closed yet, the request is rejected with the message "There is already a report in progress". The cancellation button, in turn, shows the notice "There is currently a report in progress. Please wait for it to finish".

:::warning Attention
If you don't see an immediate result, do not launch the export again. The file is being generated in the background and a second attempt of the same type will be rejected until the first one finishes or is canceled.
:::

## Cancel a report in progress

As of Modyo 10.2 you can stop an export that is already running:

1. With the report in progress, click **Cancel reports in progress**.
2. You see the message "The reports were sent to cancel" and the button becomes **Canceling reports**, disabled, with the notice "There is currently a report in the process of cancellation. Please wait for it to be cancelled".
3. The job stops at the next block of rows it was going to write, so the interruption is not instantaneous: it depends on the size of the list.
4. When the cancellation is confirmed, the report is archived and the block is released, so you can request a new one of the same type.

If the cancellation is not confirmed within the following 15 minutes, the platform archives the report anyway and releases the block. If there is no export running when you request the cancellation, the answer is "There are no reports to cancel".

:::warning Attention
A canceled report leaves no downloadable file. If you still need the data, launch the export again from the list.
:::

## Download the file

The **Download** button opens a signed, temporary link that expires five minutes after it appears. If you let that time pass, the link stops working and you have to generate the report again.

:::tip Tip
Download the file as soon as you see the **Download** button. Saving the link for later or sharing it with someone else does not work.
:::

## Columns of the team members report

The **Team** report brings one row per member included in the selection, with the following columns:

| Column | Content |
| --- | --- |
| **ID** | Identifier of the member within the platform. |
| **UUID** | Unique identifier of the member. |
| **External ID** | Identifier of the member in the system it was provisioned from, if it has one. |
| **Email** | Email the member uses to sign in to the platform. |
| **Username** | Username of the member. |
| **First name** | Given name. |
| **Name** | Full name, as the platform shows it. |
| **Last Name** | Last name of the member. |
| **Active** | Indicates whether the member is enabled to sign in. |
| **Created at** | Date the member was created. |
| **Last Update** | Date of the last change to their data. |
| **Last Login** | Date of the previous sign-in. |
| **Logins Count** | Number of accumulated sign-ins. |
| **Current Login** | Date of the current sign-in. |
| **Account owner** | Indicates whether the member is the owner of the account. |
| **Applications access** | Applications the member has access to. For the account owner it says **All**. |
| **Roles** | Roles assigned to the member. For the account owner it says **Account owner**. |
| **Groups** | Groups the member belongs to. |

Dates and times come out in the account's time zone, with the YYYY-MM-DD HH:MM:SS format.
