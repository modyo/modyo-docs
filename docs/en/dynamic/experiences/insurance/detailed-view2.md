---
search: true
---

# Life Insurance

:::warning Update
This component is currently being upgraded and could soon be replaced. The design system used may not be compatible with the latest version of Dynamic UI.
:::

See all your life insurance information in detail. You can also view and download your cards and policies.

#### Installation

```bash
modyo-cli get modyo-widgets-insurance-details
```

[Open in new tab](https://widgets.modyo.com/insurance/retail/detailed-view)

<iframe id="widgetFrame" src="https://widgets.modyo.com/insurance/retail/detailed-view" width="100%" frameBorder="0" style="min-height:762px;overflow:auto;margin-top:20px;"/>

| Features | Description |
| ------------- | ----------- |
| Contractor Details  | You will be able to see the details of the contractor and the policy such as name, email, telephone number, name of the policy, and value of the policy. |
| Coverage Details | By clicking on the coverage, you will be able to see all the clauses of your policy and their details. |
| Policy Value Details | See the value of your policy assets and see the balance details of your accounts and investment portfolio. |
| Fund Information | View and download the details of your investment portfolio. You will be able to see the different funds, the distribution (in %) of your account, the share value, the profitability in the month, and the profitability in the current year. | 

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
