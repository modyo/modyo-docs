---
search: true
---

# Sistema de temas

Un theme de Dynamic Framework es una hoja de estilos que se carga después del CSS de Dynamic UI y sobrescribe sus custom properties `--bs-*`. Esta página describe el contrato de Dynamic UI 2.12.0 para quien escribe esa hoja: qué variables se sobrescriben, con qué formato y en qué selector, y qué partes del sistema no siguen solas a un cambio de marca.

## Dónde se carga el theme

Dynamic UI declara sus tokens en el selector `:root, [data-bs-theme="dynamic"]` y no usa `@layer`. La hoja del theme se carga después:

```html
<link rel="stylesheet" href="https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css" />
<link rel="stylesheet" href="/css/theme.css" />
```

### Sin @layer

Un theme gana si su regla tiene al menos la especificidad de la de Dynamic y llega después en la cascada. Usa el mismo selector: un elemento con `data-bs-theme="dynamic"` vuelve a recibir los valores de la librería, y una regla que solo apunte a `:root` no lo alcanza.

```css
/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.75rem;
}

/* ❌ :where() tiene especificidad cero y la regla de Dynamic le gana */
:where(:root) {
  --bs-border-radius: 0.75rem;
}
```

### Con @layer

Los estilos que no pertenecen a ninguna capa ganan a los de cualquier capa. Si el theme vive en una capa y Dynamic no, el theme pierde siempre, aunque se cargue después:

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

Cada color de Dynamic se guarda como un triplete `R, G, B` en una variable `-rgb`. La variable sin sufijo es un wrapper calculado a partir de él: `--bs-primary: rgb(var(--bs-primary-rgb))`. Las utilidades (`.bg-primary`, `.text-primary`) y todo lo que usa opacidad leen el triplete con `rgba(var(--bs-primary-rgb), …)`, y los botones leen la rampa, que también cuelga del triplete. Un hex en el wrapper solo llega a lo que lee el wrapper, y la marca queda a medias.

```css
/* ❌ */
:root {
  --bs-primary: #166e62;
}

/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-primary-rgb: 22, 110, 98;
}
```

El ✅ tiene el formato correcto, pero todavía no es un cambio de marca completo: falta la rampa.

### Roles y rampas

Dynamic tiene ocho roles de color. Seis tienen rampa de 25 a 900: `primary`, `secondary`, `success`, `info`, `warning` y `danger`. `light` y `dark` solo tienen su base (`--bs-light-rgb`, `--bs-dark-rgb`).

Las hojas de la rampa son literales, no se calculan a partir de la base. Si cambias solo la base, el hover y el active de los botones (`--bs-btn-primary-hover-bg: var(--bs-primary-600)`), los fondos suaves (`--bs-primary-bg-subtle: var(--bs-primary-100)`) y el texto enfatizado siguen en el tono anterior. Un cambio de marca de un role con rampa son 12 variables: la base, las 10 hojas y el color de texto de `.text-bg-<role>`. El paso 500 no se declara con un valor propio: sigue a la base.

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

Los enlaces siguen al role: `--bs-link-color-rgb` apunta a `--bs-primary-rgb` y `--bs-link-hover-color-rgb` a `--bs-primary-700-rgb`. Solo necesitan un override si los enlaces llevan otro color.

Las hojas de un color nuevo se pueden calcular a mano, con cualquier herramienta de paletas o con el generador que incluye Dynamic. Dynamic obtiene las suyas mezclando la base con blanco hacia los pasos claros y con negro hacia los oscuros, en sRGB. Para reproducir exactamente ese cálculo, consulta [Generar y validar un theme](theme-tools.html).

### Roles que comparten tono

Algunos roles salen del mismo tono de la paleta: `primary` e `info` son el mismo azul (`--bs-blue-rgb`), y `danger`, `success` y `warning` salen de `red`, `green` y `yellow`. Por defecto, un cambio de marca toca solo el role que se rebrandea, e `info` sigue siendo azul. Si `info` también debe pasar al color de marca o debe quedarse como color de estado, lo decide quien hace el rebrand, y en el primer caso se reescribe también su rampa.

### La rampa de secondary

La rampa de `secondary` no es monótona: la base apunta a `--bs-gray-800-rgb`, y como el paso 500 sigue a la base, `--bs-secondary-500-rgb` (43, 43, 52) es más oscuro que el 600 (87, 87, 104) y que el 700 (65, 65, 78). Cambiar la base no corrige esa forma. Para rebrandear `secondary` hay que escribir a mano las 10 hojas con una rampa coherente, o dejar el role como está.

### Superficies del documento

