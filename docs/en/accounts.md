---
search: true
---

# Cuentas

Con este Widget puedes ver un resumen de las cuentas bancarias, sacar cartolas y ver en detalle cada transacción realizada durante determinados períodos de tiempo.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"></p>

<h4 spaces-before="0">
  Cuenta Corriente
</h4>

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
      Resumen de Cuenta Corriente
    </td>
    
    <td align="left">
      Presenta el estado de la cuenta y si corresponde, el estado de la línea de crédito asociada.<br><br> La información específica se presenta de manera numérica y gráfica.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Consulta de Movimientos
    </td>
    
    <td align="left">
      Presenta los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha.<br><br> Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Cartolas Históricas
    </td>
    
    <td align="left">
      Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha.<br><br> Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Cuenta Vista
</h4>

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
      Resumen de Cuenta Vista
    </td>
    
    <td align="left">
      Muestra el estado de la cuenta similar a lo que se presenta para una cuenta corriente, con la diferencia que para una cuenta vista no existen cheques ni línea de crédito asociada. <br><br>La información específica se presenta de manera numérica y tabular.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Consulta de Movimientos
    </td>
    
    <td align="left">
      Muestra los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha. <br><br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Cartolas Históricas
    </td>
    
    <td align="left">
      Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha. <br><br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Línea de Crédito
</h4>

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
      Consulta de Movimientos
    </td>
    
    <td>
      Presenta los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha. Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
  
  <tr>
    <td>
      Cartolas Históricas
    </td>
    
    <td>
      Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha. Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
  
  <tr>
    <td>
      Pago Línea de Crédito
    </td>
    
    <td>
      Permite disponer la funcionalidad de pago de una línea de crédito, utilizando los fondos disponibles de una cuenta corriente. El cliente puede pagar su deuda de manera total o parcial.
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
