import {
  ILoginCredits,
  ILoginResponse,
  UseLoginMutationArgs,
} from "@/entities/auth/models";
import AuthService from "@/entities/auth/utils/services/AuthService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginMutation = (
  options?: UseLoginMutationArgs<ILoginResponse, AxiosError, ILoginCredits>
) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (credits: ILoginCredits) => AuthService.login(credits),

    onError: (error, variables) => {
      toast({
        title: `${error.response?.data ?? "Произошла ошибка"}`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
      options?.onErrorExtends && options.onErrorExtends(error, variables);
    },

    onSuccess: (data: ILoginResponse, variables: ILoginCredits) => {
      toast({
        title: `Успешно`,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
      options?.onSuccessExtends && options.onSuccessExtends(data, variables);
    },

    ...options,
  });
};
