# Uso con React

Desarrolla experiencias de usuario interactivas y atractivas para aplicaciones Modyo con la colección de componentes React pre-construidos de Dynamic Framework.

Nuestros componentes están diseñados para optimizar el flujo de trabajo de desarrollo y facilitar la creación de microfrontends modernos y escalables.

Explora el catálogo completo de componentes React y accede a documentación de referencia detallada en el [Storybook oficial](https://react.dynamicframework.dev/).

### Comenzando con Componentes React

Para empezar a usar los componentes React, sigue estos pasos:

1.  **Instala la plantilla base de React**: Abre la terminal y ejecuta el siguiente comando:

    ```shell
    npx @modyo/cli@latest get dynamic-react-base-template
    ```

    Consulta la [guía de instalación](../getting-started/installation.html) para completar la configuración del proyecto.

2.  **Accede al archivo del componente**: Una vez instalado el proyecto, abre el archivo `src/components/MyComponent.tsx`.

3.  **Crea el componente React**: Reemplaza el código existente en `MyComponent.tsx` con el siguiente ejemplo para crear un componente de lista simple:

    ```tsx
    import { DListGroup, DListGroupItem } from '@dynamic-framework/ui-react';

    export default function MyComponent() {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      return (
        <div id="my-component">
          <DListGroup>
            {items.map((item) => (
              <DListGroupItem key={item}>{item}</DListGroupItem>
            ))}
          </DListGroup>
        </div>
      );
    }
    ```

4.  **Ejecuta el proyecto**: Inicia el servidor de desarrollo con el comando `npm start`.

### Estilos de Componentes React

Dynamic Framework simplifica el estilizado de componentes React a través de:

1.  **Propiedades del componente**: Muchos componentes ofrecen propiedades para controlar su apariencia (ej. `color`, `size`). Consulta el [Storybook](https://react.dynamicframework.dev) para más detalles. Por ejemplo, puedes modificar el color de un botón usando la propiedad `color`:

    ```tsx
    <DButton color="primary">Botón Primario</DButton>
    <DButton color="secondary">Botón Secundario</DButton>
    ```

2.  **Clases CSS**: Usa las clases CSS de Dynamic Framework o clases CSS personalizadas para estilizar directamente los elementos del componente.

    ```css
    :root {
      --custom-widget-text-color: #fff;
      --custom-widget-background-color: #cb9832;
    }

    #my-component .list-group-item {
      color: var(--custom-widget-text-color);
      background-color: var(--custom-widget-background-color);
    }
    ```

    Puedes combinar propiedades del componente con clases CSS personalizadas. Para más información, consulta la [sección de tematización](../customization/theming.html).
