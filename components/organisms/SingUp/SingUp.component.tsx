import React from 'react'
import { Button, TextField } from '@components/atoms'
import { Box, styled, Typography } from '@mui/material'
import Link from 'next/link'
import { SignUpProps } from './SignUp.type'
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'

const StyledBox = styled(Box)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
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

export const SignUp = ({ loginHandler }: SignUpProps) => {
  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        Smart GK SignUp
      </Typography>
      <TextField type="email" placeholder="Email" fullWidth />
      <TextField type="password" placeholder="Create Password" fullWidth />
      <TextField type="password" placeholder="Confirm Password" fullWidth />

      <Button fullWidth>SignUp</Button>
      <Box>
        <Typography display={'inline-block'}>
          Already have an account?
        </Typography>
        <Button variant="text" size="small" onClick={loginHandler}>
          Login
        </Button>
      </Box>
      {/* <Button fullWidth startIcon={<FacebookOutlinedIcon />}>
        SignUp with facebook
      </Button> */}
    </StyledBox>
  )
}

export default SignUp
