import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  border: "2px solid",
  fontWeight: "bold",
  borderColor: "blackAlpha.500",
  borderRadius: "10px",
  color: "green.900",
  _focus: {
    borderColor: "green.700"
  },
  _hover: {
    borderColor: "green.700"
  },
  _placeholder: {
    color: "gray.400"
  }
});

export const textareaTheme = defineStyleConfig({
  variants: { outline },
  defaultProps: {
    variant: "outline"
  }
});