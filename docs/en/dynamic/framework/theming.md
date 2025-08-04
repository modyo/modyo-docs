## Theming

**Theming in Dynamic Framework allows you to customize the appearance and style of your widgets to meet specific design requirements.**

Explore the basics of theme design, discover the available CSS variables (or tokens), and learn how to create your own theme.

Theming in Dynamic Framework involves establishing a set of styles that control the visual presentation of your widgets throughout your application. This promotes consistency in design elements such as colors, typography, spacing, and other visual aspects, ensuring a cohesive user experience.

**Overview of available CSS variables or tokens**

Dynamic Framework, like Bootstrap, uses CSS variables (often referred to as tokens) to streamline style customization in your user interfaces. This approach offers a powerful and efficient way to maintain a consistent visual language across all your applications.

CSS variables act as placeholders for values within your stylesheets. You can define a variable once and then reference it multiple times throughout your code. This reduces redundancy and facilitates style management and updates.

Dynamic Framework provides a comprehensive set of CSS variables that cover a wide range of styling aspects, including colors, typography, spacing, and more. [A detailed list of these variables can be found in the official Dynamic Framework documentation.](https://dynamicbanking.co/docs/variables-overview)

**Creating a theme in Modyo**

With Dynamic Framework integrated by default into every new Modyo application you create, creating custom themes is straightforward. Here's how to create your custom theme.

**1. Prepare your custom CSS**

Before working with theming in Dynamic Framework, make sure you have a custom CSS file ready to house your styles. You can follow Modyo's developer tips on [how to set up a custom CSS file](https://www.modyo.com/resources/community/developer-tips/customize-your-ui-in-modyo-con-modular-css).

2. Add HTML components

Once your custom CSS is ready, you can add any HTML component from Modyo's catalog to your application. Let's take this Hero component as an example:

```html
<section class="bg-white py-8 df-hero-component">
	<div class="container">
		<div class="row">
			<div class="col-lg-7 d-lg-flex mb-lg-4 align-items-center">
					<div>
						<span class="badge text-bg-light mb-2">Beneficios</span>
						<h2 class="h3 mb-4">Desbloquea la libertad financiera con Dynamic Bank</h2>
						<h5 class="fw-normal text-gray-500 mb-3">Potencia tu viaje hacia la riqueza con Dynamic Bank</h5>

						<div class="mt-4">
							<a href="" class="btn btn-primary btn-lg rounded-pill">Solicitar una demostración</a>
							<a href="" class="btn btn-link-secondary btn-lg rounded-pill">Solicitar una demostración</a>
						</div>
			</div>
			<div class="col-lg-5">
				<picture>
					<img class="mw-100 h-100 rounded-3" src="https://cdn.modyo.cloud/uploads/16ceb73d-4b61-4b8e-ad60-d572013ad8ea/original/Frame_33428.png">
				</picture>
			</div>
		</div>
	</div>
</section>
```

Note that we have added a `.df-hero-component` class to the `<section>` tag in our HTML to ensure styles are applied correctly.

3. Define custom CSS variables

Now, let's add custom CSS variables to your stylesheet to adapt the appearance of this component:

```css
:root {
	--df-hero-background-color: #f0f0f0;
	--df-hero-font-family: monospace;
	--df-hero-button-background-color: #ff5722;
	--df-hero-button-text-color: #fff;
}
```

4. Apply custom styles

Now that CSS variables are available, you can apply them to the component using CSS rules. Add this code to the same stylesheet:

```css
.df-hero-component {
	background-color: var(--df-hero-background-color);
	color: var(--df-hero-text-color);
	font-family: var(--df-hero-font-family);
}

.df-hero-component .btn-primary {
	background-color: var(--df-hero-button-background-color);
	color: var(--df-hero-button-text-color);
}
```

5. Continue customizing

To make additional modifications or create more complex themes, simply add additional CSS rules to your custom stylesheet. This approach allows you to maintain full control over the visual presentation of your Modyo applications while leveraging the power and flexibility of Dynamic Framework.

* * *

Creating a custom theme for a widget

Although the section on creating a theme in Modyo addressed applying styles across your entire application, theming individual widgets requires a slightly different approach.

Creating a theme for your widgets can help make your application more modular and easier to maintain. Keep in mind that the global CSS styles you define might inadvertently affect the behavior of your individual widget's CSS. In some cases, you may need to employ higher CSS specificity to ensure your styles are applied correctly.

You have two main options for creating themes for your widgets:

1.  **Global CSS in your application:** Define your theme within your site's main CSS file. This is a straightforward approach, but it might require using more specific selectors to target widget elements.

2.  **Embedded in React CSS:** If your widget is a React application, you can embed the theme directly in its CSS file. This provides a more encapsulated and modular way to style your widget.

Keep in mind that React components in Dynamic Framework have their own set of predefined custom properties. You can leverage these properties to customize the appearance and behavior of your widgets. [Refer to the component documentation for a detailed list of available properties.](https://dynamicbanking.co/components)

Example: Creating a themed component

Suppose you have a React project set up using the Dynamic Framework installation process [detailed in the documentation](https://dynamicframework.dev/docs/getting-started).

1.  **Navigate to your component:** Open the `src/components/myComponent.tsx` file.
2.  **Replace the code:** Replace the existing code with the List component:

    ```javascript
    import { DList, DListItem } from '@dynamic-framework/ui-react';

    export default function MyComponent() {
       	const items = ['Item 1', 'Item 2', 'Item 3'];
       	return (
       		<div id="my-component">
       			<DList>
       				{items.map((item) => (
       					<DListItem key={item}>{item}</DListItem>
       				))}
       			</DList>
       		</div>
       	);
    }
    ```

Note the addition of the `id="my-component"` attribute to the wrapping div. This will improve CSS specificity for styling.

3.  **Define your custom variables:** Add the following CSS variables to your `styles/base.css` file (or your main site CSS file):

    ```css
    :root {
       	--custom-widget-text-color: #fff;
       	--custom-widget-background-color: #4848b7;
    }

    #my-component .list-group-item{
       	color: var(--custom-widget-text-color);
       	background-color: var(--custom-widget-background-color);
    }
    ```

You can create complex custom themes for your widgets by mixing CSS variables, component properties, and Bootstrap classes.

Remember that you can always add more CSS rules to your stylesheet to further customize the appearance and behavior of your widget.