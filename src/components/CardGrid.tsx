import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { hotel, agency } from '../Screen/FavoriteScreen';
import { place } from '../Screen/HomeScreen';

interface Props {
    data: agency|place
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    }
}


export const CardGrid = ({data,colors}:Props) => {
    const heigth=  Math.random() * (3 - 2.5) + 2.5
    return (
        <TouchableOpacity activeOpacity={0.7}   >
            <View style={{aspectRatio: 2/heigth,marginBottom: 8,width: '100%',borderRadius: 20, backgroundColor:colors.card,overflow: 'hidden' }} >
                <Image
                    source={{uri: `${data.img}`}}
                    style={{width: '100%',height: '80%',overflow: 'hidden'}}
                />
                <View style={{height:'20%',justifyContent: 'center'}} >
                    <Text style= {{marginLeft: 8, fontSize: 18,fontWeight: 'bold'}} >{data.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
