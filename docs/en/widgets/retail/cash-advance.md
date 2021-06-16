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

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/cash-advance" width="100%"  frameBorder="0" style="min-height:670px;overflow:auto;margin-top:20px;"></p> 

<p spaces-before="0">
  The customer can select the desired options for their cash advance and payment amount to run the simulation.
</p>

<table spaces-before="0">
  <tr>
    <th align="left">
      Feature
    </th>
    
    <th align="left">
      Description
    </th>
  </tr>
  
  <tr>
    <td align="left">
      From
    </td>
    
    <td align="left">
      Displays the destination account of the requested cash.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      To
    </td>
    
    <td align="left">
      Displays the destination account of the requested cash.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Amount
    </td>
    
    <td align="left">
      This section allows you to add the requested amount in cash.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Payments
    </td>
    
    <td align="left">
      The customer can select the number of installments in which the requested amount will be paid
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  Simulation
</h3>

<p spaces-before="0">
  The client can select the number of payments in which the requested amount will be paid.
</p>

<table spaces-before="0">
  <tr>
    <th align="left">
      Feature
    </th>
    
    <th align="left">
      Description
    </th>
  </tr>
  
  <tr>
    <td align="left">
      Total advance cost
    </td>
    
    <td align="left">
      Shows the total amount that will be charged to the card.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monthly payment
    </td>
    
    <td align="left">
      Shows the amount of each monthly payment according to the established time period.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Monthly interest rate
    </td>
    
    <td align="left">
      Shows the monthly interest rate of the cash advance.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Annual Percentage Rate (APR)
    </td>
    
    <td align="left">
      Shows the annual interest rate of the cash advance.
    </td>
  </tr>
</table>

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
