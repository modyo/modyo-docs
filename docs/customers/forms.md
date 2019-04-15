---
id: forms
title: Forms
---

What can Forms do?
Form is an easy way to learn more about your customers in the platform complementing the customer profile. Using data you capture in Forms, you can then use the data with Targets to build customer segments.

In this article:

Configuring Forms
Advanced Settings
Form Fields & Settings
Form Snippet
Analysis & Reports
Exporting Data

Configuring Forms
Within your account go to Customers > Forms, click + New in the top right corner. You can navigate through the different Forms you've created by filtering by site or selecting the chevrons Screen_Shot_2018-04-11_at_9.45.49_am.png at the top to filter form data by the number of answers or publish date.  

Screen_Shot_2018-07-07_at_2.03.32_pm.png

Click on the 3 dots Screen_Shot_2018-04-11_at_11.27.32_am.png to Screen_Shot_2018-04-15_at_10.23.29_pm.png View the Form on the front end, Screen_Shot_2018-04-15_at_10.23.45_pm.png Edit the Form, Screen_Shot_2018-04-11_at_11.29.06_am.png Disable or Screen_Shot_2018-04-11_at_12.55.49_pm.pngDelete. 

 

Screen_Shot_2018-07-07_at_2.06.21_pm.png

Below we'll describe the Form Configurations.

Name & Description. Names your form, the description is only for internal use and will not show to end users.  

People Limit sets a rule of the number of people you'd like to answer before de-activating the form. Leave blank for no limits.

Site provides the site where the Form will display.

Screen_Shot_2018-04-09_at_5.24.15_pm.png Enabled publishes the form immediately after saving. 

Accept multiple responses, enables users to answer the same form multiple times keeping the last answer overwriting previous answers to the same form.  

Show only to registered users will only show the form to users who are authenticated and have an account.

Automatically ask the form to the audience will show the form when the user logs in or with an active session will show immediately. Deselecting this option,  asks the users automatically for their first name, last name and email to keep the answers. By activating a form to everyone the user will have an account associated with the email submitted. If the user already has an active session, the first name, last name and email fields will not appear.

Default Options when selected will redirect the form to the users profile while unregistered users will be redirected to the home page.

Advanced Settings
Screen_Shot_2018-07-07_at_2.10.04_pm.png

Custom Re-direct URL: Takes the user to the URL that you specify immediately after Form Submission. If you don't have a page created simply use the Thank You Page option.

Thank You Page: You can also configure a Thank You Message upon Form submission and add a URL redirect. When activating this option, you'll need to create a message to show, provide the URL that will be shown as a button to the user. You can also automatically redirect the user after a few seconds.

To the right you'll find Targeting Options, you can target a form to a specific set of customers using Targets.

Below Notifications lets you configure to whom the Form answers can sent by email while also sending a Thank You email to your customers.

Screen_Shot_2018-07-07_at_2.15.26_pm.png

In the Thank You email to customers, you can insert attributes that will update dynamically with the user information and other custom fields.  

When you have your form created select:

Screen_Shot_2018-07-07_at_2.17.30_pm.png


Form Fields & Settings
The right side of the Form builder has 3 configurations:

Add Fields: Click on a field and it will appear dynamically to the left where you can drag & drop the position. You can edit the field.
Field Settings: Appears immediately when clicking on a Field.
Form Settings: Allows you to edit the form configurations.
Screen_Shot_2018-07-07_at_2.19.58_pm.png

There are 9 field types with different configurations depending on the field. Below is a Single Text Line. 

Screen_Shot_2018-07-07_at_2.23.48_pm.png

Single Text Line 
For single line text there are 3 configurations: 

Default Answer: Provides a default answer if the customer leaves blank. 
Range: Provides a minimum and maximum number of characters.  
Regular Expression: Provides a way to validate incoming data with strings.  Creates a sequence of symbols and characters expressing a string or pattern to be validated. If you expect a customer answer to have certain characters or a format, you can use a Regular Expression to help validate the data. 

