import { HospitalReviewCardProps } from "./HospitalReviewCard.interface.ts";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { HospitalRating } from "@/shared/ui/rating/HospitalRating";
import { AvatarHospital } from "@/shared/ui/avatar";

export const HospitalReviewCard = ({ rating, title, description }: HospitalReviewCardProps) => {
  return (
    <Flex
      bg="white"
      boxShadow="0px 2px 5px 1px rgba(0, 0, 0, 0.25)"
      borderRadius="10px"
      py="20px"
      px="12px"
      alignItems="center"
    >
      <AvatarHospital size="small" />

      <Stack ml="25px" flexGrow={3}>
        <Heading fontSize="large">{title}</Heading>
        <Text>{description}</Text>
      </Stack>

      <HospitalRating size="small" rating={rating} />
    </Flex>
  );
};
