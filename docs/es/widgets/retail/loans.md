---
search: true
---

# Créditos

Presenta una vista general de los créditos que el cliente tiene con la institución financiera, de manera detallada y con sus datos actualizados.

#### Instalación:

```bash
modyo-cli get modyo-widgets-retail-loans
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/creditos)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos" width="100%"  frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"/>

| Funcionalidad       | Descripción                                                                                                                                                                                                                 |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Resumen de Créditos | Muestra la información de los créditos que el cliente tiene activos con el tipo de crédito, nombre, y número de solicitud.       |
| Detalle de Créditos | Al seleccionar un ítem, muestra más detalles del crédito. Los campos que muestra por default son: <ul><li>Nombre de producto</li><li>Numero de operación</li><li>Plazo de crédito pendiente</li><li>Monto bruto concedido</li><li>Saldo del credito</li><li>Valor de la cuota</li><li>Fecha próximo pago</li><li>Tasa de interés anual</li><li>CAE</li><li>Cargo automatico en</li><li>Numero de cuotas pagadas</li><li>Numero de cuotas pendientes</li><li>Monto vencido no pagado (UF)</li><li>Monto cargado por atrasos</li><li>Cobranza</li><li>Monto total atrasado</li></ul> |


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
