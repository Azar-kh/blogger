import React from 'react'
import { useQuery } from '@apollo/client'
import { Avatar, Grid, Typography, Divider } from '@mui/material'
import { GET_AUTHORS_INFO } from '../../graphql/queries'
import { Link } from 'react-router-dom'
import Loader from '../Loader'

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO)

  if (loading) return <Loader />
  if (errors) return <h3>Error...</h3>
  console.log(data)

  const { authors } = data
  console.log(authors)

  return (
    <Grid
      container
      sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }}
    >
      {authors.map((author, index) => (
        <React.Fragment key={author.id}>
          <Grid item xs={12} padding={2}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <Avatar src={author.avatar.url} sx={{ marginRight: 2 }} />
              <Typography component="p" variant="p" color="text.primary">
                {author.name}
              </Typography>
            </Link>
          </Grid>
          {index !== authors.length - 1 && (
            <Grid item xs={12}>
              <Divider variant="middle" />
            </Grid>
          )}
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default Authors
