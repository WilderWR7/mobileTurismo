import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { place } from '../Screen/HomeScreen'
import { stylesApp } from '../theme/stylesGlogals'
interface Props {
    place: place,
    width:number
}

export const ImageCarrusel = ({place,width}:Props) => {
    return (
        <View style={styles.slide} key= {place.img} >
            <Image
                source={{ uri: `${place.img}` }}
                style= {{width: '100%', height: '100%', alignItems: 'center', borderBottomRightRadius: 50}}
            />
            <View style= {{...styles.slideDescription, justifyContent: 'center', flexDirection: 'row'}} >
                <View style={{...stylesApp.marginHorizontal,justifyContent: 'space-between',flexDirection: 'row', alignItems: 'center',width:width-40}}>
                    <View>
                        <Text style= {{fontSize: 25,color: 'black', fontWeight: 'bold'}} >{place.name}</Text>
                        <View style= {{flexDirection: 'row'}} >
                            <Icon
                                name= 'location-sharp'
                                size={23}
                                style= {{color:'#BBB6B6'}}
                            />
                            <Text style= {{fontSize: 17, marginTop: 2, color: '#7C7C7C'}} >
                                {place.location}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Icon
                            name='heart-outline'
                            size={35}
                            style= {{color: 'white'}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    slide: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideDescription: {
        height: 90,
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.62)',
        position: 'absolute',
        bottom: 0,
        borderBottomRightRadius:50,
        borderTopLeftRadius: 25,
    }
})