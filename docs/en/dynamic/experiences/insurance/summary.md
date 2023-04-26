---
search: true
---

# Payment Overview

:: :warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

View all the payments in your accounts, by default it has an activity graph of your previous payments, a window of your next payments, and your history with your payment slips. 

### Installation:

```bash
modyo-cli get modyo-widgets-insurance-summary
```

[Open in new tab](https://widgets.modyo.com/insurance/retail/summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/insurance/retail/summary" width="100%" frameborder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

The features of this widget are as follows:

| Features | Description |
| ------------- | ----------- |
|Insurance summary| Displays the summary of all the insurance policies in the account. You can view the following information: <ul> <li> Type of Insurance </li> <li> Policy Number </li> <li> Policy Status </li> <li> Purchase Details </li> <li> Insured capital </li> </ul> |


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