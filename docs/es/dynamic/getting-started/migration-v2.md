---
search: true
---

# Migrar a Dynamic UI 2.0

Esta guía te ayudará a migrar tu proyecto de Dynamic UI v1.36.x a la versión 2.0.

## Requisitos Previos

Antes de comenzar la migración, asegúrate de cumplir con los nuevos requisitos:

| Requisito | v1.36.x | v2.0 |
|-----------|---------|------|
| Node.js | >=20.13.1 | **>=22.0.0** |
| React | 18.x | 18.x o 19.x |

## Paso 1: Actualizar Dependencias

### Instalar nuevas peer dependencies

La versión 2.0 requiere nuevas dependencias que debes instalar en tu proyecto:

```bash
npm install framer-motion@">=12 <13"
npm install i18next@">=25 <26"
npm install react-i18next@">=16 <17"
```

### Actualizar Dynamic UI

```bash
npm install @dynamic-framework/ui-react@^2.0.0
```

### package.json resultante

Tu `package.json` debería incluir:

```json
{
  "dependencies": {
    "@dynamic-framework/ui-react": "^2.0.0",
    "framer-motion": "^12.0.0",
    "i18next": "^25.0.0",
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "react-i18next": "^16.0.0",
    "react-hot-toast": "^2.0.0"
  }
}
```

## Paso 2: Migrar Iconos (Bootstrap Icons a Lucide)

