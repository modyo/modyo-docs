---
search: true
---

# Perform A/B Testing with Google Optimize

## Introduction

Welcome to a new Modyo tutorial. In this tutorial, we are going to focus on [Modyo Channels](/en/platform/channels) and Google Optimize to perform an A/B Test on a widget, since our fictitious team believes that humanizing the banner will improve our conversion rates. For this tutorial we are going to have a banner with a mockup of a cell phone, and another with a person.

<code>Test A</code>
<img src="/assets/img/tutorials/optimize/testa.png" style="max-width: 450px;margin: auto 0;" alt="Image showing what we will show to Test A users"/>

<code>Test B</code>
<img src="/assets/img/tutorials/optimize/testb.png" style="max-width: 450px;margin: auto 0;" alt="Image showing what we will show to Test B users"/>

## Prerequisites

To complete the tutorial you need a Modyo site with Dynamic Bank Home, a widget on the platform (in our case **APP**), an account in Google Optimize, and Google Analytics Universal.

## Step 1: Create a Space in Optimize

The first thing to do is create an account within [Google Optimize](https://optimize.google.com/) by clicking <b> Create account </b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;" alt="Create account button"/>

Fill in the fields, accept the conditions, and move on to the next step.

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;" alt="The modal that pops up when creating a new account"/>

After completing the steps, click on <b>Create</b>.

## Step 2: Create experience

Once the account is created within Optimize, click Start to create the first experience, fill in the appropriate fields, and select <b>A/B Test</b>.

<img src="/assets/img/tutorials/optimize/ab.png" style="max-width: 450px;margin: auto 0;" alt="Image showing the dialog options when creating a new experience in Google Optimize"/>

Once the experience is created, create a variant, instead of the normal widget code <b>APP</b>, replace it with the following code:

```html
<div class="bg-white" id="app_home">
    <div class="container py-5 position-relative">
        <div class="row justify-content-center align-items-center py-5 py-md-0">
            <div class="pattern_app"></div>
            <div class="col-12 col-md-4">
                <h4 class="h2 mb-3">DYNAMIC APP, <span class="font-weight-normal">take your bank everywhere</span></h4>
                <a href="#" onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA APP', 'value': 0});"><img src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png" alt="Download"></a>
            </div>
            <div class="col-12 col-md-4 d-none d-md-block test-a">
                <img src="https://cloud.modyocdn.com/uploads/a0de39ca-33aa-4790-b88e-492d2d665371/original/woman_app.png" alt="Woman App">
            </div>
            <div class="col-12 col-md-4 d-none d-md-none test-b">
                <img src="https://cloud.modyocdn.com/uploads/58a9628d-81c8-44b1-97a1-bd585c186931/original/app_bank.png" alt="App">
            </div>
        </div>
    </div>
</div>
```

In the Google Optimize menu, click <b> Add variant </b> which we will call <code>Change image</code>.

<img src="/assets/img/tutorials/optimize/ab-variante.png" style="max-width: 750px;margin: auto 0;" alt="Image showing the add variant button"/>

Click edit to make the change:

<img src="/assets/img/tutorials/optimize/ab_variante.png" style="max-width: 750px;margin: auto 0;" alt="Image showing the segmentation for the new variant, split in half for the A/B Test"/>

When the editor opens, we go to the bottom of the APP widget and replace line 2 (the container div) onwards with the following:

 ```html
<div class="row justify-content-center align-items-center py-5 py-md-0">
            <div class="pattern_app"></div>
            <div class="col-12 col-md-4">
                <h4 class="h2 mb-3">DYNAMIC APP, <span class="font-weight-normal">take your bank everywhere</span></h4>
                <a href="#" onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA APP', 'value': 1});"><img src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png" alt="Download"></a>
            </div>
            <div class="col-12 col-md-4 d-none d-md-none test-a">
                <img src="https://cloud.modyocdn.com/uploads/a0de39ca-33aa-4790-b88e-492d2d665371/original/woman_app.png" alt="Woman App">
            </div>
            <div class="col-12 col-md-4 d-none d-md-block test-b">
                <img src="https://cloud.modyocdn.com/uploads/58a9628d-81c8-44b1-97a1-bd585c186931/original/app_bank.png" alt="App">
            </div>
        </div>
  ```
<b> Save </b> and click <b> Done </b> to return to the experience.

<img src="/assets/img/tutorials/optimize/50_50.png" style="max-width: 750px;margin: auto 0;" alt="Image showing the updated values for the B Test"/>

We need to link our Google Analytics account to measure and define the objectives of the Test.

To define the Goal, Google Analytics is added in the download button, with Category <b>button</b> and the tag <b>CTA APP</b>.

<img src="/assets/img/tutorials/optimize/objetivos.png" style="max-width: 750px;margin: auto 0;" alt="Image showing the objective of the experience"/>

Save the target and start the test.

## Step 3: Start

To start the test go to settings and check the installation, it will indicate if you have the Google Analytics and Google Optimize code on your site. Otherwise, follow the steps in Google Analytics and Google Optimize to complete your setup.

At the end of the installation, start the test by clicking on the button <b>Start</b> at the top right.

## Conclusion

Congratulations! You've finished the A/B Test tutorial with Google Optimize and you're ready to test your site and improve conversion. As you start to receive usage statistics, you can see them from the Google Optimize menu.

<img src="/assets/img/tutorials/optimize/analytics.png" style="max-width: 750px;margin: auto 0;" alt="Image showing the analytics gathered from the A/B Test in Google Optimize"/>