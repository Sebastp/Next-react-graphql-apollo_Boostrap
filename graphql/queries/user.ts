import gql from 'graphql-tag'
import { FRAGMENT_exampleObject } from '@graphql/fragments'

export const PROFILE_BY_USERNAME = gql`
  ${FRAGMENT_exampleObject}

  query currentUser() {
    currentUser() {
      ...wholeUserObject
    }
  }
`
