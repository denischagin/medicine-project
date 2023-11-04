import { Button, Flex, Textarea } from "@chakra-ui/react";
import { HospitalRating } from "@/shared/ui/rating";
import { useParams } from "react-router";
import { useGetHospitalById } from "@/entities/hospital/libs/hooks/get-hospital-by-id.ts";

export const HospitalCardSendComment = () => {
    const { hospitalId } = useParams();

    const { data: hospital } =
        useGetHospitalById(Number(hospitalId));

    return (
        <Flex direction={["column", "row"]} gap="35px">
            <Textarea
                placeholder="Оставьте свой комментарий!"
                minHeight="120px"
                flexGrow="2"
                resize="none" />

            <Flex flexGrow="1" direction="column" gap="13px" alignItems="center">
                <Button w="100%">Отправить отзыв</Button>
                <Button w="100%">Прикрепить фото</Button>

                <HospitalRating rating={hospital?.rating ?? 0} />
            </Flex>
        </Flex>
    );
};
