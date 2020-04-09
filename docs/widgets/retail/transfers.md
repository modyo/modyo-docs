---
search: true
---

# Historial de Transferencias

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-transfers" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Propiedades

| Funcionalidad                         | Descripción                                                                                                                                                                                                                                                                                                                                                                                   |
|:--------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transferencia de Fondos a Terceros    | Permite la transferencia de fondos a terceros, la cual puede ser inmediata o agendada para uno de los destinatarios registrados. <br><br>El cliente selecciona la cuenta de cargo, el destinatario, el monto y agrega, si así lo desea, un mensaje personalizado. <br><br>La transferencia que se está realizando debe ser autorizada con una segunda clave de seguridad.                     |
| Transferencia de Fondos entre Cuentas | Permite la transferencia de dinero entre cuentas que posee el cliente dentro de la misma institución financiera. <br><br>El cliente selecciona la cuenta de cargo, la cuenta de destino y el monto que desea transferir.<br><br>La transferencia que se está realizando, debe ser autorizada con su clave internet. Esto último se solicita como una forma de confirmación de la transacción. |
| Administrar destinatarios TEF         | Permite administrar los destinatarios de las transferencias a terceros, definiendo los datos personales y las cuentas bancarias de los destinatarios. <br><br>Esta información será utilizada en la funcionalidad de transferencias a terceros.                                                                                                                                               |
| Histórico Transferencias              | Consulta histórica que muestra las transacciones (transferencias) del cliente con sus medios de pagos (cuentas corriente y/o vista) realizadas a través de internet. <br><br>Esta consulta nos permite realizar búsquedas sobre las transferencias.                                                                                                                                           |


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
