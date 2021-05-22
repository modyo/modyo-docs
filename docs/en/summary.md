---
search: true
---

# Resumen de Cuentas

El Resumen de Cuentas permite mostrar una gráfica detallada de toda la cartera de productos de un cliente, con la cual puede hacer operaciones básicas o dirigirse a Widgets para realizar más movimientos.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/resumen-de-cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/resumen-de-cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"></p>

<h3 spaces-before="0">
  Funciones
</h3>

<p spaces-before="0">
  Presenta la posición del cliente en los distintos productos que tiene con la institución financiera. (Cuentas y Tarjetas).
</p>

<p spaces-before="0">
  Los resúmenes individuales presentan la información del producto específico de manera numérica y gráfica.
</p>

<h4 spaces-before="0">
  Cuenta Corriente
</h4>

<p spaces-before="0">
  La sección de Cuenta Corriente permite ver un resumen general de los montos disponibles, además de acceso a operaciones como transferencias y movimientos.
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
      Saldo disponible
    </td>
    
    <td align="left">
      Muestra el saldo total disponible en la cuenta corriente.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Total Cargos
    </td>
    
    <td align="left">
      Permite ver el total de cargos de cada cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Total Abonos
    </td>
    
    <td align="left">
      Muestra el total de abonos o depósitos que se le han hecho a una cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Linea de Crédito
    </td>
    
    <td align="left">
      Muestra el estado de la línea de crédito de la cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto disponible
    </td>
    
    <td align="left">
      Muestra el monto total disponible en la línea de crédito de la cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transferir
    </td>
    
    <td align="left">
      Deriva al Widget de Transferencias de cada cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Movimientos
    </td>
    
    <td align="left">
      Deriva al Widget de Movimientos de la cuenta, para ver detalladamente cada uno de ellos.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Cuenta Vista
</h4>

<p spaces-before="0">
  Esta sección tiene las mismas funciones que la de Cuenta Corriente. Sin embargo, sólo cambia en la sección Linea de Crédito, donde se reemplaza por los últimos movimientos y cargos realizados al producto.
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
      Saldo disponible
    </td>
    
    <td align="left">
      Muestra el saldo total disponible en la cuenta corriente.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Total Cargos
    </td>
    
    <td align="left">
      Permite ver el total de cargos de cada cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Total Abonos
    </td>
    
    <td align="left">
      Muestra el total de abonos o depósitos que se le han hecho a una cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Últimos movimientos
    </td>
    
    <td align="left">
      Muestra un listado de los últimos movimientos y cargos hechos a la cuenta, junto con su monto y fecha.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transferir
    </td>
    
    <td align="left">
      Deriva al Widget de Transferencias de cada cuenta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Movimientos
    </td>
    
    <td align="left">
      Deriva al Widget de Movimientos de la cuenta, para ver detalladamente cada uno de ellos.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Tarjetas de Crédito
</h4>

<p spaces-before="0">
  Cada una de las tarjetas de crédito tiene su propio módulo gráfico, que permite ver los detalles de cada una de ellas, su monto utilizado y disponible y los últimos movimientos. Además, separa el cupo nacional del internacional, incluyendo una gráfica que permite ver en proporción lo utilizado.
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
      Monto nacional
    </td>
    
    <td align="left">
      Muestra el monto nacional utilizado y autorizado, además de una gráfica que indica el primer número en pesos versus el total autorizado.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto internacional
    </td>
    
    <td align="left">
      Muestra el monto internacional utilizado y autorizado, además de una gráfica que indica el primer número versus el total autorizado en dólares.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Pagar
    </td>
    
    <td align="left">
      Deriva al Widget de Pago de Tarjetas, donde podrá abonar los montos facturados.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Movimientos
    </td>
    
    <td align="left">
      Deriva al Widget de Movimientos de la tarjeta, para ver detalladamente cada uno de ellos.
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
