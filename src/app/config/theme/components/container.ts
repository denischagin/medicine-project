import { defineStyleConfig } from "@chakra-ui/react";

const main = {
    maxW: "1500px"
};

export const containerTheme = defineStyleConfig({
    sizes: { main },
    defaultProps: { size: "main" }
});