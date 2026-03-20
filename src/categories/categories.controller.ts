import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common';
import { ValidationPipe } from '@common/pipes/validation.pipe';
import { EnumTypeRegistry } from '@common/pipes/alias.properties';
import { Category } from './entities/category.entity';
import { mapTo } from '@common/utils/map.util';


@UseGuards(AuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) { }

  @Post()
  create(@Body(new ValidationPipe(EnumTypeRegistry.CreateCategoryDto)) createCategoryDto: CreateCategoryDto) {
    let category = mapTo(Category, createCategoryDto);
    return this.categoriesService.create(category);
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
