import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Inventory extends Document {
    @Prop({ required: true, type: Types.ObjectId, ref: 'Product' })
    product_id: Types.ObjectId;

    @Prop({ required: true })
    stock: number;

    @Prop({ required: true })
    min_stock: number;

    @Prop({ required: true })
    max_stock: number;

    @Prop({ required: true })
    unit: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    status: string;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