El cambio más significativo en v2.0 es la migración de Bootstrap Icons a [Lucide Icons](https://lucide.dev).

### Cambios clave

1. **Los nombres de iconos ahora usan PascalCase** en lugar de kebab-case
2. **No más sufijo `-fill`** - Lucide usa la prop `strokeWidth` o `fill` en su lugar
3. **Nueva dependencia**: `lucide-react` se incluye automáticamente

### Antes vs Después

```diff
// Antes (v1.36.x)
- <DIcon icon="house-door" />
- <DIcon icon="check-circle-fill" />
- <DButton iconStart="gear" text="Configuración" />

// Después (v2.0)
+ <DIcon icon="Home" />
+ <DIcon icon="CircleCheck" />
+ <DButton iconStart="Settings" text="Configuración" />
```

### Tabla de equivalencias comunes

| Bootstrap Icons | Lucide Icons |
|-----------------|--------------|
| `house`, `house-door` | `Home` |
| `person` | `User` |
| `people` | `Users` |
| `gear` | `Settings` |
| `search` | `Search` |
| `envelope` | `Mail` |
| `bell` | `Bell` |
| `check` | `Check` |
| `check-circle` | `CheckCircle` |
| `check-circle-fill` | `CircleCheck` |
| `x` | `X` |
| `x-circle` | `XCircle` |
| `arrow-left` | `ArrowLeft` |
| `arrow-right` | `ArrowRight` |
| `chevron-left` | `ChevronLeft` |
| `chevron-right` | `ChevronRight` |
| `chevron-up` | `ChevronUp` |
| `chevron-down` | `ChevronDown` |
| `plus` | `Plus` |
| `trash` | `Trash` |
| `trash3` | `Trash2` |
| `pencil` | `Pencil` |
| `eye` | `Eye` |
| `eye-slash` | `EyeOff` |
| `three-dots` | `MoreHorizontal` |
| `three-dots-vertical` | `MoreVertical` |
| `info-circle` | `Info` |
| `exclamation-triangle` | `AlertTriangle` |
| `exclamation-circle` | `AlertCircle` |

Para una lista completa de iconos disponibles, visita [lucide.dev/icons](https://lucide.dev/icons/).

### Buscar y reemplazar en tu proyecto

Usa tu IDE para buscar todos los usos de `icon="` y actualiza los nombres:

```bash
# Buscar todos los iconos en tu proyecto
grep -r 'icon="' src/
grep -r 'iconStart="' src/
grep -r 'iconEnd="' src/
```

## Paso 3: Renombrar Prop `theme` a `color`

La prop `theme` ha sido renombrada a `color` en todos los componentes para estandarizar la API.

### Componentes afectados

- `DAlert`
- `DBadge`
- `DButton`
- `DProgress`
- Y otros componentes con variantes de color

### Antes vs Después

```diff
// Antes (v1.36.x)
- <DAlert theme="primary">Mensaje</DAlert>
- <DBadge theme="success">Activo</DBadge>
- <DButton theme="danger">Eliminar</DButton>

// Después (v2.0)
+ <DAlert color="primary">Mensaje</DAlert>
+ <DBadge color="success">Activo</DBadge>
+ <DButton color="danger">Eliminar</DButton>
```

### Buscar y reemplazar

```bash
# Buscar usos de theme prop
grep -r 'theme="' src/
```

## Paso 4: Actualizar Componentes Eliminados

Varios componentes han sido eliminados en v2.0. Aquí están las alternativas:

### DSkeleton

**Eliminado.** Usa las utilidades de placeholder de Bootstrap:

```diff
// Antes (v1.36.x)
- import { DSkeleton } from '@dynamic-framework/ui-react';
- <DSkeleton width={200} height={20} />

// Después (v2.0)
+ <div className="placeholder-glow">
+   <span className="placeholder col-6"></span>
+ </div>
```

### DInputSearch

**Eliminado.** Usa `DInput` con iconos:

```diff
// Antes (v1.36.x)
- import { DInputSearch } from '@dynamic-framework/ui-react';
- <DInputSearch placeholder="Buscar..." />

// Después (v2.0)
+ import { DInput } from '@dynamic-framework/ui-react';
+ <DInput
+   placeholder="Buscar..."
+   iconStart="Search"
+ />
```

### DList y DListItem

**Eliminados.** Usa el nuevo y más potente `DListGroup`:

```diff
// Antes (v1.36.x)
- import { DList, DListItem } from '@dynamic-framework/ui-react';
- <DList>
-   <DListItem>Item 1</DListItem>
-   <DListItem>Item 2</DListItem>
- </DList>

// Después (v2.0)
+ import { DListGroup } from '@dynamic-framework/ui-react';
+ <DListGroup>
+   <DListGroup.Item>Item 1</DListGroup.Item>
+   <DListGroup.Item>Item 2</DListGroup.Item>
+ </DListGroup>
```

### DQuickAction* (Button, Check, Select, Switch)

**Eliminados.** Construye la UI con los componentes base:

```diff
// Antes (v1.36.x)
- import { DQuickActionButton } from '@dynamic-framework/ui-react';
- <DQuickActionButton
-   line1="Transferir"
-   line2="A otra cuenta"
-   icon="arrow-right"
- />

// Después (v2.0)
+ import { DButton } from '@dynamic-framework/ui-react';
+ <DButton
+   iconEnd="ArrowRight"
+   text="Transferir"
+   variant="outline"
+ />
```

### DTableHead

**Eliminado.** Era un componente interno para ejemplos de Storybook. No tiene reemplazo directo.

## Paso 5: Eliminar Prop `pill` de DButton

La prop `pill` ha sido eliminada de `DButton`. Usa clases de utilidad:

```diff
// Antes (v1.36.x)
- <DButton color="primary" pill>Redondeado</DButton>

// Después (v2.0)
+ <DButton color="primary" className="rounded-pill">Redondeado</DButton>
```

## Paso 6: Actualizar Animaciones (Opcional)

Los componentes `DModal` y `DOffcanvas` ahora usan Framer Motion para animaciones más suaves. Esto funciona automáticamente si tienes `framer-motion` instalado.

Si necesitas personalizar las animaciones, consulta la [documentación de Framer Motion](https://motion.dev/).

## Checklist de Migración

- [ ] Node.js actualizado a v22+
- [ ] Nuevas peer dependencies instaladas (`framer-motion`, `i18next`, `react-i18next`)
- [ ] Dynamic UI actualizado a v2.0
- [ ] Iconos migrados de Bootstrap Icons a Lucide Icons
- [ ] Props `theme` renombradas a `color`
- [ ] Componentes eliminados reemplazados con alternativas
- [ ] Prop `pill` reemplazada con `className="rounded-pill"`
- [ ] Tests ejecutados y pasando
- [ ] Revisión visual de la aplicación

## Recursos Adicionales

- [Catálogo de iconos Lucide](https://lucide.dev/icons/)
- [What's New en v2.0](../whats-new-v2.html)
- [Storybook de Dynamic UI](https://react.dynamicframework.dev)

## ¿Necesitas Ayuda?

Si encuentras problemas durante la migración:

1. Revisa la [documentación de componentes](../development/components.html)
2. Busca en la [comunidad](https://community.modyo.com)
3. Reporta issues en [GitHub](https://github.com/dynamic-framework/dynamic-ui/issues)
