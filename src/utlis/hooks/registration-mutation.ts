import { IRegistration } from "@/utlis/models";
import AuthenticationService from "@/utlis/services/AuthenticationService";
import { useMutation } from "@tanstack/react-query";

export const useRegistrationMutation = () =>
  useMutation({
    mutationFn: (credits: IRegistration) =>
      AuthenticationService.registration(credits),
  });
