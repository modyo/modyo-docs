---
search: true
---

# Creating and Publishing Content

## Introduction

Welcome to the first tutorial in the Modyo training series. In this tutorial, you'll create and publish content using [Modyo Content](/en/platform/content), the Modyo tool for managing dynamic, cross-platform sites.

### Dynamic Bank

Dynamic Bank is our fictional brand that we built to use in all our demos and tutorials. With Dynamic Bank you can live the experience of building digital products with Modyo.

Once you complete this tutorial series, your project should look like this:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" alt="Dynamic Bank homepage"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">View the design in Figma</a>

## Prerequisites

You only need to have an account on Modyo and have access to the platform. Don't have an account? You can request one with the platform administrator at your company, or request a trial [here](https://platform.modyo.cloud/try).

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


<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/new-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 200px;margin: auto 0px 20px 0px;" alt="+ New Space button"/>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/create-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="This image shows the Add a new Space screen"/>

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
  <th style="text-align: left">Type of field</th>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Values</th>
 </tr>
 <tr>
  <td>
   Archivo
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

4. In the content type description window, drag the items in the following order.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/hero.png" alt="This image shows the new entity type screen for the Hero type">

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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/bank-hero.jpg" style="max-width: 200px;margin: auto 0;" alt="The cover page for this entry"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   We are with you when you need us
  </td>
 </tr>
 <tr>
  <td>
   <b>Title Link</b>
  </td>
  <td>
   Become a client
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

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/publish.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0px 30px 0px;" alt="The Publish Options screen"/>

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
   File
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
   Branches
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_01.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Find the branch closest to you.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   View branches
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_02.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news 2 entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Find everything about what you need to know for your mortgage.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   Know more
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
   Gourmet Wednesdays
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_03.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news 3 entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   40% off every Wednesday.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   View benefit
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
   File
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

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/categories.png" alt="This is how the categories screen should look like after adding the different categories.">

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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/mall.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for mall entries">
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off every purchase in Miami.
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gourmet.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for gourmet entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off your bill.
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/plane.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for plane entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   30% off international flights.
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/kids.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for kids entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   2x1 all month long.
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/pills.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for pills entries"/>
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/cine.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for cinema entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   40% off your tickets every Friday.
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gym.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for gym entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% off the annual plan.
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
   File
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
   Testimony Adriana
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
   I feel very good with Dynamic Bank, because they gave me the opportunity to grow as a business and I already have other projects in mind to keep growing.
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/adriana.png" style="max-width: 100px;margin: auto 0;" alt="Cover page for testimony entries"/>
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
   Testimony Raúl
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
   I contacted Dynamic Bank, got my credit and I am now soliciting my third. I am truly grateful for trusting in me.
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/raul.png" style="max-width: 100px;margin: auto 0;" alt="Cover page for testimony 2 entries"/>
  </td>
 </tr>
</table>

>Remember to publish the posts you've created.

## Conclusion

Congratulations! You used [Modyo Content](/en/platform/content) to its full potential using [Spaces](/en/platform/content/spaces), [Types](/en/platform/content/types), [Entries](/en/platform/content/entries), and [Categories](/en/platform/content/entries.html#categories) to generate all the content you need to build the Home page for Dynamic Bank.

We already have all our entries to be able to develop the Front-end and the Home page for Dynamic Bank can be generated from [Modyo Channels](/en/platform/channels) while the content is changed from Modyo Content.

What comes next? Managing this content from a Web site created in [Modyo Channels](/en/platform/channels).
