---
search: true
---

# Realizar Test A/B con Google Optimize

## Introducción

Bienvenido a un nuevo tutorial de Modyo. En este tutorial, nos vamos a enfocar en [Modyo Channels](/es/platform/channels) y Google Optimize para realizar una Prueba A/B en un widget, ya que queremos mejorar la conversión y el equipo ficticio cree que humanizando el banner mejorará, por esto vamos a tener un banner con un mockup de un celular, y otro con una persona.

<code>Test A</code>
<img src="/assets/img/tutorials/optimize/testa.png" style="max-width: 450px;margin: auto 0;"/>

<code>Test B</code>
<img src="/assets/img/tutorials/optimize/testb.png" style="max-width: 450px;margin: auto 0;"/>

## Requisitos Previos

Para ejecutar el tutorial necesitamos un sitio en Modyo con el Home de Dynamic Bank, un widget en la plataforma (en nuestro caso **APP**), tener una cuenta en Google Optimize, y Google Analytics Universal.

## Paso 1: Crear Espacio en Optimize

Lo primero que se tiene que hacer es crear una cuenta dentro de [Optimize](https://optimize.google.com/) dando click a <b>Crear cuenta</b>.

<img src="/assets/img/tutorials/optimize/crear-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

Llena los campos, acepta las condiciones, y pasa al siguiente paso.

<img src="/assets/img/tutorials/optimize/modal-cuenta.png" style="max-width: 450px;margin: auto 0;"/>

Luego de completar los pasos, haz click en <b>Crear</b>.

## Paso 2: Crear experiencia

Una vez creada la cuenta dentro de Optimize, haz click en empezar para crear la primera experiencia, llena los campos correspondientes, y a selecciona <b>Prueba A/B</b>.

<img src="/assets/img/tutorials/optimize/ab.png" style="max-width: 450px;margin: auto 0;"/>

Una vez creada la experiencia, crea una variante, en vez del código del widget <b>APP</b> normal,  reemplazalo con el código por el siguiente:

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

En el menú de Google Optimize, haz click en <b>Añadir variante</b> la cual llamaremos <code>Cambio imagen</code>.

<img src="/assets/img/tutorials/optimize/ab-variante.png" style="max-width: 750px;margin: auto 0;"/>

Haz click en editar para hacer el cambio:

<img src="/assets/img/tutorials/optimize/ab_variante.png" style="max-width: 750px;margin: auto 0;"/>

Cuando se abre el editor vamos al piso del widget de la APP y reemplazamos de la línea 2 (el div container) en adelante por lo siguiente:

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
<b>Guarda</b> y haz click en <b>Hecho</b> para volver a la experiencia.

<img src="/assets/img/tutorials/optimize/50_50.png" style="max-width: 750px;margin: auto 0;"/>

Se tiene que vincular nuestra cuenta de Google Analytics para la medición y definir los objetivos de la Prueba.

Para definir el Objetivo, se utiliza Google Analytics en el botón de descarga, con Categoría <b>button</b> y la etiqueta <b>CTA APP</b>.

<img src="/assets/img/tutorials/optimize/objetivos.png" style="max-width: 750px;margin: auto 0;"/>

Guarda el objetivo e inicia la prueba.

## Paso 3: Iniciar

Para iniciar la prueba ve a configuración y comprueba la instalación, va a indicar si tienes el código de Google Analytics y Google Optimize en tu sitio. De lo contrario, sigue los pasos en Google Analytics y Google Optimize para completar tu configuración.

Al terminar la instalación, inicia la Personalización haciendo click en el botón <b>Iniciar</b> arriba a la derecha.

## Conclusiones

¡Felicidades! Has finalizado el tutorial de Test A/B con Google Optimize y estás listo para realizar Pruebas en tu sitio y mejorar la conversión. Al tener estadísticas de uso, se podrán ver desde el menú de Google Optimize.

<img src="/assets/img/tutorials/optimize/analytics.png" style="max-width: 750px;margin: auto 0;"/>