import { useMutation } from "@tanstack/react-query";
import AuthService from "@/entities/auth/libs/services";
import { IRefresh } from "@/entities/auth/models";

export const useRefreshMutation = () => {
  return  useMutation({
    mutationFn: (credits: IRefresh) => AuthService.refresh(credits),
  })
}