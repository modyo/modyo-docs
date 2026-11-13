---
search: true
---

# Consentimiento

El dashboard de Consentimiento muestra cómo deciden los titulares de un reino sobre las definiciones de consentimiento publicadas, cuántos tienen un consentimiento que ya no está vigente y cómo avanzan las solicitudes de derechos.

Este dashboard solo aparece si el plan de la cuenta incluye el módulo de [Consentimiento](/es/platform/customers/consent.html) y se requiere el permiso **Ver Dashboards de Consentimiento**, que forma parte de **Administrar Insights**. Solo se listan los reinos en producción que tienen al menos una definición publicada.

### Filtros disponibles

- **Reino**: El reino que se analiza.
- **Definición**: Limita las métricas a una definición de consentimiento publicada.
- **Rango de fechas**: El período de los indicadores y de los gráficos. Al abrir el dashboard, el rango preseleccionado es **Últimos 3 meses**.

### Indicadores Principales

- **Consentimientos otorgados**: Decisiones de otorgar registradas en el período.
- **Consentimientos no otorgados**: Decisiones de no otorgar registradas en el período.
- **Consentimientos revocados**: Retiros de consentimiento registrados en el período.
- **Titulares con brechas**: Titulares cuya última decisión sobre una definición no está vigente.

### Consentimientos por Semana

Gráfico de los consentimientos otorgados y revocados en cada semana del período.

### Cumplimiento por Definición

Tabla con el estado actual de los titulares de cada definición publicada y su porcentaje de **Cumplimiento**. Los estados son:

- **Vigentes**: El titular tiene un acuerdo vigente con la versión actual.
- **Desactualizados**: El titular decidió sobre una versión anterior y se publicó un cambio material.
- **Vencidos**: Se cumplió la vigencia del consentimiento.
- **No otorgados**: El titular no otorgó el consentimiento.
- **Revocados**: El titular retiró el consentimiento.

:::tip Métricas que no dependen del período
**Cumplimiento por definición** y **Titulares con brechas** muestran el estado actual de los titulares, sin importar el rango de fechas seleccionado. Cada titular con brechas se cuenta una sola vez, por su brecha más grave.
:::

### Solicitudes de Derechos por Tipo

Tabla con los ítems de solicitudes de derechos recibidos en el período para cada tipo de derecho, con la cantidad de **Recibidas**, **Resueltas** y **Vencidas**.
