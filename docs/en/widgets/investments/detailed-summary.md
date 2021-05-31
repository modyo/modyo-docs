---
search: true
---

# Detailed Summary

Modyo offers a widget that delivers detailed information on existing investments in each investment account, including transactions made by the user and those still in progress.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-detailed-summary
```

[Open in another tab](https://widgets.modyo.com/inversiones/resumen-detallado)

 <iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/resumen-detallado" width="100%"  frameBorder="0" style="min-height:449px;overflow:auto;margin-top:20px;"/> 

| Feature                   | Description                                                                                                                                        |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Investment Detail          | Deliver a set of individual summaries for all investments that are included in the equity.                                     |
| Summary by Investment Account | Displays the grouped totals of the various investments that exist within a specific investment account.                               |
| Transit Operations         | Displays customer-instructed operations that are still in pending status.                                                             |
| Latest Movements             | Displays the latest moves made in the revised investment account.                                                                     |
| Summary by Product            | Shows the totals of investments included for each type of investment existing in the equity.                                           |
| Summary by Currency              | It shows the aggregated totals of the various investments that exist within the equity, considering each available currency (CLP, USD, EUR). |

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
