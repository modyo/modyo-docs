---
search: true
---

# Tutorial Test A/B con Google Optimize

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

Una vez creada nuesta cuenta dentro de Optimize, vamos a hacer click en empezar para crear nuestra primera exprriencia, en la cual llenamos los campos correspondientes y a seleccionamos <b>Prueba A/B</b>.

<img src="/assets/img/tutorials/optimize/ab.png" style="max-width: 450px;margin: auto 0;"/>

Una vez ya creada nuestra experiencia, vamos a crear una variante, para esto vamos a cambiar el código del widget <b>APP</b> remplazando el código por el siguiente:

```html
<div class="bg-white" id="app_home">
	<div class="container py-5 position-relative">
		<div class="row justify-content-center align-items-center py-5 py-md-0">
			<div class="pattern_app"></div>
			<div class="col-12 col-md-4">
				<h4 class="h2 mb-3">DYNAMIC APP, <span class="font-weight-normal">take your bank everywhere</span></h4>
				<a href="#" onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA APP', 'value': 0});"><img src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png" alt="Download"></a>
			</div>
			<div class="col-12 col-md-4 d-none d-md-block test-a">
				<img src="https://cloud.modyocdn.com/uploads/a0de39ca-33aa-4790-b88e-492d2d665371/original/woman_app.png" alt="Woman App">
			</div>
			<div class="col-12 col-md-4 d-none d-md-none test-b">
				<img src="https://cloud.modyocdn.com/uploads/58a9628d-81c8-44b1-97a1-bd585c186931/original/app_bank.png" alt="App">
			</div>
		</div>
	</div>
</div>
```

Luego volvemos a Optimize y hacemos click en <b>Añadir variante</b> la cual llamaremos Cambio imagen.

<img src="/assets/img/tutorials/optimize/ab-variante.png" style="max-width: 750px;margin: auto 0;"/>

Y hacemos click en editar para hacer el cambio

<img src="/assets/img/tutorials/optimize/ab_variante.png" style="max-width: 750px;margin: auto 0;"/>

Cuando se abre el editor vamos al piso del widget de la APP y editamos el contenedor remplazando el código
 por el siguiente:

 ```html
<div class="row justify-content-center align-items-center py-5 py-md-0">
			<div class="pattern_app"></div>
			<div class="col-12 col-md-4">
				<h4 class="h2 mb-3">DYNAMIC APP, <span class="font-weight-normal">take your bank everywhere</span></h4>
				<a href="#" onclick="gtag('event', 'click', {'event_category': 'button', 'event_label': 'CTA APP', 'value': 1});"><img src="https://cloud.modyocdn.com/uploads/36e7b591-d60d-4312-b1ad-cd984533206a/original/download_app.png" alt="Download"></a>
			</div>
			<div class="col-12 col-md-4 d-none d-md-none test-a">
				<img src="https://cloud.modyocdn.com/uploads/a0de39ca-33aa-4790-b88e-492d2d665371/original/woman_app.png" alt="Woman App">
			</div>
			<div class="col-12 col-md-4 d-none d-md-block test-b">
				<img src="https://cloud.modyocdn.com/uploads/58a9628d-81c8-44b1-97a1-bd585c186931/original/app_bank.png" alt="App">
			</div>
		</div>
  ```
Luego <b>Guardamos</b> y hacemos click en <b>Hecho</b> para volver a la experiencia.

<img src="/assets/img/tutorials/optimize/50_50.png" style="max-width: 750px;margin: auto 0;"/>

Luego vinculamos nuestra cuenta de Google Analytics para la medición y definimos los objetivos de la Prueba.

Para definir el Obejtivo, vamos a utilizar el GA que le agregamos al botón de descarga, utilizando la Categoría <b>button</b> y la etiqueta <b>CTA APP</b>.

<img src="/assets/img/tutorials/optimize/objetivos.png" style="max-width: 750px;margin: auto 0;"/>

Guardamos el objetivo y iniciamos la prueba.

## Paso 3: Iniciar

Para inciciar la prueba vamos a ir a la parte de configuración abajo y y comprobar la que tengamos Google Analytics y el el script de Google Optimize en nuestro sitio.

Si no tenemos el los códigos, debemos agregarlo en el head de nuestro sitio dentro del modulo de Template y publicar los cambios.

Una vez que hayamos comprobado que la instalación esta bien vamos a iniciar la Persinacilzación haciendo clicl en el botón <b>Iniciar</b> arriba a la derecha.

## Conclusiones

¡Felicidades! Haz finalizado el curso de Test A/B con Google Optimize y estas listo para realizar Pruebas en tu sitio y mejorar la converción.