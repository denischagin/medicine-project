export interface ILoginCredits {
  email: string;
  password: string;
  role: string;
}

export interface ILoginResponse {
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  role: string;
}
