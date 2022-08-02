---
search: true
---

# Customize Experiences with Google Optimize

## Introduction

Welcome to a new Modyo tutorial. This tutorial is going to focus on [Modyo Channels](/en/platform/channels) and Google Optimize to perform User Experience (UX) Customization. For this tutorial, we will make use of our fictitious brand Dynamic Bank. Dynamic Bank's Marketing team created a campaign on Instagram to attract new potential customers for the young men segment, those who click the ad will go to our  site with the UTM parameter 'young_man' to identify traffic from this campaign and personalize the experience to increase conversion rate.

## Prerequisites

The tutorial requires a Modyo site with Dynamic Bank Home, an account with Google Optimize, and Google Analytics Universal.

## Step 1: Create a Space in Optimize

The first thing to do is create an account within [Google Optimize](https://optimize.google.com/) by clicking <b> Create account </b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;" alt="Create account button"/>

Fill in the fields, accept the conditions, and move on to the next step.

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;"
alt="The modal that pops up when creating a new account"/>

After completing the steps, click on <b>Create</b>.

## Step 2: Create experience

Once the account is created within Optimize, click <b> Start </b> to create the first experience, fill in the appropriate fields, and select <b>Customization</b>.

<img src="/assets/img/tutorials/optimize/experiencia.png" style="max-width: 450px;margin: auto 0;" alt="Image showing the dialog options when creating a new experience in Google Optimize"/>

Click <b>Modify website</b> and edit the Hero image.

To edit the image, select the div in which the image is located, find the background section, and change the image URL to the following. 

<img src="/assets/img/tutorials/optimize/edit.png" style="max-width: 650px;margin: auto 0;" alt="Edit the image using the sidebar options"/>

```html
https://cloud.modyocdn.com/uploads/8456879d-ea48-45e1-af25-be9de106cb5e/original/young_man.jpg
```
It should look like something like this:

<img src="/assets/img/tutorials/optimize/editor.png" style="max-width: 650px;margin: auto 0;" alt="After editing, the image should have the new URL"/>

Save your changes and click <b>Done</b> to return to the main screen of the experiment.

Back on the personalization screen, add <b>Page Targeting</b>, click customize, and select <b>UTM parameter</b>.

In customization change the dropdown of <code>is equal to</code> to <code>contains</code> and the value with <code>young_man</code>.

<img src="/assets/img/tutorials/optimize/utm.png" style="max-width: 650px;margin: auto 0;" alt="This image shows the Add a UTM parameter screen"/>

Click <b>Add</b> and then the Google Analytics account has to be linked to synchronize information.

To call Google Analytics every time the button on the ad is clicked, in Modyo Platform, in the side menu, select **Channels** and click **Sites**. Click on your **Site**. In the page you want to modify, add the following code to the desired button:

```html
onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA Hero'});"
```

Now whenever this button is clicked, the information is sent to Google Analytics.

## Step 3: Start

To start the test, installation and configuration must be completed in the Google Analytics and Google Optimize portals. In case setup is incomplete, follow the steps in their homepage to continue setup.

To start the Customization click the button <b>Start</b> at the top right.

## Conclusion

Congratulations! You have completed the Customize Experiences with Google Optimize tutorial.

You can now segment your audience and customize the experience depending on its associated segment in Modyo Platform and Google Analytics.