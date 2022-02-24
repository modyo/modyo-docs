---
search: true
---

# Creating a Basic Site

## Introduction

Welcome to a tutorial in the Modyo training series. This tutorial focuses on [Modyo Channels](/en/platform/channels) where you'll learn how to create a site, modify a template base, add new libraries, and connect widgets to existing content.

Linking Content to Channels is one of the most important features when it comes to having dynamic, easy-to-manage sites.

Throughout this tutorial we'll use the fictional brand “Dynamic Bank”, which we'll introduce below.

### Dynamic Bank

Dynamic Bank is the name we give in Modyo to everything related to demos and examples of the platform. We wanted to create it so we could offer an experience close to the reality of what it really means to work with Modyo. Once this tutorial is complete, your site should look like this:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">View Figma Design</a>

## Prerequisites

To perform the steps in this tutorial you must have completed:

- [Dynamic Bank Content](/en/platform/tutorials/how-to-create-content)

Be familiar with:
- HTML
- CSS
- JS
- Modyo's platform

## Step 1: Create a Cloud Site

To create your [site](/en/platform/channels/sites), follow these steps:

1. From the main menu, select **Channels** and click **Sites**.
2. Click **+ New Site**.
3. In the New Site window fill in the following fields:
  - Name: **Bank**
  - Host: **bank**
  - Realm of Site: **None**
4. Click **Create**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<b>You created your first site in Modyo!</b>

## Step 2: Change CSS variables to give a look and feel to Dynamic Bank 

Here we are going to modify the CSS variables, which are in a snippet called <b>css variables</b> that feeds the rest of the stylesheets already configured within the Minimal Theme.

To make the changes to variables css, follow these steps:

1. In the main menu, click **Templates**.
1. In the Views & Snippets menu on the right, click **Snippets**.
1. In the **Libs** section, click `variables_css`.
1. Modify the following values:

#### Colors:

```liquid
{% assign primary = rgba(240, 90, 162, 1) %}
{% assign secondary = rgba(98, 125, 229, 1) %}
{% assign light = rgba(250, 250, 250, 1) %}
{% assign info = rgba(121, 133, 178, 1) %}
{% assign dark = rgba(56, 68, 112, 1) %}
```

#### Buttons:

```liquid
{% assign button_radius = 100px %}
{% assign button_font_weight = 600 %}
```

