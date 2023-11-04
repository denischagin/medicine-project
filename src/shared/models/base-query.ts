import { AxiosRequestConfig } from "axios";

export type BaseQueryReturn<R> = Promise<R>
export type BaseQueryConfig = AxiosRequestConfig | string

export type BaseQuery = <R>(axiosConfig: BaseQueryConfig) => BaseQueryReturn<R>
