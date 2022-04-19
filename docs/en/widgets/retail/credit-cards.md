---
search: true
---

# Credit Cards

View your credit card details and transactions, to make transactions on them.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-credit-cards
```

[Open in new tab](https://widgets.modyo.com/retail/credit-cards)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/credit-cards" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Features                 | Description                                                                                                                                                                                                                                                        |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Credit card summary | Presents a summary of the credit card status. <br> The specific information associated with balances (available, used, and total quota) is presented numerically and graphically.                                                                    |
| Credit balance             | Shows the quotas of the specific card by currency type, as well as indicators of expenses compared to the available quota.                                                                                                                |
| Account statements              | Shows statements with the movements of the last invoiced period for a credit card.                                                                                                                                                          |
| Recent Activity           | Displays all recent activity that has not yet been invoiced.                                                                                                                                                                                |
| Pay balance                   | It corresponds to the debt repayment functionality. This debt payment can be full or partial. Clicking on this button will take you to the Card Payment Widget, where you can select the national or international debt payment option. |

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
