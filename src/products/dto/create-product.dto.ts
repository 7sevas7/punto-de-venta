import { IsString, IsNotEmpty, IsNumber, IsPositive, IsOptional } from "class-validator";

export class CreateProductDto {


    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    stock: number;

    @IsString()
    @IsOptional()
    image?: string;
}
