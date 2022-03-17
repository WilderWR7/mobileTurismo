import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen } from '../Screen/FavoriteScreen';
import { StackNavegation } from './StackNavegation';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartScreen } from '../Screen/CartScreen';
import { ProfileScreen } from '../Screen/ProfileScreen';
import { ThemeContext } from '../context/ThemeContext';
const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
    const {theme:{colors}} = useContext(ThemeContext)
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            // tabBarLabelStyle: {
            //     marginBottom: 10,
            // },
            tabBarStyle: {
            //     position: 'absolute',
            //     borderWidth: 0,
                elevation: 0,
                borderTopColor: 'transparent',
                height:50
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor:colors.primary,
            
        }}
        >
            <Tab.Screen name="Home"  options={{tabBarIcon:({color})=> <Icon name='home-sharp' size={30} color={color} />  }} component={StackNavegation} />
            <Tab.Screen name="FavoriteScreen" options={{tabBarIcon:({color})=> <Icon name='heart-sharp' size={30} color={color} />  }} component={FavoriteScreen} />
            <Tab.Screen name="CartScreen" options={{tabBarIcon:({color})=> <Icon name='file-tray-sharp' size={30} color={color} />  }} component={CartScreen} />
            <Tab.Screen name="ProfileScreen" options={{tabBarIcon:({color})=> <Icon name='person-sharp' size={30} color={color} />  }}  component={ProfileScreen} />
        </Tab.Navigator>
    )   
}