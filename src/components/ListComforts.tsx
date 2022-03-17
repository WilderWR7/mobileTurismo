import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'
import { stylesApp } from '../theme/stylesGlogals'
import { dataAgency } from '../Screen/TourismAgencyScreen';

interface Props {
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    },
    description:string
    
}

export const ListComforts = ({colors,description}:Props) => {
    return (
        <View>
            <Text style={{...style.title, color: colors.text, marginVertical: 10,...stylesApp.marginHorizontal }} >{description}</Text>
            <FlatList
            data={dataAgency}
            style={{...stylesApp.marginHorizontal}}
            renderItem={({item})=>(
                <View style={style.containerIcon} >
                    <View style={{...style.iconContainer,backgroundColor: item.color1}} >
                        <Icon name={item.name} size={35} color={'#FDFBFB'} />
                    </View>
                    <Text style={{textAlign: 'center',marginTop:5,color: colors.text}} >{item.type}</Text>
                </View>
            )}
            keyExtractor={({name})=> name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    containerIcon:{
        width: 60,
        marginRight:15
    },
    iconContainer: {
        width: 60,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})