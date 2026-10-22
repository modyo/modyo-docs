---
search: true
---

# Generar y validar un theme

Generar un theme con las herramientas de Dynamic es un flujo opcional: el resultado es la misma hoja de variables que describe [Sistema de temas](theming.html), escrita a partir de un archivo JSON corto en lugar de a mano. `@dynamic-framework/ui-react` incluye desde la versión 2.12.0 dos comandos: `dynamic-theme-expand`, que convierte el JSON en CSS, y `dynamic-theme-validate`, que revisa un CSS de theme.

## Cuándo conviene

- Un cambio de marca de varios roles, donde escribir a mano 12 variables por role es lento y fácil de equivocar.
- Un theme con zonas, que suma bloques por componente dentro de cada una.
- Un theme que se mantiene en el tiempo y se regenera con cada versión de Dynamic.

Para un ajuste puntual, como un radio o un color de enlace, basta con editar la hoja de variables.

## Qué asume

- Node.js 22 o superior en la máquina de quien hace el theme. El sitio no necesita Node.
- Un JSON fuente bajo control de versiones: es lo que se edita.
- Un CSS generado que se sube al sitio como cualquier otra hoja, cargada después del CSS de Dynamic. Ese CSS no se edita a mano: se regenera desde el JSON.

## Instalación y uso

```bash
npm i -D @dynamic-framework/ui-react@2.12.0
npx dynamic-theme-expand theme.json -o theme.css
npx dynamic-theme-validate theme.css --strict
```

Sin `-o`, `dynamic-theme-expand` escribe el CSS junto al JSON, con el mismo nombre y extensión `.css`. Si el JSON tiene errores, el comando los lista todos, sale con código 1 y no escribe el CSS. `dynamic-theme-validate` sale con código 1 si encuentra errores, así que puede ejecutarse en CI.

El CSS empieza con una cabecera que indica para qué versión de `@dynamic-framework/ui-react` se generó.

## El JSON de entrada

```json
{
  "name": "Theme de ejemplo",
  "version": "1.0.0",
  "roles": { "primary": "#166e62" },
  "body": { "bg": "245, 246, 250", "color": "21, 21, 26" },
  "typography": {
    "fontFamily": "\"Inter\", sans-serif",
    "scale": { "1": "2.75rem", "2": "2.25rem" }
  },
  "radius": "0.5rem"
}
```

Los colores aceptan hex, triplete `"R, G, B"` o cualquier color CSS.

| Clave | Obligatoria | Qué es |
|---|---|---|
| `name`, `version` | no | Encabezan el CSS generado |
| `roles.<role>` | al menos un role, o `gray` | Color base de `primary`, `secondary`, `success`, `info`, `warning`, `danger`, `light` o `dark`. Genera la base, la rampa (si el role la tiene) y, salvo en `secondary`, el texto de `.text-bg-<role>` |
| `gray` | no | Deriva la rampa de grises a partir de un color. Cambia el carácter del neutro, no solo su tono |
| `body.bg`, `body.color` | sí | Fondo y texto del documento |
| `body.borderColor` | no | Color de borde. Por defecto, el de Dynamic |
| `typography.fontFamily` | sí | La familia tipográfica |
| `typography.scale.<1-6>` | no | Tamaño de encabezado por paso, en `rem`. Los pasos fluidos salen con su tope en `@media (min-width: 1200px)` |
| `radius` | sí | Radio base en `rem`. `sm`, `lg`, `xl` y `xxl` se derivan de él (×0,5, ×2, ×3, ×4) |
| `root` | no | Mapa `--bs-*` → valor, emitido tal cual en el bloque raíz |
| `components` | no | Lista de `{ selector, vars, declarations }`: un bloque por selector. `declarations` admite solo `padding`, `border-radius`, `border-color`, `font-family` y `font-variant-numeric` |
| `zones` | no | Mapa `<nombre>` → `{ vars, nav, components }`: un bloque `[data-bs-theme="<nombre>"]` (con `color` y `background-color` si declara `--bs-body-color` o `--bs-body-bg`), un bloque para `.nav` y otro para `.nav-pills`, y un bloque por componente dentro de la zona |

