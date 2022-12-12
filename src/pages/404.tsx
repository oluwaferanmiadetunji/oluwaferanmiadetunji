/* eslint-disable react/no-unescaped-entities */
import Layout from 'components/Layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

export default function Home() {
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
          <Typography variant="body1" sx={{ color: 'white', fontSize: '200px' }}>
            404
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
            href="/"
          >
            Go Home
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}
