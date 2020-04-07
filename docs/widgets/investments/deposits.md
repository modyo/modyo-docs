---
search: true
---

# Depósitos

El widget de Abonos permite que el usuario pueda cargar fondos de manera fácil y rápida a sus cuentas de inversión.

<iframe id="widgetFrameDepositsES" src="https://widgets-es.modyo.com/inversiones/depositos" width="100%"  frameBorder="0"  style="visibility:hidden;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Abonar        | Permite abonar fondos a una cuenta de inversión utilizando botones de pago de diferentes instituciones bancarias. |

<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.visibility = 'hidden';
            // some IE versions need a bit added or scrollbar appears
            ifrm.style.height = ht + 4 + "px";
            ifrm.style.visibility = 'visible';
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
                  setIframeHeightCO( 'widgetFrameDepositsES', data['docHeight'] );
              } else {
                  setIframeHeightCO( 'widgetFrameDepositsES', 700 );
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
