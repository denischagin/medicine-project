import { ILoginCredits } from "@/entities/auth/models";
import AuthService from "@/entities/auth/utils/services/AuthService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginMutation = () => {
  const toast = useToast()

  return useMutation({
    mutationFn: (credits: ILoginCredits) => AuthService.login(credits),
    
    onError: (error: AxiosError) => {
      toast({
        title: `${error.response?.data ?? "Произошла ошибка"}`,
        status: "error",
        isClosable: true,
        duration: 2000,
      })
    },

    onSuccess: () => {
      toast({
        title: `Успешно`,
        status: "success",
        isClosable: true,
        duration: 2000,
      })
    }
  });
};
