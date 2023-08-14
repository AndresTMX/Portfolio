import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from './context/Theme'
import { Home } from './pages/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <ThemeProvider>
        <NextUIProvider>
        <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
      </Routes>
        </NextUIProvider>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
