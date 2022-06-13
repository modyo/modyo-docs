---
search: true
---

# Financial Commons Storybook

Financial Commons is where you can find the library of components, directives, and filters to speed up the development of your applications.

To use this tool visit **[our Storybook](https://modyo.github.io/financial-commons/)**.

### Main menu

<img src="/assets/img/widgets/storybook/mainmenu.png" alt="Storybook's main menu">

When you select a component, a demo opens in the middle of the screen. In the top bar, you can choose between the following actions:

- Canvas: This is the default mode of storybook, an interactive demo where you control the properties from the **Controls** tab.
- Docs: The technical documentation of the selected component. You can see the following property information: **Name, Description, Default, Control**. Modifying the value in **Control** also modifies the canvas in real time.
- Zoom controls: Modify the zoom level of the viewport in Canvas mode.
- Background Color: Choose between different backgrounds: Light, White, and Dark.
- Grid in Preview: Activate this option to activate a grid in the background.
- Canvas Viewport: Select from the most popular mobile devices to modify the viewport size.
- Full screen: Activate the full screen on the Canvas.
- Open in New Tab: Open a new tab to this Canvas.
- Copy link to canvas: Copy the link to this Canvas to your clipboard.

### Keyboard shortcuts

<img src="/assets/img/widgets/storybook/shortcuts.png" alt="Shortcuts available in storybook">

## Import to Project

For this guide we'll use the **Stepper** component as an example. 

1. Open the Vue file where you want to import the component and copy the following code:

```js

import { MStepper } from '@modyo/financial-commons';

```

2. Register the component either locally or globally by copying the following code:

```js

{
  ...

  components: {
    MStepper
  },

  ...
}

```

3. Complete the implementation of the component in your application, for example to create a 4-step Stepper, copy the following:

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

For more information about this component and more, visit the [Stepper Component Storybook](https://modyo.github.io/financial-commons/?path=/docs/components-stepper--basic)