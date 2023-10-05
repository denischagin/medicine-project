import { queryKeys } from '@/shared/constants/queryKeys'
import { useQuery } from '@tanstack/react-query'
import HospitalService from '../services/HospitalService'

export const useGetAllHospitalsQuery = (searchCity: string) =>
  useQuery({
    queryKey: [queryKeys.getAllHospitals, searchCity],

    queryFn: () =>
      HospitalService.getAllHospitalsByParams({
        name: searchCity === '' ? undefined : searchCity,
        cityId: 5,
      }),

    retry: false,
  })
