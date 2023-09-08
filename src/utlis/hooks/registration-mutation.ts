import { IRegistration } from "@/utlis/models";
import AuthenticationService from "@/utlis/services/AuthenticationService";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useRegistrationMutation = () => {
  const toast = useToast();

  return useMutation({
    mutationFn: (credits: IRegistration) =>
      AuthenticationService.registration(credits),

    onError: (error: AxiosError) => {
      toast({
        title: `${error.response?.data}`,
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
  });
};
