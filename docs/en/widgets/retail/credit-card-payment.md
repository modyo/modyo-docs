---
search: true
---

# Pagos de Tarjeta de Crédito

La plataforma ofrece un Widget de pago de tarjeta de crédito, con tal de que el cliente pueda realizar la transacción directamente desde su portal de pagos.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-credit-card-payment
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/pagos-de-tarjeta-de-credito)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/pagos-de-tarjeta-de-credito" width="100%"  frameBorder="0"  style="min-height:675px;overflow:auto;margin-top:20px;"></p> 

<p spaces-before="0">
  Para realizar la transacción, el cliente verá predeterminadamente:
</p>

<table spaces-before="0">
  <tr>
    <th align="left">
      Funcionalidad
    </th>
    
    <th align="left">
      Descripción
    </th>
  </tr>
  
  <tr>
    <td align="left">
      Tarjeta de crédito a pagar
    </td>
    
    <td align="left">
      Presenta la tarjeta de crédito en la cual se realizará la transacción
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Deuda de pago nacional
    </td>
    
    <td align="left">
      Presenta el monto total que se ha utilizado en el cupo nacional de la tarjeta, incluyendo lo que no está facturado.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Deuda de pago internacional
    </td>
    
    <td align="left">
      Presenta el monto total que se ha utilizado en el cupo internacional de la tarjeta, incluyendo lo que no está facturado.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Selección de cuenta de origen del pago
    </td>
    
    <td align="left">
      El cliente puede seleccionar la cuenta de la cual se extraerá el monto de pago.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto mínimo a pagar
    </td>
    
    <td align="left">
      Muestra el monto mínimo a pagar de la deuda, para que esta no quede morosa.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto total a pagar
    </td>
    
    <td align="left">
      Muestra el monto total facturado de la deuda a pagar.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto personalizado a pagar
    </td>
    
    <td align="left">
      Permite al cliente seleccionar un monto personalizado para pagar de la deuda.
    </td>
  </tr>
</table>

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
