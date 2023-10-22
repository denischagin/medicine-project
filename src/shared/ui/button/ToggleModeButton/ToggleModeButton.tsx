import sun from "../assets/svg/sun-icon.svg";
import moon from "../assets/svg/moon-icon.svg";
import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export const ToggleModeButton = () => {
  const toggleColorModeIcon = useColorModeValue(sun, moon);
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      variant="secondary"
      borderRadius="50%"
      aria-label="toggle color mode"
    >
      <Image src={toggleColorModeIcon} maxW="25px" />
    </IconButton>
  );
};
