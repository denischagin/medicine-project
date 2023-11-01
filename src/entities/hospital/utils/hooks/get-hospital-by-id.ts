import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";
import { queryKeys } from "@/shared/constants/queryKeys";
import { GetHospitalByIdResponse } from "../../models";
import { AxiosError } from "axios";

export const useGetHospitalById = (
  hospitalId: number,
  options?: UseQueryOptions<GetHospitalByIdResponse, AxiosError>
) =>
  useQuery({
    queryFn: () => HospitalService.getHospitalById(hospitalId),
    queryKey: [queryKeys.getHospitalById, hospitalId],
    ...options,
  });
