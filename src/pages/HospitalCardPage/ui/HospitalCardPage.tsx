import { useParams } from "react-router";
import css from "./HospitalCardPage.module.scss";
import { useGetHospitalById } from "@/entities/hospital/libs";
import { Container, Flex, Text } from "@chakra-ui/react";
import { HospitalCardReviews } from "@/widgets/HospitalCardReviews";
import { useWhiteBlack } from "@/shared/libs/hooks";
import { HospitalCardTitle } from "@/widgets/HospitalCardTitle";
import { HospitalCardSendComment } from "@/widgets/HospitalCardSendComment";
import { ProgressLoader } from "@/shared/ui/loader";

export const HospitalCardPage = () => {
    const { hospitalId } = useParams();

    const { isError, isLoading } =
        useGetHospitalById(Number(hospitalId));

    const sendCommentBG = useWhiteBlack(600);

    if (isError) return <Text color="tomato">Возникла ошибка</Text>;
    if (isLoading) return <ProgressLoader />;

    return (
        <section className={css.hospital_card}>
            <Container>
                <div className={css.hospital_card__content}>
                    <HospitalCardTitle />

                    <Flex direction="column" p="20px" bg={sendCommentBG}>
                        <HospitalCardSendComment />
                        <HospitalCardReviews />
                    </Flex>
                </div>
            </Container>
        </section>
    );
};