El fondo, el texto base y el borde del documento tienen sus propias variables:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-body-bg-rgb: 245, 246, 250;
  --bs-body-color-rgb: 21, 21, 26;
  --bs-border-color: rgb(var(--bs-gray-100-rgb));
}
```

`--bs-body-bg-rgb` y `--bs-body-color-rgb` son tripletes como los de los roles. `--bs-border-color` no tiene pareja `-rgb`: lleva un valor de color directamente. Los valores del ejemplo son los de Dynamic.

## Texto sobre fondo

Dynamic elige el color de texto de cada par texto/fondo en Sass, con `color-contrast()`, al compilar la librería. El resultado queda escrito en el CSS y no se recalcula cuando un theme cambia el color de fondo.

- **`.text-bg-<role>`** lee su texto de `--bs-<role>-text-bg-color`, que vale `var(--bs-white)` o `var(--bs-gray-700)` según el role. Si cambias la base a un tono claro, declara un valor oscuro junto con la rampa, como en el ejemplo de arriba. `secondary` no tiene esta variable: `.text-bg-secondary` pinta `--bs-secondary-700` sobre `--bs-secondary-50` y sigue a su rampa.
- **`.btn-<role>`** no lee `--bs-<role>-text-bg-color`. Su texto también queda resuelto al compilar: en `primary` es `var(--bs-white)` en todos los estados. Si la base nueva no contrasta con ese texto, se cambia en el bloque del componente:

```css
.btn-primary {
  --bs-btn-color: var(--bs-gray-900);
  --bs-btn-hover-color: var(--bs-gray-900);
  --bs-btn-active-color: var(--bs-gray-900);
  --bs-btn-disabled-color: var(--bs-gray-900);
}
```

## Tipografía, radios y espaciado

### Familia tipográfica

La familia de texto se sobrescribe en `--bs-font-sans-serif`. La leen el cuerpo del documento (`--bs-body-font-family`), los tooltips y los popovers. El CSS de Dynamic no incluye `@font-face`, así que la fuente debe cargarse aparte, antes del theme:

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-font-sans-serif: "Inter", sans-serif;
}
```

No existe `--bs-headings-font-family`: los encabezados heredan la familia del documento.

### Tamaños de texto

Los encabezados y las clases `.fs-N` leen `--bs-fs-N`, que es solo un alias de `--bs-rfs-fs-N`. El valor se sobrescribe en `--bs-rfs-fs-N` (y en `--bs-rfs-display-N` para `.display-N`). Sobrescribir el alias rompe la relación con RFS.

Los pasos 1 a 4 y los `display` son fluidos por debajo de 1200px (`calc(1.425rem + 2.1vw)` en el paso 1) y fijos desde 1200px (`3rem`). Si declaras un valor fluido, declara también su tope en el mismo media query, o seguirá creciendo en pantallas anchas:

```css
/* ❌ el alias, no el valor */
:root,
[data-bs-theme="dynamic"] {
  --bs-fs-1: 2.75rem;
}

/* ✅ */
:root,
[data-bs-theme="dynamic"] {
  --bs-rfs-fs-1: calc(1.4rem + 1.8vw);
  --bs-rfs-fs-2: calc(1.35rem + 1.2vw);
}

@media (min-width: 1200px) {
  :root,
  [data-bs-theme="dynamic"] {
    --bs-rfs-fs-1: 2.75rem;
    --bs-rfs-fs-2: 2.25rem;
  }
}
```

Los pasos 5 y 6 son fijos (`1.25rem` y `1rem`) y se sobrescriben con un único valor.

### Radios

