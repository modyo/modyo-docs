---
search: true
---

# Pago de Cuentas

La plataforma ofrece un widget para pagar tus cuentas, permitiéndote pagarlos directamente desde el portal.

### Instalación:

```bash
modyo-cli get modyo-widgets-bill-payment
```

[Abrir en nueva tab](https://widgets-es.modyo.com/insurance/retail/bill-payment)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/insurance/retail/bill-payment" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

Para agregar y pagar tus cuentas, las opciones por default disponibles son:

| Funcionalidad           | Descripción                                           |
|:------------------------|:------------------------------------------------------|
| Mis Cuentas             | Ve todas las cuentas pagadas y pendientes del usuario. Al seleccionar una cuenta, puedes ver las fechas, montos, y los IDs de la operación de la cuenta. Desde aquí puedes **Editar** y **Borrar** cuentas. Si no tienes un saldo pendiente, el botón para pagar estará deshabilitado, de lo contrario el botón estará encendido con el monto a pagar.                                                                            |
| Cuenta Nueva            | Agrega una cuenta nueva seleccionando de una lista de categorías predefinidas. Las empresas de ese tipo se cargarán dependiendo del tipo seleccionado. Selecciona la empresa, llena el número de tu contrato de cliente y el alias de como aparecerá en **Mis cuentas**. Las categorías que el widget ofrece son: <ul><li>Agua</li><li>Automotoras</li><li>Autopistas</li><li>Colegios</li><li>Contribuciones</li><li>Electricidad</li><li>Gas</li><li>Inmobiliarias</li><li>Institutos</li><li>Seguros</li></ul> <br> Si activas **Programar esta transferencia?**, podrás agregar **Fecha Inicial**, **Pagar desde**, **Fecha Final**, y **Monto Máximo**.  |
| Pagar Cuenta            | Desde **Mis Cuentas** selecciona las cuentas que quieres pagar. En **Montos Añadidos** podrás ver el desglose del total. Al pagar, se mostrará tu boleta con la información de las cuentas y los montos de la transacción.                        |


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
