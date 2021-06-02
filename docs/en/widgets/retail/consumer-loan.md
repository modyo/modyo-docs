---
search: true
---

# Personal Loan

Modyo also offers a widget that allows customers to simulate and apply for a personal loan with the information and terms they need.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-consumer-loan
```

[Open in new tab](https://widgets-es.modyo.com/personas/credito-de-consumo)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/credito-de-consumo" width="100%"  frameBorder="0" style="min-height:1010px;overflow:auto;margin-top:20px;"></p>

<table spaces-before="0">
  <tr>
    <th>
      Feature
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      Loan Amount
    </td>
    
    <td>
      The loan amount to be requested from to the institution.
    </td>
  </tr>
  
  <tr>
    <td>
      Payments
    </td>
    
    <td>
      Shows the total payment amounts for the requested personal loan.
    </td>
  </tr>
  
  <tr>
    <td>
      Months of non-payment
    </td>
    
    <td>
      This section allows customers to select the months of their grace period.
    </td>
  </tr>
  
  <tr>
    <td>
      Grace period
    </td>
    
    <td>
      If necessary, customers can select non-payment dates for their personal loan.
    </td>
  </tr>
  
  <tr>
    <td>
      Destination account
    </td>
    
    <td>
      Corresponds to the account in which the requested loan amount will be deposited.
    </td>
  </tr>
  
  <tr>
    <td>
      Insurance
    </td>
    
    <td>
      Shows different types of insurance that clients can add to their loans if necessary.
    </td>
  </tr>
  
  <tr>
    <td>
      Simulation Summary
    </td>
    
    <td>
      Presents general information about the credit simulation performed. Includes total credit cost, amount of installments, quota value and respective interest rates.
    </td>
  </tr>
  
  <tr>
    <td>
      Simulation Detail
    </td>
    
    <td>
      Displays detailed credit simulation information. Includes liquid amount, taxes, insurance and expenses, among others.
    </td>
  </tr>
  
  <tr>
    <td>
      Application
    </td>
    
    <td>
      Confirm the simulation and manage the consumer credit request with the institution.
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
