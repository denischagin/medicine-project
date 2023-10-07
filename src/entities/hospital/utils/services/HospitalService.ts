import { authAxios } from '@/shared/utils/axios/api'
import { GetAllHospitalsResponse, GetAllhospitalsParams } from '../../models'

class HospitalService {
  private BASE = 'Hospitals/'

  public async getAllHospitalsByParams(params: GetAllhospitalsParams) {
    const response = await authAxios.get<GetAllHospitalsResponse[]>(this.BASE, {
      params,
    })
    return response.data
  }
}

export default new HospitalService()
