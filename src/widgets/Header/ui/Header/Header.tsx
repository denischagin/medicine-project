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
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import burgerIcon from "@/widgets/Header/assets/svg/menu-burger-button.svg";
import { DrawerMenu } from "../DrawerMenu";

export const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { toggleColorMode, colorMode } = useColorMode();
  const headerBg = useColorModeValue("green.500", "green.700");

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
        bg={headerBg}
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

            <Button onClick={toggleColorMode}>
              Поменять тему на {colorMode === "light" ? "темную" : "светлую"}
            </Button>
          </HStack>
        </Box>

        <IconButton
          aria-label="menu"
          onClick={handleOpenDrawer}
          variant="icon"
          display={["inline-block", "none"]}
        >
          <Image src={burgerIcon} />
        </IconButton>
      </Flex>

      <DrawerMenu isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
    </>
  );
};
