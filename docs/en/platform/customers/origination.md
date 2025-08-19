---
search: true
---

# Origination

**Origination** is a tool designed to optimize and automate complex processes in various sectors, such as managing requests, approvals, or records requiring multiple parties' interaction. This feature allows users to create and manage collaborative workflows in which different actors can actively participate. Through **Origination**, it is possible to request and collect documentation and information between parties, facilitating the validation and progress of the process based on the requirements met.

One of Origination's main advantages is its ability to manage workflows in multiple steps. Each step is verified before proceeding, ensuring the accuracy and compliance of each stage. In addition, Origination offers a secure and efficient environment, preventing the exchange of confidential information by insecure means, reducing the risk of errors, and ensuring data protection.

This functionality is not included by default in all Modyo plans. To activate it, it is necessary to contact the Modyo team to request its implementation.

Origination is designed for any organization that seeks to streamline complex processes, improve collaboration among those involved, and ensure that the workflow is managed in a structured and secure manner.

## Create a new origination

To create a new origination, follow these steps:

- In the side menu, navigate to **Customers** > **Realms** and select the Realm you want to work in.
- Go to the **Origination** option.
- Click the **New Origination** button.
- Choose a name and select the type of origination you want to create.
- Click **Create** to finish and begin configuring the steps of the new origination flow.

### Origination types

The origination types determine the purpose and specific functionality of the flows you want to implement. When creating a new origination, you can choose between the following types:

- **Person**: Allows your origination to collect data from natural persons such as an identity document or electronic signature.
- **Organization**: Collects information from institutions such as legal registrations or multiple shareholders.

## Origination flows

The flows are composed of **Steps** and **Tasks**, which define the structure and actions needed to complete the flow.

### Steps

The steps group tasks that are presented on the same screen. To proceed to the next step, the user must complete all assigned tasks.

#### Add steps

To add a step, press the **Add** button and choose the values

- **Name**: The name that will be displayed in the user interface to identify the Step.
- **Identifier**: A unique value that will be included in the URL of the origination flow.

### Tasks

Tasks are the individual actions within each step. These tasks collect information, perform validations, or request specific actions from the user. Tasks are completed sequentially, and when validated, they allow you to move to the next step in the flow.

#### Add tasks

To add a new Task, press the **Add Task** button and a new task will be created. When creating a task, you must include its values

- **Name**: The name of the task that will be visible to the user.
- **Identifier**: A unique identifier that will be included in the origination URL.
- **Description**: A short explanatory text about the task, it will be visible to the user.
- **Type**: Select the type of task based on the objectives of the flow.

#### Tasks types

The available task types are:

- **Input**: Requests information or data entry from the user.
- **Validation**: Requires an administrator to validate the task before proceeding to the next step.
- **Signature**: Asks the user for a digital signature.
- **Pending Review**: Pauses the process until an administrator authorizes progress to the next step.

:::warning Warning
 Each step must include at least one valid task to be saved.
:::

## Code Snippets

**Code snippets** allow you to add custom blocks of code to origination flows. These blocks support **HTML, JavaScript, and CSS**, making it easy to create interactive components or customize the flow according to the user's needs.

**Code snippets** can:

- Adjust to any scenario within the origination flow.
- Deploy real-time data from the submissions.
- Store and consume information relevant to the process.

### Insert a Code Snippet

To add a **code snippet** to an origination task, follow these steps:

1. Create a new **Task** within a flow step.
2. Select the **Code Snippet** task type.
3. Configure the properties of the task.

### Code Snippet Properties

- **Task ID**: Unique identifier for the task. It is generated automatically when you save the task and allows you to access the data from the API.
- **Name**: Name of the task, visible to the user.
- **Identifier**: Unique value included in the origination URL.
- **Description**: Short explanatory text describing the task.
- **Complete the task using the API**: If checked, the continue action will be disabled by default for this task and will require the developer to report the completion status using the JavaScript API.


