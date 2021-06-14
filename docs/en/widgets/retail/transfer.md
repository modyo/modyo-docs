---
search: true
---

# Transfer

The Transfer widget allows customers to move money between their accounts or transfer money to third parties with ease and security.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-transfer
```

[Open in new tab](https://widgets.modyo.com/retail/transfer)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/transfer" width="100%"  frameBorder="0" style="min-height:750px;overflow:auto;margin-top:20px;"></p> 

<p spaces-before="0">
  This widget includes features for two similar products: Transfer to Third Party and Transfer between Accounts. Transferencia a Terceros y Transferencia entre Cuentas.
</p>

<h3 spaces-before="0">
  Transfer between Accounts
</h3>

<table spaces-before="0">
  <tr>
    <th align="left">
      Feature
    </th>
    
    <th align="left">
      Description
    </th>
  </tr>
  
  <tr>
    <td align="left">
      Origin Account
    </td>
    
    <td align="left">
      Select the origin account from which money will be withdrawn and transferred. It also displays the available balance that can be transferred.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Destination Account
    </td>
    
    <td align="left">
      Select the recipient account to which the money will be transferred and deposited.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Schedule transfer
    </td>
    
    <td align="left">
      Allows the client to schedule periodic transfers by selecting the frequency (e.g. weekly, monthly, quarterly) of the transfers.
    </td>
  </tr>
  
  <tr>
    <td align="left">
      Recent Activity
    </td>
    
    <td align="left">
      Displays all recent activity that has not yet been invoiced.
    </td>
  </tr>
</table>

<h3 spaces-before="0">
  Third-party Transfers
</h3>

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
      Origin Account
    </td>
    
    <td>
      Select the origin account from which money will be withdrawn and transferred. It also displays the available balance that can be transferred. Permite agendar movimientos hacia uno de los destinatarios registrados.
    </td>
  </tr>
  
  <tr>
    <td>
      Destination Account
    </td>
    
    <td>
      Select the account to which the money will be transferred and deposited. El cliente puede seleccionar un contacto ya registrado o agregar nuevos contactos.
    </td>
  </tr>
  
  <tr>
    <td>
      My Contacts
    </td>
    
    <td>
      Allows you to select the account that will receive the transfer, among the accounts already registered by the client. Offers a search bar to find transfer recipients quickly and easily.
    </td>
  </tr>
  
  <tr>
    <td>
      New Contact
    </td>
    
    <td>
      Allows you to enter information about a recipient who is not registered on the customer's account. Includes name, bank, account type, account number, ID and recipient's email.
    </td>
  </tr>
  
  <tr>
    <td>
      Transfer Amount
    </td>
    
    <td>
      Allows you to enter the amount to be transferred and deposited to the selected recipient's account.
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
