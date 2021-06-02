---
search: true
---

# Transfer

This widget exists so that clients can transfer funds between their investment accounts and their current registered account.

#### Installation:

```bash
modyo-cli get modyo-widgets-investments-transfer
```

[Open in new tab](https://widgets-es.modyo.com/inversiones/transferencia)

<iframe id="widgetFrame" src="https://widgets-es.modyo.com/inversiones/transferencia" width="100%"  frameBorder="0"  style="min-height:680px;overflow:auto;margin-top:20px;"></p>

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
      Transfer
    </td>
    
    <td>
      Allows clients to transfer funds between investment accounts. It also makes it possible to request a transfer of funds to the client's previously registered accounts.
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
