import {Image} from 'react-native';
import React from 'react';

import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login_new.png';

import { Container, Button, ButtonText } from '../../styles'

const Login = () => {
    return (
    <Container color="info50" justify="flex-end">
        <Container 
            justify="space-around" 
            padding={30}
            position="absolute"
            height={270}
            top={0}
            zIndex={9}>
            <Image source={logo} />

            <Button type="info">
                <ButtonText color="light">Fazer Login com Facebook</ButtonText>
            </Button>

            <Button type="light" stroke={1}>
                <ButtonText>Fazer Login com Google</ButtonText>
            </Button>

        </Container>
        <Image source={bgBottom} />
    </Container>
    );
};

export default Login;