import { Schema, Types } from 'mongoose'

import model from '@server/helpers/model'

export const User = model({
  name: 'User',
  schema: {
    // _id added by mongoose
    login: { type: String, required: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    avatar: { type: String, default: null },
    createdAt: {
      type: Date,
      required: true,
      default: () => new Date().toISOString(),
    },
  },
})
