---
search: true
---

# Creación y Publicación de Contenidos

## Introduction

Welcome to the first tutorial of the Modyo training series. En este primer tutorial revisaremos todo lo que necesitas saber para crear y publicar contenido usando [Modyo Content](/es/platform/content), herramienta indispensable a la hora de gestionar sitios dinámicos y multiplataforma.

### Dynamic Bank

Dynamic Bank is our fictitious brand that we create for use in all our demos and tutorials. With Dynamic Bank we try to recreate in the most reliable way the experience of building digital products with Modyo.

Once you complete this tutorial series, your project should look like this:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" />

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">See the design in Figma</a>

## Prerequisites

To run the steps in this tutorial you must have only one active account in Modyo, and as is the first tutorial in the series, it does not require you to have completed any previously.

Don't have a Modyo account? You can request an account with the platform administrator in your company, or create a trial account just for you from [here](https://platform.modyo.cloud/onboarding).

## Step 1: Create a Content Space

Una vez que ingreses a Modyo con tu cuenta, iremos al módulo de [Modyo Content](/es/platform/content) para [crear nuestro primer espacio](/es/platform/content/spaces.html#crear-un-espacio), que llamaremos **"Bank"**, selecionando como idioma **Spanish (Spain)**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/new-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 200px;margin: auto 0px 20px 0px;" />

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/create-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" />

## Step 2: Create Type "Hero"

Now we need to create our first \[content type\](/es/platform/content/types.html #tipos -content) in our **"Bank"** space. Una vez que estés en este espacio, debes ir a la sección **Types** y darle clic al botón superior derecho que dice **"+ Nuevo Tipo"**.

From there, we generate our first Type called **"Hero"** with the following fields:

<table>
 <tr>
  <th style="text-align: left">Field Type</th>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Values that we will allow</th>
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
    *primary <br> 
 secondary</small>
  </td>
 </tr>
</table>

![Type Hero](/assets/img/tutorials/how-to-create-dynamicbank-content/hero.png)

:::warning
Attention It is important to save changes before exiting.
:::

## Step 3: Create and Post Type "Hero" entry

Now we'll create our first [entry](/en/platform/content/entries) of the type we just created. Para eso, debemos ir a la sección **Entries** y hacer clic en el botón **Create an entry**, para luego seleccionar el tipo "Hero" y agregar en Name **_"Donde estés, Dynamic Bank te acompaña"_**.

After editing the content we must save and \[publish\](/es/platform/content/entries.html #publicar -a-entry).

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
   For whatever you need we are with you everywhere
  </td>
 </tr>
 <tr>
  <td>
   <b>Title Link</b>
  </td>
  <td>
   Become a customer
  </td>
 </tr>
 <tr>
  <td>
   <b>Url</b>
  </td>
  <td>
   destination url, for now <code> # </code> will suffice
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

Luego de editar el contenido debemos guardar y [publicar](/es/platform/content/entries.html#publicar-una-entrada).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/publish.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0px 30px 0px;" />

:::tip
¡Muy bien! Ya conseguiste crear tu primer Tipo y Entrada con éxito Ahora crearemos el resto de los Tipos y Entradas que necesitamos para este tutorial.
:::

## Step 4: Create Type "News"

Just like we did with the Hero, we'll now create all three news entries with the following fields:

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

Al igual que lo hicimos con el Hero, ahora crearemos las tres entradas para news con los siguientes campos:

#### Entrance One

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Operational Branches
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
   Find your nearest branch so you don't have any extra walks.
  </td>
 </tr>
 <tr>
  <td>
   <b>Link</b>
  </td>
  <td>
   Review Branches
  </td>
 </tr>
 <tr>
  <td>
   <b>Url</b>
  </td>
  <td>
   destination url or #
  </td>
 </tr>
</table>

#### Entrance Two

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Crédito Hipotecario
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
   Conoce todo lo que necesitas saber sobre cómo solicitar tu crédito hipotecario.
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
   <b>Url</b>
  </td>
  <td>
   destination url or #
  </td>
 </tr>
</table>

#### Entrance Three

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Wednesday Gourmet
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
   40% dcto. every Wednesday in the best restaurants with home delivery.
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
   <b>Url</b>
  </td>
  <td>
   destination url or #
  </td>
 </tr>
</table>

As we already did with Hero and News, we need to create our new type for Benefits with the fields:

## Step 6: Create Type "Benefits"

Now we'll put a little more order creating categories so we can filter out our benefits.

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

Ahora pondremos un poco más de orden creando categorías para poder filtrar nuestros beneficios.

Para ello iremos a la sección Categories y creamos las siguentes categorias:

- Gourmet
- Healthy
- Panoramas
- Shopping
- Travel

![Type](/assets/img/tutorials/how-to-create-dynamicbank-content/categories.png)

## Step 8: Create and Publish Benefits

Para los Beneficios vamos a crear siete entradas con los siguientes campos:

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
   20% using your card in Miami.
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

#### Profit Two

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
   20% on the total account.
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

#### Profit Three

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
   30% on flights abroad.
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
   2x1 for the whole month.
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
   15% every Monday.
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
   40% on tickets on Fridays.
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
   Dynamic Fit
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
   20% on annual plan.
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

Now let's create our last type for site testimonials, for this type we will need the following fields:

## Step 9: Create Testimonial Type

Create two entries with the following fields:

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

Don't forget to publish all your posts after creating them.

#### Testimony One

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Adriana testimonial
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
   I feel great about Dynamic Bank, because they gave me the opportunity to grow as a merchant and I have other projects in mind to keep growing.
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

#### Testimony Two

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
   I approached Dynamic Bank, got my credit, and I'm already applying for the third. I really thank you for trusting me
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

As we already did with Hero and News, we need to create our new type for Benefits with the fields:

## Conclusion

If you got this far, we congratulate you. Has conseguido utilizar [Modyo Content](/es/platform/content) con todo su potencial ya que utilizamos [Espacios](/es/platform/content/spaces), [Tipos](/es/platform/content/types), [Entradas](/es/platform/content/entries) y [Categorías](/es/platform/content/entries.html#categorias) para poder generar todo el contenido necesario para armar el Home de Dynamic Bank.

Ya tenemos todas nuestras entradas para poder entregarlas al Front-end y que él pueda generar el Home de Dynamic Bank sin problemas mientras nosotros podemos cambiar los textos desde contenido.

What's next now? Get all this content from a Web site created in [Modyo Channels](/en/platform/channels).
