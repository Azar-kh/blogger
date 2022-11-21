import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POST_COMMENTS } from '../../graphql/queries'
import Loader from '../Loader'
import { Avatar, Grid, Typography, Box } from '@mui/material'

const Comments = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  })

  if (loading) return <Loader />
  if (errors) return <h3>Error...</h3>

  console.log(data)

  return (
    <Grid
      container
      sx={{
        boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px',
        borderRadius: 4,
        py: 1,
        mt: 8,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          Comments
        </Typography>
        {data.comments.map((comment) => (
          <Grid
            item
            xs={12}
            key={comment.id}
            m={2}
            p={2}
            border="1px silver solid"
            borderRadius={1}
          >
            <Box component="div" display="flex" alignItems="center">
              <Avatar>{comment.name[0].toUpperCase()}</Avatar>
              <Typography component="span" variant="p" fontWeight={700} ml={1}>
                {comment.name}
              </Typography>
            </Box>
            <Typography component="p" variant="p" mt={2}>
              {comment.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Comments
