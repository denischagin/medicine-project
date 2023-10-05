import { HospitalRating } from '@/shared/ui/rating/HospitalRating'
import { Button, Image } from '@chakra-ui/react'
import defaultHospital from '../../assets/img/default-hospital.png'
import css from './HospitalRatingCard.module.scss'

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
  console.log(name)
  return (
    <div className={css.hospital_card}>
      <Image src={defaultHospital} />

      <div className={css.hospital_card_content}>
        <div className={css.hospital_card_title_wrapper}>
          <h3 className={css.hospital_card_title}>{name}</h3>
          <p className={css.hospital_card_description}>{description}</p>
        </div>

        <div className={css.hospital_card_section}>
          <HospitalRating rating={rating} />

          <Button className={css.hospital_card_button}>Подробнее</Button>
        </div>
      </div>
    </div>
  )
}
