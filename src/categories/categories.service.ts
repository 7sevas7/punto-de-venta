import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';
import { FactoryCrud } from '@common/factory/crud.factory';

@Injectable()
export class CategoriesService extends FactoryCrud<Category> {
  constructor(@InjectModel(Category.name) categoryModel: Model<Category>) { super(categoryModel) }


}
