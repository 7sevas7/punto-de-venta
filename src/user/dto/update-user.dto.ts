import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsMongoId } from 'class-validator';


export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsMongoId({ message: 'Ingresa un id valido' })
  @IsNotEmpty({ message: 'Id de usuario requerido' })
  id: string;
}
