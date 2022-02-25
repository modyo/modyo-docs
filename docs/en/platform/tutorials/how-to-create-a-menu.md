---
search: true
---

# Creating a Mega Menu

## Introduction

Welcome to a tutorial of the Modyo training series. This tutorial focuses on [Modyo Channels](/en/platform/channels), using the [Navigation](/en/platform/channels/navigation.html) module, and [Templates](/en/platform/channels/templates.html) to create a mega menu on your site.

Navigation is a tool that helps us develop in a simple way and can then be managed in a better way. 

In this tutorial we will continue to use the Dynamic Bank site.

<img src="/assets/img/tutorials/how-to-create-a-menu/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=905%3A0&node-id=905%3A1&viewport=401%2C2127%2C0.9736564755439758&scaling=min-zoom" target="blank">See Figma of design</a>

## Prerequisites

Completed the tutorials:

- [Creating and Publishing Content](/en/platform/tutorials/how-to-create-content)
- [Creating a Basic Site](/en/platform/tutorials/how-to-create-home)

Familiar with:

- HTML
- CSS
- JS
- Modyo Platform

## Step 1: Complete the Menu

In the previous Tutorials you created the Dynamic Bank site, you are now going to generate a complex menu using the [Navigation](/en/platform/channels/navigation.html), and [Templates](/en/platform/channels/templates.html) tools.

To add more items to the menu, follow these steps:
1. In the side menu, select **Channels** and click **Sites**.
1. Select your site and click [Navigation](/en/platform/channels/navigation.html).
1. Select the menu <code> Main </code> and fill it with the following fields:

<table>
 <tr>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Description</th>
  <th style="text-align: left">Classes</th>
  <th style="text-align: left">Link</th>
  <th style="text-align: left">URL</th>
  <th style="text-align: left">Parent</th>
 </tr>
 <tr>
  <td>
   Home
  </td>
  <td></td>
  <td></td>
  <td>
   Home Layout
  </td>
  <td></td>
  <td></td>
 </tr>
 <tr>
  <td>
   Productos
  </td>
  <td></td>
  <td>megamenu</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Planes
  </td>
  <td></td>
  <td></td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Productos</td>
 </tr>
  <tr>
  <td>
   Cuenta Corriente 
  </td>
  <td>Donde quieras con Dynamic</td>
  <td>cuenta-corriente</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Planes</td>
 </tr>
  <tr>
  <td>
   Plan Dynamic
  </td>
  <td>Nos adaptamos a tus necesidades</td>
  <td>plan-dynamic</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Planes</td>
 </tr>
 <tr>
  <td>
   Tarjetas
  </td>
  <td></td>
  <td></td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Productos</td>
 </tr>
 <tr>
  <td>
   Tarjetas de Crédito
  </td>
  <td>Disfruta todos nuestros beneficios</td>
  <td>credito</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Tarjetas</td>
 </tr>
 <tr>
  <td>
   Tarjetas de Débito
  </td>
  <td>Realiza compras en comercios</td>
  <td>debito</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Tarjetas</td>
 </tr>
 <tr>
  <td>
   Créditos
  </td>
  <td></td>
  <td></td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Productos</td>
 </tr>
  <tr>
  <td>
   Crédito Hipotecario
  </td>
  <td>El hogar que siempre soñaste</td>
  <td>hipotecario</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Créditos</td>
 </tr>
  <tr>
  <td>
   Crédito de Consumo
  </td>
  <td>Tus proyectos son los  nuestros</td>
  <td>consumo</td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td>Créditos</td>
 </tr>
 <tr>
  <td>
   Beneficios
  </td>
  <td></td>
  <td></td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Sucursales
  </td>
  <td></td>
  <td></td>
  <td>
   Custom URL
  </td>
  <td>
  #
  </td>
  <td></td>
 </tr>
</table>

Which will give us a view like this:

<img src="/assets/img/tutorials/how-to-create-a-menu/menu.png" style="max-width: 700px;margin: auto 0;"/>

3. **Save** your changes and when finished click **Publish**.

## Step 2: Create view in Templates

At this point, there is no place to display your menu. To display the menu, you're going to use Liquid and Snippets.

To view your menu, follow these steps:

1. In the main menu, click **Templates**.
1. Open **Snippets**, and select the General snippet `menu`.
1. Replace the code with the following:

>This code will take the menu you created and iterate over the items found, displaying them using a combination of Liquid and HTML. The code applies different logic if the item is one, two, or three levels deep.

