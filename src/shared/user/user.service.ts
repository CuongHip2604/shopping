import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDTO, RegisterDTO } from 'src/auth/auth.dto';
import { User } from 'src/types/user';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) { }

  sanitizeUser(user: User) {
    return user.depopulate('password')
  }

  async create(userDTO: RegisterDTO) {
    const { username } = userDTO
    const user = await this.userModel.findOne({ username })
    if (!user) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST)
    }
    const createUser = new this.userModel(userDTO)
    await createUser.save()
    return this.sanitizeUser(createUser)
  }

  async findByLogin(userDTO: LoginDTO) {
    const { username } = userDTO
    const user = await this.userModel.findOne({ username })
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED)
    }
  }
}
