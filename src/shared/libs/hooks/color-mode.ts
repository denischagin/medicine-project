import { useColorModeValue } from "@chakra-ui/react";

export const useGreen = (lightColorNumber: number, darkColorNumber: number): string =>
    useColorModeValue(`green.${lightColorNumber}`, `green.${darkColorNumber}`);
export const useWhiteBlack = (blackNumber: number = 500): string =>
    useColorModeValue("white", `blackAlpha.${blackNumber}`);
