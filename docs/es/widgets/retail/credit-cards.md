---
search: true
---

# Tarjetas de Crédito

Ve los datos y operaciones de sus tarjetas de crédito, para realizar transacciones en ellas.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-credit-cards
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/tarjetas-de-credito)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/tarjetas-de-credito" width="100%"  frameBorder="0"  style="min-height:900px;overflow:auto;margin-top:20px;"/>

| Funcionalidad                 | Descripción                                                                                                                                                                                                                                                        |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resumen de Tarjeta de Crédito | Presenta un resumen del estado de la tarjeta de crédito. <br>La información específica asociada a los saldos (disponible, utilizado, y cupo total) se presenta de manera numérica y gráfica.                                                                    |
| Consulta de Saldo             | Muestra los cupos de la tarjeta específica por tipo de moneda, además de indicadores de gastos en comparación con el cupo disponible.                                                                                                                |
| Estado de Cuenta              | Muestra el estado de cuenta con los movimientos del último periodo facturado para una tarjeta de crédito.                                                                                                                                                          |
| Últimos movimientos           | Muestra todos los movimientos nacionales e internacionales que no están facturados.                                                                                                                                                                                |
| Pagar deuda                   | Corresponde a la funcionalidad de pago de la deuda. Este pago de deuda puede ser total o parcial. Hacer click en este botón llevará al Widget de Pago de Tarjetas, donde se podrá seleccionar la opción de pago de deuda nacional o internacional. |

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
