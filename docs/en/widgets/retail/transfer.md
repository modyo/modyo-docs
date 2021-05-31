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
| Transfer destination | Select the account to which the money will be moved                                                                                                   |
| Schedule transfer  | Allows you to select the frequency of time between which transfers of a predetermined amount of money will be made.                              |
| Last moves      | Displays all national and international movements that are not invoiced.                                                                  |

### Transfer to Third Parties

| Feature      | Description                                                                                                                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Source Account   | Please provide information about the account from which the transfer will be made, such as account number and available balance. Allows you to schedule moves to one of the registered recipients.                |
| Destination Account  | Select the account that will receive the transfer made by the user. The customer can select an already registered contact or add new contacts.                                       |
| My Contacts      | Select the account that will receive the transfer from among the accounts already registered by the customer. Deliver a wanted to quickly and quickly find the recipients of the transfer. |
| New Contact     | Enables you to enter information about a recipient who is not registered to the customer's account. Includes name, bank, account type, account number, RUT, and email address of the recipient.     |
| Amount to be transferred | Allows you to enter the amount that will be transferred to the account of the selected recipient.                                                                                                                    |

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
