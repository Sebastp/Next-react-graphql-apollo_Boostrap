import {
  ApolloError,
  AuthenticationError,
  UserInputError,
} from 'apollo-server-express'
import { Types } from 'mongoose'
import bcrypt from 'bcryptjs'
import moment from 'moment'

import models from '@server/graphql/models'

// HELPERS
import { isEmpty, isEmailValid, isPasswordValid } from '@lib/validations'
import { hashPassword } from '@server/helpers/encryption'

const { User } = models

export default {
  Mutation: {
    login: async (_, { email, password }, context) => {
      const { user, info } = await context.authenticate('graphql-local', {
        email,
        password,
      })
      if (user !== false) {
        await context.login(user)
        console.error(`Login successful for '${email}'.`)

        const { password } = user // separate password field for security
        return user
      }
      console.error(`Login failed for '${email}'. Info: `, info)
      throw new AuthenticationError(info.message)
    },
    logout: (_, args, context) => {
      return context.logout()
    },
    createUser: async (_, data, context) => {
      try {
        if (!isEmailValid(data.email)) {
          throw new ApolloError('[email] Email is not valid')
        } else if (!isPasswordValid(data.password)) {
          throw new ApolloError('[password] Password is not valid')
        }

        return User.find({ email: data.email }) // check if exist
          .select('_id ')
          .lean()
          .then(async (docs, err) => {
            if (err) {
              throw new ApolloError('Something went wrong')
            } else if (docs.length) {
              // if found users with this email
              throw new ApolloError(
                '[email] Email is already assigned to a different account'
              )
            }

            const hashedPassword = await hashPassword(data.password)
            let finalUserObjToSave: any = {
              _id: new Types.ObjectId(),
              login: data.login,
              email: data.email,
              password: hashedPassword,
              createdAt: new Date().toISOString(),
            }

            try {
              const newUserObj = new User(finalUserObjToSave)
              await newUserObj.save()

              const { user, info } = await context.authenticate(
                'graphql-local',
                {
                  email: data.email,
                  password: data.password,
                }
              )
              await context.login(user)
              return true
            } catch (error) {
              console.error(error)
              throw new ApolloError('Something went wrong')
            }
          })
      } catch (err) {
        console.error(`Error:`, err)
        throw err
      }
    },
    updateUser: async (_, data, context) => {
      try {
        if (context.isUnauthenticated()) {
          throw new AuthenticationError('You must be logged in')
        }
        const user = context.getUser()

        // this object will be mutated and put into update() query
        const fieldsToChange: {
          email?: string
        } = {}

        // if want to change email
        if (!isEmpty(data.email) && user.email !== data.email) {
          // check if new email is in db
          const userArr = await User.find({ email: data.email }, { _id: 1 })

          if (userArr.length === 0) {
            fieldsToChange.email = data.email
          } else {
            //TODO
            throw new ApolloError('Email is not valid')
          }
        }

        const newUser = await User.findOneAndUpdate(
          { _id: new Types.ObjectId(user._id) },
          fieldsToChange,
          { new: true, useFindAndModify: false, projection: { password: 0 } }
        ).catch((err) => {
          console.error('err; ', err)
          throw new ApolloError('Something went wrong')
        })

        return newUser
      } catch (err) {
        console.error(`Error:`, err)
        // throw new ApolloError('Something went wrong')
        throw err
      }
    },
  },
}
