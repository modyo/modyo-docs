---
search: true
translated: true
---

# Loans

Modyo also offers a widget that allows you to see an overview of the loans that a customer has with the financial institution, in detail and with their updated data.

<iframe id="widgetFrame" src="https://widgets.modyo.com/personas/retail-loans" width="100%"  frameBorder="0" style="visibility:hidden;overflow:auto;margin-top:20px;"/>

### Properties

| Functionality               | Description                                                                                                                                                                                                                                             |
|:----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Simulate your personal loan | Allow each client to simulate a personal loan. To do this, use the loans widget to simulate and later being their loan application.                                                                                                                     |
| Simulate your mortgage      | Allows you to simulate the mortgage loan to be applied for. To do so, you will be referred to the mortgage loan widget where you will be able to see the different options that the financial institution can offer.                                    |
| Loan details                | The client can see their loan details, in addition to the outstanding balance owed to the institution, the payment dates and the current fee to be paid.                                                                                                |
| Mortgage details            | Shows details of the mortgage loan applied for, a graph of what is owed and the value of the next installment to be paid.                                                                                                                               |
| Pagar deuda                 | Corresponde a la funcionalidad de pago de la deuda.<br><br> Este pago de deuda puede ser total o parcial.<br><br> Hacer click en este botón llevará al widget de pagos, donde se podrá seleccionar la opción de pago de deuda nacional o internacional. |


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
