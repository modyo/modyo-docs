---
search: true
---

# Documentos

En este Widget el usuario podrá encontrar todos los documentos que necesite con relación a sus inversiones, como cartlas, facturas electrónicas, confirmación y ejecución de órdenes y firma de contratos, además de los certificados respectivos.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-documents
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/documentos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/documentos" width="100%"  frameBorder="0"  style="min-height:675px;overflow:auto;margin-top:20px;"></p>

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
      Cartolas Patrimoniales Consolidadas
    </td>
    
    <td>
      Muestra un listado con las cartolas patrimoniales disponibles.
    </td>
  </tr>
  
  <tr>
    <td>
      Facturas
    </td>
    
    <td>
      Muestra el listado de facturas electrónicas por las operaciones instruidas. Permite la recuperación de la factura en formato PDF, para su visualización, impresión y/o descarga.
    </td>
  </tr>
  
  <tr>
    <td>
      Confirmación de Órdenes
    </td>
    
    <td>
      Muestra un listado con los documentos de órdenes realizadas, disponibles en formato PDF.
    </td>
  </tr>
  
  <tr>
    <td>
      Ejecución de Órdenes (1.985)
    </td>
    
    <td>
      Entrega la información de la ejecución de las órdenes del cliente y que está indicada en la circular 1985 de la SVS.
    </td>
  </tr>
  
  <tr>
    <td>
      Firma de Contratos Electrónicos
    </td>
    
    <td>
      Permite ver los contratos que se deben firmar, ya sea porque son nuevos o porque existen versiones nuevas o actualizadas de éstos. Permite revisar los contratos en pantalla y proceder a firmarlos directamente con la clave de internet.
    </td>
  </tr>
  
  <tr>
    <td>
      Tabla de riesgos por Producto
    </td>
    
    <td>
      Tabla con descripción de productos y su clasificación de riesgo.
    </td>
  </tr>
  
  <tr>
    <td>
      Certificados Tributarios
    </td>
    
    <td>
      Muestra un listado de certificados tributarios que están en formato PDF, para su visualización, impresión y/o descarga.
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
