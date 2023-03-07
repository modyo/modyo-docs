---
search: true
---

# Encuesta Perfil

Realiza la encuesta de Perfil de Inversionista, para poder recibir las mejores recomendaciones en sus movimientos.

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/profile-survey)
<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/profile-survey" width="100%"  frameBorder="0"  style="overflow:auto;margin-top:20px;"/>

| Funcionalidad                    | Descripción                                                                                                                                                      |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Encuesta Perfil de Inversionista | Permite completar la encuesta de Perfil del Inversionista, ya sea para clientes nuevos, si el cliente quiere volver a realizarla o porque la normativa lo exige. |

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
