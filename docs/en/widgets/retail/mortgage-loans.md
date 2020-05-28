---
search: true
translated: true
---

# Mortgage Loans

This widget allows you to make a simulation of a mortgage loan and start the application process with the requirements needed from each applicant.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-mortgage-loan
```

[Open in new tab](https://widgets.modyo.com/retail/mortgage-loan)

<iframe id="widgetFrame" src="https://widgets.modyo.com/retail/mortgage-loan" width="100%"  frameBorder="0" style="min-height:860px;overflow:auto;margin-top:20px;"/>

| Feature            | Description                                                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Loan Amount        | Enters the loan amount that they want to simulate and apply for.                                                                                                                                                        |
| Down payment       | Enters the down payment amount to be included in the application.                                                                                                                                                       |
| Property type      | Chooses the property type that they wish to purchase with the loan.                                                                                                                                                     |
| Loan Term          | Chooses the number of years over which loan payments will be made.                                                                                                                                                      |
| Grace Period       | Selects a grace period of non-payment in months that the customer wishes to add into their simulation.                                                                                                                  |
| Insurance          | Chooses which insurances to include in the mortgage loan simulation.                                                                                                                                                    |
| Simulation Summary | Presents general information about the mortgage loan simulation carried out. Includes total cost of the loan, the term in number of years, monthly payment amount, respective interest rates and financing percentages. |
| Simulation Details | Displays the details of the mortgage loan simulation. Includes the loan amount, term, down payment, monthly payment amount, property type, taxes, insurance and expenses, among others.                                 |
| Apply for Loan     | Allows customers to confirm the simulation and begin their application for the mortgage loan with your institution.                                                                                                     |

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
