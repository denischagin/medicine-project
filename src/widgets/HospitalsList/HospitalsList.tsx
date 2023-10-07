import { HospitalRatingCard } from '@/entities/hospital/ui/HospitalRatingCard'
import { Progress, Text } from '@chakra-ui/react'
import { HospitalsListProps } from './HospitalsList.interface'
import css from './HospitalsList.module.scss'

export const HospitalsList = ({
  hospitals,
  isError,
  isLoading,
  isSuccess,
}: HospitalsListProps) => {
  return (
    <div className={css.hospitals_list}>
      <div className={css.hospitals_list__wrapper}>
        {isLoading && (
          <Progress
            isIndeterminate
            colorScheme="green"
            size="sm"
          />
        )}

        {isSuccess &&
          hospitals.map(({ id, name, description, rating }) => (
            <HospitalRatingCard
              key={id}
              description={name}
              name={description}
              rating={rating}
            />
          ))}

        {isError && <Text>Возникла ошибка</Text>}
      </div>
    </div>
  )
}
