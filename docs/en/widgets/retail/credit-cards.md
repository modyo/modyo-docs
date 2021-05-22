---
search: true
---

# Tarjetas de Crédito

Modyo ofrece un Widget que permite al cliente ver los datos y operaciones de sus tarjetas de crédito, para realizar transacciones en ella.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-credit-cards
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/tarjetas-de-credito)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/tarjetas-de-credito" width="100%"  frameBorder="0"  style="min-height:900px;overflow:auto;margin-top:20px;"></p>

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
      Resumen de Tarjeta de Crédito
    </td>
    
    <td align="left">
      Presenta un resumen del estado de la tarjeta de crédito. <br><br>La información específica asociada a los saldos (disponible, utilizado y cupo total) se presenta de manera numérica y gráfica.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Consulta de Saldo
    </td>
    
    <td align="left">
      Esta consulta muestra los cupos de la tarjeta específica por tipo de moneda, además de indicadores de gastos en comparación con el Cupo disponible.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Estado de Cuenta
    </td>
    
    <td align="left">
      Muestra el estado de cuenta con los movimientos del último periodo facturado para una tarjeta de crédito.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Últimos movimientos
    </td>
    
    <td align="left">
      Muestra todos los movimientos nacionales e internacionales que no están facturados.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Pagar deuda
    </td>
    
    <td align="left">
      Corresponde a la funcionalidad de pago de la deuda.<br><br> Este pago de deuda puede ser total o parcial.<br><br> Hacer click en este botón llevará al Widget de Pago de Tarjetas, donde se podrá seleccionar la opción de pago de deuda nacional o internacional.
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
