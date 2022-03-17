import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { Dimensions, ScrollView } from 'react-native';
import { PropsStack } from '../navegation/StackNavegation';
import { ThemeContext } from '../context/ThemeContext';

import ExtraDimensions from 'react-native-extra-dimensions-android';
import { Footer } from '../components/Footer';
import { InformationHotel } from '../components/InformationHotel';


const {width,height:WINDOW_HEIGHT} =  Dimensions.get('window')
const sb = ExtraDimensions.getSoftMenuBarHeight()

interface Props extends StackScreenProps<PropsStack,'HotelScreen'>{}

export const data = [
    {
        type:'Wi-Fi',
        name:"wifi-sharp",
        color1:'#719E36',
        color2:'#719E36'
    },
    {
        type:'AC',
        name:"snow-sharp",
        color1:'#3674CF',
        color2:'#'
    },{
        type:'Comedor',
        name:"restaurant-sharp",
        color1:'#FC8A22',
        color2:'#'
    },{
        type:'Parqueo',
        name:"car-sport-sharp",
        color1:'#8E3CAB',
        color2:'#'
    },
    {
        type:'Piscina',
        name:"water-sharp",
        color1:'#2995FA',
        color2:'#'
    }   
]

export const HotelScreen = ({route}:Props) => {
    
    const info = route.params;
    const height=WINDOW_HEIGHT-sb-50;
    const {theme:{colors}} = useContext(ThemeContext)
    return (
        <>
            <ScrollView>
                <InformationHotel description='Comodidades' colors={colors} info={info.name} height={height}/>
            </ScrollView>
                <Footer width={width} colors= {colors} />
        </>
    )
}
