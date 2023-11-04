import { HospitalRating } from "@/shared/ui/rating";
import { Box, Button } from "@chakra-ui/react";

import css from "./HospitalRatingCard.module.scss";
import { MouseEventHandler } from "react";
import { HospitalRatingCardProps } from "./HospitalRatingCard.interface";
import { useNavigate } from "react-router";
import { hospitalsCardById } from "@/shared/constants";
import { AvatarHospital } from "@/shared/ui/avatar/ui/AvatarHospital/AvatarHospital";
import { useWhiteBlack } from "@/shared/libs/hooks";

export const HospitalRatingCard = ({
    id,
    name,
    rating,
    address: description
}: HospitalRatingCardProps) => {
    const navigate = useNavigate();
    const hospitalCardBg = useWhiteBlack();

    const handleShowMoreInfo: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        navigate(hospitalsCardById(id));
    };

    return (
        <Box className={css.hospital_card} bg={hospitalCardBg}>
            <AvatarHospital variant="filled" />

            <div className={css.hospital_card__content}>
                <div className={css.hospital_card__title_wrapper}>
                    <h3 className={css.hospital_card__title}>{name}</h3>
                    <p className={css.hospital_card__description}>{description}</p>
                </div>

                <div className={css.hospital_card__section}>
                    <HospitalRating rating={rating} />

                    <Button onClick={handleShowMoreInfo}>Подробнее</Button>
                </div>
            </div>
        </Box>
    );
};
