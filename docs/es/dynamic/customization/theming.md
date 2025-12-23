# Theming

**La personalización de temas en Dynamic Framework permite adaptar la apariencia y el estilo de los widgets a requisitos de diseño específicos.**

Explora los conceptos básicos del diseño de temas, las variables CSS (o tokens) disponibles y aprende a crear tu propio tema.

La gestión de temas en Dynamic Framework implica establecer un conjunto de estilos que controlan la apariencia visual de los widgets en toda la aplicación. Esto promueve la coherencia en elementos de diseño como colores, tipografía, espaciado y otros aspectos visuales, asegurando una experiencia de usuario cohesiva.

**Descripción general de las variables o tokens CSS disponibles**

Dynamic Framework, al igual que Bootstrap, utiliza variables CSS (o tokens) para optimizar la personalización de estilos en las interfaces de usuario. Este enfoque ofrece una forma potente y eficiente de mantener un lenguaje visual coherente en todas las aplicaciones.

Las variables CSS actúan como marcadores de posición para los valores dentro de las hojas de estilo. Se puede definir una variable una vez y luego referenciarla múltiples veces en el código, lo que reduce la redundancia y facilita la gestión y actualización de los estilos.

Dynamic Framework proporciona un conjunto completo de variables CSS que cubren una amplia gama de aspectos de estilo, incluidos colores, tipografía, espaciado y más. Puedes encontrar una lista detallada de estas variables en el [Storybook](https://react.dynamicframework.dev).

**Creación de un tema en Modyo**

Con Dynamic Framework integrado por defecto en cada nueva aplicación de Modyo, la creación de temas personalizados resulta sencilla. A continuación, se explica cómo crear tu tema personalizado.

**1\. Prepara tu CSS personalizado**

Antes de trabajar con la tematización en Dynamic Framework, asegúrate de tener un archivo CSS personalizado listo para albergar tus estilos.

### Agrega componentes HTML

Una vez que tu CSS personalizado esté listo, puedes agregar cualquier componente HTML del catálogo de Modyo a tu aplicación. Tomemos este componente Hero como ejemplo:

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

Ten en cuenta que hemos agregado una clase `.df-hero-component` a la etiqueta `<section>` en nuestro HTML para garantizar que los estilos se apliquen correctamente.

### Define variables CSS personalizadas

Ahora, agreguemos variables CSS personalizadas a tu hoja de estilo para adaptar la apariencia de este componente:

```css
:root {
	--df-hero-background-color: #f0f0f0;
	--df-hero-font-family: monospace;
	--df-hero-button-background-color: #ff5722;
	--df-hero-button-text-color: #fff;
}
```

### Aplica estilos personalizados

Ahora que las variables CSS están disponibles, puedes aplicarlas al componente usando reglas CSS. Añade este código a la misma hoja de estilo:

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

### Continúa personalizando

Para realizar modificaciones adicionales o crear temas más complejos, simplemente añade reglas CSS adicionales en tu hoja de estilo personalizada. Este enfoque te permite mantener un control total sobre la presentación visual de tus aplicaciones de Modyo mientras aprovechas la potencia y la flexibilidad de Dynamic Framework.

---

## Creación de un Tema Personalizado para un Widget

Aunque en la sección de creación de un tema en Modyo se abordó la aplicación de estilos en toda tu aplicación, la tematización de widgets individuales requiere un enfoque ligeramente distinto.

Crear un tema para tus widgets puede contribuir a que tu aplicación sea más modular y fácil de mantener. Ten en cuenta que los estilos CSS globales que definas podrían afectar inadvertidamente el comportamiento del CSS de tu widget individual. En algunos casos, es posible que necesites emplear una mayor especificidad de CSS para garantizar que tus estilos se apliquen correctamente.

Tienes dos opciones principales para crear temas para tus widgets:

- **CSS global en tu aplicación:** Define tu tema dentro del archivo CSS principal de tu sitio. Este es un enfoque sencillo, pero podría requerir el uso de selectores más específicos para apuntar a los elementos del widget.

- **Incrustado en el CSS de React:** Si tu widget es una aplicación de React, puedes incrustar el tema directamente en su archivo CSS. Esto proporciona una forma más encapsulada y modular de diseñar tu widget.

Ten en cuenta que los componentes de React en Dynamic Framework tienen su propio conjunto de propiedades personalizadas predefinidas. Puedes aprovechar estas propiedades para personalizar la apariencia y el comportamiento de tus widgets. Consulta el [Storybook](https://react.dynamicframework.dev) para obtener una lista detallada de las propiedades disponibles.

### Ejemplo creación de un componente temático

Supongamos que tienes un proyecto de React configurado utilizando el [proceso de instalación](../getting-started/installation.html) de Dynamic Framework.

- **Navega a tu componente:** Abre el archivo `src/components/myComponent.tsx`.
- **Reemplaza el código:** Reemplaza el código existente con el componente ListGroup:

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

Ten en cuenta la adición del atributo `id="my-component"` al div contenedor. Esto mejorará la especificidad de CSS para el estilo.

- **Define tus variables personalizadas:** Agrega las siguientes variables CSS a tu archivo `styles/base.css` (o a tu archivo CSS principal del sitio):

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

Puedes crear temas complejos personalizados para tus widgets mezclando variables CSS, propiedades de componentes y clases de Bootstrap.

Recuerda que siempre puedes agregar más reglas CSS a tu hoja de estilo para personalizar aún más la apariencia y el comportamiento de tu widget.
