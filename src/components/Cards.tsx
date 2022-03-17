import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { info, PropsStack } from '../navegation/StackNavegation';
import { agency, hotel } from '../Screen/FavoriteScreen';
import { place } from '../Screen/HomeScreen';
import { stylesApp } from '../theme/stylesGlogals';
interface Props {
    object:hotel|agency,
    color: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    navigation:StackNavigationProp<PropsStack, "PlaceScreen">,

}



export const Cards = ({object,color,navigation }:Props) => {

    return (
        <TouchableOpacity  activeOpacity={0.92} style= {styles.sombra} onPress={()=> navigation.navigate( object.type === 'HotelScreen'? 'HotelScreen':'TourismAgencyScreen',{name: object.name})} >
            <View style= {{...styles.container,...stylesApp.marginHorizontal,backgroundColor:color.card}} >
                <Image
                    source={{uri: `${object.img}`}}
                    style={styles.img}
                />
                <View style= {{marginLeft: 20,zIndex: 25}} >
                    <Text style={{...styles.name,color: color.text}} >{object.name}</Text>
                    <Text style={styles.ubication} ><Icon name='location-sharp' size={16} color= '#BBB6B6' /> {object.ubication}</Text>
                    <Text style={styles.qualification} > <Icon name='star-sharp' size={16} color= '#ED9824' /> {object.qualification}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 115,
        marginVertical: 10,
        borderRadius: 21,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    sombra: {
    },
    img: {
        height: 115,
        width: 115,
        borderTopLeftRadius: 21,
        borderBottomLeftRadius:21
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    ubication:{
        fontSize: 16,
        color: '#BBB6B6'
    },
    qualification:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#BBB6B6'
    }
})
