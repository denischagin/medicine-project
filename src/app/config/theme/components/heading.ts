import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

export const headingTheme = defineStyleConfig({
  defaultProps: {
    size: "big",
    variant: "common",
  },
  sizes: {
    big: {
      fontSize: ["40px", "54px"],
      fontWeight: "bold",
    },
  },
  variants: {
    common: {
      color: "blackAlpha.800",
      _dark: {
        color: "whiteAlpha.800",
      },
    },
  },
});
