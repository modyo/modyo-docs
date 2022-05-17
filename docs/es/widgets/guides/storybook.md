---
search: true
---

# Storybook de Financial Commons

Financial Commons es donde podrás encontrar la librería de componentes, directivas, y filtros para acelerar el desarrollo de tus aplicaciones.

Para hacer uso de esta herramienta visita **[nuestro Storybook](https://modyo.github.io/financial-commons/)**.

### Menu principal

<img src="/assets/img/widgets/storybook/mainmenu.png" alt="Storybook's main menu">

Al seleccionar un componente, se abre un demo en la parte central de la pantalla. En la barra superior, podrás elegir entre las siguientes acciones:

- Canvas: Este es el modo default de storybook, un demo interactivo en donde controlas las propiedades desde la pestaña de **Controles**.
- Docs: La documentación técnica del componente seleccionado. Puedes ver la siguiente información de las propiedades: **Nombre, Descripción, Default, Control**. Modificando el valor en **Control** también modifica al canvas en tiempo real.
- Controles de zoom: Modifica el nivel de zoom del viewport en modo Canvas.
- Color de fondo: Elige entre los diferentes fondos: Claro, Blanco, y Obscuro.
- Cuadricula en prevista: Activa esta opción para activar una cuadricula en el fondo.
- Viewport del canvas: Selecciona entre los dispositivos móviles más populares para modificar el tamaño del viewport.
- Pantalla completa: Activa la pantalla completa en el Canvas.
- Abrir en nueva pestaña: Abre una pestaña nueva a este Canvas.
- Copiar link a canvas: Copia a tu portapapeles el link hacia este Canvas.

### Keyboard shortcuts

<img src="/assets/img/widgets/storybook/shortcuts.png" alt="Shortcuts available in storybook">

## Importar a proyecto

Para esta guía usaremos como ejemplo el componente **Stepper**. 

1. Abre el archivo Vue donde quieres importar el componente y copia el siguiente código:

```js

import { MStepper } from '@modyo/financial-commons';

```

2. Registra el componente ya sea local o globalmente copiando el siguiente código:

```js

{
  ...

  components: {
    MStepper
  },

  ...
}

```

3. Completa la implementación del componente en tu aplicación, por ejemplo para crear un Stepper de 4 pasos, copia lo siguiente:

```js

<m-stepper
  ref="stepper"
  v-model="step"
  :steps="4" />

<button @click="$refs.stepper.previous()">
  Previous
</button>

<button @click="$refs.stepper.next()">
  Next
</button>

```

Para más información acerca de este componente y más, visita el [Storybook del componente Stepper](https://modyo.github.io/financial-commons/?path=/docs/components-stepper--basic)