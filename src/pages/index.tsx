/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from 'components/Layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import { projects } from 'components/constants'
import Card from '@mui/material/Card'
import DataObjectIcon from '@mui/icons-material/DataObject'
import CodeIcon from '@mui/icons-material/Code'
import Slider from 'react-slick'

export default function IndexPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 1000,
  }

  return (
    <Layout>
      <Box sx={{ padding: '0 50px' }}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box sx={{ paddingLeft: '50px', marginTop: '50px' }}>
              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontSize: '25px',
                  fontWeight: '700',
                  lineHeight: '30px',
                  marginBottom: '40px',
                }}
              >
                Hi there 👋, I am
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#70FF00',
                  fontSize: '45px',
                  fontWeight: '700',
                  lineHeight: '40px',
                  marginBottom: '40px',
                }}
              >
                {' < '} Adetunji <br />
                Oluwaferanmi {' />'}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'white',
                  fontSize: '40px',
                  fontWeight: '700',
                  lineHeight: '30px',
                  marginBottom: '60px',
                }}
              >
                Fullstack Engineer
              </Typography>

              <Stack direction="row" sx={{ alignItems: 'center' }}>
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#828282',
                      fontSize: '44px',
                      marginRight: '10px',
                    }}
                  >
                    {Number(new Date().getFullYear()) - 2018}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#828282',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Years of
                    <br /> Experience
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  sx={{ alignItems: 'center', marginLeft: '40px' }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#828282',
                      fontSize: '44px',
                      marginRight: '10px',
                    }}
                  >
                    {projects.length}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#828282',
                      fontSize: '14px',
                      textTransform: 'uppercase',
                    }}
                  >
                    projects <br />
                    completed
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          <Grid item md={6}>
            <img src="/image.svg" alt="Adetunji Oluwaferanmi" className="img" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          paddingLeft: '100px',
          marginTop: '50px',
          marginLeft: '50px',
          background: '#161616',
          width: '100%',
          padding: '40px 100px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#70FF00',
            fontSize: '35px',
            fontWeight: '700',
            lineHeight: '40px',
          }}
        >
          aboutMe ()
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={7}>
            <Box sx={{ marginTop: '30px', width: '70%' }}>
              <Typography
                sx={{
                  color: '#F2F2F2',
                  fontSize: '16px',
                  lineHeight: '30px',
                }}
              >
                I am a Nigerian based Software Engineer with about{' '}
                {Number(new Date().getFullYear()) - 2018} years of experience
                managing all aspects of the development process for small to
                medium-sized companies.
                <br />
                Most of my experience has been in E-commerce and Fintech, but I
                also have some SaaS experience working on B2B and B2C projects.
                <br />
                I'm passionate about creating long-term value for the customer,
                especially in the Fintech space.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5}>
            <Card
              sx={{
                background: '#4F4F4F',
                boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)',
                borderRadius: '6px',
                padding: '20px 40px',
              }}
            >
              <Stack
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '25px',
                      marginBottom: '20px',
                    }}
                  >
                    Fullstack Developer
                  </Typography>
                  <Typography
                    sx={{
                      color: '#70FF00',
                      fontSize: '16px',
                      textDecoration: 'underline',
                    }}
                  >
                    Projects
                  </Typography>
                </Box>

                <CodeIcon sx={{ color: '#70FF00', fontSize: '60px' }} />
              </Stack>
            </Card>

            <Card
              sx={{
                background: '#4F4F4F',
                boxShadow: '0px 4px 10px 5px rgba(0, 0, 0, 0.25)',
                borderRadius: '6px',
                padding: '20px 40px',
                marginTop: '20px',
              }}
            >
              <Stack
                direction="row"
                sx={{ alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '25px',
                      marginBottom: '20px',
                    }}
                  >
                    Freelancer
                  </Typography>
                  <Typography
                    sx={{
                      color: '#70FF00',
                      fontSize: '16px',
                      textDecoration: 'underline',
                    }}
                  >
                    Hire me!
                  </Typography>
                </Box>

                <DataObjectIcon sx={{ color: '#70FF00', fontSize: '60px' }} />
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          width: '100%',
          marginTop: '50px',
          padding: '40px 100px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#70FF00',
            fontSize: '35px',
            fontWeight: '700',
            lineHeight: '40px',
            marginBottom: '40px',
          }}
        >
          techStack ()
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/js.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Javascript
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/ts.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Typescript
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/html.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                HTML
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/css.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                CSS
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/react.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                React
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/redux.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Redux
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/next.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Next JS
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/node.svg" alt="Javascript" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Node JS
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/laravel.svg" alt="Laravel" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Laravel
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/solidity.svg" alt="Solididty" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Solididty
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/graphql.svg" alt="GraphQL" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                GraphQL
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/go.svg" alt="Go" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Go
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/aws.svg" alt="AWS" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                AWS
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/gcp.svg" alt="GCP" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                GCP
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/do.svg" alt="Digital Ocean" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Digital Ocean
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/firebase.svg" alt="Firebase" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Firebase
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/mongodb.svg" alt="Mongo DB" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                Mongo DB
              </Typography>
            </Box>
          </Grid>

          <Grid item md={2}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/postgresql.svg" alt="PostgreSQL" className="stack" />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginTop: '10px',
                }}
              >
                PostgreSQL
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          paddingLeft: '100px',
          marginTop: '50px',
          marginLeft: '50px',
          background: '#161616',
          width: '100%',
          padding: '40px 100px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#70FF00',
            fontSize: '35px',
            fontWeight: '700',
            lineHeight: '40px',
            marginBottom: '40px',
          }}
        >
          projects ()
        </Typography>

        <Box>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index}>
                <Typography sx={{ color: 'white' }}>{project.title}</Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Layout>
  )
}
