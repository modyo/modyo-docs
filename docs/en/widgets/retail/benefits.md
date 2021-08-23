---
search: true
---

# Benefits

[Open in new tab](https://widgets.modyo.com/retail/benefits)

<iframe src="https://widgets.modyo.com/retail/benefits" width="100%" height="700px" frameBorder="0" style="overflow:auto;margin-top:20px;"/>

| Description             | Investor Profile Survey                                                                                                                                                                                                                                                                                                                                                                                          |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Benefits Summary | The benefits summary shows a list of promotions and automatically labels them by category. It provides each promotion's title and basic information, and allows you to quickly filter by name or category. You can view promotions by location on the map, and it automatically calculates the distance to the nearest promotions using geolocation data. |

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
