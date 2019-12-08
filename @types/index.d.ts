declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const content: DocumentNode
  export default content
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const content: DocumentNode
  export default content
}

declare module 'express'
declare module 'next'
declare module 'morgan'
declare module 'helmet'
declare module 'compression'
declare module 'styled-components'
