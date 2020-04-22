---
search: true
---

# Detailed Summary

Modyo offers a widget that delivers detailed information on existing investments in each investment account, including transactions made by the user and those still in progress.

<iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/resumen-detallado" width="100%" frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

| Feature                   | Description                                                                                                                                        |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Investment Details          | Provides a set of individual summaries for all investments that in the portfolio.                                     |
| Investment Account Summary | Displays the grouped totals of the various investments that exist within a specific investment account.                               |
| Pending Transactions         | Shows the operations instructed by the client still in a pending state.                                                             |
| Latest Transactions             | Shows the latest completed transactions made in the investment account.                                                                     |
| Product Summary            | Shows the investment totals for each existing investment type in the portfolio.                                           |
| Currency Summary              | Shows the grouped totals of different investments that exist within the portfolio, considering each available currency (USD, EUR, etc.). |

<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.visibility = 'hidden';
            // some IE versions need a bit added or scrollbar appears
            ifrm.style.height = ht + 4 + "px";
            ifrm.style.visibility = 'visible';
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
