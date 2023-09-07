import {
  Button,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import css from "./LoginPage.module.scss";
import { NavLink } from "react-router-dom";
import { paths } from "@/utlis/constants";

import doctorImg from "@assets/imgs/doctor-img.png";
import eyeOff from "@assets/svgs/eye-off.svg";
import eye from "@assets/svgs/eye.svg";
import { useState } from "react";
import { LoginWithEsia } from "@components/LoginWithEsia";
import { InputPassword } from "@/components/ui/InputPassword";

export const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggleShowPassword = () => setIsShowPassword((prev) => !prev);

  return (
    <div className={css.login}>
      <h1>ВХОД</h1>
      <div className={css.login_card}>
        <Image src={doctorImg} alt="doctor" />

        <form className={css.login_form}>
          <Input
            type="email"
            variant="flushed"
            placeholder="Эл.почта / Номер телефона"
            width="100%"
            className={css.login_field}
            required
          />

          <InputPassword
            classNameInputGroup={css.login_field}
            placeholder="Пароль"
          />

          <NavLink to={paths.register} className={css.sign_up_link}>
            Нет аккаунта?
          </NavLink>

          <Button type="submit" className={css.login_form_submit}>
            Войти
          </Button>
        </form>
      </div>

      <LoginWithEsia />
    </div>
  );
};
