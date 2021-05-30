---
search: true
---

# Transfer History

This Widget allows you to review in detail all transfers received and sent that have been made from the different accounts that a customer may have, as well as review the details of their registered contacts.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-transfer-history
```

[Open in another tab](https://widgets.modyo.com/personas/historial-de-transferencias)

 <iframe id="widgetFrame" src="https://widgets.modyo.com/personas/historial-de-transferencias" width="100%"  frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/> 

| Feature                    | Description                                                                                                                                                                                       |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Transfer History      | Displays the details of transfers received and sent from the customer's account. Include the transfer amount, available balance, and contact name, as applicable. |
| Transfers to Third Parties        | Defines that the Widget only displays information related to transfers to third parties made by the user.                                                                                 |
| Transfers Between my accounts | Defines that the Widget only displays information related to transfers made between user accounts.                                                                             |
| Contacts                        | It allows you to review and edit the information of the contacts already entered into the user's account. Displays information such as name, bank, account type, and account number.                       |
| Add contact                 | Add new target accounts to the Contact section. Includes name, bank, account type, account number, RUT, and email address of the recipient.                           |

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
