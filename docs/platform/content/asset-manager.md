---
search: true
translated: true
---

# Asset Manager

An organization needs to have a platform that allows them to organize and manage their required files and content.

Modyo allows you to upload, review and edit files through the Asset Manager tool, without the need to integrate with an external service.

You can access the Asset Manager in one of two ways. The first way is integrated within the platform tools where you create and edit content, either in Spaces or Sites.


#### Rich Text

<img src="/assets/img/content/asset-manager/2.jpg" style="margin: 20px 0">

#### Multiline

<img src="/assets/img/content/asset-manager/3.jpg" style="margin: 20px 0">

#### Assets Selector

<img src="/assets/img/content/asset-manager/4.jpg" width="150px" style="margin: 20px 0">


The second one is directly through the Asset manager tool found in the Content section.

<img src="/assets/img/content/asset-manager/5.jpg" width="150px" style="margin: 20px 0">


## About the interface

<img src="/assets/img/content/asset-manager/1.jpg" width="600" style="border: 1px solid #EEE; margin: 20px 0">

The Asset manager interface displays a list of all the files we have within the platform.

In the upper right part of the screen you can see the percentage of space used corresponding to the total allocated for the account and the button to upload new files.

The list has three different filters for useful file searching:

<img src="/assets/img/content/asset-manager/7.jpg" width="400" style="margin: 20px 0">

**Extensions**: Use this to filter all files of the same type within the platform (the default list displays all uploaded files).

**Tags**: This filter allows you to display all files that match all selected tags.

::: tip Tip
If you want to add a tag to one or more files, you can either edit a file directly or by clicking the checkbox of at least one file in the main list and use the "Add tags" button that appears in the lower left.

Click this button to add tags to all selected files. If you select one or more checkboxes that are on your screen, the button will only tag those files that you have checked.

<img src="/assets/img/content/asset-manager/14.jpg" width="400" style="margin: 20px 0">

:::

**Search bar**: With the search bar, the manager will show you all files with titles or metadata that match your search terms. This also includes searches for specific file extensions, tags, and the names of users who uploaded a file.

::: tip Tip
Modyo displays 30 files at a time, and this value cannot be updated.
:::

Each file listed in the main view shows the following information and attributes:

<img src="/assets/img/content/asset-manager/8.jpg" style="margin: 20px 0">

Attributes with arrows can be sorted by either ascending and descending order. The default sort order **is the file upload date**.

**Preview**: Image files display small thumbnail previews. Non-image files do not use this feature.

**Name**: File name with the extension included. Ordering by this field sorts all files alphabetically.

**Type**: File type and extension. The ordering is in alphabetical order first by type and then by the letter of the name of the extension.

**Size**: Size in kilobytes of the file.

**Created on**: Upload or creation date within the platform, independent if the file was created on a different date in another service.

**Author**: Name of the user who uploaded the file, as long as the user has a name assigned.

The lower right corner lists the pagination of all your account files.


## File Properties

<img src="/assets/img/content/asset-manager/9.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0">

You can upload any file type to the platform, without no filetype exclusions.

However, the platform recognizes and classifies known file types by their extensions and applies their type to the list.

To access the properties of a file, click on its name to open a modal where you can edit the file's properties.

## Edit a file

<img src="/assets/img/content/asset-manager/12.jpg" width="500" style="margin: 20px 0">

You can find and/or edit the following in the file properties editor:

**File URL**: Displays the public URL of the file. You can copy it to your clipboard by clicking on the side icon.

**Liquid Tag**: Use this tag within the platform to reference the file through Liquid as opposed to it's URL.

::: warning Warning
Neither the URL nor the Liquid Tag is possible to change through Modyo.
:::

**Title**: Shows the title of the file. This section is different from the file name, which cannot be changed.

**Alternative text**: Shows the ```alt text``` of the element. (Only applies to images and videos).

**Description**: Description of the element. It is good practice to write a small text that refers to the image.

**Tags**: Shows the tags associated to the file, clicking on the box you can search and add more tags. In turn, you can click on the X of the existing tags to remove the association with the file.

<hr style="margin: 40px 0;"/>

To save the modification of the data, it is necessary to click on the **Update Information** button located in the lower right part of the window. If the data is modified but the button is not clicked to be saved, these modifications will be lost.

If you want to close the window and return to the Manager interface, click on the **Close** button, located at the bottom of the screen.

## Recover an image

If you want to upload a file again, keeping the name and the original link, click on the icon to upload the file found in the window **Update Information**. Thus, it will display a new window where you can select a new file.

<img src="/assets/img/content/asset-manager/13.jpg" width="300" style="border: 1px solid #EEE; margin: 20px 0">

## Edit an image

<img src="/assets/img/content/asset-manager/10.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0">

To facilitate the handling of images within the platform, **Modyo includes an image editor** that allows you to make changes to your images.

One of the changes you can make is to **edit the image measurements**. To do this, click on the **pencil** icon found in the "Update information" window.

This opens a window with two views that display the original image and a preview of the edited image.

On the left side of the image editor are three options to edit the image size:

- **16:9**: Crop the image with a 16:9 ratio.
- **Square**: Crop the image to the size of a square with a 1:1 ratio.
- **Free**: Freely crop the image to any size by selecting the edges and corners of the blue cropping tool.

The left side displays the original size of the image and the size in pixels of the crop edit.

::: tip Tip
There are two ways to change the view and cut the image with the cursor:

- **Zoom**: Use the mouse scroll to zoom in.
- **Move background**: Double click outside the clipping area and drag the background.
:::

After cropping an image, if you want to restore it to its original dimensions, you can return to the "Update information" window and select the **Restore Original** button, which returns the image to its original state. However, restoring an image causes you to lose the cropped version.

## Delete a file

To delete a file, click on the Delete icon, located in the upper right corner of the image preview in the "Update information" window.

::: warning Warning
This action is irreversible, and any content using this file will display a broken link.
:::

## Upload a file

<img src="/assets/img/content/asset-manager/11.jpg" width="500" style="border: 1px solid #EEE; margin: 20px 0">

There are two ways to upload a file in Modyo. The first way is in the context of working with content. This can be either in the Content editor with an asset field, or working in the Template or Widget Builder to load files as necessary. The second way is through the Asset Manager in the Content section.

To upload a file, click on the **+ New** button, located at the top of the screen.

This action opens a new window that allows you to upload files in two ways:

- **Drag & Drop**: Drag the file to the window where it says "Drop files here".
- **Select the window**: Click the large "Upload" square to open the file browser on your local machine, and select the file from there.

::: warning Warning
You can upload a maximum of 10 files at a time. If you need to upload more, do so in batches.
:::

As a way to protect the security of the Modyo platform, there is a file size limit, depending on the file type. These limits are:

- Images: 30 MB
- Videos: 200 MB
- Audios: 100 MB
- CSV: 2 MB
- Others: 100 MB
