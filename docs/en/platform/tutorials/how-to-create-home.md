---
search: true
---

# Creating a Basic Site

## Introduction

Welcome to a new tutorial of the Modyo training series. In this tutorial we will focus on [Modyo Channels](/en/platform/channels) where you will learn how to create a site, modify the base template, add new libraries, and connect widgets with already created content.

Linking Content and Channels is one of the most important functionalities when it comes to having easy to manage dynamic sites.

Throughout this tutorial, we'll use the fictitious brand "Dynamic Bank", which we introduce below.

### Dynamic Bank

Dynamic Bank is the name we use at Modyo for our demos and examples of the platform. We created it so users of the Dynamic demos can get a close sense of what it's like to work with the Modyo platform. Once you have completed this tutorial, your site should look like this:

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/> 

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">View Figma Design</a>

## Prerequisites

To complete the steps in this tutorial you must have created the contents of the [Dynamic Bank Content](/en/platform/tutorials/how-to-create-content) tutorial and have knowledge of HTML, CSS, JS and the Modyo platform.

## Step 1: Create a Cloud Site

To create our [site] (/en/platform/channels/sites), where we are going to mount Dynamic Bank, we need to go to the [Modyo Channels] section (/en/platform/channels) and click on the button <b> New Site </b>.

We fill the Name fields with "Bank" and select the "Minimal" Theme as shown in the image.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/> 

 <b>Now you've already created your first site in Modyo! </b> 

## Step 2: Change CSS variables to give Dynamic Bank a look and feel

Inside our new site, on the left you will find the main menu with the sections we will work on in this tutorial.

Let's start in the [Templates] section (/en/platform/channels/templates), which corresponds to the site's structure, that is, the base of HTML, CSS and JS, plus the libraries that support the Template.

Here we are going to modify the CSS variables, which are in a snippet called <b> css variables </b> that feeds the rest of the stylesheets already configured within the Minimal Theme.

To make the change, we will modify the following variables in the aforementioned snippet:

#### Colors:

<code>primary = rgba(240, 90, 162, 1)</code><br>
<code>secondary = rgba(98, 125, 229, 1)</code><br>
<code>light = rgba(250, 250, 250, 1)</code><br>
<code>info = rgba(121, 133, 178, 1)</code><br>
<code>dark = rgba(56, 68, 112, 1)</code><br>

#### Buttons:

 <code> button_radius = 100px </code> <br> 
 <code> button_font_weight = 600 </code> 

To review the change you just made, let's use [preview mode] (/es/platform/core/key-concepts.html #modo -preview-view).

## Step 3: Remove container

