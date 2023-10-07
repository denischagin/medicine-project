import { useGetAllHospitalsQuery } from '@/entities/hospital/utils'
import { useDebounce } from '@/shared/utils/hooks'
import { HospitalsList } from '@/widgets/HospitalsList/HospitalsList'

import { Container } from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { InputSearch } from '../../shared/ui/input/InputSearch'
import css from './HospitalsPage.module.scss'

export const HospitalsPage = () => {
  const [search, setSearch] = useState('')
  const debounceSearch = useDebounce(search, 300)

  const {
    data: hospitals = [],
    isFetching,
    isSuccess,
    isError,
  } = useGetAllHospitalsQuery(debounceSearch)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className={css.hospitals}>
      <Container maxW="1500px" className={css.hospitals__container}>
        <InputSearch
          inputProps={{
            onChange: handleChangeSearch,
          }}
          inputGroupProps={{
            className: css.hospitals__search
          }}
        />

        <HospitalsList
          hospitals={hospitals}
          isError={isError}
          isSuccess={isSuccess}
          isLoading={isFetching}
        />
      </Container>
    </div>
  )
}
