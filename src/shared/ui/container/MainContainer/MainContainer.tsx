import { Container } from '@chakra-ui/react'
import { MainContainerProps } from './MainContainer.interface'

export const MainContainer = (props: MainContainerProps) => {
  return (
    <Container
      maxW="1500px"
      {...props}
    />
  )
}
