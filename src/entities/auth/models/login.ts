import { UseMutationOptions } from "@tanstack/react-query";

export interface ILoginCredits {
  email: string;
  password: string;
  role: string;
}

export type ILoginCreditsWithOutRole = Omit<ILoginCredits, "role">;

export interface ILoginResponse {
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  role: string;
}

export interface UseLoginMutationArgs<
  TData = unknown,
  TError = unknown,
  TVariables = void
> extends UseMutationOptions<TData, TError, TVariables> {
  onSuccessExtends?: (data: TData, variables: TVariables) => void;
  onErrorExtends?: (data: TError, variables: TVariables) => void;
}
