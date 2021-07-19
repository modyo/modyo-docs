---
search: true
---

# Tutorial Personalización de Experiencias con Google Optimize

## Introducción

Bienvenido a un nuevo tutorial de Modyo. En este tutorial nos vamos a enfocar en [Modyo Channels](/es/platform/channels) en el cual haremos cambios a traves de Google Optimize para realizar Personalización de experiencia de usuario.

## Requisitos Previos

Para ajecutar el tutorial necesitamos un sitio en Modyo con el Home de Dynamic Bank y tener una cuenta en Google Optimize.

## Paso 1: Crear Espacio en Optimize

Lo primero que debemos hacer es crear una cuenta dentro de [Optimize](https://optimize.google.com/), para ellos hacer click en <b>Crear cuenta</b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

Llenamos los campos que nos pide

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

## Paso 2: Crear experiencia

Una vez creada nuesta cuenta dentro de Optimize, vamos a hacer click en empezar para crear nuestra primera exprriencia, en la cual llenamos los campos correspondientes y a seleccionamos <b>Personalización</b>.

<img src="/assets/img/tutorials/optimize/experiencia.png" style="max-width: 450px;margin: auto 0;"/>

Le damos click a <b>Modificar sitio web</b> y editamos la imagen del Hero.

Para editar la imagen, seleccionamos el div de la imagen del Hero del y cambiamos en la sección fondo la url de la imagen por la siguiente.

<img src="/assets/img/tutorials/optimize/edit.png" style="max-width: 650px;margin: auto 0;"/>

```html
https://cloud.modyocdn.com/uploads/8456879d-ea48-45e1-af25-be9de106cb5e/original/young_man.jpg
```
Lo que nos da este resultado:

<img src="/assets/img/tutorials/optimize/editor.png" style="max-width: 650px;margin: auto 0;"/>

Luego Guardamos y hacemos click en <b>Hecho</b>

De vuelta en la pantalla de personalización vamos a agregar la <b>Segmentación por página</b>, le damos click a personalizar  y seleccionamos <b>Parámetro UTM</b>

En la persolanización cambiamos el dropdown de <code>es igual a</code> por <code>contiene</code> y el valor lo llenamos con <code>young_man</code>.

<img src="/assets/img/tutorials/optimize/utm.png" style="max-width: 650px;margin: auto 0;"/>

Le damos click a <b>Agregar</b> y luego vinculamos nuestra cuenta de Google Analytics para la medición.

Pare generar la medición le vamos a agrgar a nuestro botón en nuestro sitio el siguiente código

```html
onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA Hero', 'value': 0});"
```

Y asi estaremos trackeando el eventro click dentro de GA.

## Paso 3: Iniciar

Para inciciar la prueba vamos a ir a la parte de configuración abajo y y comprobar la que tengamos Google Analytics y el el script de Google Optimize en nuestro sitio.

Si no tenemos el los códigos, debemos agregarlo en el head de nuestro sitio dentro del modulo de Template y publicar los cambios.

Una vez que hayamos comprobado que la instalación esta bien vamos a iniciar la Persinacilzación haciendo clicl en el botón <b>Iniciar</b> arriba a la derecha.

## Conclusiones

¡Felicidades! Haz finalizado el curso de Personalización de Experiencias con Google Optimize.

Ahora puedes generar diferenciar tu audiencia y perzonalizar la experiencia dependiendo de donde venga.