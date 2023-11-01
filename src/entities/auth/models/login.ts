import { UseMutationOptions } from "@tanstack/react-query";
import { IAuthResponse } from "./auth";

export interface ILoginCredits {
  email: string;
  password: string;
}

export type ILoginCreditsWithOutRole = Omit<ILoginCredits, "role">;

export interface ILoginResponse extends IAuthResponse {}

export interface UseLoginMutationArgs<
  TData = unknown,
  TError = unknown,
  TVariables = void
> extends UseMutationOptions<TData, TError, TVariables> {}
