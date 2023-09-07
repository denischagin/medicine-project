import { InputPassword } from "@components/ui/InputPassword";
import { Button, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { paths } from "@/utlis/constants";
import css from './RegistrationForm.module.scss'

export const RegistrationForm = () => {
  return (
    <form className={css.registration_form}>
      <div className={css.registration_field_list}>
        <Input
          type="email"
          variant="flushed"
          placeholder="Эл.почта"
          width="100%"
          className={css.registration_field}
          required
        />

        <InputPassword
          classNameInputGroup={css.registration_field}
          placeholder="Пароль"
        />

        <InputPassword
          classNameInputGroup={css.registration_field}
          placeholder="Повторите пароль"
        />

        <Input
          type="text"
          variant="flushed"
          placeholder="Повторите пароль"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          type="text"
          variant="flushed"
          placeholder="Фамилия"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          type="text"
          variant="flushed"
          placeholder="Имя"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          type="text"
          variant="flushed"
          placeholder="Отчество"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          type="text"
          variant="flushed"
          placeholder="Пол"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          variant="flushed"
          placeholder="Дата рождения"
          width="100%"
          className={css.registration_field}
          required
        />
      </div>

      <NavLink to={paths.login} className={css.sign_in_link}>
        Уже есть аккаунт?
      </NavLink>

      <Button type="submit" className={css.registration_form_submit}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
