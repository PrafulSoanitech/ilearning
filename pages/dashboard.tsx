import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    display: 'flex',
    flexWrap: 'wrap',
  }
})

const Dashboard = () => {
  const auth = useSelector((state: RootState) => state.auth)
  const { isAuthenticated } = auth

  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      // router.push('/')
    }
  }, [isAuthenticated])

  return <>{isAuthenticated ? <StyledContainer></StyledContainer> : <></>}</>
}

export default Dashboard
