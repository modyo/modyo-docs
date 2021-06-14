---
search: true
---

# Detailed Summary

Modyo offers a widget that delivers detailed information on existing investments in each investment account, including transactions made by the user and those still in progress.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-detailed-summary
```

[Open in new tab](https://widgets.modyo.com/investments/detailed-summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/detailed-summary" width="100%"  frameBorder="0" style="min-height:449px;overflow:auto;margin-top:20px;"></p>

<table spaces-before="0">
  <tr>
    <th>
      Feature
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      Investment Details
    </td>
    
    <td>
      Provides a set of individual summaries for all investments in the portfolio.
    </td>
  </tr>
  
  <tr>
    <td>
      Investment Account Summary
    </td>
    
    <td>
      Displays the grouped totals of the multiple investments that exist within a specific investment account.
    </td>
  </tr>
  
  <tr>
    <td>
      Pending Transactions
    </td>
    
    <td>
      Shows the operations made by the client still in a pending status.
    </td>
  </tr>
  
  <tr>
    <td>
      Latest Transactions
    </td>
    
    <td>
      Shows the latest completed transactions made in the investment account.
    </td>
  </tr>
  
  <tr>
    <td>
      Product Summary
    </td>
    
    <td>
      Shows the investment totals for each existing investment type in the portfolio.
    </td>
  </tr>
  
  <tr>
    <td>
      Currency Summary
    </td>
    
    <td>
      Shows the grouped totals of different investments that exist within the portfolio separated by each available currency (USD, EUR, etc.).
    </td>
  </tr>
</table>

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
