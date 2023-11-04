import { NavLink } from "react-router-dom";
import {
    Text,
    IconButton,
    Image,
    Flex,
    Heading,
    HStack,
    Box
} from "@chakra-ui/react";
import { useState } from "react";
import burgerIcon from "@/widgets/Header/assets/svg/menu-burger-button.svg";
import { DrawerMenu } from "../DrawerMenu";
import { menuLinks } from "../../constants";
import { ToggleModeButton } from "@/shared/ui/button/ToggleModeButton/ToggleModeButton";
import { useGreen } from "@/shared/libs/hooks";

export const Header = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const headerBg = useGreen(500, 700);

    const handleCloseDrawer = () => setIsOpenDrawer(false);
    const handleOpenDrawer = () => setIsOpenDrawer(true);

    return (
        <>
            <Flex
                as="header"
                justifyContent="space-between"
                alignItems="center"
                py={["2px", "3px"]}
                px="26px"
                flexDirection={["row-reverse", null, null, "row"]}
                bg={headerBg}
            >
                <Heading color="white">D-Pro</Heading>

                <Box as="nav" display={["none", null, null, "block"]}>
                    <HStack as="ul" spacing={5}>
                        {menuLinks.map(({ path, title }) => (
                            <Text key={title} color="white" fontSize="xl" as="li">
                                <NavLink to={path}>{title}</NavLink>
                            </Text>
                        ))}

                        <ToggleModeButton />
                    </HStack>
                </Box>

                <IconButton
                    aria-label="menu"
                    onClick={handleOpenDrawer}
                    variant="icon"
                    display={["inline-block", null, null, "none"]}
                    w="40px"
                >
                    <Image src={burgerIcon} />
                </IconButton>
            </Flex>

            <DrawerMenu isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
        </>
    );
};
