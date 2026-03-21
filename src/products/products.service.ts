import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';
import { FactoryCrud } from '@common/factory/crud.factory';

@Injectable()
export class ProductsService extends FactoryCrud<Product, CreateProductDto, UpdateProductDto> {

  constructor(
    @InjectModel(Product.name) model: Model<Product>
  ) { super(model) }
}
