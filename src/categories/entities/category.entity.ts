import { Prop, Schema, SchemaFactory, } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
@Schema()
export class Category {

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    id: mongoose.Types.ObjectId;
    @Prop({ default: '' })
    name: string;

    @Prop({ default: '' })
    slug: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: undefined, required: false })
    parent_id?: Category | null;

    @Prop({ default: '' })
    icon: string;

    @Prop({ default: 0 })
    default_iva: number;

    @Prop({ default: false })
    age_restricted: boolean;

    //En caso de que mostrar para ingresar cantidad de piezas, es necesario que sea el peso
    @Prop({ default: false })
    requires_weight: boolean;

    //Basicmanete son palabras reservadas o claves paraidentificar los productos 
    @Prop({ type: [String], default: [] })
    custom_fields?: string[]

    @Prop({ default: 0 })
    sort_order: number;

    @Prop({ default: Date.now })
    createAt: Date;

    @Prop({ default: Date.now })
    updateAt: Date;

}

export const CategorySchema = SchemaFactory.createForClass(Category);
