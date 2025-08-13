---
search: true
---

# Navigation

Navigation allows you to organize and present a list of elements to facilitate user access to key points of your site.

This section describes a nested list of elements that will appear on the site when using the <span v-pre>`{% menu %}`</span> tag in [Templates](/en/platform/channels/templates).

Navigation only allows three levels of depth: a main list and up to two nested sub-elements in each of the main items. By default, when creating a site, Modyo includes a template and a basic menu that you can modify according to your needs.

At the top of the view, you will find the publication status of the menu:

- **Published**: This status appears after a publication and when the editable and published versions are the same.
- **Pending changes**: This status appears if there is already a published version, but there are pending changes to be published in your editable version.
- **In review**: This status appears when [Team Review](/en/platform/core/key-concepts) is enabled and the editable version has been submitted for review.
- **Approved**: This status appears when [Team Review](/en/platform/core/key-concepts) is enabled and if the item's review conditions were met. If it is in this state, your templates can now be published.

In the upper right, you will find the last publication date and the available actions:

**Preview**: Clicking on this icon opens a new tab with the menu's preview mode, where you can view all changes.

:::warning Attention
You can preview the changes as a user without a session or a user with a Modyo session. For this, it is recommended to start or close the Modyo session on the site before entering preview mode. This is because starting or closing a session within preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the configuration of custom domains and SSL of the site.
:::

:::warning Attention
The menu you created will only be displayed on a page if you add it through a published template. Otherwise, the menu will not be requested and will not appear on the page.
:::

**Differences**: Click here to access the [differences view](/en/platform/core/key-concepts#revert-a-change), where you can compare changes between different versions of your menu.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version.

By default, up to 20 backups are saved so that the twenty most recent backups can be compared, restored, and rolled back.

For more information on versioning, see the [Versioning](/en/platform/core/key-concepts#versioning) section.
:::

**Activity/Comments**: Only enabled if you have [team review](/en/platform/core/key-concepts) enabled. Clicking it opens a sidebar with the activity history and menu comments.

At the end of the sidebar, you will see a text box where you can type a comment. Next to each activity, you can click _view detail_ to show the full information for that activity log.

## Create a Menu
To create a Menu, follow these steps:

1. From the Modyo Platform main menu, expand Channels and click Sites.
2. Select the site you want to add a new menu.
3. Click **Navigation**.
4. Click on **New Menu**.
5. Enter the name and identifier and click on **Create**.
6. Customize the menu by adding or editing items.
7. Once finished, click **Publish**.

:::tip Tip
Your menu is now public, but it is not being called. You need to use a template to display it on the screen. Modyo offers a general-purpose snippet in **Snippets, General, menu** and is called in the `base` template using <pre v-pre>`{% snippet 'shared/general/menu' %}`</pre>.
:::

**Main Action**

- **Save**: Saves all menu changes.
- **Send to review**: Changes the menu status to "Pending review". In this state, you can continue making changes, but each change will be notified via email to the assigned reviewers.
- **Reject**: Returns to the "In editing" state, notifying reviewers that the item was rejected.
- **Publish**: Once the menu has been approved, you can go to the [joint publication](/en/platform/channels/sites#review-and-joint-publication) view to publish your navigation.

In the right sidebar, you will see a bar that changes according to the item selected in the main area. In this section, you can see the options:

- **Name**: Name of the element as it appears on the site.
- **Associated Page**: Can be directly associated with a page or a custom URL.
- **URL**: If you chose a custom URL in the previous item, you have different options to configure this item:
	- HTTP(s): Points to an address using HTTP(s). Examples:
		- http://www.example.com
		- https://www.example.com
	- Relative and anchor URL: Points to an address relative to this page or an anchor section. Examples:
		- relative-page
		- /relative-page
		- #anchor
	- Phones: Generates a link with the `tel` URI. Examples:
		- tel:+569-123-45678
		- tel:912345678
	- SMS: Generates a link with the `sms` URI. Examples:
		- sms:+569-123-45678
		- sms:+569-123-45678,9-123-45678
		- sms:+569-123-45678,9-123-45678?body=hello%20there&param1=a%20value
	- Email: Generates a link with the `mailto` URI. Examples:
		- mailto:info@example.com?subject=subject&cc=cc@example.com
- **Open in new tab**: Adds the `target='blank'` attribute to the menu item's HTML element, so that when clicked, it opens in a new tab.
- **Private**: Makes the selected element visible only when there is an active user session on the site.
- **Segments**: If segments are created, you can also segment this element so that users can see this menu item only when they have an active session and are also within the selected segments.

## Menu Examples

The general `menu` snippet can satisfy the basic needs of a site, displaying a menu in the form of a dropdown. Below, the most important parts of this snippet and how it can be extended to more functionalities are explained.

The first lines encapsulated by <span v-pre>{{ }} or {% %}</span> belong to Liquid and are used to assign variables or start a loop to display menu information.

The following list describes the important variables for the menu:

- menu: This variable takes the menu with identifier `main` within Modyo Platform -> Navigation.
- items_to_show: Takes the visible menu items.
- active: Used to add a CSS class called `active` if this item is activated.
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
		<a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="nav-link dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url  %}active{% endif %}{% endfor %}" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropdown{{ item.label | replace: ' ',''	| replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }} <span class="sr-only">dropdown</span>
		</a>
		<div class="submenu-{{ item.label | replace: ' ',''	| replace: 'ñ','n' | capitalize }} dropdown-menu" aria-labelledby="dropdown{{ item.label | replace: ' ',''	| replace: 'ñ','n' | capitalize }}Button{{responsive}}" aria-expanded="false">
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

Next, we have a menu that also calls `main`, but now in list form, unlike the general snippet that uses a dropdown:

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

To display a three-level menu, you need to add another loop that considers whether the child items contain more items. For this, the `grandchildren` variable is assigned at the end of the first loop, and it must iterate over the children's items (i.e., the grandchild items):

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
