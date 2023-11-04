import { Box, Flex, Text } from "@chakra-ui/react";
import { AvatarHospital } from "@/shared/ui/avatar";
import { useGreen } from "@/shared/libs/hooks";
import { useParams } from "react-router";
import { useGetHospitalById } from "@/entities/hospital/libs/hooks/get-hospital-by-id.ts";

export const HospitalCardTitle = () => {
    const { hospitalId } = useParams();

    const avatarWrapperBG = useGreen(200, 600);

    const { data: hospital } =
        useGetHospitalById(Number(hospitalId));

    return (
        <Flex
            justify={["center", "stretch"]}
            align={["center", "flex-start"]}
            wrap={["wrap", "nowrap"]}
            p={["30px", "40px"]}
            bg={avatarWrapperBG}
        >
            <AvatarHospital />

            <Box ml={[0, "20px"]} mt={["20px", 0]}>
                <Text align={["center", "start"]} fontSize="3xl">{hospital?.name}</Text>

                <Text align={["center", "start"]}>{hospital?.description}</Text>
            </Box>
        </Flex>

    );
};