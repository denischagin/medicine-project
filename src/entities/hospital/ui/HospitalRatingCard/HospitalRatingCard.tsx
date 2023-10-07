import { HospitalRating } from '@/shared/ui/rating/HospitalRating'
import { Button, Image } from '@chakra-ui/react'
import defaultHospital from '@/entities/hospital/assets/img/default-hospital.png'
import css from './HospitalRatingCard.module.scss'
import { MouseEventHandler } from 'react'

interface HospitalRatingCardProps {
  name: string
  description: string
  rating: number
}

export const HospitalRatingCard = ({
  name,
  rating,
  description,
}: HospitalRatingCardProps) => {
  const handleShowMoreInfo: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
  }

  return (
    <div className={css.hospital_card}>
      <Image src={defaultHospital} />

      <div className={css.hospital_card__content}>
        <div className={css.hospital_card__title_wrapper}>
          <h3 className={css.hospital_card__title}>{name}</h3>
          <p className={css.hospital_card__description}>{description}</p>
        </div>

        <div className={css.hospital_card__section}>
          <HospitalRating rating={rating} />

          <Button
            className={css.hospital_card__button}
            onClick={handleShowMoreInfo}
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  )
}
