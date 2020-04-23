---
search: true
---

# Créditos Hipotecarios

Este widget permite hacer una simulación de un crédito hipotecario y comenzar la solicitud del mismo con las variables que cada cliente necesite.

[Open in new tab](https://widgets-es.modyo.com/personas/retail-mortgage-loan)
<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-mortgage-loan" width="100%"  frameBorder="0" style="min-height:900px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción |
|-----|-----|
| Monto del Crédito | Permite ingresar el monto en UF del crédito que el cliente quiere simular. |
| Pie | Permite ingresar el monto en UF del pie que incluirá en la solicitud. |
| Tipo de vivienda | Permite escoger el tipo de inmueble que desea adquirir con el crédito. |
| Plazo en Años | Permite elegir la cantidad de años durante los cuales se realizará el pago del crédito. |
| Meses de gracia	 | Permite seleccionar la cantidad de meses de gracia que el cliente desea agregar en su simulación. |
| Seguros	 | Entrega la posibilidad de elegir qué seguros se incluirán en la simulación del crédito. |
| Resumen de simulación | Presenta información general sobre la simulación de créditro realizada. Incluye costo total del crédito en pesos y UF, cantidad de años, valor de dividendo, tasas de interés respectivas y porcentaje de financiamiento. |
| Detalle de simulación	| Muestra la información detallada de la simulación de crédito. Incluye monto líquido, plazo, pie, valor de dividendo, tipo de propiedad, impuestos, seguros y gastos, entre otros. |
| Solicitud	 | Permite confirmar la simulación y gestionar la solicitud del crédito hipotecario con la institución. |

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
