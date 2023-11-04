import {
    ILoginCredits,
    ILoginResponse,
    IRegistrationCredits,
    IRegistrationResponse,
    IRefresh,
    IRefreshResponse
} from "@/entities/auth/models";
import { baseQuery } from "@/shared/libs/axios";

class AuthService {
    private BASE = "";

    public login = async (credits: ILoginCredits) =>
        baseQuery<ILoginResponse>({
            url: this.BASE + "login-patient/",
            data: credits,
            method: "post"
        });

    public registration = async (credits: IRegistrationCredits) =>
        baseQuery<IRegistrationResponse>({
            url: this.BASE + "register/",
            data: credits,
            method: "post"
        });

    public refresh = async (credits: IRefresh) =>
        baseQuery<IRefreshResponse>({
            url: this.BASE + "refresh/",
            data: credits,
            method: "post"
        });

    public revoke = async (email: string) =>
        baseQuery<IRefreshResponse>({
            url: `revoke/${email}`,
            method: "post"
        });
}

export default new AuthService();
