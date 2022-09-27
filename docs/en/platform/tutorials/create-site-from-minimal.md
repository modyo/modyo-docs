---
search: true
---

# Create a Site with the Minimal Template

## Introduction

Welcome to a new tutorial from the Modyo training series. This tutorial focuses on creating a site using the components that Modyo offers from the Minimal template.

## Prerequisites

You need to have knowledge of:

- HTML
- CSS
- Modyo's platform

## Step 1: Create site in Modyo

Within our Modyo account, the first thing we're going to do is create our new site: 

1. From the side menu, expand <b>Channels</b> and click on <b>Sites</b>. 
2. Click on <b>+ New Site</b> and fill in the values:

<img src="/assets/img/tutorials/create-site-from-minimal/new-site.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the end result from this tutorial."/>

## Step 2: Copy sample code to the Home 

Within Minimal we have some examples of pre-made code to speed up development. 

In this case we will use the <b>Hero</b> by copying the code with the button <b>Copy to clipboard</b> and pasting code code into an HTML widget in the Home that we'll call Hero.

<img src="/assets/img/tutorials/create-site-from-minimal/hero.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the Hero html code."/>

Then we press preview to see our Home and repeat the process with the examples of Text and Image block, Cards, and Testimonial, which will result in 4 widgets like this:

 <img src="/assets/img/tutorials/create-site-from-minimal/widgets.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the four widgets for our site."/> 

And a site like this in the preview:

 <img src="/assets/img/tutorials/create-site-from-minimal/site.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the preview of the site."/> 

## Step 3: Add titles

To add titles to our floors, we're going to add a new html widget and position it between the Hero and Text and image widgets and another one between the Text and Image and Cards widgets.

In this new widget we'll paste the following code:

```html
<div class="mt-5 pt-5 mb-5 text-center">
    <h2 class="font-weight-bold">Lorem ipsum dolor sit amet</h2>
    <p>Consectetur adipiscing elit. Integer sapien ante, efficitur in ante vitae, gravida tincidunt mauris.</p>
</div>
```

Our testimonial will not have a title but we must separate the floor and for this we add an mt-5 class to the first div that has the widget.

## Step 4: Create Space and Types

Now that we have a site with four blocks, we must fill them with content, for which we will use the Modyo content application, generating four types of content; Hero, Text and image, Cards, and Testimonial, following these steps:

1. From the side menu, click on the logo to return to the main menu.
1. Expand **Content**, and click **Spaces**.
1. Click **+ New Space** and fill in the following values:

<img src="/assets/img/tutorials/create-site-from-minimal/space.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the values for the new space."/>

In which we are going to create four Content Types:

<table>
 <tr>
  <th style="text-align: left">Nombre</th>
  <th style="text-align: left">Cardinality</th>
 </tr>
 <tr>
  <td>
   Hero
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Text image block
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Cards
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Testimony
  </td>
  <td>
   Single
  </td>
 </tr>
</table>

To create a content type, follow these steps:

1. Within our Space, in the side menu, click on **Types**.
1. Click on <b> + New Type </b> and fill in the values for Name, Identifier, and Cardinality.
1. Repeat these steps for the rest of the Content Types.

Then we added the fields for each Type:

#### Hero 

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
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
   Single line text
  </td>
  <td>
   Button text
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button link
  </td>
 </tr>
</table>

#### Text image block 

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
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
</table>

#### Cards

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
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
   Single line text
  </td>
  <td>
   Button text
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button link
  </td>
 </tr>
</table>

#### Testimony

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
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
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Name
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Subtext
  </td>
 </tr>
</table>

## Step 5: Create Content

Once the Content Types are created, we're ready to create the content.

1. Inside Space, in the side menu, click on <b> Entries </b>.
1. Click on <b> + New Entry </b>, select Type <b> Hero </b> and for the name we'll use generic text as an example.

<img src="/assets/img/tutorials/create-site-from-minimal/new_hero.png" style="max-width: 500px;margin: auto 0;" alt="This image shows the New Entry window."/>

