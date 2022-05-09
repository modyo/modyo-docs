---
search: true
---

# Creating a Private Site

## Introduction

Welcome to a new tutorial in the Modyo training series. This tutorial focuses on [Modyo Channels](/en/platform/channels), where you'll build the foundation of a private site.

As in the other tutorials, we will use the fictional brand “Dynamic Bank”, which we will introduce below.

### Dynamic Bank

Dynamic Bank is the name of our fictitious brand in Modyo. This experience will be very close to reality of how to work with Modyo. 

## Prerequisites

Be familiar with:

- HTML
- CSS
- JS
- Modyo's platform

## Step 1: Create a Cloud Site

1. From the main menu, select **Channels** and click **Sites**.
2. Click **+ New Site**.
3. In the New Site window fill in the following fields:
  - Name: **Private Site**
  - Host: **private**
  - Realm of Site: **None**
4. Click **Create**.

<img src="/assets/img/tutorials/how-to-create-private-site/new-site.png" alt="Modyo's New Site page." style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

## Step 2: Upload logo and favicon

To change the files, follow these steps:

1. From the main menu, select **Site Settings**, click **General**.
1. Under site logo, click **Upload**.
1. Select your logo and click on **Open**.
1. In the Visualization section, under Favicon, click **Upload**.
1. Select your favicon and click **Open**.
1. Click **Save**.

#### Logo

<img src="https://cloud.modyocdn.com/uploads/b2b35c34-f955-41f6-8ce8-e1e23e21e377/original/DynamicBank_white.svg" alt="Dynamic Bank Logo" style="margin: 30px 0px;max-width: 300px;background: #DDD;padding: 10px;">

#### Favicon

<img src="https://cloud.modyocdn.com/uploads/7c6b4dd7-5b50-43f3-9ca1-a07a2cbc6412/original/favicon.ico" alt="Dynamic Bank Favicon" style="margin: 30px 0;max-width: 32px;">

Remember to save your changes after uploading the files.

## Step 3: Change CSS variables to give you Dynamic Bank look and feel

Once your logo is uploaded, we will resize it to fit our design.

1. In the main menu, click **Templates**.
1. In the **Snippets** list, in the Libs group, open the snippet `bootstrap_css`.
1. Look for the `.navbar-brand img` class and change the **height** from `50px` to `30px`.

To get started, modify the CSS variables, the ones in a snippet called <code> variables_css </code> that feeds the rest of the stylesheets already configured within the Theme.

To make the changes to variables_css, follow these steps:

1. In the main menu, click **Templates**.
1. In the Views & Snippets menu on the right, click **Snippets**.
1. In the **Libs** section, click `variables_css`.
1. Modify the following values:

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

> To review, we are going to save our changes and then use [preview mode](/en/platform/core/key-concepts.html#preview-mode).

## Step 4: Change Site Source

In the Theme we are using the [webfontloader](https://github.com/typekit/webfontloader) library to load the typography asynchronously.

For this site we will use the Jost font. Follow these steps to change the typography:

1. In the Views list, click Javascript `base`.
1. Replace the following line:

```css
families: ['DM Sans:400,700&display=swap']

for

families: ['Jost:400,700&display=swap']
```

## Step 5: Modify Layout Base

To make our site look like in the design, we need to modify its HTML structure. The idea is to change the code to one more like an application; with the menu in the sidebar and using 100% of the width of our screen.

Follow these steps to modify the `base` layout:

1. Under **Templates**, in the Views list on the right, in the Layouts section click `base`.
1. In the HTML section, replace the code with the following:

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

To follow the Figma layout, follow these steps to modify the header:  

1. In **Templates**, open the **Snippets** tab.
1. Click on the General snippet <b>Header</b>.
1. On the HTML tab, copy the following code:

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

To modify the notifications we need to edit the css. Follow these steps to modify `notifications_css`:

1. In **Templates**, open the **Snippets** tab.
1. Click on the CSS snippet <b> notifications_css </b>.
1. In the tab we replace the code with the following:

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

4. In the list of snippets, open the snippet <code> notifications_html </code> 
5. Replace the code with the following:

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

6. In the list of snippets, open the snippet <code>menu</code>.
7. To make the menu look like a side navigation, replace the snippet code with the following:

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

8. In the Snippets list, open the snippet <code>user_html</code>.
9. To display the Sign in, Profile, and Log Out buttons, replace the code with the following: 

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

10. In the **Snippets** list, in the **Custom** section, click **+** to create a style sheet that will contain all the styles for this tutorial.
11. Write the path <code>privatesite.css</code> and copy the code:

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
10. In the **Views** list, in the **Style Sheet** section, click `base`.
11. Add the snippet you created at the end with: `{% snippet “privatesitecss”%}`
12. In the list of **Views**, in the **Javascript** section, click `base`.
13. Replace the code with the following:

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

> Remember to save all changes before exiting Templates. 

## Step 8: Generate the menu

Another feature that exists within Modyo is the Navigation tool, in which you can generate the menu for your site.

To create the menu, follow these steps:

1. In the main menu of your site, click [Navigation](/en/platform/channels/navigation.html).
1. Click on the existing menu and add the following options:

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

3. Click **Save**.


## Step 9: Review and Publish Home, Navigation, and Template

After completing the above steps, review the entire site in preview mode. When you are satisfied with the result, you must publish your changes to make all changes available to your end users.

To make a post, from the **Summary** section, click the button <b>Publish</b> where a panel will open with your changes.

<img src="/assets/img/tutorials/how-to-create-private-site/publish.png" alt="Modyo's Review and Publish page with the changes made during this tutorial." style="max-width: 700px;margin: auto 0;"/>

Select all pending changes, and click **Publish**. Select **Publish Now**.

## Conclusion

Very good! You have finished the Private Site tutorial.

You now know how to use:
- [Modyo Channels](/en/platform/channels) with all its modules:
- [Pages](/en/platform/channels/pages)
- [Navigation](/en/platform/channels/navigation)
- [Templates](/en/platform/channels/templates)
- [Site settings](/en/platform/channels/sites.html#site-settings)

If you want to continue working with this sample project, in the [next tutorial](/en/platform/tutorials/how-to-create-a-cli-widget.html) you can add a [Widget](/en/platform/channels/widgets) to it using the [Modyo CLI](/en/platform/tutorials/how-to-create-a-cli-widget.html) 
