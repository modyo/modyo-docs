---
search: true
---

# Digital Factory

El dashboard de Digital Factory muestra métricas sobre la productividad del equipo y el flujo de creación de contenido.

### Métricas Principales

Cinco contadores que resumen la actividad del equipo sobre los cuatro tipos de recurso que mide el dashboard: entradas, páginas, widgets y plantillas.

- **Creados**: elementos nuevos de cualquiera de esos cuatro tipos
- **Editados**: modificaciones guardadas
- **Enviados a Revisión**: elementos que entraron al flujo de aprobación
- **Aprobados**: elementos aprobados y listos para publicar
- **Publicados**: elementos que pasaron a producción

Cada contador incluye un indicador de tendencia comparando con el período anterior.

:::tip Tip
Los contadores no distinguen el tipo de recurso: **Creados** sube igual si el equipo creó una entrada, una página, un widget o una plantilla. Para saber dónde se concentró el trabajo, mira el gráfico **Actividad por Contenido**.
:::

### Filtros disponibles

- El selector de rango de fechas
- **Aplicación**, con las aplicaciones activas de la cuenta
- **Espacio**, con los espacios de la cuenta

Ambos desplegables parten en **Todos**.

:::warning Atención
**Aplicación** y **Espacio** se suman, no se cruzan. Al elegir una aplicación, el dashboard sigue contando la actividad de entradas de todos los espacios de la cuenta; al elegir un espacio, sigue contando la actividad de páginas, widgets y plantillas de todas las aplicaciones. Y si eliges una aplicación y un espacio a la vez, obtienes la suma de ambos, nunca la intersección.
:::

### Recursos creados vs publicados

Gráfico de líneas que compara el volumen de contenido creado contra el publicado en el tiempo, permitiendo identificar posibles cuellos de botella en el flujo editorial.

### Actividad por Usuario

Mapa de calor que cruza a los administradores con los cinco estados del flujo: **Creados**, **Editados**, **Enviados a Revisión**, **Aprobados** y **Publicados**. Cada celda se pinta más intensa mientras más eventos acumule ese administrador en ese estado.

El panel muestra como máximo los 20 administradores con más actividad en el período, y cada fila se identifica solo con el nombre de pila del administrador.

:::tip Tip
Si dos personas del equipo comparten nombre de pila, verás dos filas con la misma etiqueta. Y si más de 20 administradores registran actividad en el período, los de menor actividad quedan fuera del mapa: acota el rango de fechas para verlos.
:::

### Actividad por Contenido

Gráfico de barras que compara el total de eventos de los cuatro tipos de recurso que mide el dashboard:

- **Entradas**: las entradas de tus espacios
- **Layouts**: las páginas de tus aplicaciones
- **Widgets**: las definiciones de widget
- **Plantillas**: las plantillas de tus aplicaciones

Cada barra suma los cinco estados del flujo para ese tipo de recurso, así que el gráfico te dice dónde se concentra el trabajo del equipo, no en qué etapa está.

:::warning Atención
La navegación de tus aplicaciones no se mide en este dashboard, ni tampoco los assets ni ningún otro elemento fuera de esos cuatro tipos: sus cambios no aparecen ni en las barras ni en los contadores superiores.
:::