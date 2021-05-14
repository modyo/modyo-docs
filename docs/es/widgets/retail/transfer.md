---
search: true
---

# Transferencia

Transferencias es un wigdet que permite a un cliente mover dinero entre sus cuentas o transferir a terceros de manera simple y segura.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-transfer
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/transferencia)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/transferencia" width="100%"  frameBorder="0" style="min-height:750px;overflow:auto;margin-top:20px;"/>

Este Widget se divide en funcionalidades para dos productos similares: Transferencia a Terceros y Transferencia entre Cuentas.

### Transferencia entre Cuentas

| Funcionalidad            | Descripción                                                                                                                                          |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Origen de transferencia  | Selecciona la cuenta corriente o vista desde la cual saldrá el monto de dinero a mover. Además, muestra el saldo disponible que se puede transferir. |
| Destino de transferencia | Selecciona la cuenta a la cual se moverá el dinero                                                                                                   |
| Programar transferencia  | Permite seleccionar na frecuencia de tiempo entre la cual se harán transferencias de un monto de dinero predeterminado.                              |
| Últimos movimientos      | Muestra todos los movimientos nacionales e internacionales que no están facturados.                                                                  |

### Transferencia a Terceros

| Funcionalidad      | Descripción                                                                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cuenta de Origen   | Entrega información sobre la cuenta de la cual se realizará la transferencia, como número de cuenta y saldo disponible. Permite agendar movimientos hacia uno de los destinatarios registrados.                |
| Cuenta de Destino  | Permite seleccionar la cuenta que recibirá la transferencia realizada por el usuario. El cliente puede seleccionar un contacto ya registrado o agregar nuevos contactos.                                       |
| Mis Contactos      | Permite seleccionar la cuenta que recibirá la transferencia, entre las cuentas ya registradas por el cliente. Entrega un buscados para encontrar de manera ágil y rápida al destinatarios de la transferencia. |
| Nuevo Contacto     | Permite ingresar la información sobre un destinatario que no esté registrado en la cuenta del cliente. Incluye nombre, banco, tipo de cuenta, número de cuenta, RUT y correo electrónico del destinatario.     |
| Monto a transferir | Permite ingresar el monto que se transferirá hacia la cuenta del destinatario seleccionado.                                                                                                                    |

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
