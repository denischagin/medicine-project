import { useGetAllHospitalsQuery } from '@/entities/hospital/utils'
import { useDebounce } from '@/shared/utils/hooks'
import { HospitalsList } from '@/widgets/HospitalsList/HospitalsList'

import { ChangeEvent, useState } from 'react'
import { InputSearch } from '../../shared/ui/input/InputSearch'
import css from './HospitalsPage.module.scss'
import { MainContainer } from '@/shared/ui/container'

export const HospitalsPage = () => {
  const [search, setSearch] = useState('')
  const debounceSearch = useDebounce(search, 300)

  useGetAllHospitalsQuery(debounceSearch)

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className={css.hospitals}>
      <MainContainer className={css.hospitals__container}>
        <InputSearch
          inputProps={{
            onChange: handleChangeSearch,
          }}
          inputGroupProps={{
            className: css.hospitals__search,
          }}
        />

        <HospitalsList search={debounceSearch} />
      </MainContainer>
    </div>
  )
}
