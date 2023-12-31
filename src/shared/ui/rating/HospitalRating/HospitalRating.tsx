import { Box, Tooltip } from "@chakra-ui/react";
import { HospitalRatingProps } from "./HospitalRating.interface";
import css from "./HospitalRating.module.scss";
import classNames from "classnames";

export const HospitalRating = ({ rating, size = "large" }: HospitalRatingProps) => {
    const calculateRatingItemWidth = (countItem: number) =>
        rating >= countItem ? "100%" : `${(rating - countItem + 1) * 100}%`;

    const ratingItemClassname = classNames(css.rating__item, css["size__" + size]);

    return (
        <Tooltip label={rating.toFixed(1)}>
            <div className={css.rating}>
                <span className={ratingItemClassname}>
                    <Box
                        as="span"
                        className={css.rating__content}
                        w={calculateRatingItemWidth(1)}
                    />
                </span>

                <span className={ratingItemClassname}>
                    <Box
                        as="span"
                        className={css.rating__content}
                        w={calculateRatingItemWidth(2)}
                    />
                </span>

                <span className={ratingItemClassname}>
                    <Box
                        as="span"
                        className={css.rating__content}
                        w={calculateRatingItemWidth(3)}
                    />
                </span>

                <span className={ratingItemClassname}>
                    <Box
                        as="span"
                        className={css.rating__content}
                        w={calculateRatingItemWidth(4)}
                    />
                </span>

                <span className={ratingItemClassname}>
                    <Box
                        as="span"
                        className={css.rating__content}
                        w={calculateRatingItemWidth(5)}
                    />
                </span>
            </div>
        </Tooltip>
    );
};
