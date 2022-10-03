---
search: true
---

# Forms

One of the most demanted features in any platforms is the ability to capture of user data, analyze it, and use it for segmentation. With this tool you can create as many forms as you need to collect data from the users of your sites.

![Digital factory](/assets/img/platform/form-index.png)

When you access the tool, you are able to see a list of all the forms currently active in the account. You can filter by their status (enabled or disabled), by the site they're deployed to, and search by the name of the form.

In each row of the forms table, the columns are ordered by the name of the form, the date it was created, and the number of responses that were submitted for that form.

From this list you can also access the individual analysis view, by clicking on the title of the form, also to the list of responses of the form, by clicking on the number of responses on the form.

To enable or disable forms and allow users to send their answers, you must go to the analysis view and select the respective action from the options displayed in the upper right section.

## Create a form

To create a new form, follow these steps:

1. From the side menu in the platform, select **Customers**, and click **Realms**.
2. Click your Realm.
3. Click **+ New Form**. This will take you to the creation view of a new form, where you must fill in the main attributes of the form:

- **Name**: Name associated with the form. This value will appear both in the form index in the platform and as a title when a user responds to it.
- **Description**: This text will appear as text under the title in the front end.
- **People limit**: Determines the maximum number of answers are allowed.
- **Site**: Allows you to select where this form will be displayed. Keep in mind that this causes the form to change its appearance according to the classes defined in the site's global CSS. For more information, go to [Template builder](/en/platform/channels/templates.html). 

:::warning Warning
You will only be able to select a site that belongs to the same realm. Inside **Site Settings** - **General**, make sure that the site is part of the correct realm.
:::

- **Enabled**: Select whether the form will start in an enabled state or not.
- **Accept multiple responses**: If this option is enabled, each time a user answers the form, it will be registered as a new response. If this option is disabled, each time the same user answers the form, they will overwrite their previous response.
- **Show only to registered users**: Allows you to determine if the form will only be visible to registered users in Modyo. If this option is enabled, a user without a session cannot see the form. If this option is disabled, any user can answer the form.
- **Automatically redirect to form**: If the form is private (only registered users can answer it), this option will appear, allowing you to automatically redirect users belonging to the site associated to the form when they log in.

The next section of the form properties contains the Form Options for what happens after a customer completes a form.

