import { InputPassword } from "@/shared/ui/input/InputPassword";
import { paths } from "@/shared/constants";
import { Button, Input, VStack } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import css from "./LoginForm.module.scss";
import { FormEventHandler } from "react";
import { ILoginCredits } from "@/entities/auth/models";
import { useLoginMutation } from "@/entities/auth";
import { useAuth } from "@/entities/auth/utils/hooks/use-auth";
import { AuthHelpLink } from "@/features/AuthHelpLink";

export const LoginForm = () => {
  const { mutate: loginMutate, isSuccess, isLoading } = useLoginMutation();
  const { login } = useAuth();
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

    loginMutate(requestBody, {
      onSuccess: ({ refreshToken, token }) => {
        login(token, refreshToken);
        navigate(paths.hospitals, { replace: true });
      },
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <VStack as="form" p={["3", "9"]} pt="6">
        <VStack spacing={6} w="100%">
          <Input
            type="email"
            name="email"
            placeholder="Эл.почта / Номер телефона"
            variant="underline"
          />

          <InputPassword
            placeholder="Пароль"
            name="password"
            variant="underline"
          />
        </VStack>

        <AuthHelpLink to={paths.register} text="Нет аккаунта?" />

        <Button
          type="submit"
          variant="greenPrimary"
          isLoading={isLoading}
          mt="10"
        >
          Войти
        </Button>
      </VStack>
    </form>
  );
};
