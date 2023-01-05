---
search: true

collapsible: true
---

# Entrance

Create dynamic content in your spaces using Tickets. In this object you have access to all information relevant to the entries. The available attributes are:

## entry.space

The name of the space associated with the entry.

### output
```space1```

## entry.category

The path to the category of this entry.

### output
```category-1/category-2```

The space for this entry.

## entry.category_name

The category name of this entry.

### output
```category 2```

## entry.category_slug

The slug of the category of this entry.

### output
```category-2```

## entry.type

The type of the entry.

### output

```type2```

## entry.type_uid

The unique id of the entry type.

### output

```type2```

## entry.tags

String array of the tags of this entry.

### output

```tag1, tag2```

## entry.account_url

The url of the account

### output

```https://test.myModyo.com```

## entry.url

Entry canonical URL

### output

```https://test.myModyo.com/entry```

## [entry.author](./user)

The object of the user who authored the post

## entry.meta

The object of the metadata of the entry. This object has the following attributes: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private

## [entry.fields](./field)

Array with objects in the input fields.
