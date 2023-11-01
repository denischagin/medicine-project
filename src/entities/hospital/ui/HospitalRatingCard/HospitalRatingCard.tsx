import { HospitalRating } from "@/shared/ui/rating/HospitalRating";
import { Box, useColorModeValue } from "@chakra-ui/react";

import css from "./HospitalRatingCard.module.scss";
import { MouseEventHandler } from "react";
import { HospitalRatingCardProps } from "./HospitalRatingCard.interface";
import { StyledButton } from "@/shared/ui/button/StyledButton/StyledButton";
import { useNavigate } from "react-router";
import { paths } from "@/shared/constants";
import { AvatarHospital } from "@/shared/ui/avatar/AvatarHospital/AvatarHospital";

export const HospitalRatingCard = ({
  id,
  name,
  rating,
  address: description,
}: HospitalRatingCardProps) => {
  const navigate = useNavigate();
  const hospitalCardBg = useColorModeValue("white", "blackAlpha.500");

  const handleShowMoreInfo: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(paths.hospitalsCardById(id));
  };

  return (
    <Box className={css.hospital_card} bg={hospitalCardBg}>
      <AvatarHospital />

      <div className={css.hospital_card__content}>
        <div className={css.hospital_card__title_wrapper}>
          <h3 className={css.hospital_card__title}>{name}</h3>
          <p className={css.hospital_card__description}>{description}</p>
        </div>

        <div className={css.hospital_card__section}>
          <HospitalRating rating={rating} />

          <StyledButton onClick={handleShowMoreInfo}>Подробнее</StyledButton>
        </div>
      </div>
    </Box>
  );
};
