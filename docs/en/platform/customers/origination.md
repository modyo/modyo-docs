---
search: true
---

# Origination

**Origination** is a tool designed to optimize and automate complex processes in various sectors, such as managing requests, approvals, or records requiring multiple parties' interaction. This feature allows users to create and manage collaborative workflows in which different actors can actively participate. Through **Origination**, it is possible to request and collect documentation and information between parties, facilitating the validation and progress of the process based on the requirements met.

One of Origination's main advantages is its ability to manage workflows in multiple steps, allowing each step to be verified before proceeding, ensuring the accuracy and compliance of each stage. In addition, Origination offers a secure and efficient environment, preventing the exchange of confidential information by insecure means, reducing the risk of errors, and ensuring data protection.

This functionality is not included by default in all Modyo plans. To activate it, it is necessary to contact the Modyo team to request its implementation.

Origination is designed for any organization that seeks to streamline complex processes, improve collaboration among those involved, and ensure that the workflow is managed in a structured and secure manner.

## Create a New Origination

To create a new origination, follow these steps:

- In the side menu, navigate to **Customers** > **Realms** and select the Realm you want to work in.
- Go to the **Origination** option.
- Click the **+ New origination** button.
- Assign a name to the origination.
- Click **Create** to finish and begin configuring the steps of the new origination flow.


## Origination Flows

Origination flows are composed of **Steps** and **Tasks**, which structure and define the actions needed to complete the process.

### Steps

Steps group tasks that are presented on the same screen. To proceed to the next step, the user must complete all assigned tasks.

#### Add steps

To add a step, press the **Add** button and designate the values:

- **Name**: The name that will be displayed in the user interface to identify the Step.
- **Identifier**: A unique value that will be included in the URL of the origination flow.

:::warning Attention
Each step must include at least one valid task to be saved.
:::

### Tasks

Tasks are the individual actions within each step. These tasks collect information, perform validations, or request specific actions from the user. Tasks are completed sequentially, and when validated, they allow you to move to the next step in the flow.

#### Add tasks

To add a new Task, press the **+ Add task** button, which will create a new task container. When creating a task, you must include its values:

- **Name**: The name of the task that will be visible to the user.
- **Identifier**: A unique identifier that will be included in the origination URL.
- **Description**: A short explanatory text about the task, which will be visible to the user.
- **Type**: Select the type of task based on the objectives of the flow.

#### Task types

The available task types are:

- **Input**: Request information or data entry from the user.
- **Validation**: Requires an administrator to validate the task before proceeding to the next step.
- **Signature**: Asks the user for a digital signature.
- **Pending review**: Pauses the process until an administrator authorizes progress to the next step.
- **Code snippet**: Allows adding custom code.
- **Origination process**: Calls another origination flow within this one.
- **Invitation**: Allows inviting other users to fill in necessary data in the flow.
- **Identity Verification**: Asks the user to verify their identity with document capture and biometrics through a provider.
- **Confirmation**: Asks the user to confirm the answers provided in previous Input tasks.

##### Task properties

In this section, you can edit the values of the selected task. You can find these values:

- **Name**: The name of the task that will be visible to the user.
- **Identifier**: A unique identifier that will be included in the origination URL.
- **Description**: A brief explanatory text about the task, which will be visible to the user.

:::warning Editing identifiers
When editing an already saved step, task, or field, the **Identifier** field appears locked with a padlock. To modify it, you must press the padlock and confirm the **Unlock Identifier field** warning: changing an identifier breaks references to it from external systems or through the Liquid SDK and, in the case of fields, submissions can no longer be searched by that field. The identifier is only generated automatically from the name during creation; when editing, changing the name doesn't modify it.
:::

### Input

In Input tasks, you can incorporate a wide variety of fields in your forms to customize the collection of data from your users.

#### Add fields

To include a new field, you must select a task and select the **Add** tab.

