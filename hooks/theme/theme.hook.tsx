import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles'
import { Theme } from '@mui/material/styles/createTheme'

// Default theme config if there is no theme available
import { getDefaultThemeConfig } from './defaultTheme'
// import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

// Create React context
const ThemeContext = React.createContext<Theme>(getDefaultThemeConfig())

// Initialize Custom theme provider
export const CustomThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}): any => {
  const themeOption: Theme = responsiveFontSizes(getDefaultThemeConfig())
  themeOption.typography.h1 = {
    ...themeOption.typography.h1,
    fontSize: '6rem', // 96px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '3.5rem',
    },
  }
  themeOption.typography.h2 = {
    ...themeOption.typography.h2,
    fontSize: '3.75rem', // 60px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '2.375rem',
    },
  }
  themeOption.typography.h3 = {
    ...themeOption.typography.h3,
    fontSize: '3rem', // 48px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '2.25rem',
    },
  }
  themeOption.typography.h4 = {
    ...themeOption.typography.h4,
    fontSize: '2.25rem', // 36px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  }
  themeOption.typography.h5 = {
    ...themeOption.typography.h5,
    fontSize: '1.875rem', // 30px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1.75rem',
    },
  }
  themeOption.typography.h6 = {
    ...themeOption.typography.h6,
    fontSize: '1.625rem', // 26px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  }
  themeOption.typography.subtitle1 = {
    ...themeOption.typography.subtitle1,
    fontSize: '1.5rem', // 24px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1.375rem',
    },
  }
  themeOption.typography.subtitle2 = {
    ...themeOption.typography.subtitle2,
    fontSize: '1.375rem', // 22px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1.25rem',
    },
  }
  themeOption.typography.body1 = {
    ...themeOption.typography.body1,
    fontSize: '1.125rem', // 18px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1.125rem',
    },
  }
  themeOption.typography.body2 = {
    ...themeOption.typography.body2,
    fontSize: '1rem', // 16px
    [themeOption.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
  }

  return (
    <ThemeContext.Provider value={themeOption}>
      <CssBaseline />
      <ThemeProvider theme={themeOption}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

// Custom theme provider to be used inside the project
export const SmartGKThemeProvider = React.memo(CustomThemeProvider)

// Custom theme hook
export const useTheme = (): Theme => React.useContext(ThemeContext)
// Create global css - This can be used to reset the html default global rules.
