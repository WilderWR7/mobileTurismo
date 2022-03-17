import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons'
import { stylesApp } from '../theme/stylesGlogals';

interface Props {
  name: string,
  location: string,
  width: number
}

export const InformationBar = ({name,location,width}:Props) => {
  return (
  <View style= {{...styles.slideDescription, justifyContent: 'center', flexDirection: 'row'}} >
    <View style={{...stylesApp.marginHorizontal,justifyContent: 'space-between',flexDirection: 'row', alignItems: 'center',width:width-40}}>
      <View>
        <Text style= {{fontSize: 25,color: 'black', fontWeight: 'bold'}} >{name}</Text>
        <View style= {{flexDirection: 'row'}} >
          <Icon
            name= 'location-sharp'
            size={23}
            style= {{color:'#BBB6B6'}}
          />
          <Text style= {{fontSize: 17, marginTop: 2, color: '#7C7C7C'}} >{location}</Text>
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
  )
}


const styles = StyleSheet.create({
  slideDescription: {
    height: 90,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.62)',
    position: 'absolute',
    bottom: 0,
}
})