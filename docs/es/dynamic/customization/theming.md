---
search: true
---

# Sistema de temas

Un theme de Dynamic Framework es una hoja de estilos que se carga después del CSS de Dynamic UI y sobrescribe sus custom properties `--bs-*`. Esta página describe el contrato de Dynamic UI 2.12.0: qué variables se sobrescriben, con qué formato y en qué selector, y qué partes del sistema no siguen solas a un cambio de marca.

## Cómo se aplica un theme

Dynamic UI declara sus tokens en el selector `:root, [data-bs-theme="dynamic"]` y no usa `@layer`. Un theme gana si su regla tiene al menos esa especificidad y llega después en la cascada:

```html
<link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css" />
<link rel="stylesheet" href="/css/theme.css" />
```

```css
/* theme.css */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}
```

Usa el mismo selector que Dynamic: un elemento con `data-bs-theme="dynamic"` vuelve a recibir los valores de la librería, y una regla que solo apunte a `:root` no lo alcanza. No uses `:where()`, porque su especificidad es cero y la regla de Dynamic le gana.

### Con @layer

Los estilos que no pertenecen a ninguna capa ganan a los de cualquier capa. Si tu theme vive en una capa y Dynamic no, el theme pierde siempre:

```css
/* ❌ Dynamic se cargó sin capa: este bloque no gana nunca */
@layer theme {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-border-radius: 0.75rem;
  }
}
```

Si usas capas, importa Dynamic dentro de una capa y declara la del theme después. Entre capas gana la última declarada:

```css
/* ✅ */
@layer framework, theme;

@import url("https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css") layer(framework);

@layer theme {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-border-radius: 0.75rem;
  }
}
```

## El contrato de color

Cada color viaja como un triplete `R, G, B`, sin `rgb()`, en la variable `--bs-<nombre>-rgb`. La variable sin sufijo es un wrapper que la librería calcula a partir del triplete. Por defecto, `--bs-primary-rgb` apunta a `--bs-blue-rgb` (`32, 104, 213`), y `--bs-primary` vale `rgb(var(--bs-primary-rgb))`.

Los botones, las utilidades como `.bg-primary` y todo lo que aplica opacidad leen el triplete con `rgba(var(--bs-primary-rgb), <alfa>)`. Por eso se sobrescribe el triplete y nunca el wrapper: un hex en `--bs-primary` solo cambia lo que lee el wrapper, y un hex o un `rgb()` en el triplete rompe la opacidad.

### Roles con rampa

Seis roles tienen una rampa de 25 a 900: `primary`, `secondary`, `success`, `info`, `warning` y `danger`. `light` y `dark` exponen solo su base: `--bs-light-rgb` apunta a `--bs-gray-25-rgb` y `--bs-dark-rgb`, a `--bs-gray-900-rgb`.

Los pasos de la rampa son literales calculados al compilar. El paso 500 es la excepción: `--bs-primary-500-rgb: var(--bs-primary-rgb)` sigue a la base. Si cambias solo la base, los pasos que leen los estados y las superficies suaves se quedan en el tono anterior:

| Lo que cambia con la base | Lo que no cambia |
|---|---|
| `--bs-primary`, `--bs-primary-500`, `.bg-primary`, el fondo de `.text-bg-primary` y de `.btn-primary` | Hover y active de `.btn-primary` (`--bs-primary-600`), `--bs-primary-bg-subtle` y `--bs-primary-border-subtle` (`--bs-primary-100`), `--bs-primary-text-emphasis` (`--bs-primary-600`), el hover de los enlaces (`--bs-primary-700`) |

Un rebrand completo de un role son 11 variables: la base y las 10 hojas (25, 50, 100, 200, 300, 400, 600, 700, 800 y 900). El 500 conserva su alias. Este bloque, generado con `dynamic-theme-expand` a partir de `#166e62`, es un rebrand completo de `primary`:

```css
:root,
[data-bs-theme="dynamic"] {
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
}
```

