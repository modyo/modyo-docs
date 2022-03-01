---
search: true
---

# Avance en Efectivo

Realiza una simulación de crédito para solicitar un avance de dinero a la institución financiera.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-cash-advance
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/avance-en-efectivo)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/avance-en-efectivo" width="100%"  frameBorder="0" style="min-height:670px;overflow:auto;margin-top:20px;"/>

En primera vista, el cliente podrá seleccionar las características del Avance en Efectivo y su pago para realizar la simulación.

| Funcionalidad    | Descripción                                                                                 |
|:-----------------|:--------------------------------------------------------------------------------------------|
| Origen           | Selecciona la tarjeta de la cual se extraerá el monto en efectiva.                          |
| Destino          | Muestra la cuenta de destino del efectivo que se solicita.                                  |
| Monto del Avance | Permite añadir el monto que se solicita en efectivo.                             |
| Cuotas           | El cliente puede seleccionar la cantidad de cuotas en las que se pagará el monto solicitado. |

### Simulación

Tras las características seleccionadas, el Widget mostrará la simulación del avance y los detalles de los pagos que se realizarán.

| Funcionalidad           | Descripción                                                               |
|:------------------------|:--------------------------------------------------------------------------|
| Costo total del avance  | Muestra el monto de deuda que se aplicará en la tarjeta.                  |
| Valor de la cuota       | Muestra el valor de cada cuota que se cobrará según el tiempo solicitado. |
| Tasa de interés mensual | Se muestra la tasa de interés mensual del avance solicitado.              |
| Tasa de interés anual   | Se muestra la tasa de interés anual del avance solicitado.                |

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
