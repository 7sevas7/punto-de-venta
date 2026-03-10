import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    let nuevo = new this.userModel(createUserDto);
    return await nuevo.save();
  }

  async findAll() {
    let todos = await this.userModel.find().exec();

    return todos;

  }

  async findOne(id: string) {
    let user = await this.userModel.findById(id).exec();
    console.log(user?.id);
    return user?.id;
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
