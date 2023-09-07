import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import { paths } from "@/utlis/constants";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import burgerIcon from "./svgs/menu-burger-button.svg";

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleCloseDrawer = () => setIsOpenDrawer(false);
  const handleOpenDrawer = () => setIsOpenDrawer(true);

  return (
    <>
      <header className={css.header}>
        <h2>D-Pro</h2>

        <nav className={css.nav}>
          <ul className={css.menu}>
            <li>
              <NavLink to={paths.login}>Вход</NavLink>
            </li>

            <li>
              <NavLink to={paths.register}>Регистрация</NavLink>
            </li>
          </ul>
        </nav>

        <IconButton
          className={css.burger_button}
          aria-label="menu"
          onClick={handleOpenDrawer}
          variant="ghost"
          isRound
          _hover={{
            backgroundColor: "green",
          }}
        >
          <Image src={burgerIcon} />
        </IconButton>
      </header>

      <Drawer
        isOpen={isOpenDrawer}
        onClose={handleCloseDrawer}
        placement="left"
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Навигация</DrawerHeader>

          <DrawerBody>
            <VStack as="ul">
              <li>
                <NavLink to={paths.login} onClick={handleCloseDrawer}>
                  Авторизоваться
                </NavLink>
              </li>

              <li>
                <NavLink to={paths.register} onClick={handleCloseDrawer}>
                  Зарегистрироваться
                </NavLink>
              </li>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
