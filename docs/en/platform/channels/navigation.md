---
search: true
---

# Navigation

Navigation is the fastest way to put together a list of items to give your users easy access to the key points of your site.

In this section, there is a nested list of elements, that correspond to the elements that will appear on the site when using the tag <span v-pre>`{% menu%}`</span> in [Templates](/en/platform/channels/templates.html).

Navigation only allows three levels of depth, you can have a main list and up to two sub-elements nested in each of the main items. By default, when creating a site, Modyo includes a template and a basic menu that you can modify to your needs.

At the top of the view, you will find the publication status of the menu:

- **Published**: This status means a widget is published and the version in the editor contains no unpublished changes.
- **Pending changes**: You will see this status if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: You will see this status when [team review](/en/platform/core/key-concepts.html) is enabled and the editable version has been submitted for review.
- **Approved**: This status appears when [Computer Review](/en/platform/core/key-concepts.html) is enabled and if the item's review conditions were met. If it is in this state, your templates can now be published.

At the top right, you can find the last publication date and the available actions:

**Preview**: Clicking on this icon opens a new tab with the preview mode of the menu, where you can view all the changes.

:::warning Attention
You can preview the changes as a user without a session or a user with a Modyo session. For this, it is recommended to open or close the Modyo session on the site before entering the preview mode. This is because opening or closing the session within the preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the configuration of custom domains and SSL of the site.
:::

:::warning Attention
The menu you created will only be displayed on a page if you add it through a published template. Otherwise, the menu will not be requested and will not appear on the page.
:::

