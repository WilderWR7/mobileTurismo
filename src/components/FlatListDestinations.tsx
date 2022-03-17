import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { place } from '../Screen/HomeScreen';
import { stylesApp } from '../theme/stylesGlogals';
import { CardDestinations } from './CardDestinations';
import { agency } from '../Screen/FavoriteScreen';

interface Props {
  // height: number,
  colors:{
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  },
navigation: StackNavigationProp<any, any>,
data: place[] | agency[],
// data2?: agency[] | undefined
title:string
}

export const FlatListDestinations = ({colors,navigation,title,data}:Props) => {

  return (
    <View>
      <View style={{...style.headerContainer,...stylesApp.marginHorizontal}} >
        <Text style= {{color: colors.text, fontSize: 20, fontWeight: 'bold'}} >
          {title}
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('ListHotels',data) } >
          <Text style= {{fontSize: 15,fontWeight: '600',color: colors.text}} >Ver mas</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ data}
        renderItem={({item})=> <CardDestinations place={item} colors={colors} navigation={navigation}/>}
        keyExtractor={(item,index)=>  item.name+index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{paddingBottom:10,}}
      />
    </View>
  )
}

const style = StyleSheet.create({
  headerContainer:{flexDirection: 'row', height:50, alignItems: 'center', justifyContent: 'space-between'}
})