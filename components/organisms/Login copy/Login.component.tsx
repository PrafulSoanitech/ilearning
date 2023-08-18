import React from 'react'
import Link from 'next/link'
import { Button, TextField } from '@components/atoms'
import { Box, styled, Typography } from '@mui/material'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    height: '600px',
    padding: '20px',
    rowGap: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 65px 0px rgba(0,0,0,0.1)',
    '& .forgot-password': {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }
})

const ForgotPassordLink = styled(Link)(({ theme }) => {
  return {
    marginBottom: '20px',
  }
})
export const Login = () => {
  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        Login
      </Typography>
      <TextField type="email" placeholder="Email" fullWidth />
      <TextField type="password" placeholder="Password" fullWidth />
      <ForgotPassordLink href={'auth/forgot-password'} className="forgot-password">
        forgot password?
      </ForgotPassordLink>
      <Button fullWidth>Login</Button>
    </StyledBox>
  )
}

export default Login
