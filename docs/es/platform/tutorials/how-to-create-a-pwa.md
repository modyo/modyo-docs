---
search: true
---

# Creación de un PWA

## Introducción

En este tutorial nos vamos a enfocar en [Modyo Channels](https://docs.modyo.com/es/platform/channels) utilizando los módulos de PWA para activar el soporte de aplicaciones web progresivas.

Las aplicaciones web progresivas, también conocidas como PWA (Progressive Web Apps) son aplicaciones web que progresivamente implementan capacidades tales como soporte para navegación offline o push notifications.

Las PWA se pueden instalar localmente en sistemas operativos móviles y de escritorio, son livianas y se comportan como cualquier aplicación nativa.

En este tutorial seguiremos usando el sitio de "Dynamic Bank" y vamos a habilitar el soporte PWA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SQwUOVyG2UE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"></iframe>

## Requisitos Previos

Para comenzar este tutorial necesitas haber completado el [tutorial de creación de un sitio básico](http://localhost:8080/es/platform/tutorials/how-to-create-home.html). Al igual que en los tutoriales anteriores debes tener conocimientos sobre HTML, JS, y la plataforma Modyo.

### Código fuente
Te recomendamos que sigas el ejercicio paso a paso para crear tus propias PWA personalizada, pero si deseas puedes descargar todo el código e imágenes del ejercicio [en este enlace](https://cloud.modyocdn.com/uploads/a4ca197c-af7a-4888-99ce-cf455779dc8f/original/assets.zip).

## Paso 1: Generar el Manifiesto PWA

El manifiesto de un PWA es donde se configura la aplicación, aquí definimos su nombre, imágenes y área de acción.

Antes de comenzar necesitarás dos imágenes
- Un ícono de alta resolución 1024x1024
- Un Splash screen de 2048x1536 (opcional)

Si no tienes imágenes a mano, puedes utilizar las que están incluidas en los archivos base de este tutorial

Visita [este sitio web](https://bit.ly/2Zv2H5i) para generar los archivos de tu PWA automáticamente e incluye los datos de tu aplicación

<img src="/assets/img/tutorials/how-to-create-pwa/manifest_data.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

En la sección Icons, incluye el Icono de alta resolución y presiona el botón “Generate Manifest” para generar automáticamente un archivo manifest con todas las imágenes que necesitarás

## Paso 2: Almacenar imágenes en Modyo

Descarga el archivo generado en el proceso anterior y descomprímelo. Encontrarás un grupo de imágenes que son las versiones del icono de tu aplicación en diferentes tamaños y resoluciones.

En el menú lateral de Modyo busca el asset manager, presiona en “new asset” y arrastra las imágenes generadas

<img src="/assets/img/tutorials/how-to-create-pwa/drag_images.gif" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

## Paso 3: Activar PWA manifest

Selecciona en la barra lateral Channels > Sites y busca alli el sitio que quieres convertir en PWA.

En la barra lateral, busca la sección “settings” y selecciona la opción “PWA”

Localiza la primera casilla con el título “Custom PWA Manifest”, Toma los valores generados en el archivo “manifest.webmanifest” y pégalos. Luego actualiza los valores de la propiedad “src” y reemplázalo por la ruta a las imágenes que acabas de almacenar en tu cuenta de Modyo.

Al final del proceso los valores de tu custom manifest deberían verse así.

``` json
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

Asegúrate de no introducir errores de sintáxis porque esto afectará el funcionamiento de tu aplicación, si necesitas verificar, puedes copiar el código y pegarlo en jsonlint.com para analizar que no contenga ningún error.
Una vez actualizados los valores, activa tu manifest marcando la casilla “Enable PWA manifest” y luego el botón “Save”


## Paso 4: Activar service worker

Si el archivo manifest es el que configura un PWA, el service worker es el encargado de ejecutar tareas y conectar la aplicación con el sistema local.

El service worker puede realizar un amplio rango de tareas, en este ejercicio usaremos para almacenar una copia en cache de la aplicación.

Comenzaremos definiendo un espacio de almacenamiento local que llamaremos “cache”.

Luego usaremos el evento ‘fetch’ para capturar los datos de la aplicación y crear una copia local que despliegue contenido aun sin conexión a internet.

Finalmente con el evento ‘activate’ incorporaremos un control de cache para eliminar la copia local cada vez que iniciemos una nueva sesión y garantizar así que los usuarios siempre ven una versión actualizada.

El resultado final es un código similar a este, puedes copiarlo directamente en la casilla “Top level service worker”


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

Para activar el service worker marca la casilla “Enable top level service worker” y presiona “Save”

## Paso 5: Instalar PWA

Para este punto tu aplicación Modyo ya tiene un PWA funcional y al entrar al sitio encontrarás un nuevo icono en la barra de navegación.

<img src="/assets/img/tutorials/how-to-create-pwa/pwa_installed.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

Al presionarlo el sistema instalará una Versión local de tu aplicación.

<img src="/assets/img/tutorials/how-to-create-pwa/pwa_install.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

¡Felicidades! has creado un PWA usando Modyo.

## Conclusiones

Los PWA ofrecen una nueva gama de posibilidades para distribuir aplicaciones en sistemas operativos móviles y de escritorio.

En este tutorial exploramos los elementos básicas de una instalación, pero puedo puedes encontrar más recursos para seguir creando tus PWA en:

- [Documentación oficial de PWA](https://blog.pwabuilder.com/docs)
- [Documentación oficial del web app manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
