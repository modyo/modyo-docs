---
search: true
---

# Creación y Publicación de Contenidos

## Introducción

Bienvenido al primer tutorial de la serie de entrenamiento de Modyo. En este primer tutorial crearás y publicarás contenido usando [Modyo Content](/es/platform/content), la herramienta Modyo para gestionar sitios dinámicos y multiplataforma.

### Dynamic Bank

Dynamic Bank es nuestra marca ficticia que creamos para usar en todos nuestros demos y tutoriales. Con Dynamic Bank puedes vivir la experiencia de construir productos digitales con Modyo.

Una vez que completes esta serie de tutoriales, tu proyecto debería lucir así:

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/home.png" style="border: 1px solid rgb(238, 238, 238);max-width: 300px;margin: auto 0;" alt="Dynamic Bank homepage"/>

<a href="https://www.figma.com/proto/jifcy8uqhsHdRzB78Oow6o/PD-Dynamic-Bank?page-id=808%3A0&node-id=808%3A1&viewport=694%2C507%2C0.23551106452941895&scaling=min-zoom" target="blank">Ver el diseño en Figma</a>

## Requisitos Previos

Solo es necesario tener una cuenta en Modyo y tener acceso a la plataforma. ¿No tienes una cuenta? Puedes solicitar una con el administrador de la plataforma en tu empresa, o solicita una prueba [aquí](https://platform.modyo.cloud/onboarding).

## Paso 1: Crear un Espacio

Una vez que ingreses a Modyo con tu cuenta, iremos al módulo de [Modyo Content](/es/platform/content) para crear nuestro primer [Espacio](/es/platform/content/spaces.html#crear-un-espacio). Un Espacio es donde agrupas tipos de contenido y las entradas de tus sitios.

Para crear tu Espacio, sigue estos pasos:

1. En el menú principal, selecciona **Content** y haz click en **Espacios**.
2. Haz click en **+ Nuevo Espacio**.
3. En la ventana de Nuevo Espacio llena los siguientes datos:
  - Nombre: **Bank**
  - Identificador: **bank**
  - Idioma por defecto: **Español (España)**
  - Reino del espacio: **Ninguno**
4. Haz click en **Crear**.


<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/new-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 200px;margin: auto 0px 20px 0px;" alt="+ New Space button"/>

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/create-space.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0;" alt="This image shows the Add a new Space screen"/>

## Paso 2: Crear tipo "Hero"

Crea tu primer [tipo de contenido](/es/platform/content/types.html#tipos-de-contenido) siguiendo estos pasos:

1. En la ventana de espacios, haz click en el espacio **Bank**.
2. Desde el menú principal, haz click en **Tipos**.
3. Haz click en **+ Nuevo Tipo** y llena los siguientes datos:
 
 - Nombre: Hero
 - Identificador: hero
 - Cardinalidad: Múltiple
   
<table>
 <tr>
  <th style="text-align: left">Tipo de campo</th>
  <th style="text-align: left">Nombre</th>
  <th style="text-align: left">Valores que permitiremos</th>
 </tr>
 <tr>
  <td>
   Archivo
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

4. En la ventana de la descripción de tipo de contenido, arrastra los ítems en el siguiente orden.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/hero.png" alt="This image shows the new entity type screen for the Hero type">

## Paso 3: Crear y publicar entrada del Tipo "Hero"

Para crear tu primera [entrada](/es/platform/content/entries) del tipo "Hero", sigue estos pasos:

1. En el menú principal, haz click en **Entradas**.
1. Haz click en **+ Nueva Entrada**.
1. Selecciona el tipo de contenido **Hero** y llena los siguientes valores:
 - Name: **_"Donde estés, Dynamic Bank te acompaña"_**
 - Identificador: dynamicbank_hero

4. Para el resto de los campos, usa los siguientes valores:

<table>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/bank-hero.jpg" style="max-width: 200px;margin: auto 0;" alt="The cover page for this entry"/>
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
   <code>#</code>
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

Al terminar, selecciona **Publicar ahora** y haz click en **[Publicar](/es/platform/content/entries.html#publicar-una-entrada)**.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/publish.png" style="border: 1px solid rgb(238, 238, 238);max-width: 400px;margin: auto 0px 30px 0px;" alt="The Publish Options screen"/>

:::tip ¡Muy bien! Ya conseguiste crear tu primer Tipo y Entrada con éxito
Ahora sigue los siguientes pasos para crear los Tipos y Entradas que necesitarás para futuros tutoriales.
:::

## Paso 4: Crear tipo "News"

Desde el menú principal devuelve a la sección de **Tipos**. Al igual que con el tipo "Hero" crea el tipo "News" considerando los siguientes campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Archivo
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

Dirigete a **Entradas** y crea las siguientes entradas para el tipo "News":

### Entrada Uno

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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_01.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news entries"/>
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
   <b>URL</b>
  </td>
  <td>
   URL de destino o #
  </td>
 </tr>
</table>

### Entrada Dos

<table>
 <tr>
  <td>
   <b>Name</b>
  </td>
  <td>
   Crédito Hipotecario
  </td>
 </tr>
 <tr>
  <td>
   <b>Cover</b>
  </td>
  <td>
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_02.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news 2 entries"/>
  </td>
 </tr>
 <tr>
  <td>
   <b>Text</b>
  </td>
  <td>
   Conoce todo lo que necesitas saber sobre cómo solicitar tu crédito hipotecario.
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
   <b>URL</b>
  </td>
  <td>
   URL de destino o #
  </td>
 </tr>
</table>

### Entrada Tres

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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/news_03.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for news 3 entries"/>
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
   <b>URL</b>
  </td>
  <td>
   URL de destino o #
  </td>
 </tr>
</table>

Al terminar cada entrada, selecciona **Publicar Ahora** y haz click en **Publicar**.

## Paso 6: Crear tipo "Benefits"

Siguiendo los mismos pasos, crea el tipo para "Benefits" con los campos:

<table>
 <tr>
  <th style="text-align: left">Field</th>
  <th style="text-align: left">Name</th>
 </tr>
 <tr>
  <td>
   Archivo
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

Las [categorías](/es/platform/content/entries.html#categorias) se utilizan para ordenar tu entradas. Para filtrar tus entradas de tipo "Benefits" crea las siguientes categorías.

1. Desde el menú principal, haz click en **Categories**.
2. Haz click en **+ Nueva Categoría** y crea las siguientes categorías:

- Gourmet
- Healthy
- Panoramas
- Shopping
- Travel

3. Haz click en **Guardar**.

> Tu ventana de categorías debe como la siguiente imagen.

<img src="/assets/img/tutorials/how-to-create-dynamicbank-content/categories.png" alt="This is how the categories screen should look like after adding the different categories.">

## Paso 8: Crear y publicar Beneficios

En el menú principal, haz click en **Entradas**. Crea las entradas de los Beneficios con los siguientes campos:

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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/mall.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for mall entries">
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gourmet.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for gourmet entries"/>
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/plane.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for plane entries"/>
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/kids.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for kids entries"/>
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/pills.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for pills entries"/>
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
   Healthy
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/cine.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for cinema entries"/>
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/gym.jpg" style="max-width: 200px;margin: auto 0;" alt="Cover page for gym entries"/>
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
   Healthy
  </td>
 </tr>
</table>

Al terminar cada entrada, selecciona **Publicar Ahora** y haz click en **Publicar**.

## Paso 9: Crear tipo "Testimonial"

Crear el último tipo para los testimoniales, para este tipo vas a necesitar los siguientes campos:

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
   Author
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
   Archivo
  </td>
  <td>
   Image
  </td>
 </tr>
</table>

## Paso 10: Crear y publicar Testimoniales

Crea dos entradas con los siguientes campos:

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
   <b>Author</b>
  </td>
  <td>
   Adriana Pérez
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/adriana.png" style="max-width: 100px;margin: auto 0;" alt="Cover page for testimony entries"/>
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
   Testimonio Raúl
  </td>
 </tr>
 <tr>
  <td>
   <b>Author</b>
  </td>
  <td>
   Raúl Díaz
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
   <img src="/assets/img/tutorials/how-to-create-dynamicbank-content/raul.png" style="max-width: 100px;margin: auto 0;" alt="Cover page for testimony 2 entries"/>
  </td>
 </tr>
</table>

> Recuerda publicar las entradas que has creado.

## Conclusión

¡Felicidades! Has conseguido utilizar [Modyo Content](/es/platform/content) con todo su potencial ya que utilizamos [Espacios](/es/platform/content/spaces), [Tipos](/es/platform/content/types), [Entradas](/es/platform/content/entries), y [Categorías](/es/platform/content/entries.html#categorias) para poder generar todo el contenido necesario para armar el Home de Dynamic Bank.

Ya tenemos todas nuestras entradas para poder desarrollar el Front-end y se pueda generar el Home de Dynamic Bank desde [Modyo Channels](/es/platform/channels) mientras que el contenido se cambia desde Modyo Content.

¿Qué sigue ahora? Gestionar todo este contenido desde un sitio Web creado en [Modyo Channels](/es/platform/channels).
