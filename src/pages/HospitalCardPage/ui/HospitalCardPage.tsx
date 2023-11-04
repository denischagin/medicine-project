import { useParams } from "react-router";
import css from "./HospitalCardPage.module.scss";
import { useGetHospitalById } from "@/entities/hospital/utils/hooks/get-hospital-by-id.ts";
import { MainContainer } from "@/shared/ui/container";
import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { HospitalRating } from "@/shared/ui/rating";
import { HospitalCardReviews } from "@/widgets/HospitalCardReviews";
import { AvatarHospital } from "@/shared/ui/avatar";
import { useGreen, useWhiteBlack } from "@/shared/libs/hooks";

export const HospitalCardPage = () => {
    const { hospitalId } = useParams();

    const { data: hospital, isSuccess } = useGetHospitalById(Number(hospitalId));
    const sendCommentBG = useWhiteBlack(600);
    const greenLight = useGreen(200, 600);

    if (!isSuccess) return <Text color="tomato">Возникла ошибка</Text>;

    const { description, name, rating } = hospital;

    return (
        <section className={css.hospital_card}>
            <MainContainer>
                <div className={css.hospital_card__content}>
                    <Flex p="40px" bg={greenLight}>
                        <AvatarHospital />

                        <div className={css.hospital_card__description}>
                            <Text fontSize="3xl">{name}</Text>

                            <Text>{description}</Text>
                        </div>
                    </Flex>

                    <Flex direction="column" p="40px" pb="20px" bg={sendCommentBG}>
                        <Flex gap="35px">
                            <Textarea
                                placeholder="Оставьте свой комментарий!"
                                minHeight="120px"
                                flexGrow="2"
                                resize="none" />

                            <Flex flexGrow="1" direction="column" gap="13px" alignItems="center">
                                <Button>Отправить отзыв</Button>
                                <Button>Прикрепить фото</Button>

                                <HospitalRating rating={rating} />
                            </Flex>
                        </Flex>
                        <HospitalCardReviews></HospitalCardReviews>
                    </Flex>
                </div>
            </MainContainer>
        </section>
    );
};
