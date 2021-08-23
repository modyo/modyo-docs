---
search: true
---

# Deposits

The Deposits widget allows the user to easily and quickly upload funds to their investment accounts.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-deposits
```

[Open in new tab](https://widgets.modyo.com/investments/deposits)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/deposits" width="100%" frameBorder="0" style="min-height:860px;overflow:auto;margin-top:20px;"/>

| Description | Investor Profile Survey                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Deposit        | Allows funds to be deposited to an investment account using payment buttons from different banking institutions. |

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
