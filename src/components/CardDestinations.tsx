import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { Image, View, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Object, agency } from '../Screen/FavoriteScreen';
import { place } from '../Screen/HomeScreen';

interface Props {
    place: place | agency,
    colors: { primary: string; background: string; card: string; text: string; border: string; notification: string; },
    navigation: StackNavigationProp<any, any>

}


const {width}= Dimensions.get('window')

export const CardDestinations = ({place,colors,navigation}:Props) => {
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>navigation.navigate('PlaceScreen',place)} style={{height:'100%'}} >
            <View style={{width:width*0.6, aspectRatio: 2/2.5, marginHorizontal:12, alignItems: 'center'}} >
                <Image
                    source={{ uri: `${place.img}` }}
                    style={{...styles.img,height:'65%'}}
                />
                <View style={{...styles.cardContainer, backgroundColor: colors.card}} >
                        <View style={{position:'absolute',top:'35%',marginHorizontal:'7.5%'}}>
                            <Text style={{fontWeight: 'bold',color: colors.text,fontSize:18, marginTop:5}} >{place.name}</Text>
                            <Text style={{color: colors.text,textAlign:'justify'}} >{place.description }</Text>
                        </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{
        width: '85%',borderRadius: 15, position:'absolute',zIndex:30
    },
    cardContainer:{
        width: '100%',height: '50%', position: 'absolute',bottom:0,borderRadius:15,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 800,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 0,
        // elevation: 23,
    }
})
