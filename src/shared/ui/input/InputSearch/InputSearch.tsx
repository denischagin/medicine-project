import { InputSearchProps } from './InputSearch.interface'
import searchIcon from './svgs/search.svg'
import searchIconWhite from './svgs/search-white.svg'
import { Image, Input, InputGroup, InputRightElement, Spinner, useColorModeValue } from '@chakra-ui/react'

export const InputSearch = ({
  inputGroupProps,
  inputProps,
  isLoading = false,
}: InputSearchProps) => {
  const searchIconByMode = useColorModeValue(searchIcon, searchIconWhite)
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
          <Image
            src={searchIconByMode}
            alt="search icon"
          />
        )}
      </InputRightElement>
    </InputGroup>
  )
}
