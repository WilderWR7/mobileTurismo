import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react'
import { View } from 'react-native'
import { TabNavigator } from './TabNavigator';
import { ThemeContext } from '../context/ThemeContext';

export const Navegation = () => {
    const {theme}=useContext(ThemeContext)
    return (
    <NavigationContainer
        theme={theme}
    >
        <TabNavigator/>
    </NavigationContainer>
    );
    
}
