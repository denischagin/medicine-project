import { ILogin } from "@/utlis/models";
import AuthenticationService from "@/utlis/services/AuthenticationService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useLoginMutation = () => {
  const toast = useToast()

  return useMutation({
    mutationFn: (credits: ILogin) => AuthenticationService.login(credits),
    
    onError: (error: AxiosError) => {
      toast({
        title: `${error.response?.data}`,
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
