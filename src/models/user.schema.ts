import * as mongosoe from 'mongoose'
import * as bcrypt from 'bcrypt'

export const UserSchema = new mongosoe.Schema({
  name: String,
  password: String,
  seller: {
    type: Boolean,
    default: false
  },
  address: {
    addr1: String,
    adddr2: String,
    sity: String,
    country: String,
    state: String,
    zip: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function (next: mongosoe.HookNextFunction) {
  try {

    if (!this.isModified('password')) {
      return next()
    }

    const hashed = await bcrypt.hash(this['password'], 10)
    this['password'] = hashed
    return next()
  } catch (error) {
    return next(error)
  }
})