Los radios son variantes independientes, no una escala derivada de la base: cambiar `--bs-border-radius` no mueve los demás.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-border-radius: 0.5rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 1rem;
  --bs-border-radius-xl: 1.5rem;
  --bs-border-radius-xxl: 2rem;
  --bs-border-radius-pill: 50rem;
}
```

Los valores son los de Dynamic. `--bs-border-radius-2xl` es un alias de `--bs-border-radius-xxl` y no se declara.

### Espaciado

El espaciado vive en 31 niveles literales, `--bs-ref-spacer-0` a `--bs-ref-spacer-30`, en pasos de `0.25rem` (`--bs-ref-spacer-4` es `1rem`). No existe `--bs-spacer`. Los componentes leen estos niveles (por ejemplo `--bs-modal-padding: var(--bs-ref-spacer-4)`). Las utilidades como `.p-3` o `.gap-3` llevan su valor escrito y no cambian con ellos.

```css
:root,
[data-bs-theme="dynamic"] {
  --bs-ref-spacer-4: 1.125rem;
}
```

## Variables de componente

Cada componente expone sus propias variables `--bs-<componente>-*` y las declara en su selector, así que se sobrescriben ahí, no en `:root`:

```css
.card {
  --bs-card-border-color: var(--bs-gray-100);
  --bs-card-border-radius: var(--bs-border-radius-lg);
}
```

Los iconos de validación de formularios y del acordeón llevan el color escrito dentro de un data-URI: no cambian con el role, y para cambiarlos se reemplaza la variable completa (`--bs-form-feedback-icon-valid`, `--bs-default-accordion-btn-icon`).

## Zonas en lugar de modo oscuro

Dynamic UI no trae esquema oscuro: el modo oscuro de Bootstrap está desactivado al compilar la librería. Para que una parte de la página tenga otra paleta, como una cabecera oscura en un sitio claro, se usa una zona: un subárbol con `data-bs-theme="<nombre>"` que redefine los colores.

```html
<header data-bs-theme="oscura">…</header>
```

Una zona hereda del documento, y hay tres cosas que no ocurren solas:

1. **Triplete y wrapper.** Los wrappers como `--bs-body-color` se calculan en `:root` y se heredan ya resueltos. Si la zona cambia solo `--bs-body-color-rgb`, lo que lee `var(--bs-body-color)` sigue con el color del documento. La zona declara los dos.
2. **`color` y `background-color`.** Dynamic aplica el fondo y el color de texto sobre `body`, y un subárbol nunca pasa por esa regla. La zona los declara sobre el propio elemento.
3. **Componentes con superficie propia.** El texto blanco de la zona llega a todo el subárbol, incluidos los componentes que mantienen fondo blanco: `.form-control`, `.form-select` y `.modal` necesitan un bloque que les devuelva un texto oscuro. `.nav`, `.list-group` y los botones `.btn-outline-*` necesitan colores legibles sobre el fondo de la zona. Las variables de `.nav-pills` no se alcanzan desde `.nav` y van en un bloque propio.

```css
[data-bs-theme="oscura"] {
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
  --bs-link-color-rgb: var(--bs-primary-200-rgb);
  --bs-link-color: rgb(var(--bs-primary-200-rgb));
  --bs-link-hover-color-rgb: var(--bs-primary-100-rgb);
  --bs-link-hover-color: rgb(var(--bs-primary-100-rgb));
  --bs-border-color: rgba(var(--bs-white-rgb), .25);
  color: var(--bs-body-color);
  background-color: var(--bs-body-bg);
}

[data-bs-theme="oscura"] .nav {
  --bs-nav-link-color: rgb(var(--bs-white-rgb));
  --bs-nav-link-hover-color: rgb(var(--bs-primary-200-rgb));
}

[data-bs-theme="oscura"] .nav-pills {
  --bs-nav-pills-link-active-color: rgb(var(--bs-gray-900-rgb));
  --bs-nav-pills-link-active-bg: rgb(var(--bs-white-rgb));
}

[data-bs-theme="oscura"] .btn-outline-primary {
  --bs-btn-color: rgb(var(--bs-primary-200-rgb));
  --bs-btn-border-color: rgb(var(--bs-primary-200-rgb));
  --bs-btn-hover-color: rgb(var(--bs-gray-900-rgb));
  --bs-btn-hover-bg: rgb(var(--bs-primary-200-rgb));
  --bs-btn-hover-border-color: rgb(var(--bs-primary-200-rgb));
}

[data-bs-theme="oscura"] .list-group {
  --bs-list-group-color: rgb(var(--bs-white-rgb));
  --bs-list-group-action-color: rgb(var(--bs-white-rgb));
  --bs-list-group-border-color: rgba(var(--bs-white-rgb), .25);
}

[data-bs-theme="oscura"] .form-control,
[data-bs-theme="oscura"] .form-select {
  --bs-body-color: rgb(var(--bs-gray-900-rgb));
}

[data-bs-theme="oscura"] .modal {
  --bs-modal-color: rgb(var(--bs-gray-900-rgb));
}
```

Un `.modal` solo recibe la zona si se renderiza dentro de ella. Una paleta oscura en `@media (prefers-color-scheme: dark)` sobre `:root` no es una alternativa: tiene los mismos tres problemas en todo el documento y cambia la marca para todo el que tenga el sistema en modo oscuro.

## Compilar desde Sass

Las variables Sass solo tienen efecto si compilas Dynamic desde sus fuentes. El paquete incluye el punto de entrada `src/style/dynamic-ui.scss`, que se compila con `node_modules` y la raíz del proyecto como rutas de carga. Importar el CSS compilado desde SCSS ignora cualquier `$variable` declarada antes:

```scss
// ❌ dist/css es CSS ya compilado: $border-radius no tiene efecto
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/dist/css/dynamic-ui.css";

// ✅
$border-radius: 0.75rem;
@import "@dynamic-framework/ui-react/src/style/dynamic-ui";
```

Compilar desde Sass significa compilar también Bootstrap dentro de tu build y mantener esa cadena en cada actualización de Dynamic. Para un theme basta con sobrescribir custom properties como describe esta página.

## Recursos

- [Generar y validar un theme](theme-tools.html): el flujo opcional con `dynamic-theme-expand` y `dynamic-theme-validate`.
- [Storybook de Dynamic UI 2.12.0](https://react.dynamicframework.dev/v2.12.0/)
- [CSS de Dynamic UI 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/css/dynamic-ui.min.css)
- [`token-overrides.json` 2.12.0](https://cdn.dynamicframework.dev/assets/2.12.0/ui-react/tokens/token-overrides.json): el descriptor de los tokens sobrescribibles.
