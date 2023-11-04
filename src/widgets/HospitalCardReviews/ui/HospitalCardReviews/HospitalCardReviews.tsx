import { Stack } from "@chakra-ui/react";
import { HospitalReviewCard } from "@/entities/hospital";

export const HospitalCardReviews = () => {

    return (
        <Stack mt="40px">
            <HospitalReviewCard
                title="Привет"
                description="как дела"
                rating={4.3} />
        </Stack>
    );
};
