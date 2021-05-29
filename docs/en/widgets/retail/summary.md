---
search: true
---

# Summary of Cuentas

The Account Summary allows you to display a detailed graph of a customer's entire product portfolio, with which you can do basic operations or go to Widgets to make more moves.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-summary
```

[Open in another tab](https://widgets-es.modyo.com/personas/resumen-de-cuentas)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/resumen-de-cuentas" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/> 

### Functions

Presents the customer's position in the various products it has with the financial institution. (Accounts and Cards).

Individual summaries present the specific product information numerically and graphically.

#### Current Account

The Current Account section allows you to view an overview of available amounts, as well as access to transactions such as transfers and movements.

| Functionality    | Description                                                                              |
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

| Functionality       | Description                                                                                            |
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

| Functionality       | Description                                                                                                                                     |
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
 if (e.origin === 'https://widgets-es.modyo.com') {
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
