---
search: true
---

# Crear un sitio utilizando el template minimal

## Introducción

Te damos la bienvenida a un nuevo tutorial de la serie de entrenamiento de Modyo. Este tutorial se enfoca en la creación de un sitio utilizando los componentes ya creados del template Minimal.

## Requisitos Previos

Necesitas tener conocimientos de:

- HTML
- CSS
- La plataforma Modyo

## Paso 1: Crear sitio en Modyo

Dentro de nuestra cuenta de Modyo lo pimero que vamos a hacer es crear nuestro nuevo sitio: 

1. Desde el menu lateral, expande <b>Channels</b> y haz click en <b>Sites</b>. 
2. Haz click en <b>+ New Site</b> y llenamos los valores:

<img src="/assets/img/tutorials/create-site-from-minimal/new-site.png" style="max-width: 500px;margin: auto 0;"/>

## Paso 2: Copiar código de ejemplos en el Home 

Dentro del Minimal tenemos algunos ejemplos de código pre hecho para acelerar el desarrollo. 

En este caso utilizaremos el <b>Hero</b> copiando el código con botón <b>Copy to clipboard</b> y pegando código código en un widget HTML en el Home que llamaremos Hero.

<img src="/assets/img/tutorials/create-site-from-minimal/hero.png" style="max-width: 500px;margin: auto 0;"/>

Luego apretamos preview para ir viendo nuestro Home y repetimos el proceso con las los ejemplos de Text and image block, Cards y Testimonial, lo que nos dará como resultado 4 widgets de esta manera:

<img src="/assets/img/tutorials/create-site-from-minimal/widgets.png" style="max-width: 500px;margin: auto 0;"/>

Y un sitio así en el preview:

<img src="/assets/img/tutorials/create-site-from-minimal/site.png" style="max-width: 500px;margin: auto 0;"/>

## Paso 3: Agregar titulos

Para agregar títulos a nuestros pisos, vamos a agregar un nuevo widget de html y lo posicionamos entre los widgets de Hero y Text and image y otro entre los widgets Text and image y Cards.
 
En este nuevo widget pegaremos el siguiente código:

```html
<div class="mt-5 pt-5 mb-5 text-center">
	<h2 class="font-weight-bold">Lorem ipsum dolor sit amet</h2>
	<p>Consectetur adipiscing elit. Integer sapien ante, efficitur in ante vitae, gravida tincidunt mauris.</p>
</div>
```

Nuestro testimonial no tendrá título pero sí debemos separar el piso y para esto le agregamos una clase mt-5 al primer div que tiene el widget.

## Paso 4: Crear Space y Types

Ahora que ya tenemos un sitio con cuatro bloques, debemos llenarlo de contenido, para lo que utilizaremos la aplicación de contenidos de Modyo, generando cuatro Tipos de contenidos; Hero, Text and image, Cards y Testimonial.
 
Para esto vamos a ir a la cuenta de Modyo haciendo click en el logo arriba a la izquierda, luego entramos a Content Spaces, y con el botón de la derecha creamos un nuevo Space:

<img src="/assets/img/tutorials/create-site-from-minimal/space.png" style="max-width: 500px;margin: auto 0;"/>

En el cual vamos a crear cuatro Tipos:

<table>
 <tr>
  <th style="text-align: left">Nombre</th>
  <th style="text-align: left">Cardinality</th>
 </tr>
 <tr>
  <td>
   Hero
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Text image block
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Cards
  </td>
  <td>
   Multiple
  </td>
 </tr>
 <tr>
  <td>
   Testimony
  </td>
  <td>
   Single
  </td>
 </tr>
</table>

Para crear el primero vamos a ir a nuestro Space y hacemos click en <b>New Type</b> y seleccionamos lo que tenemos en la tabla de arriba.

Y agregamos los campos para cada Type

#### Hero 

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Description
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button text
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button link
  </td>
 </tr>
</table>

#### Text image block 

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Description
  </td>
 </tr>
</table>

#### Cards

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Description
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button text
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Button link
  </td>
 </tr>
</table>

#### Testimony

<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Testimony
  </td>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Image
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Name
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Subtext
  </td>
 </tr>
</table>

## Paso 5: Crear Contenidos

