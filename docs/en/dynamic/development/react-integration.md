# React Usage

Develop interactive and engaging user experiences for Modyo applications with Dynamic Framework's pre-built React component collection.

Our components are designed to optimize development workflow and facilitate the creation of modern and scalable microfrontends.

Explore the complete catalog of React components and access detailed reference documentation in the [official Dynamic Framework documentation for React components.](https://react.dynamicframework.dev/)

### Getting Started with React Components

To start using React components, follow these steps:

1.  **Install the React base template**: Open the terminal and run the following command:

    ```shell
    npx @modyo/cli@latest get dynamic-react-base-template
    ```

    Check the [installation guide](https://dynamicbanking.co/docs/getting-started) to complete the project setup.

2.  **Access the component file**: Once the project is installed, open the `src/components/MyComponent.tsx` file.

3.  **Create the React component**: Replace the existing code in `MyComponent.tsx` with the following example to create a simple list component:

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

4.  **Run the project**: Start the development server with the `npm start` command.

### React Component Styling

Dynamic Framework simplifies React component styling through:

1.  **Component properties**: Many components offer properties to control their appearance (e.g. `color`, `size`). Check the Dynamic Framework React components documentation for more details. For example, you can modify a component's color palette by assigning a theme property:

    ```javascript
    <DListItem key={item} theme="primary">{item}</DListItem>
    ```

2.  **CSS classes**: Use Dynamic Framework CSS classes or custom CSS classes to directly style component elements.

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

    You can combine component properties with custom CSS classes. For more information, check the [component styling section](https://dynamicbanking.co/docs/styling-components).