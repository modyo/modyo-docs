---
search: true
---

# Fondos Mutuos

Muestra la información de los Fondos Mutuos disponibles y las operaciones realizadas por el usuario, además de entregar la posibilidad de realizar transacciones en línea a través de la plataforma.

#### Instalación:

```bash
modyo-cli get modyo-widgets-investments-mutual-funds
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/fondos-mutuos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/fondos-mutuos" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Funcionalidad           | Descripción                                                                                                                                                                                                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Layout de Fondos Mutuos | Muestra el conjunto de los fondos mutuos disponibles. Presenta un listado con las operaciones en tránsito asociadas a los fondos mutuos. Muestra el conjunto de fondos mutuos en los que el cliente tiene sus inversiones y la información de mercado respectiva. Permite cancelar operaciones en tránsito. |
| Información de Mercado  | Muestra la información esencial del fondo mutuo seleccionado. Permite Aportar o Rescatar desde el fondo/serie seleccionado.                                                                                                                                                                                 |
| Aporte de Fondo Mutuo   | Permite realizar Aportes al fondo mutuo seleccionado, definiendo la cuenta de inversión y el monto que se desea aportar.                                                                                                                                                                                    |
| Rescate de Fondo Mutuo  | Permite realizar Rescates de dinero desde el fondo mutuo seleccionado.                                                                                                                                                                                                                                      |

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
