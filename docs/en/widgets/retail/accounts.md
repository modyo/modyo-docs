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
| View recent activity     | Presents the latest moves that have been made on the account, initially sorted by date. <br> <br> is also included the ability to perform searches within the displayed movements.                                           |
| Historical cartoles         | Displays the maps of previous periods already closed, displaying the movements of each selected historical map and sorted by date. <br> <br> The ability to search within the displayed movements is also included. |

#### Vista Account

| Feature           | Description                                                                                                                                                                                                                                                     |
|:------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Summary of Centa Vista | Displays the account status similar to what is presented for a checking account, with the difference that there are no checks or associated credit line for a view account. <br> <br> Specific information is presented numerically and tabular. |
| Inquiry of Movements | Displays the last moves that were made on the account, initially sorted by date. <br> <br> The ability to search within the displayed movements is also included.                                                       |
| Historical cartoles     | Displays the maps of previous periods already closed, displaying the movements of each selected historical map and sorted by date. <br> <br> The ability to search within the displayed movements is also included.            |

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
