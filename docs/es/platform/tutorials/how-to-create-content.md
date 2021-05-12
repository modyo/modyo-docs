---
search: true
---

# Creación y Publicación de Contenidos

## Introducción

Bienvenido al primer tutorial de la serie de entrenamiento de Modyo. En este primer tutorial revisaremos todo lo que necesitas saber para crear y publicar contenido mediante usando [Modyo Content](/es/platform/content), el cual usaremos más adelante en los siguientes tutoriales para construir un completo sitio Web.

Crear contenido es la funcionalidad más importante a la hora de tener sitios dinámicos y poder disponibilizar estos en diversos dispositivos. A lo largo de este tutorial (y otros tutoriales también) usaremos la marca ficticia "Dynamic Bank", la cual te introducimos a continuación.

### Dynamic Bank

Dynamic Bank es el nombre que le damos en Modyo a todo lo referente a demos y ejemplo de la plataforma. Quisimos crearlo para poder ofrecer uan experiencia muy cercana a la realidad de lo que significa realmente trabajar con Modyo. Una vez que completes la serie de tutoriales tu proyecto debería lucir así:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;"/>

<a href="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" target="blank">Ver imagen ampliada</a>

## Requisitos Previos

Para ejecutar los pasos de este tutorial debes contar solamente con una cuenta activa en Modyo, además de tener algunos conocimientos muy básicos de HTML. Como este es el primer tutorial de la serie, no necesitas haber completado ninguno antes de comenzar.

