---
search: true
---

# CI/CD con GitHub

Una de las ventajas de trabajar con los Widgets de manera local usando el CLI de Modyo ([**modyo-cli**](/es/platform/channels/widgets.html#modyo-cli)) es que se puede hacer uso de herramientas para automatizar la revisión de código (**CI**) y hacer entrega continua o despliegue continuo (**CD**).

Los Widgets del catalogo, asi como los templates base para iniciar un nuevo proyecto, traen _"recetas"_ de [**GitHub Actions**](https://GitHub.com/features/actions) que puedes utilizar para ejecutar algunas de las tareas mas comunes de CI/CD de manera rápida y sencilla.

Estas _"recetas"_ están en el archivo **README.md** que se encuentra en la carpeta `.GitHub` del Widget.

```treeview{1,5}
├── .GitHub/
│   ├── pr-labeler.yml
│   ├── release-drafter.yml
│   └── workflows/
│       ├── Readme.md   <- * recetas * ->
│       ├── pr-labeler.yml
│       └── release-draft.yml
├── src/
│   ├── App.vue
```

Las recetas que pueden encontrar son:

- Build and publish to modyo
- Run ESLint, Stylelint and Unit Tests on pull requests
- Publish package on GitHub registry
- Release draft
- Release drafter config
- PR Labeler
- PR Labeler config

:::tip
Cada una de éstas esta documentada y explicada en el archivo **README.md**
:::

## Despliegue de un Widget con GitHub Actions

Para poder cargar un Widget utilizando **GitHub Actions** necesitamos la _"receta"_ **Build and Publish** que hace uso del comando [**PUSH**](/es/platform/channels/widgets.html#modyo-cli-push-name) del **Modyo CLI** y para eso necesitamos un **token** que de autorización para hacerlo.

Para obtener un **token** primero tenemos que crear un **API Access** a nivel de la cuenta dueña del sitio. Vamos a **Settings (1) --> API access (2) --> Nuevo API access (3) --> Crear (4)**.

<img src="/assets/img/widgets/ci-cd/1.png" alt="Image displaying where to find the API Access button in Modyo Platform ">

Después de crear el API access tenemos que generar un token para el usuario que va a cargar el Widget.

:::tip
Recomendamos crear un nuevo usuario que tenga permisos y el token para cargar y publicar Widgets desde un servicio de CI/CD.
:::

**Nuevamente a nivel de cuenta:**

1. Settings
2. Team (seleccionamos o creamos un usuario)
3. Pestaña API access
4. Seleccionamos el Api access que creamos anteriormente
5. Crear Token

<img src="/assets/img/widgets/ci-cd/2.png" alt="Image displaying where to find the Generate Access Token button in Modyo Platform ">

Ahora tenemos el **token** podemos usarlo para configurar nuestro repositorio y asi la acción de GitHub tendrá acceso a éste.

<img src="/assets/img/widgets/ci-cd/3.png" alt="Image displaying your new API Access Token in Modyo Platform">

::: danger IMPORTANTE
¡Nunca deber compartir ni publicar el **TOKEN** o información sensible en el repositorio!
Por eso se recomienda utilizar variables de entorno, archivo .env que esta listado en el .gitignore del proyecto, de manera local y hacer uso de los [secrets](https://docs.GitHub.com/actions/reference/encrypted-secrets) en GitHub.
:::
