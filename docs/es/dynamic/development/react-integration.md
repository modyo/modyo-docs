# Uso con React

Desarrolla experiencias de usuario interactivas y atractivas para las aplicaciones Modyo con la colección de componentes React preconstruidos de Dynamic Framework.

Nuestros componentes están diseñados para optimizar el flujo de trabajo de desarrollo y facilitar la creación de microfrontends modernos y escalables.

Explora el catálogo completo de componentes React y accede a la documentación de referencia detallada en la [documentación oficial de Dynamic Framework para componentes React.](https://react.dynamicframework.dev/)

### Primeros pasos con componentes React

Para comenzar a utilizar los componentes React, sigue estos pasos:

1.  **Instala la plantilla base de React**: Abre la terminal y ejecuta el siguiente comando:

    ```shell
    npx @modyo/cli@latest get dynamic-react-base-template
    ```

    Consulta la [guía de instalación](https://dynamicbanking.co/docs/getting-started) para completar la configuración del proyecto.

2.  **Accede al archivo del componente**: Una vez instalado el proyecto, abre el archivo `src/components/MyComponent.tsx`.

3.  **Crea el componente React**: Reemplaza el código existente en `MyComponent.tsx` con el siguiente ejemplo para crear un componente de lista simple:

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

4.  **Ejecuta el proyecto**: Inicia el servidor de desarrollo con el comando `npm start`.

### Estilización de componentes React

Dynamic Framework simplifica la estilización de los componentes React mediante:

1.  **Propiedades del componente**: Muchos componentes ofrecen propiedades para controlar su apariencia (ej. `color`, `size`). Consulta la documentación de componentes React de Dynamic Framework para más detalles. Por ejemplo, se puede modificar la paleta de colores de un componente asignando una propiedad de tema:

    ```javascript
    <DListItem key={item} theme="primary">{item}</DListItem>
    ```

2.  **Clases CSS**: Utiliza las clases CSS de Dynamic Framework o clases CSS personalizadas para estilizar directamente los elementos del componente.

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

    Puedes combinar las propiedades del componente con las clases CSS personalizadas. Para más información, consulta la sección de [estilización de componentes](https://dynamicbanking.co/docs/styling-components).