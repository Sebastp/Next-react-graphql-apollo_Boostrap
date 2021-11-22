import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import UserService from './user.service'
import User from './user.model'
import { ObjectId } from 'mongoose'
import scalars from '@server/common/scalars'

// @Resolver((_of) => User)
export default class UserResolver {
  @Query((returns) => User, { nullable: true })
  candidate(
    @Arg('candidateId', (type) => scalars.ObjectIdScalar)
    candidateId: ObjectId
  ) {
    console.log('Retrieving candidate with id ' + candidateId)
    return UserService.find(candidateId)
  }
}
