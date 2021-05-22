---
search: true
---

# Resumen Detallado

Modyo ofrece un Widget que entrega información en detalle de las inversiones existentes en cada cuenta de inversión, incluyendo las operaciones realizadas por el usuario y las que aún están en curso.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-detailed-summary
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/resumen-detallado)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/resumen-detallado" width="100%"  frameBorder="0" style="min-height:449px;overflow:auto;margin-top:20px;"></p>

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
      Detalle de Inversiones
    </td>
    
    <td>
      Entrega un conjunto de resúmenes individuales para todas las inversiones que están incluidas en el patrimonio.
    </td>
  </tr>
  
  <tr>
    <td>
      Resumen por Cuenta de Inversión
    </td>
    
    <td>
      Muestra los totales agrupados de las distintas inversiones que existen dentro de una cuenta de inversión específica.
    </td>
  </tr>
  
  <tr>
    <td>
      Operaciones en Tránsito
    </td>
    
    <td>
      Muestra las operaciones instruidas por el cliente y que aún están en estado pendiente.
    </td>
  </tr>
  
  <tr>
    <td>
      Últimos Movimientos
    </td>
    
    <td>
      Muestra los últimos movimientos realizados en la cuenta de inversión revisada.
    </td>
  </tr>
  
  <tr>
    <td>
      Resumen por Producto
    </td>
    
    <td>
      Muestra los totales de las inversiones incluidas para cada tipo de inversión existente en el patrimonio.
    </td>
  </tr>
  
  <tr>
    <td>
      Resumen por Moneda
    </td>
    
    <td>
      Muestra los totales agrupados de las distintas inversiones que existen dentro del patrimonio, considerando cada moneda disponible (CLP, USD, EUR).
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
