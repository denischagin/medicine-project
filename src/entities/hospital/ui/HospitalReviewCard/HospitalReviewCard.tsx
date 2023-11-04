import { HospitalReviewCardProps } from "./HospitalReviewCard.interface.ts";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { HospitalRating } from "@/shared/ui/rating";
import { AvatarHospital } from "@/shared/ui/avatar";
import { useWhiteBlack } from "@/shared/libs/hooks";

export const HospitalReviewCard = ({ rating, title, description }: HospitalReviewCardProps) => {

    const whiteBlack = useWhiteBlack(600);
    return (
        <Flex
            bg={whiteBlack}
            boxShadow="0px 2px 5px 1px rgba(0, 0, 0, 0.25)"
            borderRadius="10px"
            py="20px"
            px="12px"
            alignItems="center"
            wrap="wrap"
            rowGap="10px"
            columnGap="25px"
        >
            <AvatarHospital size="small" />

            <Stack flexGrow={3}>
                <Heading fontSize="large">{title}</Heading>
                <Text>{description}</Text>
            </Stack>

            <HospitalRating size="small" rating={rating} />
        </Flex>
    );
};
