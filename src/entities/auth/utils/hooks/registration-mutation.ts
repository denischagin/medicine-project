import {
  IRegistrationCredits,
  IRegistrationResponse,
  UseRegistrationMutationArgs,
} from "@/entities/auth/models";
import AuthService from "@/entities/auth/utils/services/AuthService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRegistrationMutation = (
  options?: UseRegistrationMutationArgs<
    IRegistrationResponse,
    AxiosError,
    IRegistrationCredits
  >
) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (credits: IRegistrationCredits) =>
      AuthService.registration(credits),

    onError: (error: AxiosError, variables) => {
      toast({
        title: `${error.response?.data ?? "Произошла ошибка"} `,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
      options?.onErrorExtends && options.onErrorExtends(error, variables);
    },

    onSuccess: (data, variables) => {
      toast({
        title: `Успешно`,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
      options?.onSuccessExtends && options.onSuccessExtends(data, variables);
    },
  });
};
