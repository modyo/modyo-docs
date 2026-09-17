---
search: true
---

# Forms

One of the most demanted features in any platforms is the ability to capture of user data, analyze it, and use it for segmentation. With this tool you can create as many forms as you need to collect data from the users of your sites.

When you access the tool, you can see a list of all the forms currently active in the account. You can filter by their status (enabled or disabled), by the site they're deployed to, and search by the name of the form.

In each row of the forms table, the columns are ordered by the name of the form, the date it was created, and the number of responses that were submitted for that form.

From this list you can also access the individual analysis view, by clicking on the title of the form, also you can access the list of responses of the form, by clicking on the number of responses on the form.

To enable or disable forms and allow users to send their answers, you must go to the analysis view and select the respective action from the options displayed in the upper right section.

## Create a form

To create a new form, follow these steps:

1. From the side menu in the platform, select **Customers**, and click **Realms**.
2. Click on your realm.
3. Click **New Form**. This will take you to the creation view of a new form, where you must fill in the main attributes of the form:

- **Name**: Name associated with the form. This value will appear both in the form index in the Modyo administrator and as a title when a user is responding to it.
- **Description**: This text will appear as text below the title when users respond to it.
- **People limit**: Allows you to determine the maximum number of answers allowed.
- **Site**: Allows you to select where this form will be displayed. Keep in mind that this causes the form to change its appearance according to the classes defined in the site's global CSS. For more information, go to [Template builder](/en/platform/channels/templates).

:::warning Alert
You can only select a site that belongs to the same realm, within the **Site Settings**, under **General**, make sure that the site is part of the correct realm.
:::

- **Enabled**: Select if the form will start in an enabled state or not.
- **Accept multiple answers**: If this option is enabled, each time a user answers the form, it will be recorded as a new response. If this option is disabled, each time the same user answers the form, they will be overwriting their previous response.
- **Only for registered users**: Allows you to determine if the form will only be visible to registered Modyo users. If this option is enabled, an unsigned user will not be able to view the form. If this option is disabled, any user can answer the form.
- **Request to answer automatically**: If the form is private (only registered users can answer it), this option will appear, allowing you to automatically redirect users who log in to the site associated with the form to answer it.

After a division, you will be able to see the options to modify the redirect after a user answers the form.

