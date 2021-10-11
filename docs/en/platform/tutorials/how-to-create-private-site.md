---
search: true
---

# Creating a Private Site

## Introduction

Welcome to a new tutorial from the Modyo training series. In this tutorial we're going to focus on [Modyo Channels] (/en/platform/channels), where we'll build the base of the site where we'll add a [Widget] (/en/platform/channels/widgets.html/) from the [Modyo Financial Widget Catalog] (/en/widgets/) using the [Modyo CLI] (/es/platform/channels/widgets.html #modyo -cli).

As in the other tutorials, we will use the fictional brand “Dynamic Bank”, which we will introduce below.

### Dynamic Bank

Dynamic Bank is the name we use at Modyo for our demos and examples of the platform. We created it so users of the Dynamic demos can get a close sense of what it's like to work with the Modyo platform. Once you have completed this tutorial, your site should look like this:

<img src="/assets/img/tutorials/how-to-create-private-site/summary.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/UtgKA8d7kN0lWUk3RvhHl4/PD-Private-Site?page-id=1086%3A0&node-id=1086%3A1&viewport=444%2C519%2C0.49354425072669983&scaling=min-zoom" target="blank">View Figma Design</a>

## Prerequisites

To execute the steps in this tutorial you must have knowledge of HTML, CSS, JS, and the Modyo platform.

## Step 1: Create a site in the Cloud

To create our [Site](/en/platform/channels/sites), where we are going to set up the Private Dynamic Bank, we need to go to the [Modyo Channels](/en/platform/channels) and click on the button <b>+ New Site</b>.

Fill the Name fields with "Private Site" and select the "Minimal" Theme as shown in the image.

<img src="/assets/img/tutorials/how-to-create-private-site/new-site.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/> 

## Step 2: Upload logo and favicon

