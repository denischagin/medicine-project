import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const error = defineStyle({
  textAlign: "center",
  color: "red.800",
  _dark: {
    color: "red.300",
  },
});

export const textTheme = defineStyleConfig({
  variants: { error },
});
