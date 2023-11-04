import { AuthContext } from "@/entities/auth/utils/context";
import { useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "@/shared/constants";
import { useLocalStorage } from "@/shared/libs/hooks";
import { IAuthResponse } from "../../models/auth";
import { useRefreshMutation } from "@/entities/auth/utils/hooks/refresh-mutation.ts";
import { AuthProviderProps } from "@/entities/auth/utils/providers/AuthProvider.interface.ts";
import { ITokens } from "@/entities/auth/models";

export const AuthProvider = (props: AuthProviderProps) => {
  const { mutate: refreshMutate } = useRefreshMutation();

  const [isAuth, setIsAuth] = useState(false);
  const [authData, setAuthData] = useState<IAuthResponse | undefined>();

  const {
    value: tokensJSON,
    setItem,
    removeItem
  } = useLocalStorage(localStorageKeys.tokens);


  const login = useCallback((loginData: IAuthResponse) => {
    const { accessToken } = loginData;
    setIsAuth(true);
    setItem(accessToken);
    setAuthData(loginData);
  }, [setItem]);

  const logout = useCallback(() => {
    removeItem();
    setIsAuth(false);
    setAuthData(undefined);
  }, [removeItem]);

  useEffect(() => {
    if (tokensJSON) {
      const credits: ITokens = JSON.parse(tokensJSON);
      refreshMutate(credits, {
        onError: () => logout(),
        onSuccess: (refreshData) => login(refreshData)
      });
    } else
      logout();
  }, [login, logout, refreshMutate, tokensJSON]);

  return (
    <AuthContext.Provider
      {...props}
      value={{ login, isAuth, logout, isLoading: false, authData }}
    />
  );
};
