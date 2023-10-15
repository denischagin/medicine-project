import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// variants
const greenPrimary = defineStyle({
  bg: "green.900",
  color: "white",
  w: "230px",
  borderRadius: "md",
  _hover: {
    bg: "green.800",
  },
});

const iconButton = defineStyle({
  borderRadius: "lg",
  _hover: {
    bg: "blackAlpha.50",
  },
});

const whitePrimary = defineStyle({
  bg: "whiteAlpha.900",
  color: "blackAlpha.700",
  borderRadius: "sm",
  _hover: {
    bg: "whiteAlpha.800",
  },
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  fontSize: "xl",
  fontWeight: "bold",
});

export const buttonTheme = defineStyleConfig({
  variants: { greenPrimary, iconButton, whitePrimary },
});
