---
search: true
---

# Creating a mega menu

## Introduction

Welcome to a new tutorial from the Modyo training series. In this tutorial we're going to focus on [Modyo Channels] (/en/platform/channels) using the [Navigation] modules (/es/platform/channels/navigation.html) and [Templates] (/es/platform/channels/templates.html) to create a mega menu on our site.

Navigation is a tool that helps us develop in a simple way and can then be managed in a better way. 

In this tutorial we will continue to use the Dynamic Bank site.

<img src="/assets/img/tutorials/how-to-create-a-menu/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

 <a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=905%3A0&node-id=905%3A1&viewport=401%2C2127%2C0.9736564755439758&scaling=min-zoom" target="blank"> See Figma of design </a> 

## Prerequisite

To start this tutorial we must have completed the tutorial on [Creation Home Dynamic Bank] (/en/platform/tutorials/how-to-create-home) and optionally [Dynamic Bank Content] (/en/platform/tutorials/how-to-create-content) to view the full Home with its contents. And just like in the previous tutorials you should have knowledge about HTML, CSS, JS and the Modyo platform.

## Step 1: Complete the Menu

In the previous Tutorials we created the Dynamic Bank site, now we will generate a more complex menu, for this we will go to our site, enter the 
[Navigation] (/es/platform/channels/navigation.html) enter the menu <code> Main </code> and fill in with the following fields:

 <table> 
 <tr> 
 <th style="text-align: left"> Name </th> 
 <th style="text-align: left"> Description </th> 
 <th style="text-align: left"> Classes </th> 
 <th style="text-align: left"> Link </th> 
 <th style="text-align: left"> URL </th> 
 <th style="text-align: left"> Parent </th> 
 </tr> 
 <tr> 
 <td> 
 Home
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Home Layout
 </td> 
 <td> </td> 
 <td> </td> 
 </tr> 
 <tr> 
 <td> 
 Products
 </td> 
 <td> </td> 
 <td> megamenu </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> </td> 
 </tr> 
 <tr> 
 <td> 
 Arrangement
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Products </td> 
 </tr> 
 <tr> 
 <td> 
 Current Account 
 </td> 
 <td> Anywhere you want with Dynamic </td> 
 <td> current account </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Plans </td> 
 </tr> 
 <tr> 
 <td> 
 Dynamic Plan
 </td> 
 <td> We adapt to your needs </td> 
 <td> plan-dynamic </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Plans </td> 
 </tr> 
 <tr> 
 <td> 
 Cards
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Products </td> 
 </tr> 
 <tr> 
 <td> 
 Credit Cards
 </td> 
 <td> Enjoy all our benefits </td> 
 <td> credit </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> </td> cards 
 </tr> 
 <tr> 
 <td> 
 Debit cards
 </td> 
 <td> Make purchases in stores </td> 
 <td> debit </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> </td> cards 
 </tr> 
 <tr> 
 <td> 
 Credits
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Products </td> 
 </tr> 
 <tr> 
 <td> 
 Mortgage Credit
 </td> 
 <td> The home you always dreamed of </td> 
 <td> mortgage </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Credits </td> 
 </tr> 
 <tr> 
 <td> 
 Consumer Credit
 </td> 
 <td> Your projects are ours </td> 
 <td> consumption </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> Credits </td> 
 </tr> 
 <tr> 
 <td> 
 Benefits
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> </td> 
 </tr> 
 <tr> 
 <td> 
 Branches
 </td> 
 <td> </td> 
 <td> </td> 
 <td> 
 Custom URL
 </td> 
 <td> 
 #
 </td> 
 <td> </td> 
 </tr> 
 </table> 

Which will give us a look like this:

<img src="/assets/img/tutorials/how-to-create-a-menu/menu.png" style="max-width: 700px;margin: auto 0;"/>

After we have our navigation ready we save and publish.

## Step 2: Create View in Templates

