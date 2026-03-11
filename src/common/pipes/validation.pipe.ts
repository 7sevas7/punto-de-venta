import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { EnumTypeRegistry, AliasRegistry } from "./alias.properties";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {

    constructor(public typeDto: EnumTypeRegistry) { }
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = plainToInstance(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            let model = AliasRegistry[this.typeDto];
            let mapErrors = errors.map(t => ({
                property: model[t.property] || t.property,
                constraints: Object.entries<string>(t.constraints || {}).map(([key, value]) => value)
            }));
            throw new BadRequestException({ message: 'Validation failed', errors: mapErrors });
        }
        return value;
    }
    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);

    }
}