import { Image } from '@chakra-ui/react'
import defaultHospital from '../assets/img/default-hospital.png'
import defaultHospitalSvg from '../assets/svg/camera.svg'
import css from './AvatarHospital.module.scss'

export const AvatarHospital = () => {
  return (
    <div className={css.avatar_hospital}>
      <Image
        src={defaultHospital}
        className={css.avatar_hospital__img}
      />

      <Image
        src={defaultHospitalSvg}
        className={css.avatar_hospital__img}
      />
    </div>
  )
}
