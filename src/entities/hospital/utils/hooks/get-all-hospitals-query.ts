import { queryKeys } from '@/shared/constants/queryKeys'
import { useQuery } from '@tanstack/react-query'
import HospitalService from '../services/HospitalService'

export const useGetAllHospitalsQuery = (
  searchCity: string,
  cityId: number = 5,
  maxRating?: number,
  minRating?: number,
) =>
  useQuery({
    queryKey:
      searchCity === ''
        ? [queryKeys.getAllHospitals]
        : [queryKeys.getAllHospitals, searchCity],

    queryFn: () =>
      HospitalService.getAllHospitalsByParams({
        name: searchCity === '' ? undefined : searchCity,
        cityId,
        maxRating,
        minRating,
      }),
  })
