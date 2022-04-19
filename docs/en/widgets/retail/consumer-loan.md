---
search: true
---

# Personal Loan

Create the simulation of a consumer credit and create the application for it with the variables you need.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Open in new tab](https://widgets.modyo.com/retail/consumer-loan)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/consumer-loan" width="100%" frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"/>

| Feature         | Description                                                                                                                                                                 |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loan Amount     | The loan amount to be requested from to the institution.                                                                                               |
| Payments                | Shows the total payment amounts for the requested personal loan.                                                                            |
| Grace Period       | This section allows customers to select the months of their grace period.                                                                           |
| Dates of non-payment     | Choose the months in which the customer will not make payments, if allowed.                                                            |
| Destination account       | Corresponds to the account in which the requested loan amount will be deposited.                                             |
| Insurance               | The customer can add different types of insurance to the mortgage loan simulation.                                                                                     |
| Simulation Summary | It presents general information about the credit simulation. Includes total cost of credit, amount of installments, installment value, and respective interest rates. |
| Simulation Details | Displays detailed simulation information. It includes liquid amount, taxes, insurance, expenses, among others.                                              |
| Apply for Loan             | The application confirms the simulation and manages the credit request with the institution.                                                                         |

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
