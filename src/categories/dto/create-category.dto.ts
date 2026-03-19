import { IsArray, IsBoolean, IsMongoId, IsNotEmpty, IsNumber, IsObject, ValidateIf, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

export class CreateCategoryDto {

    @IsString({ message: 'Ingresa nombre valido' })
    @IsNotEmpty({ message: 'Nombre de categoría requerido' })
    name: string;

    @IsString({ message: 'Ingresa  categoría valido' })
    @IsNotEmpty({ message: 'Codigo de categoría requerido' })
    slug: string;


    @IsOptional() // 👈 Faltaba esto
    @IsMongoId()
    parent_id?: Types.ObjectId;



    @IsString()
    @IsOptional()
    icon?: string;

    @IsNumber({}, { message: 'Ingresa un impuesto valido' })
    @IsOptional()
    default_iva?: number;

    @IsBoolean({ message: 'Ingresa un valor verdadero o falso' })
    @IsOptional()
    age_restricted?: boolean;

    @IsBoolean({ message: 'Ingresa un valor verdadero o falso' })
    @IsOptional()
    requires_weight?: boolean;

    @IsArray({ message: 'Ingresa un grupo de cadenas' })
    @IsString({ each: true, message: 'Cada campo debe ser una cadena' }) // 👈 Clave
    @IsOptional()
    custom_fields?: string[];

    @IsNumber({}, { message: 'Ingresa un numero de orden valido' })
    @IsOptional()
    sort_order?: number;
}