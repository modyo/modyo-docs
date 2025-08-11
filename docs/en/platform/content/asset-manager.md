---
search: true
---

# Media

:::tip Tip
- In `Modyo 9`, this space is called **File Manager**. If you migrate from Modyo 9 to Modyo 10, all assets are preserved, and you can choose beforehand which space to move them to.
:::

This space allows you to upload, organize, and manage your files in a simple and efficient way.

In Media, you can assign editing and deleting permissions to images through groups. This way, a group can have permissions to view and use assets, but it cannot modify or delete them.
Different types of media can be uploaded to this space, considering the following size restrictions per file:


- **Images**: 6 MB
- **Videos**: 10 MB
- **Audios**: 10 MB
- **Files**: 10 MB

Allowed file types are:
- **Images**: apng, avif, bmp, gif, ico, jpeg, jpg, png, tif, tiff, webp
- **Videos**: av, avi, f4v, flv, mkv, mov, mp4, mpeg, webm, wmv
- **Audios**: 3gp, aac, alac, dsd, flac, mp3, pcm, wav, m4a, ogg, wma
- **Files**: 7z, ai, apk, css, csv, doc, docx, fon, ico, iso, jar, js, msi, ods, odt, otf, pdf, ppt, pptx, rar, rss, rtf, scss, tar, tex, ttf, txt, vcf, wdp, xhtml, xls, xlsm, xlsx, xml, zip, one, ecf, pub, xps, json, svg, woff, woff2, ics



## About the Interface

The interface shows you a list of all the files that exist within the platform.

In the upper right part of the screen, you can see the percentage of used space corresponding to the total allocated for the account and the button to upload new files.

Modyo displays 30 files per page. At the bottom, you can navigate between the file pages.

You can filter the content by:
- **Extensions**: Filter by file type.
- **Author**: Filter by the name of the user who uploaded the content.
- **Tags**: Shows all files associated with a tag.
- **Search bar**: Type a word to display files that contain that word in their name or metadata.

Tags allow you to organize and group your files. To modify the tags of more than one file, select the files you want and click on the **Add or Remove Tags** button that appears at the bottom of the list.

In this view, the columns are:
- **Preview**: If the platform identifies that the file is an image, you can view a thumbnail image of the file. If it is not, the space appears blank.
- **Name**: Name of the file and its extension. The sorting is alphabetical.
- **Type**: File type and extension. The sorting is alphabetical, first by type and then by the name of the extension.
- **Size**: Size in kilobytes of the file.
- **Created on**: Date of upload or creation within the platform, regardless of whether the file was created on a different date on another service.
- **Author**: Name of the user who uploaded the file, only when the user has a name assigned.


## Upload a file
To upload a file to Modyo, choose one of the following options:

#### From the section where you're working, templates, pages, realms, or sites:
1. Open the text editor,
1. In the top bar, select **insert image** to open a modal where you can drag or upload a file.

#### In the dedicated section for managing files.

1. In the side menu, click on the **Content** icon.
1. Select a space.
1. In the side menu, click **Media**.
1. Click on the **New Asset** button.
1. Drag the file or click the upload box to open a search window.
1. Add tags to the file if you want.
1. Click **Upload** to confirm.

:::tip Tip
Modyo allows you to upload 10 files at a time. If you need to upload more items, repeat the process.
:::

## Edit a File
In the file interface, click on the name of a file to open the file properties editing interface and see:

- **File URL**: Shows the public URL of the file. Click on the icon next to the URL to copy it. It is not modifiable.
- **Liquid tag**: Shows the liquid tag of the file. Click on the icon to copy and use it in the platform's content. It is not modifiable.
- **Title**: Shows the title of the file. This section is different from the file name, which cannot be changed.
- **Alternative text**: Shows the alt text of the element. Only for images and videos.
- **Description**: Description of the element. We recommend writing a short text referring to the image.
- **Tags**: Shows the tags associated with the file. You can search for and add more tags, as well as delete existing tags.

Click **Update Information** to confirm the changes or **Close** to cancel them.

## Re-upload an Image

To upload a new file while keeping the original name and link, follow these steps:

1. Click on the name of a file to open the property editing interface.
2. Click on the upload button above the image.
3. Select a new file.
4. Confirm that you want to replace the old file.
5. Click **Update Information** to confirm the changes


## Edit an Image

The Modyo image editor allows you to make small changes to images to facilitate their management on the platform. To adjust the dimensions of an image, follow these steps:

1. Click on the name of a file to open the property editing interface.
2. Click on the edit icon above the image.
3. Choose the option you want to edit the size:
    - 16:9
    - Square
    - Free: Edit the image to a custom size in pixels, adjustable at the bottom of the screen.
4. Click **Apply**.

:::tip Tip
You can change the view and crop of the image in two ways:

- Zoom: Use the mouse scroll to zoom in on the image.
- Move background: Double-click outside the cropping area and drag the background.
:::

To restore the file, open the property editing window again and click on **Restore Original**. This permanently removes the modifications made.


## Resize an image

In Modyo, you can dynamically resize an image, which allows you to modify the image size without losing quality and ensure it fits the screen of your users' devices. This resizing is done with Liquid code, in the work area where you inserted the image.


:::warning Important
We recommend always using the Liquid tag of an image to include it in your content and not the asset URL. This way, any changes you make to the image will be reflected wherever the image is used.
:::


To resize an image, you must first copy the Liquid code to render the image. To do this:

1. Click on content.
1. Select the space where the image you want to modify is located.
1. Click on media.
1. Click on the image.
1. Click on the copy icon, next to the Liquid tag of the image.


Once you have the Liquid code of the image, access the work area where you want to insert the image, whether in templates, pages, or widgets, and follow these steps:

1. Paste the Liquid code. It should look something like this:
`{{ 'ec0a3e4-ccdb-48c5-87be-5e1eca560dee' | asset_image }}`
2. Add the Liquid filter, it can be height, width, or quality, following any of these formats:
- `asset_image: width: XXX` where XXX is the desired pixel size.
- `asset_image: quality: XX` where XX is the desired percentage of quality.
- `asset_image: width: XXX, quality: XX, widths: 'XXX, XXX, XXX, sizes: (min-width: XXXpx) XXXpx` adapting the values according to your needs to ensure that the image fits the different screens and resolutions of your user's devices, using the [srcset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset) attribute for responsive support.
3. Click **save**.
4. Click on **publish**.

:::tip Tip

When resizing images, the original aspect ratio is preserved, so the image is adjusted proportionally, without distortion.

If you only include the height or width of the image, the missing value is automatically calculated to maintain the correct aspect ratio of the image.
:::


## Delete a File

To delete a file, follow these steps:
1. Click on the name of a file to open the property editing interface.
1. Click **Delete**, below the image.

:::warning Attention
This action is irreversible. If the file is linked to content, you will not be able to recover it, and it will appear as a broken link.
:::