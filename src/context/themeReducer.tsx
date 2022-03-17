import { Theme } from "@react-navigation/native"


type ThemeAction = {type: 'Dark'}| {type: 'Light'}

export interface ThemeProps extends Theme{
    theme: 'Dark'| 'Light',
    colorTercero: string,
}

export const LightTheme:ThemeProps = {
    theme: 'Light',
    colorTercero: 'orange', 
    dark: false,
    colors: {
        primary: '#5856D6',
        background: '#E7EAEF',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: '',
    }
}

export const DarkTheme:ThemeProps = {
    theme: 'Dark',
    colorTercero: 'green',
    dark: false,
    colors: {
        primary: 'red',
        background: '#18191b',
        card: '#242527',
        text: 'white',
        border: 'black',
        notification: '',
    }
}

export const themeReducer = (state:ThemeProps, action:ThemeAction ):ThemeProps => {

    switch (action.type) {
        case 'Light':
            return {...LightTheme}
        case 'Dark':
            return {...DarkTheme}
        default:
            return {...state}
    }
}
