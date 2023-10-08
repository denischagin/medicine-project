import { HospitalRatingCard } from '@/entities/hospital/ui/HospitalRatingCard'
import { Text } from '@chakra-ui/react'
import { HospitalsListProps } from './HospitalsList.interface'
import css from './HospitalsList.module.scss'
import { ProgressLoader } from '@/shared/ui/loader'

export const HospitalsList = ({
  hospitals,
  isError,
  isLoading,
  isSuccess,
}: HospitalsListProps) => {
  return (
    <div className={css.hospitals_list}>
      <div className={css.hospitals_list__wrapper}>
        {isLoading && <ProgressLoader />}

        {isSuccess &&
          hospitals.map(({ id, name, address, rating }) => (
            <HospitalRatingCard
              key={id}
              id={id}
              address={address}
              name={name}
              rating={rating}
            />
          ))}

        {isError && (
          <Text
            fontSize="3xl"
            color="tomato"
          >
            Возникла ошибка
          </Text>
        )}
      </div>
    </div>
  )
}
