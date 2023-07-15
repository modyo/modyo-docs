---
search: true
---

# Sitio Público

El sitio público es uno de los patrones más comunes en el desarrollo con Modyo.

Objetivos:

- Gobernabilidad central de contenido, con permisos bien definidos
- Gobernabilidad de presentación, con control de publicación
- Sistema de diseño
- Modularidad
- Rendimiento
- Accesibilidad
- SEO
- Internacionalización

### Uso de múltiples Layouts

Los Layouts son una excelente forma para diferenciar contextos dentro de un sitio.

### Uso de Snippets

### Uso de Widgets

### Uso de Stages

### Uso de Ambientes Previos

El uso de ambientes (físicos) previos para el trabajo con sitios públicos no está recomendado, debido a las dificultades
de mantener el contenido sincronizado entre las diferentes infraestructuras. Si bien algunas productos de experiencia
digital proveen herramientas de sincronización, en nuestra experiencia con clientes la mayoría de las veces estas no
uncionan de forma adecuada y provocan errores que complejisan los flujos ágiles de publicación.

:::tip Prueba de versiones
Modyo recomienda el uso de ambientes físicos para experimentos y pruebas con las nuevas versiones, en dónde le uso de
este no se encuentra relacionado con el flujo normal de cmabios en producción.
:::

### Uso de Team Review

### Uso de Micro Frontends en los sitios públicos

:::warning Integración continua
El uso de Micro Frontends dentro de un sitio público podría implicar la mantención de pipelines de integración continua
y procesos de devops. En general esto requiere de apoyo de las áreas de IT dentro de la organización, por lo que debe
considerarse esta complejidad.
:::