Los enlaces siguen al role: `--bs-link-color-rgb` apunta a `--bs-primary-rgb` y `--bs-link-hover-color-rgb`, a `--bs-primary-700-rgb`. Solo necesitan override si deben tener otro color.

### Roles que comparten tono

Por defecto, `primary` e `info` son el mismo azul (los dos apuntan a `--bs-blue-rgb`), y `success`, `warning` y `danger` comparten tono con `green`, `yellow` y `red`. Un rebrand de `primary` no mueve `info`. Si el estado informativo también debe seguir a la nueva marca, declara el bloque completo de `info`; si debe seguir siendo un color de estado, déjalo como está.

### La rampa de secondary

`--bs-secondary-rgb` apunta a `--bs-gray-800-rgb` y, como el paso 500 sigue a esa base, la rampa no es monótona: el 500 queda más oscuro que el 600 y el 700. Sobrescribir la base no corrige la forma de la rampa. Si cambias `secondary`, declara las 10 hojas con una rampa coherente (`dynamic-theme-expand` las genera igual que para los demás roles) o deja el role sin tocar.

## Texto sobre fondo

Bootstrap elige el color de texto de los componentes rellenos con `color-contrast()`, una función de Sass que se ejecuta al compilar. Cambiar un triplete en tiempo de ejecución no lo recalcula: si tu `primary` pasa a ser un tono claro, el texto blanco se queda.

| Componente | De dónde sale el texto | Cómo se corrige |
|---|---|---|
| `.text-bg-<role>`, todos menos `secondary` | `--bs-<role>-text-bg-color` (`var(--bs-white)` o `var(--bs-gray-700)` por defecto) | Declarar la variable junto al role |
| `.text-bg-secondary` | `--bs-secondary-700` sobre `--bs-secondary-50` | Cambiar la rampa de `secondary` hasta que el par contraste |
| `.btn-<role>` | `--bs-btn-color` y sus estados, resueltos para el valor por defecto de cada role | Un bloque `.btn-<role>` en el theme |

Para un `primary` claro, el texto de `.text-bg-primary` se ajusta en la raíz y el del botón, en su propio bloque:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-text-bg-color: var(--bs-gray-900);
}

.btn-primary {
  --bs-btn-color: var(--bs-gray-900);
  --bs-btn-hover-color: var(--bs-gray-900);
  --bs-btn-active-color: var(--bs-gray-900);
  --bs-btn-disabled-color: var(--bs-gray-900);
}
```

`.btn-primary` expone `--bs-btn-color`, `--bs-btn-bg`, `--bs-btn-border-color` y sus variantes `-hover-`, `-focus-`, `-active-` y `-disabled-`. En `.btn-outline-<role>`, el texto en reposo queda sobre la superficie de alrededor, y el de hover y active, sobre el color del role; revisa esos estados por separado.

## Tipografía, radios y espaciado

### Familia tipográfica

La fuente por defecto es `--bs-font-sans-serif: "Jost", sans-serif`, y `--bs-body-font-family` la lee. El CSS de Dynamic no incluye `@font-face`: tu aplicación carga la fuente que declares.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-font-sans-serif: "Inter", system-ui, sans-serif;
}
```

### Tamaños de texto

Los componentes y las clases `.h1`–`.h6`, `.fs-*` y `.display-*` leen `--bs-fs-N` y `--bs-fs-display-N`, que son alias: `--bs-fs-1: var(--bs-rfs-fs-1)`. El valor vive en `--bs-rfs-fs-N` y `--bs-rfs-display-N`, que son las variables que se sobrescriben.