### JavaScript API for Code Snippets

Modyo provides a JavaScript API for interacting with code snippets at run time.

#### Available methods

- **`getUrl()`**: Returns the URL of the current origination flow.
- **`enableButton()`**: Enables the task's action button and allows the user to continue with the flow.

### JSON API for code snippets

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

### Using Liquid in code snippets

Code snippets can use liquid objects to access internal submission data and personalize the user experience.


#### Submission Objects

In an origination flow, each submission represents the ongoing process of a specific user. Here are some of the main attributes available through Liquid:

| Description  | Example  |
|---|---|
| **submission.sequence_id** Sequence number of the current submission.  | ``` 77 ``` |
| **submission.assignee.name** Name of the assigned person.  | ```John``` |
| **submission.fields** Array with answers stored within the current submission. | ```[{"question": {"label": "What's your name?"},"text_field": "Jorge Regula"}]``` |
| **submission.QUESTION_ID** By using the ID of a specific question (e.g., submission.123456), its information is directly accessed | ```{"question": {"label": "What's your name?"},"text_field": "John Doe"}``` |
| **submission.origination.name** Name of the origination. | ```My Origination``` |
| **submission.origination.steps** Array with the names of the steps in the origination | ```[ {"uid": "step 1"}, {"uid": "step 2"}]``` |
| **submission.origination.tasks** Array with all the tasks in the origination and the step they correspond to | ```[{"task_id": "67890","name": "Task 1", description: "step 1": { "uid": "abcd1234" } }]``` |

You can learn more about [Liquid Objects](/en/platform/channels/liquid-markup/objects.html) in our documentation.

### Code snippets example

In this example, you can find the use of data access by Liquid Objects and interaction with JavaScript and JSON APIs. Remember to replace the `QUESTION_ID` value with the corresponding one in your submission.

``` html
<div class="form-group">
	<h5>Hello, {{ user.name }}!</h5>
	<p class="mb-6">You are in the origination {{ submission.origination.name }}</p>
	<div class="form-group">
		<label for="productDropdown" class="form-label">Select the brand of your favorite products <span class="req">*</span></label>
		<select class="form-select" id="productDropdown" disabled>
			<option value="" selected>Loading...</option>
		</select>
	</div>
</div>

<script>
	const dropdown = document.getElementById('productDropdown');

	async function initializeDropdown() {
		const savedData = await getRequestJson();
		let selectedValue = null;
		if (savedData?.submission?.fields?.[0]?.answers) {
			const productAnswer = savedData.submission.fields[0].answers.find(answer => answer.question.label === 'PRODUCT');
			selectedValue = productAnswer?.text_field;
		}

		try {
			const response = await fetch('https://dummyjson.com/products');
			if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
			const data = await response.json();

			let optionsHtml = '<option value="">Select ...</option>';
			data.products.forEach(product => {
				optionsHtml += `<option value="${product.id}" ${selectedValue && product.id.toString() === selectedValue ? 'selected' : ''}>${product.title}</option>`;
			});
			dropdown.innerHTML = optionsHtml;
			dropdown.disabled = false;
			if (dropdown.value) enableButton();

		} catch (error) {
			console.error("Error fetching product data:", error);
			dropdown.innerHTML = '<option value="">Error loading</option>';
		}
	}

	dropdown.addEventListener('change', () => {
		if (dropdown.value) enableButton();
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
		const jsonData = {
			"submission": {
				"sequence_id": "{{submission.sequence_id}}",
				"fields": [{ "answers": [{ "question": { "label": "PRODUCT" }, "text_field": dropdown.value }] }]
			},
			"task": { "task_id": "{{task.task_id}}", "step": { "uid": "{{task.step.uid}}" } },
			"page": { "name": "{{submission.origination.name}}" }
		};
		await postRequestJson(jsonData);
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
		await initializeDropdown();
		document.querySelector('form')?.addEventListener("submit", function(event) {
			sendData();
		});
	});
</script>
```

