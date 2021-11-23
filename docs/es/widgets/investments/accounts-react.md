---
search: true
---

# Cuentas - React

El Widget de Cuentas muestra el detalle de todas las cuentas de inversión de un usuario, con información relevante en gráficos y números, además de presentar los movimientos realizados junto con las cartolas y extractos.

:::tip Tip
Este widget fue desarrollado utilizando React, es prácticamente igual que [Cuentas](/es/widgets/investments/accounts) en todos los aspectos.

Para conocer más acerca de React, vea [su documentación](https://reactjs.org/).
:::

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-accounts-react
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/cuentas-react)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/cuentas-react" width="100%" frameBorder="0"  style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Funcionalidad                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resúmenes de Cuentas             | Incorpora todas las cuentas de inversión que el cliente tiene asociadas. Cada cuenta de inversión del cliente tiene una pestaña con toda la información relacionada.                                                                                                                                                                                                                                                                                      |
| Cuenta de Inversión              | Concentra toda la información asociada a una cuenta de inversión específica, presentando los datos de manera numérica y gráfica. Incluye una zona con los Dividendos Pagados al día de la consulta y otra para las acciones en cartera. Permite configurar la Cuenta, ver el Detalle de las Inversiones, obtener las Cartolas, Transferir y Abonar a la Cuenta.                                                                                           |
| Configuración Cuenta             | Permite definir un nombre para la cuenta de inversión, además de configurar el envío de información por correo electrónico para las cartolas y las confirmaciones de compra/venta de instrumentos de inversión (acciones, fondos mutuos, etc.).                                                                                                                                                                                                           |
| Cartolas / Extractos             | Muestra la lista de cartolas que se quieren revisar dentro de un rango de fechas configurable. Las cartolas aparecen como PDFs que se pueden descargar y visualizar.                                                                                                                                                                                                                                                                                      |
| Detalle de Cuenta                | Presenta una lista con los tipos de instrumentos que existen en la cuenta de inversión. Incluye un resumen de todos los instrumentos específicos que corresponden al tipo de inversión seleccionado. Muestra información de custodia, precios y distribución de las inversiones. A través de los resúmenes, se puede revisar el detalle con el histórico de las operaciones. Permite ver los movimientos asociados a la caja de la cuenta de inversiones. |
| Movimientos en Detalle de Cuenta | Entrega un conjunto de opciones que permite seleccionar período y tipos de movimientos, incluidos los movimientos en tránsito. Muestra los movimientos específicos y su detalle, además de todas las operaciones que están en vuelo y que aún no finalizan.                                                                                                                                                                                               |
