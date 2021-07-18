import React from 'react';
import { Image } from 'react-native';

import iconCar from '../../assets/car.png';
import hand from '../../assets/hand.png';

import { Container, Button, ButtonText, Title, SubTitle, PickerButton } from '../../styles';

const Type = () => {
    return(
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={40}>
                <Title>Passageiro ou Motorista?</Title>
                <SubTitle>Selecione qual será a função no DriverX</SubTitle>
            </Container>
            <Container>
                <PickerButton active>
                    <Image source={iconCar} />
                    <Title>Motorista</Title>
                </PickerButton>
                <PickerButton>
                    <Image source={hand} />
                    <Title>Passageiro</Title>
                </PickerButton>
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Próximo Passo</ButtonText>
                </Button>
            </Container>
        </Container>
    );
}

export default Type;