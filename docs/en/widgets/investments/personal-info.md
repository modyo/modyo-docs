---
search: true
---

# Personal information

This section of the platform allows the user to review and modify their personal data, subscribe to sending information to their email and know their Investor Profile.

[Open in another tab](https://widgets-es.modyo.com/inversiones/personal-info)
 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/personal-info" width="100%"  frameBorder="0"  style="overflow:auto;margin-top:20px;"/> 

| Functionality                   | Description                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Personal Data                | Allows you to verify and/or change user information. Deliver information about your account manager and how to contact you.                                                                                                                                                                                                                  |
| Investor Profile        | View the current Investor Profile and the date the survey was conducted. It allows to recommend what type of investment should be considered based on the current investor profile. It includes information associated with the survey, such as what is measured, why it is important, what should be the periodicity to conduct it, etc. |
| Key Change                 | Allows you to make the key change and displays the necessary features for the new password (maximum and minimum length, characters, uppercase and lowercase, numbers, etc.).                                                                                                                                                                  |
| Subscription of email submissions | It allows you to subscribe to sending information about maps, reports, tax certificates and other documents.                                                                                                                                                                                                                                  |


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
