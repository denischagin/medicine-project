import { createContext } from "react";
import { IAuthResponse } from "../../models/auth";

export interface IAuthContext extends Partial<IAuthResponse> {
  login: ({}: IAuthResponse) => void;
  logout: () => void;
  isAuth: boolean;
  isLoading: false;
  authData?: IAuthResponse;
}

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  login: () => {},
  logout: () => {},
  isLoading: false,
});
