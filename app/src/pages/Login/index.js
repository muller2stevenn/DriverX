import {Image} from 'react-native';
import React, {useEffect} from 'react';

import social from '../../services/social';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/modules/app/actions';

import logo from '../../assets/logo.png';
import bgBottom from '../../assets/bg-bottom-login_new.png';

import { Container, Button, ButtonText } from '../../styles';
import graph  from '../../services/facebook';

const Login = () => {

    const login = async() => {

        const dispatch = useDispatch();
        
        try {
           const auth = await social.authorize('facebook',{
               scopes: 'email',
           });
           
           const user = await social.makeRequest(
               'facebook', 
               '/me?fields=id,name,email',
            );

            //outra forma de fazer, apensa por GET
            //é um bom exemplo de como consumir uma API
           /*const user = await graph.get(
               `/me?fields=id,name,email&access_token=${auth.response.credentials.accessToken}`
            );
            */

            //quando clicar em login vou disparar a action de update
            dispatch(
                updateUser({
                    fbId: user.data.id,
                    nome: user.data.name,
                    email: user.data.email,
                    accessToken: auth.response.credentials.accessToken,
                }),
            );
           
        } catch (error) {
            alert(error.message);
        }
    }


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

            <Button onPress={()=>login()} type="info">
                <ButtonText color="light">Fazer Login com Facebook</ButtonText>
            </Button>

            <Button style={{border:'solid 1px black'}} type="muted" stroke={1}>
                <ButtonText>Fazer Login com Google</ButtonText>
            </Button>

        </Container>
        <Image source={bgBottom} />
    </Container>
    );
};

export default Login;