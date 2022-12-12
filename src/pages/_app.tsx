import type { AppProps } from 'next/app'
import '../main.css'
import ThemeProvider, { createEmotionCache } from 'theme'
import { CacheProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

const clientSideEmotionCache = createEmotionCache()

export default function App({
  Component,
  pageProps,
  //@ts-ignore
  emotionCache = clientSideEmotionCache,
}: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
