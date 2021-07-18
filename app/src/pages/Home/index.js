import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
 

import { Map, Container, Avatar, Title, SubTitle, Spacer, Input, 
    Button, ButtonText, VerticalSeparator, Bullet, PulseCircle } from '../../styles';

const Home = () => {
    
    const tipo = 'M'; //P - passageiro, M- motorista
    const status = 'C'; //S- sem corrida, I - informações, P - pesquisa, C - corrida
    return(
        <Container>
            <Map
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                disabled={status=='P'}
            />
            {/* CONTAINER ACIMA DO MAPA */}
            <Container         
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={999} //faz a view ficar acima do mapa
                pointerEvents="box-none" //ignora cliques na view, só funciona os cliques nos elementos da view
                style={{height:'100%'}}> 

                {/* PARTE SUPERIOR*/}
                <Container elevation={50} height={100} justify="flex-start" align="flex-start">
                    {/* AVATAR */}
                    {status == 'S' || (tipo =='M' && (
                        <TouchableOpacity>
                            <Avatar source={{uri: 'data:image/jpeg;base64,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'}} />
                        </TouchableOpacity>
                    ))}

                    {status != 'S' && tipo =='P' &&(
                        <Container elevation={50} color="light" justify="flex-end">
                            <Container padding={10}>
                                <Container justify="flex-start" row>
                                    <Bullet />
                                    <SubTitle>{' '}Endereço de embarque completo</SubTitle>
                                </Container>
                                <Spacer/>
                                <Container justify="flex-start" row>
                                    <Bullet destination/>
                                    <SubTitle>{' '}Endereço de destino completo</SubTitle>
                                </Container>
                            </Container>
                            <Button type="dark" compact>
                                <ButtonText color="light">Toque para editar</ButtonText>
                            </Button>
                        </Container>
                    )}
                </Container>
                
                {/**PASSAGEIRO PROCURANDO CORRIDA */}
                {status == "P" && tipo == "P" && (<Container padding={20}
                zIndex={-1}
                >
                    <PulseCircle 
                    numPulses={3}
                    diamenter={400}
                    speed={20}
                    duration={2000}
                    />
                </Container>
                )}
                
                {/* PARTE INFERIOR*/}
                <Container  elevation={50} height={150} color="light">
                    {/* PASSAGEIRO SEM CORRIDA */}
                    { tipo == 'P' && status == 'S' && (
                        <Container justify="flex-start" padding={20} align="flex-start">
                            <SubTitle>Ola, Silvio Sampaio.</SubTitle>
                            <Title>Pra onde você quer ir?</Title>
                            <Spacer />
                            <Input placeholder="Procure um destino ..."/>
                        </Container>
                    )}
                    {/* PASSAGEIRO COM INFORMAÇÕES DA CORRIDA */}
                    { tipo == 'P' && (status == 'I' || status == 'P') && (
                        <Container justify="flex-end" align="flex-start">
                            <Container padding={20}>
                                <SubTitle>DriverX Convencional</SubTitle>
                                <Spacer />
                                <Container row>
                                    <Container>
                                        <Title>R$ 13,90</Title>
                                    </Container>
                                    <VerticalSeparator/>
                                    <Container>
                                        <Title>5 mins</Title>
                                    </Container>
                                </Container>
                            </Container>
                            <Button
                                type={status == 'P' ? "muted" : "primary"}>
                                <ButtonText>{status == 'P' ? "Cancelar DriverX" : "Chamar DriverX"}</ButtonText>
                            </Button>
                        </Container>
                    )}

                    {/** PASSAGEIRO EM CORRIDA */}
                    
                    { tipo=='P' && status == 'C' && (<Container border="primary" justify="flex-end" align="flex-start">
                        <Container row padding={20}>
                            <Container align="flex-start"  row>
                                <Avatar small
                                    source={{uri:'data:image/jpeg;base64,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'}}
                                />
                                <Spacer width="10px" />
                                <Container align="flex-start">
                                    < SubTitle bold>Juliana Righi </SubTitle>
                                    < SubTitle small>ABC-123, BMW X6, Preta </SubTitle>
                                </Container>
                            </Container>
                            <VerticalSeparator />
                            <Container  width={100}>
                                <Title>R$ 12,90</Title>
                                <SubTitle bold color="primary">Aprox. 5 mins</SubTitle>
                            </Container>
                        </Container>
                        <Button type="muted">
                            <ButtonText>Cancelar Corrida</ButtonText>
                        </Button>
                    </Container>
                    )}

                    {/**MOTORISTA ESTA EM CORRIDA */}
                    { tipo=='M' && status == 'C' && (<Container border="primary" justify="flex-end" align="flex-start">
                        <Container row padding={20}>
                            <Container align="flex-start"  row>
                                <Avatar small
                                    source={{uri:'data:image/jpeg;base64,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'}}
                                />
                                <Spacer width="10px" />
                                <Container align="flex-start">
                                    < SubTitle bold>Silvio (2km)</SubTitle>
                                    <Container >
                                        <Container height={15} justify="flex-start" row>
                                            <Bullet />
                                            <SubTitle small numberOfLines={1}>{' '}Endereço de embarque completo</SubTitle>
                                        </Container>
                                        <Container height={15} justify="flex-start" row>
                                            <Bullet destination/>
                                            <SubTitle small numberOfLines={1}>{' '}Endereço de destino completo</SubTitle>
                                        </Container>
                                    </Container> 
                                </Container>
                                <Spacer width="10px" />
                            </Container>
                            <VerticalSeparator />
                            <Container padding={5} width={120}>
                                <Title small>R$ 12,90</Title>
                                <SubTitle bold small color="primary">Aprox. 5 mins</SubTitle>
                            </Container>
                        </Container>
                        <Button type="primary">
                            <ButtonText>Aceitar Corrida</ButtonText>
                        </Button>
                    </Container>
                    )}

                    {/* MOTORISTA SEM CORRIDA */}
                    { tipo === 'M' && status == 'S' && (
                        <Container> 
                            <SubTitle>Ola, Juliana.</SubTitle>
                            <Title>Nenhuma corrida encontrada.</Title>
                            <Spacer />
                        </Container>                    
                    )}
                </Container>
            </Container>
        </Container>
    )
};

export default Home;
