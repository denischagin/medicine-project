import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";

const overrides = {
    fonts: {
        header: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
    },
    components: {
        Input: inputTheme,
        Button: buttonTheme, 
    } 
}

export default extendTheme(overrides)