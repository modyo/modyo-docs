---
search: true
---

# Mortgage Loans

This widget allows customers to simulate a mortgage loan and start the application process according to the applicant's requirements.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-mortgage-loan
```

[Open in new tab](https://widgets.modyo.com/retail/mortgage-loan)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/mortgage-loan" width="100%" frameBorder="0" style="min-height:860px;overflow:auto;margin-top:20px;"/>

| Description         | Investor Profile Survey                                                                                                                                                                                                               |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Loan Amount     | Clients can enter the loan amount they want to simulate and apply for.                                                                                                                                                |
| Down payment                   | Clients can enter the desired down payment amount to be included in the application.                                                                                                                                                     |
| Property type      | Allows the user to choose the property type they wish to purchase with the loan.                                                                                                                                                    |
| Loan Term         | Allows the user to choose the length of the loan term during which payments will be made.                                                                                                                                   |
| Grace Period       | This section allows customers to select the months of their grace period.                                                                                                                         |
| Insurance               | The customer can add different types of insurance to the mortgage loan simulation.                                                                                                                                   |
| Simulation Summary | Presents general information obtained from the mortgage loan simulation. It includes total cost of the loan, the loan term in years, the monthly payment amount, the corresponding interest rates, and financing percentage. |
| Simulation Details | Displays the details of the mortgage loan simulation. Includes the loan amount, term, down payment, monthly payment amount, property type, taxes, insurances, expenses and more.                                         |
| Apply for Loan             | Allows customers to confirm the simulation and begin their application for the mortgage loan with your institution.                                                                                                                      |

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
