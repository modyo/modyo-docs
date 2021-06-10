---
search: true
---

# Credit Card Payments

The platform offers a credit card payment widget, allowing customers to perform the transaction directly from your payment portal.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-credit-card-payment
```

[Open in new tab](https://widgets.modyo.com/retail/credit-card-payment)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/credit-card-payment" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

To complete a payment, the default options available to customers are:

| Feature                          | Description                                                                                                              |
|:---------------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| Credit card used for payment             | Present the credit card on which the transaction will be made                                                    |
| National payment debt                 | Presents the total amount that has been used in the national quota of the card, including what is not billed.      |
| International payment debt            | Present the total amount that has been used in the international quota of the card, including what is not billed. |
| Selection of payment source account | The customer can select the account from which the payment amount will be drawn.                                           |
| Minimum payment                   | Shows the minimum payment amount for the card, so that it does not fall into delinquency.                                              |
| Total amount to pay                     | Shows the total amount of debt to be paid.                                                                    |
| Other amount to be paid            | Allows the client to select a customized amount to pay.                                            |

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
