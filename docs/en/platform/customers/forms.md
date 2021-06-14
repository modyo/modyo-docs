---
search: true
---

# Forms

One of the most demanted features in any platforms is the ability to capture of user data, analyze it, and use it for segmentation. With this tool you can create as many forms as you need to collect data from the users of your sites.

![Digital factory](/assets/img/platform/form-index.png)

Upon entering Forms, you can see a list of all the forms that are currently active in the account. You can filter by their status (enabled or disabled), by the site where they are deployed and search for them by name.

In each row of the form table, you will see the name of the form in the first column, the date of creation, and in the last column, the number of responses that have been completed for that form.

From this list you can also access the individual analysis view, by clicking on the title of the form, also to the list of responses of the form, by clicking on the number of responses on the form.

To enable or disable forms and allow users to send their answers, you must go to the analysis view and select the respective action from the options displayed in the upper right section.

## Create a Form

To create a new form, click on the main action at the top right **+ New**. This will take you to the creation view of a new form, where you must fill in its main attributes:

- **Name**: Name associated to the form. This value will appear both in the forms index in the Modyo administrator, and also as a title in the front end.
- **Description**: This text will appear as text under the title in the front end.
- **People limit**: Determines the maximum number of answers are allowed.
- **Site**: Allows you to select which sites display the form. Keep in mind that this causes the form to change its appearance according to the classes defined in the global CSS of the site. For more information, go to [Template builder](/en/platform/channels/templates.html)
- **Accept multiple responses**: If this option is enabled, each time a user answers the form, it will be registered as a new response. If this option is disabled, each time the same user answers the form, they will be overwriting their previous response.
- **Show only to registered users**: Allows you to determine if the form will only be visible to registered users in Modyo. If this option is enabled, a user without a session cannot see the form. If this option is disabled, any user can answer the form.
- **Automatically ask the form to the audience?**: If the form is private (only registered users can answer it), this option appears and allows you to automatically redirect users who log in to the site associated with the form to answer it.

The next section of the form properties contains the Form Options for what happens after a customer completes a form.

- **Default options**: After answering the form the user is redirected to the home of the site associated to the form
- **Redirect URL**: Allows you to enter a URL to which the user will be redirected after the form has been answered
- **Thank you page**: Allows you to add a personalized thank you message after a user answers the form, next to a button that will take you to a site page. The button URL is a relative URL of the site associated with the form. You can also determine if you want the user to be automatically redirected to that page after a certain time.


- **Enable targeting**: If the form is private (only registered users can answer it), you can select a set of users who can answer the form using the targets. To learn more, go to [Targets](/en/platform/customers/targets.html)

::: warning
Warning If the form is public, users who do not have an active session in Modyo will see three mandatory fields at the top: Name, Last name and Email. Name, Last Name and Mail. Once they submit the form, a user profile with those values is created and then the response is associated with that user.
:::

::: warning
Warning If a user does not have an active session, and fill out the form, and the email matches one of the users already registered in Modyo, then the response will be associated with the existing user and a new user will not be created.
:::

In the **Email Notifications** section you can configure the different emails that are sent after a user answers the form.

The notification by mail sends an "administrative" email in which platform users are notified that someone responded to the form. You can assign a subject and a mailing list that you want to notify.

The thank you email allows you to customize an email that will be sent to the user who answered the form. You can customize both the subject and the body of the message using [Liquid](/platform/channels/liquid-markup.html). Under the field to personalize the message, you will see a list of variables that you can use to personalize the email.

Here is a code sample that you can use as a base to personalize the thank you mail.

```html
You sent this answer on: {{'now' | date: "% b% d,% y"}}
<table width="600px">
    <tr>
        <td> <b> user name </b> </td>
        <td colspan="2"> {{user.name}} </td>
    </tr>
    <tr>
        <td> <b> user first name </b> </td>
        <td colspan="2"> {{user.first_name}} </td>
    </tr>
    <tr>
        <td> <b> user last name </b> </td>
        <td colspan="2"> {{user.last_name}} </td>
    </tr>
    <tr>
        <td> <b> user email </b> </td>
        <td colspan="2"> {{user.email}} </td>
    </tr>
    <tr>
        <td> <b> form name </b> </td>
        <td colspan="2"> {{form.name}} </td>
    </tr>
    <tr>
        <td> <b> form description </b> </td>
        <td colspan="2"> {{form.description}} </td>
    </tr>
    <tr>
        <td colspan="3" align="center" background-color="# f0f8ff"> <b> Questions </b> </td>
    </tr>
    <tr>
        <td width="15%"> <b> Question type </b> </td>
        <td width="15%"> <b> Question </b> </td>
        <td width="70%"> <b> Answer </b> </td>
    </tr>
    {% for question in form.questions%}
    <tr>
        <td> {{question.type}} </td>
        <td> {{question.title}} </td>
        <td> {{question.answer}} </td>
    </tr>
    {% endfor%}
</table>
```

