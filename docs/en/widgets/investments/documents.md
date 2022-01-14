---
search: true
---

# Documents

In this widget users can find all documents they need related to their investments, such as statements, electronic invoices, confirmation and execution of orders, and contract signatures, as well as the corresponding certificates.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-documents
```

[Open in new tab](https://widgets.modyo.com/investments/documents)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/documents" width="100%" frameBorder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

| Description                       | Investor Profile Survey                                                                                                                                                                                                                                |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consolidated Financial Statements | Displays a list of available financial statements.                                                                                                                                                                             |
| Invoices                            | Displays the list of electronic invoices for all the completed transactions. Allows the user to open invoices in PDF format to review, print, and/or download.                                                           |
| Order Confirmations             | Displays a list of order documents available in PDF format.                                                                                                                                                   |
| Order Executions        | Provides information on the execution of the client's orders.                                                                                                                       |
| Electronic Contract Signatures     | Shows the contracts to be signed, either because they are completely new or because there are new or updated versions of existing contracts. Allows the user to directly review the contracts with the option to sign them online with the user's key or passcode. |
| Product Risk Table       | Table with a description of products and their risk classification.                                                                                                                                                                           |
| Tax Certificates            | Shows a list of tax certificates in PDF format for viewing, printing and/or downloading.                                                                                                                    |

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
