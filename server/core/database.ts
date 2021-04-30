import mongoose from 'mongoose'

const { MONGODB_URL } = process.env

export const connectDB: any = () => {
  mongoose
    .connect(MONGODB_URL, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err: string) => {
      console.error(err)
    })
}