```html
{% assign menu = menus['main'] %} 
<ul class="nav navbar-nav d-flex align-items-center" role="menu" aria-label="Main menu {{responsive}}">
    {% assign items_to_show = menu.items | visible_items %}
    {% for item in items_to_show %}
    {% assign active = item.url | active_page: request.url %}
    {% assign second_level = item.child_items | visible_items %}
    {% if second_level.size > 0 %}
    {% if item.classes == 'megamenu'%}
    <!-- -->
    <li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item megamenu {{ active }}">
        <a id="megamneu" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="{{item.classes}} nav-link dropdown-toggle">{{ item.label }} <span class="sr-only">dropdown</span></a>
        <div aria-labelledby="megamneu" class="megamenu dropdown-menu border-0 p-0 m-0">
            <div class="container p-lg-0">
                <div class="row justify-content-end w-100">
                    <div class="col-12 col-xl-8 bg-white rounded m-0 shadow-sm">
                        <div class="p-4">
                            <div class="row">
                                {% for child in second_level %}
                                <div class="col-4">
                                    <p class="megamenu-title small font-weight-bold mb-0 text-uppercase">{{ child.label }}</p>
                                    <ul class="list-unstyled">
                                        {% assign third_level = child.child_items | visible_items %}
                                        {% if third_level.size > 0 %}
                                        {% for child in third_level %}
                                        <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                                            <div class="megamenu_icon icon-{{child.classes}}">

                                            </div>
                                            <div>
                                                <span>{{ child.label }}</span>
                                                <p class="small text-muted mb-0">{{ child.description }}</p>
                                            </div>
                                        </a>
                                        {% endfor %}
                                        {% endif %}
                                    </ul>
                                </div>
                                {% endfor %}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
    <!-- -->
    {% else %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
        <a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="{{item.classes}} nav-link dropdown-toggle {% for child in second_level %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }}Button{{ responsive }}" role="menuitem">
            {{ item.label }} <span class="sr-only">dropdown</span>
        </a>
        <div class="{{item.classes}} submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }} dropdown-menu" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }}Button{{responsive}}" aria-expanded="false">
            {% for child in second_level %}
            <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                {{ child.label }}
            </a>
            {% assign third_level = child.child_items | visible_items %}
            {% if third_level.size > 0 %}
            {% for child in third_level %}
            <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                <span class="pl-2 small">{{ child.label }}</span>
            </a>
            {% endfor %}
            {% endif %}
            {% endfor %}
        </div>
        {% endif %}
        {% else %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} {{ active }}" role="none">
        <a target="{{ item.target }}" class="{{item.classes}} nav-link" rel="{{ item.target | item_rel}}" href="{{ item.url }}" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
    </li>
    {% endif %}
    {% endfor %}
</ul>
```

4. Create a new custom Snippet `megamenu_css` and add the following code:

```css
.megamenu {
    position: static
}
.megamenu .dropdown-menu {
    background: none;
    border: none;
    width: 100%
}
a.megamenu-item {
    color: {{dark}};
    padding: .5rem 0;
    display: block;
    text-decoration: none !important;
}
.megamenu-title {
    color: #A5AECC;
}
.dropdown-toggle::after {
    color: #A5AECC;
}
.megamenu_icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    background-repeat: no-repeat;
    background-position: center;
}
.nav-link.btn.btn-primary {
    color: white !important;
    padding: .5rem 1rem !important;
}
.navbar-expand-md .navbar-nav .dropdown-menu.megamenu {
    top: 85%;
}
.megamenu.show .nav-link {
    border-bottom: 0px solid transparent !important;
}
.megamenu_icon.icon-cuenta-corriente {
    background-image: url(Asset URL);
    background-size: 23px;
}
.megamenu_icon.icon-plan-dynamic {
    background-image: url(Asset URL);
    background-size: 22px;
}
.megamenu_icon.icon-debito {
    background-image: url(Asset URL);
    background-size: 22px;
}
.megamenu_icon.icon-credito {
    background-image: url(Asset URL);
    background-size: 22px;
}
.megamenu_icon.icon-hipotecario {
    background-image: url(Asset URL);
    background-size: 23px;
}
.megamenu_icon.icon-consumo {
    background-image: url(Asset URL);
    background-size: 21px;
}
.menu_responsive .nav-item {
    padding: 10px !important;
    margin-bottom: 10px !important;
}
#accordion_menu.navbar-nav .nav-link {
    padding: 1rem .5rem !important;
}
```

5. Open the Style Sheet `style`, and add `megamenu_css`:

```css
{% snippet "shared/libs/bootstrap_css" %}
{% snippet "shared/libs/materialdesign_icons_css" %}
{% snippet "shared/libs/file_upload_css" %}
{% snippet "shared/libs/select2_css" %}

{% snippet "shared/libs/modyo_base_css" %}
{% snippet "shared/libs/theme_css" %}
{% snippet "megamenu_css" %}
```

