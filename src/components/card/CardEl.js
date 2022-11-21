import React from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material'

const CardEl = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: 'rgba(0,0,0,0.1) 0px 4px 12px', borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />}
          title={
            <Typography component="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h5"
          variant="p"
          color="text.primary"
          fontWeight="600"
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: 'none', width: '100%' }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              width: '100%',
              margin: '6px 0',
              fontWeight: 'bold',
            }}
          >
            Read more
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardEl
