---
search: true
---

# Resumen General

Este widget permite conocer la información consolidada y la evolución del patrimonio del cliente, ofreciendo la opción de filtrar los datos por cuentas, tipo de inversión o moneda invertida.

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/resumen-general" width="100%"  frameBorder="0"  style="visibility:hidden;min-height:972px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción |
|-----|-----|
| Patrimonio Consolidado | Muestra la información consolidada del patrimonio total del cliente al cierre del día anterior. Entrega un resumen del patrimonio invertido por el cliente, visualizado cuentas, productos y la moneda en al que se realiza la operación. |
| Evolución Mensual | Presenta el patrimonio inicial y final del mes seleccionado, junto a los movimientos del mes (aportes, rescates, cambios patrimoniales). |
| Evolución Anual | Muestra una comparación entre la evolución del patrimonio en el año actual a la fecha (YTD) y la evolución de la inversión durante el año anterior (desde el inicio a final del año). |

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
