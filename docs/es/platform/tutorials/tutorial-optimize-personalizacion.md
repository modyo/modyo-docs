---
search: true
---

# Personalizar Experiencias con Google Optimize

## Introducción

Bienvenido a un nuevo tutorial de Modyo. Nos vamos a enfocar en [Modyo Channels](/es/platform/channels) y Google Optimize para realizar Personalización de experiencia de usuario (UX). El caso para este tutorial hará uso de nuestra marca ficticia Dynamic Bank. El equipo de Marketing de Dynamic Bank creó una campaña en Instagram para atraer nuevos potenciales clientes en el segmento de hombres jóvenes, los que hagan click irán al sitio con el parámetro UTM 'young_man' para identificar tráfico de esta campaña y personalizar la experiencia para aumentar la tasa de conversión.

## Requisitos Previos

Para el tutorial se necesita un sitio en Modyo con el Home de Dynamic Bank, tener una cuenta en Google Optimize, y Google Analytics Universal.

## Paso 1: Crear Espacio en Optimize

Lo primero que se tiene que hacer es crear una cuenta dentro de [Optimize](https://optimize.google.com/) dando click a <b>Crear cuenta</b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;" alt="Create account button"/>

Llena los campos, acepta las condiciones, y pasa al siguiente paso.

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;"
alt="The modal that pops up when creating a new account"/>

Luego de completar los pasos, haz click en <b>Crear</b>.

## Paso 2: Crear experiencia

Una vez creada la cuenta dentro de Optimize, haz click en <b>Empezar</b> para crear la primera experiencia, llena los campos correspondientes, y selecciona <b>Personalización</b>.

<img src="/assets/img/tutorials/optimize/experiencia.png" style="max-width: 450px;margin: auto 0;" alt="Image showing the dialog options when creating a new experience in Google Optimize"/>

Haz click a <b>Modificar sitio web</b> y edita la imagen Hero.

Para editar la imagen, selecciona el div en el cual se encuentra la imagen, busca la sección fondo y cambia la URL de la imagen por la siguiente. 

<img src="/assets/img/tutorials/optimize/edit.png" style="max-width: 650px;margin: auto 0;" alt="Edit the image using the sidebar options"/>

```html
https://cloud.modyocdn.com/uploads/8456879d-ea48-45e1-af25-be9de106cb5e/original/young_man.jpg
```
Se debe de ver algo así:

<img src="/assets/img/tutorials/optimize/editor.png" style="max-width: 650px;margin: auto 0;" alt="After editing, the image should have the new URL"/>

Guarda los cambios y haz click en <b>Hecho</b> para volver a la pantalla principal del experimento.

De vuelta en la pantalla de personalización, agrega <b>Segmentación por página</b>, haz click a personalizar, y selecciona <b>Parámetro UTM</b>

En la personalización cambia el dropdown de <code>es igual a</code> por <code>contiene</code> y el valor con <code>young_man</code>.

<img src="/assets/img/tutorials/optimize/utm.png" style="max-width: 650px;margin: auto 0;" alt="This image shows the Add a UTM parameter screen"/>

Haz click a <b>Agregar</b> y luego se tiene que vincular la cuenta de Google Analytics para la medición.

Para generar la medición en la Plataforma Modyo, en el menú lateral, selecciona **Channels** y haz click en **Sitios**. Haz click en tu **Sitio**. En la página que quieres modificar, se tiene que agregar el siguiente código al botón deseado:

```html
onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA Hero'});"
```

De esta manera se manda la informaciión de los clicks hacia Google Analytics.

## Paso 3: Iniciar

Para iniciar la prueba, es necesario comprobar la instalación y completar la configuración de Google Analytics y Google Optimize. Sigue los pasos en el portal de Google para continuar con la configuración.

Para iniciar la Personalización haz click en el botón <b>Iniciar</b> arriba a la derecha.

## Conclusiones

¡Felicidades! Has finalizado el tutorial de Personalización de Experiencias con Google Optimize.

Ahora puedes segmentar a tu audiencia y personalizar la experiencia dependiendo de su segmento asociado en Modyo Platform y Google Analytics.