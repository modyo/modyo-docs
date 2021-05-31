---
search: true
---

# Cash Advance

The Cash Advance widget allows any customer to create a credit simulation to request a cash advance from a financial institution.

Through this widget, customers can select different options according to their requirements of this product.

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
| Amount | This section allows you to add the requested amount in cash.                             |
| Payments           | The customer can select the number of installments in which the requested amount will be paid |

### Simulation

The client can select the number of payments in which the requested amount will be paid.

| Feature           | Description                                                               |
|:------------------------|:--------------------------------------------------------------------------|
| Total advance cost  | Shows the total amount that will be charged to the card.                  |
| Value of quota       | Displays the value of each fee that will be charged according to the requested time. |
| Monthly interest rate | The monthly interest rate of the requested advance is shown.              |
| Annual interest rate   | The annual interest rate of the requested advance is shown.                |

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
