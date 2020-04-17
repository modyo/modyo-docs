---
search: true
---

# Tarjetas de Crédito

Modyo ofrece un widget que permite al cliente ver los datos y operaciones de sus tarjetas de crédito, para realizar transacciones en ella.

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-credit-cards" width="100%"  frameBorder="0"  style="visibility:hidden;min-height:900px;overflow:auto;margin-top:20px;"/>

| Funcionalidad                 | Descripción                                                                                                                                                                                                                                                        |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resumen de Tarjeta de Crédito | Presenta un resumen del estado de la tarjeta de crédito. <br><br>La información específica asociada a los saldos (disponible, utilizado y cupo total) se presenta de manera numérica y gráfica.                                                                    |
| Consulta de Saldo             | Esta consulta muestra los cupos de la tarjeta específica por tipo de moneda, además de indicadores de gastos en comparación con el Cupo disponible.                                                                                                                |
| Estado de Cuenta              | Muestra el estado de cuenta con los movimientos del último periodo facturado para una tarjeta de crédito.                                                                                                                                                          |
| Últimos movimientos           | Muestra todos los movimientos nacionales e internacionales que no están facturados.                                                                                                                                                                                |
| Pagar deuda                   | Corresponde a la funcionalidad de pago de la deuda.<br><br> Este pago de deuda puede ser total o parcial.<br><br> Hacer click en este botón llevará al widget de Pago de Tarjetas, donde se podrá seleccionar la opción de pago de deuda nacional o internacional. |

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
