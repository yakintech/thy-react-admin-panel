import React, { useContext, useEffect } from 'react'
import Pages from './pages'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Input, colors } from '@mui/material'
import { SettingsContext, SettingsContextType } from './context/SettingsContext';
import { useDispatch } from 'react-redux';
import { loadCart } from './store/CartSlice';
import { useScrollToTop } from './hooks/useScrollToTop';

function App() {

  useScrollToTop()

  const {settings} = useContext(SettingsContext) as SettingsContextType

  const theme = createTheme({
    palette: {
      primary: {
        main: settings.primaryColor || colors.blue[500]
      }
    },
    direction: settings.direction
  })

  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(loadCart())
  }, [])
  
  return <>
      <ThemeProvider
        theme={theme}
      >
        <Pages />
      </ThemeProvider>
  </>
}

export default App