¿No tienes una cuenta en Modyo? Contacta al administrador de sistemas a cargo de la plataforma en tu empresa, o puedes crear una cuenta de pruebas sólo para tí desde [aquí](https://platform.modyo.cloud/onboarding).

## Paso 1: Crear un espacio de contenidos

Al ingresar a Modyo debemos entrar al modulo de [Modyo Content](/es/platform/content) para poder crear nuestro primer espacio, el cual llamaremos "Bank" y selecionamos Español(España) como idioma.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/create-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;"/>

## Paso 2: Crear tipo "Hero"

Una vez creado el espacio "Bank" debes ir al menu "Types" y generamos nuestro primero Tipo llamado "Hero" con los siguientes campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
  <th style="text-align: left">Allowed values</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Text
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Title Link
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Url
  </td>
  <td></td>
 </tr>
 <tr>
  <td>
   Dropdown
  </td>
  <td>
   Button color<br>
  </td>
  <td>
    *primary<br>
    secondary</small>
  </td>
 </tr>
</table>

![Type Hero](/assets/img/tutorials/how-to-create-dynamicbank-content/hero.png)

:::warning Atención
Es importante guardar los cambios antes de salir.
:::

## Paso 3: Crear y publicar entrada del Tipo "Hero"

Para crear nuestra primera [entrada](/es/platform/content/entries) debemos ir a la sección Entries y hacer click en el botón "New Entry", para luego selecionar el tipo "Hero" y agregar en Name "Donde estes, Dynamic Bank te acompaña".

Una vez creada completamos los siguientes campos:

<table>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/bank-hero.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Para lo que necesites estamos contigo a todos lados
  </td>
 </tr>
 <tr> 
  <td>
   <b>Title Link</b>
  </td>
  <td>
   Hazte cliente
  </td>
 </tr>
 <tr> 
  <td>
   <b>Url</b>
  </td>
  <td>
   url de destino o #
  </td>
 </tr>
 <tr> 
  <td>
   <b>Button color</b>
  </td>
  <td>
   primary
  </td>
 </tr>
</table>

Luego de editar el contenido debemos guardar y [publicar](/es/platform/content/entries.html#publicar-una-entrada).

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/publish.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0px 30px 0px;"/>

:::tip ¡Muy bien! ya conseguiste crear tu primer Tipo y Entrada con éxito
Ahora crearemos el resto de los Tipos y Entradas que necesitamos para este tutorial.
:::

## Paso 4: Crear tipo "News"

Al igual que con el tipo "Hero" vamos a crear nuestro segundo tipo "News" considerando los siguientes campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Excerpt
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Link
  </td>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Url
  </td>
 </tr>
</table>

## Paso 5: Crear y publicar News

Al igual que lo hizimos con el Hero, ahora crearemos las tres entrada para news con los siguientes campos:

#### Entrada Uno

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Sucursales operativas
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_01.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Encuentra tu sucursal más cercana para que no te des paseos de más.
  </td>
 </tr>
 <tr> 
  <td>
   <b>Link</b>
  </td>
  <td>
   Revisar sucursales
  </td>
 </tr>
 <tr> 
  <td>
   <b>Url</b>
  </td>
  <td>
   url de destino o #
  </td>
 </tr>
</table>

#### Entrada Dos

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Credito Hipotecario
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_02.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Conoce todo lo que necesitas saber sobre como solicitar tu crédito hipotecario.
  </td>
 </tr>
 <tr> 
  <td>
   <b>Link</b>
  </td>
  <td>
   Conocer más
  </td>
 </tr>
 <tr> 
  <td>
   <b>Url</b>
  </td>
  <td>
   url de destino o #
  </td>
 </tr>
</table>

#### Entrada Tres

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Miércoles Gourmet
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_03.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   40% dcto. todos los miércoles en los mejores restaurantes con despacho a domicilio.
  </td>
 </tr>
 <tr> 
  <td>
   <b>Link</b>
  </td>
  <td>
   Ver beneficios
  </td>
 </tr>
 <tr> 
  <td>
   <b>Url</b>
  </td>
  <td>
   url de destino o #
  </td>
 </tr>
</table>

No olvides publicar todas tus entradas luego de crearlas.

## Paso 6: Crear tipo "Benefists"

Al igual que ya hicimos con Hero y News, debemos crear nuestro nuevo tipo para Beneficios con los campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Asset
  </td>
  <td>
   Cover
  </td>
 </tr>
 <tr>
  <td>
   Multiline text
  </td>
  <td>
   Excerpt
  </td>
 </tr>
</table>

## Paso 7: Crear Categorías

Ahora pondremos un poco más de órden creando categorías para poder filtrar nuestros beneficios.

Para ello iremos a la sección Categories y creamos las siguentes categorias:

- Gourmet
- Healthy
- Panoramas
- Shopping
- Travel

![Type](/assets/img/tutorials/how-to-create-dynamicbank-content/categories.png)

## Paso 8: Crear y publicar Beneficios

Para los Beneficios vamos a crear siete entrada con los siguientes campos:

#### Beneficio Uno

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Master Card
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/mall.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% usando tu tarjeta en Miami.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Travel
  </td>
 </tr>
</table>

#### Beneficio Dos

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Seafood Restaurant
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gourmet.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% en el total de la cuenta.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Gourmet
  </td>
 </tr>
</table>

#### Beneficio Tres

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic AIR
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/plane.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   30% en vuelos al extranjero.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Travel
  </td>
 </tr>
</table>

#### Beneficio Cuatro

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Kids clothes
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/kids.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   2x1 por todo el mes.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Shopping
  </td>
 </tr>
</table>

#### Beneficio Cinco

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic AID
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/pills.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   15% todos los lunes.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Healty
  </td>
 </tr>
</table>

#### Beneficio Seis

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic Cinema
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/cine.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   40% en entradas los viernes.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Panorama
  </td>
 </tr>
</table>

#### Beneficio Siete

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Dynamic FIT
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gym.jpg" style="max-width: 200px;margin: auto 0;"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Excerpt</b>
  </td>
  <td>
   20% en plan anual.
  </td>
 </tr>
 <tr>
  <td>
   <b>Categoría</b>
  </td>
  <td>
   Healty
  </td>
 </tr>
</table>

No olvides publicar todas tus entradas luego de crearlas.

## Paso 9: Crear tipo "Testimonial"

Ahora vamos a crear nuestro último tipo para los testimoniales del sitio, para este tipo vamos a necesitar los siguientes campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Single line text
  </td>
  <td>
   Autor
  </td>
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
</table>

## Paso 10: Crear y publicar Testimoniales

Crear dos entrada con los siguientes campos:

#### Testimonio Uno

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Testimonio Adriana
  </td>
 </tr>
 <tr>
  <td>
   <b>Autor</b>
  </td>
  <td>
   Adriana Perez
  </td>
 </tr>
 <tr>
  <td>
   <b>Testimony</b>
  </td>
  <td>
   Me siento muy bien con Dynamic Bank, porque me dieron la oportunidad de crecer como comerciante y tengo otros proyectos en mente para seguir creciendo.
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/adriana.png" style="max-width: 100px;margin: auto 0;"/>
  </td>
 </tr>
</table>

#### Testimonio Dos

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Testimonio Raul
  </td>
 </tr>
 <tr>
  <td>
   <b>Autor</b>
  </td>
  <td>
   Raul Díaz
  </td>
 </tr>
 <tr>
  <td>
   <b>Testimony</b>
  </td>
  <td>
   Me acerqué a Dynamic Bank, obtuve mi crédito y ya estoy solicitando el tercero. De verdad le doy gracias por confiar en mí
  </td>
 </tr>
 <tr>
  <td>
   <b>Image</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/raul.png" style="max-width: 100px;margin: auto 0;"/>
  </td>
 </tr>
</table>

No olvides publicar todas tus entradas luego de crearlas.

## Conclusión

Si llegaste hasta acá te felicitamos. Has conseguido utilizar [Modyo Content](/es/platform/content) con todo su potencial ya que utilizamos [Espacios](/es/platform/content/spaces), [Tipos](/es/platform/content/types), [Entradas](/es/platform/content/entries) y [Categorías](/es/platform/content/entries.html#categorias) para poder generar todo el contenido necesarios para armar el Home de Dynamic Bank.

Ya tenemos todas nuestras entradas para poder entregarlas al Front-end y el pueda generar el Home de Dynamic Bank sin problemas mientras nosotros podemos cambiar los textos desde contenido.

¿Qué sigue ahora? Obtener todo este contenido desde un sitio Web creado en [Modyo Channels](/es/platform/channels).
