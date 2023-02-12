import { ReactNode } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Head from 'next/head'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { links } from 'components/constants'

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
        height: '100%',
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
        <meta property="og:url" content={links.URL} />
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
        <meta name="twitter:url" content={links.URL} />
        <link rel="apple-touch-icon" sizes="180x180" href="/img.jpg" />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/img.jpg" />
        <link rel="icon" type="image/jpg" sizes="16x16" href="/img.jpg" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all,follow"></meta>
      </Head>

      <Box>
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar>
            <Box
              sx={{
                width: '100%',
                padding: '10px 50px',
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
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
                    color: '#828282',
                  }}
                >
                  Adetunji <span style={{ color: 'white' }}>Oluwaferanmi</span>
                </Typography>
              </Link>

              <Stack direction="row">
                <Button sx={styles.textLinks}>About</Button>
                <Button sx={styles.textLinks}>Tech Stack</Button>
                <Button sx={styles.textLinks}>Projects</Button>
              </Stack>

              <Stack direction="row">
                <Button
                  sx={styles.links}
                  startIcon={<LinkedInIcon />}
                  component={Link}
                  href={links.LINKEDIN}
                  target="_blank"
                >
                  Linkedin
                </Button>
                <Button
                  sx={styles.links}
                  startIcon={<GitHubIcon />}
                  component={Link}
                  href={links.GITHB}
                  target="_blank"
                >
                  Githhub
                </Button>
                <Button
                  sx={styles.links}
                  startIcon={<EmailIcon />}
                  component={Link}
                  href={links.EMAIL}
                  target="_blank"
                >
                  Contact Me
                </Button>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={styles.children}>{children}</Box>
    </Container>
  )
}

const styles = {
  children: {
    marginTop: '100px',
    paddingBottom: '100px',
  },
  links: {
    textTransform: 'none',
    color: 'white',
    minWidth: '100px',
    height: '40px',
    fontSize: '16px',
    margin: '0 5px',
    fontWeight: '700',
    lineHeight: '30px',
    padding: '3px 20px',
    border: '1px solid transparent',
    '&:hover': {
      color: '#70FF00',
      border: '1px solid #70FF00',
      background: 'black',
    },
  },
  textLinks: {
    color: 'white',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '30px',
    textTransform: 'none',
    '&:hover': {
      color: '#70FF00',
      background: 'transparent',
    },
  },
}

export default Layout
