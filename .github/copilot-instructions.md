# Contexto para Copilot Agent

Este proyecto es la documentación técnica oficial de Modyo y está construido con VitePress 1.x.

Por favor, ten en cuenta este flujo de trabajo y contexto al sugerir cambios, traducciones o automatizaciones para la documentación.

## Comandos de Desarrollo y Build

```bash
# Requiere Node.js 24 (ver .nvmrc)
npm install

# Iniciar servidor de desarrollo (http://localhost:8080)
npm run docs:dev

# Construir el sitio de documentación (falla si hay enlaces internos rotos)
npm run docs:build

# Ejecutar los tests de la configuración de VitePress
npm test
```

## Estructura del Repositorio

### Organización del Contenido
- **Español (Principal)**: `/docs/es/` - Toda la documentación original se escribe primero en español
- **Inglés (Secundario)**: `/docs/en/` - Las traducciones deben generarse cada vez que cambie un archivo en español (los cambios se sobrescribirán)
- **Configuración del sitio**: `/docs/.vitepress/config.mts` - Idiomas, búsqueda, sitemap y opciones de markdown
- **Navegación**: `/docs/.vitepress/navigation.cjs` - Navbar y sidebar de cada idioma
- **Tema**: `/docs/.vitepress/theme/` - Tema por defecto de VitePress extendido con estilos de Modyo y el layout del home
- **Assets Públicos**: `/docs/public/` - Assets estáticos

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

### Configuración VitePress
- Navbar y sidebar se definen en `/docs/.vitepress/navigation.cjs` y se convierten al formato de VitePress durante el build
- Una entrada del sidebar indicada solo con su ruta toma el texto del `title` del frontmatter o del H1 de la página
- Los archivos `README.md` se publican como índice de su carpeta (`/es/platform/` muestra `docs/es/platform/README.md`)
- Soporta Algolia DocSearch; los selectores del crawler están en `/algolia.json`
- Usa Google Tag Manager para analytics
- El índice de la página muestra los títulos H2 y H3

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

1. Iniciar el servidor de desarrollo: `npm run docs:dev`
2. Navegar a `http://localhost:8080/es/` para español o `http://localhost:8080/en/` para inglés
3. Verificar que los enlaces internos funcionen correctamente (deben terminar en `.html`)
4. Verificar que los enlaces de anchor correspondan a headers de sección reales

## Pipeline CI/CD

El workflow de GitHub Actions (`/.github/workflows/main.yml`) se ejecuta en pull requests a master:
- Usa Node.js 16
- Ejecuta `npm ci` seguido de `npm run docs:build`
- Asegura que la documentación se construya exitosamente antes del merge
