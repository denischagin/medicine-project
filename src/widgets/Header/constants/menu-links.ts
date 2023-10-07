import { paths } from '@/shared/constants'

export interface menuLink {
  path: string
  text: string
}

export const menuLinks = [
  {
    title: 'Авторизоваться',
    path: paths.login,
  },
  {
    title: 'Зарегистрироваться',
    path: paths.register,
  },
  {
    title: 'О нас',
    path: '#',
  },
]
