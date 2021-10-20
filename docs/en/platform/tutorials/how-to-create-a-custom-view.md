---
search: true
---

# Creating a Content View

## Introduction

Welcome to a new tutorial of the Modyo training series. In this tutorial we will focus on [Modyo Channels] (/en/platform/channels) where we will create a view to deploy our created entries in [Modyo Content] (/en/platform/content).

The link between Content and Channels is one of the most important features when it comes to having dynamic sites that are easy to manage by anyone.

In this tutorial we will continue to use the fictional “Dynamic Bank” brand, but now we will focus on the detailed view of the benefits.

<img src="/assets/img/tutorials/how-to-create-custom-view/beneficios.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=847%3A8&node-id=847%3A14&viewport=599%2C497%2C0.26033779978752136&scaling=min-zoom" target="blank">View Figma design</a>

## Prerequisite

To begin this tutorial we must have completed the following tutorials: [Dynamic Bank Content](/en/platform/tutorials/how-to-create-content) and [Creation Home Dynamic Bank](/en/platform/tutorials/how-to-create-home). And just like in previous tutorials you should have knowledge about HTML, CSS, JS, and the Modyo platform.

## Step 1: Add New Fields to Benefits

In the Content Creation Tutorial, we created the [Space] (/en/platform/content/space) Bank, the [Type] (/en/platform/content/types) Benefits, and the [Enries] (/en/platform/content/entries). We will now use this Type, but adding the necessary fields to generate its detail according to the Figma design.

To modify the Type <b>Benefits</b> we are going to enter the Content module, select our Space, enter Types and select the corresponding Type. To the existing fields (Cover and Excerpt) we are going to add the following fields:

 <table> 
 <tr> <th style="text-align: left;"> Field </th> <th style="text-align: left;"> Name </th> </tr> 
 <tr> 
 <td> 
 Multiline text
 </td> 
 <td> 
 Short description
 </td> 
 </tr> 
 <tr> 
 <td> 
 Asset
 </td> 
 <td> 
 Logo
 </td> 
 </tr> 
 <tr> 
 <td> 
 Multiline text
 </td> 
 <td> 
 Description
 </td> 
 </tr> 
 <tr> 
 <td> 
 Multiline text
 </td> 
 <td> 
 Commercial terms
 </td> 
 </tr> 
 <tr> 
 <td> 
 Multiline text
 </td> 
 <td> 
 Validity
 </td> 
 </tr> 
 <tr> 
 <td> 
 Locations
 </td> 
 <td> 
 Location
 </td> 
 </tr> 
 </table> 

## Step 2: Fill fields in an entry

After we have our Type with all the fields we need, we will fill in an entry so we can use it as an example.

For this case we will use the Dynamic Cine entry:

<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;"></th></tr> 
<tr>
  <td>
    Short description
  </td>
  <td>
    40% off in admissions every Friday.
  </td>
</tr>
<tr>
  <td>
    Logo
  </td>
  <td>
    <img src="https://cloud.modyocdn.com/uploads/90e43e8b-f15e-41c7-9abf-5fa1196079cb/original/Dynamic_cinema.png" style="max-width: 200px;margin: auto 0;"/>
  </td>
</tr>
<tr>
  <td>
    Description
  </td>
  <td>
    Enjoy 40% off in admissions every Friday to enjoy the best selection of Dynamic Cinema, enjoy this exclusive benefits for Dynamic Bank clients paying with your debit or credit cards.
  </td>
</tr>
<tr>
  <td>
    Commercial terms
  </td>
  <td>
    Benefit valid for Dynamic Bank clients paying their admission with their debit or credit cards every Friday with a maximum of 8 tickets per client.
  </td>
</tr>
<tr>
  <td>
    Validity
  </td>
  <td>
    January 1st to December 31st, 2021
  </td>
</tr>
<tr>
  <td>
    Location
  </td>
  <td>
    Santiago, Chile
  </td>
</tr>
</table>

Remember to post your changes so they are reflected.

## Step 3: Create Custom Benefit View

