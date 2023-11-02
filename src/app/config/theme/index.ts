import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { headingTheme } from "./components/heading";
import { textTheme } from "./components/text";
import { textareaTheme } from "@/app/config/theme/components/textarea.ts";

const overrides = {
  fonts: {
    header: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Input: inputTheme,
    Button: buttonTheme,
    Heading: headingTheme,
    Text: textTheme,
    Textarea: textareaTheme,
  },
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme(overrides);
