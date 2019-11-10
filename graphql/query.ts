import gql from 'graphql-tag'
//import { MyQuery1, MyQuery2 } from 'query.gql'
export const meQuery = gql`
  query {
    allUsers {
      id
    }
  }
`
