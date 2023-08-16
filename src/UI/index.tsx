import { Nav } from '../sections/Nav'
import { styled } from 'styled-components'
import type { PropsUI } from '../Types/types.theme'

const StyledMain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: auto;
min-height: 80vh;
max-width: 1000px;
margin: auto;
padding: 30px;
gap: 50px;
overflow: hidden;
@media (max-width: 750px){
height: auto;
}
`

const UI = (props: PropsUI): JSX.Element => {
  return (
    <div
    style={{
      background: props.theme.background,
      color: props.theme.textColor,
      height: 'auto',
      minHeight: '100vh'
    }}>
        <Nav theme={props.theme} setTheme={props.setTheme}/>
        <StyledMain>
          {props.children}
        </StyledMain>
    </div>
  )
}

export { UI }
