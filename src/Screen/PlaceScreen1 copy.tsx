import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Carrusel } from '../components/Carrusel';
import { ImageCarrusel } from '../components/ImageCarrusel';
import { ListCards } from '../components/ListCards';
import { PropsStack } from '../navegation/StackNavegation';
import { hotels } from './FavoriteScreen';
import { ThemeContext } from '../context/ThemeContext';
interface Props extends StackScreenProps<PropsStack,'PlaceScreen'>{}
const {width,height} = Dimensions.get('window')

export const PlaceScreen1 = ({route,navigation}:Props) => {
    const place = route.params;
    const {theme:{colors}} = useContext(ThemeContext)
    return (
        <>
            <View style={{height:(height-50)*0.52}} >
                <ImageCarrusel place={place} width={width} />
            </View>
            <ListCards size={21} title='Hoteles' object={hotels}  colors={colors} navigation={navigation} />
        </>
    )
}