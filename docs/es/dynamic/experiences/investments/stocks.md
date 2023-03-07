---
search: true
---

# Acciones

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::

Encuentra toda la información sobre las acciones disponibles, junto con Información de Mercado, y un módulo para hacer transacciones en línea de manera ágil y simple.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-stocks
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/acciones)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/acciones" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Funcionalidad          | Descripción                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Layout de Acciones     | Muestra el conjunto de acciones transables disponibles. Muestra un listado con las operaciones en tránsito asociadas a las acciones. Muestra la información de mercado para una Acción específica. Permite cancelar operaciones en tránsito, de ser necesario. |
| Información de Mercado | Muestra la información disponible para la acción, como la evolución, las puntas de mercado, monto transado, último precio, y posibles documentos específicos de la institución. Permite comprar o vender una acción seleccionada.                               |
| Compra de Acciones     | Permite realizar la compra de la acción seleccionada, definiendo la cuenta de inversión, la cantidad de acciones, el monto máximo al que se desea comprar, y el tiempo de duración de la orden.                                                                |
| Venta de Acciones      | Permite realizar la venta de la acción seleccionada, definiendo la cuenta de inversión, la cantidad de acciones que se desean vender, y el precio mínimo de venta.                                                                                              |

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
