import { Image } from '@chakra-ui/react';
import css from './style.module.scss'
import { ReactNode } from 'react';
import doctorImg from "@/shared/assets/img/doctor-img.png";

interface AuthCardProps {
  children: ReactNode
}

export const AuthCard = ({children}: AuthCardProps) => {
  return (
    <div className={css.auth_card}>
      <div className={css.auth_card_img}>
        <Image src={doctorImg} alt="doctor" />
      </div>

      {children}
    </div>
  );
};
