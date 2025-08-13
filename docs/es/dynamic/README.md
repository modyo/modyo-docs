# Introducción

**Dynamic Framework** es una solución versátil que se adapta a las necesidades de tu proyecto, ofreciendo diversas opciones de instalación para cubrir cualquier escenario.

## Integración con Modyo

Al crear una nueva aplicación en Modyo utilizando el Tema Mínimo Dinámico, Dynamic Framework se instala automáticamente en tu aplicación web. Para personalizar la interfaz de usuario, consulta [Aprende a personalizar tu interfaz de usuario](https://dynamicbanking.co/docs/theming).

## Inclusión vía CDN

Para integrar los widgets HTML de Dynamic Framework en tu sitio web, puedes utilizar una Red de Entrega de Contenido (CDN). Este método facilita el acceso a los archivos CSS y JavaScript del framework sin necesidad de alojamiento local.

**Estilos CSS:**

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@1.27.0/dist/css/dynamic-ui.css">
```

**JavaScript (opcional):**

```html
<script src="https://cdn.jsdelivr.net/npm/@dynamic-framework/ui-react@1.27.0/dist/js/bootstrap.min.js"></script>
```

Una vez que Dynamic Framework esté enlazado en tu documento HTML, podrás empezar a utilizar sus funcionalidades. Para más detalles sobre la personalización de widgets y componentes, consulta nuestra documentación en [cómo personalizar widgets y componentes](https://dynamicbanking.co/docs/styling-components).

## Instalación vía gestor de paquetes

Para el desarrollo de widgets CLI o proyectos basados en React, puedes instalar los estilos y archivos JavaScript de Dynamic Framework mediante NPM.

```shell
npx @modyo/cli@latest get dynamic-react-base-template
```

**Requisitos:**

*   Node v20+
*   NPM 10.x+

```shell
cd dynamic-react-base-template;
npm i;
npm run start
```

Explora el código con tu editor de preferencia para comprender la implementación de los componentes del sistema de diseño.

Para información detallada sobre cómo integrar componentes React en tu proyecto, consulta nuestra documentación en [cómo agregar componentes de React a tu proyecto.](https://dynamicbanking.co/docs/dynamic-for-react)
