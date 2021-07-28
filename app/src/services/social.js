import OAuthManager from 'react-native-social-login';

const social = new OAuthManager('driverx');
social.configure({
    facebook:{
        client_id: '??',
        client_secret: '??',
    },
});

export default social;