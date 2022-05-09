---
search: true
---

# Detailed Summary

Provides detailed information on the existing investments in each investment account, including the transactions made by the user and those that are still in progress.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-detailed-summary
```

[Open in new tab](https://widgets.modyo.com/investments/detailed-summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/detailed-summary" width="100%" frameBorder="0" style="min-height:449px;overflow:auto;margin-top:20px;"/>

| Description                   | Investor Profile Survey                                                                                                                                        |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Investment Details          | Provides a set of individual summaries for all investments in the portfolio.                                     |
| Investment Account Summary | Displays the grouped totals of the multiple investments that exist within a specific investment account.                               |
| Operations in Transit         | Shows the operations made by the client still in a pending status.                                                             |
| Latest Transactions             | Shows the latest completed transactions made in the investment account.                                                                     |
| Product Summary            | Shows the investment totals for each existing investment type in the portfolio.                                           |
| Currency Summary              | Shows the grouped totals of different investments that exist within the portfolio separated by each available currency (USD, EUR, etc.). |

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
