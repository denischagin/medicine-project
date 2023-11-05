import { Box } from "@chakra-ui/react";
import { ChooseCityItemProps } from "@/widgets/HospitalsFilterSection/ui/ChooseCityItem/ChooseCityItem.interface.ts";

export const ChooseCityItem = ({ isActive, ...restProps }: ChooseCityItemProps) => {
    return (
        <Box
            as="p"
            p="10px"
            cursor="pointer"
            bg={isActive ? "green.100" : "white"}
            _hover={{
                bg: "green.100"
            }}
            {...restProps}
        />
    );
};