Once our content is ready, we will develop your [Custom View] (/es/platform/channels/templates.html #vistas -for-content) within our site, in order to generate dynamic Pages connected to Content.

For this, we will go back to Templates within our site, and in the Views section in the Custom section we click on <b> + </b>.

<img src="/assets/img/tutorials/how-to-create-custom-view/custom_view.png" style="max-width: 400px;margin: auto 0;"/>

When opening the panel we must enter a Path, which is the URL that will have nested our content, which in our case will be <b> benefit </b>, and select our Space <b> Bank </b> and Type <b> z0 Benefits </b>.

To make it look like in our design, we're going to copy the following HTML replacing the code that comes as an example.

```html
<div class="mb-5 mb-md-0 pb-5 pb-md-0" id="hero">
  <div class="bg-dark mb-5 mb-md-0 pt-5 pb-0 py-md-5">
    <div class="pattern_hero"></div>
    <div class="d-flex mb-0 my-md-5 hero_img">
      <div class="row w-100 justify-content-end no-gutters">
        <div
          class="col-10 col-md-7 wow slideInRight hero_img rounded-left"
          style="background-image: url({{ entry.fields['Cover'].url }})"
        ></div>
      </div>
    </div>
    <div class="hero_txt">
      <div class="container">
        <div class="row">
          <div
            class="ml-3 ml-md-0 bg-info p-5 col-10 col-md-6 rounded text-white wow slideInLeft"
          >
            <span
              class="h6 badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm"
              >{{ entry.meta.category}}</span
            >
            <h1 class="h2 font-weight-bold mb-2">{{ entry.meta.title }}</h1>
            <h3 class="h6 font-weight-bold mb-0">
              {{ entry.fields['Short description'] }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container my-5 py-5">
  <div class="row justify-content-between">
    <div class="col-12 col-md-6">
      <div class="col-7 d-flex-inline shadow-sm rounded px-5 py-4 mb-5">
        <img
          src="{{ entry.fields['Logo'].url }}"
          alt="{{ entry.meta.title }}"
          class="w-100 my-2"
        />
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Description</h5>
        <p class="text-muted">{{ entry.fields.Description }}</p>
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Validity</h5>
        <p class="text-muted">{{ entry.fields.Validity }}</p>
      </div>
    </div>
    <div class="col-12 col-md-5">
      <div class="mb-4">
        <h5 class="text-dark">Where</h5>
        {{entry.fields['Location'] | static_map: '800x400', 15, 'roadmap',
        'https://cloud.modyocdn.com/uploads/5fc8b46c-1f64-404c-86a0-3db703f76398/original/pin_dynamic.png'}}
      </div>
      <div class="mb-4">
        <h5 class="text-dark">Commercial terms</h5>
        <p class="text-muted">{{ entry.fields['Commercial terms'] }}</p>
      </div>
    </div>
  </div>
</div>
<div class="bg-light py-5" id="benefits">
  <div class="container py-5">
    <h3 class="text-dark text-center">Related benefits</h3>
    {% assign relateds = spaces['bank'].types['benefits'].entries | paginated: 5
    | by_lang: 'en' %}
    <div class="py-5" id="productos">
      <div class="row">
        {% assign count = 0 %} {% for related in relateds %} {% if related.slug
        != entry.slug and 4 > count %} {% assign count = count | plus: 1 %}
        <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
          <a class="card shadow-sm w-100" href="{{ related.meta.url }}">
            <figure class="m-0">
              <span
                class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
                >{{ related.meta.category}}</span
              >
              <img
                aria-hidden="true"
                src="{{ related.fields['Cover'].url }}"
                alt="{{ related.meta.title }}"
                class="w-100"
              />
            </figure>
            <figcaption class="pt-4 px-4 pb-2">
              <h4 class="h6 text-dark">{{ related.meta.title }}</h4>
              <p class="text-muted">{{ related.fields.Excerpt }}</p>
            </figcaption>
          </a>
        </div>
        {% endif %} {% endfor %}
      </div>
    </div>
  </div>
</div>
<style>
  .hero_img {
    height: 350px;
  }
  #hero .badge_category {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
  }
</style>
```

You've already created your first Custom View connected to a Modyo Content Space. With it we can enter an Entry from our site and also preview the work from Modyo Content.

## Step 4: Preview Entires in Content

Now that we already have our Space and Type associated with a site, we will be activated a new feature, the [Preview mode on a site] (/es/platform/content/entries.html #vista -previous). To access the preview mode we have to click on the “eye” icon in the top action bar:

<img src="/assets/img/tutorials/how-to-create-custom-view/preview_content.png" style="max-width: 400px;margin: auto 0;"/>

Within the modal click on <b> Preview on site </b> and select the site where we did the custom view within the dropdown:

<img src="/assets/img/tutorials/how-to-create-custom-view/preview_site.png" style="max-width: 400px;margin: auto 0;"/>

When you select it, in a new tab we will open the preview of the entry on the site, so that you can review the changes to the site.

## Opinion

Congratulations! You have finished the third course of the Modyo tutorials series.

In this tutorial we perform one of the main tools that Modyo delivers when it comes to maintaining your digital channels, adding an intermediate layer to review the work being developed in [Modyo Content] (/en/platform/content) and generating dynamic Pages connected to our sites on [Modyo Channels] (/en/platform/channels) .