Origination supports all types of input available in forms. You can see the full list of types in the [forms documentation](https://docs.modyo.com/en/platform/customers/forms#add)

In addition, Input tasks offer three field types that **exist only in Origination** and are not available in forms: **Document**, **Identity document**, and **Selfie**. All three are described in [Specialized file upload fields](/en/platform/customers/origination.html#specialized-file-upload-fields).


#### Edit fields

When selecting a field, you can modify its properties by going to the **Edit** tab. There you will find different properties depending on the characteristics of the selected field. The main properties are:

- **Field title**: This is the name of the field that will be displayed in the user interface. This should be clear and descriptive to facilitate interaction.
- **Required**: Determines if the field is mandatory or not. If activated, the user must complete it before continuing with the flow.
- **Field instructions**: Provides additional guidance for the user to understand how to complete the field. These instructions are displayed directly on the interface, below the field.
- **Add instructions pop-up field**: Adds a help icon next to the field. When you click on this icon, a message appears with additional information or useful tips related to the field.
- **Options**: Additional properties according to the type of field selected.

#### Specialized file upload fields

Input tasks include three field types designed to collect documents and images with automatic processing. All three are available only inside an Input task of an origination.

| Field | What it is for |
|---|---|
| **Document** | Uploads a file and, optionally, extracts its text. |
| **Identity document** | Captures an ID card on both sides or a passport, and extracts its data. |
| **Selfie** | Captures a photo of the face and, optionally, runs a liveness check. |

All three are added from the **Add** tab of the builder, like any other field, and share the common properties described in [Edit fields](/en/platform/customers/origination.html#edit-fields).

##### The identity verification integration

Data extraction and the liveness check depend on the **Amazon Rekognition Face Liveness** integration, in the **Identity Verification** category. It is installed and enabled per realm, in **Realm settings** → **Integrations**.

If the integration is not enabled, the three fields still appear in the builder and still work for the end user as a regular file upload. The only difference is that the extraction and liveness checkboxes appear disabled, with the message **To enable this option, set up the Amazon Rekognition identity verification integration for this realm.** Any value you had already saved is not lost.

:::tip Integration setup
To edit an integration you first have to disable it: while it is enabled, editing is not available. Two integration settings change how these fields behave: the **Confidence Threshold (%)**, which decides when a liveness check passes or is rejected (90% by default), and the **Cognito Identity Pool ID**, without which the liveness challenge cannot start.
:::

##### Document

Uploads a file and, if you enable it, extracts its text automatically. It has two specific options:

- **Allowed Extensions**: A comma-separated list of the extensions you accept in this field, for example `pdf, doc, txt`. If you leave it empty, any extension allowed by the platform is accepted. The extensions you type must be allowed at the platform level; otherwise the field is not saved and the message **These extensions are not allowed** appears.
- **Extract document data (OCR)**: Enables text extraction from the file. It is off by default.

The field accepts a single file, with the maximum size defined in the platform (10 MB by default). The end user sees the same upload area as in the **File** field, with the list of allowed formats and the maximum size hint.

Extraction works with `jpg`, `jpeg`, `png`, `tiff`, `tif`, `pdf`, and `docx` files. Any other extension can still be uploaded, but it ends up with the **Unsupported file type** status: no text is extracted from it. This is worth keeping in mind with formats that look obvious and are not, such as `doc`, `txt`, or `csv`.

Extraction goes through the **Pending**, **Processing**, **Completed**, **Failed**, and **Unsupported file type** statuses. If the user replaces the file, extraction restarts and the previous result is discarded.

##### Identity document

Captures an identity document and extracts its data. It has three specific options:

- **Accepted document types**: Checkboxes for **ID card (front and back photos)** and **Passport (single photo)**. You cannot leave both unchecked. A field created from the builder starts with only the ID card checked; one created through the API without specifying types accepts both.
- **Default country**: Sets the country of the document. If you leave it as **The user selects the country**, the user picks the country when answering; if you choose one, the selector is not shown to them and the country is fixed.
- **Extract document data (OCR)**: Enables extraction of the document data. It is off by default.

The field accepts `jpg`, `jpeg`, and `png` images, and that format is not configurable.

When answering, the user chooses between **Use camera** and **Upload file**. With an ID card, the flow has two steps: first the **Front side** and then the **Back side**, with a framing guide for each. When the first side is done, the screen returns to the start with the title of the remaining side, and the user has to press **Use camera** or **Upload file** again; the camera does not open on its own. With a passport, a single photo of the data page is requested. The **Redo front** and **Redo back** options delete the image already uploaded, not just the preview.

The country has a concrete effect on extraction: it is used to interpret the dates on the document. If the country is not set and a date is ambiguous — for example `03/04/1990`, where both numbers could be month or day — the date is stored exactly as it came, without normalizing. So when you know your users' country in advance, it is worth fixing it.

Extraction goes through the **Pending**, **Processing**, **Completed**, and **Failed** statuses.

##### Selfie

Captures a photo of the user's face. It has a single specific option:

- **Face liveness check**: Adds a challenge that confirms there is a real person in front of the camera. It is off by default.

The field accepts `jpg`, `jpeg`, and `png` images, and that format is not configurable. The user can take the photo with the camera or upload a file; there is no way to restrict it to one path. The front camera is shown mirrored, and the image is saved exactly as it looks in the preview.

When the liveness check is enabled, its block appears **after** the user has captured or uploaded the selfie, with the **Start liveness check** button. Completing it is never mandatory: even if you mark the field as required, the only mandatory part is the photo.

When the challenge finishes, the user only sees that it was completed. The verdict is calculated after the submission is sent and is not shown to them. The possible statuses are **Pending**, **Processing**, **Verified**, **Rejected**, **Failed**, and **Skipped**.

:::warning What the selfie is compared against
The face comparison is made against the image captured by the liveness challenge itself, **not** against the identity document. It confirms that whoever submits the selfie is the same person who took the challenge, not that the selfie matches the holder of the document.
:::

If the user captures the selfie again, the previous check is discarded and they have to take it again.

##### Where the result is shown

The extraction status and the liveness check status **are not shown today on any administration screen**. The **Documents** tab of the submission lists the files of all three fields with their name, size, and thumbnail, and in the task detail the Identity document field shows the document type, the country, and the links to **Front side** and **Back side**; the Document and Selfie fields look the same as a File field.

The results are available for integration:

- In **Liquid templates**, the answer of a Document field returns the file, the extraction status, and the extracted text; the answer of a Selfie field returns the file, the liveness status, and the confidence level.
- In the **Admin API**, in addition to the above, the error code is exposed when extraction or the check fails.

:::tip Liveness check rejected with no reason
A **Rejected** check with no associated error code means the confidence level fell below the **Confidence Threshold (%)** configured in the integration. It is the most frequent case and does not indicate a technical failure.
:::

##### Use in conditional logic

All three fields can be used in the conditional logic of the origination, but only with the **has no value** and **has any value** operators. It is not possible to set conditions based on the content of the document, the country, or the result of the liveness check.

### Validation

The validation task requires manual review by the assigned agent. They must validate the data provided by the user to unlock the next task in the flow.
The task is refreshed every 5 seconds so that the end user knows if the task has been validated.

When configuring the task, you can define an **Assignee**: an administrator or a group of administrators responsible for the validations. When selecting a group, you can assign the whole group or a specific user within it. If you do not define an assignee, validations are assigned by default to the submission assignee.

Assigned administrators receive an email when a validation is pending and can also review it from the **My tasks** view in the main menu, filtering by the **Validation review** task type. The user receives an internal notification when their task is approved or rejected.

In a specific submission, you can reassign the validation from the **Validations** tab, once the user has completed the tasks to validate.

### Signature

The signature task allows for a simple signature with a checkbox or an advanced one when a digital signature provider is installed in the realm integrations.

### Pending Review

The pending review task pauses the origination process. It is used to trigger asynchronous processes, usually in external systems.
The task is refreshed every 5 seconds so that the end user knows if the task has been reviewed.

As with validation tasks, you can define an **Assignee** for the task: an administrator or a group of administrators. If you do not define one, the review is assigned by default to the submission assignee.

### Identity Verification

The Identity Verification task asks the user to verify their identity by capturing a selfie, their identity document, and liveness detection, through a verification provider.

To use this task, you must first enable an integration of the **Identity Verification** category in the [realm integrations](/en/platform/customers/settings.html#integrations), such as **Amazon Rekognition**.

When configuring the task, you define:

- **Provider**: The identity verification integration that will process the verification.
- **Features**: The verifications included in the task: **Selfie** (always required), **Document** (capture of the front and back of the identity document with data extraction), and **Liveness** (liveness detection).
- **Liveness Settings**: If you enabled Liveness, you can define the **Confidence Threshold** (from **Lenient** to **Strict**) and **Enable color challenge**, which displays colored lights during the verification and includes a photosensitivity warning for the user.

During the flow, the user captures their selfie and document guided by the interface; the platform validates the quality of the images, extracts the document data, and compares the face on the document with the selfie.

In the details of a submission, the **Identity Verification** tab shows the verification status, the **Face Match Score** and **Liveness Score**, the data extracted from the document, and the captured images.


### Code Snippet

**Code snippets** allow you to add custom blocks of code to origination flows. These blocks support **HTML, JavaScript, and CSS**, making it easy to create interactive components or customize the flow according to the user's needs.

**Code snippets** can:

- Adjust to any scenario within the origination flow.
- Deploy real-time data from the submission.
- Store and consume information relevant to the process.

#### Insert a Code Snippet

To add a **code snippet** to an origination task, follow these steps:

1. Create a new **Task** within a flow step.
2. Select the **Code snippet** task type.
3. Configure the properties of the task.

#### Code Snippet Properties

- **Task ID**: Unique identifier for the task. It is generated automatically when you save the task and allows you to access the data from the API.
- **Name**: Name of the task, visible to the user.
- **Identifier**: Unique value included in the origination URL.
- **Description**: Short explanatory text describing the task.
- **Complete the task using the API**: If checked, the continue action will be disabled by default for this task and will require the developer to report the completion status using the JavaScript API.


#### JavaScript API for Code Snippets

Modyo provides a JavaScript API for interacting with code snippets at run time.

#### Available methods

- **`getUrl()`**: Returns the URL of the current origination flow.
- **`enableButton()`**: Enables the task's action button and allows the user to continue with the flow.

#### JSON API for Code Snippets

Code Snippets can communicate with the origination API using data in **JSON** format.

To get data stored in the current submission, use the `getUrl()` method to build the request. To save information, a **POST request** must be made to the same URL.


#### JSON structure example

When you consume data from the JSON API, you will get an object with all the data stored in the current submission.

```json
{
  "submission": {
    "sequence_id": "12345",
    "fields": [
      {
        "answers": [
          {
            "question": {
              "label": "What's your name?"
            },
            "text_field": "Jorge Regula"
          }
        ]
      }
    ]
  },
  "task": {
    "task_id": "67890",
    "step": {
      "uid": "abcd1234"
    }
  },
  "page": {
    "name": "Origin Page"
  }
}
```

:::warning Attention
To store information, the data must use valid JSON format; format errors will not be processed.
:::

#### Using Liquid in code snippets

Code snippets can use Liquid objects to access internal submission data and personalize the user experience.

#### Code Snippets Example

In an origination flow, each response represents the ongoing process of a specific user.

You can learn more about [Liquid Objects](/en/platform/channels/liquid-markup/objects) in our documentation.

In this example, you can find the use of data access by Liquid Objects and interaction with JavaScript and JSON APIs. Remember to replace the `QUESTION_ID` value with the corresponding one in your submission.

``` html
<div class="form-group">
    <div class="form-group">
        <label for="productDropdown" class="form-label">Select a car <span class="req">*</span></label>
        <select class="form-select" id="productDropdown" disabled>
            <option value="" selected>Loading...</option>
        </select>
    </div>
    <div class="form-group">
        <label for="colorDropdown" class="form-label">Select your favorite color <span class="req">*</span></label>
        <select class="form-select" id="colorDropdown" disabled>
            <option value="" selected>Loading...</option>
        </select>
    </div>
	  <div class="form-group">
        <label for="yearInput" class="form-label">Year <span class="req">*</span></label>
        <input type="number" class="form-control" id="yearInput" placeholder="e.g., 2023">
    </div>
	  <div class="form-group">
        <label for="dateInput" class="form-label">Driver license expiration<span class="req">*</span></label>
        <input type="date" class="form-control" id="dateInput">
    </div>
	 <div class="form-group">
     <label for="extrasSelect" class="form-label">Select extras (multi-select)</label>
       <select class="form-select" id="extrasSelect" multiple>
         <option value="ac">Air Conditioning</option>
         <option value="gps">GPS</option>
         <option value="sunroof">Sunroof</option>
         <option value="leather_seats">Leather Seats</option>
       </select>
   </div>
</div>
<script>
    const staticProducts = [
        { id: 'ferrari', title: 'Ferrari' },
        { id: 'lamborghini', title: 'Lamborghini' },
        { id: 'maserati', title: 'Maserati' },
        { id: 'alfa_romeo', title: 'Alfa Romeo' },
        { id: 'fiat', title: 'Fiat' },
        { id: 'lancia', title: 'Lancia' },
        { id: 'pagani', title: 'Pagani' }
    ];

    const staticColors = [
	 { id: 'white', name: 'White' },
	{ id: 'red', name: 'Red' },
        { id: 'blue', name: 'Blue' },
        { id: 'black', name: 'Black' },
        { id: 'silver', name: 'Silver' },
        { id: 'green', name: 'Green' },
        { id: 'yellow', name: 'Yellow' }
    ];

    const productDropdown = document.getElementById('productDropdown');
    const colorDropdown = document.getElementById('colorDropdown');
	  const yearInput = document.getElementById('yearInput');
	  const dateInput = document.getElementById('dateInput');
	  const extrasSelect = document.getElementById('extrasSelect');

    async function initializeDropdowns() {
        const savedData = await getRequestJson();
        let selectedProductValue = null;
        let selectedColorValue = null;

        if (savedData?.application?.fields?.[0]?.answers) {
            const productAnswer = savedData.application.fields[0].answers.find(answer => answer.question.label === 'PRODUCT');
            selectedProductValue = productAnswer?.text_field;

            const colorAnswer = savedData.application.fields[0].answers.find(answer => answer.question.label === 'COLOR');
            selectedColorValue = colorAnswer?.text_field;
        }

        let productOptionsHtml = '<option value="">Select ...</option>';
        staticProducts.forEach(product => {
            productOptionsHtml += `<option value="${product.id}" ${selectedProductValue && product.id === selectedProductValue ? 'selected' : ''}>${product.title}</option>`;
        });
        productDropdown.innerHTML = productOptionsHtml;
        productDropdown.disabled = false;
        if (productDropdown.value) enableButton();

        let colorOptionsHtml = '<option value="">Select ...</option>';
        staticColors.forEach(color => {
            colorOptionsHtml += `<option value="${color.id}" ${selectedColorValue && color.id === selectedColorValue ? 'selected' : ''}>${color.name}</option>`;
        });
        colorDropdown.innerHTML = colorOptionsHtml;
        colorDropdown.disabled = false;
        if (colorDropdown.value && productDropdown.value) enableButton();
    }

    productDropdown.addEventListener('change', () => {
        if (productDropdown.value && colorDropdown.value) enableButton();
    });

    colorDropdown.addEventListener('change', () => {
        if (productDropdown.value && colorDropdown.value) enableButton();
    });

    async function getRequestJson() {
        try {
            const url = getUrl();
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Error in getRequestJson:", error);
            return null;
        }
    }

    async function sendData() {
			  const selectedExtras = Array.from(extrasSelect.selectedOptions).map(option => option.value);

        const jsonData = {
            "submission": {
                "fields": {
                    "car": productDropdown.value,
                    "color": colorDropdown.value,
		   "year": yearInput.value ? parseInt(yearInput.value, 10) : null,
		   "expiration": dateInput.value,
		   "extras": selectedExtras
                }
            }
        };
        return await postRequestJson(jsonData);
    }

    async function postRequestJson(content) {
        try {
            const response = await fetch(getUrl().concat(`?content=${encodeURIComponent(JSON.stringify(content))}`), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-CSRF-Token': document.querySelector('meta[name=csrf-token]').content }
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            await response.json();
        } catch (error) {
                console.error('Error:', error);
        }
    }

    async function postRequestJson2(content) {
        try {
            const response = await fetch(getUrl(), {
                method: "POST",
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
                    'Accept': 'application/json',
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({content: content}),
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            await response.json();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    document.addEventListener('DOMContentLoaded', async function() {
        await initializeDropdowns();
	   const mainForm = document.querySelector('form');
	    mainForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const submitHandler = async (e) => {
                e.preventDefault();
                try {
                    const responseData = await sendData();
                    mainForm.removeEventListener("submit", submitHandler);
                    mainForm.submit();
                } catch (error) {
                    console.error("Error during data submission:", error);
                }
            };
	   submitHandler(event);
        });
    });
</script>
```
:::tip Valid JSON
The content parameter that is sent must be valid JSON. If it has to be empty, {} must be sent.
:::

### Origination Process

The origination process task type allows you to insert another origination into the flow.
This is because many flows share certain steps or data that are required from the user.
When using an origination process task, if the user already has previous responses, they could use them instead of providing the same data over and over again.
Whether or not to allow the use of previous data is defined when adding the origination process task.

### Invitation

The Invitation task enables **multi-user** origination flows: the main user of the submission invites other people to complete specific tasks in the flow.

To create an invitation task, you must first create at least one [role](#roles) in the origination editing. Each role can be used in only one invitation task of the origination.

When configuring the task, you define:

- **Role**: The role that invited users will assume.
- **Email template**: The HTML/Liquid code of the invitation email. Liquid variables such as `invitation.first_name`, `invitation.last_name`, `invitation.email`, `invitation_url`, `submission`, `task`, `origination`, and `site` are available.
- **Target tasks**: The tasks that invited users will be able to complete. You can only select tasks prior to the invitation task; other invitation tasks and origination process tasks are not selectable.

In addition, the properties of each task included in an invitation task have the option **Show this task to the main user**, which controls whether the main user also sees that task in their flow.

On the origination page, the main user can invite new people (first name, last name, and email address) or users already invited in other tasks, and can resend or cancel pending invitations. Each invitee receives an email with an access link and, upon entering, only sees the tasks assigned to them; if they have more than one role, they see the union of the tasks of all their roles. The invited user cannot cancel the submission.

The invitation task is completed when all invitees finish their tasks. If the role does not require invitations and the main user does not invite anyone, the task is automatically completed when continuing. The number of active invitations is limited by the role's **Maximum number of users**.

:::tip Template for invited users
The origination page includes the **Resume (Invited)** template, which is the view invited users see when they return to the submission. You can customize it like the rest of the page templates.
:::

### Confirmation

The Confirmation task shows the user a summary of the answers they provided in previous Input tasks, so they can review and confirm them before continuing with the flow.

When configuring the task, in **Select items to confirm** you choose the tasks whose answers will be included in the summary, grouped by step. You can only select **Input** tasks prior to the confirmation task.

The user sees each selected task with its answers and an **Edit** link that takes them directly to that task to correct it. Pressing **Confirm** completes the task and the flow continues. To complete the task, all configured items must be confirmed.

In the details of a submission, completed confirmation tasks show the list of **Confirmed Tasks**.

### Tasks answered by agents

Each task in the flow has the **Assigned to** option, which defines who answers it:

- **User**: The task is answered by the end user on the origination page.
- **Agent**: The task is answered by an administrator from the admin. **Validation** and **Pending review** tasks are always agent tasks; **Input** and **Code snippet** tasks can be configured in either mode.

When the flow reaches an agent task, the assigned administrators receive an email with a direct link to the task and also see it in the **My tasks** view. The effective assignee is resolved in this order: the assignee of the task response, the assignee configured on the task and, failing that, the assignee of the submission; you can reassign a specific task from the submission view, which notifies the new assignee.

From the submission view, the agent opens the task and answers the form with the same experience as the site: live conditional logic, file uploads, repeatable groups, and code snippets. While the task awaits the agent's action, the user sees on the origination page the text configured in **Waiting message shown to the user**.

Additional options depending on the task type:

- **Disable manual completion** (Pending review): Hides the **Complete** button so the task cannot be completed manually from the admin. Administrators with the **Change Status of Task Response** permission can still complete it.
- **Allow same-origin** (Code snippet): Grants the task iframe access to the admin origin (session and cookies), disabling the sandbox isolation. Enable it only for trusted snippets.

#### Agent verification for external services

When an agent answers a Code snippet task, your code can obtain a short-lived credential (5 minutes) so an external service can verify that the caller is an agent authorized for that task and submission:

1. From the task iframe, request the credential at `GET /admin/customers/{realm_uid}/originations/{origination_id}/submissions/{submission_id}/agent_task_forms/{step_task_id}/assertion` (same admin base where the iframe runs; accepts the optional `audience` parameter with the target service identifier) and send it to the external service.
2. The external service validates it at `POST /api/admin/customers/{realm_uid}/originations/agent_assertions/introspect` (requires API Access with a permission that includes viewing submissions: **View All Submissions** or **View Assigned Submissions**). The response indicates `active: true` with the identifiers of the agent, submission, task, and acted user, or `active: false` if the credential expired or the authorization was revoked — validation always checks the current state, not just the signature.

You can find the endpoint details in the [API](/en/platform/core/api.html) Swagger documentation.

### Conditional Logic

Conditional logic allows you to create more dynamic and intelligent workflows. With this functionality, you can define rules for showing or hiding **Steps**, **Tasks**, and **Input task fields** based on answers provided by users or on existing data within the submission. This allows you to personalize the user experience, presenting only relevant information at each stage of the process and simplifying or bifurcating the interaction. Conditional logic gives you the flexibility to:

- **Hide or show complete steps:** Guides users through different paths within the origination flow based on their previous answers.
- **Hide or show individual tasks:** Within a step, you can show or hide specific tasks. This is useful for requesting additional information only when needed.
- **Hide or show Input task fields:** Within an Input task, you can show or hide specific fields. This allows you to omit or request data based on the answers provided by the user.

#### Configure Conditional Logic

To set up conditional logic, follow these steps:

1. **Enter the editor:** In the Build view of an origination, press the **Conditional logic** button.
2. **Edit the visibility of items:** By default, all steps, tasks, and fields will be visible. In the **Structure** section, you can mark as not visible the elements you want by pressing the eye icon.
3. **Define rules:** In the **Rules** section, you can define the conditions that will determine if an element is shown or hidden. The rules are composed of: (1) one or more conditions evaluated using **AND** and **OR** operators and (2) an action to be executed when the conditions are met.
   1. **Add a rule**: Press the **Add** button.
   2. **Define the conditions:** Conditions can be based on:
      * **Responses to Input fields:** Compares the response provided by the user in a specific field with a given value. You can use operators such as "is equal to", "is not equal to", "contains", "is greater than", "is less than", etc.
      * **Completeness of a Step or Task:** Evaluates if a step or task was completed.
   3. **Define the action:** Select the action and the element on which it will be executed when the rule is met. The available actions are **Show** and **Hide**.
4. **Save the changes:** Once you have defined your rules, save the changes.

:::tip User experience
Consider how conditional logic can affect the user experience and ensure that the flow can be completed easily.
:::

### Edit Origination Settings

By selecting the **Edit** option in the context menu of your origination, you can edit its properties.

- **Name**: Defines the name of the origination, visible to users in the interface.
- **Description**: Includes a brief explanatory text about the purpose of the origination.
- **Completed message**: This is the message that will appear to the user at the end of the origination process.
- **Default submission assignee**: Specifies the administrator or group of administrators that will be automatically assigned to each new submission. When selecting a group, you can use the **Assign to whole group** option or choose a specific user within it.
- **Due in**: Sets a maximum deadline for completing the origination.
- **Automatically cancel submissions that exceed the due date**: Available only if you have configured a due date. When this option is enabled, submissions in **Pending** status that exceed their due date are automatically canceled.
- **Completion rules**: Defines the completion behavior for each submission.
- **Cancellation rules**: Defines who can cancel a submission from the origination page:
  - **Everyone can cancel the submission**: Default option.
  - **Only administrators can cancel the submission**: The **Cancel** button is no longer shown to the user on the origination page, and cancellation remains available only to administrators.
- **Privacy**: Allows you to restrict access to the origination flow to certain predefined user segments.

:::tip Automatic cancellation by due date
Automatic cancellation runs in a background process once a day, so it may not happen immediately when the submission becomes overdue. It only cancels submissions in **Pending** status and records **Auto-Cancelled Overdue** as the cancellation reason, visible in the submission details.
:::

#### Roles

In the origination editing, you will find the **Roles** section, where you define the roles used by the [invitation tasks](#invitation) of multi-user flows. To create a role, press the **Add Role** button and complete:

- **Name**: The name of the role, unique within the origination.
- **Require invitations**: If enabled, the main user must invite at least one person to complete the invitation task that uses this role.
- **Maximum number of users**: The maximum number of users that can have this role in the same submission.

#### Delete origination

If you need to permanently delete an origination:

1. Select the **Delete origination** option.
2. Confirm that you do not need the origination data before proceeding.

:::danger Danger
This process is irreversible.
:::

### View Details of an Origination

By accessing a specific origination, you can view relevant metrics and data based on the view you select. These views allow you to efficiently analyze and manage the information associated with the origination.

- **Summary**: Presents an overview of the key metrics associated with the origination, providing a quick view of performance and progress.
- **Submissions**: Shows a detailed list of all submissions made within this origination. It is ideal for reviewing the history and status of each request.
- **Assignees**: Provides a list of the people assigned to this origination, along with their management metrics, making it easier to track performance and workload.

### Origination Summary

The summary view of an origination gives you a summary of key metrics related to the performance and status of requests in the flow. This information is useful for understanding overall progress and for effective monitoring.

- **Pending**: Shows the total number of submitted requests that have not yet been completed.
- **Completed**: Indicates the number of requests that have successfully completed the origination flow.
- **Canceled**: Reflects requests that have been canceled by the user or administrator.
- **Total**: Represents the total number of requests, including pending, completed, and canceled.

### Submission Management

The submissions view allows you to individually review and manage the status and information of each submission to this origination. You can select a specific submission to access its details and manage its key elements.

In the details view, you will find the following main sections:

- **Details**: General information about the submission, such as the name, description, and current status.
- **Tasks**: List of tasks associated with the origination flow, along with their progress status.
- **Fields**: Fields configured in the flow to collect user information.
- **Documents**: Files uploaded by users or required for the origination process.
- **Signatures**: Tracking of the digital signatures collected during the flow.
- **Identity Verification**: Result of the user's identity verification when the flow includes it.
- **Validations**: Validations carried out by administrators to authorize progress.
- **Activity**: Record of activities and changes made to the submission, useful for monitoring and auditing.

This structure provides you with a comprehensive and detailed view of each submission, allowing you to effectively manage all aspects related to the submissions.

In multi-user submissions, the **Tasks**, **Reviews**, and **Validations** tabs include the **Viewing tasks for** selector, which allows you to switch between the **Main User** and each invited user to review the individual progress of their tasks.

:::tip Tip
From the submission view in the actions menu (identified with ...), you can [impersonate](/en/platform/customers/users) the user to help them answer the origination. This depends on the user's roles.
:::

:::tip Segment scope
If your access to the realm is [restricted by segments](/en/platform/customers/settings.html#restrict-scope-with-segments), you will only see the submissions of the users within your scope. Submissions assigned to you remain visible and operable even if the user belongs to segments outside your scope.
:::

#### Submission visibility permissions

The role's permissions decide which submissions a team member sees and how much of each one. In the role's Customers permissions there are four that work in tiers:

- **List Assigned Submissions**: in the list they only see the submissions assigned to them and, when opening one, only the **Details** section.
- **List All Submissions**: they see every submission, not only the ones assigned to them. It includes **List Assigned Submissions**.
- **View Submission Tasks**: adds the **Tasks** section, with the ability to assign and complete tasks and to approve or reject validations. It includes **List Assigned Submissions**.
- **View Full Submission**: adds the remaining sections, **Fields**, **Documents**, **Signatures**, **Identity Verification**, **Validations** and **Activity**. It includes **View Submission Tasks**.

When you check a permission, the platform also checks the ones that permission includes. The sections a role cannot see do not appear in the submission menu.

The action permissions build on those tiers: **Edit Submissions** requires **View Full Submission**; **Assign Submissions** requires **List All Submissions**; **Delete Submissions** and **Complete Submissions** require **List Assigned Submissions**.

:::tip Tip
**Start Submissions** is independent from the visibility permissions: a role can create submissions on behalf of a user without seeing the full list or the detail.
:::

:::warning Attention
The roles you already had keep the access they had: those that saw the full detail keep **View Full Submission**, and those that had **Start Submissions** also keep **Assign Submissions** and **List All Submissions**. The separate tiers apply when you edit the role.
:::

#### Search submissions

The submission list includes a search box that allows you to find submissions by the user's data, the values of their custom fields, the answers entered in the flow fields, and the content of the tasks.

The search requires a minimum of 3 characters, is case- and accent-insensitive, and finds partial matches. For example, `lau` finds "Claudio" and `perez` finds "Pérez". The `id` and `uuid` keys are the exception and are explained below.

You can search in two ways, which you can also combine in the same query:

- **Free text**: Type one or more terms and the search will find them in the user's data, the values of their custom fields, the answers entered in the flow fields, and the content of the tasks.
- **Key=value pairs**: Type the key of a field followed by `=` and the value to search for, to narrow the search down to that specific field.

The available keys for `key=value` pairs are:

- **User data**: `first_name`, `last_name`, `second_last_name`, `email`, and `username`.
- **Identifiers**: `id` and `uuid`. These two do not behave like the rest: each one searches two places at once and does not allow partial matches. They are explained in [Search by identifier](/en/platform/customers/origination.html#search-by-identifier).
- **User custom fields**: The custom field key, with or without the `_ucf_` prefix. For example, `pais=Chile` and `_ucf_pais=Chile` are equivalent.
- **Flow questions**: The question identifier defined in the origination flow. For example, `rut=18301757`.

When using `key=value` pairs, keep the following in mind:

- The key must be written in full, while the value does allow partial matches. The `id` and `uuid` keys are the exception: they do not allow partial matches.
- To search for values or phrases with spaces, use double quotes. For example, `first_name="Jean Pierre"` or `"crédito hipotecario"`.
- All conditions are combined together, so a submission must satisfy every term and pair in the query to appear in the results.
- If the key does not exist or the value is empty, the term is searched as free text without generating errors.

Some search examples:

| Search | Result |
|---|---|
| `Claudio` | Submissions whose user or content includes "Claudio". |
| `first_name=Claudio` | Submissions whose user contains "Claudio" in their name. |
| `pais=Chile` | Submissions whose user has "Chile" in the `pais` custom field. |
| `rut=18301757` | Submissions where the question with identifier `rut` contains "18301757". |
| `first_name="Jean Pierre"` | Submissions whose user contains "Jean Pierre" in their name. |
| `pais=Chile rut=18301757 hipotecario` | Submissions that meet all three conditions at once. |
| `id=42` | The submission whose id is 42 and, in addition, every submission of the user whose id is 42. |

##### Search by identifier

The `id` and `uuid` keys are different from the rest: each one searches **two places at once**, and a match in either one is enough for the submission to show up in the results.

| Key    | Where it searches                                      |
|--------|--------------------------------------------------------|
| `id`   | The user's id **or** the submission's id.              |
| `uuid` | The user's uuid **or** the submission's uuid.          |

The practical consequence is that a single value can bring results from two different sources. For example, `id=42` returns the submission whose id is 42 and, in addition, every submission of the user whose id is 42, even though they are unrelated. If you are after one specific submission, check the user column to rule out the ones that came in through the other path.

Neither key allows partial matches, unlike the rest of the search:

- `uuid` is also case-sensitive. Copy the full identifier exactly as it appears in the platform: half a uuid returns nothing.
- `id` is read as a whole number and only keeps the leading digits of the value. Type digits only: `id=18.301.757` searches for the submission with id `18`, and `id=abc` returns no results. Neither case shows any warning.

If you paste a uuid into the box without the key, the search treats it as free text and only finds the submission with that uuid, not the submissions of the user with that uuid. For the latter you have to type `uuid=`.

:::tip Results update
Recent changes to a submission may take a few seconds to be reflected in the search results. Changes to the user's data, the values of their custom fields, and segments are reflected in a deferred manner.
:::

#### Filter submissions

In addition to the search, you can narrow down the submission list with the following filters, which can be combined with each other and with the search:

- **Date range**: Filters by the creation date of the submission.
- **Status**: Filters by the current status of the submission: **Not started**, **Pending**, **Completed**, or **Canceled**.
- **Assigned**: Shows the submissions assigned to the selected administrator.
- **Segment**: Shows the submissions of users who belong to the selected [segment](/en/platform/customers/segments.html).

#### Assign submission

In the list of submissions, select the actions menu and press the **Assign** option. In the modal, you can assign the submission to an administrator, to a whole group of administrators, or to a specific user within a group. You can also use the **Assign to me** option to assign the submission directly to yourself.

When assigning to a whole group, all its members can view and manage the submission. The **Assigned** column of the list shows the assigned group or administrator; if the administrator was chosen from a group, the group name is also displayed.

#### Cancel submission

To cancel a submission, open it and press the **Cancel** button in the submission view. In the modal, you can optionally enter a **Cancellation reason** and then confirm the action. Canceling permanently changes the status of the submission to **Canceled**.

You can cancel submissions in **Not started**, **Pending**, or **Completed** status.

The details of a canceled submission show the cancellation date in the **Canceled at** field and the **Cancellation reason** entered. If no reason was entered, the field shows `--`.

#### Delete submission

To delete an individual submission, select the menu in the actions column and press the delete option. This will delete the submission.

To delete several submissions at the same time, select each entry by checking the corresponding box and press the delete button.

#### Reopen tasks of a submission

Through the [administration API](/en/platform/core/api.html), you can individually manage the task responses of a submission: view them, transition their status (start, complete, or **reopen** an already completed task so the user can answer it again), and delete them individually or in bulk.

Consider the following:

- Changing the status of a task response requires the **Change Status of Task Response** permission; deleting task responses requires the **Delete Submissions** permission.
- These operations are only available while the submission is in **Not started** or **Pending** status.
- All operations are recorded in the platform activity.

#### Invite users

You can invite users to enter information in an origination. When inviting a user, you will need to enter their basic information:

- **Name**: The first name of the user who will use the origination.
- **Last name**: The last name of the user.
- **Email**: The user's email address, where they will receive the invitation to access the origination.
- **Assign the submission**: In the drop-down list, select an administrator who will manage this particular origination. If an administrator is not selected, the submission will remain unassigned.

### Assignee Management

In the assignees view, you can monitor and manage the administrators responsible for the submissions within a realm. This view facilitates the tracking of performance and workload of administrators. You can filter the assigned submissions by date ranges.

By selecting an administrator, you will be able to see all the submissions assigned to them and their corresponding status.

## Create an Origination Page

To display an origination page to users, follow the steps below. This will allow you to enable direct and functional access to your flows.

- **Check Connection to Realm**: Access the Channels module, select the desired site and confirm that it is connected to the Realm where the origination is configured.
- **Create an origination page**: From the selected site, create a new page and define its type as origination.
- **Select the origination**: Associate the page with the origination you want to deploy.
- **Configure Name and Path**: Define a clear name and a specific path for the page, and press Create to finish.

Users will be able to access the origination page to perform the configured flow. It is essential to ensure that all settings are properly defined to guarantee access to end users.

Access to this page will be restricted depending on the privacy and segmentation settings established in the origination. This ensures that only authorized segments can interact with the flow, maintaining control and security of the information.

It is important to note that each origination can only be linked to one page across your entire organization. This includes pages on other sites and pages on the stages of the same site: if the origination is already linked to another page, the platform does not let you save the new one. If you need to create a new origination page, you will first need to unlink or delete the existing page to avoid conflicts and ensure proper configuration.

The origination you link must belong to the same realm as the site where you create the page. If the site is connected to a different realm, the platform rejects the link and indicates that the origination must belong to the site's realm.

### Pages without a linked origination

An origination page can be left without a linked origination. While it is in that state, the page responds to end users with a 404 error, so you must link an origination to deploy the flow again.

This happens in three situations:

- **You delete the origination**: the page remains on the site, but without a linked origination.
- **You change the site's realm**: all origination pages on that site lose the reference, because each origination belongs to a realm. The application settings form warns you about this before you confirm the change.
- **You create a stage**: origination pages are copied to the stage without their linked origination. Since each origination allows only one page, in the stage you must link a different origination from the same realm.

For more details on how stages behave, review the [stages](/en/platform/channels/sites.html#stages) section of web applications.
