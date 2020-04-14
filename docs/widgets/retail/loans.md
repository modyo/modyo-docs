---
search: true
---

# Créditos

Modyo ofrece un widget que permite ver una vista general de los créditos que el cliente tiene con la institución financiera, de manera detallada y con sus datos actualizados.

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/retail-loans" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Propiedades
| Functionality               | Description                                                                                                                                                                                                          |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Simulate your personal loan | Allow each client to simulate a personal loan. To do this, use the loans widget to simulate and later being their loan application.                                                                                  |
| Simulate your mortgage      | Allows you to simulate the mortgage loan to be applied for. To do so, you will be referred to the mortgage loan widget where you will be able to see the different options that the financial institution can offer. |
| Loan details                | The client can see their loan details, in addition to the outstanding balance owed to the institution, the payment dates and the current fee to be paid.                                                             |
| Mortgage details            | Shows details of the mortgage loan applied for, a graph of what is owed and the value of the next installment to be paid.                                                                                            |
| Make a Payment              | Corresponds to the payment functionality.<br><br> Both full and partial payments can be made.<br><br> Clicking this button will take you to the payment widget, where you can select your payment options.           |

- Simulate your personal loan: Allows you to simulate personal loans. To do so, you can use the loan widget to create the simulation and then begin a loan application.

- Simulate your mortgage: Allows you to simulate a mortgage that customers can apply for. To do this, use the mortgage widget to access the different mortgage options available from your financial institution.

- Personal Loan: Customers can see their loan details, in addition to the outstanding balance owed to your institution, their payment dates, and the current installment to be paid.

- Mortgage Loan: Shows the details of the requested mortgage, a graph detailing what is owed, and the value of the next installment to be paid.

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
