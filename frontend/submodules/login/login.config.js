export default function routing ($routeProvider, angularAuth0Provider) {

    // Initialization for the angular-auth0 library
    angularAuth0Provider.init({
      clientID: '4fzJ7Zcm7WdmDCw15KsyRfQTkAYWW6Oc',
      domain: 'opsgastei.auth0.com',
      responseType: 'token id_token',
      audience: 'https://opsgastei.auth0.com/userinfo',
      redirectUri: 'http://localhost:9000/callback',
      scope: 'openid'
    });
};