To review the change you just made, click the “eye” icon to activate [preview mode](/en/platform/core/key-concepts.html#preview-mode).

## Step 3: Edit `container`

In [Layouts](/en/platform/channels/templates.html#custom-layouts), HTML structures that are added on every [Page](/en/platform/channels/pages), you need to remove the `container` class from the main in order to use 100% of the width of a Page.

1. Inside **Templates**, under Views -> Layouts on the right, click `home`.
1. Remove `class="container"` from the template.
1. Click **Publish**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/main.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Step 4: Change Site Source

In the minimal we are using the [webfontloader](https://github.com/typekit/webfontloader) library to load the typography asynchronously.

For Dynamic Bank we will use the Jost font. Follow these steps to change the typography:

1. In the Views list, click Javascript `base`.
1. Replace the following line:

```css
families: ['DM Sans:400,700&display=swap']

for

families: ['Jost:400,700&display=swap']
```


## Step 5: Change header and footer

One of the most powerful features you have within Templates is to reuse code in different Pages with the Header and Footer templates. This code will load for every page on your site.

To achieve the Dynamic Bank look and feel on your site, replace the header and footer, located within Snippets -> General, with the following code: 

`header`

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

`footer`

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

### Step 6: Create new CSS for footer

After finishing the changes to the header and footer Snippets, we're going to work on the footer's CSS. To keep things tidy, we will create a new [Snippet](/en/platform/channels/templates.html#snippets) and then call it in the `base` stylesheet Template.

To create a new Snippet, follow these steps:

1. In the Custom Snippets list, click **+**.
1. The value of the path is: `footer_css`
1. Paste the following code:

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

4. To add our new snippet to the template's base stylesheet, click on the copy icon next to our snippet as shown in the following image:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/copy.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

5. Paste into our Style Sheet under Views -> Style Sheets -> `base`.

The code for our snippet looks like this:

<code>{% snippet "footer_css" %}</code>

## Step 6: Upload logo and favicon

To change the logo and favicon, you have to use [Site Settings](/en/platform/channels/sites.html#site-configuration), where we can change or add some site settings, including: Site Name, Description, Language, SEO, PWA, Team, among others.

To change the files, follow these steps:

1. From the main menu, select **Site Settings**, click **General**.
1. Under site logo, click **Upload**.
1. Select your logo and click on **Open**.
1. In the Visualization section, under Favicon, click **Upload**.
1. Select your favicon and click **Open**.
1. Click **Save**.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b3d572c9-a49a-4b8a-b411-d9b79b9b7b1d/original/dynamicbank-01.svg" style="margin: 30px 0;max-width: 300px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;">


## Step 7: Make Bootstrap CSS changes

Once your new logo is uploaded, you need to resize it to fit the Dynamic Bank design. To make the CSS changes, follow these steps:

1. In the main menu, click **Templates**.
1. In the **Snippets** list, in the Libs group, open the snippet `bootstrap_css`.
1. Look for the `.navbar-brand img` class and change the **height** from `50px` to `30px`.

>After reviewing in preview mode that your new logo looks good, you need to change how the menu links look.

4. Modify the styles of the `navbar-light`, `navbar-nav`, and `nav-link` classes with the following code:

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

To have everything organized, create a CSS snippet, where you'll add all the styles that affect Home.

To create a new Snippet, follow these steps:

1. In **Templates** -> **Custom Snippets**, click **+**.
1. The path value is `home_css`. 

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/snippet.png" style="margin: 30px 0;width: 400px;">

For this snippet to take effect in our Home we need to import the snippet into the `base` CSS view with the following code `{% snippet “home_css”%}` so that the content of our snippet appears within the general style sheet of the template.

3. In the **Views** section, open the `base` stylesheet.
4. Paste the following code to import the snippet: `{% snippet "home_css"%}`

## Step 9: Add library dependencies

For some of the Home sections you need to add JS and CSS libraries, for example to add animations in the Hero or testimonial slides.

To add dependencies to external libraries, follow these steps:

1. In the **Templates** section, under **Snippets**, create the following custom snippets:

> Snippet names are the value of the Path.

`animate_css`

[CSS Animate Minified](https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css)

`wow_js`

[Library WOW JS Minified](https://gist.githubusercontent.com/susi917/13cc28a396418b1554efeb2929b0cc6a/raw/82f9a6d1af6bd55a71d315e8967b8e89e82cc948/wow.min.js)

`slick_css`

[CSS Slick Slider](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css)

`slick_js`

[Library Slick Slider Minified](https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js)

2. In **Views** -> `base` stylesheet, add `{% snippet “animate_css”%}` and `{% snippet slick_css%}`.
3. In **Views** -> javascript `base`, add `{% snippet “wow_js”%}` and `{% snippet “slick_js”%}`.

## Step 10: Generate the menu

Another feature that exists within Modyo is the Navigation tool, in which you can generate menus for your sites.

To create the menu, follow these steps:

1. From the main menu of your site, click [Navigation](/en/platform/channels/navigation.html).
1. Click **Menu**.
1. Modify the existing menu with the following options:

<table>
 <tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Associated Layout Page</th>
  <th style="text-align: left">URL</th>
 </tr>
 <tr>
  <td>
   Home
  </td>
  <td>
   Home
  </td>
  <td></td>
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

4. When finished, click **Save** and then click **Publish**.
5. On the **Review and Publish** screen, you can see all the files that have been modified. Select all and click **Publish**.

## Step 11: Modify Home Page

Once you have the base template, the menu, and site settings ready, modify Home by following these steps:

1. In the main menu of your site, click [Pages](/en/platform/channels/pages).
1. Click **Home**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/page.png" style="margin: 30px 0;max-width: 300px;">

3. Click the widget.
4. Modify the title of the widget to **Hero**.
5. Change the HTML to the following:

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

This HTML uses the [Liquid SDK](/en/platform/content/public-api-reference.html#liquid-sdk) to connect [Modyo Channels](/en/platform/channels) to [Modyo Content](/en/platform/content). The call to Liquid SDK is made by using:

```liquid
{% assign entries = spaces['bank'].types['hero'].entries | paginated: 1 %}
```

This line assigns the Space and Type you created previously to Entries.

6. Once our HTML is ready, in the main menu click **Templates**.
7. In the **Snippets** section, open the custom snippet `home_css` and paste the following:

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

> This code contains the classes required for the Hero style.

8. Activate [preview mode](/en/platform/core/key-concepts.html#preview-mode).
9. In the preview mode bar, turn on changes to Page and Templates.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/preview.png" style="margin: 30px 0;">

## Step 12: News Widgets

To create the Home News Feed, follow these steps:

1. In the main menu of your site, click **Pages**.
2. From **Home** add an HTML widget called **News**.
3. In the HTML tab, paste the following code:

```html
{% assign entries = spaces['bank'].types['news'].entries | paginated: 3 %}
<div class="container my-5 py-5">
  <div class="row justify-content-center mb-4">
    <div class="col-12 col-md-8 text-center">
      <h3 class="text-dark">
        Keep up to date with all your banking needs
      </h3>
      <p class="text-muted">
        Read all the news we have for you
      </p>
    </div>
  </div>
  <div class="row">
    {% for entry in entries %}
    <div class="col-4 d-flex">
      <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.fiels.Url }}">
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

> For these Cards you don't need custom CSS as you'll only use Bootstrap helpers.

4. Click **Save**.
5. Click **Publish** and then **Publish Now**.

## Step 13: Benefits Widgets

For the benefits widget follow these steps:

1. In the main menu of your site, click **Pages**.
2. From **Home** add a new HTML widget called **Benefits**.
3. In the HTML tab, paste the following code:

```html
{% assign entries = spaces['bank'].types['benefits'].entries | paginated: 7 %}
<div class="py-5 bg-primary" id="benefits">
  <div class="container my-5">
    <div class="row justify-content-center mb-4">
      <div class="col-12 col-md-8 text-center">
        <h3 class="text-white">
          Become a part of these benefits made just for you
        </h3>
        <p class="text-white">
          A pleasant banking experience is the most important thing for us.
        </p>
      </div>
    </div>
    <div class="row">
      {% for entry in entries limit:1 %}
      <div class="col-12 col-md-6 mb-4 pb-2 d-flex">
        <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.meta.url }}">
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
        <a class="card shadow-sm w-100 bg-white text-decoration-none rounded overflow-hidden" href="{{ entry.meta.url }}">
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

3. Click **Templates**.
4. Open the **Snippets** tab and open the custom snippet `home_css`.
5. Copy the following code to add the classes needed for benefits:

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

> Remember that you can use preview mode to see how Home is changing.

## Step 14: Dynamic App Widgets

The Dynamic app widget is a custom HTML widget, this means that it is not connected to Content and you can't use Liquid `assign`.

1. In the main menu of your site, click **Widgets**.
2. Click **+ New Widget** and name it `Dynamic App`.
3. Paste the following code into the HTML tab:

```html
<div class="bg-white" id="app_home">
  <div class="container py-5 position-relative">
    <div class="row justify-content-center align-items-center">
      <div class="pattern_app"></div>
      <div class="col-12 col-md-4">
        <h4 class="h2 mb-3">
          Dynamic App,
          <span class="font-weight-normal">lleva tu banca a todas partes</span>
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

4. In the main menu, click **Templates**.
5. En el apartado de **Snippets**, abre el snippet personalizado `home_css` y agrega las clases necesarias para Dynamic App:

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

The testimonials widget is a bit more complex as it uses JS to generate the animation.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets.png" style="max-width: 300px;margin: auto 0;"/>

The Widget Builder is where you can create micro frontends for your sites. 

1. In the main menu of your site, click **Widgets**.
2. Click **+ New Widget** and name it `Testimonials`.
3. Paste the following code into the JS tab:

`JS`

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

`CSS`

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

`HTML`

```html
{% assign entries = spaces['bank'].types['testimonial'].entries %}
<div class="bg-light px-3 py-5" id="testimonial">
  <div class="py-5">
    <div class="container d-block d-md-none">
      <h3 class="h3 mb-4 text-dark">Our clients say...</h3>
    </div>
    <div class="container p-relative single-item">
      {% for entry in entries %}
      <div>
        <div class="row justify-content-center">
          <figure class="col-7 col-md-3 mb-4 m-md-0">
            <img
              class="w-100"
              src="{{ entry.fields.Image.url }}"
              alt="{{ entry.fields.Author }}"
            />
          </figure>
          <div class="figcaption col-11 col-md-6">
            <figcaption class="p-0 p-md-5">
              <h3 class="d-none d-md-block h3 mb-4 text-dark">
                Our clients say...
              </h3>
              <p class="text-muted">{{ entry.fields.Testimony }}</p>
              <p class="text-muted font-weight-bold">{{ entry.fields.Author }}</p>
            </figcaption>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</div>
```

4. Save your changes so you can review it in preview mode.
5. Click **Publish** and select **Publish Now**. When you publish the widget, it will be available in the library of custom widgets, which you can access from Pages.

> To see it in Home you have to add it as a <b> Custom widget </b> and search for it within the list (in this example we only have one).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/cursom_widget.png" style="max-width: 300px;margin: auto 0;"/>

<b>Congratulations! Now we have all the necessary widgets in Home</b>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/widgets_home.png" style="max-width: 400px;margin: auto 0;"/>

## Step 16: Review and Publish

After you finish all the Home widgets and CSS, review the work you did in this Tutorial using preview mode.

To publish your page, follow these steps:

1. From the main menu of your site, click **Summary**.
1. Click the <b>Publish</b> button where a panel will open with the changes you've made.
1. Add all the files and click **Publish**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-home/review_publish.png" style="max-width: 700px;margin: auto 0;"/>

1. Select **Publish Now** and click **Publish**.

## Conclusion

Congratulations! You have completed the Dynamic Bank Home Creation course in Modyo.

Now you know how to use:
- [Modyo Channels](/en/platform/channels) and all its modules
- [Pages](/en/platform/channels/pages)
- [Navigation](/en/platform/channels/navigation)
- [Widgets](/en/platform/channels/widgets)
- [Templates](/en/platform/channels/templates)
- [Site settings](/en/platform/channels/sites.html#site-settings)
- In addition, you were able to link your site to [Modyo Content](/en/platform/content) that allows you to generate dynamic digital channels connected to content separate from the site's code.