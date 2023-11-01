import { InputPassword } from "@/shared/ui/input/InputPassword";
import { paths } from "@/shared/constants";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ILoginCreditsWithOutRole } from "@/entities/auth/models";
import { useLoginMutation } from "@/entities/auth";
import { useAuth } from "@/entities/auth/utils/hooks";
import { AuthHelpLink } from "@/features/AuthHelpLink";
import { SubmitHandler, useForm } from "react-hook-form";

export const LoginForm = () => {
  const { mutate: loginMutate, isSuccess, isLoading } = useLoginMutation();

  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<ILoginCreditsWithOutRole>();

  if (isSuccess) navigate(paths.home, { replace: true });

  const onSubmit: SubmitHandler<ILoginCreditsWithOutRole> = (data) => {
    loginMutate(data, {
      onSuccess: (loginData) => {
        login(loginData);
        navigate(paths.hospitals, { replace: true });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack p={["3", "9"]} pt="6">
        <VStack spacing={6} w="100%">
          <Input
            placeholder="Эл.почта / Номер телефона"
            variant="underline"
            {...register("email", { required: true })}
          />

          <InputPassword
            placeholder="Пароль"
            variant="underline"
            {...register("password", { required: true })}
          />
        </VStack>

        <AuthHelpLink to={paths.register} text="Нет аккаунта?" />

        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          isDisabled={!isValid}
          mt="10"
        >
          Войти
        </Button>
      </VStack>
    </form>
  );
};