and fill in the following fields with:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Lorem ipsum dolor sit amet
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/hero_01.jpg" style="max-width: 300px;margin: auto 0;" alt="Hero 01 alt"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Maecenas a mauris dapibus, sodales massa in, eleifend nisl. Suspendisse facilisis ante nec malesuada tempus. Nulla varius diam lorem, mollis condimentum leo semper quis. Donec lobortis, mi quis tristique commodo.
  </td>
 </tr>
 <tr>
  <td>
   Button text
  </td>
  <td>
   Learn more
  </td>
 </tr>
 <tr>
  <td>
   Button link
  </td>
  <td>
   #
  </td>
 </tr>
</table>

After having the fields ready, we save, and publish the entry. Now clone the entry using the dots next to the publish button and we change the following fields:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Morbi feugiat tortor quis massa facilisis
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/hero_02.jpg" style="max-width: 300px;margin: auto 0;" alt="Hero 02 alt"/>
  </td>
 </tr>
</table>

Then we save and publish.

Once we have finished the process with the two Heros on our site, we are going to repeat the process for the other types of content, we will start with the one from <b> Text image block </b>:

#### Text image block

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Etiam viverra lorem non diam fermentum iaculis
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/img_01.jpg" style="max-width: 300px;margin: auto 0;" alt="Img 01 alt"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Ut non orci eget mauris efficitur sodales sit amet in purus. Aenean vel magna dui. Fusce iaculis porttitor turpis at consectetur.
  </td>
 </tr>
</table>

We cloned the entry and changed the fields:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Curabitur ultricies ullamcorper ligula
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/img_02.jpg" style="max-width: 300px;margin: auto 0;" alt="Img 02 alt"/>
  </td>
 </tr>
</table>

#### Cards

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Praesent ac mi
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_01.jpg" style="max-width: 300px;margin: auto 0;" alt="Card 01 alt"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Eu nisl porttitor ullamcorper vel eu mi
  </td>
 </tr>
 <tr>
  <td>
   Button text
  </td>
  <td>
   Learn more
  </td>
 </tr>
 <tr>
  <td>
   Button link
  </td>
  <td>
   #
  </td>
 </tr>
</table>

Again, we cloned the entries of the type Cards and changed the fields:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Mauris in dui
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_02.jpg" style="max-width: 300px;margin: auto 0;" alt="Card 02 alt"/>
  </td>
 </tr>
</table>
<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Tincidunt ex dictum
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_03.jpg" style="max-width: 300px;margin: auto 0;" alt="Card 03 alt"/>
  </td>
 </tr>
</table>

#### Testimony

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Testomony
  </td>
 </tr>
 <tr>
  <td>
   Testimony
  </td>
  <td>
   Nulla eget justo consectetur, sagittis orci nec, tempus justo. Aliquam vel libero et ex.
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/avatars.jpg" style="max-width: 300px;margin: auto 0;" alt="Avatar alt"/>
  </td>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Hannah Smith 
  </td>
 </tr>
 <tr>
  <td>
   Subtext
  </td>
  <td>
   Product Designer
  </td>
 </tr>
</table>

Don't forget to publish all the entries, and remember that by selecting the checkbox you can publish them all at the same time with the <b> Bulk Actions </b>.

At the end we will have a view like this:

<img src="/assets/img/tutorials/create-site-from-minimal/entries.png" style="max-width: 600px;margin: auto 0;" alt="This image shows the Entries window with all the entries created during this tutorial."/>

## Step 6: Connect Our Site to Content

Liquid is a language for accessing the content you've created in your Spaces and displaying it on your Sites. To make this connection, follow these steps:

1. From the side menu, click on the logo to return to the main menu.
1. Expand **Channels**, and click **Sites**.
1. Select your site and then click Home.
1. Click on the Hero widget and replace the code:

#### Hero

```html
{% assign entries = spaces['my-space'].types['hero'].entries | paginated: 2 %}
<div id="exampleHero" class="carousel slide hero_slide" data-ride="carousel">
    <div class="carousel-inner">
        {% for entry in entries %}
        <div class="carousel-item {% if forloop.first %}active{% endif %}">
            <div class="row align-items-center">
                <div class="col-6">
                    <h2 class="display-4 font-weight-bold">{{entry.meta['name']}}</h2>
                    <p class="lead">{{entry.fields['description']}}</p>
                    <a class="btn btn-primary" href="{{entry.fields['Button link']}}" role="button">{{entry.fields['Button text']}}</a>
                </div>
                <div class="col-6">
                    <a class="carousel-control-prev" href="#exampleHero" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous slide</span>
                    </a>
                    <a class="carousel-control-next" href="#exampleHero" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next slide</span>
                    </a>
                    <figure class="overflow-hidden rounded m-0 my-2">
                        <img src="{{entry.fields['image'].url}}" alt="People working at a table">
                    </figure>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
</div>
```

