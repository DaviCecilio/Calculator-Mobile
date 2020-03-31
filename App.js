import React from 'react'
import Routes from './src/routes'
import { ThemeContextProvider } from './src/assets/core/themeProvider'

export default function App() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  )
}
