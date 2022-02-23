---
search: true
---

# Creating a Content Page

## Introduction

Welcome to a new tutorial in the Modyo training series. This tutorial will focus on [Modyo Channels](/en/platform/channels) where you'll create a custom view to display posts created in [Modyo Content](/en/platform/content).

The link between Content and Channels is one of the most important features when it comes to having dynamic and easy-to-manage sites. In the [Content Creation](/en/platform/tutorials/how-to-create-content) Tutorial, you created the [Space](/en/platform/content/space) Bank, the [Content Type](/en/platform/content/types) Benefits, and the [Entries](/en/platform/content/entries). You will now use this Type by adding the necessary fields to generate the details according to Figma's design.

In this tutorial we will continue to use the fictional brand “Dynamic Bank”, but now we focus on creating, previewing, and publishing a **Benefits** entry for the fictional brand “Dynamic Cine”.

<img src="/assets/img/tutorials/how-to-create-content-page/beneficios.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=847%3A8&node-id=847%3A14&viewport=599%2C497%2C0.26033779978752136&scaling=min-zoom" target="blank">View Figma design</a>

## Prerequisites

Completed the tutorials:

- [Creating and Publishing Content](/en/platform/tutorials/how-to-create-content)
- [Creating a Basic Site](/en/platform/tutorials/how-to-create-home)

Be familiar with:

- HTML
- CSS
- JS
- Modyo's platform

## Step 1: Add fields to the type “Benefits”

1. In the platform, select **Content** and click **Spaces**.
1. Click the **Bank** Space and select **Types**
1. Click the **Benefits** type.
1. In the content type screen, add the following fields:

<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;">Name</th></tr> 
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

## Step 2: Create entry with new fields

After you have the type with the new fields, the next step is to publish content of this type. To create a new entry called **Dynamic Cine**, follow these steps:

1. In the side menu, select **Entries**.
1. Click **+ New Entry**.
1. Select the **Benefits** type.
1. Fill in the **Dynamic Cine** name and **dynamic-cine** identifier.
1. Click **Create**.
1. On the Input fields screen, fill in the following values:


<table>
<tr><th style="text-align: left;">Field</th> <th style="text-align: left;"></th></tr> 
<tr>
  <td>
    Short description
  </td>
  <td>
    40% off tickets every Friday.
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
    Cover
  </td>
  <td>
    <img src="https://cloud.modyocdn.com/uploads/c83b4e17-4ff6-44bd-a23e-ef9d2163778d/original/cine.jpeg" style="max-width: 200px;margin: auto 0;"/>
  </td>
</tr>
<tr>
  <td>
    Description
  </td>
  <td>
    Enjoy 40% off every Friday in tickets for the best movies in Dynamic Cinema, these benefits are exclusive to Dynamic Bank clients paying with your credit and debit cards.
  </td>
</tr>
<tr>
  <td>
    Commercial terms
  </td>
  <td>
    Benefit valid for Dynamic Bank clients by paying with your credit or debit cards in tickets for Friday with a maximum of 9 tickets daily per client.
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

7. Click **Save**.

## Step 3: Create “Benefits” Content Page

After creating the post with its content, you now need to create a [Content Page](/en/platform/channels/pages.html#content-pages) within your site to generate dynamic pages connected to **Content**.

To create a Content Page, follow these steps:

1. In the side menu, select **Channels**, click **Sites**.
1. Select your site and click **Pages**.
1. Click on **+ New Page**.

<img src="/assets/img/tutorials/how-to-create-content-page/content-pages.png" style="max-width: 400px;margin: auto 0;"/>

4. In the modal, select **Content Page**.
5. Select the space **Bank** and Type **Benefits**. Type the name of the page and its path.
6. Click Create.


To follow the Figma layout, paste the following HTML replacing the code that comes from the example:


``INDEX``

```html
<div class="mb-5" id="benefits">
    <div class="container">
        <div class="row">
            {% for entry in entries %}
            <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
                <a class="card shadow-sm w-100 text-decoration-none" href="{{ entry.meta.url }}" >
                    <figure class="m-0">
                        <span class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small">{{ entry.meta.category}}</span>
                        <img aria-hidden="true" src="{{ entry.fields['Cover'].url }}" alt="{{ entry.meta.title }}" class="w-100"/>
                    </figure>
                    <figcaption class="pt-4 px-4 pb-2">
                        <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
                        <p class="text-muted">{{ entry.fields['Short description'] }}</p>
                    </figcaption>
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>
```

``SHOW``

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
                {{entry.fields['Location'] | static_map: '800x400', 15, 'roadmap','https://cloud.modyocdn.com/uploads/5fc8b46c-1f64-404c-86a0-3db703f76398/original/pin_dynamic.png'}}
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
        {% assign relateds = spaces['bank'].types['benefits'].entries | paginated: 5 %}
        <div class="py-5" id="productos">
            <div class="row">
                {% assign count = 0 %} {% for related in relateds %} {% if related.slug != entry.slug and 4 > count %} {% assign count = count | plus: 1 %}
                <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
                    <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ related.meta.url }}">
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

This **Content Page** is now connected to the **Dynamic Bank** Space. With it you can access the Entries' data from your Site using Liquid.

Now that we have our Space and Type associated with a Site, you can turn on [Site Preview Mode](/en/platform/core/key-concepts.html#preview-mode). To access preview mode click on the “eye” icon in the top action bar:

<img src="/assets/img/tutorials/how-to-create-content-page/preview_content.png" style="max-width: 400px;margin: auto 0;"/>


## Conclusion

Congratulations! You have finished the third course of the Modyo tutorials series.

In this tutorial, you completed one of Modyo's main tools when it comes to maintaining your digital channels, adding a middle layer to view the work that went into [Modyo Content](/en/platform/content), and generated a Dynamic Page connected to your Site in [Modyo Channels](/en/platform/channels).
