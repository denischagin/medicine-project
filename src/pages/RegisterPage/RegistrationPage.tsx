import { Image } from "@chakra-ui/react";
import css from "./RegistrationPage.module.scss";

import doctorImg from "@assets/imgs/doctor-img.png";
import { LoginWithEsia } from "@components/LoginWithEsia";
import { RegistrationForm } from "@/components/forms/RegistrationForm";

export const RegistrationPage = () => {
  return (
    <div className={css.registration}>
      <h1>РЕГИСТРАЦИЯ</h1>
      <div className={css.registration_card}>
        <Image src={doctorImg} alt="doctor" />

        <RegistrationForm />
      </div>

      <LoginWithEsia />
    </div>
  );
};
