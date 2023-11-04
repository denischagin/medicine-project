import { queryKeys } from "@/shared/constants";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";
import { GetAllHospitalsResponse, GetAllHospitalsParams } from "../../models";
import { AxiosError } from "axios";

export const useGetAllHospitalsQuery = (
    args: GetAllHospitalsParams,
    options?: UseQueryOptions<GetAllHospitalsResponse, AxiosError>
) =>
    useQuery<GetAllHospitalsResponse, AxiosError>({
        queryKey: [queryKeys.getAllHospitals, args],
        queryFn: () => HospitalService.getAllHospitalsByParams(args),
        ...options
    });
