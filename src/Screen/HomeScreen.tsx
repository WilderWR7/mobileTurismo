import React, { useContext } from 'react'
import { Dimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Carrusel } from '../components/Carrusel';
import { HeaderHome } from '../components/HeaderHome';
import { FlatListDestinations } from '../components/FlatListDestinations';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/ThemeContext';
import { StackScreenProps } from '@react-navigation/stack';
import { agencies } from './FavoriteScreen';

const {width,height} = Dimensions.get('window')

export interface place  {
    name: string,
    img: string,
    location?: string,
    description:string
}

export const places:place[] = [
    {
        name: 'Tiwanaku',
        img: 'https://anteriorportal.erbol.com.bo/sites/default/files/styles/interior-hibridado/public/img_noticias/tiwanacu.gif?itok=TVIDw5aV',
        location: 'Ingavi, La Paz',
        description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'
    },
    {
        name: 'Lago Titicaca',
        img: 'https://www.iucn.org/sites/dev/files/content/images/2020/efrenreyes_-_lago_titicaca.jpg',
        location: 'Mi Casa, La Paz',
        description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'
    },
    {
        name: 'Copacabana',
        img: 'https://i.ytimg.com/vi/jNHknd65uwA/maxresdefault.jpg',
        location: 'Omasuyos, La Paz', 
        description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'
    }
]
interface Props extends StackScreenProps<any,any>{};
export const HomeScreen = ({navigation}:Props) => {

    const {top}= useSafeAreaInsets()

    const {theme:{colors}} = useContext(ThemeContext)
    return (
        <ScrollView>
            <View style={{height:(height-50)*0.52}} >
                <HeaderHome top= {top} />
                <Carrusel places={places} width= {width} />
            </View>
                <FlatListDestinations colors={colors} navigation= {navigation} title={'Principales destinos'} data={places} />
                <FlatListDestinations colors={colors} navigation= {navigation} title={'Agencias de Turismo'} data={agencies} />

        </ScrollView>
    )
}
