---
search: true
---

# Benefits

[Open in new tab](https://widgets-es.modyo.com/personas/beneficios)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/personas/beneficios" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"></p>

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
      Benefits Summary
    </td>
    
    <td>
      Give a list of promotions with automatic labeling by category. Displays the title of each promotion and its basic information. Quickly filter promotions by category or search for any promotion by name. Allows you to view promotions by location on the map and automatically calculates the distance to the nearest promotions using geolocation data.
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
