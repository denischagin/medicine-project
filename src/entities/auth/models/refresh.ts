import { IAuthResponse } from "./auth";

export interface IRefresh {
  accessToken: string;
  refreshToken: string;
}

export interface IRefreshResponse extends IAuthResponse {
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}