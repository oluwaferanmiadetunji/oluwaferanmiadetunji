import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Head from 'next/head'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

interface LayoutTypes {
  children: ReactNode
}

const Layout = ({ children }: LayoutTypes) => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'rgb(11, 15, 25)',
      }}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Adetunji Oluwaferanmi | Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Adetunji Oluwaferanmi is a software engineer with the aim of making a lot of money through writing quality code"
        />
        <meta
          name="keywords"
          content="frontend%20developer frontend%20engineer backend%20developer backend%20engineer react solidity Adetunji%20Oluwaferanmi node javascript go software%20engineer software%20developer block%20chain block%20chain%developer css html web%20developer"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta
          name="og:title"
          property="og:title"
          content="Adetunji Oluwaferanmi is a software engineer with the aim of making a lot of money through writing quality code"
        />
        <meta
          property="og:url"
          content="https://www.oluwaferanmiadetunji.me/"
        />
        <meta property="og:site_name" content="AdetunjiOluwaferanmi" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Adetunji Oluwaferanmi is a software engineer with the aim of making a lot of money through writing quality code"
        />
        <meta
          name="twitter:title"
          content="Adetunji Oluwaferanmi | Software Engineer"
        />
        <meta name="twitter:site" content="@oluwaferanmi_ad" />
        <meta name="twitter:domain" content="AdetunjiOluwaferanmi" />
        <meta name="twitter:creator" content="@oluwaferanmi_ad" />
        <meta
          name="twitter:url"
          content="https://www.oluwaferanmiadetunji.me/"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/img.jpg" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/img.jpg" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/img.jpg" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow"></meta>
      </Head>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              background: 'rgb(11, 15, 25)',
            }}
          >
            <Box sx={{ width: '100%', padding: '10px 15%', marginTop: '15px' }}>
              <Link
                href="/"
                style={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    flexGrow: 1,
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  Adetunji Oluwaferanmi
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {children}
    </Container>
  )
}

export default Layout
