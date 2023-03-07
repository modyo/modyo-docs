---
search: true
---

# Cotizador Vehículo

Despliega cotizaciones para asegurar vehículos en donde podrás ver todos los detalles y coberturas del seguro.

#### Instalación:

```bash
modyo-cli get modyo-widgets-insurance-quote
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/seguros/personas/cotizador)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/seguros/personas/cotizador" width="100%" frameBorder="0"  style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Funcionalidad | Descripción |
| ------------- | ----------- |
| Resumen del vehículo | Vista en donde se llena los datos del vehículo como la patente, marca, modelo, y año. |
| Resumen personal | Vista para llenar la información de la que solicita el seguro. Se piden los siguientes datos por defecto: Nombre, Apellidos, RUT, Fecha de nacimiento, Genero, Correo, Número de teléfono. |
| Resumen de los seguros | Vista de los seguros que cumplen con las especificaciones del carro. Al hacer click en <b>Ver detalles y cobertura</b> se abre una ventana lateral en donde se ve a detalle la cobertura del seguro. Al hacer click en <b>Comprar</b> te llevará a la pantalla de la solicitud del seguro.|
| Solicitud del seguro | En esta pantalla se piden los datos a fondo del vehículo a asegurar y del dueño como el número de serie del motor, domicilio, contactos de emergencia, etc. | 

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