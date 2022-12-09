---
search: true
collapsible: true
---

# Entrada

Obtén toda la información pertinente a las entradas con este drop.

### entry.account_url

La url de la cuenta.

#### output

```https://test.miModyo.com```

### [entry.author](./user)

El objeto del usuario autor de la entrada.

### entry.category

La ruta de la categoría de esta entrada.

#### output
```category-1/category-2```

### entry.category_name

El nombre de la categoría de esta entrada.

#### output
```category 2```

### entry.category_slug

El slug de la categoría de esta entrada.

#### output
```category-2```

### entry.space

El nombre del espacio asociado a la entry.

#### output
```espacio1```

### entry.tags

Arreglo de strings de los tags de esta entrada.

#### output

```tag1, tag2```


### entry.type

El tipo de la entrada.

#### output

```type2```

### entry.type_uid

El id único del tipo de la entrada.

#### output

```type2```

### entry.url

URL canónico de la entrada

#### output

```https://test.miModyo.com/entry```

### [entry.meta](#meta)

El objeto del metadata de la entrada. Este objecto tiene los siguientes atributos: uuid, published_at, locale, slug, created_at, updated_at, unpublished_at, private, private

### entry.fields

Array con objetos de los campos de la entrada.

## Campos (Fields)

Despliega toda la información de los campos de una entrada.

### field.name

Nombre del campo personalizado.

#### output

```Field1```

### field.type

Nombre del type asociado al campo.

#### output

```Type1```