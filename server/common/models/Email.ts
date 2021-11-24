import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { prop as Property } from '@typegoose/typegoose/lib/prop'
import { ObjectId } from 'mongoose'

@ObjectType()
@InputType('EmailInput')
export default class Email {
  @Field((type) => ID, { nullable: true })
  readonly _id: ObjectId

  @Field((_type) => String, { nullable: false })
  @Property({ required: true })
  email: string

  @Field((_type) => Boolean, { nullable: false })
  @Property({ required: true, default: true })
  isDefault: boolean

  @Field((_type) => Boolean, { nullable: true })
  @Property({ required: true, default: true })
  isActive: boolean
}
