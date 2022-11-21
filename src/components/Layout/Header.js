import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            Health Blogger
          </Typography>
          <HomeIcon onClick={() => navigate('/')} sx={{ cursor: 'pointer' }} />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
