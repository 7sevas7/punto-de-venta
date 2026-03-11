import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ConflictException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { EnumTypeRegistry } from '../common/pipes/alias.properties';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async create(@Body(new ValidationPipe(EnumTypeRegistry.CreateUserDto)) createUserDto: CreateUserDto): Promise<any> {
    try {

      return await this.userService.create(createUserDto);

    } catch (error) {
      const field = Object.keys(error.keyValue)[0];
      throw new ConflictException(`El field ${field} ya esta registrado`);
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<any> {
    return await this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async removes(@Param('id') id: string): Promise<any> {
    return await this.userService.remove(id);
  }
}
