import {
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { FactoryCrud } from 'src/common/factory/crud.factory';

@Injectable()
export class UserService extends FactoryCrud<User> {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { super(userModel) }



}
