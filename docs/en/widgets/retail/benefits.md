---
search: true
---

# Benefits

[Open in new tab](https://widgets.modyo.com/retail/benefits)

 <iframe id="widgetFrame" src="https://widgets.modyo.com/personas/beneficios" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"/> 

| Feature             | Description                                                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Summary of Benefits | Give a list of promotions with automatic labeling by category. Displays the title of each promotion and its basic information. Quickly filter promotions by category or search for any promotion by name. Allows you to view promotions by location on the map and automatically calculates the distance to the nearest promotions using geolocation data. |

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
