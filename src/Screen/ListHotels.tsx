import React, { useContext } from 'react'
import { View, Dimensions } from 'react-native';
import { CardGrid } from '../components/CardGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { stylesApp } from '../theme/stylesGlogals';
import { ThemeContext } from '../context/ThemeContext';
import { PropsStack } from '../navegation/StackNavegation';
import { StackScreenProps } from '@react-navigation/stack';

const {width} = Dimensions.get('window')
interface Props extends StackScreenProps<PropsStack,'ListHotels'>{}



export const ListHotels = ({route,navigation}:Props) => {
    const {theme:{colors}} = useContext(ThemeContext)
    const data = route.params
    const w:[{    name: string,
        img: string,
        location?: string,
        description:string}] = data 
    return (
        <ScrollView showsVerticalScrollIndicator = {false} >
            {/* <FlatList
                data={hotels}
                keyExtractor={(item,index)=> item.name+index}
                renderItem={({item})=> <CardGrid hotel={item} />}
                numColumns= {2}
            /> */}
            <View style={{flexDirection: 'row',...stylesApp.marginHorizontal}} >
                <View style={{width: (width-20*2-10)/2,marginRight:5}} >
                    {/* {
                        w.filter( (_,i)=> i%2===0 ).map((hotel,index)=> <CardGrid  key={hotel.name+index} data={hotel} colors={colors}/>)
                    } */}
                    { 
                        w.filter( (_,i)=> i%2===0 ).map((hotel,index)=> <CardGrid  key={hotel.name+index} data={hotel} colors={colors}/>)
                    }
                </View>
                <View style={{width: (width-20*2-10)/2,marginLeft: 5}} >
                    { 
                        w.filter( (_,i)=> i%2 !== 0 ).map((hotel,index)=> <CardGrid  key={hotel.name+index} data={hotel} colors={colors}/>)
                    }
                </View>
            </View>
        </ScrollView>
    )
}
