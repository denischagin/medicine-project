import { Box } from "@chakra-ui/react";
import { HospitalRatingProps } from "./HospitalRating.interface";
import css from "./HospitalRating.module.scss";

export const HospitalRating = ({ rating }: HospitalRatingProps) => {
  const calculateRatingItemWidth = (countItem: number) =>
    rating >= countItem ? "100%" : `${(rating - countItem + 1) * 100}%`;

  return (
    <div className={css.rating}>
      <span className={css.rating__item}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(1)}
        ></Box>
      </span>

      <span className={css.rating__item}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(2)}
        ></Box>
      </span>

      <span className={css.rating__item}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(3)}
        ></Box>
      </span>

      <span className={css.rating__item}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(4)}
        ></Box>
      </span>

      <span className={css.rating__item}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(5)}
        ></Box>
      </span>
    </div>
  );
};
