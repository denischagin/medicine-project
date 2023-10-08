import { Progress } from '@chakra-ui/react'

export const ProgressLoader = () => {
  return (
    <Progress
      isIndeterminate
      colorScheme="green"
      size="sm"
    />
  )
}
