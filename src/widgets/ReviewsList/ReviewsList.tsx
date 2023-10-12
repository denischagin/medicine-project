import { useGetHospitalById } from '@/entities/hospital/utils/hooks/get-hospital-by-id'
import { useParams } from 'react-router'
import css from './ReviewsList.module.scss'

export const ReviewsList = () => {
  const { hospitalId } = useParams()

  const { data: hospital, isSuccess} = useGetHospitalById(Number(hospitalId))

  if (!isSuccess) return null
  
  const { } = hospital

  return <div className={css.reviews_list}></div>
}
