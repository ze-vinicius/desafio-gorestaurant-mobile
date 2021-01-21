import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { View, StatusBar } from 'react-native'

import Routes from './routes'

import ThemeSwitcher from './components/ThemeSwitcher'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
        <ThemeSwitcher toggleTheme={toggleTheme} />
      </View>
    </ThemeProvider>
  )
}

export default App
