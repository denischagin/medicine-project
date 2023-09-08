import axios from "@/utlis/axios/api";
import {
  ILogin,
  ILoginResponse,
  IRegistration,
  IRegistrationResponse,
  IRefresh,
  IRefreshResponse,
} from "@/utlis/models";

class AuthenticationService {
  private BASE = "Accounts/";

  public async login(credits: ILogin) {
    const response = await axios.post<ILoginResponse>(
      this.BASE + "login",
      credits
    );
    return response.data;
  }

  public async registration(credits: IRegistration) {
    const response = await axios.post<IRegistrationResponse>(
      this.BASE + "register",
      credits
    );
    return response.data;
  }

  public async refresh(credits: IRefresh) {
    const response = await axios.post<IRefreshResponse>(
      this.BASE + "refresh-token",
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

export default new AuthenticationService();
