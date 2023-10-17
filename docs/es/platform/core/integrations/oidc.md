---
search: true
---

# Gestionar sesiones privadas usando OpenID Connect (OIDC)

Interactúa con una API privada usando la sesión privada de Modyo con una integración OIDC. Esta integración consiste de dos pasos: **hacer el sitio privado** y **habilitar la integración a nivel de cuenta**.

## 1. Hacer el sitio privado

Un sitio privado permite que solamente los usuarios registrados en Modyo Platform puedan accesar este sitio. Para hacer el sitio privado, sigue estos pasos:

1. En Modyo Platform, desde el menú lateral, haz click en **Channels** y selecciona **Sitios**.
1. Haz click en tu sitio.
1. En la sección `Configuración del sitio`, haz click en **General**.
1. En la pestaña **Privacidad**, selecciona la opción **Privado**. 

Además activa **Mostrar home a visitas públicas** para poder redireccionar usuarios sin sesión.

#### Habilitar la integración a nivel de Reino (para todos los usuarios y sitios que pertenecen al reino)

1. En el menú lateral, selecciona **Customers** y haz click en **Reinos**.
1. Expande **Configuración de reino** y haz click en **Proveedores de Identidad**.
1. Haz click en **+ Añadir**
1. Selecciona la integración **OpenID Connect** y lleno los siguientes datos:
  * **Nombre del servicio**
  * **Client ID**
  * **Secret**
  * **Issuer**
5. Haz click en **Lanzar servicio de descubrimiento** para asegurar que se logró una conexión.
6. Habilita las siguientes opciones si son necesarias:
    * Habilitar refresh token
    * Habilitar cierre de sesión remoto
    * Habilitar revocación de token
    * Habilitar sincronización de claims
7. Asocia los campos del proveedor con los campos personalizados que tengas en Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

## 2. Usar Axios para hacer la integración

Usaremos la librería `axios` para realizar una integración desde Modyo. Un patrón que resulta conveniente es crear 3 snippets distintos que se harán cargo de los aspectos básicos de una integración.

Las tareas que debes cubrir con los snippets son:

- Un interceptor de requests para incluyan un token.
- Un controlador de sesiones.
- Una ventana modal que informe al usuario que su sesión va a expirar.

Primero debemos agregar la librería Axios a través de un CDN al sitio:

1. En el menú lateral, selecciona **Channels** y haz click en **Sitios**.
1. Haz click en tu sitio y luego haz click en **Plantillas**.
1. En el apartado de **Snippets**, abre el archivo `head` y copia el siguiente código:

``<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>``

4. Guarda los cambios.

Para crear los snippets, sigue estos pasos:

1. En el menú lateral, selecciona **Channels** y haz click en **Sitios**.
1. Haz click en tu sitio y luego haz click en **Plantillas**.
1. En el menú lateral derecho, en la pestaña **Snippets**, agrega un nuevo snippet personalizado.
1. Nombra la ruta `interceptor_js` y copia el siguiente código:

### Interceptar los request para que incluyan un token

```js
// variable global que representará una instancia de axios que se encargará de hacer las peticiones de los servicios
var axios_api = axios.create();
axios_api.defaults.baseURL = 'URL DE API';

// variable global que representará una instancia de axios que se encargará de hacer las peticiones de la api de modyo
var axios_modyo=axios.create({
  baseURL: window.baseUrl + '/api/admin',
});
// variable global que representará una instancia de axios que se encargará de hacer las peticiones los json de contenido del sitio
var axios_modyo_json=axios.create({
  baseURL: {{site.url}},
});
// variable global que representará una instancia de axios que se encargará de hacer las peticiones relacionadas con la autenticación
var axios_auth = axios.create();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
// función que genera actividad en el sitio con cada petición de autenticación
var resetIdleTime = function(request){
  sessionManager.resetIdleTime();
  return request;
};
// función que agrega el token a cada uno de los request
var appendTokenToRequest = function (request) {
  return axios_auth.get('/access_token').then(function(response){
    request.headers.authorization='Bearer '+ response.data.access_token;
    return request;
  });
};
// función que maneja los errores de cada una de las peticiones y los envía a una instancia superior
var errorRequest=function(error){
  throw error;
};
axios_auth.interceptors.request.use(resetIdleTime);
axios_api.interceptors.request.use(appendTokenToRequest ,errorRequest);
```

5. Cambia el nombre `URL DE API` por la URL donde se localice la API de Modyo Platform.

### Un controlador de sesiones

