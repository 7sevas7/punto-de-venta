import { IsString, IsBoolean, IsArray, IsNotEmpty, IsNumber, IsPositive, IsOptional, IsMongoId } from "class-validator";
import { Types } from "mongoose";

export class CreateProductDto {

    @IsString({ message: 'Ingresa un codigo valido' })
    @IsNotEmpty({ message: 'Codigo de producto requerido' })
    sku: string;

    @IsString({ message: 'Ingresa un nombre valido' })
    @IsNotEmpty({ message: 'Nombre de producto requerido' })
    name: string;

    @IsString({ message: 'Ingresa una descripcion valida' })
    @IsOptional()
    description?: string;

    @IsNotEmpty({ message: 'Categoria de producto requerida' })
    @IsMongoId({ message: 'Ingresa un id de categoria valido' })
    category_id: Types.ObjectId;

    @IsString({ message: 'Ingresa una marca valida' })
    @IsOptional()
    brand?: string;//Marca

    @IsString({ message: 'Ingresa una unidad valida' })
    @IsNotEmpty({ message: 'Unidad de producto requerido' })
    unit: string;//Unidad pieza, kg, metro etc...


    @IsNumber({}, { message: 'Ingresa un precio valido' })
    @IsPositive({ message: 'Ingresa un precio valido' })
    prices: number;

    @IsNumber({}, { message: 'Ingresa un impuesto valido' })
    @IsOptional()
    tax_current?: number;

    @IsString({ message: 'Ingresa una imagen valida' })
    @IsOptional()
    image?: string;
    /*
        @IsNumber({}, { message: 'Ingresa un stock valido' })
        @IsPositive({ message: 'Ingresa un stock valido' })
        stock: number;
    */
    @IsArray({ message: 'Ingresa un array de atributos' })
    @IsString({ each: true, message: 'Cada atributo debe ser una cadena' })
    @IsOptional()
    attributes?: string[];//Atributos del producto

    @IsBoolean({ message: 'Ingresa un valor verdadero o falso' })
    @IsOptional()
    is_active?: boolean;//Estado del producto
}
