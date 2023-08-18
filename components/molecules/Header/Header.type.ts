import { LogoProps } from '../Logo'
import { NavListProps } from '../NavList'

export interface HeaderProps {
  logo?: LogoProps
  navItems?: NavListProps
  scrolled?: boolean | string
}
