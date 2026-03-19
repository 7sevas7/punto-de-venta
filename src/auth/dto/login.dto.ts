import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString({ message: 'El email no es una cadena de texto' })
  @IsNotEmpty({ message: 'El email es requerido' })
  email: string;
  @IsString({ message: 'La contraseña no es una cadena de texto' })
  @IsNotEmpty({ message: 'La contraseña es requerida' })
  password: string;
};
