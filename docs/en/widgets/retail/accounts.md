---
search: true
---

# Accounts

With this widget you can see a summary of your bank accounts, download bank statements and see each transaction made in detail during certain periods of time.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Open in new tab](https://widgets.modyo.com/retail/accounts)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/accounts" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

#### Checking Account

| Feature               | Description                                                                                                                                                                                                                                          |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Checking Account Summary | Presents the status of the account and, if applicable, the status of the associated credit line.<br><br> The specific information is presented both numerically and graphically.                                                                             |
| View recent activity     | Presents the latest transactions that have been made within the account, ordered by date.<br><br> Also included is the ability to search within the displayed transactions.                                           |
| Account Statements         | Displays account statements from previous periods which can be expanded to show the transactions of each selected account statement, sorted by date.<br><br> Clients can also search within the displayed transactions. |

#### Savings Account

| Feature           | Description                                                                                                                                                                                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Savings Account Summary | Shows the account status similar to what is presented for a checking account, but with the difference that savings accounts have no checks and no associated lines of credit. <br><br>Specific information is presented numerically within lists. |
| View recent activity | Shows the latest transactions that have been made within the account, sorted by date. <br><br>Also included is the ability to search within the displayed transactions.                                                        |
| Account Statements     | Displays account statements from previous periods, showing the transactions of each selected account statement, sorted by date.<br><br>Clients can also search within the displayed transactions.            |

#### Line of Credit

| Feature           | Description                                                                                                                                                                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View recent activity | Recent activity shows the latest moves that have been made on the account, initially sorted by date. You can also perform searches within the shown movements.                                           |
| Account Statements     | Account statements display the statements of previous periods that have already ended. They are sorted by date and provide each selected statement's movements. You can also perform searches within the shown movements. |
| Line of Credit Payment   | This allows you to provide the payment of a line of credit. The customer can pay their debt in full or in part by using the available funds from a checking account.                                                     |

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