In the [layout] (/es/platform/channels/templates.html #layouts -custom), which is the HTML structure in which the widgets we will add to each [Page] (/en/platform/channels/pages) are mounted, we need to remove the <b> container </b> class from the main to be able to use 100% of the width of our Page.

To complete this action inside Templates, we go back to the Views tab, look for the Layouts section and open the home.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/main.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/> 

And we remove <code> class="container" </code>.

## Step 4: Change Site Source

In Minimal we are using the [webfontload] library (https://github.com/typekit/webfontloader) to load the typography asynchronously.

For Dynamic we will use the Jost font. To change it we need to enter the <b> javascript sheet Base </b> within Views and modify the line where the call is made, replacing <code> families: ['DM SANS:400,700&display=swap'] </code> 0 by <code> families: ['jost:400,700&display=swap'] </code>.

## Step 5: Change header and footer

Within Templates, one of the most powerful features we have is the ability to reuse code in various Pages, which is what we do with the Header and Footer.

Their HTML is located within the Snippets tab, grouped in General, and we will replace it with the following HTML codes.

 <code> header </code> 

```html
<header role="banner" id="header">
  <div
    class="navbar navbar-expand-md  navbar-light py-4"
    role="navigation"
    aria-label="Navbar"
  >
    <div
      class="navbar-inner container d-flex justify-content-between align-items-center text-right"
    >
      <div class="d-flex flex-column">
        <a
          class="navbar-brand"
          href="{{ site.url }}"
          title="Logo {{site.name}}"
          rel="home"
        >
          <img
            src="{{ site.logo | asset_url | replace: 'R360x50', 'original'}}"
            alt="Logo {{site.name}}"
          />
        </a>
        <a class="sr-only sr-only-focusable btn btn-dark p-2" href="#content"
          >Skip to main content</a
        >
      </div>
      <div
        class="d-flex justify-content-end align-items-center"
        id="navbar-menu"
      >
        <nav class="d-none d-md-flex align-items-center">
          <h2 class="sr-only">Main Menu</h2>
          {% snippet 'shared/general/menu' %}
          <a href="#" class="ml-3 btn btn-primary btn-sm">Banco en línea</a>
        </nav>
        <button
          type="button"
          class="py-2 px-3 bg-transparent border-0 text-dark position-relative d-block d-md-none"
          data-toggle="modal"
          data-target="#menu_panel"
        >
          <h2 id="mainmenulabel" class="sr-only">Open Menu</h2>
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5- 5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Menu Panel -->
    <div
      class="modal right fade"
      id="menu_panel"
      tabindex="-1"
      aria-labelledby="notificationsLabel"
      aria-modal="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-white">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&#10005;</span>
            </button>
          </div>
          <div
            class="modal-body p-4 navbar navbar-expand-md  navbar-light align-items-start"
          >
            <nav>
              {% assign responsive = "Responsive" %}
              {% snippet "shared/general/menu" %}
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
```

 <code> footer </code> 

```html
<footer id="footer" class="py-5 bg-dark navbar-expand-md" role="contentinfo">
  <div class="navbar-inner container text-center text-md-left">
    <div class="row align-items-start">
      <div
        class="col-12 col-md-3 justify-content-center justify-content-md-start"
      >
        <img
          src="https://cloud.modyocdn.com/uploads/764b5b8e-8d5b-4139-9460-2f2545f5d5ee/original/icn_di_white.svg"
          alt="Icono Blanco Dynamic"
        />
      </div>
      <div
        class="col-12 col-md-9 justify-content-end d-none d-md-flex text-white"
      >
        {% menu %}
      </div>
    </div>
    <div class="d-flex justify-content-between text-muted mt-4 pt-4 border-top">
      <p class="small m-0 text-muted ">
        © 2008-{{ site.current_year }} Modyo Spa
      </p>
      <p class="small m-0">
        Made with
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-heart-fill"
          fill="#627DE5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        in <a href="https://www.modyo.com" class="font-weight-bold">Modyo</a>
      </p>
    </div>
  </div>
</footer>
```

After finishing our header and footer snippets, we're going to work on the CSS of the footer. For topics in order we will generate a new [snippet] (/es/platform/channels/templates.html #snippets) and add it in the template's base stylesheet.

To create a new snippet you need to go to the Custom section and press the button <b> + </b>, fill the Path field as <b> footer_css </b> and then add the following code.

```css
footer {
    border-top: 5px solid {{secondary}};
}
footer a {
    color: {{white}};
    transition:.3s;
}
footer a:hover {
    color: {{primary}};
    transition:.3s;
}
```

To add our new snippet to the template's base stylesheet, we need to press the copy icon next to our snippet as the following image shows:

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/copy.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/> 

And paste it into our Style Sheet that is in Views, Style Sheets, style.

The code that gives us the snippet is like this:

<code>{% snippet "footer_css" %}</code>

## Step 6: Upload logo and favicon

To perform this step we will go to the [Site settings] section (/es/platform/channels/sites.html #configuracion -a-site), where we can change or add some site settings, including: Site Name, Description, Language, GTM ID, SEO, PWA, Team, among others.

In this case we will focus on General and add our logo file in <b> Site logo </b> and Favicon in <b> Visualization </b>.

#### Logo

 <img src="https://cloud.modyocdn.com/uploads/b3d572c9-a49a-4b8a-b411-d9b79b9b7b1d/original/dynamicbank-01.svg" style="margin: 30px 0;max-width: 300px;"> 

#### Favicon

 <img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;"> 

Remember to save your changes after uploading the files.

## Step 7: Make Bootstrap CSS changes

Once our logo is loaded, we will make the size changes to fit our design. For this we will go to Templates and within the Libs group we open the snippet <b> bootstrap css </b> and look for the class that is affecting our logo, <code> .navbar-brand img </code> and we change the height of <code> 50px </code> to <code> 30px </code>.

Once we have reviewed that our logo looks good in preview mode, we need to change how the menu links look.

For this we will modify the styles of the navbar-light, navbar-nav and nav-link classes.

```css
.navbar-light .navbar-nav .nav-link {
    color: {{dark}};
    font-weight: bold;
    padding: 0rem .5rem !important;
    margin: 0rem .5rem !important;
}

.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
    color: {{primary}};
    transition:.3s;
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
    color: {{dark}};
    border-bottom: 2px solid {{primary}};
}
```

## Step 8: Create Snippet CSS for Home

For order topics, we are going to create a CSS snippet, where later we'll add all the styles that will affect our Home.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/snippet.png" style="margin: 30px 0;width: 400px;"> 

For this snippet to work in our Home, we need to add the snippet call code in the general CSS sheet with the following code <code> {% snippet “home_css”%} </code> so that the content of our snippet appears inside the template's general stylesheet.

## Step 9: Add Dependent Libraries

Now that we know how to create snippets within Templates, we're going to load external libraries in the same way.

For some of the sections of our Home we will need JS and CSS libraries. For example, to add animations in the Hero or testimonial slides.

In the same way we created the snippet footer_css, we're going to create four new snippets to load the external libraries, where two will be CSS and two from JS. We will include each of them in the corresponding sheets with the snippet code.

 <code> animate_css </code> 

```css
@charset "UTF-8"; /*!
 * animate.css -https://daneden.github.io/animate.css/
 * Version - 3.7.2
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2019 Daniel Eden
 */
@-webkit-keyframes bounce {
  20%,
  53%,
  80%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
@keyframes bounce {
  20%,
  53%,
  80%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }
  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
@-webkit-keyframes flash {
  50%,
  from,
  to {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
@keyframes flash {
  50%,
  from,
  to {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0;
  }
}
.flash {
  -webkit-animation-name: flash;
  animation-name: flash;
}
@-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}
@-webkit-keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}
@-webkit-keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
@keyframes shake {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}
.shake {
  -webkit-animation-name: shake;
  animation-name: shake;
}
@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }
  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }
  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }
  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }
  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.headShake {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: headShake;
  animation-name: headShake;
}
@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
@keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }
  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }
  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }
  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}
.swing {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: swing;
  animation-name: swing;
}
@-webkit-keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes tada {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}
@-webkit-keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes wobble {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }
  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }
  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}
@-webkit-keyframes jello {
  11.1%,
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
@keyframes jello {
  11.1%,
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }
  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }
  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }
  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }
  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }
  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }
  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}
.jello {
  -webkit-animation-name: jello;
  animation-name: jello;
  -webkit-transform-origin: center;
  transform-origin: center;
}
@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.heartBeat {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
@-webkit-keyframes bounceIn {
  20%,
  40%,
  60%,
  80%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  20%,
  40%,
  60%,
  80%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.bounceIn {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes bounceInDown {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInDown {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}
@-webkit-keyframes bounceInLeft {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInLeft {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}
@-webkit-keyframes bounceInRight {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInRight {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}
@-webkit-keyframes bounceInUp {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes bounceInUp {
  60%,
  75%,
  90%,
  from,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
@keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}
.bounceOut {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: bounceOut;
  animation-name: bounceOut;
}
@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.bounceOutDown {
  -webkit-animation-name: bounceOutDown;
  animation-name: bounceOutDown;
}
@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
}
@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.bounceOutRight {
  -webkit-animation-name: bounceOutRight;
  animation-name: bounceOutRight;
}
@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }
  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.bounceOutUp {
  -webkit-animation-name: bounceOutUp;
  animation-name: bounceOutUp;
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}
@-webkit-keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInDownBig {
  -webkit-animation-name: fadeInDownBig;
  animation-name: fadeInDownBig;
}
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
@-webkit-keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInLeftBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInLeftBig {
  -webkit-animation-name: fadeInLeftBig;
  animation-name: fadeInLeftBig;
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
@-webkit-keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInRightBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInRightBig {
  -webkit-animation-name: fadeInRightBig;
  animation-name: fadeInRightBig;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}
@-webkit-keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeInUpBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.fadeInUpBig {
  -webkit-animation-name: fadeInUpBig;
  animation-name: fadeInUpBig;
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
@-webkit-keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes fadeOutDown {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.fadeOutDown {
  -webkit-animation-name: fadeOutDown;
  animation-name: fadeOutDown;
}
@-webkit-keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
@keyframes fadeOutDownBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}
.fadeOutDownBig {
  -webkit-animation-name: fadeOutDownBig;
  animation-name: fadeOutDownBig;
}
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes fadeOutLeft {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.fadeOutLeft {
  -webkit-animation-name: fadeOutLeft;
  animation-name: fadeOutLeft;
}
@-webkit-keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes fadeOutLeftBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
.fadeOutLeftBig {
  -webkit-animation-name: fadeOutLeftBig;
  animation-name: fadeOutLeftBig;
}
@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes fadeOutRight {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.fadeOutRight {
  -webkit-animation-name: fadeOutRight;
  animation-name: fadeOutRight;
}
@-webkit-keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
@keyframes fadeOutRightBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}
.fadeOutRightBig {
  -webkit-animation-name: fadeOutRightBig;
  animation-name: fadeOutRightBig;
}
@-webkit-keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes fadeOutUp {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.fadeOutUp {
  -webkit-animation-name: fadeOutUp;
  animation-name: fadeOutUp;
}
@-webkit-keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
@keyframes fadeOutUpBig {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}
.fadeOutUpBig {
  -webkit-animation-name: fadeOutUpBig;
  animation-name: fadeOutUpBig;
}
@-webkit-keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        -360deg
      );
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        -360deg
      );
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(
        0,
        0,
        150px
      ) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(
        0,
        1,
        0,
        -190deg
      );
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(
        0,
        0,
        150px
      ) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(
        0,
        1,
        0,
        -170deg
      );
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(
        0,
        0,
        0
      ) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        0deg
      );
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        0deg
      );
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
@keyframes flip {
  from {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        -360deg
      );
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        -360deg
      );
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(
        0,
        0,
        150px
      ) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(
        0,
        1,
        0,
        -190deg
      );
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(
        0,
        0,
        150px
      ) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(
        0,
        1,
        0,
        -170deg
      );
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(
        0,
        0,
        0
      ) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        0deg
      );
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(
        0,
        1,
        0,
        0deg
      );
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}
.animated.flip {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
}
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}
@-webkit-keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
@keyframes flipInY {
  from {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}
.flipInY {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
}
@-webkit-keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutX {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}
.flipOutX {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
@-webkit-keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
@keyframes flipOutY {
  from {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }
  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}
.flipOutY {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipOutY;
  animation-name: flipOutY;
}
@-webkit-keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes lightSpeedIn {
  from {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.lightSpeedIn {
  -webkit-animation-name: lightSpeedIn;
  animation-name: lightSpeedIn;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
@-webkit-keyframes lightSpeedOut {
  from {
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}
.lightSpeedOut {
  -webkit-animation-name: lightSpeedOut;
  animation-name: lightSpeedOut;
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
@-webkit-keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateIn {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.rotateIn {
  -webkit-animation-name: rotateIn;
  animation-name: rotateIn;
}
@-webkit-keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.rotateInDownLeft {
  -webkit-animation-name: rotateInDownLeft;
  animation-name: rotateInDownLeft;
}
@-webkit-keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.rotateInDownRight {
  -webkit-animation-name: rotateInDownRight;
  animation-name: rotateInDownRight;
}
@-webkit-keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.rotateInUpLeft {
  -webkit-animation-name: rotateInUpLeft;
  animation-name: rotateInUpLeft;
}
@-webkit-keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes rotateInUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.rotateInUpRight {
  -webkit-animation-name: rotateInUpRight;
  animation-name: rotateInUpRight;
}
@-webkit-keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
@keyframes rotateOut {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}
.rotateOut {
  -webkit-animation-name: rotateOut;
  animation-name: rotateOut;
}
@-webkit-keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}
.rotateOutDownLeft {
  -webkit-animation-name: rotateOutDownLeft;
  animation-name: rotateOutDownLeft;
}
@-webkit-keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutDownRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.rotateOutDownRight {
  -webkit-animation-name: rotateOutDownRight;
  animation-name: rotateOutDownRight;
}
@-webkit-keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpLeft {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}
.rotateOutUpLeft {
  -webkit-animation-name: rotateOutUpLeft;
  animation-name: rotateOutUpLeft;
}
@-webkit-keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
@keyframes rotateOutUpRight {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }
  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}
.rotateOutUpRight {
  -webkit-animation-name: rotateOutUpRight;
  animation-name: rotateOutUpRight;
}
@-webkit-keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
@keyframes hinge {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }
  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}
.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-name: hinge;
  animation-name: hinge;
}
@-webkit-keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes jackInTheBox {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.jackInTheBox {
  -webkit-animation-name: jackInTheBox;
  animation-name: jackInTheBox;
}
@-webkit-keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes rollIn {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.rollIn {
  -webkit-animation-name: rollIn;
  animation-name: rollIn;
}
@-webkit-keyframes rollOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
@keyframes rollOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}
.rollOut {
  -webkit-animation-name: rollOut;
  animation-name: rollOut;
}
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}
.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@-webkit-keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInDown {
  -webkit-animation-name: zoomInDown;
  animation-name: zoomInDown;
}
@-webkit-keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInLeft {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInLeft {
  -webkit-animation-name: zoomInLeft;
  animation-name: zoomInLeft;
}
@-webkit-keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInRight {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInRight {
  -webkit-animation-name: zoomInRight;
  animation-name: zoomInRight;
}
@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}
@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}
.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutDown {
  -webkit-animation-name: zoomOutDown;
  animation-name: zoomOutDown;
}
@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}
@keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}
.zoomOutLeft {
  -webkit-animation-name: zoomOutLeft;
  animation-name: zoomOutLeft;
}
@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}
@keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}
.zoomOutRight {
  -webkit-animation-name: zoomOutRight;
  animation-name: zoomOutRight;
}
@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
.zoomOutUp {
  -webkit-animation-name: zoomOutUp;
  animation-name: zoomOutUp;
}
@-webkit-keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInDown {
  from {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInDown {
  -webkit-animation-name: slideInDown;
  animation-name: slideInDown;
}
@-webkit-keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInLeft {
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInRight {
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}
@-webkit-keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInUp {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInUp {
  -webkit-animation-name: slideInUp;
  animation-name: slideInUp;
}
@-webkit-keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
@keyframes slideOutDown {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
.slideOutDown {
  -webkit-animation-name: slideOutDown;
  animation-name: slideOutDown;
}
@-webkit-keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes slideOutLeft {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}
.slideOutLeft {
  -webkit-animation-name: slideOutLeft;
  animation-name: slideOutLeft;
}
@-webkit-keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes slideOutRight {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}
.slideOutRight {
  -webkit-animation-name: slideOutRight;
  animation-name: slideOutRight;
}
@-webkit-keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
@keyframes slideOutUp {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
.slideOutUp {
  -webkit-animation-name: slideOutUp;
  animation-name: slideOutUp;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animated.delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.animated.delay-2s {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}
.animated.delay-3s {
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
}
.animated.delay-4s {
  -webkit-animation-delay: 4s;
  animation-delay: 4s;
}
.animated.delay-5s {
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
}
.animated.fast {
  -webkit-animation-duration: 0.8s;
  animation-duration: 0.8s;
}
.animated.faster {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}
.animated.slow {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
.animated.slower {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
@media (print), (prefers-reduced-motion: reduce) {
  .animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}
```

<code>wow_js</code>

```js
/*! WOW wow.js - v1.2.1 - 2016-09-05
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!(function(a, b) {
  if ('function' == typeof define && define.amd)
    define(['module', 'exports'], b)
  else if ('undefined' != typeof exports) b(module, exports)
  else {
    var c = {
      exports: {},
    }
    b(c, c.exports), (a.WOW = c.exports)
  }
})(this, function(a, b) {
  'use strict'
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError('Cannot call a class as a function')
  }
  function d(a, b) {
    return b.indexOf(a) >= 0
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c]
        a[c] = d
      }
    return a
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    )
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0
    return (
      null != document.createEvent
        ? ((e = document.createEvent('CustomEvent')),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    )
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : 'on' + b in (null != a) && a['on' + b]()
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent('on' + b, c)
      : (a[b] = c)
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent('on' + b, c)
      : delete a[b]
  }
  function k() {
    return 'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.clientHeight
  }
  Object.defineProperty(b, '__esModule', {
    value: !0,
  })
  var l,
    m,
    n = (function() {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c]
          ;(d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            'value' in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d)
        }
      }
      return function(b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b
      }
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function() {
        function a() {
          c(this, a), (this.keys = []), (this.values = [])
        }
        return (
          n(a, [
            {
              key: 'get',
              value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b]
                  if (c === a) return this.values[b]
                }
              },
            },
            {
              key: 'set',
              value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c]
                  if (d === a) return (this.values[c] = b), this
                }
                return this.keys.push(a), this.values.push(b), this
              },
            },
          ]),
          a
        )
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l = (function() {
        function a() {
          c(this, a),
            'undefined' != typeof console &&
              null !== console &&
              (console.warn(
                'MutationObserver is not supported by your browser.'
              ),
              console.warn(
                'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
              ))
        }
        return (
          n(a, [
            {
              key: 'observe',
              value: function() {},
            },
          ]),
          a
        )
      })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function(a) {
        var b = /(\-([a-z]){1})/g
        return {
          getPropertyValue: function(c) {
            'float' === c && (c = 'styleFloat'),
              b.test(c) &&
                c.replace(b, function(a, b) {
                  return b.toUpperCase()
                })
            var d = a.currentStyle
            return (null != d ? d[c] : void 0) || null
          },
        }
      },
    r = (function() {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
        c(this, a),
          (this.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
          }),
          (this.animate = (function() {
            return 'requestAnimationFrame' in window
              ? function(a) {
                  return window.requestAnimationFrame(a)
                }
              : function(a) {
                  return a()
                }
          })()),
          (this.vendors = ['moz', 'webkit']),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass))
      }
      return (
        n(a, [
          {
            key: 'init',
            value: function() {
              ;(this.element = window.document.documentElement),
                d(document.readyState, ['interactive', 'complete'])
                  ? this.start()
                  : i(document, 'DOMContentLoaded', this.start),
                (this.finished = [])
            },
          },
          {
            key: 'start',
            value: function() {
              var a = this
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll('.' + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle()
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b]
                    this.applyStyle(c, !0)
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    'scroll',
                    this.scrollHandler
                  ),
                  i(window, 'resize', this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function(b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e]
                      a.doSync(f)
                    }
                })
                d.observe(document.body, {
                  childList: !0,
                  subtree: !0,
                })
              }
            },
          },
          {
            key: 'stop',
            value: function() {
              ;(this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  'scroll',
                  this.scrollHandler
                ),
                j(window, 'resize', this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            },
          },
          {
            key: 'sync',
            value: function() {
              p.notSupported && this.doSync(this.element)
            },
          },
          {
            key: 'doSync',
            value: function(a) {
              if (
                (('undefined' != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a
                for (
                  var b = a.querySelectorAll('.' + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c]
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0))
                }
              }
            },
          },
          {
            key: 'show',
            value: function(a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + ' ' + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                i(a, 'animationend', this.resetAnimation),
                i(a, 'oanimationend', this.resetAnimation),
                i(a, 'webkitAnimationEnd', this.resetAnimation),
                i(a, 'MSAnimationEnd', this.resetAnimation),
                a
              )
            },
          },
          {
            key: 'applyStyle',
            value: function(a, b) {
              var c = this,
                d = a.getAttribute('data-wow-duration'),
                e = a.getAttribute('data-wow-delay'),
                f = a.getAttribute('data-wow-iteration')
              return this.animate(function() {
                return c.customStyle(a, b, d, e, f)
              })
            },
          },
          {
            key: 'resetStyle',
            value: function() {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a]
                b.style.visibility = 'visible'
              }
            },
          },
          {
            key: 'resetAnimation',
            value: function(a) {
              if (a.type.toLowerCase().indexOf('animationend') >= 0) {
                var b = a.target || a.srcElement
                b.className = b.className
                  .replace(this.config.animateClass, '')
                  .trim()
              }
            },
          },
          {
            key: 'customStyle',
            value: function(a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? 'hidden' : 'visible'),
                c &&
                  this.vendorSet(a.style, {
                    animationDuration: c,
                  }),
                d &&
                  this.vendorSet(a.style, {
                    animationDelay: d,
                  }),
                e &&
                  this.vendorSet(a.style, {
                    animationIterationCount: e,
                  }),
                this.vendorSet(a.style, {
                  animationName: b ? 'none' : this.cachedAnimationName(a),
                }),
                a
              )
            },
          },
          {
            key: 'vendorSet',
            value: function(a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c]
                  a['' + c] = d
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e]
                    a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                  }
                }
            },
          },
          {
            key: 'vendorCSS',
            value: function(a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e]
                d = d || c.getPropertyCSSValue('-' + f + '-' + b)
              }
              return d
            },
          },
          {
            key: 'animationName',
            value: function(a) {
              var b = void 0
              try {
                b = this.vendorCSS(a, 'animation-name').cssText
              } catch (c) {
                b = q(a).getPropertyValue('animation-name')
              }
              return 'none' === b ? '' : b
            },
          },
          {
            key: 'cacheAnimationName',
            value: function(a) {
              return this.animationNameCache.set(a, this.animationName(a))
            },
          },
          {
            key: 'cachedAnimationName',
            value: function(a) {
              return this.animationNameCache.get(a)
            },
          },
          {
            key: 'scrollHandler',
            value: function() {
              this.scrolled = !0
            },
          },
          {
            key: 'scrollCallback',
            value: function() {
              if (this.scrolled) {
                this.scrolled = !1
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b]
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c)
                      continue
                    }
                    a.push(c)
                  }
                }
                ;(this.boxes = a),
                  this.boxes.length || this.config.live || this.stop()
              }
            },
          },
          {
            key: 'offsetTop',
            value: function(a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop)
              return b
            },
          },
          {
            key: 'isVisible',
            value: function(a) {
              var b = a.getAttriute('data-wow-offset') || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight
              return d >= e && f >= c
            },
          },
          {
            key: 'disabled',
            value: function() {
              return !this.config.mobile && f(navigator.userAgent)
            },
          },
        ]),
        a
      )
    })()
  ;(b['default'] = r), (a.exports = b['default'])
})
```

<code>slick_css</code>

```css
.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-family:slick;font-size:45px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'•';text-align:center;opacity:.2;color:{{dark}};-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}.slick-dots li.slick-active button:before {opacity:1;color:{{dark}};}
```

<code>slick_js</code>

```js
/*************************************************************************
 Slick Slider Version: 1.8.0
**************************************************************************/
!(function(i) {
  'use strict'
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
    ? (module.exports = i(require('jquery')))
    : i(jQuery)
})(function(i) {
  'use strict'
  var e = window.Slick || {}
  ;((e = (function() {
    var e = 0
    return function(t, o) {
      var s,
        n = this
      ;(n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function(e, t) {
          return i('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0)
    }
  })()).prototype.activateADA = function() {
    this.$slideTrack
      .find('.slick-active')
      .attr({ 'aria-hidden': 'false' })
      .find('a, input, button, select')
      .attr({ tabindex: '0' })
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
      var s = this
      if ('boolean' == typeof t) (o = t), (t = null)
      else if (t < 0 || t >= s.slideCount) return !1
      s.unload(),
        'number' == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
          i(t).attr('data-slick-index', e)
        }),
        (s.$slidesCache = s.$slides),
        s.reinit()
    }),
    (e.prototype.animateHeight = function() {
      var i = this
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0)
        i.$list.animate({ height: e }, i.options.speed)
      }
    }),
    (e.prototype.animateSlide = function(e, t) {
      var o = {},
        s = this
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(i) {
                  ;(i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = 'translate(' + i + 'px, 0px)'),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = 'translate(0px,' + i + 'px)'),
                        s.$slideTrack.css(o))
                },
                complete: function() {
                  t && t.call()
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
              : (o[s.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function() {
                s.disableTransition(), t.call()
              }, s.options.speed))
    }),
    (e.prototype.getNavTarget = function() {
      var e = this,
        t = e.options.asNavFor
      return t && null !== t && (t = i(t).not(e.$slider)), t
    }),
    (e.prototype.asNavFor = function(e) {
      var t = this.getNavTarget()
      null !== t &&
        'object' == typeof t &&
        t.each(function() {
          var t = i(this).slick('getSlick')
          t.unslicked || t.slideHandler(e, !0)
        })
    }),
    (e.prototype.applyTransition = function(i) {
      var e = this,
        t = {}
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] =
            'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }),
    (e.prototype.autoPlay = function() {
      var i = this
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ))
    }),
    (e.prototype.autoPlayClear = function() {
      var i = this
      i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }),
    (e.prototype.autoPlayIterator = function() {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }),
    (e.prototype.buildArrows = function() {
      var e = this
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.$nextArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }))
    }),
    (e.prototype.buildDots = function() {
      var e,
        t,
        o = this
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass('slick-dotted'),
            t = i('<ul />').addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)))
        ;(o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots
            .find('li')
            .first()
            .addClass('slick-active')
      }
    }),
    (e.prototype.buildOut = function() {
      var e = this
      ;(e.$slides = e.$slider
        .children(e.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function(e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '')
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider)
          .not('[src]')
          .addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass('draggable')
    }),
    (e.prototype.buildRows = function() {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement('div')
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div')
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t)
              n.get(c) && a.appendChild(n.get(c))
            }
            d.appendChild(a)
          }
          o.appendChild(d)
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + '%',
              display: 'inline-block',
            })
      }
    }),
    (e.prototype.checkResponsive = function(e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width()
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
          ? (n = d)
          : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]))
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger('breakpoint', [r, l])
      }
    }),
    (e.prototype.changeSlide = function(e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget)
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          ;(s =
            0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t)
          break
        case 'next':
          ;(s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t)
          break
        case 'index':
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger('focus')
          break
        default:
          return
      }
    }),
    (e.prototype.checkNavigable = function(i) {
      var e, t
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1]
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t
            break
          }
          t = e[o]
        }
      return i
    }),
    (e.prototype.cleanUpEvents = function() {
      var e = this
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack)
            .children()
            .off('click.slick', e.selectHandler),
        i(window).off(
          'orientationchange.slick.slick-' + e.instanceUid,
          e.orientationChange
        ),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off(
          'dragstart',
          e.preventDefault
        ),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition)
    }),
    (e.prototype.cleanUpSlideEvents = function() {
      var e = this
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1))
    }),
    (e.prototype.cleanUpRows = function() {
      var i,
        e = this
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr('style'),
        e.$slider.empty().append(i))
    }),
    (e.prototype.clickHandler = function(i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }),
    (e.prototype.destroy = function(e) {
      var t = this
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              'slick-slide slick-active slick-center slick-visible slick-current'
            )
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function() {
              i(this).attr('style', i(this).data('originalStyling'))
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t])
    }),
    (e.prototype.disableTransition = function(i) {
      var e = this,
        t = {}
      ;(t[e.transitionType] = ''),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }),
    (e.prototype.fadeSlide = function(i, e) {
      var t = this
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function() {
              t.disableTransition(i), e.call()
            }, t.options.speed))
    }),
    (e.prototype.fadeSlideOut = function(i) {
      var e = this
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }))
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
      var e = this
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }),
    (e.prototype.focusHandler = function() {
      var e = this
      e.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick blur.slick', '*', function(t) {
          t.stopImmediatePropagation()
          var o = i(this)
          setTimeout(function() {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(':focus')), e.autoPlay())
          }, 0)
        })
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
      return this.currentSlide
    }),
    (e.prototype.getDotCount = function() {
      var i = this,
        e = 0,
        t = 0,
        o = 0
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow)
      else if (!0 === i.options.centerMode) o = i.slideCount
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow)
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          )
      return o - 1
    }),
    (e.prototype.getLeft = function(i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack
                  .children('.slick-slide')
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack
                    .children('.slick-slide')
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      )
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function(i) {
      return this.options[i]
    }),
    (e.prototype.getNavigableIndexes = function() {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = []
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow)
      return s
    }),
    (e.prototype.getSlick = function() {
      return this
    }),
    (e.prototype.getSlideCount = function() {
      var e,
        t,
        o = this
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find('.slick-slide').each(function(s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1
            }),
            Math.abs(i(e).attr('data-slick-index') - o.currentSlide) || 1)
          : o.options.slidesToScroll
      )
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
      this.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e)
    }),
    (e.prototype.init = function(e) {
      var t = this
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay())
    }),
    (e.prototype.initADA = function() {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function(i) {
          return i >= 0 && i < e.slideCount
        })
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function(t) {
            var s = o.indexOf(t)
            i(this).attr({
              role: 'tabpanel',
              id: 'slick-slide' + e.instanceUid + t,
              tabindex: -1,
            }),
              -1 !== s &&
                i(this).attr({
                  'aria-describedby': 'slick-slide-control' + e.instanceUid + s,
                })
          }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function(s) {
              var n = o[s]
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  })
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end())
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr('tabindex', 0)
      e.activateADA()
    }),
    (e.prototype.initArrowEvents = function() {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off('click.slick')
          .on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow
          .off('click.slick')
          .on('click.slick', { message: 'next' }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler),
          i.$nextArrow.on('keydown.slick', i.keyHandler)))
    }),
    (e.prototype.initDotEvents = function() {
      var e = this
      !0 === e.options.dots &&
        (i('li', e.$dots).on(
          'click.slick',
          { message: 'index' },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on('keydown.slick', e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1))
    }),
    (e.prototype.initSlideEvents = function() {
      var e = this
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)))
    }),
    (e.prototype.initializeEvents = function() {
      var e = this
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          'touchstart.slick mousedown.slick',
          { action: 'start' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchmove.slick mousemove.slick',
          { action: 'move' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchend.slick mouseup.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchcancel.slick mouseleave.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on('keydown.slick', e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack)
            .children()
            .on('click.slick', e.selectHandler),
        i(window).on(
          'orientationchange.slick.slick-' + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          'resize.slick.slick-' + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }),
    (e.prototype.initUI = function() {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show()
    }),
    (e.prototype.keyHandler = function(i) {
      var e = this
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? 'next' : 'previous' },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? 'previous' : 'next' },
            }))
    }),
    (e.prototype.lazyLoad = function() {
      function e(e) {
        i('img[data-lazy]', e).each(function() {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || n.$slider.attr('data-sizes'),
            r = document.createElement('img')
          ;(r.onload = function() {
            e.animate({ opacity: 0 }, 100, function() {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function() {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass(
                    'slick-loading'
                  )
                }),
                n.$slider.trigger('lazyLoaded', [n, e, t])
            })
          }),
            (r.onerror = function() {
              e
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                n.$slider.trigger('lazyLoadError', [n, e, t])
            }),
            (r.src = t)
        })
      }
      var t,
        o,
        s,
        n = this
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find('.slick-slide').slice(o, s)),
        'anticipated' === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find('.slick-slide'), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find('.slick-slide'))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find('.slick-cloned').slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find('.slick-cloned').slice(-1 * n.options.slidesToShow)
            )
    }),
    (e.prototype.loadSlider = function() {
      var i = this
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad()
    }),
    (e.prototype.next = e.prototype.slickNext = function() {
      this.changeSlide({ data: { message: 'next' } })
    }),
    (e.prototype.orientationChange = function() {
      var i = this
      i.checkResponsive(), i.setPosition()
    }),
    (e.prototype.pause = e.prototype.slickPause = function() {
      var i = this
      i.autoPlayClear(), (i.paused = !0)
    }),
    (e.prototype.play = e.prototype.slickPlay = function() {
      var i = this
      i.autoPlay(),
        (i.options.autoplay = !0),
        (i.paused = !1),
        (i.focussed = !1),
        (i.interrupted = !1)
    }),
    (e.prototype.postSlide = function(e) {
      var t = this
      t.unslicked ||
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide))
              .attr('tabindex', 0)
              .focus()))
    }),
    (e.prototype.prev = e.prototype.slickPrev = function() {
      this.changeSlide({ data: { message: 'previous' } })
    }),
    (e.prototype.preventDefault = function(i) {
      i.preventDefault()
    }),
    (e.prototype.progressiveLazyLoad = function(e) {
      e = e || 1
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider)
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          ((r = document.createElement('img')).onload = function() {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t
                .attr('src', o)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad()
          }),
          (r.onerror = function() {
            e < 3
              ? setTimeout(function() {
                  l.progressiveLazyLoad(e + 1)
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad())
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l])
    }),
    (e.prototype.refresh = function(e) {
      var t,
        o,
        s = this
      ;(o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1)
    }),
    (e.prototype.registerBreakpoints = function() {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window'
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings)
          }
        s.breakpoints.sort(function(i, e) {
          return s.options.mobileFirst ? i - e : e - i
        })
      }
    }),
    (e.prototype.reinit = function() {
      var e = this
      ;(e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack)
            .children()
            .on('click.slick', e.selectHandler),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e])
    }),
    (e.prototype.resize = function() {
      var e = this
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function() {
          ;(e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50)))
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
      var o = this
      if (
        ((i =
          'boolean' == typeof i
            ? !0 === (e = i)
              ? 0
              : o.slideCount - 1
            : !0 === e
            ? --i
            : i),
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
      )
        return !1
      o.unload(),
        !0 === t
          ? o.$slideTrack.children().remove()
          : o.$slideTrack
              .children(this.options.slide)
              .eq(i)
              .remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit()
    }),
    (e.prototype.setCSS = function(i) {
      var e,
        t,
        o = this,
        s = {}
      !0 === o.options.rtl && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = 'translate(' + e + ', ' + t + ')'),
                o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ', ' + t + ', 0px)'),
                o.$slideTrack.css(s)))
    }),
    (e.prototype.setDimensions = function() {
      var i = this
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children('.slick-slide').length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children('.slick-slide').length
              )
            ))
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width()
      !1 === i.options.variableWidth &&
        i.$slideTrack.children('.slick-slide').width(i.slideWidth - e)
    }),
    (e.prototype.setFade = function() {
      var e,
        t = this
      t.$slides.each(function(o, s) {
        ;(e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: 'relative',
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: 'relative',
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 })
    }),
    (e.prototype.setHeight = function() {
      var i = this
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0)
        i.$list.css('height', e)
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function() {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1
      if (
        ('object' === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
          : 'string' === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            'responsive' === arguments[0] && 'array' === i.type(arguments[1])
              ? (n = 'responsive')
              : void 0 !== arguments[1] && (n = 'single')),
        'single' === n)
      )
        r.options[o] = s
      else if ('multiple' === n)
        i.each(o, function(i, e) {
          r.options[i] = e
        })
      else if ('responsive' === n)
        for (t in s)
          if ('array' !== i.type(r.options.responsive))
            r.options.responsive = [s[t]]
          else {
            for (e = r.options.responsive.length - 1; e >= 0; )
              r.options.responsive[e].breakpoint === s[t].breakpoint &&
                r.options.responsive.splice(e, 1),
                e--
            r.options.responsive.push(s[t])
          }
      l && (r.unload(), r.reinit())
    }),
    (e.prototype.setPosition = function() {
      var i = this
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger('setPosition', [i])
    }),
    (e.prototype.setProps = function() {
      var i = this,
        e = document.body.style
      ;(i.positionProp = !0 === i.options.vertical ? 'top' : 'left'),
        'top' === i.positionProp
          ? i.$slider.addClass('slick-vertical')
          : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = 'transform'),
          (i.transformType = 'transform'),
          (i.transitionType = 'transition')),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType)
    }),
    (e.prototype.setSlideClasses = function(i) {
      var e,
        t,
        o,
        s,
        n = this
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0
        ;(e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass('slick-center')
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center')
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
          ? t.addClass('slick-active').attr('aria-hidden', 'false')
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false'))
      ;('ondemand' !== n.options.lazyLoad &&
        'anticipated' !== n.options.lazyLoad) ||
        n.lazyLoad()
    }),
    (e.prototype.setupInfinite = function() {
      var e,
        t,
        o,
        s = this
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned')
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned')
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function() {
            i(this).attr('id', '')
          })
      }
    }),
    (e.prototype.interrupt = function(i) {
      var e = this
      i || e.autoPlay(), (e.interrupted = i)
    }),
    (e.prototype.selectHandler = function(e) {
      var t = this,
        o = i(e.target).is('.slick-slide')
          ? i(e.target)
          : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'))
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s)
    }),
    (e.prototype.slideHandler = function(i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function() {
                  a.postSlide(o)
                })
              : a.postSlide(o))
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function() {
                  a.postSlide(o)
                })
              : a.postSlide(o))
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick('getSlick')).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function() {
                    a.postSlide(s)
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            )
          !0 !== t
            ? a.animateSlide(d, function() {
                a.postSlide(s)
              })
            : a.postSlide(s)
        }
    }),
    (e.prototype.startLoad = function() {
      var i = this
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass('slick-loading')
    }),
    (e.prototype.swipeDirection = function() {
      var i,
        e,
        t,
        o,
        s = this
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? 'left'
            : 'right'
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? 'right'
            : 'left'
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? 'down'
            : 'up'
          : 'vertical'
      )
    }),
    (e.prototype.swipeEnd = function(i) {
      var e,
        t,
        o = this
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            ;(e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0)
            break
          case 'right':
          case 'up':
            ;(e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1)
        }
        'vertical' != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger('swipe', [o, t]))
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}))
    }),
    (e.prototype.swipeHandler = function(i) {
      var e = this
      if (
        !(
          !1 === e.options.swipe ||
          ('ontouchend' in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf('mouse'))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i)
            break
          case 'move':
            e.swipeMove(i)
            break
          case 'end':
            e.swipeEnd(i)
        }
    }),
    (e.prototype.swipeMove = function(i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && 'right' === t) ||
                  (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      )
    }),
    (e.prototype.swipeStart = function(i) {
      var e,
        t = this
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0)
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
      var i = this
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }),
    (e.prototype.unload = function() {
      var e = this
      i('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '')
    }),
    (e.prototype.unslick = function(i) {
      var e = this
      e.$slider.trigger('unslick', [e, i]), e.destroy()
    }),
    (e.prototype.updateArrows = function() {
      var i = this
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          i.$nextArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$nextArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              i.$prevArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false')))
    }),
    (e.prototype.updateDots = function() {
      var i = this
      null !== i.$dots &&
        (i.$dots
          .find('li')
          .removeClass('slick-active')
          .end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'))
    }),
    (e.prototype.visibility = function() {
      var i = this
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1))
    }),
    (i.fn.slick = function() {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length
      for (i = 0; i < r; i++)
        if (
          ('object' == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t
      return o
    })
})
```

Don't forget to add the animate_css and slick_css snippets to the stylesheet and wow_js and slick_js to the javascripts Template sheet.

## Step 10: Generate the menu

Another feature that exists within Modyo is the Navigation tool, in which we can generate the menu for our site in a simple way.

For this, we go to the [Navigation](/en/platform/channels/navigation.html) section, modify the existing menu and leave the following options.

 <table> 
 <tr> 
 <th style="text-align: left"> Name </th> 
 <th style="text-align: left"> Associated Layout Page </th> 
 <th style="text-align: left"> URL </th> 
 </tr> 
 <tr> 
 <td> 
 Home page
 </td> 
 <td> 
 Home page
 </td> 
 <td> </td> 
 </tr> 
 <tr> 
 <td> 
 Products
 </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 </tr> 
 <tr> 
 <td> 
 Benefits
 </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 </tr> 
 <tr> 
 <td> 
 Offices
 </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 </tr> 
 </table> 

This is reflected as follows:

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/navigation.png" style="margin: 30px 0;max-width: 700px;"> 

After completing our menu we save it and publish.

## Step 11: Modify Page Home

Once you list the base Template, menu and site settings, we will start working on our Home. To do this we go to the [Page] section (/en/platform/channels/pages) and enter Home.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/page.png" style="margin: 30px 0;max-width: 300px;"> 

The first thing we're going to do is modify the HTML widget that already comes in the Page, changing the title of the widget to Hero and changing the HTML to the following:

```html
{% assign entries = spaces['bank'].types['hero'].entries | paginated: 1 %}
<div class="mb-5 mb-md-0 pb-5 pb-md-0" id="hero">
  <div class="bg-dark mb-5 mb-md-0 pt-5 pb-0 py-md-5">
    <div class="pattern_hero"></div>
    {% for entry in entries %}
    <div class="d-flex mb-0 my-md-5 hero_img">
      <div class="row w-100 justify-content-end no-gutters">
        <div
          class="col-10 col-md-7 wow slideInRight hero_img rounded-left"
          style="background-image: url({{ entry.fields['Cover'].url }})"
          ;}
        ></div>
      </div>
    </div>
    <div class="hero_txt">
      <div class="container">
        <div class="row">
          <div
            class="bg-info p-5 col-10 col-md-6 rounded text-white wow slideInLeft"
          >
            <h1 class="h3 h2-md">{{ entry.meta.title }}</h1>
            <p class="p h6-md font-weight-light mb-4">
              {{ entry.fields.Text }}
            </p>
            <a
              href="{{ entry.fields.Url }}"
              class="btn btn-{{ entry.fields['Button color'] }}"
              >{{ entry.fields['Title Link'] }}</a
            >
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
```

In this HTML we will use the [Liquid SKD] (/es/platform/content/public-api-reference.html #sdk -liquid) to connect [Modyo Channels] (/en/platform/channels) with [Modyo Content] (/en/platform/content).

The call to the Liquid SDK is done through an assign as follows: <code> {% assign entries = spaces ['bank'] .types ['hero'] .entries | paginated: 1%} </code>, in which we assign the space and the Type that we had already created in the previous tutorial.

Once we're ready our HTML on the page, let's add the style in the snippet <b> home_css </b> that we had already created within Templates.

```css
/*** hero ***/
.hero_img {
  height: 55vh;
  background-position: center;
  background-size: cover;
}
#hero {
  position: relative;
}
.hero_txt {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.pattern_hero {
  background: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  width: 75%;
  height: 65%;
  position: absolute;
  right: 0;
  top: 15%;
  animation: float 6s ease-in-out infinite;
}
@keyframes float {
  0% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25) !important;
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
}
@keyframes smallFloat {
  0% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 0.15rem 1rem rgba(0, 0, 0, 0.25) !important;
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    transform: translatey(0px);
  }
}
@media (max-width: {{media_md}}) {
  .hero_txt {
    bottom: 0;
    top: auto;
    left: 2%;
    transform: none;
  }
  .pattern_hero {
    width: 90%;
  }
}
```

By having our Hero code, HTML in Page and CSS in Templates ready, we can [preview] (/es/platform/core/key-concepts.html #modo -preview) our work by activating Page and Templates in Draft in the preview mode bar.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/preview.png" style="margin: 30px 0;"> 

## Step 12: News Widgets

For the news section of our Home, we will create an HTML widget similar to Hero within our Page Home. In the tab <b> Add Widgets </b>, click on HTML and in our widget we paste the following code:

```html
{% assign entries = spaces['bank'].types['news'].entries | paginated: 3 %}
<div class="container my-5 py-5">
  <div class="row justify-content-center mb-4">
    <div class="col-12 col-md-8 text-center">
      <h3 class="text-dark">
        Mantente informado de todo lo que necesitas de tu banca
      </h3>
      <p class="text-muted">
        Enterate de todas las noticias que tenemos para tí
      </p>
    </div>
  </div>
  <div class="row">
    {% for entry in entries %}
    <div class="col-4 d-flex">
      <a class="card shadow-sm" href="{{ entry.fiels.Url }}">
        <figure class="m-0">
          <img
            aria-hidden="true"
            src="{{ entry.fields['Cover'].url }}"
            alt="{{ entry.meta.title }}"
            class="w-100"
          />
        </figure>
        <figcaption class="pt-4 px-4 pb-2">
          <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
          <p class="text-muted">{{ entry.fields.Excerpt }}</p>
        </figcaption>
        <div class="d-flex justify-content-end pb-4 px-4  mt-auto">
          <span class="btn btn-primary btn-sm">{{ entry.fields.Link }}</span>
        </div>
      </a>
    </div>
    {% endfor %}
  </div>
</div>
```

For these Cards we don't need CSS as we only use Bootstrap helpers.

## Step 13: Benefits Widgets

For the benefits we will follow the same logic of the already created widgets, adding a new HTML widget to the Page Home with the HTML code:

```html
{% assign entries = spaces['bank'].types['benefits'].entries | paginated: 7 %}
<div class="py-5 bg-primary" id="benefits">
  <div class="container my-5">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-8 text-center">
        <h3 class="text-white">
          Se parte de un mundo de beneficios pensados especialmete para ti
        </h3>
        <p class="text-white">
          Para nosotros lo más importante es que disfrutes tu banca
        </p>
      </div>
    </div>
    <div class="row">
      {% for entry in entries limit:1 %}
      <div class="col-12 col-md-6 mb-4 pb-2 d-flex">
        <a class="card shadow-sm w-100" href="{{ entry.meta.url }}">
          <figure class="m-0">
            <span
              class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
              >{{ entry.meta.category}}</span
            >
            <img
              aria-hidden="true"
              src="{{ entry.fields['Cover'].url }}"
              alt="{{ entry.meta.title }}"
              class="w-100"
            />
          </figure>
          <figcaption class="pt-4 px-4 pb-2">
            <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
            <p class="text-muted">{{ entry.fields.Excerpt }}</p>
          </figcaption>
        </a>
      </div>
      {% endfor %} {% for entry in entries offset:1 %}
      <div class="col-12 col-md-6 col-lg-3 mb-4 pb-2 d-flex">
        <a class="card shadow-sm w-100" href="{{ entry.meta.url }}">
          <figure class="m-0">
            <span
              class="badge_category bg-white text-primary d-inline-block text-uppercase px-3 py-1 rounded-sm small"
              >{{ entry.meta.category}}</span
            >
            <img
              aria-hidden="true"
              src="{{ entry.fields['Cover'].url }}"
              alt="{{ entry.meta.title }}"
              class="w-100"
            />
          </figure>
          <figcaption class="pt-4 px-4 pb-2">
            <h4 class="h6 text-dark">{{ entry.meta.title }}</h4>
            <p class="text-muted">{{ entry.fields.Excerpt }}</p>
          </figcaption>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

And the CSS in the snippet <b> home_css </b> within Templates.

```css
/** benefits **/
#benefits .card figure {
  height: 115px;
  overflow: hidden;
  position: relative;
}
#benefits .card figure img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
#benefits .card figure .badge_category {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  z-index: 1;
}
```

Remember that you can check how our Home is doing with the preview mode.

## Step 14: DYNAMIC APP Widgets

The DYNAMIC APP widget is a simple HTML widget that is not connected to Content so it has no liquid assign.

Again we will create an HTML widget inside the Home Page and its respective CSS in the snippet <b> home_css </b>.

```html
<div class="bg-white" id="app_home">
  <div class="container py-5 position-relative">
    <div class="row justify-content-center align-items-center">
      <div class="pattern_app"></div>
      <div class="col-12 col-md-4">
        <h4 class="h2 mb-3">
          DYNAMIC APP,
          <span class="font-weight-normal">your bank anywhere</span>
        </h4>
        <img
          src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png"
        />
      </div>
      <div class="col-12 col-md-5">
        <img
          src="https://cloud.modyocdn.com/uploads/1b60b2a2-0748-4340-b3c5-a4a63695eb52/original/app.png"
        />
      </div>
    </div>
  </div>
</div>
```

```css
/** APP **/
.pattern_app {
  background: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  width: 35%;
  height: 85%;
  position: absolute;
  right: 0;
  top: 0%;
}
```

## Step 15: Testimonial Widgets

The testimonials widget is a bit more complex as we will use JS to generate the slide. That's why we'll create a widget within the [Widget Builder](/en/platform/channels/widgets.html) section.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets.png" style="max-width: 300px;margin: auto 0;"/> 

Widget Builder is where you can create micro frontends for your sites. To create one we just need to enter the aforementioned section, click on the button <b> New Widget </b> and we will assign it a name, which in our case is Testimonial. Once it's created, it will display three tabs, where you will have to paste the JS, CSS and HTML accordingly.

<code>JS</code>

```js
$('.single-item').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: false,
})
```

<code>CSS</code>

```css
#testimonial {
  position: relative;
}
#testimonial:after {
  content: '';
  display: block;
  position: absolute;
  background-image: url(https://cloud.modyocdn.com/uploads/1e3588d5-1d5b-4ddb-b73d-77d88e1e37b1/original/pattern_circle.png);
  background-position: top left;
  width: 30%;
  height: 55%;
  top: 10%;
  left: 0;
  z-index: 1;
}
#testimonial .container {
  z-index: 2;
}
@media (max-width: 768px) {
  #testimonial:after {
    width: 50%;
    height: 30%;
    top: 20%;
  }
}
```

<code>HTML</code>

```html
{% assign entries = spaces['bank'].types['testimonial'].entries | by_lang: 'en'
%}
<div class="bg-light px-3 py-5" id="testimonial">
  <div class="py-5">
    <div class="container d-block d-md-none">
      <h3 class="h3 mb-4 text-dark">Our clients said...</h3>
    </div>
    <div class="container p-relative single-item">
      {% for entry in entries %}
      <div>
        <div class="row justify-content-center">
          <figure class="col-7 col-md-3 mb-4 m-md-0">
            <img
              class="w-100"
              src="{{ entry.Image.url }}"
              alt="{{ entry.Author }}"
            />
          </figure>
          <div class="figcaption col-11 col-md-6">
            <figcaption class="p-0 p-md-5">
              <h3 class="d-none d-md-block h3 mb-4 text-dark">
                Nuestros clientes dicen...
              </h3>
              <p class="text-muted">{{ entry.Testimony }}</p>
              <p class="text-muted font-weight-bold">{{ entry.Author }}</p>
            </figcaption>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

