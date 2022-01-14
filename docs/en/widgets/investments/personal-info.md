---
search: true
---

# Personal information

This section of the platform allows the user to review and modify their personal data, subscribe to email notifications, and get to know their Investor Profile.

[Open in new tab](https://widgets.modyo.com/inversiones/personal-info)
<iframe id="widgetFrame" src="https://widgets.modyo.com/inversiones/personal-info" width="100%" frameBorder="0" style="overflow:auto;margin-top:20px;"/>

| Description                   | Investor Profile Survey                                                                                                                                                                                                                                                                                                                                         |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Personal Data                | This allows the user to verify and/or change their information. It also provides their account manager's information and contact.                                                                                                                                                                                                                  |
| Investor Profile        | Users can view the current Investor Profile and the date the survey was conducted. It recommends what type of investment they should consider based on the current investor profile. It also includes information associated to the survey, such as what is measured, why it is important, how often it should be conducted, etc. |
| Password Change                 | This allows users to make password changes and displays the necessary features for the new password (maximum and minimum length, characters, uppercase and lowercase, numbers, etc.).                                                                                                                                                                  |
| Subscription to emails | This allows users to subscribe to receiving information about account statements, reports, tax certificates and other documents.                                                                                                                                                                                                                                  |


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
