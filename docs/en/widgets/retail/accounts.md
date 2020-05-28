---
search: true
translated: true
---

# Accounts

With this widget you can see a summary of your bank accounts, pull out cards and see each transaction made in detail during certain periods of time.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Open in new tab](https://widgets.modyo.com/retail/accounts)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/accounts" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

#### Checking Account

| Functionality            | Description                                                                                                                                                                                                           |
| :----------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Checking Account Summary | Presents the status of the account and if applicable, the status of the associated credit line.<br><br> The specific information is presented both numerically and graphically.                                       |
| View recent activity     | Presents the latest transactions that have been made within the account, ordered by date.<br><br> Also included is the ability to search within the transactions shown.                                               |
| Account Statements       | Displays account statements from previous periods, displaying the transactions of each selected account statement, sorted by date.<br><br> Clients also have the ability to search within the displayed transactions. |

#### Savings Account

| Functionality           | Description                                                                                                                                                                                                                                       |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Savings Account Summary | Shows the account status similar to what is presented for a checking account, but with the difference that savings accounts have no checks and no associated lines of credit. <br><br>Specific information is presented numerically within lists. |
| View recent activity    | Show the latest transactions that have been made within the account, sorted by date. <br><br>Also included is the ability to search within the transactions shown.                                                                                |
| Account Statements      | Displays account statements from previous periods, displaying the transactions of each selected account statement, sorted by date.<br><br>Clients also have the ability to search within the displayed transactions.                              |

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
