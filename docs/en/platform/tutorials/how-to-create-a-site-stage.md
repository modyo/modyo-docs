---
search: true
title: Creating a Site Stage
meta:
  - name: description
    content: Welcome to a new tutorial in the Modyo training series. In this tutorial, you'll follow continuous integration and continuous deployment (CI/CD) best practices by creating a site stage to work on your site without touching the main branch. 
---

# {{ $frontmatter.title }}

{{ $frontmatter.meta[0].content }}

## Introduction

Site stages allows you to create branches on your sites, allowing your developers to work on a site without affecting what is published in the main branch. One reason to create stages is to isolate the development of each task. Each stage has its own state cycle (Draft, Pending Changes, Published). This presents an alternative to having all the development in the main branch, with stages you can test different widgets and templates without interfering with the main branch.

In this tutorial we will continue to use the fictitious “Dynamic Bank” brand, but now we will focus on expanding the navigation menu with two new products. When you finish working on the new stage, you will synchronize your changes to the main branch.

## Prerequisites

Completed the tutorials:

- [Creating and Publishing Content](/en/platform/tutorials/how-to-create-content)
- [Creating a Basic Site](/en/platform/tutorials/how-to-create-home)

Be familiar with:

- HTML
- CSS
- JS
- Modyo's platform

## Step 1: Create a new stage

1. In Modyo Platform inside the side menu, expand **Channels** and click **Sites**.
1. Click on the Site **Bank** and under **Site Settings**, select **Stages**.
1. Click the **+ New Stage** button.
1. On the following screen, select the values:
 - Source stage: **main**
 - Name: **new-feature**

<img src="/assets/img/tutorials/how-to-create-a-site-stage/new-stage.png" style="width: 400px;" alt="Create a new Stage modal.">

5. Click **Create**.

When you create stages, the interface changes to show what stage you are working on.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/stage-UI.png" style="width: 400px;" alt="Create a new Stage modal.">

## Step 2: Create new items in Navigation

Since you are in a stage, all the changes you make will remain only in this stage until they are integrated with another stage. The next step is to add the items in Navigation, to create them follow these steps:

1. From the side menu, select **Navigation**.
1. Click on the **main** menu.
1. Add within **Products** a sublevel called **Credit Card**.
1. Add two items inside **Credit Card** called: **Platinum** and **Gold**.

When finished, your menu should look like this:

<img src="/assets/img/tutorials/how-to-create-a-site-stage/navegacion.png" style="width: 600px;" alt="After adding the two products, this is how the navigation should look like.">

> When you preview the site, notice that the current menu only displays up to 2 levels, so it is not possible to see the Gold and Platinum levels.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/menu2lvl.png" style="width: 400px;" alt="Our current menu snippet only supports lists of 2 levels maximum.">

## Step 3: Generate a New 3-Level Menu Template

To correctly display the page, you must create a new template that iterates through the 3 levels of depth of the menu items. To create the template, follow these steps:

1. From the side menu, select **Templates**.
1. Click **Snippets** and in the **Custom** section, click **+**.
1. Type `menu3lvl` as the Path.
1. Paste the following code:  

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
            {% assign children_to_show = child.child_items | visible_items %}
            {% if children_to_show.size > 0 %}
            <ul class="m-0 p-0">
                {% for grandchild in children_to_show %}
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
> This code goes through the “children” and “grandchildren” items in the menu using Liquid. 

5. Click Save. 
6. In the General section of Snippets, open `header`.
7. Replace line 17 so that it now imports the new snippet:
`{% snippet "menu3lvl" %}`
8. Click Save. 
9. Click preview mode and check the boxes to show the content in draft state. The menu should now display all 3 levels correctly.

<img src="/assets/img/tutorials/how-to-create-a-site-stage/menu3lvl.png" style="width: 400px;" alt="Our new menu snippet now supports lists of 3 levels.">

## Step 4: Synchronize Changes to the Main Branch

To synchronize your changes to the main branch, follow these steps:

1. In the side menu, click **Summary**.
1. Click **Publish**.
1. Select all the files to be published and click **Publish**.
1. From the side menu, expand the `new-feature` branch and click the `main` branch.
1. In the **Summary** screen, click **Synchronize**.
1. Select the `new-feature` branch to pull the changes to this branch. 
1. Select all the files you want to synchronize.
1. Click **Synchronize**.

## Conclusion

Congratulations! You have completed the Modyo site stage course.

In this tutorial, you worked using continuous integration and deployment (CI/CD) using site stages. This tool allows you to collaborate in new ways with your team without interrupting the flow of the main branch. In this module you combined the following elements from [Modyo Channels](/en/platform/channels/):

* [Navigation](/en/platform/channels/navigation.html)
* [Templates](/en/platform/channels/templates.html)
* [Site Stages](/en/platform/channels/sites.html#stages)

