---
search: true
---

# Managing private sessions using OpenID Connect (OIDC)

Interact with a private API using Modyo's private session with an OIDC integration. This integration consists of two steps: **making the site private** and **enabling the integration at the account level**.

## 1. Make the site private

A private site allows only registered users of Modyo Platform to access this site. To make the site private, follow these steps:

1. In Modyo Platform, from the side menu, click **Channels** and select **Sites**.
1. Click on your site.
1. In the `Site Settings` section, click **General**.
1. In the **Privacy** tab, select the **Private** option. 

Also enable **Show home to public visitors** to be able to redirect users without a session.

#### Enable integration at the Realm level (for all users and sites that belong to the realm)

1. In the side menu, select **Customers** and click **Realms**.
1. Expand **Realm Settings** and click **Identity Providers**.
1. Click **+ Add**
1. Select the **OpenID Connect** integration and fill in the following information:
  * **Name of the service**
  * **Client ID**
  * **Secret**
  * **Issuer**
5. Click **Launch Discovery Service** to ensure that a connection was achieved.
6. Enable the following options if needed:
    * Enable refresh token
    * Enable remote logoff
    * Enable token revocation
    * Enable claim synchronization
7. Associate the provider fields with the custom fields you have in Modyo [OpenID Connect 1.0 specification for Standard Claims](http://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)

## 2. Using Axios to do the integration

We will use the `axios` library to perform an integration from Modyo. The pattern is to create 3 different snippets that will take care of the basics of an integration.

The tasks you must cover with these snippets are:

- A request interceptor to include a token.
- A session controller.
- A modal window that informs the user that their session will expire.

First we need to add the Axios library via CDN to the site:

1. In the side menu, select **Channels** and click **Sites**.
1. Click on your site and then click **Templates**.
1. In the **Snippets** section, open the `head` file and copy the following code:

``<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>``

4. Save your changes.

To create the snippets, follow these steps:

1. In the side menu, select **Channels** and click **Sites**.
1. Click on your site and then click **Templates**.
1. In the right side menu, under the **Snippets** tab, add a new custom snippet.
1. Name the path `interceptor_js` and copy the following code:

### Intercept requests to include a token

```js
// this global variable is an axios instance in charge of making petitions to the services
var axios_api = axios.create();
axios_api.defaults.baseURL = 'URL DE API';

// this global variable is an axios instance in charge of making api petitions to Modyo's API
var axios_modyo=axios.create({
  baseURL: window.baseUrl + '/api/admin',
});
// this global variables is an axios instance in charge of making json petitions to site json content
var axios_modyo_json=axios.create({
  baseURL: {{site.url}},
});
// this global variable is an axios instance in charge of making petitions related with authentication
var axios_auth = axios.create();
axios_auth.defaults.baseURL = window.baseUrl + '/auth/openidc';
// function that generates activity in the site with each authentication petition
var resetIdleTime = function(request){
  sessionManager.resetIdleTime();
  return request;
};
// function that adds a token to each of the requests
var appendTokenToRequest = function (request) {
  return axios_auth.get('/access_token').then(function(response){
    request.headers.authorization='Bearer '+ response.data.access_token;
    return request;
  });
};
// function that handles the errors in each petition and sends them to the upper instance
var errorRequest=function(error){
  throw error;
};
axios_auth.interceptors.request.use(resetIdleTime);
axios_api.interceptors.request.use(appendTokenToRequest ,errorRequest);
```

5. Change the name `API URL` to the URL where the Modyo Platform API is located.

### A session controller

1. Add another custom snippet called `controller_js` and copy the following code:

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

2. Change the code `redirect_to= https://modyo.com “;` to a URL where you want to redirect your users.

### A modal window that informs the user that their session will expire

This should be the modal to activate in the previous step with bootstrap for handling the warning modal.

1. Add another custom snippet called `sessionmodal` and copy the following code:

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

### Conclusion

With these snippets, you can now interact with the API using a private session through OIDC managed by Axios. The next step will be to add these snippets to your site using the following codes:

- Interceptor: `{% snippet "interceptor_js" %}`
- Controller: `{% snippet "controller_js" %}`
- SessionModal: `{% snippet "sessionmodal" %}`