import mongoose from 'mongoose'

interface modelObj {
  name: string
  schema: object
  index?: string | number | object
}

/**
 * Registers a Mongoose model, or returns the existing model if registered.
 */
function model({ name, schema, index }: modelObj) {
  if (mongoose.models[name]) {
    // the model has already been registered
    return mongoose.models[name]
  } else {
    // register a new model
    const ModelSchema = new mongoose.Schema(schema, {
      versionKey: false, // prevent adding __v field to new records
    })
    if (index) {
      ModelSchema.index(index)
    }
    return mongoose.model(name, ModelSchema)
  }
}

export default model
