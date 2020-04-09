---
search: true
---

# Créditos

Modyo también ofrece un widget que permite ver una vista general de los créditos que el cliente tenga con la institución financiera, de manera detallada y con sus datos actualizados.

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-loans" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Propiedades

| Funcionalidad       | Descripción |
|:--------------------|:-|
| Cotización          | Permite al cliente cotizar un crédito. Al hacer lick |
| Consulta de Saldo   | Esta consulta muestra los cupos de la tarjeta específica por tipo de moneda, además de indicadores de gastos en comparación con el Cupo disponible. |
| Estado de Cuenta    | Muestra el estado de cuenta con los movimientos del último periodo facturado para una tarjeta de crédito. |
| Últimos movimientos | Muestra todos los movimientos nacionales e internacionales que no están facturados. |
| Pagar deuda         | Corresponde a la funcionalidad de pago de la deuda.<br><br> Este pago de deuda puede ser total o parcial.<br><br> Hacer click en este botón llevará al widget de pagos, donde se podrá seleccionar la opción de pago de deuda nacional o internacional. |
|                     |

- Simula tu crédito de consumo: Permite simular créditos de consumo a cada cliente. Para ello, deriva al widget de créditos para hacer la simulación y después la solicitud si es que este la desea.

- Simula tu crédito hipotecario: Permite simular el crédito hipotecario a solicitar. Para ello, deriva al widget de créditos hipotecarios donde podrá ver las distintas opciones que la institución financiera le puede ofrecer.

- Consumo en pesos: El cliente puede ver su crédito detallado, además del saldo pendiente adeudado a la institución, las fechas de pago y la cuota actual a pagar.

- Crédito de vivienda: Muestra los detalles del crédito hipotecario solicitado, una gráfica de lo que se adeuda y el valor de la siguiente cuota a pagar.

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
