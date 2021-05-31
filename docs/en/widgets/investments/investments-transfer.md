---
search: true
---

# Transfer

This widget exists so that clients can transfer funds between their investment accounts and their current registered account.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer
```

[Open in new tab](https://widgets.modyo.com/investments/transfer)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/transfer" width="100%" frameBorder="0" style="min-height:680px;overflow:auto;margin-top:20px;"/>

| Feature | Description                                                                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Convey    | Allows you to transfer funds between investment accounts. Allows you to request a transfer of funds to the client's current accounts, previously registered. |

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
