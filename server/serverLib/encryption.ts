import bcrypt from 'bcryptjs'

/**
 * use bcrypt to hash given string
 @return Promise
 */
export const hashPassword = (stringToHash: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) reject(err)
      bcrypt.hash(stringToHash, salt, function(err, hash) {
        if (err) reject(err)
        resolve(hash)
      })
    })
  })
}
