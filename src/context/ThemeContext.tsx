import React, { createContext, useEffect, useReducer } from 'react'
import { useColorScheme } from 'react-native';
import { LightTheme, ThemeProps, themeReducer } from './themeReducer';

interface ThemesProps {
    theme: ThemeProps;
    setDark: ()=> void;
    setLight:()=> void;
}

export const ThemeContext = createContext({} as ThemesProps)

export const ThemeProvider = ({children}: any) => {
    const [theme, dispatch] = useReducer(themeReducer, LightTheme)
    const colorScheme = useColorScheme()
    useEffect(() => {
        colorScheme === 'light'? setLight(): setDark()
    }, [colorScheme])
    
    
    const setDark = ()=> {
        dispatch({type: 'Dark'})
    }
    const setLight = ()=> {
        dispatch({type: 'Light'})
    }
    return (
        <ThemeContext.Provider
        value={{theme,setDark,setLight}}
        >
            {children}
        </ThemeContext.Provider>
    )
}
