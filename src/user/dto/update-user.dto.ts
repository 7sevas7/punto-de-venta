import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsEmail, IsNotEmpty, MinLength, IsBoolean } from 'class-validator'
import { RolesUser } from './roles-user';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    @IsNotEmpty({ message: 'El email es requerido' })
    email?: string | undefined;

    @IsString()
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password?: string | undefined;

    @IsString()
    @IsNotEmpty({ message: 'El rol es requerido' })
    role?: RolesUser | undefined;

    @IsBoolean()
    @IsNotEmpty({ message: 'El estado es requerido' })
    isActive?: boolean | undefined;
}
