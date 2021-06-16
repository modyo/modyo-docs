---
search: true
---

# Transfer History

This widget allows customers to review, in detail, all the sent and received transactions that have been made from their different accounts, in addition to reviewing the data of their registered contacts.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-transfer-history
```

[Open in new tab](https://widgets.modyo.com/retail/transfer-history)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/transfer-history" width="100%"  frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"></p>

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
      Transfer History
    </td>
    
    <td>
      Displays the transaction details sent and received from the customer's account showing the corresponding transfer amount, the available balance, and the contact name. Incluye el monto de la transferencia, el saldo disponible y el nombre del contacto, según corresponda.
    </td>
  </tr>
  
  <tr>
    <td>
      Third-party Transfers
    </td>
    
    <td>
      Filters the widget to only show information regarding transfers to third parties made by the customer.
    </td>
  </tr>
  
  <tr>
    <td>
      Transfers between my Accounts
    </td>
    
    <td>
      Filters the widget to only show information regarding transfers made between the customer's own accounts.
    </td>
  </tr>
  
  <tr>
    <td>
      Contacts
    </td>
    
    <td>
      Allows customers to review and edit contact information that are already entered in the customer's account. Displays information such as name, bank, account type and account number.
    </td>
  </tr>
  
  <tr>
    <td>
      Add Contact
    </td>
    
    <td>
      Add new destination accounts to Contacts. Includes fields to define the name, bank, account type, account number, ID and recipient's email.
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
