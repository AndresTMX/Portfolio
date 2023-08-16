// Context
import { useContext, useState } from 'react'
import { ThemeContext } from '../context/Theme'
// components
import { UI } from '../UI'
import { CustomContainer } from '../containers/CustomContainer'
import { Button } from '@nextui-org/react'
// dev dependence
import { motion } from 'framer-motion'

const Home = (): JSX.Element => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [view, setView] = useState(false)
  const animate = (): any => {
    setView(!view)
  }
  return (
    <UI theme={theme} setTheme={setTheme}>
      <>
      <Button onClick={animate}>move</Button>

      {view && <motion.main
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1,
        x: [200, -100, 0]
      }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.8
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
      </motion.main>}

      </>
    </UI>
  )
}

export { Home }
