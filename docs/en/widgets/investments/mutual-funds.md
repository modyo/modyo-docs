---
search: true
---

# Mutual Funds

Modyo offers a widget that displays information on available mutual funds and transactions made by the client, in addition to providing the ability to trade online through the platform.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-mutual-funds
```

[Open in new tab](https://widgets.modyo.com/investments/mutual-funds)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/mutual-funds" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Description           | Investor Profile Survey                                                                                                                                                                                                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mutual Fund Layout | Shows all the available mutual funds. Lists the transactions currently in transit associated with each mutual fund. Shows the set of mutual funds in which clients have their investments and the respective market information. Allows the user to cancel transactions in transit. |
| Market Information  | Displays the essential information of the selected mutual fund. Allows clients to contribute or withdraw from the selected fund/series.                                                                                                                                                                                 |
| Mutual Fund Contribution   | Allows clients to make contributions to the selected mutual fund, defining the investment account and the amount they wish to contribute.                                                                                                                                                                                    |
| Mutual Fund Withdrawal  | Allows clients to perform money withdrawals from the selected mutual fund.                                                                                                                                                                                                                                      |

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
