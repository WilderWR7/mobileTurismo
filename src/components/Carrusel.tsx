import React from 'react'
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'
import { place } from '../Screen/HomeScreen';
import { stylesApp } from '../theme/stylesGlogals'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { ImageCarrusel } from './ImageCarrusel';


interface Props {
    places:place[],
    width: number
}

export const Carrusel = ({places, width}:Props) => {
    return (
        <Swiper showsButtons={false} autoplay={true} autoplayTimeout={6} dot={<View></View>}  activeDot={<View></View>}>
            {
                places.map((place)=>
                        <ImageCarrusel key={place.name} place={place} width={width} />
                )
            }
        </Swiper>   
    )
}
