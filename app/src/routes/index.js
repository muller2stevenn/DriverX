import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

import Type from '../pages/Steps/type';
import Car from '../pages/Steps/car';
import Payment from '../pages/Steps/payment';
import Ride from '../pages/Ride';
import Home from '../pages/Home';
import Login from '../pages/Login';

//criando pilha de navegação
const Stack = createStackNavigator();

const Routes = () => (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Login"
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Type"
                component={Type}
            />
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Payment"
                component={Payment}
            />
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Car"
                component={Car}
            />
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Home"
                component={Home}
            />
            <Stack.Screen
                options={{ headerShown : false}} //remover o header do android
                name="Ride"
                component={Ride}
            />
                                    
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;