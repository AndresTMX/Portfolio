// Context
import { useContext } from 'react'
import { ThemeContext } from '../context/Theme'
// components
import { UI } from '../UI'
import { CustomContainer } from '../containers/CustomContainer'

const Home = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <UI theme={theme} setTheme={setTheme}>
      <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '1000px',
        margin: 'auto',
        padding: '30px'
      }}
      >
        <CustomContainer
         theme={theme}
         type={'aboutme'}
         title={'Andres Tejero'}
         subtitle={'Frontend Developer'}
         textLeft={''}
         textRigth={''}
         arrayIcons={['icons']}
         arrayImages={['images']}
        />
      </section>
    </UI>
  )
}

export { Home }