:::tip Valid JSON
The content parameter that is sent must be a valid json. If it has to be empty, {} must be sent.
:::
### Fields

You can incorporate a wide variety of fields in your forms to customize the collection of data from your users.

#### Add fields

To include a new field, you must select a task and select the **Add** tab.

Origination supports all types of input available in forms. You can see the full list of types in the [forms documentation](https://docs.modyo.com/en/platform/customers/forms#add)


#### Edit fields

When selecting a field, you can modify its properties by going to the **Edit** tab. There you will find different properties depending on the characteristics of the selected field. The main properties are:

- **Field Title**: This is the name of the field that will be displayed in the user interface. This should be clear and descriptive to facilitate interaction.
- **Required**: Determines if the field is mandatory or not. If activated, the user must complete it before continuing with the flow.
- **Field Instructions**: Provides additional guidance for the user to understand how to complete the field. These instructions are displayed directly on the interface, below the field.
- **Add a Field Pop-up instructions**: Adds a help icon next to the field. When you click on this icon, a message appears with additional information or useful tips related to the field.
- **Options**: Additional properties according to the type of field selected.

##### Task properties

In this section, you can edit the values of the selected task. You can find these values:

- **Name**: The name of the task that will be visible to the user.
- **Identifier**: A unique identifier that will be included in the origination URL.
- **Description**: A brief explanatory text about the task, which will be visible to the user.
### Conditional Logic

Conditional logic allows you to create more dynamic and intelligent workflows. With this functionality, you can define rules for showing or hiding **Steps**, **Tasks**, and **Input task fields** based on answers provided by users or on existing data within the submission. This allows you to personalize the user experience, presenting only relevant information at each stage of the process and simplifying or bifurcating the interaction. Conditional logic gives you the flexibility to:

- **Hide or show complete steps:** Guides users through different paths within the origination flow based on their previous answers.
- **Hide or show individual tasks:** Within a step, you can show or hide specific tasks. This is useful for requesting additional information only when needed.
- **Hide or show Input task fields:** Within an Input task, you can show or hide specific fields. This allows you to omit or request data based on the answers provided by the user.

#### Configure Conditional Logic

To set up conditional logic, follow these steps:

1. **Enter the editor:** In the Build view of an origination, press the **Conditional Logic** button.
2. **Edit the visibility of items:** By default, all steps, tasks, and fields will be visible. In the **Structure** section, you can mark as invisible the elements you want by pressing the eye icon.
3. **Define rules:** In the **Rules** section, you can define the conditions that will determine if an element is shown or hidden. The rules are composed of: (1) one or more conditions evaluated using **AND** and **OR** operators and (2) an action to be executed when the conditions are met.
   1. **Add a rule**: Press the **Add** button.
   2. **Define the conditions:** Conditions can be based on:
      * **Responses to Input fields:** Compares the response provided by the user in a specific field with a given value. You can use operators such as "is equal to", "not equal to", "contains", "is greater than", "is less than", etc.
      * **Completeness of a Step or Task:** Evaluates if a step or task was completed.
   3. **Define the action:** Select the action and the element on which it will be executed when the rule is met. The available actions are **Show** and **Hide**.
4. **Save the changes:** Once you have defined your rules, save the changes.

:::tip User experience
Consider how conditional logic can affect the user experience and ensure that the flow can be completed.
:::

### Edit origination settings

By selecting the **Edit** option in the context menu of your origination, you can edit its properties.

- **Name**: Defines the name of the origination, visible to users in the interface.
- **Description**: Includes a brief explanatory text about the purpose of the origination.
- **Completed message**: This is the message that will appear to the user at the end of the origination process.
- **Default submission assignee**: specifies the person who will be automatically assigned when receiving a new origination.
- **Due In**: Sets a maximum deadline for completing origination.
- **Completion Rules**: Defines the completion behavior for each submission.
- **Privacy**: Allows you to restrict access to the origination flow to certain predefined user segments.

#### Delete origination

If you need to permanently delete an origination:

1. Select the **Delete Origination** option.
2. Confirm that you do not need the origination details before proceeding.

:::danger Danger
This process is irreversible.
:::

### View details of an origination

By accessing a specific origination, you can view relevant metrics and data based on the view you select. These views allow you to efficiently analyze and manage the information associated with the origination.

- **Summary**: Presents an overview of the key metrics associated with the origination, providing a quick view of performance and progress.
- **Submissions**: Shows a detailed list of all submissions made within this origination. It is ideal for reviewing the history and status of each request.
- **Assignees**: Provides a list of the people assigned to this origination, along with their management metrics, making it easier to track performance and workload.

### Origination Overview

The overview of an origination gives you a summary of key metrics related to the performance and status of requests in the flow. This information is useful for understanding overall progress and for effective monitoring.

- **Pending**: Shows the total number of submitted requests that have not yet been completed.
- **Completed**: Indicates the number of requests that have successfully completed the origination flow.
- **Canceled**: Reflects requests that have been canceled by the user or administrator.
- **Total**: Represents the total number of requests, including pending, completed, and canceled.

### Submission management

The submission view allows you to individually review and manage the status and information of each submission at this origin. You can select a specific submission to access its details and manage its key elements.

In the details view, you will find the following main sections:

- **Details**: General information about the submission, such as the name, description, and current status.
- **Tasks**: List of tasks associated with the origination flow, along with their progress status.
- **Fields**: Fields configured in the flow to collect user information.
- **Documents**: Files uploaded by users or required for the origination process.
- **Signatures**: Tracking of the digital signatures collected during the flow.
- **Validations**: Validations carried out by administrators to authorize progress.
- **Activity**: Record of activities and changes made to the submission, useful for monitoring and auditing.

This structure provides you with a comprehensive and detailed view of each submission, allowing you to effectively manage all aspects related to the submissions.

#### Assign submission

In the list of submissions, select the actions menu and press the **Assign** option. In the context menu, select an administrator for this submission.

#### Cancel submission

Select a submission and press the context menu. By selecting the **Cancel** option to permanently change the status of a submission to canceled.

#### Delete submission

To delete an individual submission, select the menu in the actions column and press the delete option. This will delete the submission.

To delete several submissions at the same time, select each entry by checking the corresponding box and press the delete button.

#### Invite users

You can invite users to enter information in an origination. When inviting a user, you will need to enter their basic information:

- **Name**: The first name of the user who will use the origination.
- **Surname**: The last name of the user.
- **Email**: The user's email address, where they will receive the invitation to access the origination.
- **Assign the submission**: In the drop-down list, select an administrator who will manage this particular origination. If an administrator is not selected, the submission will remain unassigned.

### Assignee management

In the assignee view, you can monitor and manage the administrators responsible for the submissions within a realm. This view facilitates the tracking of performance and workload of administrators. You can filter the assigned submissions by date ranges.

By selecting an administrator, you will be able to see all the submissions assigned to them and their corresponding status.

## Create an origination page

To display an origination page to users, follow the steps below. This will allow you to enable direct and functional access to your flows.

- **Check Connection to Realm**: Access the Channels module, select the desired site and confirm that you are connected to the Realm where the origination is configured.
- **Create an origination page**: From the selected site, create a new page and define its type as origination.
- **Select origination**: Associate the page with the origination you want to deploy.
- **Configure Name and Path**: Define a clear name and a specific path for the page, and press Create to finish.

Users will be able to access the origination page to perform the configured flow. It is essential to ensure that all settings are properly defined to guarantee access to end users.

Access to this page will be restricted depending on the privacy and segmentation settings established in the origination. This ensures that only authorized segments can interact with the flow, maintaining control and security of the information.

It is important to note that each origination can only be linked to one page. If you need to create a new origination page, you will first need to unlink or delete the existing page to avoid conflicts and ensure proper configuration.