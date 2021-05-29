---
search: true
---

# History of transfers

Modyo offers a Widget that presents all relevant data about the in-transit operations associated with the purchase and sale of shares of the user, so that you can quickly find your consolidated information on the platform.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer-history
```

[Open in another tab](https://widgets-es.modyo.com/inversiones/historico-de-transferencias)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/historico-de-transferencias" width="100%"  frameBorder="0"  style="min-height:800px;overflow:auto;margin-top:20px;"/> 

| Functionality           | Description                                                                                                                           |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Transit Operations | Displays the list of in-transit operations associated with the buy/sale of shares. Allows you to cancel operations in transit. |
| Cancel Operation      | Disploys information about the specific operation to cancel, for the customer to confirm the option.                                  |

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
