import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { FlatList, Text } from 'react-native'
import { PropsStack } from '../navegation/StackNavegation';
import { agency, hotel } from '../Screen/FavoriteScreen';
import { stylesApp } from '../theme/stylesGlogals';
import { Cards } from './Cards';

interface Props {
    object:hotel[]|agency[],
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    title: string,
    size: number,
    navigation:StackNavigationProp<PropsStack, "PlaceScreen">
}

export const ListCards = ({object,colors,title,size,navigation}:Props) => {
    return (
    <FlatList
        data={object}
        renderItem= {({item})=> <Cards object={item} color={colors} navigation={navigation} />  }
        keyExtractor={(item,index)=>item.name+index}
        ListHeaderComponent={<Text style={{...stylesApp.marginHorizontal, marginVertical:5, fontSize:size, fontWeight: 'bold'}} >{title}</Text>}
    />
    )
}
