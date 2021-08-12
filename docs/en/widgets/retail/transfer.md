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

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/transfer" width="100%" frameBorder="0" style="min-height:750px;overflow:auto;margin-top:20px;"/>

This widget includes features for two similar products: Transfer to Third Party and Transfer between Accounts.

### Transfer between Accounts

| Feature            | Description                                                                                                                                          |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Origin Account  | Select the origin account from which money will be withdrawn and transferred. It also displays the available balance that can be transferred. |
| Destination Account | Select the recipient account to which the money will be transferred and deposited.                                                                                                   |
| Schedule transfer  | Allows the client to schedule periodic transfers by selecting the frequency (e.g. weekly, monthly, quarterly) of the transfers.                              |
| Recent Activity      | Displays all recent activity that has not yet been invoiced.                                                                  |

### Third-party Transfers

| Feature      | Description                                                                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Origin Account   | Select the origin account from which money will be withdrawn and transferred. It also displays the available balance that can be transferred.                |
| Destination Account  | Select the account to which the money will be transferred and deposited.                                       |
| My Contacts      | Allows you to select the account that will receive the transfer, among the accounts already registered by the client. Offers a search bar to find transfer recipients quickly and easily. |
| New Contact     | Allows you to enter information about a recipient who is not registered on the customer's account. Includes name, bank, account type, account number, ID and recipient's email.     |
| Transfer Amount | Allows you to enter the amount to be transferred and deposited to the selected recipient's account.                                                                                                                    |

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
