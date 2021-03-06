import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
 

import { Container, Button, ButtonText, Title, SubTitle, Input, Spacer, AddressList, AddressItem } from '../../styles';

const Ride = () => {

    const[ visible, setVisible] = useState(true); //isso aqui foi criado para o botão não subir quando clicamos no teclado
    
    useEffect(()=>{
        const keyboarDidShowListener = Keyboard.addListener(
            'keyboardDidShow', 
            ()=>setVisible(false),
        );

        const keyboarDidHideListener = Keyboard.addListener(
            'keyboardDidHide', 
            ()=>setVisible(true),
        );

        return () =>{
            keyboarDidShowListener.remove();
            keyboarDidHideListener.remove();
        }

    },[]);

    return(
        <>
            <Container row height={75} justify="flex-start">
                <Container align="flex-start" padding={20}>
                    <SubTitle>Voltar</SubTitle>
                </Container>
                <Container>
                    <Title>Corrida</Title>
                </Container>
                <Container align="flex-end" padding={20}></Container>
            </Container>

            <Container padding={30} justify="flex-start"  >
                <Container height={90} justify="flex-start" >
                    <Input placeholder="Emabrque" />
                    <Input placeholder="Destino" />
                </Container>

                <Container>
                <AddressList 
                    data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]} 
                    renderItem={({item, index}) => (
                        <AddressItem>
                            <SubTitle bold>Mnelo Park</SubTitle>
                            <SubTitle small>Palo Alto, CA</SubTitle>
                        </AddressItem>
                    )}
                />
                </Container> 
            </Container> 

                {visible && ( 
                    <Container height={110} padding={30} justify="flex-end">
                        <Button>
                            <ButtonText>Começar a usar</ButtonText>
                        </Button>
                    </Container>
                )} 
        </>
    );
}

export default Ride;