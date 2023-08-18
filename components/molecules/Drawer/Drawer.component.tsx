import React from 'react'
import { DrawerProps } from './Drawer.type'
import MuiDrawer from '@mui/material/Drawer'

export const Drawer = ({
  open = false,
  children,
  toggleDrawer,
}: DrawerProps) => {
  return (
    <MuiDrawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
      {children}
    </MuiDrawer>
  )
}

export default Drawer
