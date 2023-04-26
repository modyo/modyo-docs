---
search: true
---

# Vehicle Quote

:: :warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

Expand quotes to insure vehicles where you can see all the insurance details and coverage.

#### Installation:

```bash
modyo-cli get modyo-widgets-insurance-quote
```

[Open in new tab](https://widgets.modyo.com/insurance/retail/quote)

<iframe id="widgetFrame" src="https://widgets.modyo.com/insurance/retail/quote" width="100%" frameBorder="0" style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Features | Description |
| ------------- | ----------- |
| Overview of the vehicle | View where vehicle data such as brand, make, model, and year are filled in. |
| Personal Summary | View to fill out the information for which you are applying for insurance. The following information is requested by default: Name, Surname, RUT, Date of Birth, Gender, Email, Telephone Number. |
| Overview of insurance | View of the insurance that meets the specifications of the car. Clicking <b> View details and coverage </b> opens a side window where you can see the insurance coverage in detail. Clicking <b> Buy </b> will take you to the insurance application screen.|
| Insurance Application | This screen asks for the details of the vehicle to be insured and the owner such as the serial number of the engine, address, emergency contacts, etc. | 

<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.height = ht + 4 + "px";
          }
      }
      // iframed document sends its height using postMessage
      function handleDocHeightMsg(e) {
          // check origin
          if ( e.origin === 'https://widgets.modyo.com' ) {
              // parse data
              var data = JSON.parse( e.data );

              console.log('data:', data)
              // check data object
              if ( data['docHeight'] ) {
                  setIframeHeightCO( 'widgetFrame', data['docHeight'] );
              } else {
                  setIframeHeightCO( 'widgetFrame', 700 );
              }
          }
      }

      // assign message handler
      if ( window.addEventListener ) {
          window.addEventListener('message', handleDocHeightMsg, false);
      }
    }
  }
 </script>