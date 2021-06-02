---
search: true
---

# Mortgage Loans

This widget allows customers to simulate a mortgage loan and start the application process according to the applicant's requirements.

### Installation:

```bash
modyo-cli get modyo-widgets-retail-mortgage-loan
```

[Open in new tab](https://widgets-es.modyo.com/personas/creditos-hipotecarios)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/creditos-hipotecarios" width="100%"  frameBorder="0" style="min-height:900px;overflow:auto;margin-top:20px;"></p>

<table spaces-before="0">
  <tr>
    <th>
      Feature
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      Loan Amount
    </td>
    
    <td>
      Clients can enter the loan amount they want to simulate and apply for.
    </td>
  </tr>
  
  <tr>
    <td>
      Down payment
    </td>
    
    <td>
      Clients can enter the desired down payment amount to be included in the application.
    </td>
  </tr>
  
  <tr>
    <td>
      Property type
    </td>
    
    <td>
      Allows the user to choose the property type they wish to purchase with the loan.
    </td>
  </tr>
  
  <tr>
    <td>
      Loan Term
    </td>
    
    <td>
      Allows the user to choose the length of the loan term during which payments will be made.
    </td>
  </tr>
  
  <tr>
    <td>
      Grace Period
    </td>
    
    <td>
      The customer can add a grace period in months of non-payment to the simulation.
    </td>
  </tr>
  
  <tr>
    <td>
      Insurance
    </td>
    
    <td>
      The customer can add different types of insurance to the mortgage loan simulation.
    </td>
  </tr>
  
  <tr>
    <td>
      Simulation Summary
    </td>
    
    <td>
      Presents general information obtained from the mortgage loan simulation. It includes total cost of the loan, the loan term in years, the monthly payment amount, the corresponding interest rates, and financing percentage.
    </td>
  </tr>
  
  <tr>
    <td>
      Simulation Details
    </td>
    
    <td>
      Displays the details of the mortgage loan simulation. Includes the loan amount, term, down payment, monthly payment amount, property type, taxes, insurances, expenses and more.
    </td>
  </tr>
  
  <tr>
    <td>
      Apply for Loan
    </td>
    
    <td>
      Allows customers to confirm the simulation and begin their application for the mortgage loan with your institution.
    </td>
  </tr>
</table>

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
          if ( e.origin === 'https://widgets-es.modyo.com' ) {
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
