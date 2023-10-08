import { useQuery } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";
import { queryKeys } from "@/shared/constants/queryKeys";

export const useGetHospitalById = (hospitalId: number) => useQuery({
    queryFn: () => HospitalService.getHospitalById(hospitalId),
    queryKey: [queryKeys.getHospitalById, hospitalId]
})