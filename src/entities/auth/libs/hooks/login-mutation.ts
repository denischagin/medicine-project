import {
  ILoginCredits,
  ILoginResponse,
  UseLoginMutationArgs,
} from "@/entities/auth/models";
import AuthService from "@/entities/auth/libs/services/AuthService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginMutation = (
  options?: UseLoginMutationArgs<ILoginResponse, AxiosError, ILoginCredits>
) => {
  const toast = useToast();

  return useMutation({
    mutationFn: (credits: ILoginCredits) => AuthService.login(credits),

    onError: (error) => {
      toast({
        title: `${error.response?.data ?? "Произошла ошибка"}`,
        status: "error",
        isClosable: true,
        duration: 2000,
      });
    },

    onSuccess: () => {
      toast({
        title: `Успешно`,
        status: "success",
        isClosable: true,
        duration: 2000,
      });
    },

    ...options,
  });
};
