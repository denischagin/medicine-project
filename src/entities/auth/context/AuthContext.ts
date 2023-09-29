import { createContext } from "react";

export interface IAuthContext {
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
  isAuth: boolean;
  isLoading: false;
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  login: () => {},
  logout: () => {},
  isLoading: false,
});


