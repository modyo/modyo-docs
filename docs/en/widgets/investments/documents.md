---
search: true
---

# Documents

In this widget users can find all documents they need related to their investments, such as statements, electronic invoices, confirmation and execution of orders and contract signatures, as well as the respective certificates.

[Open in new tab](https://widgets.modyo.com/inversiones/documentos)
<iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/documentos" width="100%" frameBorder="0"  style="min-height:675px;overflow:auto;margin-top:20px;"/>

| Feature                       | Description                                                                                                                                                                                                                                |
|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Consolidated Financial Statements | Displays a list of available financial statements.                                                                                                                                                                             |
| Invoices                            | Displays the list of electronic invoices for all instructed transactions. Allows the retrieval of invoices in PDF format to review, print, and/or download.                                                           |
| Order Confirmations             | Displays a list of order documents available in PDF format.                                                                                                                                                   |
| Order Executions (1.985)        | Provides information on the execution of the client's orders as indicated in the 1985 SVS notice.                                                                                                                       |
| Electronic Contract Signatures     | Shows the contracts to be signed, either because they are new or because there are new or updated versions of them. Allows contract reviewal on screen with the option to sign them directly with an online key. |
| Product Risk Table       | Table with description of products and their risk classification.                                                                                                                                                                           |
| Tax Certificates            | Shows a list of tax certificates that are in PDF format, for viewing, printing and/or downloading.                                                                                                                    |


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
