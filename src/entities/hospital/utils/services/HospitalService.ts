import { authAxios } from "@/shared/utils/axios/api";
import {
  GetAllHospitalsResponse,
  GetAllhospitalsParams,
  GetHospitalByIdResponse,
} from "../../models";

class HospitalService {
  private BASE = "hospitals/";

  public async getAllHospitalsByParams(params: GetAllhospitalsParams) {
    const response = await authAxios.get<GetAllHospitalsResponse[]>(
      this.BASE,
      {}
    );
    return response.data;
  }

  public async getHospitalById(hospitalId: number) {
    const response = await authAxios.get<GetHospitalByIdResponse>(
      `${this.BASE}${hospitalId}/`
    );
    return response.data;
  }
}

export default new HospitalService();
