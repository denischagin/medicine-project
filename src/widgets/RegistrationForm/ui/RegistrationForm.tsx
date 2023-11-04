import { InputPassword } from "@/shared/ui/input";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { paths } from "@/shared/constants";
import { IRegistrationCreditsWithOutRole } from "@/entities/auth/models";
import { useRegistrationMutation } from "@/entities/auth";
import { useAuth } from "@/entities/auth/libs/hooks/use-auth.ts";
import { AuthHelpLink } from "@/features/AuthHelpLink";
import { SubmitHandler, useForm } from "react-hook-form";

export const RegistrationForm = () => {
  const {
    mutate: registrationMutate,
    isSuccess,
    isLoading
  } = useRegistrationMutation({
    onSuccessExtends: ({ token, ...registrationData }) => {
      login({ accessToken: token, ...registrationData });
      navigate(paths.hospitals, { replace: true });
    }
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { isValid }
  } = useForm<IRegistrationCreditsWithOutRole>();

  if (isSuccess) navigate(paths.home, { replace: true });

  const onSubmit: SubmitHandler<IRegistrationCreditsWithOutRole> = (data) => {
    registrationMutate({ ...data, role: "Patient" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack p={["3", "9"]} pt="6">
        <VStack spacing={6} w="100%">
          <Input
            variant="underline"
            placeholder="Эл.почта"
            {...register("email", { required: "Введите почту" })}
          />

          <InputPassword
            placeholder="Пароль"
            variant="underline"
            {...register("password", { required: "Введите пароль" })}
          />

          <InputPassword
            placeholder="Повторите пароль"
            variant="underline"
            {...register("passwordConfirm", { required: "Повторите пароль" })}
          />

          <Input
            type="text"
            variant="underline"
            placeholder="Фамилия"
            {...register("lastName", { required: "Введите фамилию" })}
          />

          <Input
            type="text"
            variant="underline"
            placeholder="Имя"
            {...register("firstName", { required: "Введите имя" })}
          />

          <Input
            type="text"
            variant="underline"
            placeholder="Отчество"
            width="100%"
            {...register("middleName")}
          />

          <Input
            type="date"
            variant="underline"
            placeholder="Дата рождения"
            {...register("birthDate", { required: "Укажите дату рождения" })}
          />
        </VStack>

        <AuthHelpLink to={paths.login} text="Уже есть аккаунт?" />

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          isDisabled={!isValid}
          mt="10"
        >
          Зарегистрироваться
        </Button>
      </VStack>
    </form>
  );
};
