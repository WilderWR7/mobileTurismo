
import React from 'react';

import { ThemeProvider } from './src/context/ThemeContext';
import { Navegation } from './src/navegation/Navegation';

export const App = () => {
  return (
    <AppContext>
      <Navegation/>
    </AppContext>
  )
}


const AppContext = ({children}:any)=>{
  return(
    <ThemeProvider>
      {children}
    </ThemeProvider>  
  )
}





export default App;
