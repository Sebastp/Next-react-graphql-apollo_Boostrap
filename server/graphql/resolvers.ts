import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import customScalars from '~server/graphql/scalars'

const resolversArray = fileLoader(path.join(__dirname, './resolvers'))

export default mergeResolvers([customScalars, ...resolversArray])
