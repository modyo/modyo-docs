---
search: true
---

# Resumen de Cuentas

El Resumen de Cuentas permite mostrar una gráfica detallada de toda la cartera de productos de un cliente, con la cual puede hacer operaciones básicas o dirigirse a widgets para realizar más movimientos.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/summary)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/summary" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/>

### Funciones

Presenta la posición del cliente en los distintos productos que tiene con la institución financiera. (Cuentas y Tarjetas).

Los resúmenes individuales presentan la información del producto específico de manera numérica y gráfica.

#### Cuenta Corriente

La sección de Cuenta Corriente permite ver un resumen general de los montos disponibles, además de acceso a operaciones como transferencias y movimientos.

| Funcionalidad    | Descripción                                                                              |
| :--------------- | :--------------------------------------------------------------------------------------- |
| Saldo disponible | Muestra el saldo total disponible en la cuenta corriente.                                |
| Total Cargos     | Permite ver el total de cargos de cada cuenta.                                           |
| Total Abonos     | Muestra el total de abonos o depósitos que se le han hecho a una cuenta.                 |
| Linea de Crédito | Muestra el estado de la línea de crédito de la cuenta.                                   |
| Monto disponible | Muestra el monto total disponible en la línea de crédito de la cuenta.                   |
| Transferir       | Deriva al widget de Transferencias de cada cuenta.                                       |
| Movimientos      | Deriva al widget de Movimientos de la cuenta, para ver detalladamente cada uno de ellos. |

#### Cuenta Vista

Esta sección tiene las mismas funciones que la de Cuenta Corriente. Sin embargo, sólo cambia en la sección Linea de Crédito, donde se reemplaza por los últimos movimientos y cargos realizados al producto.

| Funcionalidad       | Descripción                                                                                            |
| :------------------ | :----------------------------------------------------------------------------------------------------- |
| Saldo disponible    | Muestra el saldo total disponible en la cuenta corriente.                                              |
| Total Cargos        | Permite ver el total de cargos de cada cuenta.                                                         |
| Total Abonos        | Muestra el total de abonos o depósitos que se le han hecho a una cuenta.                               |
| Últimos movimientos | Muestra un listado de los últimos movimientos y cargos hechos a la cuenta, junto con su monto y fecha. |
| Transferir          | Deriva al widget de Transferencias de cada cuenta.                                                     |
| Movimientos         | Deriva al widget de Movimientos de la cuenta, para ver detalladamente cada uno de ellos.               |

#### Tarjetas de Crédito

Cada una de las tarjetas de crédito tiene su propio módulo gráfico, que permite ver los detalles de cada una de ellas, su monto utilizado y disponible y los últimos movimientos.
Además, separa el cupo nacional del internacional, incluyendo una gráfica que permite ver en proporción lo utilizado.

| Funcionalidad       | Descripción                                                                                                                                     |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| Monto nacional      | Muestra el monto nacional utilizado y autorizado, además de una gráfica que indica el primer número en pesos versus el total autorizado.        |
| Monto internacional | Muestra el monto internacional utilizado y autorizado, además de una gráfica que indica el primer número versus el total autorizado en dólares. |
| Pagar               | Deriva al widget de Pago de Tarjetas, donde podrá abonar los montos facturados.                                                                 |
| Movimientos         | Deriva al widget de Movimientos de la tarjeta, para ver detalladamente cada uno de ellos.                                                       |

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
