import React, { useState } from 'react'
import Link from 'next/link'
import { Button, TextField } from '@components/atoms'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useLoginUserMutation } from 'redux/services/authApi'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { loginSuccess } from 'redux/features/authSlice'
import { setToken, storeUserInfo } from 'common/helpers/dataHelper'

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

const StyledErrorTypography = styled(Typography)(({ theme }) => {
  return {
    color: theme.palette.error.main,
  }
})

const ForgotPassordLink = styled(Link)(({ theme }) => {
  return {
    marginBottom: '20px',
  }
})

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  const dispatch = useDispatch()

  const [loginUser, { isLoading, error }] = useLoginUserMutation()

  const handleLogin = async () => {
    // @ts-ignore
    const { data, error } = await loginUser({ email, password })
    // @ts-ignore
    let role = 'system_admin'
    if (data) {
      const userData = {
        user: {
          id: data?.user?.id,
          username: data?.user?.name,
          role: role, //data?.user?.role,
        },
        token: data?.token,
      }

      setToken(data?.token)
      storeUserInfo(userData.user)
      dispatch(loginSuccess(userData))

      // if (role === 'system_admin') {
      //   router.push('/system/admin')
      //   console.log('userData111', userData)
      // } else if (role === 'super_admin') {
      //   console.log('userData2', userData)

      //   router.push('/dashboard')
      // } else if (role === 'publisher') {
      //   console.log('userDat4', userData)

      //   router.push('/dashboard')
      // }
      toast.success('Login Successful')
    }
  }

  return (
    <StyledBox>
      <Typography variant="h4" fontWeight="bold" mb="40px">
        Login
      </Typography>
      <TextField
        type="email"
        placeholder="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        placeholder="Password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        //@ts-ignore
        error?.data?.error && (
          <StyledErrorTypography variant="body2">
            {
              //@ts-ignore
              error?.data?.error
            }
          </StyledErrorTypography>
        )
      }
      <ForgotPassordLink
        href={'auth/forgot-password'}
        className="forgot-password"
      >
        forgot password?
      </ForgotPassordLink>
      <Button loading={isLoading} onClick={handleLogin} fullWidth>
        Login
      </Button>
    </StyledBox>
  )
}

export default Login
