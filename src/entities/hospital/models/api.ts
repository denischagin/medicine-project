export interface IReview {
    id: number
    title: string
    description: string
    rating: number
}

export interface IHospitalBase {
    id: number;
    name: string;
    address: string;
    rating: number;
}

export interface ISpecialityForHospitalRequest {
    id: number;
    name: string;
}

export interface IDoctorForHospitalRequest {
    id: number;
    hospitalId: number;
    surname: string;
    name: string;
    patronymic?: string;
    speciality: IDoctorForHospitalRequest;
    appointments: unknown[];
}

export interface IHospitalFullInformation extends IHospitalBase {
    description: string;
    email: string;
    endTime: string;
    startedTime: string;
    doctors: IDoctorForHospitalRequest;
    reviews: IReview[]
}

export type GetAllHospitalsResponse = IHospitalBase[]

export interface GetAllHospitalsParams {
    cityId: number;
    name: string;
    minRating?: number;
    maxRating?: number;
}

export interface GetHospitalByIdResponse extends IHospitalFullInformation {
}