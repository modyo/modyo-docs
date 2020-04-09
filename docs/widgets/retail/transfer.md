---
search: true
---

# Transferencias

Transferencias es un wigdet que permite a un cliente mover dinero entre sus cuentas o transferir a terceros de manera simple y segura.

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-transfer" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

## Propiedades

Este widget se divide en funcionalidades para dos productos similares: Transferencia a Terceros y Transferencia entre Cuentas.

### Transferencia entre Cuentas

| Funcionalidad            | Descripción                                                                                                                                                                                                                                                        |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Origen de transferencia  | Selecciona la cuenta corriente o vista desde la cual saldrá el monto de dinero a mover. Además, muestra el saldo disponible que se puede transferir.                                                                                                               |
| Destino de transferencia | Selecciona la cuenta a la cual se moverá el dinero                                                                                                                                                                                                                 |
| Programar transferencia  | Permite seleccionar na frecuencia de tiempo entre la cual se harán transferencias de un monto de dinero predeterminado.                                                                                                                                            |
| Últimos movimientos      | Muestra todos los movimientos nacionales e internacionales que no están facturados.                                                                                                                                                                                |
| Pagar deuda              | Corresponde a la funcionalidad de pago de la deuda.<br><br> Este pago de deuda puede ser total o parcial.<br><br> Hacer click en este botón llevará al widget de Pago de Tarjetas, donde se podrá seleccionar la opción de pago de deuda nacional o internacional. |

### Transferencia a Terceros


<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.visibility = 'hidden';
            // some IE versions need a bit added or scrollbar appears
            ifrm.style.height = ht + 4 + "px";
            ifrm.style.visibility = 'visible';
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
