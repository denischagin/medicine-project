import { authAxios } from "@/shared/utils/axios/api";
import { GetAllHospitalsResponse } from "../../models";

class HospitalService {
  private BASE = "Hospitals/"

  public async getAllHospitals() {
    const response = await authAxios.get<GetAllHospitalsResponse>(this.BASE + "");
    return response.data;
  }
}

export default new HospitalService()