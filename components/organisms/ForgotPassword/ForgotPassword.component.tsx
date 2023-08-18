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
    height: '400px',
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

const LoginLink = styled(Link)(({ theme }) => {
  return {
    marginBottom: '20px',
  }
})
export const ForgotPassword = () => {
  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        ForgotPassword
      </Typography>

      <Typography variant="body2" fontSize={'.8rem'} textAlign="left" mb="20px">
        Enter the email address associated with your account and we'll send you
        a link to reset your password.
      </Typography>
      <TextField type="email" placeholder="Email" fullWidth />
      <Button fullWidth>Continue</Button>

      <LoginLink href={'/'} className="forgot-password">
        Go to login page
      </LoginLink>
    </StyledBox>
  )
}

export default ForgotPassword