6. Add the images in the [Asset Manager](/en/platform/content/asset-manager.html#assets-selector) and replace the _background-image_ of each class with the `Asset URL`.

<table>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/3eb47aa1-6a61-4f4d-9fd2-904f8a4fcfc4/original/cuenta.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/6b52e454-e56f-43b3-aae1-a99e8818d2d0/original/dynamic.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/a29ed39d-e8c5-4856-883e-9beb8af17de7/original/debito.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/488c67ed-0b59-449d-89d2-baad0b5231c6/original/credito.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/c001808b-09b1-4122-915a-15f47d35ff78/original/hipotecario.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://cloud.modyocdn.com/uploads/30f3799b-ade1-462c-bbd0-597673ecb6dd/original/consumo.svg" style="max-width: 30px;margin: auto 0;"/>
    </td>
  </tr>
</table>

7. Create a new custom Snippet `menu_responsive` and add the menu code that will go in the panel:

```html
{% assign menu = menus['main'] %} 
<div id="accordion_menu" class="navbar-light navbar-nav">
    {% assign items_to_show = menu.items | visible_items %}
    {% for item in items_to_show %}
    {% assign active = item.url | active_page: request.url %}
    {% assign second_level = item.child_items | visible_items %}
    {% if second_level.size > 0 %}
    {% if item.classes == 'megamenu'%}
    <!-- -->
    <div>
        <div id="heading-{{ item.parameterized_label }}">
            <a class="nav-link dropdown-toggle" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}">
                {{ item.label }}
            </a>
        </div>
        <div id="collapse-{{ item.parameterized_label }}" class="collapse p-3" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu">
            {% for child in second_level %}
            <div class="">
                <p class="megamenu-title small font-weight-bold mb-0 text-uppercase">{{ child.label }}</p>
                <ul class="list-unstyled">
                    {% assign third_level = child.child_items | visible_items %}
                    {% if third_level.size > 0 %}
                    {% for child in third_level %}
                    <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                        <div class="megamenu_icon icon-{{child.classes}}">
                        </div>
                        <div>
                            <span>{{ child.label }}</span>
                            <p class="small text-muted mb-0">{{ child.description }}</p>
                        </div>
                    </a>
                    {% endfor %}
                    {% endif %}
                </ul>
            </div>
            {% endfor %}
        </div>
    </div>
    <!-- -->
    {% else%}
    <!-- -->
    <div>
        <div id="heading-{{ item.parameterized_label }}">
            <a class="nav-link dropdown-toggle" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse p-3" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}">
                {{ item.label }} - <!-- -->
                <div>
                    <div id="heading-{{ item.parameterized_label }}">
                        <a class="" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}">
                            {{ item.label }} - 
                        </a>
                    </div>
                    <div id="collapse-{{ item.parameterized_label }}" class="collapse" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu">
                        {% for child in second_level %}
                        <div class="">
                            <p class="megamenu-title small font-weight-bold mb-0 text-uppercase">{{ child.label }}</p>
                            <ul class="list-unstyled">
                                {% assign third_level = child.child_items | visible_items %}
                                {% if third_level.size > 0 %}
                                {% for child in third_level %}
                                <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                                    <span>{{ child.label }}</span>
                                </a>
                                {% endfor %}
                                {% endif %}
                            </ul>
                        </div>
                        {% endfor %}
                    </div>
                </div>
                <!-- -->
            </a>
        </div>
        <div id="collapse-{{ item.parameterized_label }}" class="collapse" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu">
            {% for child in second_level %}
            <div class="">
                <p class="megamenu-title small font-weight-bold mb-0 text-uppercase">{{ child.label }}</p>
                <ul class="list-unstyled">
                    {% assign third_level = child.child_items | visible_items %}
                    {% if third_level.size > 0 %}
                    {% for child in third_level %}
                    <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                        <div>
                            <span>{{ child.label }}</span>
                            <p class="small text-muted mb-0">{{ child.description }}</p>
                        </div>
                    </a>
                    {% endfor %}
                    {% endif %}
                </ul>
            </div>
            {% endfor %}
        </div>
    </div>
    <!-- -->
    {% endif %}
    {% else %}
    <div>
        <div id="heading-{{ item.parameterized_label }}">
            <a target="{{ item.target }}" class="{{item.classes}} nav-link" rel="{{ item.target | item_rel}}" href="{{ item.url }}" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
        </div>
    </div>
    {% endif %}
    {% endfor %}
</div>
```

Modify Snippet code <code>Header</code> where we will add the snippet of <code>menu_responsive</code> that we created previously.

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
        </nav>
        <button
          type="button"
          class="py-2 px-3 bg-transparent border-0 text-dark position-relative d-block d-md-none"
          data-toggle="modal"
          data-target="#menu_panel"
        >
          <h2 id="mainmenulabel" class="sr-only">Open Menu</h2>
          <svg viewBox="0 0 100 60" width="30" height="30" style="fill:#384470">
                        <rect width="100" height="5"></rect>
                        <rect y="30" width="100" height="5"></rect>
                        <rect y="60" width="100" height="5"></rect>
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
            class="modal-body p-4 align-items-start"
          >
            {% snippet "menu_responsive" %}
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
```

## Conclusion

Congratulations! You have completed a new course in the Modyo tutorial series.

In this tutorial we focused on creating a menu from [Navigation](/en/platform/channels/navigation.html) and then deploying the code in [Templates](/en/platform/channels/templates.html).
