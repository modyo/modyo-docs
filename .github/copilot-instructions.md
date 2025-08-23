# Contexto para Copilot Agent

Este proyecto es la documentación técnica oficial de Modyo y está construido con VuePress v1.9.10.

Por favor, ten en cuenta este flujo de trabajo y contexto al sugerir cambios, traducciones o automatizaciones para la documentación.

## Comandos de Desarrollo y Build

```bash
# Instalar dependencias
yarn install
# o para Node 17+ en macOS:
export NODE_OPTIONS=--openssl-legacy-provider && yarn install

# Iniciar servidor de desarrollo (http://localhost:8080)
yarn docs:dev

# Construir el sitio de documentación
yarn docs:build
```

## Estructura del Repositorio

### Organización del Contenido
- **Español (Principal)**: `/docs/es/` - Toda la documentación original se escribe primero en español
- **Inglés (Secundario)**: `/docs/en/` - Las traducciones deben generarse cada vez que cambie un archivo en español (los cambios se sobrescribirán)
- **Configuración**: `/docs/.vuepress/config.js` - Controla navegación, sidebar y configuración del sitio
- **Assets Públicos**: `/docs/.vuepress/public/` - Assets estáticos

### Áreas Clave de Documentación
- **Platform**: Documentación del core de la plataforma Modyo (`/platform/`)
- **Connect**: Documentación del módulo Modyo Connect (`/connect/`)
- **Dynamic**: Documentación del Dynamic Framework (sitio externo)
- **Architecture**: Patrones y guías arquitectónicas (`/architecture/`)

## Directrices Importantes

### Idioma y Traducción
- **El español es la fuente de verdad** - siempre priorizar precisión en la documentación en español
- Los archivos en inglés deben auto-generarse usando IA - los cambios manuales se sobrescribirán
- El público objetivo son desarrolladores y usuarios técnicos de la plataforma Modyo

### Convenciones de Enlaces
- Los enlaces internos deben apuntar a archivos `.html`, no a archivos `.md`
- Los enlaces de anchor (#) deben coincidir con los títulos de sección en el idioma correspondiente
- Ejemplo: `/es/platform/core/api.html#endpoints` no `/es/platform/core/api.md#endpoints`

### Enrutamiento
Los archivos siguen la estructura del sistema de archivos más el prefijo de idioma:
- Español: `/es/platform/foo/`
- Inglés: `/en/platform/foo/`

### Configuración VuePress
- Navegación principal y sidebar controlados por `/docs/.vuepress/config.js`
- Soporta integración de búsqueda Algolia
- Usa Google Tag Manager para analytics
- Profundidad del sidebar configurada a 1 por defecto

### Reglas de Formato
- Los títulos H1, H2 y H3 nunca pueden terminar con ":"
- Mantener un tono profesional, claro y técnico

## Recomendaciones para Copilot Agent

### Estilo y Formato
- Mantener un tono profesional, claro y técnico, dirigido a desarrolladores y usuarios técnicos
- Seguir convenciones de formato: títulos descriptivos, secciones bien estructuradas, uso de ejemplos, tablas y diagramas cuando aporten claridad
- Priorizar ejemplos accesibles y buenas prácticas de desarrollo en todos los fragmentos de código y explicaciones

### Traducciones
- Las traducciones al inglés deben ser fieles al contenido en español, priorizando precisión técnica sobre literalidad
- Antes de actualizar la versión en inglés, verificar que la fuente en español esté revisada y aprobada
- Documentar claramente los cambios entre versiones de la plataforma y mantener las notas de versión sincronizadas en ambos idiomas

### Enlaces y Referencias
- Asegurarse de que los enlaces internos y externos funcionen en ambas versiones y estén actualizados
- Los anchors (#) en los links deben corresponder a los títulos de las secciones que referencien en el idioma correspondiente

## Validación de Cambios

1. Iniciar el servidor de desarrollo: `yarn docs:dev`
2. Navegar a `http://localhost:8080/es/` para español o `http://localhost:8080/en/` para inglés
3. Verificar que los enlaces internos funcionen correctamente (deben terminar en `.html`)
4. Verificar que los enlaces de anchor correspondan a headers de sección reales

## Pipeline CI/CD

El workflow de GitHub Actions (`/.github/workflows/main.yml`) se ejecuta en pull requests a master:
- Usa Node.js 16
- Ejecuta `npm ci` seguido de `npm run docs:build`
- Asegura que la documentación se construya exitosamente antes del merge
