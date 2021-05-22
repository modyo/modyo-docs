---
search: true
---

# Puntos

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/puntos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/puntos" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"></p>

<table spaces-before="0">
  <tr>
    <th>
      Funcionalidad
    </th>
    
    <th>
      Descripción
    </th>
  </tr>
  
  <tr>
    <td>
      Resumen de los Puntos
    </td>
    
    <td>
      Muestra el total de puntos disponibles para el cliente, junto con el próximo vencimiento. Posee un botón que permite vincular un catálogo relevante de artículos canjeables.
    </td>
  </tr>
  
  <tr>
    <td>
      Tarjetas Asociadas
    </td>
    
    <td>
      Muestra la información de las tarjetas del cliente vinculadas al sistema de puntos y beneficios. Incluye el tipo de tarjeta, nombre del cliente y el total de puntos acumulados durante el período de tiempo.
    </td>
  </tr>
  
  <tr>
    <td>
      Puntos Canjeados
    </td>
    
    <td>
      Presenta los puntos canjeados por el cliente. Muestra en detalle la fecha del canje, producto, negocio y coste de los puntos.
    </td>
  </tr>
  
  <tr>
    <td>
      Puntos Acumulados
    </td>
    
    <td>
      Presenta los puntos acumulados por el cliente. Muestra el detalle de cada transacción y los puntos ganados. Incluye el total de puntos canjeados por período.
    </td>
  </tr>
</table>

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
