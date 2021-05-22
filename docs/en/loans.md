---
search: true
---

# Créditos

Modyo ofrece un Widget que permite ver una vista general de los créditos que el cliente tiene con la institución financiera, de manera detallada y con sus datos actualizados.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-loans
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/creditos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos" width="100%"  frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"></p>

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
      Resumen de Créditos
    </td>
    
    <td>
      Muestra la información los créditos que el cliente tiene activos, como tipo de crédito, nombre y número de solicitud.
    </td>
  </tr>
  
  <tr>
    <td>
      Detalle de Créditos
    </td>
    
    <td>
      Al seleccionar un ítem, muestra la información detallada del crédito, incluyendo saldo pendiente, fecha de otorgamiento, fecha de término y valor de cuota tipo de crédito. Incluye información sobre próximos vencimientos
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
