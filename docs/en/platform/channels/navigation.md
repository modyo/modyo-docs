---
search: true
---

# Navigation

Navigation is the fastest way to put together a list of items to give your users easy access to the key points of your site.

<img src="/assets/img/platform/navigation-builder.png" alt="Navigation module screen">

In this section you find a nested list of elements, which correspond to the elements that will appear on the site when using the tag <span v-pre>`{% menu%}`</span> in [Templates](/en/platform/channels/templates.html).

Navigation only allows three levels of depth, so you can have a main list and up to two sub-elements nested in each of the main items. By default when creating a site, Modyo includes a template and a basic menu that you can modify to your needs.

At the top of the view, you will find the publication status of the menu:

- **Published:** This status appears after you have made a publication and when the editable and published versions are the same.
- **Pending changes:** This status appears if there is already a published version, but there are changes pending publication in your editable version.
- **In Review:** This status appears when [Team Review] (/en/platform/core/key-concepts.html) is enabled and the editable version has been submitted for review.
- **Approved:** This status appears when [Team Review] (/en/platform/core/key-concepts.html) is enabled and if the item's review conditions have been met. When it is in this state, a template can now be published.

On the right side of the upper bar, you will find the latest publication date and the available actions:

**Preview:** Clicking on this icon opens a new tab with the preview mode of the menu, where you can view all the changes.

:::warning Attention
You can preview the changes as a user without a session or a user with a Modyo session. For this, it is recommended to open or close the Modyo session on the site before entering the preview mode. This is because opening or closing the session within the preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the configuration of custom domains and SSL of the site.
:::

:::warning Attention
The menu you created will only be displayed on a page if you add it through a published template. Otherwise, the menu will not be requested and will not appear on the page.
:::

**Differences:** Click here to access the [differences view] (/en/platform/core/key-concepts.html#reversing-a-change), in which you can compare the changes between different versions of your menu.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version.

By default, up to twenty backups are saved so that the twenty most recent backups can be compared, restored, and rolled back.

For more information on versioning, check out the [versioning](/en/platform/core/key-concepts.html#versioning) section.
:::

**Activity/Feedback:** It is only enabled if you have [team review] (/en/platform/core/key-concepts.html) enabled. When you click it, a sidebar opens with the history of activity and menu comments.

At the bottom of the sidebar, there is a text box where you can type a comment. Next to each activity, you can click _view detail_ to show the full information for that activity log.

## Create a Menu
To create a Menu, follow these steps:

1. From the Modyo Platform main menu, expand Channels and click Sites.
2. Select the site you want to add a new menu.
3. Click **Navigation**.
4. Click on **+ New Menu**.
5. Fill in the name and identifier and click on **Create**.
6. Customize the menu by adding or editing items.
7. Once finished, click on **Publish**.

:::tip Tip
Your menu is currently public but it is not being called. You need to use a template to  display the menu on the screen. Modyo offers a general-purpose snippet in **Snippets, General, menu** and is called in the `base` template using <pre v-pre>`{% snippet 'shared/general/menu' %}`</pre>.
:::

For more information on how to create and publish a custom menu, see [Creating a Mega Menu](/en/platform/tutorials/how-to-create-a-menu.html).

**Main Actions**

- **Save:** Save all menu changes.
- **Submit for review:** Change the menu status to “Awaiting review”. In this state, you are still making changes, but each change will be notified via email to the assigned reviewers.
- **Reject:** Returns to the “In Editing” status, notifying reviewers that the item was rejected.
- **Publish:** Once the menu has been approved, you can go to the [joint publication] view (/en/platform/core/key-concepts.html#joint-review-and-publication) to publish your navigation.

In the right side section, you will see a bar that changes according to the item selected in the main area. In this section are the following options:

- **Name:** Name of the item that will appear on the site.
- **Associated page:** Can be directly associated with a page or a custom URL.
- **URL:** If you chose a custom URL in the previous element, you have different options for configuring this item:
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
        - mailto:info@example.com?subject=subject&amp;cc=cc@example.com
- **Open in a new tab:** Adds the attribute `target='blank'` to the HTML element of the menu item, so that when you click it, it opens in a new tab.
- **Private:** Makes the selected item visible only when there is an active user session on the site.
- **Segments:** If there are segments created, you can also segment this item so that users can see this menu item only when they have an active session and that they are also within the selected segments.

## Menu examples

The general snippet `menu` can meet the basic needs of a site by displaying a menu in the form of a dropdown. The most important parts of this snippet and how it can be extended to more functionality are explained below.

The first lines encapsulated by <span v-pre>{{ }} or {% %}</span> belong to Liquid and are used to assign variables or start a loop to display menu information.

The following list describes the important variables for the menu:

- menu: This variable takes the menu with identifier `main` within Modyo Platform -> Navigation.
- items_to_show: Take the menu items that are visible.
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

Next we have a menu that also calls `main`, but now in the form of a list unlike the general snippet that uses a dropdown:

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