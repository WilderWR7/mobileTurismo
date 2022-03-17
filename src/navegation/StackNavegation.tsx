import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { HomeScreen, place } from '../Screen/HomeScreen';
import { PlaceScreen } from '../Screen/PlaceScreen';
import { HotelScreen } from '../Screen/HotelScreen';
import { TourismAgencyScreen } from '../Screen/TourismAgencyScreen';
import { ListHotels } from '../Screen/ListHotels';
import { agency } from '../Screen/FavoriteScreen';

export interface info {
    name: string,
}

export type PropsStack = {
    HomeScreen:undefined,
    PlaceScreen:place,
    HotelScreen: info,
    TourismAgencyScreen:info,
    ListHotels: agency[] | place[]
}


const Stack = createStackNavigator<PropsStack>();
export const StackNavegation = () => {
    return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlaceScreen" component={PlaceScreen} />
        <Stack.Screen name="HotelScreen" component={HotelScreen} />
        <Stack.Screen name="TourismAgencyScreen" component={TourismAgencyScreen} />
        <Stack.Screen name="ListHotels" component={ListHotels} />

    </Stack.Navigator>
    );  
}



