export interface IHospitalBase {
  id: number
  name: string
  address: string
  rating: number
}

export interface ISpecialityForHospitalRequest {
  id: number
  name: string
}

export interface IDoctorForHospitalRequest {
  id: number
  hospitalId: number
  surname: string
  name: string
  patronymic?: string
  speciality: IDoctorForHospitalRequest
  appointmenst: unknown[]
}

export interface IHospitalFullInformation extends IHospitalBase {
  description: string
  email: string
  endTime: string
  startedTime: string
  doctors: IDoctorForHospitalRequest
}

export interface GetAllHospitalsResponse extends IHospitalBase {}

export interface GetAllhospitalsParams {
  cityId?: number
  name?: string
  minRating?: number
  maxRating?: number
}

export interface GetHospitalByIdResponse extends IHospitalFullInformation {}