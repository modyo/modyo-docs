---
search: true
---

# Personal information

This section of the platform allows the user to review and modify their personal data, subscribe to sending information to their email and know their Investor Profile.

[Open in new tab](https://widgets.modyo.com/inversiones/personal-info)
<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/personal-info" width="100%"  frameBorder="0"  style="overflow:auto;margin-top:20px;"></p>

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
      Personal Data
    </td>
    
    <td>
      Allows you to verify and/or change user information. Deliver information about your account manager and how to contact you.
    </td>
  </tr>
  
  <tr>
    <td>
      Investor Profile
    </td>
    
    <td>
      View the current Investor Profile and the date the survey was conducted. It allows to recommend what type of investment should be considered based on the current investor profile. It includes information associated with the survey, such as what is measured, why it is important, what should be the periodicity to conduct it, etc.
    </td>
  </tr>
  
  <tr>
    <td>
      Password Change
    </td>
    
    <td>
      Allows you to make a password change and displays the necessary features for the new password (maximum and minimum length, characters, uppercase and lowercase, numbers, etc.).
    </td>
  </tr>
  
  <tr>
    <td>
      Subscription of email submissions
    </td>
    
    <td>
      It allows you to subscribe to sending information about maps, reports, tax certificates and other documents.
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
