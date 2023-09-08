import { ILogin } from "@/utlis/models";
import AuthenticationService from "@/utlis/services/AuthenticationService";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () =>
  useMutation({
    mutationFn: (credits: ILogin) => AuthenticationService.login(credits),
  });
