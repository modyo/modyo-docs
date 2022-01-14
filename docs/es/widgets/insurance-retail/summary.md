---
search: true
---

# Resumen de pagos <Badge text="Beta" type="warn"/>

La plataforma ofrece un widget en donde podrás visualizar todos los pagos de tus cuentas, por default cuenta con una gráfica de actividad de tus pagos previos, una ventana de tus próximos pagos, y tu historial con las boletas de tus pagos. 

### Instalación:

```bash
modyo-cli get modyo-widgets-insurance-summary
```

[Abrir en nueva tab](https://widgets-es.modyo.com/seguros/personas/resumen)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/insurance/retail/summary" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

Las funcionalidades de este widget son las siguientes:

| Funcionalidad           | Descripción                                           |
|:------------------------|:------------------------------------------------------|
|   |  |


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