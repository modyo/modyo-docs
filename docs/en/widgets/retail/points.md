---
search: true
---

# Points

[Open in new tab](https://widgets.modyo.com/retail/points)

<iframe src="https://widgets.modyo.com/retail/points" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"/>

| Feature         | Description                                                                                                                                                                                                   |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Points Summary | Displays the total points available to the customer, along with the next due date. Has a button that enables you to link a relevant catalog of redeemable items.                                  |
| Associated Cards    | Displays customer card information linked to your points and benefits system. It includes the card type, customer's name and the total points accumulated during a set period of time. |
| Redeemed Points      | Shows the points redeemed by the customer. Displays details such as the date of redemption, product, business and point cost.                                                                                 |
| Accumulated Points     | Presents the points accumulated by the customer. Displays details of each transaction and the points earned. Includes the total number of points redeemed per period.                                                 |

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
