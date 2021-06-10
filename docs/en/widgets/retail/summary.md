---
search: true
---

# Summary

The Account Summary widget allows you to review detailed information of your financial products, with which you can make basic payments and transfers, or navigate to other widgets to complete more transactions.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Open in new tab](https://widgets.modyo.com/retail/summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/summary" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

### Purpose

The Account Summary presents a customer's financial state within the different products they have with the financial institution (Accounts and Credit Cards).

Each summary presents financial information for a specific product both numerically and graphically.

#### Checking Account

The Checking Account section allows you to see an overview of the available balance amounts and gives you access to transactions such as transfers and movements.

| Feature    | Description                                                                              |
|:-----------------|:-----------------------------------------------------------------------------------------|
| Available Balance | Shows the total available balance in the checking account.                                 |
| Withdrawals     | Allows you to see the total withdrawals within the account.                                            |
| Deposits     | Shows the total credits or deposits made to an account.                  |
| Line of Credit | Displays the line of credit status of the account.                                   |
| Available Balance  | Displays the total available balance in the line of credit associated with the account.                   |
| Transfer       | Switches to the Transfer widget associated with the account.                                       |
| Transactions      | Switches to the Transfers History widget, to see each movement in detail. |

#### Savings Account

Savings Accounts have the same features as Checking Accounts. However, Savings Accounts are not associated with Lines of Credit, and display a list of recent activity instead.

| Feature       | Description                                                                                            |
|:--------------------|:-------------------------------------------------------------------------------------------------------|
| Available Balance    | Show the total available balance in the Savings Account.                                              |
| Withdrawals        | Allows you to see the total withdrawals within the account.                                                         |
| Deposits        | Shows the total credits or deposits made to an account.                               |
| Recent activity | Displays a list of the latest transactions made within the account, together with the amounts and dates. |
| Transfer          | Switches to the Transfer widget associated with the account.                                                     |
| Transactions         | Switches to the Transfers History widget, to see each movement in detail.               |

#### Credit Cards

Each of the credit cards has its own section within the summary, which shows the details of each card, the total amount of credit used, the amount available, and the latest movements.
The widget also allows you to separate national from international lines of credit, showing you graphically the usage of each one.

| Feature       | Description                                                                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| Available Credit      | Shows the current credit balance used and the amount of credit available, plus a graph indicating the amount used versus the total credit limit.        |
| International Transactions | It displays the international amount used and authorized, plus a graph indicating the amount used versus the authorized total in dollars. |
| Pay               | Switches to the Card Payment widget, where you can pay invoiced amounts.                                                                  |
| Transactions         | Switches to the Transactions widget of the card, where you can review the details of each transaction.                                                        |

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
