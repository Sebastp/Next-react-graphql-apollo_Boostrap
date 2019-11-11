import { ApolloServer } from 'apollo-server-express'

import typeDefs from '~server/graphql/typeDefs'
import resolvers from '~server/graphql/resolvers'

const { PORT = 3000 } = process.env

const playground = {
  endpoint: `http://localhost:${PORT}/graphql`,
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
})

export default apollo
