---
search: true
---

# SEO Tutorial in Modyo

## Introduction

Welcome to a new Modyo tutorial. In this tutorial we are going to focus on [Modyo Channels](/en/platform/channels) where we will work on the SEO of your digital channel, optimizing search engine rankings through the metadata in head.

## Prerequisites

- A site on the platform
- A [Page](/en/platform/channels/pages)

## Step 1: General SEO Settings

Within our [site](/en/platform/channels/sites), in the<b>General</b> section within <b>Site Settings</b>, fill in the Description field with a text between 140 and 160 characters that the browser will include in the description shown.

<img src="/assets/img/tutorials/seo/description.png" style="max-width: 450px;margin: auto 0;"/>

After the description of the site, navigate to <b>SEO</b>, inside <b>Site Settings</b>. In the custom meta tags section, click <b>+ New meta tag</b> to add `og:image`.

Once the Modal is opened, search for `og:image` in Tag Name, Value is the URL of the image in the File Manager and activate the checkbox to replicate metatag in pages.

<img src="/assets/img/tutorials/seo/new_meta.png" style="max-width: 450px;margin: auto 0;"/>

## Step 2: Developed SEO in Templates

Within Templates of our site, we open the Snippet `seo` in the General section and make sure that we have the following code inside the file:

```html 
{{page.meta_tags}}
``` 

With this we managed to integrate the metatags of the page using Liquid.

## Conclusion

Congratulations! You have completed the tutorial on Creating Dynamic Bank Home in Modyo.

You now have knowledge of how to use: 

- [Pages](/en/platform/channels/pages)
- [Navigation](/en/platform/channels/navigation)
- [Widgets](/en/platform/channels/widgets)
- [Templates](/en/platform/channels/templates)
- [Modyo Content](/en/platform/content)