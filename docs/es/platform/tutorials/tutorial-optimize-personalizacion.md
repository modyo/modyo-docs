---
search: true
---

# Tutorial Personalización de Experiencias con Google Optimize

## Introducción

Bienvenido a un nuevo tutorial de Modyo. En el que nos vamos a enfocar en [Modyo Channels](/es/platform/channels) y vamos a cambios a traves de Google Optimize para realizar Personalización de experiencia de usuario, ya que el equipo de marketing de Dynamic creó una campaña en instagram para atraer nuevos potenciales clientes en el segmento de hombres jóvenes, los que hagan click irán al sitio con el parámetro UTM 'young_man' para identificar tráfico de esta campaña y personalizar la experiencia para aumentar la tasa de conversión.

## Requisitos Previos

Para ejecutar el tutorial necesitamos un sitio en Modyo con el Home de Dynamic Bank, tener una cuenta en Google Optimize y Google Analytics Universal.

## Paso 1: Crear Espacio en Optimize

Lo primero que vamos a hacer es crear una cuenta dentro de [Optimize](https://optimize.google.com/), para esto vamos a entrar a la plataforma y le damos click a <b>Crear cuenta</b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

Llenamos los campos, aceptamos las condiciones y pasamos al siguiente paso.

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

Luego de completar todo lo que nos piden, hacemos click en <b>Crear</b>.

## Paso 2: Crear experiencia

Una vez creada nuestra cuenta dentro de Optimize, vamos a hacer click en <b>empezar</b> para crear nuestra primera experiencia, en la cual llenamos los campos correspondientes y a seleccionamos <b>Personalización</b>.

<img src="/assets/img/tutorials/optimize/experiencia.png" style="max-width: 450px;margin: auto 0;"/>

Le damos click a <b>Modificar sitio web</b> y editamos la imagen del Hero.

Para editar la imagen, seleccionamos el div en el cual se encuentro la imagen y en flotante que nos ayuda con la edición buscamos la sección fondo y cambiamos la url de la imagen por la siguiente. 

<img src="/assets/img/tutorials/optimize/edit.png" style="max-width: 650px;margin: auto 0;"/>

```html
https://cloud.modyocdn.com/uploads/8456879d-ea48-45e1-af25-be9de106cb5e/original/young_man.jpg
```
Lo que nos da como resultado lo siguiente:

<img src="/assets/img/tutorials/optimize/editor.png" style="max-width: 650px;margin: auto 0;"/>

Luego guardamos y hacemos click en <b>Hecho</b> para volver a la pantalla principal del experimento.

De vuelta en la pantalla de personalización vamos a agregar la <b>Segmentación por página</b>, le damos click a personalizar  y seleccionamos <b>Parámetro UTM</b>

En la personalización cambiamos el dropdown de <code>es igual a</code> por <code>contiene</code> y el valor lo llenamos con <code>young_man</code>.

<img src="/assets/img/tutorials/optimize/utm.png" style="max-width: 650px;margin: auto 0;"/>

Le damos click a <b>Agregar</b> y luego vinculamos nuestra cuenta de Google Analytics para la medición.

Pare generar la medición le vamos a agregar a nuestro botón en nuestro sitio el siguiente código

```html
onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA Hero'});"
```

Y asi estaremos trackeando el evento click dentro de GA.

## Paso 3: Iniciar

Para iniciar la prueba vamos a ir a la parte de configuración y comprobar la instalación, la que nos dirá si tenemos el código de Google Analytics y Google Optimize en nuestro sitio, si no lo tenemos aún debemos seguir los pasos que nos indican.

Cuando tengamos la instalación bien, vamos a iniciar la Personalización haciendo k en el botón <b>Iniciar</b> arriba a la derecha.

## Conclusiones

¡Felicidades! Has finalizado el curso de Personalización de Experiencias con Google Optimize.

Ahora puedes generar diferenciar tu audiencia y personalizar la experiencia dependiendo de su segmento asociado.