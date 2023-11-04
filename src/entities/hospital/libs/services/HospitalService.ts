import {
    GetAllHospitalsResponse,
    GetAllHospitalsParams,
    GetHospitalByIdResponse
} from "../../models";
import { baseQueryWithAuth } from "@/shared/libs/axios";

class HospitalService {
    private BASE = "hospitals/";

    public getAllHospitalsByParams = async (params: GetAllHospitalsParams) =>
        baseQueryWithAuth<GetAllHospitalsResponse>({
            url: this.BASE,
            params
        });

    public getHospitalById = async (hospitalId: number) =>
        baseQueryWithAuth<GetHospitalByIdResponse>(`${this.BASE}${hospitalId}/`);
}

export default new HospitalService();
