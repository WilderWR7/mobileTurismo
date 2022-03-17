import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { stylesApp } from '../theme/stylesGlogals'

interface Props {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    width: number
}

export const Footer = ({colors,width}:Props) => {
  return (
    <View style={{...stylesApp.marginHorizontal,backgroundColor: colors.background,...style.footer,width:width-40,}} >
        <View style={{width: '50%',flexDirection: 'row'}} >
            <Text style={{color: colors.primary,...style.txtPrecio}} >Bs. 200</Text>
            <Text style={{...style.txtDate}} >/noche</Text>
        </View>
        <TouchableOpacity style={{...style.btn,backgroundColor: colors.primary}} activeOpacity={0.8} >
            <Text style={style.btnText} >Reservar</Text>
        </TouchableOpacity>
    </View>
  )
}


const style = StyleSheet.create({
    btn:{
        flex:1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 13
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    txtPrecio:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    txtDate: {
        color: '#9E9EA7',
        fontSize: 20,
        top:10
    },
    footer: {
        flexDirection: 'row', height:40,bottom:0,position: 'absolute'
    }
})
