import React, { useContext } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Cards } from '../components/Cards';
import { ListCards } from '../components/ListCards';
import { ThemeContext } from '../context/ThemeContext';
import { hotels } from './FavoriteScreen';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity  onPress={() => {}}>
        <Text style={{color: 'white'}}>About</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity  onPress={() => {}}>
        <Text style={{color: 'white'}}>Me</Text>
      </TouchableOpacity> */}
    </View>
  </View>
);

// const renderContent = (colors:any) => {
//   return (
    
//   );
// };

const title = () => {
  return (
    // <View>
      <Text style={{color: 'white', fontSize: 25}}>Parallax Header</Text>
    // </View>
  );
};

export const CartScreen = () => {
    const {theme:{colors}} = useContext(ThemeContext)

  return (
    <>
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={SCREEN_HEIGHT/2-50}
        extraScrollHeight={20}
        navbarColor="black"
        titleStyle={styles.titleStyle}
        title={title()}
        backgroundImage={{ uri: 'https://www.iucn.org/sites/dev/files/content/images/2020/efrenreyes_-_lago_titicaca.jpg' }}
        backgroundImageScale={1.2}
        // renderNavBar={renderNavBar}
            
        renderContent={ ()=>{
            return(
                <View>
                    {
                        hotels.map((value,index)=>{
                            return(
                                <Cards key={value.img+index} object={value} color={colors} />
                            )
                        })
                    }
                </View>
            )
        } }
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
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
