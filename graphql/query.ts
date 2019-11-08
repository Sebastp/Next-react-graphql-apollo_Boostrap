import gql from 'graphql-tag'

export const meQuery = gql`
  query {
    allUsers {
      id
    }
  }
`
