import mongoose from 'mongoose'

const { MONGODB_URL } = process.env

export const connectDB: any = async () => {
  return mongoose
    .connect(MONGODB_URL as string)
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((err: string) => {
      console.error(err)
    })
}
