import { Prop, Schema } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
@Schema()
export class Category {

    @Prop()
    name: string;

    @Prop()
    slug: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    parent_id: Category;
    @Prop()
    icon: string;

    @Prop()
    default_iva: number;

    @Prop()
    age_restricted: boolean;
    //En caso de que mostrar para ingresar cantidad de piezas, es necesario que sea el peso
    @Prop()
    requires_weight: boolean;

    //Basicmanete son palabras reservadas o claves paraidentificar los productos 
    @Prop({ type: [String], default: [] })
    custom_fields: Array<string>



    @Prop({ default: Date.now })
    createAt: number;

    @Prop({ default: Date.now })
    updateAt: number;

}
