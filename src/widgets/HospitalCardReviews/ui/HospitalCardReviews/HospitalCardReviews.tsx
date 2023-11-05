import { Stack, Text } from "@chakra-ui/react";
import { HospitalReviewCard } from "@/entities/hospital";
import { useParams } from "react-router";
import { useGetHospitalById } from "@/entities/hospital/libs";
export const HospitalCardReviews = () => {
    const { hospitalId } = useParams();

    const { data: hospital } = useGetHospitalById(Number(hospitalId));
    const reviews = hospital?.reviews;

    return (
        <Stack mt="40px">
            {reviews?.length !== 0
                ?
                hospital?.reviews.map(({
                    id, rating, title, description
                }) => (
                    <HospitalReviewCard
                        key={id}
                        title={title}
                        description={description}
                        rating={rating} />
                )) :
                <Text fontSize="4xl">У этой больницы пока еще нет отзывов</Text>}
        </Stack>
    );
};
