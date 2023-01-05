---
search: true
collapsible: true
sidebarDepth: 3
---

# Asset

Object of type asset. Contains the information relevant to a file within the [File Manager](/en/platform/content/asset-manager).

### asset.data_file_name

The name of the asset.

#### output

```photo.jpg```

### asset.description

The description of the file if one has been configured.

#### output

```Plato uses this allegory to explain how it is for the philosopher and teacher to lead people to knowledge```.

### asset.title

The title associated with the asset.

#### output

```Photo```

### asset.uuid

The uuid of the asset.

#### output

```7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c```

### asset.alt

The alt associated with the asset if one is configured. 

#### output

```The Myth of Plato's Cavern```

### asset.alt_text

The alt associated with the asset if one is configured. 

#### output

```The Myth of Plato's Cavern```

### asset.content_type

The content type associated with the asset.

#### output

```image/jpeg```

### asset.name

The name assigned to the asset.

#### output
```photo.jpg```

### asset.size

The size (in bytes) of the uploaded file.

#### output

```20959```

### asset.thumbnail_url

The URL of the asset thumbnail.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/foto.jpg```

### asset.url

The URL where the asset is located.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/original/foto.jpg```

## Audio

The Audio drop is a subclass that inherits the same attributes as Asset. You can use **audio_asset** and replace it instead of asset. 

The following attributes are inherited from [Asset](./asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`.

## File

The File drop is a subclass that inherits the same attributes as Asset. You can use **file_asset** and replace it instead of asset. 

The following attributes are inherited from [Asset](./asset):

`.data_file_name, .description, .title, .uuid, .alt, .alt_text, .content_type, .name, .size, .thumbnail_url, .url`.

### file_asset.url

The URL of the file.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/platon.csv```

### file_asset.thumbnail_url

The URL of the file's thumb.

#### output

```/Uploads/7B1B3F82-C9F5-4C51-87DC-B93FC9918C9C/C50x50/Platon.JPG```


### file_asset.image_thumbnail_url

The URL of the file.

#### output

```/Uploads/8of5a204-74E6-4D6B-A319-6F7896C09135/C200x200/Cave.csv```

### file_asset.is_image?

Boolean to know if the file is image.

#### output

```false```

### file_asset.is_video?

Boolean to find out if the file is video.

#### output

```false```

### file_asset.is_audio?

Boolean to know if the file is audio.

#### output

```false```

### file_asset.is_pdf?
Boolean to see if the file is a PDF.

#### output

```false```

### file_asset.is_another?

Boolean to find out if the file is of another type not specified.

#### output

```true```

### file_asset.temp_url
The temporary URL of the file.

#### output

```/var/folders/VM/FK9_XG_D7QS8XBXJ28CSW1000000GP/T/E8CA0956-A576-43C0-9F37-2BE39CF9660120210602-6475-1LVFH9T```

## Video

The Video drop is a subclass that inherits the same attributes as Asset. You can use **video_asset** and replace it instead of asset. 

### video_asset.url

The URL of the video.

#### output

```/uploads/8de5a204-74e6-4d6b-a319-6f7896c09135/original/caverna.webm"```

### video_asset.thumbnail_url

The URL of the video thumbnail.

#### output

```/uploads/7b1b3f82-c9f5-4c51-87dc-b93fc9918c9c/C50x50/platon.jpg```
