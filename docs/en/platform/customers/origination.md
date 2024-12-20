---
search: true
---

# Origination

**Origination** is a tool designed to optimize and automate complex processes in various sectors, such as managing requests, approvals, or records requiring multiple parties' interaction. This feature allows users to create and manage collaborative workflows in which different actors can actively participate. Through **Origination**, it is possible to request and collect documentation and information between parties, facilitating the validation and progress of the process based on the requirements met.

One of Origination's main advantages is its ability to manage workflows in multiple steps. Each step is verified before proceeding, ensuring the accuracy and compliance of each stage. In addition, Origination offers a secure and efficient environment, preventing the exchange of confidential information by insecure means, reducing the risk of errors, and ensuring data protection.

This functionality is not included by default in all Modyo plans. To activate it, it is necessary to contact the Modyo team to request its implementation.

Origination is designed for any organization that seeks to streamline complex processes, improve collaboration between those involved, and ensure that the workflow is managed in a structured and secure manner.

## Create a new origination

To create a new origination, follow these steps:

- In the side menu, navigate to **Customers**\ > **Realms** and select the Realm you want to work in.
- Go to the **Origination** option.
- Click the **+ New Origination** button.
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

To add a new Task, press the **+ Add Task** button and a new task will be created. When creating a task, you must include its values

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

### Fields

You can incorporate a wide variety of fields in your forms to customize the collection from your users' data.

#### Add fields

To include a new field you must select a task and select the **Add** tab

Origination supports all types of input available in forms. You can see the full list of types in the [form documentation] (https://docs.modyo.com/en/platform/customers/forms.html#add)


#### Edit fields

When selecting a field, you can modify its properties by going to the **Edit** tab. There you will find different properties depending on the characteristics of the selected field. The main properties are:

- **Field Title**:This is the name of the field that will be displayed in the user interface. This should be clear and descriptive to facilitate interaction.
- **Required**: Determines if the field is required or not. If enabled, the user must complete it before continuing with the flow.
- **Field Instructions**: Provides additional guidance for the user to understand how to complete the field. These instructions are displayed directly on the interface, below the field.
- **Add a Field Pop-up instructions**: Adds a help icon next to the field. When you click on this icon, a message appears with additional information or useful tips related to the field.
- **Options**: Additional properties according to the type of field selected.

##### Task properties

In this section you can edit the values of the selected task, you can find these values

- **Name**: The name of the task that will be visible to the user.
- **Identifier**: A unique identifier that will be included in the origination URL.
- **Description**: A short explanatory text about the task, it will be visible to the user.


### Edit Origination Settings

By selecting the **Edit** option in the context menu of your origination you can edit its properties.

- **Name**: Defines the name of the origination, visible to users in the interface.
- **Description**: Includes a brief explanatory text about the purpose of the origination.
- **Completed message**: This is the message that will appear to the user at the end of the origination process.
- **Default application assignee**: specifies the person who will be automatically assigned when receiving a new origination.
- **Due In**: Set a maximum deadline for completing origination.
- **Completion Rules**: Define the completion behavior for each application.
- **Privacy**: Allows you to restrict access to the origination flow to certain predefined user segments.

#### Delete origination

If you need to permanently delete an origination:

1. Select the **Delete Origination** option.
2. Confirm that you don't need the origination details before proceeding.

:::danger Danger
This process is irreversible.
:::

### View details of an origination

By accessing a specific origination, you can view relevant metrics and data based on the view you select. These views allow you to efficiently analyze and manage the information associated with the origination.

- **Summary**: Presents an overview of the key metrics associated with the origination, providing a quick view of performance and progress.
- **Applications**: Shows a detailed list of all applications made within this origination. It's ideal for reviewing the history and status of each request.
- **Assignees**: Provides a list of the people assigned to this origination, along with their management metrics, making it easier to track performance and workload.

### Origination Overview

The overview of an origination gives you a summary of key metrics related to the performance and status of requests in the flow. This information is useful for understanding overall progress and for effective monitoring.

- **Pending**: Shows the total number of submitted requests that have not yet been completed.
- **Completed**: Indicates the number of requests that have successfully completed the origination flow.
- **Canceled**: Reflects requests that have been canceled by the user or administrator.
- **Total**: Represents the total number of requests, including those pending, completed and canceled.

### Application Management

The application view allows you to individually review and manage the status and information of each application at this origin. You can select a specific application to access its details and manage its key elements.

In the details view, you'll find the following main sections:

- **Details**: General information about the application, such as the name, description and current status.
- **Tasks**: List of tasks associated with the origination flow, along with their progress status.
- **Fields**: Fields configured in the flow to collect user information.
- **Documents**: Files uploaded by users or required for the origination process.
- **Signatures**: Tracking of the digital signatures collected during the flow.
- **Validations**: Validations carried out by administrators to authorize progress.
- **Activity**: Record of activities and changes made to the application, useful for monitoring and auditing.

This structure provides you with a comprehensive and detailed view of each application, allowing you to effectively manage all aspects related to the applications.

#### Assign application

In the list of applications, select the actions menu and press the **Assign** option. In the context menu, select an administrator for this application.

#### Cancel application

Select an application and press the context menu. By selecting the **Cancel** option to permanently change the status of an application to canceled.

#### Delete application

To delete an individual application, select the menu in the actions column and press the delete option. This will delete the application.

To delete several applications at the same time, select each entry by checking the corresponding box and press the delete button.

#### Invite users

You can invite users to enter information in an origination. When inviting a user, you'll need to enter their basic information

- **Name**: The first name of the user who will use the origination.
- **Surname**: The last name of the user.
- **Email**: The user's email address, where they will receive the invitation to access the origination.
- **Assign the application**: In the drop-down list, select an administrator who will manage this particular origination. If an administrator is not selected, the application will remain unassigned.

### Assignee Management

In the assignee view, you can monitor and manage the administrators responsible for the applications within a realm. This view makes it easy to track the performance and workload of administrators. You can filter the assigned apps by date ranges

By selecting an administrator, you will be able to see all the applications assigned to them and their corresponding status

## Create an origination page

To display an origination page to users, follow the steps below. This will allow you to enable direct and functional access to your flows.

- **Check Connection to Realm**: Access the Channels module, select the desired site and confirm that you are connected to the Realm where the origination is configured.
- **Create an origination page**: From the selected site, create a new page and define its type as origination.
- **Select origination**: Associate the page with the origination you want to deploy.
- **Configure Name and Path**: Define a clear name and a specific path for the page, and press Create to finish.

Users will be able to access the origination page to perform the configured flow. It is essential to ensure that all settings are properly defined to guarantee access to end users.

Access to this page will be restricted depending on the privacy and segmentation settings established in the origination. This ensures that only authorized segments can interact with the flow, maintaining control and security of the information.

It's important to note that each origination can only be linked to one page. If you need to create a new origination page, you will first need to unlink or delete the existing page to avoid conflicts and ensure proper configuration.
