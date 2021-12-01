---
search: true
---

# Creating and Publishing Content

## Introduction

Welcome to the first tutorial in the Modyo training series. In this tutorial, you'll create and publish content using [Modyo Content](/en/platform/content), the Modyo tool for managing dynamic, cross-platform sites.

### Dynamic Bank

Dynamic Bank is our fictional brand that we built to use in all our demos and tutorials. With Dynamic Bank you can live the experience of building digital products with Modyo.

Once you complete this tutorial series, your project should look like this:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">View the design in Figma</a>

## Prerequisites

You only need to have a Modyo account and have access to the platform. Don't have an account? You can request one with the platform administrator at your company, or request a trial [here](https://platform.modyo.cloud/onboarding).

## Step 1: Create a Space

Once you log in to Modyo with your account, we'll go to the [Modyo Content](/en/platform/content) module to create our first [Space](/en/platform/content/spaces.html#create-a-space). A Space is where you group content types and entries from your sites.

To create your Space, follow these steps:

1. In the main menu, select **Content** and click on **Spaces**.
2. Click **+ New Space**.
3. In the New Space window fill in the following fields:
  - Name: **Bank**
  - Identifier: **bank**
  - Default language: **Spanish (Spain) **
  - Realm of Space: **None**
4. Click **Create**.


<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/new-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 200px;margin: auto 0px 20px 0px;"/>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/create-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

## Step 2: Create "Hero" Type 

