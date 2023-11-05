import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { headingTheme } from "./components/heading";
import { textTheme } from "./components/text";
import { textareaTheme } from "./components/textarea.ts";
import { selectTheme } from "./components/select.ts";
import { containerTheme } from "./components/container.ts";

const overrides = {
    fonts: {
        header: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`
    },
    components: {
        Input: inputTheme,
        Button: buttonTheme,
        Heading: headingTheme,
        Text: textTheme,
        Textarea: textareaTheme,
        Select: selectTheme,
        Container: containerTheme
    },
    initialColorMode: "light",
    useSystemColorMode: false
};

export default extendTheme(overrides);
