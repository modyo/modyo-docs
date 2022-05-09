---
search: true
---

# Transfer History

Presents all the relevant data on transactions in transit associated with the buying and selling of shares, so that you can quickly find your consolidated information on the platform.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer-history
```

[Open in new tab](https://widgets.modyo.com/investments/transfer-history)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/transfer-history" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Description           | Investor Profile Survey                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Operations in Transit | isplays the list of transactions in transit associated with the purchase/sale of shares. Allows the user to cancel transactions in transit. |
| Cancel Operation      | Displays information about the specific transaction to be cancelled, so that the customer can confirm the cancellation.                                  |

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
