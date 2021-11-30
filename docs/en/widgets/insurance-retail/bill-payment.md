---
search: true
---

# Pago de Cuentas

La plataforma ofrece un widget para pagar tus cuentas, permitiéndote pagarlos directamente desde el portal.

### Instalación:

```bash
modyo-cli get modyo-widgets-bill-payment
```

[Abrir en nueva tab](https://widgets.modyo.com/insurance/retail/bill-payment)

<iframe id="widgetFrame" src="https://widgets.modyo.com/bill-payment" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

Para agregar y pagar tus una cuentas, las opciones por default disponibles son:

| Funcionalidad                          | Descripción                                                                                                              |
|:---------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| Mis Cuentas             |                                                     |
|                  |       |
|             |  |
|                                           |
|                    |                                    |
|                     |                                                  |
|               |                                            |

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