Modyo provides some patterns below selecting Screen_Shot_2018-04-16_at_1.42.58_pm.png:

Sample Validation	Description	Regular Expression
Email	Format for valid email.	^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$
URL	Format for URL and Email.	((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)
Phone Number	Format for phone number validation.	\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9} 
Chilean ID	Format for Chilean ID.	\b\d{1,8}\-[K|k|0-9]
Credit Card	Format for Credit Card Validation. 	[0-9]{13,16} 
US Postal Code	Format for United States Postal Code. 	(\d{5}([\-]\d{4})?)
Canadian Postal Code	Format for Canadian Postal Code.	[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9] 
Chilean Postal Code	Format for Chilean Postal Code.	[0-9]{7} 
UUID	Verifies UUID.	^[0-9A-Fa-f]{8}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{4}\-[0-9A-Fa-f]{12}$
Note: If you're going to apply Regular Expressions, remember to tell the customer in the field description the type of format, to avoid an unnecessary error message.


Paragraph Field
The paragraph field accepts multiple lines of text and has the same configurations as a Single Text Line field.

Number Field
Accepts numbers with two configurations:

Default Answer: Provides a default numeric answer if left blank. 
Range: Provides a minimum and maximum number range for the number that can be input.
Drop Down Field
Enables you to define the possible answers and reorder the sequence of answers.

Checkbox Field
Enables you to define the possible answers and reorder the sequence of answers. Select the default check box that you'd like the field to be checked. You can select multiple fields.

Choice Field
Enables you to define the possible answers and reorder the sequence of answers. Select the default check choice that you'd like the field to be checked. You can only select one choice.

Date Field
Enables you to accept dates with a predefined format and has 3 configurations:

Format: You select the format day/month/year or month/day/year.
Default date: Provides the default date if left blank.
Range: Provides the minimum and maximum date accepted in the field. (Remember to provide field instructions.)
Nested Field
Enables you to add bulk data from Microsoft Excel to populate a field with nested answers. Provides more options than drop down fields:

Manual Alternatives: Deselect the Use bulk alternatives, and you can manually enter alternated using the arrows:Screen_Shot_2018-04-16_at_3.46.04_pm.png where the down arrow creates answers in the same parent and the side arrow provides the options under the parent as a child. The field creates nested answers.
Use bulk alternatives: Copy and paste from a MS Excel Spreadsheet your list of alternatives as shown below. The first field "Santiago" will trigger all the possible options "Vitacura, Renca, Las Condes etc..."
Screen_Shot_2018-04-16_at_4.12.10_pm.png

Note: If you erase the parent, all children will also be deleted.


File Field
Enables you to capture files within a form. You can capture files up to 10mb. You can request to increase the default file size.

Note: You can drag the order of fields on the left by selecting Screen_Shot_2018-04-16_at_4.26.55_pm.png in the right side of each field.

 When you're ready to create your form select:
 Screen_Shot_2018-07-06_at_9.49.19_am.png


Form Snippet
The platform allows you to embed forms in any site or application using a Snippet. By deselecting "Show only to registered users" you'll see the following Form Snippet appear. Copy and paste the code in any site or application you'd like to capture date.

Screen_Shot_2018-07-07_at_2.28.48_pm.png
The code snippet has a basic style applied but will inherit any CSS style that is is applied. 


Analysis & Reports
Once you've deployed your form and you're receiving data, you can visualize structured data in bar chart, or download the submission data by switching views at the top and selecting Submissions where it currently says Analysis.

formetrics.png

You can navigate between answers in the Analysis view by selecting the answer dropdown to the right.

submissions.png


Exporting Data
With Submissions you can see the answers by customer. By clicking the name you'll drill down into the form answers. To export all the answers from a certain date, select the top checkbox which selects all the users and then the bottom Bulk Actions Screen_Shot_2018-04-16_at_8.27.11_pm.png and then Export. You'll be asked for the start date from which you'd like to export data.