Toda referencia `var(--bs-…)` en `root`, `components` y `zones` se comprueba contra las variables que existen en el CSS de la versión instalada. Una referencia a una variable inexistente es un error.

## Solo un role

Para rebrandear un único role sin reescribir nada más, genera un theme mínimo con los valores por defecto de Dynamic y copia a tu hoja solo el bloque del role:

```json
{
  "roles": { "primary": "#166e62" },
  "body": { "bg": "245, 246, 250", "color": "21, 21, 26" },
  "typography": { "fontFamily": "\"Jost\", sans-serif" },
  "radius": "0.5rem"
}
```

El bloque del role en el CSS generado:

```css
  /* Role primary */
  --bs-primary-rgb: 22, 110, 98;
  --bs-primary-text-bg-color: var(--bs-white);
  --bs-primary-25-rgb: 243, 248, 247;
  --bs-primary-50-rgb: 232, 241, 239;
  --bs-primary-100-rgb: 208, 226, 224;
  --bs-primary-200-rgb: 162, 197, 192;
  --bs-primary-300-rgb: 115, 168, 161;
  --bs-primary-400-rgb: 69, 139, 129;
  --bs-primary-500-rgb: var(--bs-primary-rgb);
  --bs-primary-600-rgb: 18, 88, 78;
  --bs-primary-700-rgb: 13, 66, 59;
  --bs-primary-800-rgb: 9, 44, 39;
  --bs-primary-900-rgb: 4, 22, 20;
```

Esas 13 líneas van dentro del bloque `:root, [data-bs-theme="dynamic"]` de tu hoja. El resto del CSS generado repite los valores de Dynamic y no hace falta copiarlo.

Las hojas salen de mezclar la base en sRGB con blanco (95, 90, 80, 60, 40 y 20 % para los pasos 25 a 400) y con negro (20, 40, 60 y 80 % para los pasos 600 a 900), con la misma receta que usa Dynamic para su paleta.

## Qué valida

`dynamic-theme-validate` revisa cualquier CSS de theme, generado o escrito a mano. Cada contraste se mide en su contexto: el bloque raíz, cada bloque de componente y cada zona. El umbral es 4,5:1 y se cambia con `--min-contrast`.

| Severidad | Reglas |
|---|---|
| Error | `vacio`, `triplete`, `wrapper`, `rampa-incompleta`, `paso-500`, `superficie-faltante`, `border-color`, `fix-bg`, `where`, `tipografia`, `tipografia-breakpoint`, `monotonia`, `contraste-boton`, `contraste-nav-pills`, `contraste-zona`, `contraste-horneado`, `contraste-enlace-zona` por debajo de 3:1 |
| Aviso | `rampa-inexistente`, `rampa-irresoluble`, `contraste-irresoluble`, `contraste-preexistente`, `contraste-horneado` en `.text-bg-secondary`, `contraste-enlace-zona` entre 3:1 y 4,5:1 |

Con errores, el comando sale con código 1. Con `--strict`, también sale con código 1 si solo hay avisos.

## El descriptor token-overrides.json

`token-overrides.json` describe qué variables de Dynamic se pueden sobrescribir y cómo se comportan. Se publica por versión, junto al CSS de esa misma versión: `https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json`. Está pensado para las herramientas y los agentes que generan themes. `dynamic-theme-expand` y `dynamic-theme-validate` no lo descargan: comprueban los nombres de variable contra `known-tokens.json`, el inventario que viene en el paquete instalado. Un theme escrito a mano no necesita el descriptor.

Cada variable lleva una clase:

| Clase | Qué significa |
|---|---|
| `override-base` | La base `-rgb` de un role. Arrastra al wrapper y al paso 500, pero no al resto de la rampa |
| `override-leaf` | Un valor literal. Se sobrescribe uno por uno y no sigue a la base |
| `follows` | Un alias o wrapper que se recalcula solo. No se sobrescribe |
| `not-overridable` | Un valor dentro de un data-URI. Se reemplaza la variable completa |

## Recursos

- [Sistema de temas](theming.html): el contrato que cumple el CSS generado.
- [`token-overrides.json` 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json)
- [Storybook de Dynamic UI 2.12.0](https://react.dynamicframework.dev/v2.12.0/)