Create your first [content type](/en/platform/content/types.html#content-types) by following these steps:

1. In the Spaces window, click on the space **Bank**.
2. From the main menu, click **Types**.
3. Click **+ New Type** and fill in the following fields:

 - Name: Hero
 - Identifier: hero
 - Cardinality: Multiple

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
  <th style="text-align: left">Valores que permitiremos</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Text
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Title Link
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Url
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Dropdown
  </td>
  <td>
   Button color<br>
  </td>
  <td>
    *primary<br>
    secondary</small>
  </td>
 </tr>
</table>

4. In the content type window, drag the items in the following order.


![Type Hero](/assets/img/tutorials/how-to-create-dynamicbank-content/hero.png)

## Step 3: Create and Post "Hero" Type entry

To create your first [entry](/en/platform/content/entries) of type “Hero”, follow these steps:

1. In the main menu, click **Entries**.
1. Click **+ New Entry**.
1. Select the content type **Hero** and fill in the following values:
 - Name: **_"Wherever you are, Dynamic Bank is with you"_**
 - Identifier: dynamicbank_hero

4. For the rest of the fields, use the following values:

<table>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/bank-hero.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   We are with you for everything you need
  </td>
 </tr>
 <tr>
  <td>
   <b>Title Link</b>
  </td>
  <td>
   Make an account now
  </td>
 </tr>
 <tr>
  <td>
   <b>Url</b>
  </td>
  <td>
   <code>#</code>
  </td>
 </tr>
 <tr>
  <td>
   <b>Button color</b>
  </td>
  <td>
   primary
  </td>
 </tr>
</table>

When finished, select **Publish Now** and click **[Publish](/en/platform/content/entries.html#publish-an-entry)**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/publish.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0px 30px 0px;"/>

:::tip Very good! You have created your first Type and Entry successfully
Now follow the steps below to create the Types and Tickets you'll need for future tutorials.
:::

## Step 4: Create "News" Type

From the main menu return to the **Types** section. As with the type “Hero”, create the type “News” with the following fields:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Excerpt
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Link
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Url
  </td>
 </tr>
</table>

## Step 5: Create and publish News

Go to **Entries** and create the following entries for the “News” type:

### First Entry

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Locations
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_01.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Find your closest location and avoid any hassles.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   See locations
  </td>
 </tr>
 <tr>
  <td>
   <b>URL</b>
  </td>
  <td>
   Destination url or #
  </td>
 </tr>
</table>

### Second Entry

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Mortgage
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_02.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Everything that you need to know about your mortgage.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   Learn more
  </td>
 </tr>
 <tr>
  <td>
   <b>URL</b>
  </td>
  <td>
   Destination URL or #
  </td>
 </tr>
</table>

### Third Entry

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Gourmet Wednesday
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_03.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   40% off every Wednesday in the best takeout restaurants.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   See benefits
  </td>
 </tr>
 <tr>
  <td>
   <b>URL</b>
  </td>
  <td>
   Destination URL or #
  </td>
 </tr>
</table>

At the end of each entry, select **Publish Now** and click **Publish**.

## Step 6: Create “Benefits” Type

Following the same steps, create the type for “Benefits” with the fields:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Excerpt
  </td>
 </tr>
</table>

## Step 7: Create Categories

The [categories](/en/platform/content/entries.html#categories) are used to sort your entries. To filter your entries of type “Benefits” create the following categories.

1. From the main menu, click **Categories**.
2. Click **+ New Category** and create the following categories:

- Gourmet
- Health
- Activities
- Shopping
- Travel

3. Click **Save**.

>Your category window should like the following image.

![Type](/assets/img/tutorials/how-to-create-dynamicbank-content/categories.png)

## Step 8: Create and Publish Benefits

In the main menu, click **Entries**. Create the Benefits entries with the following fields:

#### Benefit One

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Master Card
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/mall.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off using your card in Miami.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Travel
  </td>
 </tr>
</table>

#### Benefit Two

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Seafood Restaurant
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gourmet.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off your total.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Gourmet
  </td>
 </tr>
</table>

#### Benefit Three

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic AIR
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/plane.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   30% off in international flights.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Travel
  </td>
 </tr>
</table>

#### Benefit Four

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Kids clothes
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/kids.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   2x1 for the entire month.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Shopping
  </td>
 </tr>
</table>

#### Benefit Five

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic AID
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/pills.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   15% off every Monday.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Healthy
  </td>
 </tr>
</table>

#### Benefit Six

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic Cinema
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/cine.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   40% off every Friday.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Panorama
  </td>
 </tr>
</table>

#### Benefit Seven

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic FIT
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gym.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off in annual plan.
  </td>
 </tr>
 <tr>
  <td>
   <b>Category</b>
  </td>
  <td>
   Healthy
  </td>
 </tr>
</table>

At the end of each entry, select **Publish Now** and click **Publish**.

## Step 9: Create "Testimonial" Type

Create the last type for testimonials, for this type you will need the following fields:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Author
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Testimony
  </td>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
  </td>
 </tr>
</table>

## Step 10: Create and Publish Testimonials

Create two entries with the following fields:

#### Testimonial One

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Testimonio Adriana
  </td>
 </tr>
 <tr>
  <td>
   <b>Author</b>
  </td>
  <td>
   Adriana Pérez
  </td>
 </tr>
 <tr>
  <td>
   <b>Testimony</b>
  </td>
  <td>
   I'm very happy with Dynamic Bank, because they gave me the opportunity to grow my business and now I am developing my next project.
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/adriana.png" style="max-width: 100px;margin: auto 0;"/>
  </td>
 </tr>
</table>

#### Testimonial Two

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Testimonio Raúl
  </td>
 </tr>
 <tr>
  <td>
   <b>Author</b>
  </td>
  <td>
   Raúl Díaz
  </td>
 </tr>
 <tr>
  <td>
   <b>Testimony</b>
  </td>
  <td>
   I contacted Dynamic Bank, obtained my credit and now I am currently soliciting my third. I am truly grateful for their trust in me.
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/raul.png" style="max-width: 100px;margin: auto 0;"/>
  </td>
 </tr>
</table>

>Remember to publish the posts you've created.

## Conclusion

Congratulations! You used [Modyo Content](/en/platform/content) to its full potential using [Spaces](/en/platform/content/spaces), [Types] (/en/platform/content/types), [Entries] (/en/platform/content/entries), and [Categories](/en/platform/content/entries.html#categories) to generate all the content you need to build the Home page for Dynamic Bank.

We already have all our entries to be able to develop the Front-end and the Home page for Dynamic Bank can be generated from [Modyo Channels](/en/platform/channels) while the content is changed from Modyo Content.

What comes next? Managing this content from a Web site created in [Modyo Channels](/en/platform/channels).
