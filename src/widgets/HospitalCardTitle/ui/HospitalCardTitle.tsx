import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { AvatarHospital } from "@/shared/ui/avatar";
import { useGreen } from "@/shared/libs/hooks";
import { useParams } from "react-router";
import { useGetHospitalById } from "@/entities/hospital/libs";
import { useNavigate } from "react-router-dom";

export const HospitalCardTitle = () => {
    const { hospitalId } = useParams();
    const navigate = useNavigate();

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

            <Stack ml={[0, "20px"]} mt={["20px", 0]}>
                <Text align={["center", "start"]} fontSize="3xl">{hospital?.name}</Text>

                <Text align={["center", "start"]}>{hospital?.description}</Text>

                <Button
                    w="fit-content"
                    size="sm"
                    mt="20px"
                    onClick={() => navigate(-1)}
                >
                    Вернуться к списку
                </Button>
            </Stack>
        </Flex>

    );
};