To make the change in the HTML menu we will go to the Template and on the Snippets tab we open the file <code> menu </code>.

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
        <a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="{{item.classes}} nav-link dropdown-toggle {% for child in second_level %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }}Button{{ responsive }}" role="menuitem">
            {{ item.label }} <span class="sr-only">dropdown</span>
        </a>
        <div class="{{item.classes}} submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }} dropdown-menu" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | downcase }}Button{{responsive}}" aria-expanded="false">
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

Create Snippet <code> megamenu_css </code> and add the following code and add the snippet in the Base Stylesheet of the Site.

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

Add the images in the [Asset Manager] (/es/platform/content/asset-manager.html #selector -de-assets) and replace the background-image of each class with the <code> Asset URL </code>.

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

Create snippet <code> menu_responsive </code> where we will paste the code from the menu that will go into the panel.

```html
{% assign menu = menus ['main']%} 
 <div id="accordion_menu" class="navbar-light navbar-nav"> 
 {% assign items_to_show = menu.items | visible_items%}
 {% for item in items_to_show%}
 {% assign active = item.url | active_page: request.url%}
 {% assign second_level = item.child_items | visible_items%}
 {% if second_level.size > 0%}
 {% if item.classes == 'megamenu'%}
 <!-- --> 
 <div> 
 <div id="heading-{{ item.parameterized_label }}"> 
 <a class="nav-link dropdown-toggle" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}"> 
 {{item.label}}
 </a> 
 </div> 
 <div id="collapse-{{ item.parameterized_label }}" class="collapse p-3" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu"> 
 {% for child in second_level%}
 <div class=""> 
 <p class="megamenu-title small font-weight-bold mb-0 text-uppercase"> {{child.label}} </p> 
 <ul class="list-unstyled"> 
 {% assign third_level = child.child_items | visible_items%}
 {% if third_level.size > 0%}
 {% for child in third_level%}
 <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}> 
 <div class="megamenu_icon icon-{{child.classes}}"> 
 </div> 
 <div> 
 <span> {{child.label}} </span> 
 <p class="small text-muted mb-0"> {{child.description}} </p> 
 </div> 
 </a> 
 {% endfor%}
 {% endif%}
 </ul> 
 </div> 
 {% endfor%}
 </div> 
 </div> 
 <!-- --> 
 {% else%}
 <!-- --> 
 <div> 
 <div id="heading-{{ item.parameterized_label }}"> 
 <a class="nav-link dropdown-toggle" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse p-3" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}"> 
 {{item.label}} - <!-- --> 
 <div> 
 <div id="heading-{{ item.parameterized_label }}"> 
 <a class="" href="#collapse-{{ item.parameterized_label }}" data-toggle="collapse" data-target="#collapse-{{ item.parameterized_label }}" aria-expanded="false" aria-controls="collapse-{{ item.parameterized_label }}"> 
 {{item.label}} - 
 </a> 
 </div> 
 <div id="collapse-{{ item.parameterized_label }}" class="collapse" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu"> 
 {% for child in second_level%}
 <div class=""> 
 <p class="megamenu-title small font-weight-bold mb-0 text-uppercase"> {{child.label}} </p> 
 <ul class="list-unstyled"> 
 {% assign third_level = child.child_items | visible_items%}
 {% if third_level.size > 0%}
 {% for child in third_level%}
 <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}> 
 <span> {{child.label}} </span> 
 </a> 
 {% endfor%}
 {% endif%}
 </ul> 
 </div> 
 {% endfor%}
 </div> 
 </div> 
 <!-- --> 
 </a> 
 </div> 
 <div id="collapse-{{ item.parameterized_label }}" class="collapse" aria-labelledby="heading-{{ item.parameterized_label }}" data-parent="#accordion_menu"> 
 {% for child in second_level%}
 <div class=""> 
 <p class="megamenu-title small font-weight-bold mb-0 text-uppercase"> {{child.label}} </p> 
 <ul class="list-unstyled"> 
 {% assign third_level = child.child_items | visible_items%}
 {% if third_level.size > 0%}
 {% for child in third_level%}
 <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="{{child.classes}} megamenu-item d-flex" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}> 
 <div> 
 <span> {{child.label}} </span> 
 <p class="small text-muted mb-0"> {{child.description}} </p> 
 </div> 
 </a> 
 {% endfor%}
 {% endif%}
 </ul> 
 </div> 
 {% endfor%}
 </div> 
 </div> 
 <!-- --> 
 {% endif%}
 {% else%}
 <div> 
 <div id="heading-{{ item.parameterized_label }}"> 
 <a target="{{ item.target }}" class="{{item.classes}} nav-link" rel="{{ item.target | item_rel}}" href="{{ item.url }}" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}"> {{item.label}} </a> 
 </div> 
 </div> 
 {% endif%}
 {% endfor%}
 </div> 
```

Modify code from the Snippet <code> Header </code> where we will add the snippet of <code> menu_responsive </code> we created a while ago.

```html
 <header role="banner" id="header"> 
 <div
 class="navbar navbar-expand-md navbar-light py-4"
 role="navigation”
 aria-label="NavBar”
 >
 <div
 class="navbar-inner container d-flex justify-content-between align-items-center text-right”
 >
 <div class="d-flex flex-column"> 
 <a
 class="navbar-brand”
 href= "{{site.url}}”
 title="Logo {{site.name}}”
 rel="home”
 >
 <img
 src= "{{site.logo | asset_url | replace: 'R360x50', 'original'}}”
 alt="Logo {{site.name}}”
 />
 </a> 
 <a class="sr-only sr-only-focusable btn btn-dark p-2" href=” #content”
 > Skip to main content</a
 >
 </div> 
 <div
 class="d-flex justify-content-end align-items-center”
 id="navbar-menu”
 >
 <nav class="d-none d-md-flex align-items-center"> 
 <h2 class="sr-only"> Main Menu </h2> 
 {% snippet 'shared/general/menu'%}
 </nav> 
 <button
 type="button”
 class="py-2 px-3 bg-transparent border-0 text-dark position-relative d-block d-md-none”
 data-toggle="modal”
 data-target=” #menu_panel”
 >
 <h2 id="mainmenulabel" class="sr-only"> Open Menu </h2> 
 <svg
 width="2em”
 height="2em”
 viewbox="0 0 16 16"
 class="bi bi-list”
 fill="CurrentColor”
 xmlns=” http://www.w3.org/2000/svg”
 >
 <path
 fill-rule="evenodd”
 d="m2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 1h3a.5.5 0 0 1-.5- 5Zm0-4a.5.5 0 0 1 3 7h10a.5.5 0 1 0 1h3a.5.5 0 1-.5-.5Zm0-4a.5.5 0 0 1 3 3h10a.5.5 0 0 1 1h3a.5.5 0 0 1-.5-.5.5 0 0 1-.5-.5-.5.5 0 0 1-.5-.5 5z”
 />
 </svg> 
 </button> 
 </div> 
 </div> 
 <!-- Menu Panel --> 
 <div
 class="modal right fade”
 id="menu_panel”
 tabindex=” -1"
 aria-labelledby="NotificationsLabel”
 aria-modal="true”
 >
 <div class="modal-dialog"> 
 <div class="modal-content"> 
 <div class="modal-header bg-white"> 
 <button
 type="button”
 class="close”
 data-dismiss="modal”
 aria-label="Close”
 >
 <span aria-hidden="true"> ✕ </span> 
 </button> 
 </div> 
 <div
 class="modal-body p-4 align-items-start”
 >
 {% snippet “menu_responsive”%}
 </div> 
 </div> 
 </div> 
 </div> 
 </div> 
 </header> 
```

## Conclusion

Congratulations! Complete a new course in the Modyo tutorial series.

In this tutorial we focus on creating a menu from [Navigation] (/es/platform/channels/navigation.html) and then deploying the code in [Templates] (/es/platform/channels/templates.html).
