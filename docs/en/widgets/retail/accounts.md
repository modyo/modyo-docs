---
search: true
---

# Accounts

With this widget you can see a summary of your bank accounts, download bank statements and see each transaction made in detail during certain periods of time.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-accounts
```

[Open in new tab](https://widgets.modyo.com/retail/accounts)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/accounts" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

#### Checking Account

| Feature               | Description                                                                                                                                                                                                                                          |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Checking Account Summary | Presents the status of the account and, if applicable, the status of the associated credit line.<br><br> The specific information is presented both numerically and graphically.                                                                             |
| View recent activity     | Presents the latest transactions that have been made within the account, ordered by date.<br><br> Also included is the ability to search within the displayed transactions.                                           |
| Account Statements         | Displays account statements from previous periods which can be expanded to show the transactions of each selected account statement, sorted by date.<br><br> Clients can also search within the displayed transactions. |

#### Savings Account

| Feature           | Description                                                                                                                                                                                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Savings Account Summary | Shows the account status similar to what is presented for a checking account, but with the difference that savings accounts have no checks and no associated lines of credit. <br><br>Specific information is presented numerically within lists. |
| View recent activity | Shows the latest transactions that have been made within the account, sorted by date. <br><br>Also included is the ability to search within the displayed transactions.                                                        |
| Account Statements     | Displays the maps of previous periods already closed, displaying the movements of each selected historical map and sorted by date. <br> <br> The ability to search within the displayed movements is also included.            |

#### Line of Credit

| Functionality           | Description                                                                                                                                                                                                                                  |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Inquiry of Movements | Presents the latest moves that have been made on the account, initially sorted by date. It also includes the ability to perform searches within the movements shown.                                           |
| Historical cartoles     | Displays the maps of previous periods already closed, displaying the movements of each selected historical map and sorted by date. It also includes the ability to perform searches within the movements shown. |
| Payment Line of Credit   | Allows you to provide the payment functionality of a credit line, using the funds available from a checking account. The customer can repay their debt in whole or in part.                                                     |

 <script> 

 export default {
 mounted () {

 function setFrameHeightCo (id, ht) {
 var ifrm = document.getElementById (id);
 if (ifrm) {
 ifrm.style.height = ht + 4 + "px";
 }
 }
 //iframed document sends its height using postMessage
 function HandleDoCheightMsg (e) {
 //check origin
 if (e.origin === 'https://widgets.modyo.com') {
 //parse data
 var data = json.parse (e.data);

 console.log ('data: ', data)
 //check data object
 if (data ['doChight']) {
 setFrameHeightCo ('WidgetFrame', data ['DoChight']);
 } else {
 SetFrameHeightCo ('WidgetFrame', 700);
 }
 }
 }

 //assign message handler
 if (Window.addEventListener) {
 Window.addEventListener ('message', HandleDoCheightMSG, false);
 }
 }
 }

 </script> 
