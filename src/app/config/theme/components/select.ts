import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(selectAnatomy.keys);

const filledCustom = definePartsStyle({
    field: {
        bg: "green.200",
        " > option": {
            bg: "green.100",
            outline: "none",
            borderRadius: "40px",
            _dark: {
                bg: "blackAlpha.600"
            }
        },
        _dark: {
            bg: "blackAlpha.900"
        }
    },
    icon: {
        color: "green.600",
        _dark: {
            color: "white"
        }
    }
});

export const selectTheme = defineMultiStyleConfig({
    defaultProps: { variant: "filled-custom" },
    variants: { "filled-custom": filledCustom }
});