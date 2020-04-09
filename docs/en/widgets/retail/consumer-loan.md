---
search: true
translated: true
---

# Personal Loan

Modyo also offers a widget that allows customers to simulate and apply for a personal loan with the information and terms they need.

<iframe id="widgetFrame" src="https://widgets.modyo.com/personas/retail-consumer-loan" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Properties

The default properties that the client can modify for its simulation and request are:

| Functionality         | Description |
|:----------------------|:-|
| Loan Amount           | The loan amount to be requested from to the institution. |
| Payments              | Shows the total payment amounts for the requested personal loan. |
| Months of non-payment | This section allows customers to select the months of their grace period. |
| Grace period          | If necessary, customers can select non-payment dates for their personal loan. |
| Destination account   | Corresponds to the account to which the requested loan amount will be deposited. |
| Insurance             | Corresponds to the selection of insurances that the client will be able to request together with their loan, if necessary. |
|                       |

By selecting each of these options, the widget will display the amount and simulate the payment, along with a report of the attached credit details.

Lastly, a button will appear that allows the client to apply directly for the loan.


<script>

  export default {
    mounted() {

      function setIframeHeightCO(id, ht) {
          var ifrm = document.getElementById(id);
          if(ifrm) {
            ifrm.style.visibility = 'hidden';
            // some IE versions need a bit added or scrollbar appears
            ifrm.style.height = ht + 4 + "px";
            ifrm.style.visibility = 'visible';
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
