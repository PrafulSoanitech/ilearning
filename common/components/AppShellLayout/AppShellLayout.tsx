import { Header } from '@components/molecules'
import { Box } from '@mui/material'
import { useScroll } from 'hooks'
import { NextPage } from 'next'
import React from 'react'

export const AppShellLayout: NextPage<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrolled = useScroll()
  return (
    <>
      <Box position={'sticky'} top="0" zIndex={100}>
        <Header scrolled={scrolled ? true : false} />
      </Box>
      {children}
    </>
  )
}

export default AppShellLayout