Una vez creados los Types estamos listos para crear el contenido, para esto, dentro del Space hacemos click en el menú lateral <b>Entries</b> y apretamos el botón <b>New Entry</b>, seleccionamos el Type <b>Hero</b> y en Name utilizaremos un texto genérico a modo de ejemplo.
 
<img src="/assets/img/tutorials/create-site-from-minimal/new_hero.png" style="max-width: 500px;margin: auto 0;"/>
 
y llenamos los siguientes campos +

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Lorem ipsum dolor sit amet
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/hero_01.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Maecenas a mauris dapibus, sodales massa in, eleifend nisl. Suspendisse facilisis ante nec malesuada tempus. Nulla varius diam lorem, mollis condimentum leo semper quis. Donec lobortis, mi quis tristique commodo.
  </td>
 </tr>
 <tr>
  <td>
   Button text
  </td>
  <td>
   Learn more
  </td>
 </tr>
 <tr>
  <td>
   Button link
  </td>
  <td>
   #
  </td>
 </tr>
</table>

Luego de tener todos los campos, guardamos, publicamos la entrada y en los puntos al lado del botón para publicar la clonamos la entrada y cambiamos los siguientes campos:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Morbi feugiat tortor quis massa facilisis
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/hero_02.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
</table>

Luego guardamos y publicamos.

Una vez terminado el proceso con los dos Heros de nuestro sitio, vamos a repetir el proceso para los otros types, partiremos con el de <b>Text image block</b> y repetimos con los otros Types.

#### Text image block

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Etiam viverra lorem non diam fermentum iaculis
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/img_01.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Ut non orci eget mauris efficitur sodales sit amet in purus. Aenean vel magna dui. Fusce iaculis porttitor turpis at consectetur.
  </td>
 </tr>
</table>

Clonamos la entrada y cambiamos los campos:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Curabitur ultricies ullamcorper ligula
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/img_02.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
</table>

#### Cards

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Praesent ac mi
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_01.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   Description
  </td>
  <td>
   Eu nisl porttitor ullamcorper vel eu mi
  </td>
 </tr>
 <tr>
  <td>
   Button text
  </td>
  <td>
   Learn more
  </td>
 </tr>
 <tr>
  <td>
   Button link
  </td>
  <td>
   #
  </td>
 </tr>
</table>

Nuevamente clonamos las entradas del tipo Cards y cambiamos los campos:

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Mauris in dui
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_02.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
</table>
<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Tincidunt ex dictum
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/card_03.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
</table>

#### Testimony

<table>
 <tr>
  <th style="text-align: left">Campo</th>
  <th style="text-align: left">Valor</th>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Testomony
  </td>
 </tr>
 <tr>
  <td>
   Testimony
  </td>
  <td>
   Nulla eget justo consectetur, sagittis orci nec, tempus justo. Aliquam vel libero et ex.
  </td>
 </tr>
 <tr>
  <td>
   Image
  </td>
  <td>
   <img src="/assets/img/tutorials/create-site-from-minimal/avatars.jpg" style="max-width: 300px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   Name
  </td>
  <td>
   Hannah Smith 
  </td>
 </tr>
 <tr>
  <td>
   Subtext
  </td>
  <td>
   Product Designer
  </td>
 </tr>
</table>

No olvides publicar todas las entradas, y recuerda que seleccionando el checkbox puedes publicar todas al mismo tiempo con las <b>Bulk Actions</b>.

Al finalizar tendremos una vista así:

<img src="/assets/img/tutorials/create-site-from-minimal/entries.png" style="max-width: 600px;margin: auto 0;"/>

## Paso 6: Connectar nuestro Sitio con Content

Para realizar esta parte vamos a volver a nuestro sitio y hacer llamados con liquid hacia nuestro contenido.

Por lo que vamos a reemplazar nuestro código por el siguiente

#### Hero

```html
{% assign entries = spaces['my-space'].types['hero'].entries | paginated: 2 %}
<div id="exampleHero" class="carousel slide hero_slide" data-ride="carousel">
	<div class="carousel-inner">
		{% for entry in entries %}
		<div class="carousel-item {% if forloop.first %}active{% endif %}">
			<div class="row align-items-center">
				<div class="col-6">
					<h2 class="display-4 font-weight-bold">{{entry.meta['name']}}</h2>
					<p class="lead">{{entry.fields['description']}}</p>
					<a class="btn btn-primary" href="{{entry.fields['Button link']}}" role="button">{{entry.fields['Button text']}}</a>
				</div>
				<div class="col-6">
					<a class="carousel-control-prev" href="#exampleHero" role="button" data-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous slide</span>
					</a>
					<a class="carousel-control-next" href="#exampleHero" role="button" data-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next slide</span>
					</a>
					<figure class="overflow-hidden rounded m-0 my-2">
						<img src="{{entry.fields['image'].url}}" alt="People working at a table">
					</figure>
				</div>
			</div>
		</div>
		{% endfor %}
	</div>
</div>
```

