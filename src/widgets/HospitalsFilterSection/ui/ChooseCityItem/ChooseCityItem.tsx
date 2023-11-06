import { Box } from "@chakra-ui/react";
import { ChooseCityItemProps } from "@/widgets/HospitalsFilterSection/ui/ChooseCityItem/ChooseCityItem.interface.ts";
import { useGreen, useWhiteBlack } from "@/shared/libs/hooks";

export const ChooseCityItem = ({ isActive, ...restProps }: ChooseCityItemProps) => {
    const activeBG = useGreen(100, 400);
    const inactiveBG = useWhiteBlack(500);

    return (
        <Box
            as="p"
            p="10px"
            cursor="pointer"
            bg={isActive ? activeBG : inactiveBG}
            _hover={{
                bg: activeBG
            }}
            {...restProps}
        />
    );
};