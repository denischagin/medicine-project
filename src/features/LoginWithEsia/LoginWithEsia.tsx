import { Button } from '@chakra-ui/react'
import css from './LoginWithEsia.module.scss'

export const LoginWithEsia = () => {
  return (
    <Button
      className={css.esia_sign_in}
      background="whiteAlpha.900"
    >
      Войти через ЕСИА
    </Button>
  )
}
