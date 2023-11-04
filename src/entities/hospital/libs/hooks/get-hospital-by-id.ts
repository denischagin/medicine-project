import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";
import { queryKeys } from "@/shared/constants";
import { GetHospitalByIdResponse } from "@/entities/hospital";
import { AxiosError } from "axios";

export const useGetHospitalById = (
    hospitalId: number,
    options?: UseQueryOptions<GetHospitalByIdResponse, AxiosError>
) =>
    useQuery({
        queryKey: [queryKeys.getHospitalById, hospitalId],
        queryFn: () => HospitalService.getHospitalById(hospitalId),
        ...options
    });
