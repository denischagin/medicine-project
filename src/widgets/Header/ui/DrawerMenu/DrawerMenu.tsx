import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { DrawerMenuProps } from "./DrawerMenu.interface";
import { menuLinks } from "../../constants";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { ToggleModeButton } from "@/shared/ui/button/ToggleModeButton/ToggleModeButton";

export const DrawerMenu = (props: DrawerMenuProps) => {
  const { onClose } = props;
  return (
    <Drawer placement="left" {...props}>
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="3px">Навигация</DrawerHeader>

        <DrawerBody>
          <Flex direction="column" justifyContent="space-between" h="100%" pb="4">
            <VStack as="ul" alignItems="start" spacing={2}>
              {menuLinks.map(({ path, title }) => (
                <Fragment key={path}>
                  <li>
                    <NavLink to={path} onClick={onClose}>
                      {title}
                    </NavLink>
                  </li>
                  <Divider />
                </Fragment>
              ))}
            </VStack>

            <Flex alignItems="center" justifyContent="end" mt="4" gap="2">
              <Text>Поменять тему</Text>
              <ToggleModeButton />
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
