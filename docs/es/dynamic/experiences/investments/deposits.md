---
search: true
---

# Depósitos

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::



Permite que el usuario pueda cargar fondos de manera fácil y rápida a sus cuentas de inversión.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-deposits
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/depositos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/depositos" width="100%"  frameBorder="0"  style="min-height:860px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Abonar        | Permite abonar fondos a una cuenta de inversión utilizando botones de pago de diferentes instituciones bancarias. |

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