#### Text and image

```html
{% assign entries = spaces['my-space'].types['text-image-block'].entries | paginated: 2 %}
<div>
	{% for entry in entries %}
	<div class="row d-flex justify-content-center align-items-center mb-4">
		<div class="col-12 col-md-4 {% if forloop.last %}order-2 order-md-1{% endif %}">	
			<figure class="m-0">	
				<img src="{{entry.fields['Image'].url}}" alt="People working" class="rounded shadow">	
			</figure>	
		</div>	
		<div class="col-12 col-md-6 py-3 {% if forloop.first %}order-1 order-md-2{% endif %}">	
			<h3 class="font-weight-bold">{{entry.meta['name']}}</h3>	
			<p>{{entry.fields['Description']}}</p>	
		</div>	
	</div>
	{% endfor %}
</div>
```

#### Cards

```html
{% assign entries = spaces['my-space'].types['cards'].entries | paginated: 3 %}
<div class="row">
	{% for entry in entries %}
	<div class="col-12 col-md-4">
		<div class="card border rounded overflow-hidden">
			<figure class="m-0">
				<img src="{{entry.fields['Image'].url}}" alt="People working at a table">
			</figure>
			<figcaption class="card-body">
				<h3 class="h5 card-title font-weight-bold">{{entry.meta['name']}}</h3>
				<p class="card-text">{{entry.fields['Description']}}</p>
				<a href="{{entry.fields['Button link']}}" class="btn btn-primary">{{entry.fields['Button text']}}</a>
			</figcaption>
		</div>
	</div>
	{% endfor %}
</div>
```
#### Testimony

```html
{% assign testimony = spaces['my-space'].types['testimony'].entry %}
<div class="quote py-5 mt-5">
	<div class="d-flex justify-content-center">	
		<span class="text-primary d-flex justify-content-center align-items-center">	
			<svg
					 width="70"
					 height="70"
					 viewBox="0 0 30 30"
					 fill="none"
					 xmlns="http://www.w3.org/2000/svg"
					 >	
				<path d="m29.448298,27.368956l0,-12l-8,0c0,-4.41 3.586,-8 8,-8l0,-4c-6.617,0 -12,5.383 -12,12l0,12l12,0z" fill="currentColor" />	
				<path d="m12.606922,27.368956l0,-12l-8,0c0,-4.41 3.586,-8 8,-8l0,-4c-6.617,0 -12,5.383 -12,12l0,12l12,0z" fill="currentColor" />	
			</svg>	
		</span>	
	</div>	
	<div class="pt-4">	
		<h3 class="text-dark h1 m-0 font-weight-bold text-center">{{testimony.fields.testimony}}</h3>	
		<hr class="my-5 col-3">	
		<figure class="mx-auto rounded-circle overflow-hidden border border-light" style="width: 50px;">	
			<img src="{{testimony.fields['image'].url}}" alt="{{testimony.fields['Name']}} Avatar">
		</figure>	
		<h4 class="m-0 text-center">{{testimony.fields['Name']}}</h4>	
		<small class="d-block text-muted text-center">{{testimony.fields['Subtext']}}</small>	
	</div>	
</div>	
```

Luego de que previsualizamos nuestros cambios y estamos conformes con el resultado publicamos nuestro Home.

## Conclusiones

¡Felicidades! Haz creado tu primer sitio creado directo desde la plantilla Minimal y conectado a Content.
 
Encuentra más información sobre Modyo:
- [Modyo Channels](/es/platform/channels)
- [Sitios](/es/platform/sites)
- [Pages](/es/platform/channels/pages)
- [Modyo Content](/es/platform/content)
- [Espacios](/es/platform/content/spaces)
- [Tipos de contenido](/es/platform/types)
- [Entradas](/es/platform/types/entries)
