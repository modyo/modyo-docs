---
search: true
---

# Stocks

In the Stock widget, clients can find all the information about available stocks, along with market information and a module for quick and simple online trading.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-stocks
```

[Open in new tab](https://widgets.modyo.com/investments/stocks)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/stocks" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Feature          | Description                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stock Layout     | Shows the set of available tradable stocks. Displays a list of transactions in transit associated with the stocks. Displays market information for specific stocks. Allows clients to cancel transactions in transit, if necessary. |
| Market Information | Shows the information available for a stock, such as the growth, market peaks, amount traded, latest price, and possible institution-specific documents. Allows the user to buy or sell a selected stock.                               |
| Buy Shares     | Allows the user to buy the selected stock, choosing the investment account, the number of shares to buy, the maximum buying price, and the duration of the buying order.                                                                |
| Sell Shares      | Allows the user to sell the selected stock, choosing the investment account, the number of shares to be sold, and the minimum sale price.                                                                                              |

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
