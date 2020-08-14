---
search: true
---

# Beneficios

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/beneficios)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/beneficios" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"/>

| Funcionalidad             | Descripción                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Resumen de los Beneficios | Entrega un listado de las promociones con etiquetado automático por categoría. Muestra el título de cada promoción y su información básica. Filtra rápidamente las promociones por categoría o busca cualquier promoción por nombre. Permite ver las promociones por ubicación en el mapa y calcula automáticamente la distancia a las promociones más cercanas utilizando datos de geolocalización. |

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
