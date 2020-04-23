---
search: true
---

# Créditos

Modyo ofrece un widget que permite ver una vista general de los créditos que el cliente tiene con la institución financiera, de manera detallada y con sus datos actualizados.

[Open in new tab](https://widgets-es.modyo.com/personas/retail-loans)
<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-loans" width="100%"  frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción |
|-----|-----|
| Resumen de Créditos | Muestra la información los créditos que el cliente tiene activos, como tipo de crédito, nombre y número de solicitud. |
| Detalle de Créditos | Al seleccionar un ítem, muestra la información detallada del crédito, incluyendo saldo pendiente, fecha de otorgamiento, fecha de término y valor de cuota tipo de crédito. Incluye información sobre próximos vencimientos |


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
