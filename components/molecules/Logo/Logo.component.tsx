import { Link } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { LogoProps } from './Logo.type'

const logoSize = {
  small: 50,
  medium: 80,
  large: 100,
}

export const Logo = ({
  imgUrl,
  link = '/',
  logoWidth = logoSize.medium,
  logoHeight = logoSize.medium,
  size = 'medium',
  onClick,
  alt,
  ...props
}: LogoProps) => {
  return (
    <Link href={link} target="_self" onClick={onClick} {...props}>
      <Image
        src={imgUrl}
        alt={alt || 'Smart GK Logo'}
        width={logoWidth}
        height={logoHeight}
      />
    </Link>
  )
}

export default Logo
