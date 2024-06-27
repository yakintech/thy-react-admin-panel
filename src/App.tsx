import React, { useContext } from 'react'
import Pages from './pages'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Input, colors } from '@mui/material'
import { SettingsContext, SettingsContextType } from './context/SettingsContext';

function App() {

  const {settings} = useContext(SettingsContext) as SettingsContextType

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.purple[500]
      }
    },
    direction: settings.direction
  })
  return <>
    
      <ThemeProvider
        theme={theme}
      >
        <Pages />
      </ThemeProvider>
  </>
}

export default App