>The Liquid code, denoted by {{ }} or {% %}, calls for hero entries made previously in Content. Then it opens a cycle where it displays the Hero fields together with HTML to generate a 'carousel' effect.

#### Text and image

```html
{% assign entries = spaces['my-space'].types['text-image-block'].entries | paginated: 2 %}
<div>
    {% for entry in entries %}
    <div class="row d-flex justify-content-center align-items-center mb-4">
        <div class="col-12 col-md-4 {% if forloop.last %}order-2 order-md-1{% endif %}">    
            <figure class="m-0">    
                <img src="{{entry.fields['Image'].url}}" alt="People working" class="rounded shadow">   
            </figure>   
        </div>  
        <div class="col-12 col-md-6 py-3 {% if forloop.first %}order-1 order-md-2{% endif %}">  
            <h3 class="font-weight-bold">{{entry.meta['name']}}</h3>    
            <p>{{entry.fields['Description']}}</p>  
        </div>  
    </div>
    {% endfor %}
</div>
```

>This code calls inputs of type 'text-image-block', iterates over them using a for and displays them differently depending on whether they are text or image using an 'if' sentence. 

#### Cards

```html
{% assign entries = spaces['my-space'].types['cards'].entries | paginated: 3 %}
<div class="row">
    {% for entry in entries %}
    <div class="col-12 col-md-4">
        <div class="card border rounded overflow-hidden">
            <figure class="m-0">
                <img src="{{entry.fields['Image'].url}}" alt="People working at a table">
            </figure>
            <figcaption class="card-body">
                <h3 class="h5 card-title font-weight-bold">{{entry.meta['name']}}</h3>
                <p class="card-text">{{entry.fields['Description']}}</p>
                <a href="{{entry.fields['Button link']}}" class="btn btn-primary">{{entry.fields['Button text']}}</a>
            </figcaption>
        </div>
    </div>
    {% endfor %}
</div>
```

>This code generates a Cards effect, displaying information from previously created entries. 

#### Testimony

```html
{% assign testimony = spaces['my-space'].types['testimony'].entry %}
<div class="quote py-5 mt-5">
    <div class="d-flex justify-content-center"> 
        <span class="text-primary d-flex justify-content-center align-items-center">    
            <svg
                     width="70"
                     height="70"
                     viewBox="0 0 30 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     >  
                <path d="m29.448298,27.368956l0,-12l-8,0c0,-4.41 3.586,-8 8,-8l0,-4c-6.617,0 -12,5.383 -12,12l0,12l12,0z" fill="currentColor" />    
                <path d="m12.606922,27.368956l0,-12l-8,0c0,-4.41 3.586,-8 8,-8l0,-4c-6.617,0 -12,5.383 -12,12l0,12l12,0z" fill="currentColor" />    
            </svg>  
        </span> 
    </div>  
    <div class="pt-4">  
        <h3 class="text-dark h1 m-0 font-weight-bold text-center">{{testimony.fields.testimony}}</h3>   
        <hr class="my-5 col-3"> 
        <figure class="mx-auto rounded-circle overflow-hidden border border-light" style="width: 50px;">    
            <img src="{{testimony.fields['image'].url}}" alt="{{testimony.fields['Name']}} Avatar">
        </figure>   
        <h4 class="m-0 text-center">{{testimony.fields['Name']}}</h4>   
        <small class="d-block text-muted text-center">{{testimony.fields['Subtext']}}</small>   
    </div>  
</div>  
```

After we preview our changes and are happy with the result, the next step is to publish our Home.

## Conclusion

Congratulations! You've created your first site created directly from the Minimal template and connected to Content using Liquid.

Find out more about Modyo:
- [Modyo Channels](/en/platform/channels)
- [Sites](/en/platform/channels/sites)
- [Pages](/en/platform/channels/pages)
- [Liquid](/en/platform/channels/liquid-markup)
- [Modyo Content](/en/platform/content)
- [Spaces](/en/platform/content/spaces)
- [Content Types](/en/platform/content/types)
- [Entries](/en/platform/content/entries)