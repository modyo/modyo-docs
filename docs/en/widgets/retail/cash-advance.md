---
search: true
---

# Cash Advance

Conduct a credit simulation to request a cash advance from the financial institution.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-cash-advance
```

[Open in new tab](https://widgets.modyo.com/retail/cash-advance)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/cash-advance" width="100%" frameBorder="0" style="min-height:670px;overflow:auto;margin-top:20px;"/>

The customer can select the desired options for their cash advance and payment amount to run the simulation.

| Feature    | Description                                                                                 |
|:-----------------|:--------------------------------------------------------------------------------------------|
| From           | Displays the destination account of the requested cash.                          |
| To          | Displays the destination account of the requested cash.                                  |
| Amount | Add the cash amount that is requested.                             |
| Payments           | The customer can select the amount of installments in which the requested amount will be paid. |

### Simulation

After the selected features, the Widget will show the simulation of the progress and details of the payments that will be made.

| Feature           | Description                                                               |
|:------------------------|:--------------------------------------------------------------------------|
| Total advance cost  | Shows the total amount that will be charged to the card.                  |
| Monthly payment       | Shows the amount of each monthly payment according to the established time period. |
| Monthly interest rate | Shows the monthly interest rate of the cash advance.              |
| Annual Percentage Rate (APR)   | Shows the annual interest rate of the cash advance.                |

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
          if ( e.origin === 'https://widgets-es.modyo.com' ) {
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
