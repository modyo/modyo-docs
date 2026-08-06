---
search: true
---

# Modyo Insights

Modyo Insights es el centro de inteligencia de negocio de la plataforma, donde convergen y se analizan todos los datos generados por los diferentes módulos de Modyo, permitiéndote obtener una visión integral y tomar decisiones estratégicas basadas en información consolidada.

### ¿Qué es Modyo Insights?

**Modyo Insights** centraliza y procesa la información proveniente de los módulos de Modyo y la presenta en cinco dashboards fijos. Cada uno reúne los contadores, gráficos y filtros de un módulo:

- [Apps](/es/platform/insights/apps.html): tráfico y navegación de tus aplicaciones web
- [Customers](/es/platform/insights/customers.html): actividad de los usuarios, campañas y formularios de un reino
- [Digital Factory](/es/platform/insights/digital-factory.html): actividad del equipo sobre contenidos, widgets y páginas
- [Payments](/es/platform/insights/payments.html): órdenes, medios de pago e ingresos de un reino
- [Origination](/es/platform/insights/origination.html): respuestas de originación, embudo de conversión y abandono

Cada dashboard es una pantalla independiente, con sus propios filtros y su propio período. Insights no correlaciona datos entre módulos, no genera reportes descargables y no permite crear ni personalizar dashboards. Además, cada miembro ve solo los dashboards que su rol le permite.

### Fuentes de datos

Modyo Insights recopila y procesa información de múltiples fuentes dentro de la plataforma:

#### Desde Channels
- Tráfico y visitas a sitios
- Interacciones con widgets y páginas
- Rendimiento de navegación
- Patrones de uso por dispositivo

#### Desde Content
- Publicaciones y actualizaciones
- Rendimiento del contenido
- Actividad editorial del equipo
- Uso de assets y recursos

#### Desde Customers
- Registros y actividad de usuarios
- Segmentación y comportamiento
- Conversiones en formularios
- Engagement con campañas

#### Desde Origination
- Flujos de onboarding completados
- Tasas de conversión por etapa
- Tiempo promedio de completación
- Abandono de formularios
- Documentos y verificaciones procesadas

#### Desde Payments
- Transacciones y órdenes
- Métodos de pago utilizados
- Tendencias de compra
- Estados de procesamiento

### Tipos de visualizaciones

Modyo Insights ofrece diferentes formatos de presentación de datos según el tipo de información:

- **Indicadores clave (KPIs)**: Métricas principales y contadores que muestran el estado actual de forma resumida
- **Gráficos temporales**: Visualizaciones de líneas y barras para analizar tendencias y evolución en el tiempo
- **Listados**: Paneles de nombre y valor, como **Campañas Recientes** y **Formularios Recientes** en el dashboard de Customers. No son tablas: muestran hasta cinco filas y no se ordenan ni se filtran
- **Mapas de calor**: Representación visual de patrones de actividad, como **Actividad por Usuario** en el dashboard de Digital Factory
- **Gráficos de torta y de embudo**: Visualizaciones de proporción sobre el total, como **Engagement** en el dashboard de Customers o el **Embudo de conversión** en el de Origination

### Capacidades de análisis

Los datos pueden ser analizados y segmentados mediante:

- **Filtros temporales**: El selector de rango de fechas, común a los cinco dashboards
- **Segmentación contextual**: Los filtros propios de cada dashboard, como sitio, espacio, reino, segmento, originación, estado de la orden o medio de pago
- **Comparativas**: El porcentaje de variación de cada contador respecto del período anterior
- **Enlace al detalle**: En los paneles **Campañas Recientes** y **Formularios Recientes** del dashboard de Customers, cada fila lleva a la ficha de esa campaña o a las respuestas de ese formulario

### Rango de fechas y comparación de períodos

Los cinco dashboards comparten el mismo selector de rango de fechas en la barra de filtros, con un conjunto cerrado de opciones:

- **Últimos 7 días**
- **Últimos 30 días**
- **Un mes a la fecha**: desde el primer día del mes en curso hasta hoy
- **Últimos 3 meses**
- **Últimos 6 meses**
- **Últimos 12 meses**
- **Rango Personalizado**: eliges la fecha de inicio y la de término, y confirmas con **Seleccionar**

Al abrir un dashboard, el rango preseleccionado es **Últimos 7 días** en Apps y **Últimos 3 meses** en Customers, Digital Factory, Payments y Origination.

Los contadores que muestran un porcentaje y una flecha comparan el rango seleccionado contra un período de la misma duración inmediatamente anterior. Si eliges **Últimos 30 días**, la comparación es contra los 30 días previos a ese tramo.

:::tip Tip
Cuando el período anterior no registró ningún dato, el contador se muestra sin porcentaje ni flecha, porque no hay base sobre la cual calcular la variación.
:::

### Acceso y permisos

El acceso a Insights se otorga en roles con scope **Organización**, dentro del grupo de permisos **Insights**. El permiso agrupado **Administrar Insights** habilita el módulo completo y reúne cinco permisos que también puedes otorgar por separado:

- **Ver Dashboards de Aplicaciones**
- **Ver Dashboards de Clientes**
- **Ver Dashboards de Fábrica Digital**
- **Ver Dashboards de Pagos**
- **Ver Dashboards de Originaciones**

El comportamiento que vas a observar es el siguiente:

1. El ícono de **Insights** del menú lateral aparece solo si el miembro tiene al menos uno de los cinco permisos. Si no tiene ninguno, el módulo no se muestra.
2. Al entrar desde el ícono, el miembro aterriza en el primer dashboard que tenga permitido, en el orden **Aplicaciones**, **Clientes**, **Fábrica digital**, **Pagos**, **Originaciones**.
3. Cada dashboard exige su propio permiso, así que un miembro puede ver unos y no otros.

Los roles predeterminados **Default user** y **Default admin** ya incluyen **Administrar Insights**. En cambio, los roles con scope Channels, Content o Customers no otorgan acceso a Insights: un miembro que solo tenga roles de sitio, espacio o reino no ve el módulo.

Para habilitar únicamente algunos dashboards, crea un [rol a medida](/es/platform/core/roles.html#roles-a-medida) con scope **Organización** y marca solo los permisos que necesitas.
