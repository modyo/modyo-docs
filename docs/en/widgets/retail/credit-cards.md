---
search: true
---

# Credit Cards

Modyo offers a widget that allows customers to view their credit card details and operations, and to perform various transactions.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-credit-cards
```

[Open in new tab](https://widgets.modyo.com/retail/credit-cards)

 <iframe id="widgetFrame" src="https://widgets.modyo.com/personas/tarjetas-de-credito" width="100%"  frameBorder="0"  style="min-height:900px;overflow:auto;margin-top:20px;"/> 

| Feature                 | Description                                                                                                                                                                                                                                                        |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Summary of Card de Crédito | Presents a summary of the credit card status. <br> <br> The specific information associated with the balances (available, used and total quota) is presented numerically and graphically.                                                                    |
| Balance Query             | This query shows the specific card quotas by currency type, plus expense indicators compared to the available quota.                                                                                                                |
| Statement of Account              | Displays the statement with the movements of the last billed period for a credit card.                                                                                                                                                          |
| Last moves           | Displays all national and international movements that are not invoiced.                                                                                                                                                                                |
| Pay off debt                   | Corresponds to the debt payment functionality. <br> <br> This debt payment can be total or partial. <br> <br> Click on this button will take the Card Payment Widget, where you can select the domestic or international debt payment option. |

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
