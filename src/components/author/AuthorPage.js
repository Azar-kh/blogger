import { useQuery } from '@apollo/client'
import { Avatar, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_AUTHOR_PAGE } from '../../graphql/queries'
import CardEl from '../card/CardEl'
import Loader from '../Loader'

const AuthorPage = () => {
  const { slug } = useParams()

  const { loading, data, errors } = useQuery(GET_AUTHOR_PAGE, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (errors) return <h3>Error...</h3>

  const {
    author: { name, field, avatar, description, posts },
  } = data

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 200, height: 200 }} />
          <Typography component="h3" variant="h5" fontWeight={700} mt={4}>
            {name}
          </Typography>
          <Typography
            component="p"
            variant="h5"
            fontWeight={700}
            color="text.secondary"
            mt={2}
          >
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: description.html }}></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            {name} Blogs
          </Typography>
          <Grid container mt={2} spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AuthorPage
