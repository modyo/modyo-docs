---
search: true
---

# Payment summary <Badge text="Beta" type="warn"/>

The platform offers a widget where you can view all the payments in your accounts. By default, it has an activity graph of your previous payments, a window of your upcoming payments, and your history with your payment slips. 

### Installation:

```bash
modyo-cli get modyo-widgets-retail-payment-summary
```

[Open in new tab](https://widgets.modyo.com/retail/payments-summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/payments-summary" width="100%" frameborder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

The features of this widget are as follows:

| Feature           | Description                                           |
|:------------------------|:------------------------------------------------------|
| Activity            |  View payment activity to your accounts using filters from: **6, 9, 12, or 18 months ago** and **next 6 and 9 months**. By default, it shows the latest amount and the average of payments to the account.                                                       |
| Upcoming payments       |  Displays the company name, company type, and payment date for payments in the near future. |
| Recent payments     | Displays the company name, business type, payment amount, payment date, and proof of payment for the account. |


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