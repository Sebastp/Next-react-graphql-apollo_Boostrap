import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

//loads files automaticly so you don't have to import anything
const typesArray = fileLoader(path.join(__dirname, './**/*.type.*'), {
  recursive: true,
})

export default mergeTypes(typesArray, { all: true })
