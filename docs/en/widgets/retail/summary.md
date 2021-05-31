---
search: true
---

# Summary

The Account Summary widget allows you to review detailed information of your financial products, with which you can make basic payments and transfers, or navigate to other widgets to complete more transactions.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Open in new tab](https://widgets.modyo.com/retail/summary)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/summary" width="100%" frameBorder="0" style="min-height:800px;overflow:auto;margin-top:20px;"/>

### Purpose

The Account Summary presents a customer's financial state within the different products they have with the financial institution (Accounts and Credit Cards).

Each summary presents financial information for a specific product both numerically and graphically.

#### Checking Account

The Current Account section allows you to view an overview of available amounts, as well as access to transactions such as transfers and movements.

| Feature    | Description                                                                              |
|:-----------------|:-----------------------------------------------------------------------------------------|
| Balance available | Displays the total available balance in the current account.                                |
| Total Charges     | View the total charges for each account.                                           |
| Total Fertilisers     | Displays the total number of credits or deposits that have been made to an account.                 |
| Credit Line | Displays the status of the account's credit line.                                   |
| Amount available | Displays the total amount available on the account line of credit.                   |
| Convey       | Derive to the Transfers Widget for each account.                                       |
| Movements      | Please refer to the Account Movements Widget, to see each of them in detail. |

#### Vista Account

This section has the same functions as the Current Account section. However, it only changes in the Credit Line section, where it is replaced by the latest movements and charges made to the product.

| Feature       | Description                                                                                            |
|:--------------------|:-------------------------------------------------------------------------------------------------------|
| Balance available    | Displays the total available balance in the current account.                                              |
| Total Charges        | View the total charges for each account.                                                         |
| Total Fertilisers        | Displays the total number of credits or deposits that have been made to an account.                               |
| Last moves | Displays a list of the latest moves and charges made to the account, along with their amount and date. |
| Convey          | Derive to the Transfers Widget for each account.                                                     |
| Movements         | Please refer to the Account Movements Widget, to see each of them in detail.               |

#### Credit Cards

Each of the credit cards has its own graphic module, which allows you to see the details of each of them, its used and available amount and the latest moves.
In addition, it separates the national and international quota, including a graph that allows you to see in proportion what is used.

| Feature       | Description                                                                                                                                     |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| National amount      | Displays the national amount used and authorized, plus a graph indicating the first number in pesos versus the authorized total.        |
| International Amount | Displays the international amount used and authorized, plus a graph indicating the first number versus the authorized total in dollars. |
| Pay               | Please refer to the Card Payment Widget, where you can pay the billed amounts.                                                                 |
| Movements         | Go to the Card Moves Widget, to see each of them in detail.                                                       |

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
