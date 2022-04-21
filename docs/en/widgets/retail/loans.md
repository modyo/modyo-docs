---
search: true
---

# Loans

Presents an overview of the credits that the client has with the financial institution, in detail and with its updated data.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-loans
```

[Open in new tab](https://widgets.modyo.com/retail/loans)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/loans" width="100%" frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"/>

| Features       | Description                                                                                                                                                                                                                 |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loan Summary | Displays the credit information that the customer has assets with the credit type, name, and request number.       |
| Loan Detail | When you select an item, it displays more details of the credit. The fields it displays by default are: <ul><li>Product Name </li> <li>Operation number </li> <li>Credit Term pending </li> <li>Gross amount granted </li> <li>Balance of credit </li> <li>Value of the fee </li> <li>Date next payment </li> <li>Annual interest rate </li> <li>CAE </li><li>Automatic charge on</li> <li>Number of contributions paid</li>  <li>Number of outstanding contributions</li> <li>Late payment fee (Units)</li>  <li>Late payment fee</li> <li>Collection</li>  <li>Total amount overdue</li> </ul> |


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
