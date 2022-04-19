---
search: true
---

# Accounts

View a summary of bank accounts, draw charts, and see your transactions during certain periods of time in your accounts.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Open in new tab](https://widgets.modyo.com/retail/accounts)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/accounts" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

### Checking Account

| Features               | Description                                                                                                                                                                                                                                          |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Current Account Summary | Displays the status of the account and, if applicable, the status of the associated credit line. <br> The specific information is presented in a numerical and graphical manner.                                                                             |
| View recent activity     | It presents the most recent transactions that have been made on the account, initially sorted by date. <br> The ability to search within the movements shown is also included.                                           |
| Account Statements         | Displays maps from previous periods already closed, displaying the movements of each historical chart selected and sorted by date. <br> It also includes the ability to perform searches within the movements shown. |

### Savings Account

| Feature           | Description                                                                                                                                                                                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Savings Account Summary | It shows the status of the account similar to what is presented for a current account, with the difference that for a viewing account there are no checks or associated credit line. <br> The specific information is presented in a numerical and tabular manner. |
| View recent activity | Displays the last transactions that have been made on the account, initially sorted by date. <br> The ability to search within the displayed entries is also included.                                                       |
| Account Statements     | Displays maps from previous periods already closed, displaying the movements of each historical chart selected and sorted by date. <br> It also includes the ability to perform searches within the movements shown.            |

### Line of Credit

| Feature           | Description                                                                                                                                                                                                                                  |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| View recent activity | Recent activity shows the latest moves that have been made on the account, initially sorted by date. You can also perform searches within the shown movements.                                           |
| Account Statements     | Account statements display the statements of previous periods that have already ended. They are sorted by date and provide each selected statement's movements. You can also perform searches within the shown movements. |
| Line of Credit Payment   | This allows customers to pay off a line of credit. They can repay their debt in full or in part by using the available funds in their checking account.                                                     |

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
