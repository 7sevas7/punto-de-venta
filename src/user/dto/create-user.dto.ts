import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class CreateUserDto {


    @IsString()
    @IsNotEmpty({ message: 'El nombre es requerido' })
    name: string;

    @IsEmail({}, { message: 'Email invalido' })
    @IsNotEmpty({ message: 'El email es requerido' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: 'La contraseña es requerida' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;

    @IsString()
    @IsNotEmpty({ message: 'El rol es requerido' })
    role: string;
}
