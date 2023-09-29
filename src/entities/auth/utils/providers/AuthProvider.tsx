import {AuthContext} from "@/entities/auth/context";
import {ReactNode, useEffect, useState} from "react";
import {localStorageKeys} from "@/shared/constants";
import {useLocalStorage} from "@/shared/utils/hooks";
import AuthService from "@/entities/auth/utils/services";

interface AuthProviderProps {
    children: ReactNode;
}

interface ITokens {
    accessToken: string;
    refreshToken: string;
}

export const AuthProvider = (props: AuthProviderProps) => {
    const [isAuth, setIsAuth] = useState(false);
    const {value: tokensJSON, setItem} = useLocalStorage(
        localStorageKeys.tokens
    );

    useEffect(() => {
        const refreshTokens = async (access: string, refresh: string) => {
            const {accessToken, refreshToken} = await AuthService.refresh({
                accessToken: access,
                refreshToken: refresh
            })

            login(accessToken, refreshToken)
        }

        try {
            if (tokensJSON) {
                const {accessToken, refreshToken}: ITokens = JSON.parse(tokensJSON);
                refreshTokens(accessToken, refreshToken)
            }
        } catch (e) {
            logout()
        }
    }, []);

    const login = (accessToken: string, refreshToken: string) => {
        setIsAuth(true);
        setItem(JSON.stringify({accessToken, refreshToken} as ITokens));
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider
            {...props}
            value={{login, isAuth, logout, isLoading: false}}
        />
    );
};