Los pasos `fs-1` a `fs-4` y `display-1` a `display-6` son fluidos: por debajo de 1200px valen un `calc()` que crece con el viewport, y Dynamic los redefine con un tamaño fijo en `@media (min-width: 1200px)`. Un theme cargado después de Dynamic gana en todas las anchuras, porque la media query no aumenta la especificidad. Si el valor que declaras es fijo, basta una declaración. Si es fluido (con `vw`), necesita su tope en ese breakpoint; sin él, sigue creciendo en escritorio. Este ejemplo conserva el comportamiento fluido y lleva `h1` al tamaño que `h2` tiene por defecto:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.5rem;
  }
}
```

`fs-5` (`1.25rem`), `fs-6` (`1rem`) y `--bs-rfs-fs-small` (`0.875em`) no son fluidos y se sobrescriben con un solo valor. `--bs-heading-line-height` no tiene alias y se sobrescribe directamente.

### Radios

Cada radio es una variable independiente, no una escala derivada:

| Variable | Valor por defecto |
|---|---|
| `--bs-border-radius-sm` | `0.25rem` |
| `--bs-border-radius` | `0.5rem` |
| `--bs-border-radius-lg` | `1rem` |
| `--bs-border-radius-xl` | `1.5rem` |
| `--bs-border-radius-xxl` | `2rem` |
| `--bs-border-radius-2xl` | `var(--bs-border-radius-xxl)` |
| `--bs-border-radius-pill` | `50rem` |

Si cambias el radio base, cambia también los demás: no se recalculan solos.

### Espaciado

El espaciado de los componentes vive en 31 variables literales, de `--bs-ref-spacer-0` (`0`) a `--bs-ref-spacer-30` (`7.5rem`), en pasos de `0.25rem`. Las utilidades de Bootstrap como `.p-3` o `.gap-3` usan valores fijos y no leen estas variables.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-ref-spacer-4: 1.125rem;
  --bs-ref-spacer-6: 1.75rem;
}
```

## Zonas de theme

Dynamic UI no trae un esquema oscuro de tokens: se compila con `$enable-dark-mode: false`. Lo que sí trae son variantes `dark:` de las utilidades (por ejemplo, la clase `dark:fs-1`), que se activan con el esquema oscuro del sistema o bajo un ancestro con la clase `.dark`. Esas variantes no cambian ninguna variable `--bs-*`. Para que una parte de la página tenga su propia paleta, por ejemplo una cabecera oscura en una aplicación clara, se usa una zona: un subárbol con `data-bs-theme="<nombre>"`.

```html
<header data-bs-theme="destacada">…</header>
```

Una zona hereda de la raíz, y hay tres cosas que no la siguen solas:

1. **El triplete y el wrapper.** Los wrappers se calculan donde se declaran: `--bs-body-color: rgb(var(--bs-body-color-rgb))` se resuelve en la raíz y se hereda ya calculado. Una zona que solo cambie `--bs-body-color-rgb` no mueve lo que lee `var(--bs-body-color)`. La zona declara los dos para `body-color`, `body-bg`, `secondary-color`, `tertiary-color` y `emphasis-color`.
2. **El color de la propia zona.** Dynamic aplica `--bs-body-color` y `--bs-body-bg` sobre `body`. Un subárbol a mitad de la página no pasa por esa regla, así que la zona declara `color` y `background-color`.
3. **Los componentes con superficie propia.** Al cambiar el color heredado, un `.form-control` dentro de una zona oscura queda con texto blanco sobre fondo blanco. `.nav` y `.nav-pills`, `.btn-<role>`, `.list-group`, `.form-control`, `.form-select` y `.modal` llevan su bloque dentro de la zona. Las variables de `.nav-pills` no se alcanzan desde `.nav` y van en un bloque aparte.

Este CSS, generado con `dynamic-theme-expand`, es una zona completa sobre el `primary` del rebrand anterior:

```css
[data-bs-theme="destacada"] {
  --bs-body-bg-rgb: var(--bs-primary-700-rgb);
  --bs-body-bg: rgb(var(--bs-primary-700-rgb));
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb);
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  --bs-heading-color: rgb(var(--bs-white-rgb));
  --bs-link-color-rgb: var(--bs-primary-100-rgb);
  --bs-link-hover-color-rgb: var(--bs-primary-50-rgb);
  --bs-border-color: rgba(var(--bs-white-rgb), .15);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

[data-bs-theme="destacada"] .nav {
  --bs-nav-link-color: rgb(var(--bs-white-rgb));
  --bs-nav-link-hover-color: rgb(var(--bs-primary-100-rgb));
}

[data-bs-theme="destacada"] .nav-pills {
  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));
  --bs-nav-pills-link-active-color: rgb(var(--bs-primary-700-rgb));
}

[data-bs-theme="destacada"] .btn-primary {
  --bs-btn-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-bg: rgb(var(--bs-white-rgb));
  --bs-btn-border-color: rgb(var(--bs-white-rgb));
  --bs-btn-hover-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-hover-bg: rgb(var(--bs-primary-50-rgb));
  --bs-btn-hover-border-color: rgb(var(--bs-primary-50-rgb));
  --bs-btn-active-color: rgb(var(--bs-primary-700-rgb));
  --bs-btn-active-bg: rgb(var(--bs-primary-100-rgb));
  --bs-btn-active-border-color: rgb(var(--bs-primary-100-rgb));
}

[data-bs-theme="destacada"] .list-group {
  --bs-list-group-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-bg: transparent;
  --bs-list-group-action-color: rgb(var(--bs-body-color-rgb));
  --bs-list-group-border-color: var(--bs-border-color);
}

[data-bs-theme="destacada"] .form-control,
[data-bs-theme="destacada"] .form-select {
  --bs-body-color: rgb(var(--bs-dark-rgb));
}

[data-bs-theme="destacada"] .modal {
  --bs-modal-color: rgb(var(--bs-dark-rgb));
  --bs-heading-color: rgb(var(--bs-dark-rgb));
}
```

## Qué cubre token-overrides.json

Cada versión de Dynamic UI publica en el CDN un descriptor de theming junto al CSS de la misma versión:

```
https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json
```

Usa siempre el descriptor de la versión de CSS que cargas. Cada entrada indica la variable (`cssVar`), su valor por defecto (`value`) y cómo se comporta (`class`):

| `class` | Significado |
|---|---|
| `override-base` | Base de una rampa. Arrastra su wrapper y el paso 500, pero no el resto de la rampa |
| `override-leaf` | Literal. Se sobrescribe una por una y no sigue a la base |
| `follows` | Alias o wrapper. No se sobrescribe: se recalcula solo |
| `not-overridable` | Valor horneado fuera de `var()`. Se reemplaza la variable completa |

Las secciones del descriptor son `color` (rampas, el `minimalRebrandSet` de cada role, `hueGroups` y `rebrandScope`), `typography`, `spacing`, `radius`, `shadow`, `gaps`, `slots` y `componentTokens`.

### Cobertura

El selector `:root, [data-bs-theme="dynamic"]` de Dynamic UI 2.12.0 declara 1.205 custom properties, y el descriptor describe 258. Las demás son de tres tipos:

- **Tokens de componente** (`--bs-btn-*`, `--bs-card-*`…): el descriptor los cuenta en `componentTokens` (703 en 2.12.0), pero no los enumera. Se sobrescriben en el selector del componente, no en la raíz.
- **Wrappers y alias**, que siguen a su triplete.
- **Superficies del documento**, que el descriptor no recoge y que un theme suele tocar:

| Variable | Valor por defecto | Cómo se sobrescribe |
|---|---|---|
| `--bs-body-bg-rgb` | `245, 246, 250` | Triplete, igual que un role |
| `--bs-body-color-rgb` | `var(--bs-gray-900-rgb)` | Triplete, igual que un role |
| `--bs-border-color` | `var(--bs-gray-100)` | Color directo: no tiene triplete |

### Huecos conocidos

`gaps` enumera lo que un override de tokens no resuelve en esta versión:

- `secondary`: la rampa no es monótona (consulta [La rampa de secondary](#la-rampa-de-secondary)).
- Iconos de validación y del acordeón (`--bs-form-feedback-icon-valid`, `--bs-form-feedback-icon-invalid`, `--bs-default-accordion-btn-icon` y `--bs-default-accordion-btn-active-icon`): el color está dentro de un SVG en data-URI. Se reemplaza la variable completa por un data-URI con el color nuevo.
- Sombras: solo `--bs-box-shadow-lg` es propia de Dynamic; las demás son las de Bootstrap.
- Espaciado entre letras: no tiene token.

## Generar y validar un theme

Desde la versión 2.12.0, `@dynamic-framework/ui-react` publica dos binarios: `dynamic-theme-expand` genera el CSS de un theme a partir de un JSON reducido, y `dynamic-theme-validate` lo revisa.

```bash
npm i -D @dynamic-framework/ui-react@2.12.0
npx dynamic-theme-expand theme.json -o theme.css
npx dynamic-theme-validate theme.css --strict
```

El CSS generado es un entregable. No se edita a mano: se corrige el JSON y se vuelve a generar.

### El JSON de entrada

```json
{
  "name": "Ejemplo",
  "version": "1.0.0",
  "roles": { "primary": "#166e62" },
  "body": { "bg": "245, 246, 250", "color": "#1f2933" },
  "typography": { "fontFamily": "\"Jost\", sans-serif" },
  "radius": ".5rem"
}
```

Los colores aceptan hex, un triplete `"R, G, B"` o cualquier color CSS.

| Clave | Obligatoria | Qué genera |
|---|---|---|
| `name`, `version` | No | La cabecera del CSS |
| `roles.<role>` | Al menos un role, o `gray` | La base, las 10 hojas si el role tiene rampa y `--bs-<role>-text-bg-color` (salvo en `secondary`) |
| `gray` | No | Una rampa de grises derivada por tinte, que reemplaza la que Dynamic define a mano |
| `body.bg`, `body.color` | Sí | `--bs-body-bg-rgb` y `--bs-body-color-rgb` |
| `body.borderColor` | No | `--bs-border-color`; por defecto, `rgb(var(--bs-gray-100-rgb))` |
| `typography.fontFamily` | Sí | `--bs-body-font-family` |
| `typography.scale.N` | No | `--bs-rfs-fs-N` para los pasos 1 a 6, con su bloque de 1200px |
| `radius` | Sí | `--bs-border-radius`, en `rem`, y los demás radios derivados de él |
| `root` | No | Variables `--bs-*` que se emiten tal cual al final del bloque raíz |
| `components` | No | Lista de `{ selector, vars, declarations }`; en `declarations` solo se admiten `padding`, `border-radius`, `border-color`, `font-family` y `font-variant-numeric` |
| `zones` | No | Mapa `<nombre>` → `{ vars, nav, components }`; genera los bloques de [Zonas de theme](#zonas-de-theme), incluidos `color` y `background-color` |

Cada `var(--bs-…)` de `root`, `components` y `zones` se comprueba contra el inventario de tokens de la versión instalada: una referencia a un token inexistente detiene la generación.

### Qué valida

`dynamic-theme-validate` revisa el formato de los colores (`triplete`, `wrapper`), que las rampas estén completas (`rampa-incompleta`, `paso-500`), las superficies (`superficie-faltante`, `border-color`), el uso de `:where()`, la tipografía (`tipografia`, `tipografia-breakpoint`) y el contraste según WCAG 2.x AA (4,5:1; se cambia con `--min-contrast N`). El contraste se mide en cada bloque y en cada zona contra su propio fondo, incluidos los pares que Dynamic resuelve sin que el theme los declare.

Sale con código 1 si hay errores. Lo siguiente es advertencia y solo hace fallar con `--strict`:

- `.text-bg-secondary` por debajo del umbral, porque ningún theme lo corrige sin cambiar la rampa.
- Un par que ya falla con la paleta por defecto y que el theme no empeora (`contraste-preexistente`).
- Un enlace de zona con un contraste entre 3:1 y 4,5:1.
- Lo que no se pudo medir (`contraste-irresoluble`, `rampa-irresoluble`, `rampa-inexistente`).

El validador asume que, dentro de una zona, el fondo es el de la zona. No detecta un componente con superficie propia, como el `.form-control` blanco de una zona oscura: revisa esos bloques en el navegador.

## Compilar desde Sass

Las variables Sass solo tienen efecto si compilas Dynamic desde sus fuentes, y el paquete incluye el punto de entrada `src/style/dynamic-ui.scss`. Importar `dist/css/dynamic-ui.css` desde un archivo SCSS lo trata como CSS ya compilado, y cualquier `$variable` declarada antes se ignora. Compilar desde Sass implica compilar Bootstrap 5.3 dentro de tu build y mantener esa cadena en cada actualización de Dynamic. Para un theme, basta con sobrescribir custom properties como describe esta página.

## Errores frecuentes

**Hex en el wrapper, o solo la base.** Un hex en `--bs-primary` no llega a los botones, las utilidades ni la opacidad. Con solo la base, hover, active, `bg-subtle` y `text-emphasis` siguen en el tono anterior.

```css
/* ❌ */
:root {
  --bs-primary: #166e62;
}

/* ❌ */
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
}
```

```css
/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
  --bs-primary-text-bg-color: var(--bs-white);
  --bs-primary-25-rgb: 243, 248, 247;
  --bs-primary-50-rgb: 232, 241, 239;
  --bs-primary-100-rgb: 208, 226, 224;
  --bs-primary-200-rgb: 162, 197, 192;
  --bs-primary-300-rgb: 115, 168, 161;
  --bs-primary-400-rgb: 69, 139, 129;
  --bs-primary-600-rgb: 18, 88, 78;
  --bs-primary-700-rgb: 13, 66, 59;
  --bs-primary-800-rgb: 9, 44, 39;
  --bs-primary-900-rgb: 4, 22, 20;
}
```

**El alias tipográfico.** `--bs-fs-1` es un alias de `--bs-rfs-fs-1`. Un valor propio en el alias corta ese vínculo y desactiva el escalado fluido de RFS, y `dynamic-theme-validate` lo marca como error.

```css
/* ❌ */
:root {
  --bs-fs-1: 2.5rem;
}
```

```css
/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.375rem + 1.5vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.5rem;
  }
}
```

**Una paleta oscura con una clase en `body`.** La clase `.dark` activa las variantes `dark:` de las utilidades, pero no cambia los tokens. Una clase que solo redefine tripletes deja los wrappers tal como se resolvieron en la raíz.

```css
/* ❌ */
body.dark {
  --bs-body-bg-rgb: 21, 21, 26;
}
```

```css
/* ✅ Una zona; los bloques de componentes están en "Zonas de theme" */
[data-bs-theme="nocturna"] {
  --bs-body-bg-rgb: var(--bs-gray-900-rgb);
  --bs-body-bg: rgb(var(--bs-gray-900-rgb));
  --bs-body-color-rgb: var(--bs-white-rgb);
  --bs-body-color: rgb(var(--bs-white-rgb));
  --bs-secondary-color-rgb: var(--bs-white-rgb);
  --bs-secondary-color: rgba(var(--bs-white-rgb), .75);
  --bs-tertiary-color-rgb: var(--bs-white-rgb);
  --bs-tertiary-color: rgba(var(--bs-white-rgb), .5);
  --bs-emphasis-color-rgb: var(--bs-white-rgb);
  --bs-emphasis-color: rgb(var(--bs-white-rgb));
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}
```

**Variables Sass antes del CSS compilado.** El CSS ya está compilado y no lee `$border-radius`.

```scss
// ❌
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/dist/css/dynamic-ui.css";
```

```css
/* ✅ Un CSS de theme cargado después del de Dynamic */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}
```

## Recursos

- [Storybook de Dynamic UI 2.12.0](https://react.dynamicframework.dev/v2.12.0/)
- [Descriptor de theming 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json)
- [Extender componentes](extending.html)
