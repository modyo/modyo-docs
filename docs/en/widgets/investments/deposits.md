---
search: true
---

# Deposits

The Deposits widget allows the user to easily and quickly upload funds to their investment accounts.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-deposits
```

[Open in new tab](https://widgets.modyo.com/investments/deposits)

<iframe id="widgetFrame" src="https://widgets.modyo.com/investments/deposits" width="100%" frameBorder="0" style="min-height:860px;overflow:auto;margin-top:20px;"/>

| Feature | Description                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------|
| Deposit        | It allows you to pay funds to an investment account using payment buttons from different banking institutions. |

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
