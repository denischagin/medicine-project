import axios, { AxiosError, AxiosResponse } from "axios";
import { authApi } from "./api.ts";
import { BaseQuery, BaseQueryConfig } from "@/shared/models";


export const baseQuery: BaseQuery = async <R>(
    axiosConfig: BaseQueryConfig
) => {
    try {
        const response =
            await axios<unknown, AxiosResponse<R>>(
                typeof axiosConfig === "string"
                    ? { url: axiosConfig }
                    : axiosConfig
            );

        return response.data;
    } catch (e) {
        throw e as AxiosError;
    }
};

export const baseQueryWithAuth: BaseQuery = async <R>(
    axiosConfig: BaseQueryConfig
) => {
    try {
        const response =
            await authApi<unknown, AxiosResponse<R>>(
                typeof axiosConfig === "string"
                    ? { url: axiosConfig }
                    : axiosConfig
            );

        return response.data;
    } catch (e) {
        throw e as AxiosError;
    }
};