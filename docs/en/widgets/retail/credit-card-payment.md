---
search: true
translated: true
---

# Credit Card Payments

The platform offers a credit card payment widget, allowing customers to perform the transaction directly from your payment portal.

<iframe id="widgetFrame" src="https://widgets.modyo.com/personas/retail-credit-card-payment" width="100%"  frameBorder="0"  style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Properties

To complete a payment, the default options available to customers are:

| Functionality                       | Description                                                                               |
|:------------------------------------|:------------------------------------------------------------------------------------------|
| Selection of payment source account | The customer can select the account from which the payment amount will be drawn.          |
| Credit card to be paid              | The credit card to receive payment from a selected account.                               |
| Minimum payment                     | Shows the minimum payment amount for the card, so that it does not fall into delinquency. |
| Total amount to pay                 | Shows the total amount of debt to be paid.                                                |
| Other amount to be paid             | Allows the client to select a customized amount to pay.                                   |


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
