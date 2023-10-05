import { useGetAllHospitalsQuery } from '@/entities/hospital/utils'
import { useDebounce } from '@/shared/utils/hooks'
import { HospitalsList } from '@/widgets/HospitalsList/HospitalsList'
import searchIcon from '@/entities/hospital/assets/svg/search.svg'

import {
  Container,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react'
import { ChangeEvent, useState } from 'react'
import { InputSearch } from '../../shared/ui/input/InputSearch'

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
    <Container>
      <InputSearch
        inputProps={{
          onChange: handleChangeSearch,
        }}
      />

      <HospitalsList
        hospitals={hospitals}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isFetching}
      />
    </Container>
  )
}
