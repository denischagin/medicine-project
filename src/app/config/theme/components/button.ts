import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// sizes
const small = defineStyle({
  py: "5px",
  px: "10px",
  minW: "100px",
  fontSize: "lg",
});

const medium = defineStyle({
  py: "10px",
  px: "20px",
  minW: "200px",
  fontSize: "xl",
});

const large = defineStyle({
  py: "15px",
  px: "25px",
  minW: "250px",
  fontSize: "2xl",
});

// variants
const primary = defineStyle({
  bg: "green.900",
  color: "white",
  borderRadius: "md",
  _hover: {
    bg: "green.800",
  },
});

const icon = defineStyle({
  borderRadius: "lg",
  _hover: {
    bg: "blackAlpha.50",
  },
});

const secondary = defineStyle({
  bg: "whiteAlpha.900",
  color: "blackAlpha.700",
  borderRadius: "md",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  fontWeight: "500",
  _hover: {
    bg: "whiteAlpha.800",
  },
  _dark: {
    bg: "blackAlpha.400",
    color: "whiteAlpha.700",
    boxShadow: "0px 2px 2px 0px rgba(255, 255, 255, 0.1)",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { primary, icon, secondary },
  sizes: { small, large, medium },
  defaultProps: { variant: "primary" },
});
