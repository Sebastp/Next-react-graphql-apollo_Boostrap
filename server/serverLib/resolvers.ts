import path from 'path'

import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import customScalars from '@server/common/scalars'

//loads files automaticly so you don't have to import anything
const resolversArray: any = fileLoader(
  path.join(__dirname, '../subgraphs/**/*.resolver.*')
)
export default mergeResolvers([customScalars, ...resolversArray])
