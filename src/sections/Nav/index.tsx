import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, Switch } from '@nextui-org/react'
import type { ContextValue } from '../../Types/types.theme'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const Nav = ({ theme, setTheme }: ContextValue): JSX.Element => {
  const [menu, setMenu] = useState(false)
  const menuItems = ['Sobre mi', 'Experiencia', 'Tecnologias', 'Educacion']
  return (
     <Navbar
     className={theme.boxTheme}
     onMenuOpenChange={setMenu}>
        <NavbarMenuToggle
        aria-label={menu ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
        />
        <NavbarBrand>
        <p className="font-extrabold text-inherit">AT</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex">
               {menuItems.map((item) => (
                <NavbarItem
                key={item}
                >
                  <Link
                  className={theme.link}
                  href="#"
                  >{item}</Link>
                </NavbarItem>
               ))}
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item) => (
                    <NavbarItem
                    key={item}
                    >
                    <Link
                     className={`w-full ${theme.link}`}
                     href="#"
                     size="lg"
                    >{item}</Link>
                </NavbarItem>
                ))}
            </NavbarMenu>
            <NavbarContent>
            <NavbarItem>
                    <Switch
                    size='sm'
                    color='default'
                    startContent={<BsFillSunFill/>}
                    endContent={<BsFillMoonFill/>}
                    onClick={() => { setTheme() } }
                    >
                    </Switch>
                </NavbarItem>

                <NavbarItem>
                <Button
                size='sm'
                variant='solid'
                className={ theme.btnSecondaryColor }
                >
                        Idioma
                    </Button>
                </NavbarItem>
            </NavbarContent>
     </Navbar>
  )
}

export { Nav }
