---
search: true
---

# Seguro de Vida

Ve toda la información de tu seguro de vida a detalle. También podrás ver y descargar tus cartolas y pólizas.

#### Instalación

```bash
modyo-cli get modyo-widgets-insurance-details
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/seguros/personas/vista-detallada)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/seguros/personas/vista-detallada" width="100%" frameBorder="0"  style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción |
| ------------- | ----------- |
| Detalles del Contratante  | Podrás ver los detalles del contratante y de la póliza como el nombre, correo, teléfono, nombre de la póliza, y valor de la póliza. |
| Detalles de cobertura | Al hacer click en la cobertura, podrás ver todas las clausulas de tu póliza y sus detalles. |
| Detalles de valor póliza | Consulta el valor de los activos de tu póliza y ve desglosado el saldo de tus cuentas y de tu portafolio de inversión. |
| Información de Fondos | Ve y descarga el detalle de tu portafolio de inversión. Podrás ver los diferentes fondos, la distribución (en %) de tu cuenta, el valor cuota, la rentabilidad en el mes, y la rentabilidad en el año en transcurso. | 

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
          if ( e.origin === 'https://widgets.modyo.com' ) {
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
