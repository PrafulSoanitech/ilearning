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
    '& .login': {
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

export const ResetPassword = () => {
  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        Reset Password
      </Typography>
      <TextField type="password" placeholder="New Password" fullWidth />
      <TextField type="password" placeholder="Confirm New Password" fullWidth />
      <Button fullWidth>Reset Password</Button>
      <ForgotPassordLink href={'/'} className="login">
        Login?
      </ForgotPassordLink>
    </StyledBox>
  )
}

export default ResetPassword
