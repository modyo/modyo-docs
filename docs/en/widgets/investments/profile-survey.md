---
search: true
---

# Profile survey

In this Widget, each user will be able to complete the Investor Profile survey, in order to receive the best recommendations regarding their movements.

[Open in another tab](https://widgets.modyo.com/inversiones/profile-survey)
 <iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/profile-survey" width="100%"  frameBorder="0"  style="overflow:auto;margin-top:20px;"/> 

| Feature                    | Description                                                                                                                                                      |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Investor Profile Survey | Enables you to complete the Investor Profile survey, whether for new customers, if the customer wants to retake it or as required by regulations. |

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