To perform this step we will go to the [Site Configuration](/en/platform/channels/sites.html#site-settings), where we can change or add some site settings, such as Site Name, Description, Language, GTM ID, SEO, PWA, Team, among others.

In this case we will focus on General and add our logo file in <b> Site logo </b> and Favicon in <b> Visualization </b>.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b2b35c34-f955-41f6-8ce8-e1e23e21e377/original/DynamicBank_white.svg" style="margin: 30px 0px;max-width: 300px;background: #DDD;padding: 10px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" style="margin: 30px 0;max-width: 32px;">

Remember to save your changes after uploading the files.

Once our logo is uploaded, we're going to make the size changes to fit our design.

For this we will go to [Templates](/en/platform/channels/templates) and within the group <b>Libs</b> open the snippet <code>bootstrap css</code> and look for the class that is affecting our logo, <code>.navbar-brand img</code>, and change the height of <code>50px</code> to <code>30px</code>.

[Templates](/en/platform/channels/templates) corresponds to the structure that contains the site, i.e. the base of HTML, CSS, and JS, plus the libraries that the Template needs.

## Step 3: Change CSS variables to give you Dynamic Bank look and feel

To begin, let's modify the CSS variables, which are in a snippet called <code> css variables </code> that feeds the rest of the style sheets already configured within the Minimal Theme.

To make the change, we are going to modify the following variables in the snippet:

#### Colors:

```css
primary = rgba(56, 68, 112, 1)
secondary = rgba(98, 125, 229, 1)
light = rgba(250, 250, 250, 1)
info = rgba(121, 133, 178, 1)
dark = rgba(56, 68, 112, 1)
```

#### Buttons:

```css
button_radius = 100px
button_font_weight = 600
```

To review, let's save our changes and then use the [preview mode] (/es/platform/core/key-concepts.html #modo -preview).

## Step 4: Change Site Source

In Minimal we are using the [webfontloader](https://github.com/typekit/webfontloader) library to load the typography asynchronously.

We will use the Jost font for Dynamic. To change it, we have to enter the  <b>Javascript Base sheet</b> inside Views and modify the line where the call is made, replacing <code>families: ['DM Sans:400,700&display=swap']</code> by <code>families: ['Jost:400,700&display=swap']</code>.

## Step 5: Modify Layout Base

To make our site look like in the design, we need to modify its HTML structure. To do this, while in Templates, we are going to go to the Views tab and look for the [Layouts](/en/platform/channels/templates.html#custom-layouts) where we will select <b>base</b>.

The idea is to change the code to one that's more similar to an application; with the menu in the sidebar and using 100% of the width of our screen.

```html
{% html5 %}
<!-- HTML header with browser directives -->
<head>
  {% snippet 'shared/general/head' %}
</head>

{% body %}
<!-- Body with automatic context classes -->
{% snippet 'shared/general/body_tag_manager' %}
<div id="modyo-site-alert-wrapper"></div>
<div class="d-flex flex-column" id="layout-content">
  {% snippet 'shared/general/header' %}
  <div
    class="row h-100 overflow-hidden justify-content-end bg-primary"
    id="page-content"
  >
    <aside
      id="cont_nav_menu"
      class="col-6 col-md-2 d-flex flex-column justify-content-between h-100 overflow-auto"
    >
      <div class="p-3 h-100 d-flex flex-column justify-content-between">
        {% snippet 'shared/general/menu' %} {% snippet "user_html" %}
      </div>
    </aside>
    <section class="p-0 col-12 col-lg-10 bg-white" id="main-page">
      {{ content_for_layout }}
    </section>
  </div>
</div>
<script>
  {% snippet "shared/serviceworker/register_js" %}
</script>

{% endbody %} {% endhtml5 %}
```

## Step 6: Modify Header

Now that we have modified the Base Layout, let's make changes to the header by copying the following code into the snippet <b> Header </b>.

```html
<header role="banner" id="header" class="bg-primary">
    <div class="row">
        <aside class="col-10 col-xl-2">
            <div class="pl-3 py-2 d-flex"> 
                <button id="btn_menu" class="d-block d-xl-none mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" class="bi bi-list m_open" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#fff" class="bi bi-x m_close" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
                <a class="navbar-brand" href="{{ site.url }}">
                    <img src="{{ site.logo | asset_url }}" alt="Logo {{site.name}}">
                </a>
            </div>
        </aside>
        <section class="col-2 col-xl-10 text-white d-flex justify-content-end justify-content-xl-between align-items-center">
            <small class="d-none d-xl-block">
                <b>UF:</b> 28.680,39
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                <b>UTM:</b> 50.322,00
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                <b>IPSA:</b> 3.972,25
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                <b>USD:</b> 787,50
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#D7426E" class="bi bi-arrow-down mr-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                <b>EURO:</b> 898,25
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#70D960" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
            </small>
            {% if user %}
            <div class="mr-3">
                <button type="button" class="py-2 px-0 bg-transparent border-0 text-dark position-relative notifications_btn" data-toggle="modal" data-target="#notifications" id="dropdownProfileButton">
                    <h3 class="sr-only">Notifications</h3>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                        <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                    </svg>
                    {%if user.unread_notifications_count > 0 %}
                    <span class="badge badge-success notifications-badge badge_new" id="badge_new">
                    </span>
                    {% endif %}
                </button>
            </div>
            {% endif %}
        </section>
    </div>
</header>
<!-- Notifications Panel -->
{% snippet "notifications_html" %}
```

## Step 7: Modify Notifications and Sidebar

To modify notifications we need to edit the css. In the snippet <code> notifications_css </code> replace the code with the following:

```css
.notifications_btn svg {fill: {{white}};transition:.3s}
.notifications_btn svg:hover {fill: {{secondary}};transition:.3s}
.notifications-badge {width: 10px;height: 10px;border-radius: 100%;}
.notifications_btn .notifications-badge {position: absolute;right: 17px;top: 10px;}
.avatar {height: 40px;width: 40px;background-size: cover;}
.dropdown_user {min-width: 300px;}
.avatar_big {font-size: 20px;width: 50px !important;height: 50px !important;background-size: cover;}
.notification *:last-child {margin-bottom: 0 !important;}
#notifications.modal.right .modal-dialog,
#menu_panel.modal.right .modal-dialog {max-width: 400px;}
```

In the same way, we replace the HTML code in the snipppet <code> notifications_html </code>:

```html
{% if user %}   
<div class="modal right fade" id="notifications" tabindex="-1" aria-labelledby="notificationsLabel" aria-modal="true" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-white px-4 py-3">
                <h3 class="h5 modal-title" id="notificationsLabel">Notifications</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&#10005;</span>
                </button>
            </div>
            <div class="modal-body px-4 py-3">
                {%if user.notifications == 0 %}
                <p class="text-muted p-3 text-center mb-0">No new notifications</p>
                {% else %}
                <div class="accordion" id="notificationsCollapsed">
                    {% for notification in user.notifications %}
                    {% assign notification_url = notification.url | split: "notification_id="  %}
                    {% assign id =  notification_url[1] %}
                    <div class="mb-3 border rounded">
                        <div class="p-0">
                            <button class="notification_btn py-2 px-3 border-0 bg-transparent text-dark d-block w-100 text-left {%unless notification.opened%}font-weight-bold new_not{%endunless%}" type="button" data-toggle="collapse" data-target="#notification_{{forloop.index}}" aria-expanded="true" aria-controls="collapse_{{forloop.index}}" data-url="{{account.url}}/api/profile/notifications/{{id}}/mark_as_read" onclick="openNotification('{{forloop.index}}')" id="not_{{forloop.index}}">
                                <small class="d-block mb-1 text-muted">{{ notification.sent_at | date: "%H:%M %a, %b, %y" }}</small>
                                <span class="d-flex">
                                    <span class="mt-1 mr-2 badge {% unless notification.opened  %}badge-success{% else %} badge-light{% endunless %} notifications-badge" id="badge_{{forloop.index}}" style="margin-top: 6px">
                                    </span>
                                    {{ notification.subject }}
                                </span>
                            </button>
                        </div>
                        <div id="notification_{{forloop.index}}" class="notification collapse" aria-labelledby="notification_{{forloop.index}}" data-parent="#notificationsCollapsed">
                            <div class="border-top p-3">
                                {{ notification.body }}
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
                {% endif %}
            </div>
        </div>
    </div>
</div>
{% endif %}
<!-- Notifications JS -->
<script>
    {% snippet "notifications_js" %}
</script>
```

To make our menu look like a side navigation, let's replace the snippet code <code> menu </code> with the following:

```html
<ul class="nav menu_nav">
  {% assign items_to_show = menu.items | visible_items %} {% for item in
  items_to_show %} {% assign active = item.url | active_page: request.url %} {%
  assign children_to_show = item.child_items | visible_items %} {% if
  children_to_show.size > 0 %}
  <li
    class="nav-item nav-item-{{ item.parameterized_label }} menu-item {{ active }}"
  >
    <a
      target="{{ item.target }}"
      rel="{{ item.target | item_rel}}"
      class="nav-link text-white"
      href="{{ item.url | resolve_url: site.base_url }}"
    >
      {{ item.label }}</a
    >
    {% for child in children_to_show %}
    <div class="d-flex">
      <a
        target="{{ child.target }}"
        rel="{{ child.target | item_rel}}"
        class="submenu-item"
        href="{{ child.url }}"
      >
        <span>{{ child.label }}</span>
      </a>
    </div>
    {% endfor %} {% else %}
  </li>

  <li class="nav-item nav-item-{{ item.parameterized_label }}{{ active }}">
    <a
      target="{{ item.target }}"
      class="nav-link text-white"
      rel="{{ item.target | item_rel}}"
      href="{{ item.url }}"
      >{{ item.label }}</a
    >
    {% endif %}
  </li>
  {% endfor %}
</ul>
```

To display the Sign in, Profile, and Log Out buttons, we need to modify the snippet <code>user_html</code>:

```html
<nav class="menu_nav" id="second_nav">
  <hr class="d-block d-md-none d-xl-block" />
  <a href="{{ site.url }}/profile"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      fill="#A5AECC"
      class="bi bi-person  mr-2"
    >
      <path
        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
      />
    </svg>
    <span>My profile</span></a
  >
  <a href="{{ site.url }}/logout"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.3em"
      height="1.3em"
      viewBox="0 0 16 16"
      class="bi bi-box-arrow-right mr-2"
      fill="#D7426E"
    >
      <path
        fill-rule="evenodd"
        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
      />
      <path
        fill-rule="evenodd"
        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
      />
    </svg>
    <span>Log Out</span></a
  >
</nav>
```

After having all this, let's create a snippet for styles with the name <code> private_site_css </code> and add it to the General Stylesheet.

```css
html{
    height: 100%;
}
body {
    background: {{primary_dark}};
    height: 100%;
}
#layout-content {
    height: 100vh;
    overflow: hidden;
}
#main-page {
    overflow: scroll;
    height: 100%;
    border-radius: 8px 0 0 0;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.1);
}
.nav_menu_acc {
    padding-top: 16px;
}
.btn_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: left;
    margin-bottom: 16px;
    color: #fff;
    box-shadow: none;
    outline: 0 !important;
}
.menu_nav {
    display: flex;
    flex-direction: column;
}
.menu_nav a {
    color: #fff;
    line-height: 1.3em;
    padding: 8px 16px;
    border-radius: 6px;
    margin-top: 8px;
    background: transparent;
    text-decoration: none;
    transition:.3s;
    display: flex;
    align-items: center;
    min-height: 40px;
    display: inline-flex;
    font-weight: bold;
}
.menu_nav .active a,
.menu_nav a:hover {
    transition:.3s;
    background: #4C5D99;
    text-decoration: none;
    color: #fff;
}
.menu_nav a.submenu-item {
    display: inline-flex;
    margin-left: 1rem;
    font-size: .9rem;
    margin-top: 4px;
    padding: 4px 16px;
}
.menu_nav .active a {
    font-weight: bold;
}
#btn_menu {
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    border-radius: 4px;
    transition: .3s;
    width: 35px;
    text-align: center;
    outline: none;
}
#btn_menu:hover {
    background: {{secondary}};
}
#btn_menu .m_open {
    display: block;
}
#btn_menu .m_close {
    display: none;
}
body.open_menu #btn_menu .m_open {
    display: none;
}
body.open_menu #btn_menu .m_close {
    display: block;
}
#second_nav hr {
    margin: 10px 0;
    border: none;
    height: 1px;
    display: block;
    background: rgba(255,255,255,.1);
    border-radius: 4px;
}
@media (max-width:1199.98px){
    #page-content{
        position: relative;
    }
    #nav_menu {
        display: none !important;
    }
    body.open_menu #nav_menu {
        display: block !important;
    }
    aside#cont_nav_menu {
        transition:.3s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }
    body.open_menu aside#cont_nav_menu {
        transition:.3s;
        min-width: 50%;
        padding-left: 5%;
    }
    section#main-page {
        left: 0%;
        transition: .3s;
    }
    body.open_menu section#main-page {
        left: 50%;
        transition:.3s;
        position: relative;
        opacity:.4;
        overflow: hidden;
    }
    section#main-page.opened {
        cursor: pointer;
    }
}
@media (max-width:767.98px){
    body.open_menu aside#cont_nav_menu {
        min-width: 60%;
    }
    body.open_menu section#main-page {
        left: 60%;
    }
    #second_nav {
        display: none;
    }
    body.open_menu #second_nav {
        display: block;
    }
}
@media (max-width:575.98px){
    body.open_menu aside#cont_nav_menu {
        min-width: 80%;
    }
    body.open_menu section#main-page {
        left: 80%;
    }
}
```

Finally, we'll add Javascript for the responsive menu effect, in the Javascript sheet.

```js
window.csrf_token = '';
window.csrf_param = '';
/* JS libraries  */
{% snippet "shared/libs/jquery_js" %}
/* Popper JS  */
{% snippet "shared/libs/popper_js" %}
/* Bootstrap JS  */
{% snippet "shared/libs/bootstrap_js" %}
/* Web Font Loader */
{% snippet "webfontload_js" %}
/* Config WFL */
{% snippet "webfontload_config_js" %}

$( document ).ready(function() {
    $("#btn_menu").click(function() {
        $("body").toggleClass("open_menu");
        $("#page-content").toggleClass("opened");
    });
    $("#main-page").click(function() {
        $("body").removeClass("open_menu");
        $("#page-content").removeClass("opened");
    });
});

/*********************************
Javasctipt of libraries used in forms
SELECT 2
UJS
*********************************/
{% snippet "shared/libs/forms_js" %}
```

Remember to save all changes before you exit Templates. 

## Step 8: Generate the menu

Another one of Modyo's features is the Navigation tool, where we can generate the menu for our site in a simple way.

For this, we go to the [Navigation] section (/es/platform/channels/navigation.html) and modify the existing menu and leave the following options:

<table>
 <tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Associated Layout Page</th>
  <th style="text-align: left">URL</th>
 </tr>
 <tr>
  <td>
   My Bank
  </td>
  <td>
   Home
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Accounts
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
   Cards
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
   Transfers
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
   Credit
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
   Cash Advance
  </td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
 </tr>
</table>

Once our full menu is complete, we must save it.

## Step 9: Install Modyo CLI

Now that we have the base ready for adding our Widget, let's install the [Modyo CLI] (/es/platform/channels/widgets.html #modyo -cli).

[Modyo CLI] (/en/platform/channels/widgets.html #modyo -cli) is a command-line tool based on the acceleration and integration principles, which have a GET and PUSH command, respectively.

To install the Modyo CLI we need some dependencies, which must be installed globally.

They are:


* Git distributed version control system (v 1.7+)
* Node (v 12+)
* A code editor such as Visual Studio Code
* Npm (v 6.14+) or Yarn (v 1.22+)


To perform the installation, one of these options in the terminal can be used.

<code>Via yarn</code>

```sh
$ yarn global add @modyo/cli
```

<code>Via npm</code>

```sh
$ npm i -g @modyo/cli
```

Once installed, we can check that everything is OK by running the command <code>modyo-cli help</code>.

## Step 10: Initialize a Catalog Widget

After completing the installation process, let's get the [Account Summary] Widget (/es/widgets/retail/summary.html) from the [Modyo Financial Widget Catalog] (/en/widgets/).

We bring the Widget to our local environment with the following command:

```sh
modyo-cli get modyo-widgets-retail-summary
```

After the process is over, we will have a view like this in our terminal:

<img src="/assets/img/tutorials/how-to-create-private-site/terminal.png" style="max-width: 400px;margin: auto 0;"/>

 To edit it we must go to the folder <code> modyo-widgets-retail-summary </code> inside the terminal, and with <code> yarn serve </code> or <code> npm serve </code> we'll see the widget locally in our browser.

<img src="/assets/img/tutorials/how-to-create-private-site/widget.png" style="max-width: 600px;margin: auto 0;"/>

## Step 11: Style Changes in the Widget

Catalog Widgets are designed in Modyo with a flat style. To make changes we need to open the widget folder <code> modyo-widgets-retail-summary </code> in our editor, which in our case is Visual Studio Code.

<img src="/assets/img/tutorials/how-to-create-private-site/vscode.png" style="max-width: 600px;margin: auto 0;"/>

We'll start by modifying the CSS to change the colors of the variables to Dynamic Bank.

For this, we open the folder <code>src</code> and then inside css modify the file <code>_variables.css</code>.

```css
$primary-10: #EEF0F5;
$primary-20: #E8EAF1;
$primary-40: #D2D6E5;
$primary-60: #A5AECC;
$primary-80: #7985B2;
$primary-100: #384470;
$primary-dark: #2e4553;
$secondary-10: #eff0f1;
$secondary-20: #e0e2e3;
$secondary-40: #c1c5c7;
$secondary-60: #a1a8aa;
$secondary-80: #828b8e;
$secondary-100: #636e72;
$secondary-dark: #515a5e;
$tertiary-10: #f7f8f9;
$tertiary-20: #f0f2f3;
$tertiary-40: #e0e5e7;
$tertiary-60: #d1d8db;
$tertiary-80: #c1cbcf;
$tertiary-100: #b2bec3;
$tertiary-dark: #a3afb4;
$red: #D7426E;
$yellow: #F2C10D;
$green: #70D960;
$primary: $primary-100;
$secondary: $secondary-100;
$light: $secondary-10;
$dark: $secondary-dark;
```

Then in the file <code>_theme.css</code> we modify line 8 leaving the body with <code>background: white</code>;

In the directory <code>src/components/summaryaccount.Vue</code> we modify the header of the cards, modifying the background by <code>$primary-40 </code>, specifically line 169:

```css
.card-header.product-summary__header:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background: $primary-40;
}
```

And on line 8 we add the h6 class to the h2

```html
<h2 class="h6 mb-0 text-capitalize">
  {{ account.accountType }}
  <span class="d-block mt-1">{{ $tc('commons.number', account.accountNumber) }}</span>
</h2>
```

Next, we'll add styles to make the amount bar look green:

```css
.m-progress-bar .progress-bar {
  background: $green !important;
}
```

And finally we add the title at <code> App.vue </code>:

```html
<template>
  <article
    id="summary-app"
    class="py-4 py-sm-5">
    <div class="container-fluid px-0">
      <div
        v-if="isLoading"
        class="loading text-center pt-5">
        <font-awesome-icon
          icon="circle-notch"
          size="5x"
          spin />
      </div>
      <div
        v-else
        ref="viewport"
        class="products-viewport">
        <div class="header-summary mb-3">
          <h3 class="h4 text-primary font-weight-bold">Hola</h3>
          <h3 class="h4 text-primary">Bienvenido a Dynamic</h3>
        </div>
        <div
          ref="content"
          class="products-summary d-flex align-items-stretch">
          <summary-account
            v-for="account in accounts"
            :key="`account-${account.id}`"
            :account="account"
            :client-id="clientId" />

          <summary-card
            v-for="card in cards"
            :key="`card-${card.id}`"
            :card="card"
            :client-id="clientId" />

          <summary-add key="add" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import ScrollBooster from 'scrollbooster';
import { getURLParams } from '@modyo/financial-commons';
import SummaryAccount from './components/SummaryAccount.vue';
import SummaryCard from './components/SummaryCard.vue';
import SummaryAdd from './components/SummaryAdd.vue';

export default {
  name: 'App',
  components: {
    SummaryAccount,
    SummaryCard,
    SummaryAdd,
  },
  data() {
    return {
      carousel: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    accounts() {
      return this.$store.state.accounts;
    },
    cards() {
      return this.$store.state.cards;
    },
    clientId() {
      return this.$store.state.clientId;
    },
  },
  created() {
    const client = parseInt(getURLParams('client'), 10) || 1;
    this.$store.commit('SET_CLIENT_ID', client);
    this.$store.dispatch('DO_DATA_INITIALIZATION').then(() => {
      this.initProductsCarousel();
    });
  },
  methods: {
    initProductsCarousel() {
      const { viewport } = this.$refs;
      const { content } = this.$refs;

      // eslint-disable-next-line no-unused-vars
      const sb = new ScrollBooster({
        viewport,
        content,
        direction: 'horizontal',
        emulateScroll: false,
        onUpdate: (state) => {
          if (state.borderCollision.right) {
            content.style.transform = `translateX(${-state.position.x - 20}px)`;
          } else {
            content.style.transform = `translateX(${-state.position.x}px)`;
          }

          if (state.isMoving) {
            viewport.style.cursor = 'grabbing';
          } else {
            viewport.style.cursor = 'grab';
          }
        },
        shouldScroll: (state, event) => {
          // disable scroll if clicked on button
          const isLink = event.target.nodeName.toLowerCase() === 'a';
          return !isLink;
        },
      });

      sb.updateMetrics();
    },
  },
};
</script>

<style lang="scss" scoped>
.products-viewport {
  overflow: hidden;

  cursor: grab;
}

@media (max-width: 575.98px) {
  .header-summary h2 {
    font-size: 24px;
  }
}
.header-summary {
  margin-left: 30px;
}
@media (min-width: 1200px) {
  .header-summary {
    margin-left: 140px;
  }
}
</style>
```

Once we're done giving the widget the look and feel, we're ready to push the changes to Modyo.

## Step 12: Push Widget to Site

To push the Widget to the site in Modyo, we need to generate the configuration in the Modyo CLI so that it knows where we are going to push.

We are going to create the configuration file in the root folder and must be called <code>.env</code>, adding the following code and replacing **[Account url]** and **[Modyo API Token]** according to your context.

```
MODYO_ACCOUNT_URL= [Account url]
modyo_site_host=private-site
MODYO_VERSION=9
MODYO_TOKEN= [Modyo API Token]
modyo_build_command=build
modyo_build_directory=Dist
modyo_widget_name=summary
```

<img src="/assets/img/tutorials/how-to-create-private-site/env.png" style="max-width: 400px;margin: auto 0;"/>

To obtain a token we will go to Modyo Account Settings, and within API Access we will generate a new one in the top-right button <b>+ New API Access</b>.

In the modal we complete the following data:

<table>
 <tr>
  <td>
   Name
  </td>
  <td>
   modyo-cli
  </td>
 </tr>
<tr>
  <td>
   Description
  </td>
  <td>
   Token used to push from modyo-cli
  </td>
 </tr>
 <tr>
  <td>
   Redirect URI
  </td>
  <td>
   urn:ietf:wg:oauth:2.0:oob
  </td>
 </tr>
</table>

<img src="/assets/img/tutorials/how-to-create-private-site/token.png" style="max-width: 400px;margin: auto 0;"/>

Once the access API is created, we enter <b>Team</b> and search for our user. In the tab <b>API Access</b> we click on <b>+ New Access Token</b>, select <b>modyo-cli</b> and we click on <b>Create Token</b>.

<img src="/assets/img/tutorials/how-to-create-private-site/access_token.png" style="max-width: 400px;margin: auto 0;"/>

Now that we have our token, we can add it to the configuration file <b> .env </b>.

<img src="/assets/img/tutorials/how-to-create-private-site/token_gnerated.png" style="max-width: 400px;margin: auto 0;"/>

Then with the command <code>modyo-cli push Summary</code> in the terminal, we will take the widget to the Widget Builder of our site.

<img src="/assets/img/tutorials/how-to-create-private-site/wb.png" style="max-width: 400px;margin: auto 0;"/>

To make it available in the widget library, let's go into our Widget and publish.

<img src="/assets/img/tutorials/how-to-create-private-site/widget_custom.png" style="max-width: 400px;margin: auto 0;"/>

Then we go to Page Home, delete the existing HTML Widget and replace it with our Custom Widget.

<img src="/assets/img/tutorials/how-to-create-private-site/home.png" style="max-width: 600px;margin: auto 0;"/>

## Step 13: Review and Publish Home, Navigation, and Template

Once we have done the previous steps, we will review the work in preview mode. When we sign-off on the results, we must publish the changes to make all our changes available to our end users.

To make a publication, we click the button <b>Publish</b> where a panel will open with the changes we made.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" style="max-width: 700px;margin: auto 0;"/>

Then we will follow the steps to select the publication date, which in this case will be immediate publication.

## Opinion

Congratulations! You have completed the Private Site course with Modyo CLI Widgets.

You already have some knowledge about [Modyo Channels](/en/platform/channels) with all its modules: [Pages](/en/platform/channels/pages), [Navigation](/en/platform/channels/navigation), [Widgets](/en/platform/channels/widgets), [Templates](/en/platform/channels/templates) and some details inside from [Site settings](/en/platform/channels/sites.html#site-settings). Also, we used [Modyo CLI](/en/platform/channels/widgets.html#modyo-cli) to work on a Widget in the [Modyo Catalog](/en/widgets/) and push your site.