1. Agrega otro snippet personalizado llamado `controller_js` y copia el siguiente código:

```js
var modalConfirm = function() {
  return new Promise(function(resolve, reject) {
    $("#session-modal").modal({
      backdrop: "static",
      keyboard: false,
      show: true
    });
    $("#session-modal-yes").on("click", function() {
      resolve("keep session");
      $("#session-modal").modal("hide");
    });
    $("#session-modal-no").on("click", function() {
      reject("destroy session");
      $("#session-modal").modal("hide");
    });
  });
};

var sessionManager = {
  timeToEndSessionInSeconds: 900,
  timeToRaiseWarningModalInSeconds: 720,
  lastActionTimeInThisWindow: new Date().getTime(),

  secondsToMilisecs: function(minutes) {
    return minutes * 1000;
  },
  intevalId:null,

  isModyoAppShell: function() {
    return /; Modyo_App_Shell/.test(navigator.userAgent);
  },

  init: function() {
    this.resetIdleTime();
    this.intevalId=this.interval();
  },

  resetIdleTime: function() {
    this.lastActionTimeInThisWindow = new Date().getTime();
    var sessionEndTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToEndSessionInSeconds);
    localStorage.setItem("timeToEndSession", sessionEndTime);
    var raiseWarningModalTime =
      this.lastActionTimeInThisWindow +
      this.secondsToMilisecs(this.timeToRaiseWarningModalInSeconds);
    localStorage.setItem("timeToRaiseWarningModal", raiseWarningModalTime);
  },


  interval: function() {
    var self = this;
    return setInterval(this.checkSessionEvents, 1000, self);
  },

  raiseModal: function() {
    return modalConfirm();
  },

  logout: function() {
    localStorage.clear();
    sessionStorage.clear();
    clearInterval(this.intevalId);
    var withRedirect =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (withRedirect) {
      window.location.href =
        "{{site.account_url}}/logout?multi=true&redirect_to=https://modyo.com";
    } else {
      window.location.href = "{{site.account_url}}/logout?site={{site.uuid}}";
    }
  },

  checkSessionEvents: function(self) {
    var sessionEndTime = localStorage.getItem("timeToEndSession");
    var raiseWarningModalTime = localStorage.getItem("timeToRaiseWarningModal");
    var diffInSecsToShow =
      Math.round((sessionEndTime - new Date().getTime()) / 1000) > 0
        ? Math.round((sessionEndTime - new Date().getTime()) / 1000)
        : 0;
    var expirationTimeHtml = document.querySelector("#expiration-time");
    var timeNow = new Date().getTime();
    expirationTimeHtml.innerText = diffInSecsToShow;
    if (sessionEndTime - timeNow < 0) {
      self.logout();
    } else if (raiseWarningModalTime - timeNow < 0) {
      self
        .raiseModal()
        .then(function(response) {
          axios_auth.get("/access_token");
        })
        .catch(function(err) {
          self.logout();
        });
    } else {
      if (($("#session-modal").data("bs.modal") || {})._isShown) {
        $("#session-modal").modal("hide");
      }
    }
  }
};
```

2. Cambia el código `redirect_to=https://modyo.com";` a una URL donde quieras redirigir a tus usuarios.

### Una ventana modal que informe al usuario que su sesión va a expirar

Este es el modal a activar en el paso anterior con bootstrap para el manejo del warning modal.

1. Agrega otro snippet personalizado llamado `sessionmodal` y copia el siguiente código:

```html
<div
  id="session-modal"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="session-modal-label"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="session-modal-label">
          Session about to expire
        </h5>
      </div>
      <div class="modal-body text-center">
        <p>
          Your session will expire in <span id="expiration-time"></span> seconds.
        </p>
        <p>Close Session?</p>
      </div>
      <div class="modal-footer">
        <button id="session-modal-yes" type="button" class="btn btn-primary">
          Yes
        </button>
        <button
          id="session-modal-no"
          type="button"
          class="btn btn-secondary"
          data-dismiss="modal"
        >
          No
        </button>
      </div>
    </div>
  </div>
</div>
```

### Conclusión

Con estos snippets, ya puedes lograr interactuar con la API usando una sesión privada a través de OIDC gestionada por Axios. El siguiente paso será agregar estos snippets a tu sitio usando los siguientes códigos:

- Interceptor: `{% snippet "interceptor_js" %}`
- Controller: `{% snippet "controller_js" %}`
- SessionModal: `{% snippet "sessionmodal" %}`