Once the widget is finished, you must save your changes in order to review it in preview mode. You can publish it through the widget library, which you can access from Pages.

To display it in the Home we need to add it as a <b> Custom </b> widget and search for it in the list (in this example we only have one).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/cursom_widget.png" style="max-width: 300px;margin: auto 0;"/>

<b>Congratulations! Now we have all the necessary widgets in the Home</b>

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets_home.png" style="max-width: 400px;margin: auto 0;"/> 

## Step 16: Review and Publish

Once all our Home widgets and CSS are finished, we will preview the work we have done in this Tutorial. Once you're happy with the results, we must publish the changes to now make everything available to our end users.

To make a publication, we click the <b> Publish </b> button where a panel will open with the changes we have made.

 <img src="/assets/img/tutorials/how-to-create-dynamicbank-home/review_publish.png" style="max-width: 700px;margin: auto 0;"/> 

Then we will follow the steps to select the publication date, which in this case will be immediate publication.

## Conclusion

Congratulations! You have completed the Dynamic Bank Home Creation course in Modyo.

Now you have knowledge of how to use [Modyo Channels] (/en/platform/channels) with all its modules; [Pages] (/en/platform/channels/pages), [Navigation] (/en/platform/channels/navigation), [Widgets] (/en/platform/channels/widgets), [Templates] (/en/platform/channels/templates) and some details within [Site settings] (/en/platform/channels/sites. html #configuracion -a-site). In addition, you managed to link your site with [Modyo Content] (/en/platform/content) that allows you to generate dynamic digital channels connected to content separated from the site code.
