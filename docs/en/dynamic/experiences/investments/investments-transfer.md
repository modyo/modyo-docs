---
search: true
---

# Transfer

:::warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

Allows clients to transfer funds between their investment accounts and their registered checking account.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer
```

[Open in new tab](https://widgets.modyo.com/investments/transfer)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/transfer" width="100%" frameBorder="0" style="min-height:680px;overflow:auto;margin-top:20px;"/>

| Features | Description                                                                                                                                                      |
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
