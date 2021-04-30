import { ApolloError } from 'apollo-server-express'
import { Types } from 'mongoose'

import models from '@server/graphql/models'

const { User } = models

export default {
  Query: {
    currentUser: async (_, args, context) => {
      if (!context.isAuthenticated()) {
        return null
      }
      const userObj: any = await context.getUser()

      return userObj.toObject()
    },
  },
}
