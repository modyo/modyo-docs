---
search: true
---

# Widgets

En la sección Widgets podrás crear y adjuntar aplicaciones externas a Modyo, con tal de que funcionen directamente en tu página.

Los Widgets se pueden hacer a través de código Javascript, HTML5 y CSS, según se necesite. Además, se podrán usar archivos internos para su implementación, a través de nuestro Gestor de Archivos al que se puede acceder a través de la misma sección.

Lo más importante es que estén correctamente vinculados y sean dinámicos para adaptarse a los distintos sitios que tengamos en nuestra plataforma.

::: danger Peligro
Missing description
Templates (JS, CSS, HTML)
Uso de liquid
Tags
Publicación de widgets
Uso de snippets del sitio
Vista previa del widget
:::

## Modyo CLI

Modyo CLI is a command line tool to generate an environment to work with Modyo's widgets locally.

### Getting started

First, you need to install the Modyo CLI globally to have the `modyo-cli` command available.

If you use npm:

```
npm i -g @modyo/cli
```

With yarn:

```
yarn global add @modyo/cli
```

### Setup a projects

The Modyo CLI is designed to work with one or more widgets under a `project` structure that work as a container. After you setup a project you will be able to add/remove an edit widgets locally

To setup a project:

```
# We recommend naming your projects in `PascalCase`
modyo-cli project create <projectName>
cd projectName
modyo-cli project start
```

The project must have at least one widget to run the server.

### The modyo session

In order to be able to push your widgets to the Modyo Platform and get the assets dependencies, you need to be logged in on the Modyo's account / site where you plan to deploy the widgets. To do that, with the follow command:

```
modyo-cli project login
```

## Working with widgets

To add a new widget to the project:

```
# We recommend naming your widgets in `PascalCase`
modyo-cli widget add <widgetName>
```

To start the dev server for a widget:

```
modyo-cli widget start <name>
# You can also use the command without passing a name an a list of available widgets will be diplayed
```

## Available commands

| Command                 | Description                                         |
|-------------------------|-----------------------------------------------------|
| `project`               | Display help for the project command                |
| `project create <name>` | Create a project                                    |
| `project start`         | Start a development server with all widgets created |
| `project login`         | Get the session cookie from the Modyo Platform      |
| `project logout`        | Revoke user token and session
|
| `widget`                | Display help for the widget command
|
| `widget add <name>`     | Add a widget to the project                         |
| `widget start <name>`   | Start a development server in a standalone mode     |
| `widget delete <name>`  | Delete an existing widget                           |
| `widget push <name>`    | Push a widget to Modyo Platform                     |
| `widget push --all`     | Push all widgets                                    |
| `widget push --force`   | Force Push                                          |
| `help <command>`        | Display help for a specific command                 |

### Known Issues

1. WIDGETS-482 — Configurar CI / CD @Pablo Ortega
2. WIDGETS-536 — Añadir test para los templates de widgets
3. WIDGETS-537 — Añadir internacionalización de Widgets
4. WIDGETS-538 — Añadir repositorio de templates de widgets
5. WIDGETS-496 — Integrar desarrollo con AngularJS al CLI @Roberto Rivera
6. WIDGETS-504 — Implementar custom path to babelrc
7. WIDGETS-535 — Crear especificación retail banking para dummy API @Luis Villena

## Troubleshooting

### `TypeError: Cannot read property 'vue' of undefined`

You need to enforce the version '14.2.2' of the package `vue-loader`

### `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

When start `modyo-cli demo <widget_name>` error is found something like `No parser and no filepath given, using 'babylon' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred.`

The fix is change in `node_modules\vue-loader\lib\template-compiler/index.jx` and replace

```
// prettify render fn
    if (!isProduction) {
      code = prettier.format(code, { semi: false})
    }
```

For

```
// prettify render fn
if (!isProduction) {
  code = prettier.format(code, { semi: false, parser: 'babylon' })
}
```

[According to this fix in StackOverflow](https://stackoverflow.com/questions/50561649/module-build-failed-error-no-parser-and-no-file-path-given-couldnt-infer-a-p)

And this issue is fixed in vue-loader community but is still not deployed on this [Pull Request](https://github.com/vuejs/vue-loader/pull/1323/files)
