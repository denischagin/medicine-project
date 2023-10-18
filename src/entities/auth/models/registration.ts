import { UseMutationOptions } from "@tanstack/react-query";

export interface IRegistrationCredits {
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
}

export type IRegistrationCreditsWithOutRole = Omit<
  IRegistrationCredits,
  "role"
>;

export interface IRegistrationResponse {
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  role: string;
}

export interface UseRegistrationMutationArgs<
  TData = unknown,
  TError = unknown,
  TVariables = void
> extends UseMutationOptions<TData, TError, TVariables> {
  onSuccessExtends?: (data: TData, variables: TVariables) => void;
  onErrorExtends?: (data: TError, variables: TVariables) => void;
}
