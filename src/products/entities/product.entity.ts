import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Category } from "src/categories/entities/category.entity";


@Schema()
export class Product {

    @Prop({ type: Types.ObjectId })
    id: Types.ObjectId;

    @Prop({ required: true })
    sku: string;//Codigo de barras o codigo manual

    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'Category' })
    category_id: Category;

    @Prop()
    brand: string;//Marca del producto

    @Prop()
    unit: string;//Tipo de unidad del producto, pieza, kg, litro, etc...

    @Prop()
    prices: number;//Precio del producto

    @Prop({ default: 0 })
    tax_current: number;//Impuesto actual del producto

    @Prop()
    image?: string;

    @Prop({ default: [] })
    attributes?: string[];//Atributos del producto

    @Prop({ default: true })
    is_active: boolean;//Estado del producto

    @Prop({ default: Date.now })
    createAt: number;

    @Prop({ default: Date.now })
    updateAt: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index({ sku: 1 }, { unique: true });
