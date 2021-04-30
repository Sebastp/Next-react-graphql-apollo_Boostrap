import gql from 'graphql-tag'

export const FRAGMENT_exampleObject = gql`
  fragment wholeUserObject on User {
    _id
    login
    email
    avatar
    createdAt
  }
`
