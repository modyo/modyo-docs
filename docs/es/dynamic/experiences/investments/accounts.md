---
search: true
---

# Cuentas

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::

Muestra el detalle de todas las cuentas de inversión de un usuario con la información relevante en gráficos y números. Además presenta los movimientos realizados junto con las cartolas y extractos.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-accounts
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/cuentas" width="100%" frameBorder="0"  style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Funcionalidad                    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resúmenes de Cuentas             | Incorpora todas las cuentas de inversión que el cliente tiene asociadas. Cada cuenta de inversión del cliente tiene una pestaña con toda la información relacionada.                                                                                                                                                                                                                                                                                      |
| Cuenta de Inversión              | Concentra toda la información asociada a una cuenta de inversión específica, presentando los datos de manera numérica y gráfica. Incluye una zona con los Dividendos Pagados al día de la consulta y otra para las acciones en cartera. Permite configurar la Cuenta, ver el Detalle de las Inversiones, obtener las Cartolas, Transferir, y Abonar a la Cuenta.                                                                                           |
| Configuración Cuenta             | Permite definir un nombre para la cuenta de inversión, además de configurar el envío de información por correo electrónico para las cartolas y las confirmaciones de compra/venta de instrumentos de inversión (acciones, fondos mutuos, etc.).                                                                                                                                                                                                           |
| Cartolas / Extractos             | Muestra la lista de cartolas que se quieren revisar dentro de un rango de fechas configurable. Las cartolas aparecen como PDFs que se pueden descargar y visualizar.                                                                                                                                                                                                                                                                                      |
| Detalle de Cuenta                | Presenta una lista con los tipos de instrumentos que existen en la cuenta de inversión. Incluye un resumen de todos los instrumentos específicos que corresponden al tipo de inversión seleccionado. Muestra información de custodia, precios y distribución de las inversiones. A través de los resúmenes, se puede revisar el detalle con el histórico de las operaciones. Permite ver los movimientos asociados a la caja de la cuenta de inversiones. |
| Movimientos en Detalle de Cuenta | Entrega un conjunto de opciones que permite seleccionar período y tipos de movimientos, incluidos los movimientos en tránsito. Muestra los movimientos específicos y su detalle, además de todas las operaciones que están en vuelo y que aún no finalizan.                                                                                                                                                                                               |

<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.height = ht + 4 + "px";
          }
      }
      // iframed document sends its height using postMessage
      function handleDocHeightMsg(e) {
          // check origin
          if ( e.origin === 'https://widgets-es.modyo.com' ) {
              // parse data
              var data = JSON.parse( e.data );

              console.log('data:', data)
              // check data object
              if ( data['docHeight'] ) {
                  setIframeHeightCO( 'widgetFrame', data['docHeight'] );
              } else {
                  setIframeHeightCO( 'widgetFrame', 700 );
              }
          }
      }

      // assign message handler
      if ( window.addEventListener ) {
          window.addEventListener('message', handleDocHeightMsg, false);
      }
    }
  }

</script>