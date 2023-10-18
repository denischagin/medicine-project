import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { headingTheme } from "./components/heading";

const overrides = {
  fonts: {
    header: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
    Heading: headingTheme
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme(overrides);
