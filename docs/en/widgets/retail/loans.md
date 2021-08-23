---
search: true
---

# Loans

Modyo also offers a widget that allows you to see an overview of the loans that a customer has with the financial institution with updated and detailed data.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-loans
```

[Open in new tab](https://widgets.modyo.com/retail/loans)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/loans" width="100%" frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"/>

| Description       | Investor Profile Survey                                                                                                                                                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loan Summary | Displays information on the customer's current loans, such as type of loan, name and application number.                                                                                                       |
| Loan Detail | When you select view details, the widget displays more detailed information about the loan including outstanding balance, date awarded, end date, loan type and payment amount. Includes information on upcoming due dates. |

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
