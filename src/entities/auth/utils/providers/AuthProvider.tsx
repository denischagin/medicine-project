import { AuthContext } from "@/entities/auth/utils/context";
import { ReactNode, useEffect, useState } from "react";
import { localStorageKeys } from "@/shared/constants";
import { useLocalStorage } from "@/shared/utils/hooks";
import AuthService from "@/entities/auth/utils/services";
import { IAuthResponse } from "../../models/auth";

interface AuthProviderProps {
  children: ReactNode;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [authData, setAuthData] = useState<IAuthResponse | undefined>();

  const {
    value: tokensJSON,
    setItem,
    removeItem,
  } = useLocalStorage(localStorageKeys.tokens);

  useEffect(() => {
    const refreshTokens = async (access: string, refresh: string) => {
      const refreshData = await AuthService.refresh({
        accessToken: access,
        refreshToken: refresh,
      });

      login(refreshData);
    };

    try {
      if (tokensJSON) {
        const { accessToken, refreshToken }: ITokens = JSON.parse(tokensJSON);
        refreshTokens(accessToken, refreshToken);
      }
    } catch (e) {
      logout();
    }
  }, []);
  
  const login = (loginData: IAuthResponse) => {
    const { accessToken } = loginData;
    setIsAuth(true);
    setItem(accessToken);
    setAuthData(loginData);
  };

  const logout = () => {
    removeItem();
    setIsAuth(false);
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider
      {...props}
      value={{ login, isAuth, logout, isLoading: false, authData }}
    />
  );
};
