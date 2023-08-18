import { DrawerProps as MuiDrawerProps } from '@mui/material'
import { ReactElement } from 'react'

export interface DrawerProps extends MuiDrawerProps {
  open: boolean
  children?: ReactElement
  toggleDrawer: any //MuiDrawerProps['onClose']
}