- **Default options**: After answering the form, the user is redirected to the home of the site associated with the form.
- **Redirect URL**: Allows you to enter a URL to which the user will be redirected after completing the form. It is necessary to type the entire URL (e.g. https://test.modyo.com/home).
- **Thank you page**: Allows you to add a personalized thank you message after a user answers the form, along with a button that will take them to a page on the site. The button URL is a relative URL of the site associated with the form. You can also determine if you want the user to be automatically redirected to that page after a certain amount of time.


- **Enable segmentation**: If the form is private (only registered users can answer it), you can select a set of users who can answer the form using segments. To learn more, go to [Segments](/en/platform/customers/segments)

:::warning Attention
In case of a public form, users who do not have an active session in Modyo, will see three required fields at the top of the form: First Name, Last Name, and Email. Once they submit the form, a user will be created with those values, and then the response will be associated with that user.
:::

:::warning Attention
If a user, who doesn't have an active session, completes the form, and their email matches an already registered user in Modyo, the response will be linked to the existing user, and a new user will not be created.
:::

## Edit form

To modify a form, follow these steps:

1. In the side menu, select **Customers** and click **Realms**.
2. Select your realm and click on your form.
3. In the options menu at the top right, click **"Edit"**.

Once you enter the editing section of a form, you will be able to see 2 sections: a central section, where you can rearrange the questions by dragging them in the required order, and the right side section, which has three tabs:

### Add

This section will allow you to add as many fields as necessary to complete the form, or delete the ones that are not necessary. These are the fields you can add to a form:

- **Simple Text**: Allows the user to enter text up to 256 characters.
- **Paragraph**: Allows the user to enter multiline text up to 65535 characters.
- **Number**: Allows the user to enter numbers.
- **Dropdown**: Allows you to add options from which the user can choose one in _dropdown_ format.
- **Checkbox**: Allows you to add options from which the user can choose multiple options in a _checkbox_ format.
- **Choice**: Allows you to add options from which the user can choose one in _radio button_ format.
- **Date**: Allows you to add a date field where the user can select one within the allowed range.
- **Nested questions**: Allows you to add a series of alternatives that can be nested, so that the user is asked to select one of the possible nested options within the option they selected.
- **File**: Allows you to upload files.
- **Country**: Country selector.
- **Phone**: Field for entering phone numbers.
- **Address**: Structured field for capturing addresses.
- **Group**: Group a list of several repeatable fields. You can see more details about this format in the [documentation on Repeatable Groups](/en/platform/content/types#group)

You can delete one of the fields from the form by clicking on the trash can icon to the right of each field in the main section. The deletion will be effective once you save the changes.

:::danger Danger
If your form is already activated, and you already have answers, be very careful when deleting questions from it, because by doing so, you will be removing the values from those answers that users have already submitted. This action is irreversible.
:::

### Field properties

This section will allow you to modify the options for each of the questions on your form, you must select a field from the main section in order to make use of this section.

All the fields you can add have a title, which will be the question associated with the answer, the option to make it a required field in order to submit the form, and a brief description, if instructions are needed, to answer the field.

Some fields have validations, to ensure that the user meets certain requirements to fill in the field, some of these restrictions are:

- **Minimum length**: Length required for the text to be valid
- **Maximum length**: maximum length allowed for text to be allowed
- **Regular expression**: Format of the text entered must match the associated regular expression to be valid.
- **Minimum number**: The number entered cannot be less than this value.
- **Maximum number**: The number entered cannot be greater than this value.
- **Minimum Date**: The date entered cannot be earlier than this value
- **Maximum Date**: The date entered cannot be later than this value.

Just as some fields have validations, most have a default value that is pre-selected when loading the form. The only ones that don't have a default value are nested questions.

### Regular expressions

For simple text and paragraph fields, you can add validations through regular expressions. By clicking on the functions button, you can see the different default validations:

- Email
- URL
- Phone Number
- Chilean RUT
- Bank card number
- US zip code
- Canadian zip code
- Chilean zip code
- UUID

Selecting any of the different options and clicking **Add** will autocomplete the expression to the field.

### Input masks

An input mask restricts what the user can type in a field and formats the value as they write. Unlike a regular expression, which validates the complete value only on submit, the mask acts key by key: the user never gets to enter a value in the wrong format.

Masks are configured in the **Options** section of the field, both in the form builder and in the Input task builder of [originations](/en/platform/customers/origination.html). They are available in the **Single line text** and **Number** fields. The **Email** and **URL** fields come with a fixed factory mask, which prevents typing characters those formats never accept and is neither configurable nor removable.

#### Mask modes

The **Input mask** selector defines the mode. The modes are mutually exclusive, and switching modes is the only way to enable or disable the mask:

| Mode | What it does | Available in |
|---|---|---|
| **No mask** | Default value. The field doesn't restrict what is typed. | Single line text and Number |
| **Pattern** | The field inserts the separators on its own and accepts, in each position, only the kind of character that belongs there. It defines a fixed length, for example `00/00/0000` or `0000 0000 0000 0000`. | Single line text |
| **RegExp** | The field filters which characters can be typed, with no fixed length and no separators. For example, letters and spaces only. | Single line text and Number |
| **Number** | Applies the thousands separator as the user writes, with a variable length. | Number |

#### Mask catalog

The **Mask catalog** button offers predefined masks that preload the pattern and leave it editable:

- **Credit card**
- **RUT (Chile)**
- **License plate (Chile)**
- **Text without emojis**
- **Letters and spaces only**

You can also write your own pattern from scratch, without starting from a preset.

#### Pattern tokens

In **Pattern** mode, each position of the pattern is written with one of these tokens. Any other character is taken as a literal and the mask inserts it on its own:

| Token | Meaning |
|---|---|
| `0` | Digit |
| `a` | Any letter, from any alphabet |
| `*` | Any character |
| `[ ]` | Optional positions, each one may be left empty |
| `\` | Escapes the next character so it is treated as a literal |

Some presets add their own blocks for positions the basic tokens don't cover. The Chilean RUT, for example, uses a `V` block for the check digit, which accepts digits and the letter K. The builder shows the preset blocks next to the token table.

The **Test the mask** field lets you type a test value and see the result before publishing.

#### How the value is stored and displayed

The value is stored and returned by the API **always unformatted**: the mask is a capture aid, it doesn't change the data. The formatted value is displayed in the administration panel, in the submission detail, and in [Liquid](/en/platform/channels/liquid-markup) templates.

:::warning Rules are evaluated against the unformatted value
The [conditional logic](/en/platform/customers/origination.html#conditional-logic) of originations and the [segment](/en/platform/customers/segments.html) filters compare against the stored value, not against the one the user sees. A rule written as `12.345.678-9` never matches if the stored value is `123456789`. The editor shows a notice with both forms of the value when you pick a masked field.
:::

#### Considerations

- **The mask is also validated on the server.** It can't be bypassed from the API or from the agent panel: a value that doesn't match the pattern or the expression is rejected with a validation error.
- **In RegExp mode, the expression filters every keystroke**, so it must also accept partially typed values. Use `*` or `?` instead of `+`: write `^[a-z]?0*$` and not `[a-z]0+`. An expression that rejects every single-character value leaves the field impossible to type into, and the builder warns you about it.
- **Pattern mode disables the minimum and maximum length**, because the pattern already defines length and format. The values you had configured are kept and become active again if you choose **No mask** or **RegExp**.
- **Number mode keeps the minimum and maximum active**, and uses them to prevent the user from typing a value out of range. It accepts up to 16 digits; a Number field without a mask has no such cap.
- **The mask and the regular expression complement each other.** The mask restricts the shape while typing; the regular expression validates the complete value on submit.
- **A mask doesn't validate meaning.** An identity document preset guarantees the shape of the data, not that the check digit is correct or that the date exists.
- **Values stored before configuring the mask are neither migrated nor reformatted.** If the user edits an answer whose value doesn't match the new mask, the field is edited without the mask and server validation still applies.

### Links in form texts

Field titles, their instructions, and alternative labels accept links written with HTML, for cases like pointing to the terms and conditions or the privacy policy without taking the user out of the form:

```html
I accept the <a href="/terms" target="_blank">terms and conditions</a>
```

This applies both to forms and to the Input tasks of originations, which share the same rendering.

What you can write is limited:

| | What is accepted |
|---|---|
| Tags | Only `a`. Any other tag is discarded and only its text remains. |
| Attributes | `href`, `target`, `rel`, and `title`. |
| `target` values | `_blank` and `_self`. `_top` and `_parent` are discarded, because they break a form embedded in a widget. |
| `href` schemes | `http`, `https`, `mailto`, and `tel`, plus relative paths and anchors. `javascript:`, `data:`, and any other are discarded. |
| `rel` | On links with `target="_blank"`, `noopener noreferrer` is enforced, whether you write it or not. |
| `script` and `style` | They are removed along with their content. |

The link renders as such in the site form, in the summaries of the confirmation and validation tasks of an origination, and in the agent view form. On every other surface the text comes out plain, without markup: the submission detail in the panel, the CSV and XLS export, the notification email, the API, and Liquid templates.

:::tip Where to put the links
The natural place is the question title or its instructions. They also work in alternative labels, except in the **Dropdown** and **Nested questions** fields, where the browser doesn't accept markup inside an option and the label comes out as text. Besides, the label of an alternative is stored as a copy in the user's answer, so it is better to keep it short and avoid the semicolon, which is the level separator in nested questions.
:::

### Form properties

This section allows you to change the form's general behavior. It is similar to the creation view of a new form, but it adds a couple of new options, as detailed below.

Its sections are:

- **General**
- **Snippet**
- **Options**
- **Notifications**
- **Custom JS**

#### General
The **General** section adds two options:
- **Submit button text**: Allows you to customize the text associated with the **Submit** button on the form.
- **Enabled**: Allows you to determine whether or not users will be able to answer the form. If the option is checked, then the form can be accessed and answered, if it is not enabled, then users will not see or be able to respond to it.

#### Snippet
The **Snippet** section, which will only appear if the form is public, will allow you to copy an _HTML_ code that you can use anywhere to dynamically load the form, even outside of Modyo.

:::warning Attention
In order to make proper use of the form snippet, you must take into account the _CORS_ configuration of your Modyo account and the security _headers_ where you are inserting the snippet.

To make use of the snippet within a page on the Modyo platform, you must copy the Javascript code inside the Javascript section and the div in the HTML section. The HTML section in [Pages](/en/platform/channels/pages) cannot run Javascript, the use of the Javascript section is mandatory to run the code correctly.
:::

The **Options** and **Notifications** sections don't add anything other than what's found in **New Form**

:::warning Attention
If you're using a Modyo site with a custom domain, you'll need to enable the option to share resource sources [CORS](/en/platform/core/security) in the platform settings.
:::

### Notifications

In the **Notifications** section you can configure the different emails that are sent after a user answers the form.

The email notification sends an “administrative” email notifying you via that channel that someone has answered the form. You can assign a subject and a list of emails to which you want to notify.

The thank you email allows you to customize an email that will be sent to the user who answered the form. You can customize both the subject and the body of the message using [Liquid](/es/platform/channels/liquid-markup). Below the field for customizing the message, you can see a list of variables that you can use to personalize the email.

Below is an example of code that you can use as a basis for customizing the thank you email.

```liquid
Message Sent: {{ 'now' | date: "%b %d, %y" }}
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

Add functionality, such as custom validation, to your form using Javascript by following these steps:

1. On the Modyo platform, within your realm, click on your form.
1. Click on more options and click on **View**.
1. Open the developer tools and inspect the element you want to modify.
1. Note the id of the element to be validated. (e.g. `answers_3684_value`)
1. In the Custom JS section you can add validations or extra functionality using Javascript.
1. Click **Save**.

:::tip Tip
This script will run after the div containing the form, so it's important to keep in mind that it can be affected by the rest of the site's configuration. For example, if this form is embedded in another external site that cannot run Javascript.
:::

## Answers

When you click on a form, you will arrive at a view where all the answers that users have submitted and the date they responded are listed.

You can export the responses to a _XLS_ or _CSV_ file by selecting them from the list and then using the bulk actions at the bottom of the list.

:::danger Danger
You can delete answers, one by one, using the action to the right of each answer, or by making use of mass actions, selecting multiple answers and then the **Delete** button at the bottom of the list. Keep in mind that this action is irreversible and once a response has been deleted, it cannot be recovered.
:::

To see a user's answer in detail, just click on the user's name, and you'll access the list of questions along with the answers that user sent on that particular occasion.
