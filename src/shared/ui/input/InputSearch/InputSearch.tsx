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
      borderColor="blackAlpha.900"
      borderRadius="2xl"
      backgroundColor="whiteAlpha.600"
      maxW="946px"
      {...inputGroupProps}
    >
      <Input {...inputProps} />

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
