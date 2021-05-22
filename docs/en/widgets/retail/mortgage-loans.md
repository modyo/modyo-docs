---
search: true
---

# Créditos Hipotecarios

Este Widget permite hacer una simulación de un crédito hipotecario y comenzar la solicitud del mismo con las variables que cada cliente necesite.

### Instalación:

```bash
modyo-cli get modyo-widgets-retail-mortgage-loan
```

[Abrir en otra pestaña](https://widgets-es.modyo.com/personas/creditos-hipotecarios)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos-hipotecarios" width="100%"  frameBorder="0" style="min-height:900px;overflow:auto;margin-top:20px;"></p>

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
      Monto del Crédito
    </td>
    
    <td>
      Permite ingresar el monto en UF del crédito que el cliente quiere simular.
    </td>
  </tr>
  
  <tr>
    <td>
      Pie
    </td>
    
    <td>
      Permite ingresar el monto en UF del pie que incluirá en la solicitud.
    </td>
  </tr>
  
  <tr>
    <td>
      Tipo de vivienda
    </td>
    
    <td>
      Permite escoger el tipo de inmueble que desea adquirir con el crédito.
    </td>
  </tr>
  
  <tr>
    <td>
      Plazo en Años
    </td>
    
    <td>
      Permite elegir la cantidad de años durante los cuales se realizará el pago del crédito.
    </td>
  </tr>
  
  <tr>
    <td>
      Meses de gracia
    </td>
    
    <td>
      Permite seleccionar la cantidad de meses de gracia que el cliente desea agregar en su simulación.
    </td>
  </tr>
  
  <tr>
    <td>
      Seguros
    </td>
    
    <td>
      Entrega la posibilidad de elegir qué seguros se incluirán en la simulación del crédito.
    </td>
  </tr>
  
  <tr>
    <td>
      Resumen de simulación
    </td>
    
    <td>
      Presenta información general sobre la simulación de créditro realizada. Incluye costo total del crédito en pesos y UF, cantidad de años, valor de dividendo, tasas de interés respectivas y porcentaje de financiamiento.
    </td>
  </tr>
  
  <tr>
    <td>
      Detalle de simulación
    </td>
    
    <td>
      Muestra la información detallada de la simulación de crédito. Incluye monto líquido, plazo, pie, valor de dividendo, tipo de propiedad, impuestos, seguros y gastos, entre otros.
    </td>
  </tr>
  
  <tr>
    <td>
      Solicitud
    </td>
    
    <td>
      Permite confirmar la simulación y gestionar la solicitud del crédito hipotecario con la institución.
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
