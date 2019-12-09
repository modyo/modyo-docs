---
search: true
---

# Forms

One of the most required features by all platforms is the capture of user data to later analyze and segment. With this tool you can create as many forms as you need to collect data from the users of your sites.

![Digital factory](/assets/img/platform/form-index.png)

Upon entering the tool, you will see a list of all the forms that are currently active in the account. You can filter by their status (enabled or disabled), by the site where they are deployed and search by the name of the form.

In each row of the form table, you will see in the first column the name of the form, then the date of creation, and in the last column, the number of responses that have been sent for that form.

From this list you can also access the individual analysis view, by clicking on the title of the form, also to the list of responses of the form, by clicking on the number of responses on the form.

To enable or disable forms and allow users to send their answers or not, you must go to the analysis view and select the respective action from the options displayed in the upper right section.

## New Form

To create a new form, click on the main action at the top right "+ New". This will take you to the creation view of a new form, where you must fill in the main attributes of it:

- **Name**: Name associated to the form. This value will appear both in the forms index in the Modyo administrator, and also as a title when a user will respond.
- **Description**: This text will appear as text under the title when users will respond.
- **Limit of people**: It allows to determine the maximum number of answers are allowed.
- **Site**: Allows you to select on which site this form will be displayed. Keep in mind that this causes the form to change its appearance according to the classes defined in the global CSS of the site. For more information, go to [Template builder](/guides/channels/templates.html)
- **Accept multiple responses**: If this option is enabled, each time a user answers the form, it will be registered as a new response. If this option is disabled, each time the same user answers the form, they will be overwriting their previous response.
- **Only for registered users**: Allows you to determine if the form will only be visible to registered users in Modyo. If this option is enabled, a user without a session cannot see the form. If this option is disabled, any user can answer the form.
- **Request to answer automatically**: If the form is private (only registered users can answer it), this option will appear that will allow you to automatically redirect users who log in to the site associated with the form to answer it.

After a division you will see the options to modify the redirection after a user answers the form.

- **Default options**: After answering the form the user is redirected to the home of the site associated to the form
- **Redirect URL**: Allows you to enter a URL to which the user will be redirected after the form has been answered
- **Thank you page**: Allows you to add a personalized thank you message after a user answers the form, next to a button that will take you to a site page. The button URL is a relative URL of the site associated with the form. You can also determine if you want the user to be automatically redirected to that page after a certain time.


- **Enable targeting**: If the form is private (only registered users can answer it), you can select a set of users who can answer the form using the targets. To learn more, go to [Targets](/guides/customers/targets.html)

::: warning Warning
If it is a public form, users who do not have an active session in Modyo, you will see three mandatory fields at the top of the form: Name, Surname and Mail. Once they submit the form, a user with those values will be created and then the response will be associated with that user.
:::

::: warning Warning
If a user does not have an active session, and fill out the form, and the email matches one of the users already registered in Modyo, then the response will be associated with the existing user and a new one will not be created.
:::

In the **Notifications** section you can configure the different emails that are sent after a user answers the form.

The notification by mail sends an email of the "administrative" type in which it is notified via that channel that someone answered the form. You can assign a subject and a mailing list that you want to notify.

The thank you email allows you to customize an email that will be sent to the user who answered the form. You can customize both the subject and the body of the message using [Liquid](/guides/channels/liquid-markup.html). Under the field to personalize the message, you will see a list of variables that you can use to personalize the email.

Next, you have an example of code that you can use as a base to personalize the thank you mail.