**Differences**: Click here to access the [differences view](/en/platform/core/key-concepts.html#reversing-a-change), in which you can compare the changes between different versions of your menu.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version.

By default, up to 20 backups are saved so that the twenty most recent backups can be compared, restored, and rolled back.

For more information on versioning, check out the [versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

**Activity/Feedback**: It is only enabled if you have [team review](/en/platform/core/key-concepts.html) enabled. When you click it, a sidebar opens with the activity history and menu comments.

At the bottom of the sidebar, there is a text box where you can type a comment. Next to each activity, you can click _view detail_ to show the full information for that activity log.

## Create a Menu
To create a Menu, follow these steps:

1. From the Modyo Platform main menu, expand Channels and click Sites.
2. Select the site you want to add a new menu.
3. Click **Navigation**.
4. Click on **+ New Menu**.
5. Fill in the name and identifier and click on **Create**.
6. Customize the menu by adding or editing items.
7. Once finished, click **Publish**.

:::tip Tip
Your menu is currently public but it is not being called. You need to use a template to  display the menu on the screen. Modyo offers a general-purpose snippet in **Snippets, General, menu** and is called in the `base` template using <pre v-pre>`{% snippet 'shared/general/menu' %}`</pre>.
:::

**Main Action**

- **Save**: Save all menu changes.
- **Send to review**: Changes the menu status to "In review". In this state you can continue making changes, but each change alerts assigned reviewers via email.
- **Reject**: Returns to the “In Editing” state, notifying reviewers that the item was rejected.
- **Publish**: Once the changes are approved, you can go to the [publish view](/en/platform/channels/sites.html#review-and-joint-publication) to review and publish changes across the site.

On the right side section, you can see a bar that changes according to the item selected in the main area. In this section, you can see the following options:

- **Name**: Name of the item as it appears on the site.
- **Associated Layout Page**: Directly associate a page to this menu item with a custom URL.
- **URL**: If you chose a custom URL in the previous item, you have different options to configure this item:
    - HTTP(s): Points to an address using HTTP(s). Examples:
        - http://www.example.com
        - https://www.example.com
    - Relative and anchor URL: Points to an address relative to this page or to an anchor section. Examples:
        - relative-page
        - /relative-page
        - #anchor
    - Phones: Generates a link with the URI `tel`. Examples:
        - tel: +569-123-45678
        - tel:912345678
    - SMS: Generates a link with the URI `sms`. Examples:
        - sms:+569-123-45678
        - sms:+569-123-45678,9-123-45678
        - sms:+569-123-45678,9-123-45678?body=hello%20there&amp;param1=a%20value
    - Email: Generates a link with the `mailto` URI. Examples:
        - mailto:info@example.com?subject=subject&cc=cc@example.com
- **Open in new tab**: Enable this option to open a the menu item link in a new tab. Adds the `target='blank'` attribute to the menu item's HTML.
- **Private**: Makes the selected item appear visible only when the user has an active session on the site.
- **Segments**: If there are segments created, you can also segment this element so that users can see this menu item only when they have an active session and are also within the selected segments.

## Menu examples

The general snippet `menu` can meet the basic needs of a site by displaying a menu in the form of a dropdown. The most important parts of this snippet and how it can be extended to more functionality are explained below.

The first lines encapsulated by <span v-pre>{{ }} or {% %}</span> belong to Liquid and are used to assign variables or start a loop to display menu information.

The following list describes the important variables for the menu:

- menu: This variable takes the menu with identifier `main` within Modyo Platform -> Navigation.
- items_to_show: Takes the menu items that are visible.
- active: Used to add a CSS class called `active` in case this item is activated.
- children_to_show: If the current item has children, it takes the items in this variable and displays them as the second level in the menu hierarchy.

When you enter the Templates section of your site in Modyo Platform, you can click on the general `menu` snippet to see the HTML of the menu. It looks like this:

`menu`

```html
{% assign menu = menus['main'] %}
<ul class="nav navbar-nav" role="menu" aria-label="Main menu {{responsive}}">
    {% assign items_to_show = menu.items | visible_items %}
    {% for item in items_to_show %}
    {% assign active = item.url | active_page: request.url %}
    {% assign children_to_show = item.child_items | visible_items %}
    {% if children_to_show.size > 0 %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
        <a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="nav-link dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
            {{ item.label }} <span class="sr-only">dropdown</span>
        </a>
        <div class="submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }} dropdown-menu" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{responsive}}" aria-expanded="false">
            {% for child in children_to_show %}
            <a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
                {{ child.label }}
            </a>
            {% endfor %}
        </div>
        {% else %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} {{ active }}" role="none">
        <a target="{{ item.target }}" class="nav-link" rel="{{ item.target | item_rel}}" href="{{ item.url }}" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
        {% endif %}
    </li>
    {% endfor %}
</ul>
```

### List menu

Next we have a menu that also calls `main`, but now in the form of a list, unlike the general snippet that uses a dropdown:

```html
{% assign menu = menus['main'] %}
<ul role="menu" aria-label="Main menu">
    {% assign items_to_show = menu.items | visible_items %}
    {% for item in items_to_show %}
    {% assign children_to_show = item.child_items | visible_items %}
    <li class="nav-item" role="none">
        <a href="{{ item.url }}" target="{{ item.target }}" class="nav-link" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }}">{{ item.label }}</a>
        {% if children_to_show.size > 0 %}
        <ul>
            {% for child in children_to_show %}
            <li class="nav-item" role="none">
                <a href="{{ child.url }}" target="{{ child.target }}" class="nav-link" {% if child.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ child.label }}">{{ child.label }}</a>
                {% assign children_to_show = child.child_items | visible_items %}
                {% if children_to_show.size > 0 %}
                <ul>
                    {% for grandchild in children_to_show %}
                    <li class="nav-item" role="none">
                        <a href="{{ grandchild.url }}" target="{{ grandchild.target }}" class="nav-link" {% if grandchild.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ grandchild.label }}">{{ grandchild.label }}</a>
                    </li>
                    {% endfor %}
                </ul>
                {% endif %}
            </li>
            {% endfor %}
        </ul>
        {% endif %}
    </li>
    {% endfor %}
</ul>
```

### Three-level menu

In order to display a three-level menu, you have to add another loop that considers whether the child items contain more items. For this, the `grandchildren` variable is assigned to the end of the first loop and it has to iterate over the items of the children (i.e. the grandchildren items):

```html
{% assign menu = menus['main'] %}
<ul class="nav navbar-nav" role="menu" aria-label="Main menu {{responsive}}">
    {% assign items_to_show = menu.items | visible_items %}
    {% for item in items_to_show %}
    {% assign active = item.url | active_page: request.url %}
    {% assign children_to_show = item.child_items | visible_items %}
    {% if children_to_show.size > 0 %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
        <a target="{{ item.target }}" class="nav-link dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown-{{forloop.index}}-Button{{ responsive }}" role="menuitem">
            {{ item.label }} <span class="sr-only">dropdown</span>
        </a>
        <div class="submenu-{{forloop.index}} dropdown-menu" aria-labelledby="dropdown-{{forloop.index}}-Button{{responsive}}" aria-expanded="false">
            {% for child in children_to_show %}
            <a href="{{ child.url }}" target="{{ child.target }}" class="dropdown-item" {% if child.url == request.url %}aria-current="page"{% endif %}>{{ child.label }}</a>
            {% assign grandchildren_to_show = child.child_items | visible_items %}
            {% if grandchildren_to_show.size > 0 %}
            <ul class="m-0 p-0">
                {% for grandchild in grandchildren_to_show %}
                <li class="list-unstyled m-0 p-0">
                    <a href="{{ grandchild.url }}" target="{{ grandchild.target }}" class="dropdown-item small" {% if grandchild.url == request.url %}aria-current="page"{% endif %}><span class="pl-2">{{ grandchild.label }}</span></a>
                </li>
                {% endfor%}
            </ul>
            {% endif %}
            {% endfor %}
        </div>
        {% else %}
    <li class="nav-item nav-item-{{ item.parameterized_label }} {{ active }}" role="none">
        <a href="{{ item.url }}" target="{{ item.target }}" class="nav-link" {% if item.url == request.url %}aria-current="page" {% endif %} role="menuitem" aria-label="{{ item.label }} {{responsive}}">{{ item.label }}</a>
        {% endif %}
    </li>
    {% endfor %}
</ul>
```