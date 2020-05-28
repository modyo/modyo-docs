---
search: true
translated: true
---

# Transfer History

This widget allows you to review, in detail, all the sent and received transactions that have been made from the different accounts that a customer may have, in addition to reviewing the data of their registered contacts.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-transfers-history
```

[Open in new tab](https://widgets.modyo.com/retail/transfers)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/transfers" width="100%"  frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

| Feature                       | Description                                                                                                                                                                           |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer History              | Displays the transaction details sent and received from the customer's account. Includes the amount of the transfer, the available balance, and the contact name, as appropriate.     |
| Third-party Transfers         | Filters the widget to only show information regarding transfers to third parties made by the customer.                                                                                |
| Transfers between my Accounts | Filters the widget to only show information regarding transfers made between the customer's own accounts.                                                                             |
| Contacts                      | Allows customers to review and edit contact information that are already entered in the customer's account. Displays information such as name, bank, account type and account number. |
| Add Contact                   | Add new destination accounts to Contacts. Includes fields to define the name, bank, account type, account number, ID and recipient's email.                                           |

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
