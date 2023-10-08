import { useParams } from 'react-router'
import css from './HospitalCardPage.module.scss'
import { useGetHospitalById } from '@/entities/hospital/utils/hooks/get-hospital-by-id'
import { ProgressLoader } from '@/shared/ui/loader'
import { Text } from '@chakra-ui/react'
import { MainContainer } from '@/shared/ui/container'

export const HospitalCardPage = () => {
  const { hospitalId } = useParams()

  const {
    data: hospital,
    isError,
    isFetching,
    isSuccess,
  } = useGetHospitalById(Number(hospitalId))

  return (
    <div className={css.hospital_card}>
      <MainContainer>
        {isSuccess && <>{JSON.stringify(hospital)}</>}

        {isFetching && <ProgressLoader />}

        {isError && <Text color="tomato">Возникла ошибка</Text>}
      </MainContainer>
    </div>
  )
}
