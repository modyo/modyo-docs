---
search: true
---

# Histórico de Transferencias

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::

Presenta todos los datos relevantes sobre las operaciones en tránsito asociadas a la compra y venta de acciones del usuario, para que encuentre rápidamente su información consolidada en la plataforma.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-transfer-history
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/historico-de-transferencias)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/historico-de-transferencias" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Funcionalidad           | Descripción                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Operaciones en Tránsito | Muestra el listado con las operaciones en tránsito asociadas a la compra/venta de acciones. Permite cancelar operaciones en tránsito. |
| Cancelar Operación      | Despliega información de la operación específica a cancelar, para que el cliente confirme la opción.                                  |

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
