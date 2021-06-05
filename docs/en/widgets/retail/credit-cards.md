---
search: true
---

# Credit Cards

Modyo offers a widget that allows customers to view their credit card details and operations, and to perform various transactions.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-credit-cards
```

[Open in new tab](https://widgets-es.modyo.com/personas/tarjetas-de-credito)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/tarjetas-de-credito" width="100%"  frameBorder="0"  style="min-height:900px;overflow:auto;margin-top:20px;"></p>

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
      Credit card summary
    </td>
    
    <td align="left">
      Presents a summary of the credit card status with specific information associated with each card balance. <br><br>La información específica asociada a los saldos (disponible, utilizado y cupo total) se presenta de manera numérica y gráfica.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Credit balance
    </td>
    
    <td align="left">
      Shows the payment options available for the specific card, in addition to indicators of expenditure compared to the amount available.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Account statements
    </td>
    
    <td align="left">
      Shows statements with the movements of the last invoiced period for a credit card.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Recent activity
    </td>
    
    <td align="left">
      Shows recent movements and activity that are not yet invoiced.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Pay balance
    </td>
    
    <td align="left">
      Corresponds to the balance payment functionality.<br><br> This payment can be either total or partial.<br><br> Clicking on the button will take you to the Credit Card Payment widget, where you can make a payment.
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
