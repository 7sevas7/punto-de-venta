import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    let nuevo = new this.userModel(createUserDto);
    return await nuevo.save();
  }

  async findAll() {
    let todos = await this.userModel.find().exec();
    return todos;
  }
  //For login 
  async findAuthUser(logindto: LoginDto): Promise<Omit<User, 'password'>> {
    let user = await this.userModel
      .findOne({ isActive: true, email: logindto.email })
      .select('-createAt -updateAt')
      .exec();
    if (!user) throw new NotFoundException('Usuario no encontrado');
    let isMatch = await bcrypt.compare(logindto.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user.toObject();
    return result;
  }

  async findOne(id: string) {
    let user = await this.userModel
      .findById(id)
      .exec();
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    let user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return await user.updateOne(updateUserDto);
  }

  async remove(id: string): Promise<any> {
    let user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return await user.deleteOne();
  }
}
