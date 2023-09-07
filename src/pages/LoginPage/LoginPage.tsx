import { Image } from "@chakra-ui/react";
import css from "./LoginPage.module.scss";

import doctorImg from "@assets/imgs/doctor-img.png";
import { LoginWithEsia } from "@components/LoginWithEsia";
import { LoginForm } from "@/components/forms/LoginForm";

export const LoginPage = () => {
  return (
    <div className={css.login}>
      <h1>ВХОД</h1>
      <div className={css.login_card}>
        <Image src={doctorImg} alt="doctor" />

        <LoginForm />
      </div>

      <LoginWithEsia />
    </div>
  );
};