- **Default options**: After responding to the form, the user is redirected to the home page of the site associated with the form.
- **Redirect URL**: Allows you to enter a URL to which the user will be redirected after responding to the form. It is necessary to enter the entire URL (e.g. https://test.miModyo.com/home).
- **Thank you page**: Allows you to add a personalized thank you message after a user answers the form, next to a button that will take you to a site page. The button URL is a relative URL of the site associated with the form. You can also determine if you want the user to be automatically redirected to that page after a certain time.


- **Enable segmentation**: If the form is private (only registered users can answer it), you can select a set of users who can answer the form using the segments. To learn more, go to [Segments](/en/platform/customers/segments.html)

:::warning Warning
If it is a public form, users who do not have an active session in Modyo will see three required fields at the top of the form: First Name, Last Name, and Email. Once they submit the form, a user will be created with those values and the response will be associated with that user.
:::

:::warning Warning
If a user does not have an active session, fills out the form, and the email matches one of the users already registered in Modyo, the response will be associated with the existing user instead.
:::

## Edit a form

<img src="/assets/img/customers/forms/edit-form.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To edit a form, follow these steps:

1. In the side menu, select **Customers** and click **Realms**.
2. Select your Realms and click your form.
3. In the options menu at the top right, click **"Edit"**.

Once you enter the editing section of a form, you will see 2 sections: a central section, where you can rearrange the questions by dragging them in the required order, and the right side section, which has three tabs:

### Add

This section lets you add as many fields as necessary to complete the form or delete the ones that are not needed. Here are the fields you can add for a form:

- **Simple text**: Enter a single-line text response up to 256 characters.
- **Paragraph**: Enter a multi-line text response up to 65535 characters.
- **Number**: Enter numbers.
- **Dropdown**: Add options from which the user can add a dropdown.
- **Checkbox**: Add options from which the user can choose multiple answers in a checkbox format.
- **Choice**: Add options from which the user can choose an answer in a _radio button_ format.
- **Date**: Add a date field in which the user can select a date within the allowed range.
- **Nested questions**: Add a series of questions that can be nested, so that the user is asked to select one of the possible nested options within a selected parent.

:::warning Warning
From version 9.0.8 onwards, you cannot add file-type questions in forms, you won't be able to request users to upload files using Modyo forms.
:::

You can remove one of the form fields by clicking on the garbage can icon to the right of each field in the main section. The form option is deleted once you save the changes.

:::danger Danger
If your form is already activated and you already have answers, deleting a question will delete the values of those answers that the users have already sent. This action is irreversible.
:::

### Field Properties

This section allows you to modify the options for each of the questions on your form, you must select a field from the main section to use this section.

All the fields that you can add have a title, which are effectively the questions associated with each answer, have the option of making that field required to submit the form, and each can have a brief description in case instructions are required to answer the field.

Some fields have validations, to ensure the user meets certain requirements to fill in the field. The rules you can add are:

- **Minimum length**: Length required for the text to be valid
- **Maximum length**: Maximum length allowed for text to be valid
- **Regular expression**: Text format entered must match the associated regular expression to be valid.
- **Minimum number**: The number entered cannot be less than this value.
- **Maximum number**: The number entered cannot be greater than this value.
- **Minimum date**: The date entered cannot be earlier than this value
- **Maximum date**: The date entered cannot be later than this value.

Just as some fields have validations, most have a default value that is pre-selected when the form is loaded. The only ones that don't have a default value are nested questions.

### Regular Expressions

For plain text and paragraph fields, you can add validations through regular expressions. By clicking on the functions button, you can see the different default validations:

- Email
- URL
- Phone Number
- Chilean RUT
- Bank card number
- American Post code
- Canadian Post Code
- Chilean Post code
- UUID

Selecting any of the different options and clicking **Add** will autocomplete the expression to the field.

### Form Properties

This section will allow you to change the general behavior of the form. It contains the same options as when creating a new form, but in turn adds a couple of new options which we will detail below.

Its sections are:

- **General**
- **Form Snippet**
- **Form Options**
- **Email Notifications**
- **Custom JS**

#### General
The **General** section adds two options:
- **Send button text**: Allows you to customize the text associated with the **Send** button on the form.
- **Enabled**: Lets you determine whether or not users will be able to respond to the form. If the option is checked, then the form will be accessible and answered, if it is not enabled, then users will not see it or be able to respond to it.

#### Snippet
The **Form Snippet** section, which will only appear if the form is public, will allow you to copy a _HTML_ code that you can use anywhere to dynamically load the form, even outside of Modyo.

<img src="/assets/img/customers/forms/form-embed.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350">

:::warning Warning
In order to make proper use of the form snippet, you must take into account the _CORS_ configuration of your account in Modyo and the security _headers_ from where you are inserting the snippet.

To use the snippet within a page on the Modyo platform, you must copy the Javascript code into the Javascript section and the div into the HTML section. The HTML section in [Pages](/en/platform/channels/pages) cannot run Javascript, it is mandatory to use the Javascript section to run the code correctly. 
:::

The **Form Options** and **Email Notifications** sections do not add anything different from what is found when creating a **New Form**

:::warning Attention
If you're using a Modyo site with a custom domain, you'll need to activate the option to share resource sources [CORS](/en/platform/core/security.html) in the platform settings.
:::

### Notifications

In the **Email Notifications** section you can configure the different emails that are sent after a user answers the form.

The notification by mail sends an "administrative" email in which platform users are notified that someone responded to the form. You can assign a subject and a mailing list that you want to notify.

The thank you email allows you to customize an email that will be sent to the user who answered the form. You can customize both the subject and the body of the message using [Liquid](/en/platform/channels/liquid-markup.html). Below the field to customize your message, you'll see a list of variables you can use to personalize your email.

Here is a code sample that you can use as a base to personalize the thank you mail.

```liquid
You sent this answer on: {{ 'now' | date: "%b %d, %y" }}
<table width="600px">
    <tr>
        <td><b>user name</b></td>
        <td colspan="2"> {{user.name}}</td>
    </tr>
    <tr>
        <td><b>user first name</b> </td>
        <td colspan="2"> {{user.first_name}}</td>
    </tr>
    <tr>
        <td><b>user last name</b></td>
        <td colspan="2"> {{user.last_name}}</td>
    </tr>
    <tr>
        <td><b>user email</b></td>
        <td colspan="2"> {{user.email}}</td>
    </tr>
    <tr>
        <td><b>form name</b></td>
        <td colspan="2"> {{form.name}}</td>
    </tr>
    <tr>
        <td><b>form description</b></td>
        <td colspan="2"> {{form.description}}</td>
    </tr>
    <tr>
        <td colspan="3" align="center" background-color="#f0f8ff"><b>Questions</b></td>
    </tr>
    <tr>
        <td width="15%"><b>Question type</b></td>
        <td width="15%"><b>Question</b></td>
        <td width="70%"><b>Answer</b></td>
    </tr>
    {% for question in form.questions %}
    <tr>
        <td>{{ question.type }}</td>
        <td>{{ question.title }}</td>
        <td>{{ question.answer }}</td>
    </tr>
    {% endfor %}
</table>
```

### Custom JS

Add functionality such as custom validation to your form using Javascript by following these steps:

1. In Modyo platform, inside your realm, click your form.
1. Click more options and click **View**.
1. Open the developer tools and inspect the item you want to modify.
1. Write down the id of the element to be validated. (e.g. `answers_3684_value`)
1. In the Custom JS section you can add validations or extra functionality using Javascript.
1. Click **Save**.

:::tip Tip
This script will run right after the div that contains the form, so it is important to note that it may be affected by the rest of the site configuration. For example if this form is embedded in another external site that cannot run Javascript.
:::

## Answers

Clicking on a form will bring you to a view where all the responses users have submitted and the date they responded to are listed.

You can export the responses to an _XLS_ or _CSV_ file by selecting them in the list and then using the actions selection that appears at the bottom.

:::danger Danger
You can delete responses one by one using the action to the right of each response, or by using bulk actions, selecting multiple responses and then clicking **Delete** at the bottom of the list. Note that this action is irreversible and once a response has been deleted, it cannot be recovered.
:::

To see a user response in detail, just click on the user name, and you can access a list of questions next to the answers that user sent to a particular form.

<img src="/assets/img/customers/forms/submission-show.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="600">