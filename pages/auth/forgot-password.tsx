import { ForgotPassword } from '@components/organisms'
import { Container } from '@mui/material'
import { styled } from '@mui/system'
import type { NextPage } from 'next'

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  }
})

const Page: NextPage = () => {
  return (
    <div>
      <StyledContainer>
        <ForgotPassword />
      </StyledContainer>
    </div>
  )
}

export default Page
