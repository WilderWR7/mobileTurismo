import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { Text, View, Dimensions, ScrollView } from 'react-native';
import { PropsStack } from '../navegation/StackNavegation'
import ExtraDimensions from 'react-native-extra-dimensions-android';
import { ThemeContext } from '../context/ThemeContext';
import { InformationHotel } from '../components/InformationHotel';
import { Footer } from '../components/Footer';
interface Props extends StackScreenProps<PropsStack,'TourismAgencyScreen'>{}
const {width,height:WINDOW_HEIGHT} =  Dimensions.get('window')
const sb = ExtraDimensions.getSoftMenuBarHeight()
export const dataAgency = [
    {
        type:'5 dias',
        name:"time-sharp",
        color1:'#114EEB',
        color2:'#719E36'
    },
    {
        type:'1 Km',
        name:"location-sharp",
        color1:'#F12020',
        color2:'#'
    },{
        type:'21 C°',
        name:"sunny-sharp",
        color1:'#F1F50D',
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

export const TourismAgencyScreen = ({route}:Props) => {
    const info = route.params;
    const height=WINDOW_HEIGHT-sb-50;
    const {theme:{colors}} = useContext(ThemeContext)
    ///"time-sharp"  location-sharp  sunny-sharp
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <InformationHotel description='Datos' colors={colors} info={info.name} height={height}/>
            </ScrollView>
            <Footer width={width} colors= {colors} />
        </>
    )
}
