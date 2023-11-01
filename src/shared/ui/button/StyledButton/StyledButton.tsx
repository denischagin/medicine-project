import { Button } from '@chakra-ui/react'
import { StyledButtonProps } from './StyledButton.interface'

export const StyledButton = (props: StyledButtonProps) => {
  return (
    <Button
      color="whiteAlpha.900"
      bgColor="green.700"
      _hover={{ bgColor: "green.900"}}
      {...props}
    />
  )
}
