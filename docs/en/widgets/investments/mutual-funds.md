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

| Feature           | Description                                                                                                                                                                                                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Shows all the available mutual funds. Lists the transactions currently in transit associated with each mutual fund. Shows the set of mutual funds in which clients have their investments and the respective market information. Allows the user to cancel transactions in transit. | Displays the set of available mutual funds. It presents a list of the transit operations associated with the mutual funds. Displays the set of mutual funds in which the customer has its investments and the respective market information. Allows you to cancel operations in transit. |
| Market Information  | Displays the essential information of the selected mutual fund. Allows Contribute or Rescue from the selected background/series.                                                                                                                                                                                 |
| Contribution of Mutual Fund   | It allows you to make Contributions to the selected mutual fund, defining the investment account and the amount you want to contribute.                                                                                                                                                                                    |
| Mutual Fund Rescue  | Allows you to make money ransoms from the selected mutual fund.                                                                                                                                                                                                                                      |

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
