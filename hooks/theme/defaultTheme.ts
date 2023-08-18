import { createTheme, Theme, ThemeOptions } from '@mui/material/styles'
import { DefaultTheme } from '@mui/system'

const themeColors = {
  primary: '#08c177',
  secondary: '#134c5d',
  tertiray: '#276ec0',
  success: '#57CA22',
  warning: '#FFA319',
  error: '#FF1943',
  info: '#33C2FF',
  black: '#000',
  white: '#ffffff',
  primaryAlt: '#000C57',
}

export const smartGKDefaultThemeSchema: ThemeOptions = {
  palette: {
    common: {
      black: themeColors.black,
      white: themeColors.white,
    },
    text: {
      primary: 'rgba(27, 26, 30, 0.87)',
      secondary: 'rgba(27, 26, 30, 0.6)',
      disabled: 'rgba(27, 26, 30, 0.38)',
    },
    primary: {
      main: themeColors.primary,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: themeColors.secondary,
      contrastText: '#FFFFFF',
    },
    error: {
      main: themeColors.error,
    },
    background: {
      paper: '#FFFFFF',
      default: '#FAFAFA',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 400,
      fontSize: '6rem', // 96px
    },
    h2: {
      fontWeight: 400,
      fontSize: '3.75rem', // 60px
    },
    h3: {
      fontWeight: 400,
      fontSize: '3rem', // 48px
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.25rem', // 36px
      lineHeight: 1,
    },
    h5: {
      fontWeight: 400,
      fontSize: '1.875rem', // 30px
      lineHeight: 1,
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.625rem', // 26px
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.5rem', // 24px
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '1.375rem', // 22px
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.33,
    },
    body2: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: '0.875rem', // 14px
            padding: '8.5px 1rem 7px',
            letterSpacing: '0.05em',
            fontWeight: '700',
            // color: themeColors.white,
          },
        },
        {
          props: { size: 'medium' },
          style: {
            fontSize: '1rem', // 16px
            padding: '11px 1.5rem 9px',
            letterSpacing: '0.05em',
            fontWeight: '500',
            // color: themeColors.white,
          },
        },
        {
          props: { size: 'large' },
          style: {
            fontSize: '1.125rem', // 18px
            padding: '13px 2rem 11.5px',
            letterSpacing: '0.05em',
            fontWeight: '700',
            // color: themeColors.white,
          },
        },
      ],
    },
  },
  spacing: (factor: number) => `${0.5 * factor}rem`,
}

export const getDefaultThemeConfig = (theme?: DefaultTheme): Theme =>
  createTheme({ ...smartGKDefaultThemeSchema, ...theme })
