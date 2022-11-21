import { gql } from '@apollo/client'

const GET_BLOGS_INFO = gql`
  query {
    posts {
      id
      title
      slug
      coverPhoto {
        url
      }
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`

const GET_AUTHOR_PAGE = gql`
  query getAuthorPage($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          id
          name
          avatar {
            url
          }
          field
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`

const GET_POST_COMMENTS = gql`
  query getPostComments($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      text
      name
      id
    }
  }
`

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_PAGE,
  GET_POST_INFO,
  GET_POST_COMMENTS,
}
