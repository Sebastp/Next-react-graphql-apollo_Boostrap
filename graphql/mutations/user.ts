import gql from 'graphql-tag'
import { FRAGMENT_exampleObject } from '~graphql/fragments'

export const UPDATE_PROFILE = gql`
  ${FRAGMENT_exampleObject}

  mutation updateUser($newName: String) {
    updateUser(newName: $newName) {
      ...wholeUserObject
    }
  }
`

export const UPDATE_AVATAR = gql`
  mutation updateAvatar($newAvatar: String!) {
    updateAvatar(newAvatar: $newAvatar) {
      avatar
    }
  }
`
