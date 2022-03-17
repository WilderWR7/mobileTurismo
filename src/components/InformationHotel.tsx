import React from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { data } from '../Screen/HotelScreen'
import { stylesApp } from '../theme/stylesGlogals'
import { ButtomBack } from './ButtomBack';
import { ListComforts } from './ListComforts';

interface Props {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    info: string,
    height: number,
    description:string
}

export const InformationHotel = ({colors,info,height,description}:Props) => {
    return (
        <View>
            <View style={{height:(height)*0.5}} >
            <ButtomBack/>
            <Image
                source={{uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/168276882.jpg?k=1fd97c613839ec8796830dd4d8d43784666840ba8a80c1798b56964f272b3ab0&o=&hp=1'}}
                style={{width: '100%', height: '100%'}}/>
            </View>
            <View style={{...style.container, backgroundColor: colors.background}} >
                <TouchableOpacity style={{...style.buttonHeart, backgroundColor: colors.primary}} activeOpacity={0.9} >
                    <Icon  name='heart-sharp' color='white' size={35}  />
                </TouchableOpacity>
                <View style= {{...stylesApp.marginHorizontal,...style.infoContainer, marginTop:35}} >
                    <Text style={{...style.title, color: colors.text}} >{info}</Text>
                    <Text style={style.qualification} ><Icon name='star-sharp' size={16} color= '#ED9824' /> 4.5</Text>
                    <Text style={style.ubication} ><Icon name='location-sharp' size={16} color= '#BBB6B6' /> La Paz Bolivia</Text>
                    <Text style={{...style.title, color: colors.text}} >Detalles</Text>
                    <Text style={{...style.txt, color: colors.text}} >The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                </View>
                <ListComforts description={description} colors={colors} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        top: -50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,

        //borderRadius: 50,
    },
    infoContainer: {
        // marginTop:35,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    txt: {
        fontSize: 14,
        textAlign: 'justify', lineHeight: 20,
    },
    ubication:{
        fontSize: 16,
        color: '#BBB6B6'
    },
    qualification:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#BBB6B6'
    },
    buttonHeart: {
        backgroundColor: 'red',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        position: 'absolute',
        top: -30,
        right:50
    }
})


