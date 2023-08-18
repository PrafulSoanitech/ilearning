import React, { FC } from 'react'
import { LoadingButton as MuiButton } from '@mui/lab'
import { ButtonProps } from './Button.type'
import { styled } from '@mui/material'

const StyledButton = styled(MuiButton)(() => {
  return {
    textTransform: 'none',
  }
})

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  startIcon,
  endIcon,
  loading,
  ...rest
}) => {
  return (
    <StyledButton
      disableRipple
      variant={variant?.toLowerCase() as 'text' | 'outlined' | 'contained'}
      loading={loading}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      color={'primary'}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}

export default Button
