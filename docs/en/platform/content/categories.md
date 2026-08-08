---
search: true
---

# Categories

Categories allow you to organize the content you publish by applying a structure based on the type of content they contain, so it is useful if we need to make directories of specific areas of knowledge.

Every category belongs to a space and is described by two values: the **Title**, which is the name you see in the admin, and the **Identifier**, which is the segment the category contributes to the URL of the entries it groups. Categories nest inside one another: the chain of identifiers that goes from the root category down to the current one forms its full path, and the list shows it under each name, preceded by the word **Identifier**.

## Create a category

1. From the main menu, click **Content**.
2. Select the space where you want to create the category.
3. In the side menu, click **Categories**.
4. Click the **New Category** button.
5. Type the **Title**.
6. Check the **Identifier**, which is filled in automatically from the title.
7. In **Parent category**, choose the category it hangs from. Leave it as **None** to create a root category.
8. Click **Save**.

To edit a category, click its name in the list: the same form opens, this time titled **Edit category**.

:::warning Attention
The **Identifier** is generated again every time you modify the **Title**, including when you edit a category that already exists. If you only want to rename it, check the **Identifier** and leave it as it was before saving, because changing it changes the URLs.
:::

## Identifier rules

The **Identifier** only accepts unaccented letters, numbers, hyphens (`-`) and underscores (`_`). The admin normalizes what you type: it lowercases the text, replaces spaces with hyphens and drops the characters it cannot use.

It also has to meet two conditions:

- **Unique among siblings**: two categories that share the same **Parent category** within the same space cannot have the same identifier. Two categories with different parents can use the same one, because what stays unique is the full path.
- **Full path of 255 characters at most**: if the string that results from chaining the identifiers from the root category exceeds that length, the category is not saved.

## Nest categories

There is no cap on subcategory levels. The real limit is the 255-character full path, and long identifiers exhaust it sooner than many levels of depth.

A category cannot hang from itself or from one of its descendants, so the **Parent category** selector does not offer the category you are editing or any of the branches that depend on it.

When you change the **Identifier** of a category that has subcategories, the platform recalculates the full path of all its descendants. If that recalculation would push any descendant over 255 characters, nothing is saved and the hierarchy stays as it was.

:::warning Attention
Changing a category identifier changes the URL of every entry that hangs from it and from its subcategories. Links pointing to the previous path become outdated, and the new URLs can take a few moments to become available while the platform updates the affected entries. Review your internal links before making the change.
:::

## Effect on entries

An entry belongs to a single category. When you assign it, the full path of the category is prepended to the entry identifier: an entry that responds at `my_account.modyo.com/visita-chile` and that you assign to the `travel` category now responds at `my_account.modyo.com/travel/visita-chile`.

When you filter the entries list with the **Category** filter, the result also includes the entries of the subcategories of the one you chose, so filtering by a root category returns its whole branch. The public content API applies the same criterion with the `meta.category` parameter; see [Filter](/en/platform/content/public-api-reference.html#filter) in the public API reference.

## Delete a category

1. From the main menu, click **Content**.
2. Select the space.
3. In the side menu, click **Categories**.
4. Click the more actions button, to the right of the category name.
5. Select **Delete**.
6. Confirm the deletion.

:::warning Attention
Deleting a category also deletes all its subcategories. The entries that were assigned to any of them are not deleted, but they are left without a category and you have to reassign them one by one.
:::

## Access and permissions

Categories are controlled by two grouped permissions in the **Content** scope:

- **View Categories**: gives read-only access to the list. The **New Category** button does not appear, the name of each category no longer opens the form, and the actions menu is not shown.
- **Admin Categories**: includes **View Categories** and enables creating, editing and deleting.

Among the default roles, **Space Admin**, **Space Editor** and **Space Writer** carry **Admin Categories**, and **Space Viewer** carries only **View Categories**. If you need another combination, create a [custom role](/en/platform/core/roles.html#custom-roles) with the **Content** scope.
