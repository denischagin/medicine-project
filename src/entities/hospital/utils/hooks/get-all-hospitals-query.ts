import { queryKeys } from "@/shared/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import HospitalService from "../services/HospitalService";

export const useGetAllHospitalsQuery = () => useQuery({
  queryKey: [queryKeys.getAllHospitals],
  queryFn: () => HospitalService.getAllHospitals(),
  
})