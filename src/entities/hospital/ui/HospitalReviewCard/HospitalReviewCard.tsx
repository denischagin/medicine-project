import { HospitalReviewCardProps } from "./HospitalReviewCard.interface.ts";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { AvatarHospital } from "@/shared/ui/avatar/AvatarHospital";
import { HospitalRating } from "@/shared/ui/rating/HospitalRating";

export const HospitalReviewCard = ({ rating, title, description }: HospitalReviewCardProps) => {
  return (
    <Flex>
      <AvatarHospital />

      <Stack>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </Stack>

      <HospitalRating rating={rating} />
    </Flex>
  );
};
