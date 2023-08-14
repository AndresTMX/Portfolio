import { createContext, useState } from 'react'
import type { Theme, ContextValue, SetTheme, PropsUI } from '../../Types/types.theme'

const ligthTheme: Theme = {
  name: 'light',
  link: 'text-black',
  boxTheme: 'bg-white text-black',
  background: '#D9D9D9',
  textColor: 'black',
  btnPrimaryColor: 'primary',
  btnSecondaryColor: 'bg-blue-700 text-white'
}

const darkTheme: Theme = {
  name: 'dark',
  link: 'text-white',
  boxTheme: 'bg-black text-default-400',
  background: '#18181B',
  textColor: 'white',
  btnPrimaryColor: 'secondary',
  btnSecondaryColor: 'bg-purple-800 text-white'
}

const initialContext: ContextValue = {
  theme: ligthTheme,
  setTheme: () => { }
}

const ThemeContext = createContext<ContextValue>(initialContext)

const ThemeProvider = (props: PropsUI): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(ligthTheme)

  const updateTheme: SetTheme = () => {
    if (theme.name === 'light') {
      setTheme(darkTheme)
    } else {
      setTheme(ligthTheme)
    }
  }

  const contextValue: ContextValue = {
    theme,
    setTheme: updateTheme
  }
  return <ThemeContext.Provider value={contextValue}>
    {props.children}
  </ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext }
