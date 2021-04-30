import path from 'path'
import { fileLoader } from 'merge-graphql-schemas'

//loads files automaticly so you don't have to import anything
const modelsArray = fileLoader(path.join(__dirname, './**/*.model.*'))

let allModelsObj = {} as any

//transform array of objects into one object of models
modelsArray.forEach((modelObj) => {
  allModelsObj = { ...allModelsObj, ...modelObj }
})
export default allModelsObj
