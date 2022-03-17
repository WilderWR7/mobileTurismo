import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Cards } from '../components/Cards';
import { ThemeContext } from '../context/ThemeContext';
import { PropsStack } from '../navegation/StackNavegation';
import { hotels } from './FavoriteScreen';

import { InformationBar } from '../components/InformationBar';
import { ButtomBack } from '../components/ButtomBack';
interface Props extends StackScreenProps<PropsStack,'PlaceScreen'>{}

const {height: SCREEN_HEIGHT,width} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;




export const PlaceScreen = ({route,navigation}:Props) => {
    const {theme:{colors}} = useContext(ThemeContext)
    const place = route.params;
  return (
    <>
      {/* <ButtomBack/> */}
      <ReactNativeParallaxHeader
        headerMinHeight={90}
        headerMaxHeight={SCREEN_HEIGHT/2}
        extraScrollHeight={20}
        navbarColor={colors.primary}
        titleStyle={styles.titleStyle}
        
        title={
          <InformationBar location={place.location} name= {place.name} width= {width} />
        }
        backgroundImage={{ uri: 'https://www.iucn.org/sites/dev/files/content/images/2020/efrenreyes_-_lago_titicaca.jpg' }}
        backgroundImageScale={1.2}
        renderContent={ ()=>{
          return(
            <View>
              {
                hotels.map((value,index)=>{
                  return(
                    <Cards key={value.img+index} object={value} color={colors} navigation={navigation} />
                  )
                })
              }
            </View>
          )
        } }
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        // scrollViewProps={{
        // onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
        // onScrollEndDrag: () => console.log('onScrollEndDrag'),
        // }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    position:'absolute',
    bottom:0
  },

});
