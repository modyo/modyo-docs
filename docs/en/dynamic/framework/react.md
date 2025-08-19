# Usage with React

Develop interactive and engaging user experiences for your Modyo applications with Dynamic Framework's robust collection of pre-built React components.

Our components are designed to optimize your development workflow and facilitate the creation of modern and scalable microfrontends.

Explore the complete catalog of React components and access detailed reference documentation in the [official Dynamic Framework React component documentation.](https://react.dynamicframework.dev/)

### Getting started with React components

To start using React components, follow these steps:

1.  **Install the React base template**: Open your terminal and run the following command:

    ```shell
    npx @modyo/cli@latest get dynamic-react-base-template
    ```

    Refer to the [installation guide](https://dynamicbanking.co/docs/getting-started) to complete the project setup.

2.  **Access the component file**: Once the project is installed, open the `src/components/MyComponent.tsx` file.

3.  **Create your React component**: Replace the existing code in `MyComponent.tsx` with the following example to create a simple list component:

    ```javascript
    import { DList, DListItem } from '@dynamic-framework/ui-react';

    export default function MyComponent() {
       	const items = ['Item 1', 'Item 2', 'Item 3'];
       	return (
       		<div id="my-component">
       			<DList>
       				{items.map((item) => (
       					<DListItem key={item} >{item}</DListItem>
       				))}
       			</DList>
       		</div>
       	);
    }
    ```

4.  **Run the project**: Start the development server with the command `npm start`.

### styling React components

Dynamic Framework simplifies the styling of your React components through:

1.  **Component properties**: Many components offer properties to control their appearance (e.g., `color`, `size`). Refer to the Dynamic Framework React component documentation for more details. For example, you can modify the color palette of a component by assigning a theme property:

    ```javascript
    <DListItem key={item} theme="primary">{item}</DListItem>
    ```

2.  **CSS classes**: Use Dynamic Framework's CSS classes or your own custom CSS to directly style the component elements.

    ```css
    :root {
    // --bs-danger-100: #45e031;
       	--custom-widget-text-color: #fff;
       	--custom-widget-background-color: #cb9832;
    }

    #my-component .list-group-item{
       	color: var(--custom-widget-text-color);
       	background-color: var(--custom-widget-background-color);
    }
    ```

    You can combine component properties with our custom CSS classes. For more information, refer to the [component styling](https://dynamicbanking.co/docs/styling-components) section.