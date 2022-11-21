import { Route, Routes } from 'react-router-dom'
import AuthorPage from './components/author/AuthorPage'
import BlogPage from './components/blog/BlogPage'
import HomePage from './components/home/HomePage'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  )
}

export default App
