export default function routing ($httpProvider) {
    // GOOGLE
    GoogleInit();
    function GoogleInit() {
        let auth2;
        gapi.load('auth2', function () {
            auth2 = gapi.auth2.init({
                client_id: '645679162235-cuol995dddui8h7g4t2d6uci91i3tanv.apps.googleusercontent.com',
                fetch_basic_profile: true,
                scope: 'profile'
            })
        })
        return auth2;
    }

    let headerAuth = JSON.parse(window.localStorage.getItem('ngStorage-headerAuth'));
    if (headerAuth) {
        $httpProvider.defaults.headers.common.Authorization = headerAuth;
    }
};
