import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles'

export default function ThemeProvider({ children }: any) {
  const themeOptions: any = useMemo(
    () => ({
      shape: { borderRadius: 8 },
    }),
    [],
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
