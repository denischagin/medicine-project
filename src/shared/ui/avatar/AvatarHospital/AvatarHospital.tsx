import { Image } from '@chakra-ui/react'
import defaultHospital from '../assets/img/default-hospital.png'
import defaultHospitalSvgLarge from '../assets/svg/camera-large.svg'
import defaultHospitalSvgSmall from '../assets/svg/camera-small.svg'
import css from './AvatarHospital.module.scss'
import classNames from "classnames";
import { AvatarHospitalProps, AvatarHospitalSizes } from "./AvatarHospital.interface.ts";

export const AvatarHospital = ({ size = "large" }: AvatarHospitalProps) => {
  const avatarHospitalClassname = classNames(css.avatar_hospital, css["size__" + size])

  const getAvatarBySize = (size: AvatarHospitalSizes) => {
    switch (size) {
      case "large":
        return defaultHospitalSvgLarge
      case "small":
        return  defaultHospitalSvgSmall
    }
  }

  return (
    <div className={avatarHospitalClassname}>
      <Image
        src={defaultHospital}
        className={css.avatar_hospital__img}
      />

      <Image
        src={getAvatarBySize(size)}
        className={css.avatar_hospital__img}
      />
    </div>
  )
}
