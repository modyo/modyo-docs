---
search: true
---

# General summary

This widget allows clients see a consolidated overview of the growth of their assets, offering the option to filter the data by accounts, investment types, or invested currency.

<iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/resumen-general" width="100%" frameBorder="0"  style="visibility:hidden;overflow:auto;margin-top:20px;"/>

| Feature          | Description                                                                                                                                                                                                                                |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consolidated Assets | Shows a consolidated view of the client's total assets at the end of the previous day.  Provides a summary of the client's invested assets, displaying accounts, products and the currency in which the transaction is performed. |
| Monthly Growth      | Presents the initial and final asset total of the selected month, together with the transactions of the month (contributions, withdrawals, changes in assets).                                                                                                   |
| Annual Growth        | Shows a comparison between the equity growth during the current year to date (YTD) and the investment growth during the previous year (from the beginning to the end of the year).                                                      |

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
