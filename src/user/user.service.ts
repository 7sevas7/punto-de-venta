import {
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { FactoryCrud } from 'src/common/factory/crud.factory';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService extends FactoryCrud<User, CreateUserDto, UpdateUserDto> {
  constructor(
    @InjectModel(User.name) model: Model<User>,
  ) { super(model) }



}
