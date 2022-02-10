---
search: true
---

# Payment summary <Badge text="Beta" type="warn"/>

The platform offers a widget where you can view all the payments in your accounts, by default it has a history graph with your previous payments, a section for upcoming payments, and your previous payment slips. 

### Installation:

```bash
modyo-cli get modyo-widgets-insurance-summary
```

[Open in new tab](https://widgets.modyo.com/insurance/retail/summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/insurance/retail/summary" width="100%" frameborder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

The features of this widget are as follows:

| Feature           | Description                                           |
|:------------------------|:------------------------------------------------------|
|   |  |


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