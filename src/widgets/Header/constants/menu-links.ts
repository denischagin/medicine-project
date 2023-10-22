import { paths } from '@/shared/constants'

export interface IMenuLink {
  path: string
  title: string
}

export const menuLinks: IMenuLink[] = [
  {
    title: 'Авторизоваться',
    path: paths.login,
  },
  {
    title: 'Зарегистрироваться',
    path: paths.register,
  },
  {
    title: "Больницы",
    path: paths.hospitals,
  },
  {
    title: 'О нас',
    path: '#',
  },
] 
