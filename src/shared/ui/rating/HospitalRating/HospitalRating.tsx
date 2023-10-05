import { Image } from '@chakra-ui/react'
import star from '../assets/star.svg'
import { HospitalRatingProps } from './HospitalRating.interface'
import css from './HospitalRating.module.scss'

export const HospitalRating = ({ rating }: HospitalRatingProps) => {
  return (
    <div className={css.rating}>
      <span className={css.rating__item}>
        <Image src={star} />
      </span>

      <span className={css.rating__item}>
        <Image src={star} />
      </span>

      <span className={css.rating__item}>
        <Image src={star} />
      </span>

      <span className={css.rating__item}>
        <Image src={star} />
      </span>

      <span className={css.rating__item}>
        <Image src={star} />
      </span>
    </div>
  )
}
