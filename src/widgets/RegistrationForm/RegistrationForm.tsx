import { InputPassword } from "@/shared/ui/InputPassword";
import { Button, Input } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { paths } from "@/shared/constants";
import css from "./RegistrationForm.module.scss";
import { FormEventHandler } from "react";
import { IRegistrationCredits } from "@/entities/auth/models";
import { useRegistrationMutation } from "@/entities/auth";

export const RegistrationForm = () => {
  const { mutate: registrationMutate, isSuccess, isLoading } = useRegistrationMutation();
  const navigate = useNavigate();
  
  if (isSuccess) navigate(paths.home, { replace: true });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const requestBody: IRegistrationCredits = {
      email: formData.get("email")?.toString()!,
      password: formData.get("password")?.toString()!,
      passwordConfirm: formData.get("repeat-password")?.toString()!,
      birthDate: formData.get("birthday")?.toString()!,
      firstName: formData.get("name")?.toString()!,
      lastName: formData.get("surname")?.toString()!,
      middleName: formData.get("patronymic")?.toString()!,
      role: "Patient",
    };

    registrationMutate(requestBody);
  };
  return (
    <form className={css.registration_form} onSubmit={handleFormSubmit}>
      <div className={css.registration_field_list}>
        <Input
          name="email"
          type="email"
          variant="flushed"
          placeholder="Эл.почта"
          width="100%"
          className={css.registration_field}
          required
        />

        <InputPassword
          name="password"
          classNameInputGroup={css.registration_field}
          placeholder="Пароль"
        />

        <InputPassword
          name="repeat-password"
          classNameInputGroup={css.registration_field}
          placeholder="Повторите пароль"
        />

        <Input
          name="surname"
          type="text"
          variant="flushed"
          placeholder="Фамилия"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          name="name"
          type="text"
          variant="flushed"
          placeholder="Имя"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          name="patronymic"
          type="text"
          variant="flushed"
          placeholder="Отчество"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          name="gender"
          type="text"
          variant="flushed"
          placeholder="Пол"
          width="100%"
          className={css.registration_field}
          required
        />

        <Input
          name="birthday"
          type="date"
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

      <Button
        type="submit"
        colorScheme="blackAlpha"
        className={css.registration_form_submit}
        bg="green.900"
        color="white"
        isLoading={isLoading}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
