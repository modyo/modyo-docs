---
search: true
---

# Crédito de Consumo

Este Widget permite hacer una simulación de un crédito de consumo y comenzar la solicitud del mismo con las variables que cada cliente necesite.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/credito-de-consumo)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/credito-de-consumo" width="100%"  frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"></p>

<table spaces-before="0">
  <tr>
    <th>
      Funcionalidad
    </th>
    
    <th>
      Descripción
    </th>
  </tr>
  
  <tr>
    <td>
      Monto del Crédito
    </td>
    
    <td>
      Permite ingresar el monto del crédito en pesos que el cliente quiere simular.
    </td>
  </tr>
  
  <tr>
    <td>
      Cuotas
    </td>
    
    <td>
      Permite elegir la cantidad de cuotas en las que el cliente quiere simular el crédito de consumo.
    </td>
  </tr>
  
  <tr>
    <td>
      Meses de gracia
    </td>
    
    <td>
      Permite seleccionar la cantidad de meses de gracia que el cliente desea agregar en su simulación.
    </td>
  </tr>
  
  <tr>
    <td>
      Fechas de no pago
    </td>
    
    <td>
      Entrega la posibilidad de elegir los meses en los que el cliente no realizará el pago del crédito, si lo permite
    </td>
  </tr>
  
  <tr>
    <td>
      Abono en cuenta
    </td>
    
    <td>
      Permite seleccionar la cuenta de destino a la cual se cargará el monto solicitado si el crédito es aprobado por la institución.
    </td>
  </tr>
  
  <tr>
    <td>
      Seguros
    </td>
    
    <td>
      Entrega la posibilidad de elegir qué seguros se incluirán en la simulación del crédito.
    </td>
  </tr>
  
  <tr>
    <td>
      Resumen de simulación
    </td>
    
    <td>
      Presenta información general sobre la simulación de créditro realizada. Incluye costo total del crédito, cantidad de cuotas, valor de cuota y tasas de interés respectivas.
    </td>
  </tr>
  
  <tr>
    <td>
      Detalle de simulación
    </td>
    
    <td>
      Muestra la información detallada de la simulación de crédito. Incluye monto líquido, impuestos, seguros y gastos, entre otros.
    </td>
  </tr>
  
  <tr>
    <td>
      Solicitud
    </td>
    
    <td>
      Permite confirmar la simulación y gestionar la solicitud del crédito de consumo con la institución.
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
