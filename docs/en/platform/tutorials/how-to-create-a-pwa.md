---
search: true
---

# Creating a PWA

## Introduction

In this tutorial we're going to focus on [Modyo Channels](https://docs.modyo.com/en/platform/channels) using PWA modules to enable progressive web application support.

Progressive web applications, also known as PWA (Progressive Web Apps) are web applications that progressively implement features such as support for offline browsing or push notifications.

PWAs can be installed locally on desktop and mobile operating systems, are lightweight, and behave like any native application.

In this tutorial we will continue to use the "Dynamic Bank" site and enable PWA support.

<div style="margin: 50px auto; text-align: center;" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/SQwUOVyG2UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Prerequisites

To start this tutorial you need to have completed the [Create a Basic Site](/en/platform/tutorials/how-to-create-home.html). As in the previous tutorials you should already know HTML, JS, and how to use the Modyo platform.


### Source code
We recommend that you follow this exercise step by step to create your own custom PWA. If you want, you can download all the code and images from this tutorial from [this link](https://cloud.modyocdn.com/uploads/a4ca197c-af7a-4888-99ce-cf455779dc8f/original/assets.zip).

## Step 1: Generate the PWA Manifest

The PWA manifest is where the application is configured, here we define its name, images, and area of action.

Before you start, you'll need two images.
- A high resolution 1024x1024 icon
- One 2048x1536 px Splash screen (optional)

If you don't have the images, you can use the ones that are included in the base files of this tutorial.

Visit SimiCart's [PWA Manifest Generator](https://bit.ly/2Zv2H5i) to generate your PWA files automatically and include your application data.

<img src="/assets/img/tutorials/how-to-create-pwa/manifest_data.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="The image for PWA Manifest Generator from SimiCart"/>

In the Icons section, include the high-resolution icon and press the **Generate Manifest** button to automatically generate a manifest file with all the images you'll need.

## Step 2: Store images in Modyo

Download the file generated in the previous process and unzip it. You'll find a group of images that are the versions of your app icon in different sizes and resolutions.

In the Modyo platform, in the side menu, expand **Content** and click **File Manager**.

Press **+ New Asset** and drag the generated images.

<img src="/assets/img/tutorials/how-to-create-pwa/drag_images.gif" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Drag the images to addd them to Modyo Platform"/>

## Step 3: Enable PWA manifest

In the sidebar select **Channels**, click on **Sites**. Open the site you want to convert to PWA.

In the sidebar, expand **Site Settings** and click **PWA**.


Locate the first box with the title **Custom PWA Manifest**, take the values generated in the _manifest.webmanifest_ file and paste them. Then update the values of the _src_ property and replace it with the path to the images you just stored in your Modyo account.

At the end of the process, your custom manifest values should look like this.

```json
{
  "theme_color": "#4C5D99",
  "background_color": "#4C5D99",
  "display": "standalone",
  "scope": "/",
  "start_url": "/",
  "name": "Dynamic Bank PWA",
  "short_name": "Dynamic",
  "description": "This is Dynamic Banks PWA",
  "icons": [
    {
      "src": "https://cloud.modyocdn.com/uploads/88044513-4e5f-4735-8407-59c99ae5361e/original/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "https://cloud.modyocdn.com/uploads/a2b5e197-fc02-47b2-8f12-2c7b026fecf3/original/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "https://cloud.modyocdn.com/uploads/a8ea494d-53fd-47a9-95b3-7a92a0b93377/original/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "https://cloud.modyocdn.com/uploads/8da84bca-1bdd-4d06-8fc5-44091b45c763/original/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}

```

Having syntax errors will affect the operation of your application. If you need to verify, you can copy the code and paste it into [jsonlint.com](https://www.jsonlint.com) to verify that it doesn't contain any errors.
Once the values have been updated, activate your manifest by checking the **Enable PWA Manifest** box and then click **Save**.


## Step 4: Activate service worker

If the manifest file is the one that configures a PWA, the service worker is responsible for running tasks and connecting the application to the local system.

The service worker can perform a wide range of tasks, in this exercise we will use it to cache a copy of the application.

We'll start by defining a local storage space that we'll call _cache_.

We'll then use the _fetch_ event to capture the application data and create a local copy that displays content even without an internet connection.

Finally with the _activate_ event we will add a cache control to delete the local copy every time we start a new session and ensure that users always see an updated version.

The final result is a code similar to this one, you can copy it directly into the **Top level service worker** box


``` javascript
const cacheName = "cache";

self.addEventListener("fetch", function (event) {
  event.respondWith(
    (async function () {
      try {
        var res = await fetch(event.request);
        var cache = await caches.open(cacheName);
        cache.put(event.request.url, res.clone());
        return res;
      } catch (error) {
        return caches.match(event.request);
      }
    })()
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      caches.delete(cacheName);
    })
  );
});

```

To activate the service worker, check the **Enable top level service worker** box and press **Save**.

## Step 5: Install PWA

At this point, your Modyo application already has a functional PWA and when you enter the site you will find a new icon in the navigation bar.

<img src="/assets/img/tutorials/how-to-create-pwa/pwa_installed.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Your PWA is now installed" />

When you press it, the system will install a local version of your application.

<img src="/assets/img/tutorials/how-to-create-pwa/pwa_install.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="Clicking the button will install your application" />

Congratulations! you created a PWA using Modyo.

## Conclusion

PWAs offer a new range of possibilities for distributing applications across desktop and mobile operating systems.

In this tutorial we explore the basics of an installation, to learn more about PWA see:

- [Official PWA documentation](https://blog.pwabuilder.com/docs)
- [Official documentation of the web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
