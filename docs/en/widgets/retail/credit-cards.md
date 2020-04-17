---
search: true
translated: true
---

# Credit Cards

Modyo offers a widget that allows customers to view their credit card details and operations, and to perform various transactions.

<iframe id="widgetFrame" src="https://widgets.modyo.com/personas/retail-credit-cards" width="100%" frameBorder="0" style="min-height:800px;min-height:900px;overflow:auto;margin-top:20px;"/>

| Functionality | Description |
|:-----|:-----|
| Credit card summary | Presents a summary of the credit card status with specific information associated with each card balance. |
| Credit balance | Shows the payment options available for the specific card, in addition to indicators of expenditure compared to the amount available. |
| Account statements | Shows statements with the movements of the last invoiced period for a credit card. |
| Recent activity | Shows recent movements and activity that are not yet invoiced. |
| Pay balance | Corresponds to the balance payment functionality.<br><br> This payment can be either total or partial.<br><br> Clicking on the button will take you to the Credit Card Payment widget, where you can make a payment. |

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
