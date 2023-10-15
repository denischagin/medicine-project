import { InputPassword } from "@/shared/ui/input/InputPassword";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/constants";
import { FormEventHandler } from "react";
import { IRegistrationCredits } from "@/entities/auth/models";
import { useRegistrationMutation } from "@/entities/auth";
import { useAuth } from "@/entities/auth/utils/hooks/use-auth";
import { AuthHelpLink } from "@/features/AuthHelpLink";

export const RegistrationForm = () => {
  const {
    mutate: registrationMutate,
    isSuccess,
    isLoading,
  } = useRegistrationMutation();

  const navigate = useNavigate();
  const { login } = useAuth();

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

    registrationMutate(requestBody, {
      onSuccess: ({ refreshToken, token }) => {
        login(token, refreshToken);
        navigate(paths.hospitals, { replace: true });
      },
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <VStack p={["3", "9"]} pt="6">
        <VStack spacing={6} w="100%">
          <Input
            name="email"
            type="email"
            variant="underline"
            placeholder="Эл.почта"
          />

          <InputPassword
            name="password"
            placeholder="Пароль"
            variant="underline"
          />

          <InputPassword
            name="repeat-password"
            placeholder="Повторите пароль"
            variant="underline"
          />

          <Input
            name="surname"
            type="text"
            variant="underline"
            placeholder="Фамилия"
          />

          <Input
            name="name"
            type="text"
            variant="underline"
            placeholder="Имя"
          />

          <Input
            name="patronymic"
            type="text"
            variant="underline"
            placeholder="Отчество"
            width="100%"
          />

          <Input
            name="gender"
            type="text"
            variant="underline"
            placeholder="Пол"
          />

          <Input
            name="birthday"
            type="date"
            variant="underline"
            placeholder="Дата рождения"
          />
        </VStack>

        <AuthHelpLink to={paths.login} text="Уже есть аккаунт?" />

        <Button
          type="submit"
          variant="greenPrimary"
          isLoading={isLoading}
          mt="10"
        >
          Зарегистрироваться
        </Button>
      </VStack>
    </form>
  );
};
