export interface GetAllHospitalsResponse {
  id: number
  name: string
  description: string
  rating: number
}

export interface GetAllhospitalsParams {
  cityId?: number
  name?: string
  minRating?: number
  maxRating?: number
}
