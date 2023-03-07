---
search: true
---

# Información Personal

:::warning Actualización
Este componente está en proceso de actualización y pronto podría ser reemplazado. El sistema de diseño utilizado podría no ser compatible con la última versión de Dynamic UI.
:::

Permite que el usuario pueda revisar y modificar sus datos personales, suscribirse al envío de información a su correo electrónico, y conocer su Perfil de Inversionista.

[Abrir en otra pestaña](https://widgets-es.modyo.com/inversiones/personal-info)
<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/personal-info" width="100%"  frameBorder="0"  style="overflow:auto;margin-top:20px;"/>

| Funcionalidad                   | Descripción                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Datos Personales                | Permite verificar y/o cambiar la información del usuario. Entrega información sobre su ejecutiva/o de cuenta y cómo contactarla/o.                                                                                                                                                                                                                  |
| Perfil del Inversionista        | Permite ver el Perfil de Inversionista actual y la fecha en la que se realizó la encuesta. Permite recomendar qué tipo de inversión se debiera considerar en base al actual perfil de inversionista. Incluye información asociada a la encuesta, como lo que se mide, por qué es importante, cuál debería ser la periodicidad para realizarla, etc. |
| Cambio de Clave                 | Permite realizar el cambio de clave y muestra las características necesarias para la nueva contraseña (largo máximo y mínimo, caracteres, mayúsculas y minúsculas, números, etc.).                                                                                                                                                                  |
| Suscripción de envíos por email | Permite suscribirse al envío de información sobre cartolas, informes, certificados tributarios, y otros documentos.                                                                                                                                                                                                                                  |


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
