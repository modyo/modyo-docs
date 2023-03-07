---
search: true
---

# Transferencia

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::

Permite a los clientes transferir fondos entre sus cuentas de inversión y su cuenta corriente inscrita.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-transfer
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/transferencia)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/transferencia" width="100%"  frameBorder="0"  style="min-height:680px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción                                                                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transferir    | Permite transferir fondos entre cuentas de inversión. Permite solicitar una transferencia de fondos hacia cuentas corrientes del cliente, previamente inscritas. |

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
