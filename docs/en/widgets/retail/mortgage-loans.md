---
search: true
---

# Mortgage Loans

This Widget allows you to simulate a mortgage credit and start the application for it with the variables that each client needs.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-mortgage-loan
```

[Open in another tab](https://widgets-es.modyo.com/personas/creditos-hipotecarios)

 <iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos-hipotecarios" width="100%"  frameBorder="0" style="min-height:900px;overflow:auto;margin-top:20px;"/> 

| Functionality         | Description                                                                                                                                                                                                               |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Amount of Credit     | Allows you to enter the amount in UF of the credit that the customer wants to simulate.                                                                                                                                                |
| Foot                   | Allows you to enter the amount in UF of the foot that will be included in the application.                                                                                                                                                     |
| Type of housing      | It allows you to choose the type of property you want to purchase with the credit.                                                                                                                                                    |
| Deadline in Years         | It allows you to choose the number of years during which the credit payment will be made.                                                                                                                                   |
| Months of grace       | Select the number of grace months that the client wants to add in their simulation.                                                                                                                         |
| Insurance               | It gives you the possibility to choose which insurance will be included in the credit simulation.                                                                                                                                   |
| Simulation Summary | Presents general information about the credit simulation performed. It includes total cost of credit in pesos and UF, number of years, dividend value, respective interest rates and percentage of financing. |
| Simulation Detail | Displays detailed credit simulation information. It includes liquid amount, term, foot, dividend value, property type, taxes, insurance and expenses, among others.                                         |
| Application             | It allows you to confirm the simulation and manage the mortgage loan application with the institution.                                                                                                                      |

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
