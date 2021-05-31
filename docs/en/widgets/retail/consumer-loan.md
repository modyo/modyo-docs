---
search: true
---

# Personal Loan

Modyo also offers a widget that allows customers to simulate and apply for a personal loan with the information and terms they need.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Open in new tab](https://widgets.modyo.com/retail/consumer-loan)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/consumer-loan" width="100%" frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"/>

| Feature         | Description                                                                                                                                                                 |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loan Amount     | The loan amount to be requested from to the institution.                                                                                               |
| Payments                | Shows the total payment amounts for the requested personal loan.                                                                            |
| Months of grace       | Select the number of grace months that the client wants to add in their simulation.                                                                           |
| Dates of non-payment     | Deliver the possibility to choose the months in which the customer will not make the payment of the credit, if you allow                                                            |
| Account credit       | Select the target account to which the requested amount will be charged if the credit is approved by the institution.                                             |
| Insurance               | It gives you the possibility to choose which insurance will be included in the credit simulation.                                                                                     |
| Simulation Summary | Presents general information about the credit simulation performed. Includes total credit cost, amount of installments, quota value and respective interest rates. |
| Simulation Detail | Displays detailed credit simulation information. Includes liquid amount, taxes, insurance and expenses, among others.                                              |
| Application             | Confirm the simulation and manage the consumer credit request with the institution.                                                                         |

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
