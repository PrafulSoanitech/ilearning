import { LinkProps } from '@mui/material'

export interface LogoProps extends LinkProps {
  imgUrl: string
  alt?: string
  link?: string
  logoHeight?: number
  logoWidth?: number
  size?: 'small' | 'medium' | 'large'
  onClick?: LinkProps['onClick']
}
