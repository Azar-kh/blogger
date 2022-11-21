import React from 'react'
import { useQuery } from '@apollo/client'
import { useNavigate, useParams } from 'react-router-dom'
import { GET_POST_INFO } from '../../graphql/queries'
import Loader from '../Loader'
import { Box, Container } from '@mui/system'
import { Avatar, Grid, Typography } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CommentForm from '../comment/CommentForm'
import Comments from '../comment/Comments'

const BlogPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const { loading, data, errors } = useQuery(GET_POST_INFO, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (errors) return <h3>Error...</h3>

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} mt={4} display="flex" alignItems="center">
          <ArrowBackRoundedIcon
            onClick={() => navigate(-1)}
            sx={{ cursor: 'pointer' }}
          />
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
            ml={4}
          >
            {data.post.title}
          </Typography>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            width="100%"
            alt={data.post.slug}
            style={{ borderRadius: 15 }}
          />
        </Grid>

        <Grid item xs={12} mt={7} display="flex" alignItems="center">
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: 80, height: 80, marginLeft: 2 }}
          />
          <Box component="div" ml={2}>
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} mt={5}>
          <div
            dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          ></div>
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default BlogPage
