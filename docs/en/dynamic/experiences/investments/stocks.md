---
search: true
---

# Stocks

:::warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

Find all the information about available stocks, along with market Information, and a module to make transactions online in an agile and simple way.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-stocks
```

[Open in new tab](https://widgets.modyo.com/investments/stocks)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/stocks" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Features          | Description                                                                                                                                                                                                                                                    |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stock Layout     | Shows the set of available tradable stocks. Displays a list of transactions in transit associated with the stocks. Displays market information for specific stocks. Allows clients to cancel transactions in transit, if necessary. |
| Market Information | Shows the information available for the action, such as evolution, market points, amount traded, last price, and possible institution-specific documents. Allows you to buy or sell a selected stock.                               |
| Buy Shares     | Allows the user to buy the selected stock, choosing the investment account, the number of shares to buy, the maximum buying price, and the duration of the buying order.                                                                |
| Sell Shares      | Allows you to sell the selected share, defining the investment account, the number of shares you want to sell, and the minimum selling price.                                                                                              |

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
