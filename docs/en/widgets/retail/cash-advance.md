---
search: true
---

# Avance en Efectivo

El Widget de Avance en Efectivo permite a cualquier cliente usar la plataforma hacer una simulación de crédito para solicitar un avance de dinero a la institución financiera.

A través del Widget, el cliente puede realizar distintas funciones de acuerdo a las características que necesite para este producto.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-cash-advance
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/avance-en-efectivo)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/avance-en-efectivo" width="100%"  frameBorder="0" style="min-height:670px;overflow:auto;margin-top:20px;"></p> 

<p spaces-before="0">
  En primera vista, el cliente podrá seleccionar las características del Avance en Efectivo y su pago para realizar la simulación.
</p>

<table spaces-before="0">
  <tr>
    <th align="left">
      Funcionalidad
    </th>
    
    <th align="left">
      Descripción
    </th>
  </tr>
  
  <tr>
    <td align="left">
      Origen
    </td>
    
    <td align="left">
      Selecciona la tarjeta de la cual se extraerá el monto en efectiva.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Destino
    </td>
    
    <td align="left">
      Muestra la cuenta de destino del efectivo que se solicita.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monto del Avance
    </td>
    
    <td align="left">
      Esa sección permite añadir el monto que se solicita en efectivo
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Cuotas
    </td>
    
    <td align="left">
      El cliente puede seleccionar la cantidad de cuotas en las que se pagará el monto solicitado
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  Simulación
</h3>

<p spaces-before="0">
  Tras las características seleccionadas, el Widget mostrará la simulación del avance y los detalles de los pagos que se realizarán.
</p>

<table spaces-before="0">
  <tr>
    <th align="left">
      Funcionalidad
    </th>
    
    <th align="left">
      Descripción
    </th>
  </tr>
  
  <tr>
    <td align="left">
      Costo total del avance
    </td>
    
    <td align="left">
      Muestra el monto de deuda que se aplicará en la tarjeta.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Valor de la cuota
    </td>
    
    <td align="left">
      Muestra el valor de cada cuota que se cobrará según el tiempo solicitado.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Tasa de interés mensual
    </td>
    
    <td align="left">
      Se muestra la tasa de interés mensual del avance solicitado.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Tasa de interés anual
    </td>
    
    <td align="left">
      Se muestra la tasa de interés anual del avance solicitado.
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
