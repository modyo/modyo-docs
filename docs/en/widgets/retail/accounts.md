---
search: true
---

# Accounts

With this widget you can see a summary of your bank accounts, download bank statements and see each transaction made in detail during certain periods of time.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Open in new tab](https://widgets-es.modyo.com/personas/cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"></p>

<h4 spaces-before="0">
  Checking Account
</h4>

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
      Checking Account Summary
    </td>
    
    <td align="left">
      Presents the status of the account and, if applicable, the status of the associated credit line.<br><br> The specific information is presented both numerically and graphically.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      View recent activity
    </td>
    
    <td align="left">
      Presents the latest transactions that have been made within the account, ordered by date.<br><br> Also included is the ability to search within the displayed transactions.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Account Statements
    </td>
    
    <td align="left">
      Displays account statements from previous periods which can be expanded to show the transactions of each selected account statement, sorted by date.<br><br> Clients can also search within the displayed transactions.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Savings Account
</h4>

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
      Savings Account Summary
    </td>
    
    <td align="left">
      Shows the account status similar to what is presented for a checking account, but with the difference that savings accounts have no checks and no associated lines of credit. <br><br>Specific information is presented numerically within lists.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      View recent activity
    </td>
    
    <td align="left">
      Presents the latest moves that have been made on the account, initially sorted by date. It also includes the ability to perform searches within the movements shown.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Account Statements
    </td>
    
    <td align="left">
      Displays the maps of previous periods already closed, displaying the movements of each selected historical map and sorted by date. It also includes the ability to perform searches within the movements shown.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Line of Credit
</h4>

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
      View recent activity
    </td>
    
    <td>
      Shows the latest transactions that have been made within the account, sorted by date. <br><br>Also included is the ability to search within the displayed transactions.
    </td>
  </tr>
  
  <tr>
    <td>
      Account Statements
    </td>
    
    <td>
      Muestra las cartolas de períodos anteriores ya cerrados, desplegando los movimientos de cada cartola histórica seleccionada y ordenados por fecha. Se incluye además la capacidad de realizar búsquedas dentro de los movimientos mostrados.
    </td>
  </tr>
  
  <tr>
    <td>
      Line of Credit Payment
    </td>
    
    <td>
      Allows you to provide the payment functionality of a credit line, using the funds available from a checking account. The customer can repay their debt in whole or in part.
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
