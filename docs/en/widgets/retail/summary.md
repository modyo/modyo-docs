---
search: true
---

# Summary

The Account Summary widget allows you to review detailed information of your financial products, with which you can make basic payments and transfers, or navigate to other widgets to complete more transactions.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Open in new tab](https://widgets-es.modyo.com/personas/resumen-de-cuentas)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/resumen-de-cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"></p>

<h3 spaces-before="0">
  Purpose
</h3>

<p spaces-before="0">
  The Account Summary presents a customer's financial state within the different products they have with the financial institution (Accounts and Credit Cards). (Cuentas y Tarjetas).
</p>

<p spaces-before="0">
  Each summary presents financial information for a specific product both numerically and graphically.
</p>

<h4 spaces-before="0">
  Checking Account
</h4>

<p spaces-before="0">
  The Checking Account section allows you to see an overview of the available balance amounts and gives you access to transactions such as transfers and movements.
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
      Available Balance
    </td>
    
    <td align="left">
      Shows the total available balance in the checking account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Withdrawals
    </td>
    
    <td align="left">
      Allows you to see the total withdrawals within the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Deposits
    </td>
    
    <td align="left">
      Shows the total credits or deposits made to an account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Line of Credit
    </td>
    
    <td align="left">
      Displays the line of credit status of the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Available Balance
    </td>
    
    <td align="left">
      Displays the total available balance in the line of credit associated with the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transfer
    </td>
    
    <td align="left">
      Switches to the Transfer widget associated with the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transactions
    </td>
    
    <td align="left">
      Switches to the Transfers History widget, to see each movement in detail.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Savings Account
</h4>

<p spaces-before="0">
  Savings Accounts have the same features as Checking Accounts. However, Savings Accounts are not associated with Lines of Credit, and display a list of recent activity instead.
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
      Available Balance
    </td>
    
    <td align="left">
      Show the total available balance in the Savings Account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Withdrawals
    </td>
    
    <td align="left">
      Allows you to see the total withdrawals within the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Deposits
    </td>
    
    <td align="left">
      Shows the total credits or deposits made to an account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Recent activity
    </td>
    
    <td align="left">
      Displays a list of the latest transactions made within the account, together with the amounts and dates.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transfer
    </td>
    
    <td align="left">
      Switches to the Transfer widget associated with the account.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transactions
    </td>
    
    <td align="left">
      Switches to the Transfers History widget, to see each movement in detail.
    </td>
  </tr>
</table>

<h4 spaces-before="0">
  Credit Cards
</h4>

<p spaces-before="0">
  Each of the credit cards has its own section within the summary, which shows the details of each card, the total amount of credit used, the amount available, and the latest movements. The widget also allows you to separate national from international lines of credit, showing you graphically the usage of each one.
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
      Available Credit
    </td>
    
    <td align="left">
      Shows the current credit balance used and the amount of credit available, plus a graph indicating the amount used versus the total credit limit.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      International Transactions
    </td>
    
    <td align="left">
      Displays the international amount used and authorized, plus a graph indicating the first number versus the authorized total in dollars.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Pay
    </td>
    
    <td align="left">
      Switches to the Card Payment widget, where you can pay invoiced amounts.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Transactions
    </td>
    
    <td align="left">
      Switches to the Transactions widget of the card, where you can review the details of each transaction.
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
