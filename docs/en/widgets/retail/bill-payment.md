---
search: true
---

# Bill Payments

The platform offers a widget to pay your bills, allowing you to pay them directly from the portal.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-bill-payment
```

[Open in new tab](https://widgets.modyo.com/retail/bill-payment)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/bill-payment" width="100%" frameborder="0" style="min-height:675px;overflow:auto;margin-top:20px;"/>

To add and pay your bills, the default options available are:

| Feature           | Description                                           |
|:------------------------|:------------------------------------------------------|
| My Accounts             | View all paid and pending accounts for the user. When you select an account, you can view the dates, amounts, and IDs of the operation. From here you can **Edit** and **Delete** accounts. If you do not have an outstanding balance, the button to pay will be disabled, otherwise the button will be lit with the amount to be paid.                                                                            |
| New Account            | Add a new account by selecting from a list of predefined categories. Companies of that type will be charged depending on the type selected. Select the company, fill in your customer agreement number and the alias of how it will appear in **My Accounts**. The categories that the widget offers are: <ul> <li> Water </li> <li> Transportation </li> <li> Highways </li> <li> Education </li> <li> Contributions </li> <li> Electricity </li><li> Gas </li>  <li>Real-estate </li> <li> Institute </li> <li> Insurance </li> </ul> <br> If you activate **Schedule this transfer?**, you can add **Start Date**, **Pay from**, **End Date**, and **Maximum Amount**.  |
| Pay Bill            | From **My Accounts** select the accounts you want to pay. In **Added Amounts** you can see the breakdown of the total. At checkout, your ballot will be displayed with account information and transaction amounts.                        |


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
