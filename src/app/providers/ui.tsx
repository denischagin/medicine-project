import { ReactNode } from 'react'
import { queryClient } from '../config'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/entities/auth'

export interface ProvidersProps {
  children: ReactNode
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ChakraProvider>
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
