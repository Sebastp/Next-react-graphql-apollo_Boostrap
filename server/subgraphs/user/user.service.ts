import User, { UserModel } from './user.model'
import { ObjectId } from 'mongoose'

const UserService = {
  async findAll() {
    return UserModel.find()
  },

  find(candidateId: ObjectId) {
    return UserModel.findById(candidateId)
  },
}

export default UserService
