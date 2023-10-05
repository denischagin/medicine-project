import { GetAllHospitalsResponse } from '../../entities/hospital/models'

export interface HospitalsListProps {
  hospitals: GetAllHospitalsResponse[]
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}
