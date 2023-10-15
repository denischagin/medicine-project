import { InputSearchProps } from './InputSearch.interface'
import searchIcon from './svgs/search.svg'
import { Input, InputGroup, InputRightElement, Spinner } from '@chakra-ui/react'

export const InputSearch = ({
  inputGroupProps,
  inputProps,
  isLoading = false,
}: InputSearchProps) => {
  return (
    <InputGroup
      maxW="946px"
      variant="outlined"
      {...inputGroupProps}
    >
      <Input
        type="search"
        {...inputProps}
      />

      <InputRightElement>
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={searchIcon}
            alt="search icon"
          />
        )}
      </InputRightElement>
    </InputGroup>
  )
}
