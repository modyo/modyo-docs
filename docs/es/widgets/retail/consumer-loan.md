---
search: true
---

# Crédito de Consumo

Hace una simulación de un crédito de consumo y comienza la solicitud del mismo con las variables que necesites.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/credito-de-consumo)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/credito-de-consumo" width="100%"  frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"/>

| Funcionalidad         | Descripción                                                                                                                                                                 |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Monto del Crédito     | Permite ingresar el monto del crédito en pesos que el cliente quiere simular.                                                                                               |
| Cuotas                | Permite elegir la cantidad de cuotas en las que el cliente quiere simular el crédito de consumo.                                                                            |
| Meses de gracia       | Permite seleccionar la cantidad de meses de gracia que el cliente desea agregar en su simulación.                                                                           |
| Fechas de no pago     | Entrega la posibilidad de elegir los meses en los que el cliente no realizará el pago del crédito, si lo permite.                                                            |
| Abono en cuenta       | Permite seleccionar la cuenta de destino a la cual se cargará el monto solicitado si el crédito es aprobado por la institución.                                             |
| Seguros               | Entrega la posibilidad de elegir qué seguros se incluirán en la simulación del crédito.                                                                                     |
| Resumen de simulación | Presenta información general sobre la simulación de crédito realizada. Incluye costo total del crédito, cantidad de cuotas, valor de cuota y tasas de interés respectivas. |
| Detalle de simulación | Muestra la información detallada de la simulación de crédito. Incluye monto líquido, impuestos, seguros, gastos, entre otros.                                              |
| Solicitud             | Permite confirmar la simulación y gestionar la solicitud del crédito de consumo con la institución.                                                                         |

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
