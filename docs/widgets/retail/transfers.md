---
search: true
---

# Historial de Transferencias

Este widget permite revisar en detalle todas las transferencias recibidas y enviadas que se han realizado desde las distintas cuentas que pueda tener un cliente, además de revisar los datos de sus contactos registrados.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-transfer-history
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/historial-de-transferencias)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/historial-de-transferencias" width="100%"  frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Funcionalidad                    | Descripción                                                                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Historial de Transferencias      | Muestra el detalle de las transferencias recibidas y enviadas desde la cuenta del cliente. Incluye el monto de la transferencia, el saldo disponible y el nombre del contacto, según corresponda. |
| Transferencias a Terceros        | Define que el widget sólo muestre información referida a las transferencias a terceros realizadas por el usuario.                                                                                 |
| Transferencias Entre mis cuentas | Define que el widget sólo muestre información referida a las transferencias realizadas entre las cuentas del usuario.                                                                             |
| Contactos                        | Permite revisar y editar la infomación de los contactos ya ingresados en la cuenta del usuario. Muestra información como nombre, banco, tipo de cuenta y número de cuenta.                        |
| Agregar contacto                 | Permite agregar nuevas cuentas de destino a la sección de Contacto. Incluye nombre, banco, tipo de cuenta, número de cuenta, RUT y correo electrónico del destinatario.                           |

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
