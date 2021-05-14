---
search: true
translated: true
---

# Personal Loan

Modyo also offers a widget that allows customers to simulate and apply for a personal loan with the information and terms they need.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Open in new tab](https://widgets.modyo.com/retail/consumer-loan)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/consumer-loan" width="100%"  frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"/>

The default properties that the client can modify for the simulation and loan application are:

| Functionality         | Description                                                                                                                |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Loan Amount           | The loan amount to be requested from to the institution.                                                                   |
| Payments              | Shows the total payment amounts for the requested personal loan.                                                           |
| Months of non-payment | This section allows customers to select the months of their grace period.                                                  |
| Grace period          | If necessary, customers can select non-payment dates for their personal loan.                                              |
| Destination account   | Corresponds to the account in which the requested loan amount will be deposited.                                           |
| Insurance             | Shows different types of insurance that clients can add to their loans if necessary. |
|                       |

According to the selected options, the widget will display the credit amount and simulate the necessary payments, along with a report of the corresponding credit details.

Lastly, a button will appear that allows the client to directly apply for the loan.

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
