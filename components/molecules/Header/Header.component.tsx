import React, { useEffect, useState } from 'react'
import { Box, Container, styled } from '@mui/material'
import { Logo } from '../Logo'
import { HeaderProps } from './Header.type'
import { NavList } from '../NavList'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'

const StyledHeaderBox = styled(({ scrolled, ...rest }: any) => (
  <Box {...rest} />
))(({ scrolled, ...rest }) => {
  const { theme } = rest
  return {
    height: '90px',
    backgroundColor: '#fff',
    boxShadow: scrolled ? 'rgba(0, 0, 0, 0.25) 0px 0.1px 10px' : 'none',
    padding: '0 20px',
    zIndex: '100',
  }
})
const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Header = ({ scrolled }: HeaderProps) => {
  const authInfo = useSelector((state: RootState) => state.auth)

  const [navItems, setNavItems] = useState<any>()

  useEffect(() => {
    console.log('navItem', authInfo)
    // let navInfo: any
    // if (authInfo.user.role === 'system_admin') {
    //   navInfo = [
    //     { id: '1', label: 'Invite Publisher', link: '/system/invite/publicer' },
    //     { id: '2', label: 'List Books', link: '/system/book' },
    //   ]
    // } else if (authInfo.role === 'super_admin') {
    //   navInfo = [
    //     { id: '1', label: 'Grade List', link: '/grades' },
    //     { id: '2', label: 'Notice', link: '/notice' },
    //   ]
    // } else if (authInfo.role === 'publisher') {
    //   navInfo = [
    //     { id: '1', label: 'Grade List', link: '/grades' },
    //     { id: '2', label: 'Notice', link: '/notice' },
    //   ]
    // }

    // setNavItems(() => {
    //   return [...navInfo]
    // })
  }, [authInfo])

  return (
    <StyledHeaderBox scrolled={scrolled}>
      <nav>
        <StyledContainer maxWidth="xl" disableGutters>
          <Logo imgUrl="/vercel.svg" logoHeight={80} logoWidth={150} />

          <NavList navItems={navItems} />
        </StyledContainer>
      </nav>
    </StyledHeaderBox>
  )
}

export default Header
