---
search: true
---

# Credits

Modyo offers a Widget that allows you to see an overview of the credits that the customer has with the financial institution, in detail and with their updated data.

#### Installation:

```bash
modyo-cli get modyo-widgets-retail-loans
```

[Open in another tab](https://widgets-es.modyo.com/personas/creditos)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos" width="100%"  frameBorder="0" style="min-height:630px;overflow:auto;margin-top:20px;"/> 

| Functionality       | Description                                                                                                                                                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Summary of Creditas | Displays the information the credits that the customer has assets, such as credit type, name, and request number.                                                                                                       |
| Credits Detail | When you select an item, displays detailed credit information, including outstanding balance, grant date, end date, and credit type fee value. Include information about upcoming maturities |

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
