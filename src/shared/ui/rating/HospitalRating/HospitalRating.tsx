import { Box } from "@chakra-ui/react";
import { HospitalRatingProps } from "./HospitalRating.interface";
import css from "./HospitalRating.module.scss";
import classNames from "classnames";

export const HospitalRating = ({ rating, size = "large" }: HospitalRatingProps) => {
  const calculateRatingItemWidth = (countItem: number) =>
    rating >= countItem ? "100%" : `${(rating - countItem + 1) * 100}%`;

  const ratingItemClassname = classNames(css.rating__item, css["size__" + size]);

  return (
    <div className={css.rating}>
      <span className={ratingItemClassname}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(1)}
        ></Box>
      </span>

      <span className={ratingItemClassname}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(2)}
        ></Box>
      </span>

      <span className={ratingItemClassname}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(3)}
        ></Box>
      </span>

      <span className={ratingItemClassname}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(4)}
        ></Box>
      </span>

      <span className={ratingItemClassname}>
        <Box
          as="span"
          className={css.rating__content}
          w={calculateRatingItemWidth(5)}
        ></Box>
      </span>
    </div>
  );
};
