import { useParams } from "react-router";
import css from "./HospitalCardPage.module.scss";
import { useGetHospitalById } from "@/entities/hospital/libs/hooks/get-hospital-by-id.ts";
import { MainContainer } from "@/shared/ui/container";
import { Flex, Text } from "@chakra-ui/react";
import { HospitalCardReviews } from "@/widgets/HospitalCardReviews";
import { useWhiteBlack } from "@/shared/libs/hooks";
import { HospitalCardTitle } from "@/widgets/HospitalCardTitle";
import { HospitalCardSendComment } from "@/widgets/HospitalCardSendComment";

export const HospitalCardPage = () => {
    const { hospitalId } = useParams();

    const { isError } =
        useGetHospitalById(Number(hospitalId));

    const sendCommentBG = useWhiteBlack(600);

    if (isError) return <Text color="tomato">Возникла ошибка</Text>;

    return (
        <section className={css.hospital_card}>
            <MainContainer>
                <div className={css.hospital_card__content}>
                    <HospitalCardTitle />

                    <Flex direction="column" p="20px" bg={sendCommentBG}>
                        <HospitalCardSendComment />
                        <HospitalCardReviews />
                    </Flex>
                </div>
            </MainContainer>
        </section>
    );
};
