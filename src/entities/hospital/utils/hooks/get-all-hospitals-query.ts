import { queryKeys } from "@/shared/constants/queryKeys";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";
import { GetAllHospitalsResponse, GetAllhospitalsParams } from "../../models";
import { AxiosError } from "axios";

export const useGetAllHospitalsQuery = (
  args: GetAllhospitalsParams,
  options?: UseQueryOptions<GetAllHospitalsResponse[], AxiosError>
) =>
  useQuery({
    queryKey: [queryKeys.getAllHospitals, ...Object.values(args)],
    queryFn: () => HospitalService.getAllHospitalsByParams(args),
    ...options,
  });
