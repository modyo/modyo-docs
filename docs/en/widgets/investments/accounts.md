---
search: true
---

# Accounts

The Accounts widget shows the detail of each investment account a user has, with relevant information in graphs and numbers. It also presents the account movements with the corresponding bank statements.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-accounts
```

[Open in new tab](https://widgets.modyo.com/investments/accounts)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/accounts" width="100%" frameBorder="0" style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Description                    | Investor Profile Survey                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Account Summary             | Groups all of the client's investment accounts. Each investment account has its own tab with detailed information.                                                                                                                                                                                                                                                                                      |
| Investment Account              | Focuses on all the information associated with a specific investment account, presenting the data numerically and graphically. Includes a section to view Dividends Paid as of the day of the consultation and another for shares in the portfolio. Allows users to configure the account, see investment details, obtain statements, track movements, and make payments to the account.                                                                                           |
| Account Settings             | Allows the user to choose a name for the investment account and enable the option of receiving information by email like purchase/sale statements and confirmations (stocks, mutual funds, etc.).                                                                                                                                                                                                           |
| Account Statements             | Displays a list of statements to review within a configurable date range. The statements appear as PDFs that can be downloaded and reviewed.                                                                                                                                                                                                                                                                                      |
| Account Details                | Lists the types of instruments that exist within the investment account. Includes a summary of all the specific instruments that correspond to the type of investment selected. Displays investment escrow, pricing, and distribution information. Through these summaries, you can review the details of the account transaction history. Allows the user to see the movements associated with the investment account. |
| Detailed Account Movements | Delivers a set of options that allow the user to select date periods and movement types, including transfer movements. Shows the specific movements and their detail, as well as all the operations that are pending and not yet completed.                                                                                                                                                                                               |

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
