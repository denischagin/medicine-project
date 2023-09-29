import { InputPassword } from "@/shared/ui/InputPassword";
import { paths } from "@/shared/constants";
import { Button, Input } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import css from "./LoginForm.module.scss";
import { FormEventHandler } from "react";
import { ILoginCredits } from "@/entities/auth/models";
import { useLoginMutation } from "@/entities/auth";

export const LoginForm = () => {
  const { mutate: loginMutate, isSuccess, isLoading } = useLoginMutation();
  const navigate = useNavigate();
  
  if (isSuccess) navigate(paths.home, { replace: true });

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const requestBody: ILoginCredits = {
      email: formData.get("email")?.toString()!,
      password: formData.get("password")?.toString()!,
      role: "Patient",
    };

    loginMutate(requestBody);
  };

  return (
    <form className={css.login_form} onSubmit={handleFormSubmit}>
      <Input
        type="email"
        variant="flushed"
        placeholder="Эл.почта / Номер телефона"
        width="100%"
        className={css.login_field}
        required
        name="email"
      />

      <InputPassword
        classNameInputGroup={css.login_field}
        placeholder="Пароль"
        name="password"
      />

      <NavLink to={paths.register} className={css.sign_up_link}>
        Нет аккаунта?
      </NavLink>

      <Button
        type="submit"
        colorScheme="blackAlpha"
        className={css.login_form_submit}
        bg="green.900"
        color="white"
        isLoading={isLoading}
      >
        Войти
      </Button>
    </form>
  );
};