``` html
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



## Analysis

<img src="/assets/img/customers/forms/analysis.jpg" style="border: 1px solid #EEE; margin-top: 40px">

Modyo allows you to make a global analysis of each form. On the analysis page you only have to select one of the questions on the form and you can see a representation of the answers that users have sent. The representation displayed will depend on the type of response, the different types of response and their respective visualization are shown below:

- Simple text: You will see a count of how many people filled in this field.
- Number: You will see the minimum, maximum and average of the answers.
- Checkbox: You will see a bar chart with all the alternatives.
- Date: You will see the total response count, and the minimum and maximum date that have been sent as responses.
- Paragraph: You will see a count of how many people filled out this field.
- Dropdown: You will see a bar chart with all the alternatives.
- Choice: You will see a bar chart with all the alternatives.
- Nested questions: You will see a bar chart with all the alternatives of the first level.
- File: You will see a count of how many people filled in this field, along with the last five files uploaded.

::: tip Tip
In the right bar you will see a counter of the total number of times the form has been answered, but in the answer counts for each question, you will see the count of how many people put a value on that question. In the event that the response has not been requested as mandatory, it will be normal to see a smaller number of responses with respect to the total responses of the form.
:::

## Answers

By clicking on the answer counter of a form, you will arrive at a view listing all the answers that users have submitted and the date they responded.

You can export the responses to a _XLS_ or _CSV_ file by selecting them in the list and then using the massive actions at the end of it.

::: danger Danger
You can delete responses one by one using the action to the right of each answer, or by using massive actions, selecting multiple responses and then the **Delete** button at the end of the list. Keep in mind that this action is irreversible and once a response has been deleted, it cannot be recovered.
:::

To see in detail the response of a user, just click on the name of the user, and you will access the list of questions next to the answers that user sent on that particular occasion.

<img src="/assets/img/customers/forms/submission-show.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="600">

## Edit

<img src="/assets/img/customers/forms/edit-form.jpg" style="border: 1px solid #EEE; margin-top: 40px">

To modify a form, you must go to the **"Analysis"** section and use the **"Edit"** action in the options menu at the top right.

Once you enter the editing section of a form, you will see 2 sections: a central section, where you can rearrange the questions by dragging them in the required order, and the right side section, which has three tabs:

### Add field
This section will allow you to add as many fields as necessary to complete the form or remove those that are not necessary:

- Simple text: Allows the user to enter a text up to 256 characters.
- Paragraph: Allows the user to enter a multi-line text up to 65535 characters.
- Number: Allows the user to enter numbers.
- Dropdown: Allows you to add options from which the user may choose one in dropdown format.
- Checkbox: Allows you to add options from which the user can choose multiple in checkbox format.
- Choice: Allows you to add options from which the user may choose one in _radio button_ format.
- Date: Allows you to add a date field in which the user can select one within the allowed range.
- Nested questions: Allows you to add a series of alternatives that can be nested, so that the user is asked to select one of the possible nested options within the option he selected.
- File: Allows you to add a field to request that the user upload a file that is registered as a response to the form.

You can remove one of the form fields by clicking on the garbage can icon to the right of each field in the main section. The deletion will be effective once you save the changes.

::: danger Danger
If your form is already activated and you already have answers, be very careful when deleting questions from it, since in doing so, you will be deleting the values of those answers that the users have already sent. This action is irreversible.
:::

### Field Properties
This section will allow you to modify the options for each of the questions on your form, you must select a field from the main section to use this section.

All the fields that you can add have a title, which will be the question associated with the answer, the option of making that field required to submit the form, and a brief description in case instructions are required to answer the field.

Some fields have validations, to ensure the user meets certain requirements to fill in the field, some of those restrictions are:

- Minimum length: Length required for the text to be valid
- Maximum length: maximum length allowed for text to be allowed
- Regular expression: Format of the text entered must match the associated regular expression to be valid.
- Minimum number: The number entered cannot be less than this value.
- Maximum number: The number entered cannot be greater than this value.
- Minimum date: The date entered cannot be earlier than this value
- Maximum date: The date entered cannot be later than this value.

In the same way that some fields have validations, most have a default value that is preselected at the time of loading the form. The only ones that do not have a default value are nested questions and files.

### Form properties
This section will allow you to change the general behavior of the form. It contains the same as the creation view of a new form, but in turn adds a couple of new options which we will detail below. Its four main sections are:

- General
- Snippet
- Options
- Notifications

The **General** section adds two options:
- **Send button text**: Allows you to customize the text associated with the **Send** button on the form.
- **Enabled**: Allows you to determine whether or not users can respond to the form. If the option is checked, then the form can be accessed and answered, if it is not enabled, then users will not see or answer it.

The **Snippet** section, which will only appear if the form is public, will allow you to copy a _HTML_ code that you can use anywhere to dynamically load the form, even outside of Modyo.

<img src="/assets/img/customers/forms/form-embed.jpg" style="border: 1px solid #EEE; margin-top: 40px" width="350">

::: warning Warning
In order to make proper use of the form snippet, you must take into account the _CORS_ configuration of your Modyo account and the security _headers_ of where you are inserting the snippet.
:::

The **Options** and **Notifications** sections do not add anything different from what is found in **New Form**

::: warning Warning
If you use a Modyo site with a custom domain, you must enable the option to share resource sources [CORS](/guides/platform/security.htm) in the account settings.
:::
