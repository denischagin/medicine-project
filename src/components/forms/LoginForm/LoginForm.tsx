import { InputPassword } from "@/components/ui/InputPassword";
import { paths } from "@/utlis/constants";
import { Button, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import css from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
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
  );
};
