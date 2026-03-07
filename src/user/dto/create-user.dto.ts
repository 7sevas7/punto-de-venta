import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class CreateUserDto {


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail({}, { message: 'Email invalido' })
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;
}
