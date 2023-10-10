import { useParams } from 'react-router'
import css from './HospitalCardPage.module.scss'
import { useGetHospitalById } from '@/entities/hospital/utils/hooks/get-hospital-by-id'
import { MainContainer } from '@/shared/ui/container'
import { AvatarHospital } from '@/shared/ui/avatar/AvatarHospital'
import { Text } from '@chakra-ui/react'

export const HospitalCardPage = () => {
  const { hospitalId } = useParams()

  const { data: hospital } = useGetHospitalById(Number(hospitalId))

  return (
    <section className={css.hospital_card}>
      <MainContainer>
        <div className={css.hospital_card__content}>
          <div className={css.hospital_card__title_wrapper}>
            <AvatarHospital />

            <div className={css.hospital_card__description}>
              <Text fontSize="3xl">{hospital?.name}</Text>

              <Text>{hospital?.description}</Text>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  )
}
