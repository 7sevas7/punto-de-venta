import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards, ConflictException } from '@nestjs/common';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { EnumTypeRegistry } from '@common/pipes/alias.properties';
import { Category } from './entities/category.entity';
import { mapTo } from '@common/utils/map.util';
import { Console } from 'console';


@UseGuards(AuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Post()
  async create(@Body(new ValidationPipe(EnumTypeRegistry.CreateCategoryDto)) createCategoryDto: CreateCategoryDto): Promise<any> {
    try {

      let category = mapTo(Category, createCategoryDto);
      return await this.categoriesService.create(category);
    } catch (error) {
      const field = Object.keys(error.keyValue)[0];
      console.log(field);
      console.log("---------------------")
      const value = error.keyValue[field];
      throw new ConflictException(`El field ${field} con el valor ${value} ya esta registrado`);
    }
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }

  @Patch()
  update(@Body() updateCategoryDto: UpdateCategoryDto) {
    let category = mapTo(Category, updateCategoryDto);
    if (!category.id) {
      throw new BadRequestException('Id de categoría requerido');
    }
    return this.categoriesService.update(category.id.toString(), category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
