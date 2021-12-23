---
search: true
---

# Resumen de pagos <Badge text="Beta" type="warn"/>

La plataforma ofrece un widget en donde podrás visualizar todos los pagos de tus cuentas, por default cuenta con una gráfica de actividad de tus pagos previos, una ventana de tus próximos pagos, y tu historial con las boletas de tus pagos. 

### Instalación:

```bash
modyo-cli get modyo-widgets-payment-summary
```

[Abrir en nueva tab](https://widgets-es.modyo.com/personas/resumen-de-pagos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/insurance/retail/bill-payment" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

Las funcionalidades de este widget son las siguientes:

| Funcionalidad           | Descripción                                           |
|:------------------------|:------------------------------------------------------|
| Actividad            |  Visualiza la actividad de los pagos a tus cuentas usando filtros de: **6, 9, 12, o 18 meses atrás** y **siguentes 6 y 9 meses**. Por default muestra el último monto y el promedio de los pagos a la cuenta.                                                       |
| Próximos pagos       |  Muestra el nombre de la empresa, el tipo de empresa, y la fecha de pago para los pagos en el futuro cercano. |
| Pagos recientes     | Muestra el nombre de la empresa, el tipo de empresa, el monto del pago, la fecha de pago, y el comprobante de pago de la cuenta. |


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