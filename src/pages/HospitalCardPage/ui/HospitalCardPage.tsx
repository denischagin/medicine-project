import { useParams } from "react-router";
import css from "./HospitalCardPage.module.scss";
import { useGetHospitalById } from "@/entities/hospital/utils/hooks/get-hospital-by-id.ts";
import { MainContainer } from "@/shared/ui/container";
import { AvatarHospital } from "@/shared/ui/avatar/AvatarHospital";
import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { HospitalRating } from "@/shared/ui/rating/HospitalRating";
import { HospitalCardReviews } from "@/widgets/HospitalCardReviews";

export const HospitalCardPage = () => {
  const { hospitalId } = useParams();

  const { data: hospital, isSuccess } = useGetHospitalById(Number(hospitalId));

  console.log(hospital);

  if (!isSuccess) return <Text color="tomato">Возникла ошибка</Text>;

  const { description, name, rating } = hospital;

  return (
    <section className={css.hospital_card}>
      <MainContainer>
        <div className={css.hospital_card__content}>
          <div className={css.hospital_card__title_wrapper}>
            <AvatarHospital />

            <div className={css.hospital_card__description}>
              <Text fontSize="3xl">{name}</Text>

              <Text>{description}</Text>
            </div>
          </div>

          <Flex p="40px" gap="35px" bg="white">
            <Textarea
              placeholder="Оставьте свой комментарий!"
              minHeight="120px"
              flexGrow="2"
              resize="none" />

            <Flex flexGrow="1" direction="column" gap="13px" alignItems="center">
              <Button>Отправить отзыв</Button>
              <Button>Прикрепить фото</Button>

              <HospitalRating size="small" rating={rating} />
            </Flex>
          </Flex>
          <HospitalCardReviews></HospitalCardReviews>
        </div>
      </MainContainer>
    </section>
  );
};
