---
search: true
---

# Profile Survey

:: :warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

Take the Investor Profile survey in order to receive the best recommendations for your movements.

[Open in another tab](https://widgets.modyo.com/inversiones/profile-survey)
<iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/profile-survey" width="100%" frameborder="0" style="overflow:auto;margin-top:20px;"/>

| Features                    | Description                                                                                                                                                      |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Investor Profile Survey | Allows you to complete the Investor Profile survey, either for new customers, if the client wants to take it again or because regulations require it. |

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
