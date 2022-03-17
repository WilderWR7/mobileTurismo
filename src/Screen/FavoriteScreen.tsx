import React, { useContext } from 'react'
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Cards } from '../components/Cards';
import { ListCards } from '../components/ListCards';
import { ThemeContext } from '../context/ThemeContext';
import { stylesApp } from '../theme/stylesGlogals';


export interface hotel {
  img:string, 
  name:string,
  ubication:string,
  qualification:string,
  type: 'HotelScreen'
}

export interface agency {
  img:string, 
  name:string,
  ubication:string,
  qualification:string,
  type: 'TourismAgencyScreen',
  description: string
}

export interface Object {
  object: hotel| agency
}
export const hotels:hotel[] = [
  {
    img: 'http://www.hotelpresidente.com.bo/images/hotel-presidente.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'
  },
  {
    img: 'data:image/png;base64,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',
    name:'Casa Grande',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'

  },
  {
    img: 'https://seekvectorlogo.com/wp-content/uploads/2018/01/rixos-hotels-vector-logo.png',
    name:'Hotel Europa',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'

  },
  {
    img: 'http://www.hotelpresidente.com.bo/images/hotel-presidente.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'
  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/02/e2/4b/48/gran-hotel-la-paz-spa.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'
  }
  ,
  {
    img: 'data:image/jpeg;base64,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',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'
  }
  ,
  {
    img: 'http://www.hotelpresidente.com.bo/images/hotel-presidente.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'HotelScreen'
  }
]

export const agencies:agency[] = [
  {
    img: 'data:image/png;base64,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',
    name:'Casa Grande',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw',
    type: 'TourismAgencyScreen'

  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/14/77/26/34/logotipo.jpg',
    name:'Tour Operator',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'

  },
  {
    img: 'http://boliviaesturismo.com/wp-content/uploads/2016/02/cocatravels.jpg',
    name:'Coca Travels',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'


  },
  {
    img: 'https://www.caserita.com/productos/images/La_PAz/terraandina.jpg',
    name:'Terra Andina Bolivia',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'

  },
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/02/e2/4b/48/gran-hotel-la-paz-spa.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'

  }
  ,
  {
    img: 'data:image/jpeg;base64,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',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'

  }
  ,
  {
    img: 'http://www.hotelpresidente.com.bo/images/hotel-presidente.jpg',
    name:'Hotel Presidente',
    ubication: 'La Paz Bolivia',
    qualification: '4.5',
    type: 'TourismAgencyScreen',
    description:'Lorem ipsum dolor sit amet, conetur adipiscing elit asd amrw'

  }
]


export const FavoriteScreen = () => {
  const {theme:{colors}} = useContext(ThemeContext)
  return (
    <ListCards size={28} title={'Favoritos'} object={hotels} colors= {colors}   />
  )
}