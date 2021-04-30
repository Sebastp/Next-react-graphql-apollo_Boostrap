import { ApolloServer } from 'apollo-server-express'

import { buildContext } from 'graphql-passport'
import typeDefs from '@server/graphql/typeDefs'
import resolvers from '@server/graphql/resolvers'
import models from '@server/graphql/models'

const { User } = models

const { PORT = 3000 } = process.env

const playground = {
  endpoint: `http://localhost:${PORT}/graphql`,
  settings: {
    'request.credentials': 'same-origin',
  },
}

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  context: ({ req, res }) => {
    return buildContext({ req, res, User })
    // return { user: null } //not logged in
    /*
    // Get the user token from the headers.
    const token = tokenExtractor(req)
    if (token == null) {
      return { user: null } //not logged in
    }

    var user = jwt.verify(token, JWT_SECRET)
    return { user }
    */
  },
})

export default apollo
