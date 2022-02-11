---
search: true
---

# Pagos de Tarjeta de Crédito

Realiza pagos con tarjeta de crédito, el cliente podrá realizar la transacción directamente desde su portal de pagos.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-credit-card-payment
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/pagos-de-tarjeta-de-credito)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/pagos-de-tarjeta-de-credito" width="100%"  frameBorder="0"  style="min-height:675px;overflow:auto;margin-top:20px;"/>

Para realizar la transacción, el cliente verá predeterminadamente:

| Funcionalidad                          | Descripción                                                                                                              |
|:---------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| Tarjeta de crédito a pagar             | Presenta la tarjeta de crédito en la cual se realizará la transacción                                                    |
| Deuda de pago nacional                 | Presenta el monto total que se ha utilizado en el cupo nacional de la tarjeta, incluyendo lo que no está facturado.      |
| Deuda de pago internacional            | Presenta el monto total que se ha utilizado en el cupo internacional de la tarjeta, incluyendo lo que no está facturado. |
| Selección de cuenta de origen del pago | El cliente puede seleccionar la cuenta de la cual se extraerá el monto de pago.                                          |
| Monto mínimo a pagar                   | Muestra el monto mínimo a pagar de la deuda, para que esta no quede morosa.                                              |
| Monto total a pagar                    | Muestra el monto total facturado de la deuda a pagar.                                                                    |
| Monto personalizado a pagar            | Permite al cliente seleccionar un monto personalizado para pagar de la deuda.                                            |

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
