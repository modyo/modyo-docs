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
- **In review**: This status appears when [Team Review](/en/platform/core/#team-review) is enabled and the editable version has been submitted for review.
- **Approved**: This status appears when [Team Review](/en/platform/core/#team-review) is enabled and if the item's review conditions were met. If it is in this state, your templates can now be published.

In the upper right, you will find the last publication date and the available actions:

The menu editor does not have a preview button. To review the draft version of the menu, open the [preview](/en/platform/core/#preview-modes) of the site or of a page and set the **Navigation** selector to **Draft**.

:::warning Attention
You can preview the changes as a user without a session or a user with a Modyo session. For this, it is recommended to start or close the Modyo session on the site before entering preview mode. This is because starting or closing a session within preview mode can generate security errors such as _x-frame-options_ or _mixed-content_, depending on the configuration of custom domains and SSL of the site.
:::

:::warning Attention
The menu you created will only be displayed on a page if you add it through a published template. Otherwise, the menu will not be requested and will not appear on the page.
:::

**Differences**: Click here to access the [differences view](/en/platform/core/#revert-a-change), where you can compare changes between different versions of your menu.

By default, you start by comparing the published version with the editable version. Use the version selectors to compare with backup versions.

:::tip Tip
Every time you publish a version, the version that was published becomes a backup version.

By default, up to 20 backups are saved so that the twenty most recent backups can be compared, restored, and rolled back.

For more information on versioning, see the [Versioning](/en/platform/core/#versioning) section.
:::

**Show activity**: Clicking this icon opens a sidebar with the activity history and menu comments, whether or not you have [team review](/en/platform/core/#team-review) enabled.

At the end of the sidebar, you will see a text box where you can type a comment. Next to each activity, you can click _view detail_ to show the full information for that activity log.

From the three-dot menu you can also access these actions, depending on your permissions:

- **Archive**: Archives the menu. It is only available if the menu is not published; to archive a published menu, unpublish it first.
- **Clone**: Creates a copy of the menu named "Copy of" followed by the original name and opens it in the editor.
- **Copy liquid markup**: Copies to the clipboard sample Liquid markup that prints the menu as a two-level list, ready to paste into a template.
- **Delete**: Deletes the menu along with its backups. It is only enabled when the menu is archived.

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
Your menu is now public, but it is not being called. You need to use a template to display it on the screen. Modyo offers a general-purpose snippet in **Snippets, General, menu**, which the **header** snippet calls twice (once for the desktop bar and once for the mobile side panel) and which reaches your pages because the `base` template includes <pre v-pre>`{% snippet 'shared/general/header' %}`</pre>.
:::

**Main Action**

- **Save**: Saves all menu changes.
- **Send to review**: Changes the menu status to "Pending review". In this state, you can continue making changes, but each change will be notified via email to the assigned reviewers.
- **Reject**: Returns to the "In editing" state, notifying reviewers that the item was rejected.
- **Publish**: Once the menu has been approved, you can go to the [joint publication](/en/platform/channels/sites#review-and-joint-publication) view to publish your navigation.
- **Unpublish**: Appears among the dropdown options of the main action when the menu is published and you have permission to publish. You can unpublish it right away with **Unpublish now** or schedule it with **Unpublish on**.
- **Restore**: Replaces the main action when the menu is archived and returns the menu to the "In editing" state.

:::warning Attention
If you unpublish a menu, the templates that call it stop finding it, as if its identifier did not exist. See [How to call it](/en/platform/channels/navigation#how-to-call-it).
:::

In the right sidebar, you will see a bar that changes according to the item selected in the main area. In this section, you can see the options:

- **Name**: Name of the element as it appears on the site.
- **Description**: Free text to accompany the item. It is not printed on the site by itself: it is available in Liquid as `menu_item.description` so you can use it in your own markup, for example as a subtitle for the item or as the text of a notification.
- **Classes**: String to be used in a class attribute for an HTML tag, for example `mdi mdi-circle`. Just like the description, it is available in Liquid as `menu_item.classes` and you are the one who prints it in the `class` attribute of your markup. Check both attributes in [Objects](/en/platform/channels/liquid-markup/objects.html#menu).
- **Link**: Destination of the item. You can choose one of the site pages, **URL** to write a custom address, or **Site Search** to point to the site's search page.
- **URL**: If you chose **URL** in the previous item, you have different options to configure this item:
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
	- Global variable: Inserts the value of a [global variable](/en/platform/channels/global-variables). Write `vars.identifier` between double curly braces, just like in a template, on its own or as part of the address. Other Liquid expressions are not supported. The value is resolved when you go through the menu with Liquid, as in the [menu examples](/en/platform/channels/navigation#menu-examples), and in the [Channels API](/en/platform/channels/navigation#consume-a-menu-through-the-api).
- **Open in a new tab**: Only appears when the destination is a **URL**. Adds the `target="_blank"` and `rel="noopener noreferrer"` attributes to the item's link, so that when clicked, it opens in a new tab.
- **Private**: Makes the selected element visible only when there is an active user session on the site.
- **Segments**: If segments are created, you can also segment this element so that users can see this menu item only when they have an active session and are also within the selected segments.

## The menu tag

The <span v-pre>`{% menu %}`</span> tag prints a full menu, dropdowns included, without you having to write the markup. It is the quick path: if you need full control over the HTML, build the menu by hand from `menus`, as shown in the examples below.

### How to call it

The tag takes no parameters: it reads the `menu` variable from the context, so you have to assign it first with the identifier of the menu you want to print.

```liquid
{% assign menu = menus['main'] %}
{% menu %}
```

The variables you assign in a template or in a snippet are available in the snippets called from there, so you can do the `assign` once and reuse it.

:::warning Attention
If you call the tag without having assigned `menu`, or if the identifier does not match any menu on the site, the page prints an `<!-- Liquid Error -->` comment instead of the menu.
:::

### HTML it generates

The tag always emits the same structure, designed for the Bootstrap dropdown system:

```html
<ul class="nav navbar-nav">
	<li class='nav-item nav-item-home active'>
		<a class='nav-link ' href='https://yoursite.com/my-site/home'><span>Home</span></a>
	</li>
	<li class='nav-item nav-item-products dropdown menu-item'>
		<a class='nav-link dropdown-toggle' href='https://yoursite.com/my-site/products'><span>Products</span></a>
		<div class='submenu-1 dropdown-menu'>
			<a class='dropdown-item' href='https://yoursite.com/my-site/products/accounts'><span>Accounts</span> </a>
		</div>
	</li>
</ul>
```

These are the hooks you have to apply your styles:

| Element | Classes |
| ------- | ------- |
| Container list | `nav navbar-nav` |
| Item | `nav-item` and `nav-item-` followed by the parameterized label of the item, for example `nav-item-my-products`. `dropdown menu-item` is added if the item has children, and `active` if the item matches the page being viewed |
| Item link | `nav-link`, plus `dropdown-toggle` if the item has children |
| Children container | `submenu-N dropdown-menu`, where `N` is the position of the parent item among the visible items, starting at 0 |
| Child link | `dropdown-item` |

The label of each item is wrapped in a `<span>`, both on the first and the second level.

:::warning Attention
The tag renders only two levels: the root items and their direct children. Even though navigation lets you nest up to three levels, grandchildren do not appear in the HTML generated by the tag. If you need the third level, build the menu by hand, the way the general `menu` snippet does.
:::

### Links it generates

- If the item has the **Open in a new tab** option checked, the link is emitted with `target="_blank"` and `rel="noopener noreferrer"`.
- URLs starting with `http://`, `https://`, `tel:`, `mailto:` or `sms:` are emitted as they are.
- Any other URL is rewritten as absolute over the site's base URL. An item with the URL `/contact` is emitted as `https://yoursite.com/my-site/contact`, and an anchor such as `#section` is emitted as `https://yoursite.com/my-site/#section`, that is, pointing to the site's home page and not to the page the visitor is on.

### Items that are displayed

- Items marked as **Private** are not printed for visitors without a session.
- If they also have segments associated, they are only printed for users whose session belongs to one of those segments.
- Both rules apply equally to root items and to their children: if a parent item is hidden, its dropdown is not printed either.

The resulting menu is reused as long as the page, the user and the menu version do not change, so the changes you publish in navigation are visible on the next visit.

## Menu Examples

The general `menu` snippet can satisfy the basic needs of a site, displaying a menu in the form of a dropdown. Below, the most important parts of this snippet and how it can be extended to more functionalities are explained.

The first lines encapsulated by <span v-pre>{{ }} or {% %}</span> belong to Liquid and are used to assign variables or start a loop to display menu information.

Unlike the examples further below, this snippet does not assign the `menu` variable: it inherits it from the **header** snippet, which declares it on its first line with <span v-pre>`{% assign menu = menus['main'] %}`</span> and calls it twice from there. If you copy this markup into another template, remember to assign `menu` before using it.

The following list describes the important variables for the menu:

- menu: Menu that is going to be printed. It is inherited from the snippet that calls `menu`; if you build your own from scratch, assign it with <span v-pre>`{% assign menu = menus['main'] %}`</span>.
- items_to_show: Takes the visible menu items.
- active: Used to add a CSS class called `active` if this item is activated.
- children_to_show: If the current item has children, it takes the items in this variable and displays them as the second level in the menu hierarchy.
- grandchildren_to_show: If the child item has children, it takes the items in this variable and displays them as the third level inside the same dropdown.

When you enter the Templates section of your site in Modyo Platform, you can click on the general `menu` snippet to see the HTML of the menu. It looks like this:

`menu`

```html
<ul class="nav navbar-nav justify-content-end flex-grow-1" role="menu" aria-label="Main menu {{responsive}}">
	{% assign items_to_show = menu.items | visible_items %}
	{% for item in items_to_show %}
	{% assign active = item.url | active_page: request.url %}
	{% assign children_to_show = item.child_items | visible_items %}
	<li class="nav-item nav-item-{{ item.parameterized_label }} dropdown menu-item {{ active }}" role="none">
		{% if children_to_show.size > 0 %}
		<button type="button" class="nav-link {{ active }} dropdown-toggle {% for child in children_to_show %}{% if child.url == request.url %}active{% endif %}{% endfor %}" data-bs-toggle="dropdown" aria-expanded="false" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }} <span class="visually-hidden">dropdown</span>
		</button>
		{% else %}
		<a target="{{ item.target }}" rel="{{ item.target | item_rel}}" class="nav-link {{ active }}" href="{{ item.url }}" id="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{ responsive }}" role="menuitem">
			{{ item.label }}
		</a>
		{% endif %}
		{% if children_to_show.size > 0 %}
		<div class="dropdown-menu submenu-{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}" aria-labelledby="dropdown{{ item.label | replace: ' ','' | replace: 'ñ','n' | capitalize }}Button{{responsive}}">
			{% for child in children_to_show %}
			<a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
				{{ child.label }}
			</a>
			{% assign grandchildren_to_show = child.child_items | visible_items %}
			{% if grandchildren_to_show.size > 0 %}
			{% for child in grandchildren_to_show %}
			<a target="{{ child.target }}" rel="{{ child.target | item_rel}}" class="dropdown-item small ms-2" href="{{ child.url }}" {% if child.url == request.url %}aria-current="page"{% endif %}>
				{{ child.label }}
			</a>
			{% endfor %}
			{% endif %}
			{% endfor %}
		</div>
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

The general snippet already displays the third level as indented links inside the same dropdown. If you prefer to group them in a nested list, add another loop that considers whether the child items contain more items: the `grandchildren_to_show` variable is assigned at the end of the second loop, and it iterates over the grandchild items:

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

## Consume a menu through the API

Besides printing it with Liquid, you can get the published version of a menu in JSON format with the Channels API, for example, to build the navigation from an application that does not use the site templates:

```http
GET https://[account_host]/api/channels/sites/[site_host]/menus/[menu_slug]
```

Where `site_host` is the site [Host](/en/platform/channels/sites#domains) and `menu_slug` is the menu identifier.

The response includes the name (`name`), the identifier (`slug`) and the root items (`items`) of the menu, sorted by position. Each item includes `label`, `url`, `parameterized_label`, `target` (`_self` or `_blank`), `description`, `classes` (these two are `null` when empty), `position` and its children in `children`.

- It only responds for production sites and published menus. Otherwise, it responds with a 404 error.
- If the site is private, a call without a session on the site responds with a 401 error.
- **Private** and segmented items follow the same rules as in the [menu tag](/en/platform/channels/navigation#items-that-are-displayed), based on the session the user has started on the account domain. The API does not use access tokens, so a call without that session, for example from a server, only receives the items that are not private.
- If an item URL includes global variables, they come resolved.
- URLs starting with `http://`, `https://`, `tel:`, `mailto:` or `sms:` are returned as they are. Anchors (`#section`) and URLs starting with `?` are also returned as they are, so they point to the page the visitor is on, unlike in the menu tag. The rest are returned as absolute over the site's base URL.
- You can call it from the browser on the site's custom domain or on the origins allowed by the account [CORS](/en/platform/core/security#http-access-control-cross-origin-resource-sharing-cors) configuration. The API responds on the account domain (`account_host`) and only takes the user's session into account when the call carries the session cookie for that domain, for example, from a site page served on the account domain. A session started on the site's custom domain does not apply to the API, and the call receives the same response as one without a session.
- Responses to calls without a session are public and can be cached, and that cache is renewed when you publish or unpublish the menu. Those that carry a user session are marked as private, so that neither the browser nor intermediate caches store them.

The details of the response and the errors are in the OpenAPI documentation of this API, at `https://[account_host]/api/channels/docs`. See [General Information](/en/platform/core/api#general-information).

