export interface IRegistrationCredits {
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
}

export interface IRegistrationResponse {
  username: string;
  email: string;
  token: string;
  refreshToken: string;
  role: string;
}
