import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { stylesApp } from '../theme/stylesGlogals'
import  Icon  from 'react-native-vector-icons/Ionicons';

interface Props {
    top: number
}


export const HeaderHome = ({top}:Props) => {
  return (
    <View style= {{position: 'absolute', zIndex: 2, width: '100%'}} >
    <Text
        style= {{
            marginTop: top+10,...styles.header
        }}
    >
    Donde quieres ir?
    </Text>
    <View style= {{...stylesApp.marginHorizontal,marginTop: 15}} >
        <View style= {styles.inputContainer} >
            <Icon
                name='search-sharp'
                size={32}
                style= {styles.iconStyle}
            />
            <TextInput
                style= {styles.inputStyle}
                placeholder= 'Buscar Destino'
                placeholderTextColor={'#DCD8D8'}
                autoCorrect= {false}
            />
        </View>
    </View>
</View>
  )
}
const styles = StyleSheet.create({
    slide: {
        width: '100%',
        height: 446,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },
    iconStyle: {
        marginLeft: 14,
        color: '#DCD8D8'
    },
    inputStyle: {
        flex: 1,
        fontSize: 20,
        color: 'red'
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