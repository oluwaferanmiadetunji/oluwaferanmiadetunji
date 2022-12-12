import Layout from 'components/Layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import EmailIcon from '@mui/icons-material/Email'
import Link from 'next/link'
import FileOpenIcon from '@mui/icons-material/FileOpen'

export default function ErrorPage() {
  return (
    <Layout>
      <Box
        sx={{
          height: 'calc(100vh - 180px)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ color: 'white' }}>
            Hi there 👋, I am Adetunji Oluwaferanmi and I serve other humans
            through my skills as a software developer.
          </Typography>

          <Button
            sx={{
              marginTop: '30px',
              textTransform: 'unset',
              color: 'rgb(16, 185, 129)',
              fontSize: 18,
              '&:hover': {
                color: 'white',
              },
            }}
            component={Link}
            href="/projects"
          >
            Projects
          </Button>

          <Stack
            sx={{
              marginTop: '20px',
              textAlign: 'center',
              justifyContent: 'center',
            }}
            spacing={2}
            direction="row"
          >
            <a
              href="https://github.com/oluwaferanmiadetunji"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                sx={{
                  color: 'white',
                  '&:hover': { color: 'rgb(16, 185, 129)' },
                }}
                fontSize="large"
              />
            </a>

            <a href="mailto:oluwaferanmiadetunji@gmail.com">
              <EmailIcon
                sx={{
                  color: 'white',
                  '&:hover': { color: 'rgb(16, 185, 129)' },
                }}
                fontSize="large"
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1-Udn8DDpuVyY_4i3DbjbYl_4vEYQGCvH/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <FileOpenIcon
                sx={{
                  color: 'white',
                  '&:hover': { color: 'rgb(16, 185, 129)' },
                }}
                fontSize="large"
              />
            </a>
          </Stack>
        </Box>
      </Box>
    </Layout>
  )
}
