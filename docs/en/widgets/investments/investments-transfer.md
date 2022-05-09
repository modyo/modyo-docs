---
search: true
---

# Transfer

Allows clients to transfer funds between their investment accounts and their registered checking account.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer
```

[Open in new tab](https://widgets.modyo.com/investments/transfer)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/transfer" width="100%" frameBorder="0" style="min-height:680px;overflow:auto;margin-top:20px;"/>

| Description | Investor Profile Survey                                                                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transfer    | Allows clients to transfer funds between investment accounts. It also makes it possible to request a transfer of funds to the client's previously registered accounts. |

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
