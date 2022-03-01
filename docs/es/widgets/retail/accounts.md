---
search: true
---

# Cuentas

Ve un resumen de las cuentas bancarias, saca cartolas, y ve en detalle cada transacción realizada durante determinados períodos de tiempo de tus cuentas.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/>

### Cuenta Corriente

| Funcionalidad               | Descripción                                                                                                                                                                                                                                          |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resumen de Cuenta Corriente | Presenta el estado de la cuenta y si corresponde, el estado de la línea de crédito asociada.<br>La información específica se presenta de manera numérica y gráfica.                                                                             |
| Consulta de Movimientos     | Presenta los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha.<br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.                                           |
| Cartolas Históricas         | Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha.<br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados. |

### Cuenta Vista

| Funcionalidad           | Descripción                                                                                                                                                                                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resumen de Cuenta Vista | Muestra el estado de la cuenta similar a lo que se presenta para una cuenta corriente, con la diferencia que para una cuenta vista no existen cheques ni línea de crédito asociada. <br>La información específica se presenta de manera numérica y tabular. |
| Consulta de Movimientos | Muestra los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha. <br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.                                                       |
| Cartolas Históricas     | Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha. <br>Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.            |

### Línea de Crédito

| Funcionalidad           | Descripción                                                                                                                                                                                                                                  |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consulta de Movimientos | Presenta los últimos movimientos que se han realizado sobre la cuenta, ordenados inicialmente por fecha. Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.                                           |
| Cartolas Históricas     | Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha. Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados. |
| Pago Línea de Crédito   | Permite disponer la funcionalidad de pago de una línea de crédito, utilizando los fondos disponibles de una cuenta corriente. El cliente puede pagar su deuda de manera total o parcial.                                                     |

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
