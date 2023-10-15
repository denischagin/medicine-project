import { NavLink } from "react-router-dom";
import { paths } from "@/shared/constants";
import {
  Text,
  IconButton,
  Image,
  Flex,
  Heading,
  HStack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import burgerIcon from "@/widgets/Header/assets/svg/menu-burger-button.svg";
import { DrawerMenu } from "../DrawerMenu";

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleCloseDrawer = () => setIsOpenDrawer(false);
  const handleOpenDrawer = () => setIsOpenDrawer(true);

  return (
    <>
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="center"
        py={["2px", "10px"]}
        px="26px"
        flexDirection={["row-reverse", "row"]}
        bg="green.600"
      >
        <Heading color="white">D-Pro</Heading>

        <Box as="nav" display={["none", "block"]}>
          <HStack as="ul" spacing={5}>
            <Text color="white" fontSize="xl" as="li">
              <NavLink to={paths.login}>Вход</NavLink>
            </Text>

            <Text color="white" fontSize="xl" as="li">
              <NavLink to={paths.register}>Регистрация</NavLink>
            </Text>
          </HStack>
        </Box>

        <IconButton
          aria-label="menu"
          onClick={handleOpenDrawer}
          variant="iconButton"
          display={["inline-block", "none"]}
        >
          <Image src={burgerIcon} />
        </IconButton>
      </Flex>

      <DrawerMenu isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
    </>
  );
};
