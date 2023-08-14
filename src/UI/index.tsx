import { Nav } from '../sections/Nav'
import type { PropsUI } from '../Types/types.theme'

const UI = (props: PropsUI): JSX.Element => {
  return (
    <div
    style={{
      background: props.theme.background,
      color: props.theme.textColor,
      height: '100%',
      minHeight: '100vh'
    }}>
        <Nav theme={props.theme} setTheme={props.setTheme}/>
        {props.children}
    </div>
  )
}

export { UI }
