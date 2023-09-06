import { Button, Input } from "@chakra-ui/react";
import css from "./LoginPage.module.scss";
import doctorImg from "@assets/imgs/doctor-img.png";
import { NavLink } from "react-router-dom";
import { paths } from "@/utlis/constants";

export const LoginPage = () => {
  return (
    <div className={css.login_wrapper}>
      <h1>ВХОД</h1>
      <div className={css.login_card}>
        <img src={doctorImg} alt="doctor" />
        <form className={css.login_form}>
          <Input
            type="email"
            variant="flushed"
            placeholder="Эл.почта / Номер телефона"
            width="100%"
          />
          <Input
            type="email"
            variant="flushed"
            placeholder="Пароль"
            size="sm"
            width="100%"
          />

          <NavLink to={paths.register} className={css.sign_up_link}>
            Нет аккаунта?
          </NavLink>

          <Button className={css.login_form_submit}>
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};
