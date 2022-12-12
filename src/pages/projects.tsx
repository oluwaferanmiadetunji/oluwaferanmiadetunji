import Layout from 'components/Layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Link from 'next/link'

const PROJECTS = [
  {
    title: 'Stockify',
    description:
      'A Platform to help you take stock of your products, track and manage invoices, customers, payments and many more.',
    image: '/stockify.png',
    url: 'https://stockify-client.vercel.app/',
    time: 'October 2022 - December 2022',
  },
  {
    title: 'Speakspire',
    description:
      "We are a community of speakers who aren't just interested in showing up at events but showing up in people's lives to inspire them to be better.",
    image: '/speakspire.png',
    url: 'https://www.speakspire.com/',
    time: 'February 2021 - January 2022',
  },
]

export default function Projects() {
  return (
    <Layout>
      <Box
        sx={{
          height: 'calc(100vh - 180px)',
          width: '100%',
        }}
      >
        <Container maxWidth="md" sx={{ marginTop: '50px' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: '700' }}>
            Projects
          </Typography>

          <Box
            sx={{
              marginTop: '30px',
              height: '70vh',
              overflow: 'scroll',
              borderRadius: '10px',
            }}
          >
            {PROJECTS.map((project, index) => (
              <Card
                sx={{
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  marginBottom: '20px',
                }}
                key={index}
              >
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.description}
                  sx={{ borderRadius: '10px' }}
                />

                <CardContent>
                  <Button
                    size="small"
                    component={Link}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      textTransform: 'unset',
                      color: 'rgb(16, 185, 129)',
                      fontSize: 14,
                      '&:hover': {
                        color: 'white',
                      },
                    }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {project.title}
                    </Typography>
                  </Button>

                  <Typography
                    variant="body1"
                    sx={{ color: 'white', marginTop: '10px' }}
                  >
                    {project.description}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{ color: 'rgb(160, 174, 192)', marginTop: '50px' }}
                  >
                    {project.time}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}
