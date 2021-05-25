---
search: true
---

# Mutual Funds

Modyo offers a Widget that displays the information of the available Mutual Funds and the transactions performed by the user, in addition to delivering the possibility of making online transactions through the platform.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-mutual-funds
```

[Open in another tab](https://widgets-es.modyo.com/inversiones/fondos-mutuos)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/fondos-mutuos" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/> 

| Functionality           | Description                                                                                                                                                                                                                                                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mutual Funds Layout | Displays the set of available mutual funds. It presents a list of the transit operations associated with the mutual funds. Displays the set of mutual funds in which the customer has its investments and the respective market information. Allows you to cancel operations in transit. |
| Market Information  | Displays the essential information of the selected mutual fund. Allows Contribute or Rescue from the selected background/series.                                                                                                                                                                                 |
| Contribution of Mutual Fund   | It allows you to make Contributions to the selected mutual fund, defining the investment account and the amount you want to contribute.                                                                                                                                                                                    |
| Mutual Fund Rescue  | Allows you to make money ransoms from the selected mutual fund.                                                                                                                                                                                                                                      |

 <script> 

 export default {
 mounted () {

 function setFrameHeightCo (id, ht) {
 var ifrm = document.getElementById (id);
 if (ifrm) {
 ifrm.style.height = ht + 4 + “px”;
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
