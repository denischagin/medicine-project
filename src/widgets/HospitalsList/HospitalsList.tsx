import { HospitalRatingCard } from '@/entities/hospital/ui/HospitalRatingCard'
import { Text } from '@chakra-ui/react'
import { HospitalsListProps } from './HospitalsList.interface'
import css from './HospitalsList.module.scss'
import { ProgressLoader } from '@/shared/ui/loader'
import { useGetAllHospitalsQuery } from '@/entities/hospital'

export const HospitalsList = ({ search }: HospitalsListProps) => {
  const {
    isLoading,
    isError,
    isSuccess,
    data: hospitals,
  } = useGetAllHospitalsQuery(search)

  const isHospitalsEmpty = hospitals?.length === 0

  return (
    <div className={css.hospitals_list}>
      <div className={css.hospitals_list__wrapper}>
        {isLoading && <ProgressLoader />}

        {isSuccess &&
          (isHospitalsEmpty ? (
            <Text>Список больниц пустой</Text>
          ) : (
            hospitals.map(({ id, name, address, rating }) => (
              <HospitalRatingCard
                key={id}
                id={id}
                address={address}
                name={name}
                rating={rating}
              />
            ))
          ))}

        {isError && (
          <Text
            fontSize="3xl"
            color="tomato"
          >
            Возникла ошибка загрузки больниц
          </Text>
        )}
      </div>
    </div>
  )
}
