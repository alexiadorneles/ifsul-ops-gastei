export default function routing ($routeProvider) {

    
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

};
