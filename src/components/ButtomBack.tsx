import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { stylesApp } from '../theme/stylesGlogals';
import { useNavigation } from '@react-navigation/native';


export const ButtomBack = () => {
    const navigation=useNavigation()
    return (
    <View style={{...stylesApp.marginHorizontal,...style.btn}} >
        <TouchableOpacity onPress={()=> navigation.goBack()} >
            <Icon name="arrow-back-outline" size={30} color='white' />
        </TouchableOpacity>
    </View>
)
}
const style = StyleSheet.create({
    btn:{
        position: 'absolute',
        top: 15,
        left:0,
        zIndex:999
    }
})