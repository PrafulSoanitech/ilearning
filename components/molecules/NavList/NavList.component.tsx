import React from 'react'
import {
  Box,
  IconButton,
  List,
  MenuItem,
  styled,
  Typography,
} from '@mui/material'
import Cookies from 'js-cookie'
import { Button } from '@components/atoms'
import { NavListProps } from './NavList.type'
import { useMediaQuery } from 'hooks/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { Drawer } from '../Drawer'
import { RootState } from 'redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from 'redux/features/authSlice'
import {
  removeToken,
  removeUserInfoFromStorage,
} from 'common/helpers/dataHelper'

const StyledBox = styled(Box)(() => {
  return {
    '& .nav-link': {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '& svg': {
      width: '45px',
      height: '45px',
    },
  }
})

const MobileMenuBox = styled(Box)(() => {
  return {
    '& .close-icon svg': {
      width: '45px',
      height: '45px',
      color: 'red',
    },

    '& .nav-link': {
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  }
})

export const NavList = ({ navItems }: NavListProps) => {
  const [open, setOpen] = React.useState(false)

  const { isMobile } = useMediaQuery()
  const dispatch = useDispatch()

  const auth = useSelector((state: RootState) => state.auth)
  const { isAuthenticated } = auth

  const logoutHandler = () => {
    dispatch(logout())
    removeToken()
    removeUserInfoFromStorage()
  }

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  const getMobileMenus = () => {
    return (
      <MobileMenuBox
        sx={{ width: '350px', padding: '20px' }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
      >
        <Box>
          <IconButton
            className="close-icon"
            onClick={() => setOpen((state) => !state)}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        {isAuthenticated ? (
          <List>
            {navItems &&
              navItems.map((item) => (
                <MenuItem
                  key={item.id}
                  disableRipple
                  sx={{ margin: '20px 0', padding: '20px' }}
                >
                  <Typography
                    component="a"
                    href={item?.link}
                    textAlign="center"
                    className="nav-link"
                  >
                    {item?.label}
                  </Typography>
                </MenuItem>
              ))}
            <Button
              variant="contained"
              sx={{ borderRadius: '20px' }}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </List>
        ) : null}
      </MobileMenuBox>
    )
  }

  if (!isMobile) {
    return (
      <StyledBox display="flex" columnGap={'10px'}>
        {isAuthenticated ? (
          <>
            {navItems &&
              navItems.map((item) => (
                <MenuItem key={item.id} disableRipple>
                  <Typography
                    component="a"
                    href={item?.link}
                    textAlign="center"
                    className="nav-link"
                  >
                    {item?.label}
                  </Typography>
                </MenuItem>
              ))}
            <Button
              variant="contained"
              sx={{ borderRadius: '20px' }}
              onClick={logoutHandler}
            >
              Logout
            </Button>
          </>
        ) : null}
      </StyledBox>
    )
  }

  return (
    <StyledBox>
      <IconButton
        className="open-sidebar"
        onClick={() => {
          setOpen((state) => !state)
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} toggleDrawer={toggleDrawer}>
        {getMobileMenus()}
      </Drawer>
    </StyledBox>
  )
}

export default NavList
