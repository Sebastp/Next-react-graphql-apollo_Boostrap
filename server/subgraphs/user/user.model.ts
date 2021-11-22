import { getModelForClass, prop as Property } from '@typegoose/typegoose'
import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { ObjectId } from 'mongoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'

import Email from '@server/common/models/Email'

@ObjectType()
@InputType('UserInput')
export default class User extends TimeStamps {
  @Field((_type) => ID, { nullable: true })
  readonly _id: ObjectId

  @Field((_type) => String, { nullable: true })
  @Property({ required: false })
  firstName: string

  @Field((_type) => String, { nullable: true })
  @Property({ required: false })
  familyName: string

  @Field((_type) => String, { nullable: true })
  @Property({ required: false })
  avatar: string

  @Field((_type) => Email, { nullable: true })
  @Property({ type: Email, required: false })
  email: Email
}

export const UserModel = getModelForClass(User)
