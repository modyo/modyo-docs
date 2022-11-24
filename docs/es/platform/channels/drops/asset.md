---
search: true
collapsible: true
---

# Asset

Objecto del tipo asset. Contiene la información pertinente a un archivo dentro del [Gestor de Archivos](/es/platform/content/asset-manager).

### asset.data_file_name

El nombre del archivo del asset.

#### output

```foto.jpg```

### asset.description

La descripción del archivo en caso de haberse configurado uno.

#### output

```Platón usa esta alegoría para explicar cómo es para el filósofo y maestro guiar a las personas al conocimiento```

### asset.title

El título asociado al asset.

#### output

```Foto```

### asset.uuid

El uuid del asset.

#### output

```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```

### asset.alt

El alt asociado al asset en caso de haberse configurado uno. 

#### output

```El mito de la caverna de Platon```

### asset.alt_text

El alt asociado al asset en caso de haberse configurado uno. 

#### output

```El mito de la caverna de Platon```

### asset.content_type

El tipo de contenido asociado al asset.

#### output

```image/jpeg```

### asset.name

El nombre asignado al asset.

#### output
```foto.jpg```

### asset.size

El tamaño (en bytes) del archivo subido.

#### output

```20959```

### asset.thumbnail_url

La URL del thumbnail del asset.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```

### asset.url

La URL donde se encuentra el asset.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```

## Audio

El drop de Audio es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **audio_asset** y reemplazarlo en lugar de asset. 

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

## Archivo

El drop de Archivo es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **file_asset** y reemplazarlo en lugar de asset. 

Se heredan los siguientes atributos de [Asset](#asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`

### file_asset.url

La URL del archivo.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv```


### file_asset.thumbnail_url

La URL del thumb del archivo.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```


### file_asset.image_thumbnail_url

La URL del archivo.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/C200x200/cave.csv```

### file_asset.is_image?

Booleano para saber si el archivo es imagen.

#### output

```false```

### file_asset.is_video?

Booleano para saber si el archivo es video.

#### output

```false```

### file_asset.is_audio?
Booleano para saber si el archivo es audio.

#### output

```false```

### file_asset.is_pdf?
Booleano para saber si el archivo es un PDF.

#### output

```false```

### file_asset.is_another?
Booleano para saber si el archivo es de otro tipo no especificado.

#### output

```true```

### file_asset.temp_url
La URL temporal del archivo.

#### output

```/var/folders/vm/fk9_xg_d7qs8xbxj28csw1000000gp/T/e8ca0956-a576-43c0-9f37-2be39cf9660120210602-6475-1lvfh9t```

## Video

El drop de Video es una subclase que hereda los mismos atributos que Asset. Se puede utilizar **video_asset** y reemplazarlo en lugar de asset. 

### video_asset.url

La URL del video.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm"```

### video_asset.thumbnail_url

La URL del thumbnail del video.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```
