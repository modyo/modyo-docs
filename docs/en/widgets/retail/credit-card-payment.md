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

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/credit-card-payment" width="100%"  frameBorder="0"  style="min-height:675px;overflow:auto;margin-top:20px;"></p> 

<p spaces-before="0">
  To complete a payment, the default options available to customers are:
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
      Credit card used for payment
    </td>
    
    <td align="left">
      Present the credit card on which the transaction will be made
    </td>
  </tr>
  
  <tr>
    <td align="left">
      National payment debt
    </td>
    
    <td align="left">
      Presents the total amount that has been used in the national quota of the card, including what is not billed.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      International payment debt
    </td>
    
    <td align="left">
      Present the total amount that has been used in the international quota of the card, including what is not billed.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Selection of payment source account
    </td>
    
    <td align="left">
      The customer can select the account from which the payment amount will be drawn.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Minimum payment
    </td>
    
    <td align="left">
      Shows the minimum payment amount for the card, so that it does not fall into delinquency.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Total amount to pay
    </td>
    
    <td align="left">
      Shows the total amount of debt to be paid.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Other amount to be paid
    </td>
    
    <td align="left">
      Allows the client to select a customized amount to pay.
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
