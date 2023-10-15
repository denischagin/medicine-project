import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react'
import { DrawerMenuProps } from './DrawerMenu.interface'
import { menuLinks } from '../../constants'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export const DrawerMenu = (props: DrawerMenuProps) => {
  const { onClose } = props
  return (
    <Drawer
      placement="left"
      {...props}
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="3px">Навигация</DrawerHeader>

        <DrawerBody>
          <VStack
            as="ul"
            alignItems="start"
            spacing={2}
          >
            {menuLinks.map(({ path, title }) => (
              <Fragment key={path}>
                <li>
                  <NavLink
                    to={path}
                    onClick={onClose}
                  >
                    {title}
                  </NavLink>
                </li>
                <Divider />
              </Fragment>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
