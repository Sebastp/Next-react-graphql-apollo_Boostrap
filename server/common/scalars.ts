import { GraphQLScalarType, Kind } from 'graphql'
import { ObjectId } from 'mongodb'

export default {
  ObjectIdScalar: new GraphQLScalarType({
    name: 'ObjectId',
    description: 'Mongo object id scalar type',
    parseValue(value: string) {
      return new ObjectId(value) // value from the client input variables
    },
    serialize(value: ObjectId) {
      return value.toHexString() // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        return new ObjectId(ast.value) // value from the client query
      }
      return null
    },
  }),

  IsoDate: new GraphQLScalarType({
    name: 'IsoDate',
    description: 'A date and time, represented as an ISO-8601 string',
    serialize: (value) => {
      if (value instanceof Date) {
        return value.toISOString()
      } else {
        return value
      }
    },
    parseValue: (value) => new Date(value),
    //@ts-ignore
    parseLiteral: (ast) => new Date(ast.value),
  }),
}