## Answers

By clicking on the answer counter of a form, you will arrive at a view listing all the answers that users have submitted, and the date they responded.

You can export the responses to an _XLS_ or _CSV_ file by selecting them in the list and then using the actions selection that appears at the bottom.

::: danger
Danger You can delete responses one by one using the action to the right of each answer, or by using the actions selection that appears at the bottom, selecting multiple responses and then the **Delete** button at the end of the list. Keep in mind that deleting is irreversible and once a response has been deleted, it cannot be recovered.
:::

To see a user response in detail, just click on the user name, and you can access a list of questions next to the answers that user sent to a particular form.

<img src="/assets/img/customers/forms/submission-show.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="600" />

## Edit

<img src="/assets/img/customers/forms/edit-form.jpg" style="border: 1px solid #EEE; margin-top: 40px" />

To modify a form, you must go to the **"Analysis"** section and use the **"Edit"** action in the options menu at the top right.

Once you enter the editing section of a form, you will see 2 sections: a central section, where you can rearrange the questions by dragging them in the required order, and the right side section, which has three tabs:

### Add field
This section will allow you to add as many fields as necessary to complete the form or remove fields that are not necessary:

- **Simple text**: Allows the user to enter a single-line text response up to 256 characters.
- **Paragraph**: Allows the user to enter a multi-line text response up to 65535 characters.
- **Number**: Allows the user to enter numbers.
- **Dropdown**: Allows you to add a list of options from which the user may choose one in a dropdown format.
- **Checkbox**: Allows you to add a list of options from which the user may choose one or more in a checkbox format.
- **Choice**: Allows you to add a list of options from which the user may choose one in a _radio button_ format.
- **Date**: Allows you to add a date field in which the user can select a date within the allowed range.
- **Nested questions**: Allows you to add a series of alternatives that can be nested, so that the user is asked to select one of the possible nested options within the option they selected.

:::warning
Atención From version 9.0.8 onwards, forms no longer have file-type questions, so you won't be able to require users to upload files using Modyo forms.
:::

You can remove one of the form fields by clicking on the garbage can icon to the right of each field in the main section. The form option is deleted once you save the changes.

::: danger
Danger If your form is already activated and you already have answers, be very careful when deleting questions from it, because by doing so, you will be deleting the values of those answers that users have already submitted. This action is irreversible.
:::

### Field Properties
This section allows you to modify the options for each of the questions on your form, you must select a field from the main section to use this section.

All the fields that you can add have a title, which are effectively the questions associated with each answer, they have the option of making that field required to submit the form, and each has a brief description in case instructions are required to answer the field.

Some fields have validations, to ensure the user meets certain requirements to fill in the field, some of those restrictions are:

- **Minimum length**: Length required for the text to be valid
- **Maximum length**: Maximum length allowed for text to be valid
- **Regular expression**: Text format entered must match the associated regular expression to be valid.
- **Minimum number**: The number entered cannot be less than this value.
- **Maximum number**: The number entered cannot be greater than this value.
- **Minimum date**: The date entered cannot be earlier than this value
- **Maximum date**: The date entered cannot be later than this value.

In the same way that some fields have validations, most have a default value that is preselected at the time of loading the form. The only ones that do not have a default value are nested questions and files.

### Form Properties

This section will allow you to change the general behavior of the form. It contains the same options as when creating a new form, but in turn adds a couple of new options which we will detail below.

Its four main sections are:

- **General**
- **Form Snippet**
- **Form Options**
- **Email Notifications**

The **General** section adds two options:
- **Send button text**: Allows you to customize the text associated with the **Send** button on the form.
- **Enabled**: Allows you to determine whether or not users can respond to the form. If the option is checked, then the form can be accessed and answered, if it is not enabled, then users will not see or answer it.

The **Form Snippet** section, which will only appear if the form is public, will allow you to copy a _HTML_ code that you can use anywhere to dynamically load the form, even outside of Modyo.

<img src="/assets/img/customers/forms/form-embed.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350" />

::: warning
Warning In order to make proper use of the form snippet, you must take into account the _CORS_ configuration of your Modyo account and the security _headers_ of where you are inserting the snippet.
:::

The **Form Options** and **Email Notifications** sections do not add anything different from what is found when creating a **New Form**

::: warning
Warning If you use a Modyo site with a custom domain, you must enable the option to share resource sources [CORS](/platform/core/security.htm) in the account settings.
:::
