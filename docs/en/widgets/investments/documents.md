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

| Feature                       | Description                                                                                                                                                                                                                                |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consolidated Financial Statements | Displays a list of available financial statements.                                                                                                                                                                             |
| Invoices                            | Displays the list of electronic invoices by the instructed transactions. Allows the recovery of the invoice in PDF format, for viewing, printing and/or downloading.                                                           |
| Confirmation of Orders             | Displays a list of the documents of orders made, available in PDF format.                                                                                                                                                   |
| Execution of Orders (1.985)        | It provides the information on the execution of the customer's orders and that is indicated in the SVS circular 1985.                                                                                                                       |
| Signing Electronic Contracts     | Allows you to see which contracts must be signed, either because they are new or because there are new or updated versions of contracts. It allows you to review the on-screen contracts and proceed to sign them directly with the internet key. |
| Table of risks by product       | Table with description of products and their risk classification.                                                                                                                                                                           |
| Tax Certificates            | Displays a list of tax certificates that are in PDF format, for viewing, printing and/or downloading.                                                                                                                    |

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
