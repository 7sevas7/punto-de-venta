import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsMongoId()
    id: Types.ObjectId;
}
