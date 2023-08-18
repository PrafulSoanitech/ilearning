/* 
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px 
*/

import { useMediaQuery as useMuiMediaQuery, useTheme } from '@mui/material'

export const useMediaQuery = () => {
  const theme = useTheme()
  const isSmallMobile = useMuiMediaQuery(theme.breakpoints.down('sm'))
  const isLargeMobile = useMuiMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile = useMuiMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMuiMediaQuery(theme.breakpoints.between('md', 'lg'))
  const isTabletAndDesktop = useMuiMediaQuery(theme.breakpoints.up('md'))
  const isDesktop = useMuiMediaQuery(theme.breakpoints.up('lg'))
  const isLargeDesktop = useMuiMediaQuery(theme.breakpoints.up('xl'))

  return {
    isMobile,
    isSmallMobile,
    isLargeMobile,
    isTablet,
    isTabletAndDesktop,
    isDesktop,
    isLargeDesktop,
  }
}
