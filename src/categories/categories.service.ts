import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';
import { Model } from 'mongoose';
import { FactoryCrud } from '@common/factory/crud.factory';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService extends FactoryCrud<Category, CreateCategoryDto, UpdateCategoryDto> {
  constructor(@InjectModel(Category.name) categoryModel: Model<Category>) { super(categoryModel) }


}
