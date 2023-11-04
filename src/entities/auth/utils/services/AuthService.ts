import axios from "@/shared/libs/axios/api";
import {
  ILoginCredits,
  ILoginResponse,
  IRegistrationCredits,
  IRegistrationResponse,
  IRefresh,
  IRefreshResponse,
} from "@/entities/auth/models";

class AuthService {
  private BASE = "";

  public async login(credits: ILoginCredits) {
    const response = await axios.post<ILoginResponse>(
      this.BASE + "login-patient/",
      credits
    );
    return response.data;
  }

  public async registration(credits: IRegistrationCredits) {
    const response = await axios.post<IRegistrationResponse>(
      this.BASE + "register",
      credits
    );
    return response.data;
  }

  public async refresh(credits: IRefresh) {
    const response = await axios.post<IRefreshResponse>(
      this.BASE + "refresh",
      credits
    );
    return response.data;
  }

  public async revoke(email: string) {
    const response = await axios.post<IRefreshResponse>(
      this.BASE + `revoke/${email}`
    );
    return response.data;
  }
}

export default new AuthService();
