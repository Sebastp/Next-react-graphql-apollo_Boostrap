import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import customScalars from '@server/graphql/scalars'

//loads files automaticly so you don't have to import anything
const resolversArray = fileLoader(path.join(__dirname, './**/*.resolver.*'))

export default mergeResolvers([customScalars, ...resolversArray])
