export interface Theme {
  name: string
  boxTheme: string
  link: string
  background: string
  textColor: string
  btnPrimaryColor: string
  btnSecondaryColor: string
}

export interface ContextValue {
  theme: Theme
  setTheme: SetTheme
}

export interface PropsUI {
  children: JSX.Element
  theme: Theme
  setTheme: SetTheme
}

export type SetTheme = () => void

export type HookReturnValue = [Theme, SetTheme]

export type ArrayStrings = string[]

export interface PropsCustomContainer {
  theme: Theme
  type: string
  title: string
  subtitle: string
  textLeft: string
  textRigth: string
  arrayIcons: ArrayStrings
  arrayImages: ArrayStrings
}
