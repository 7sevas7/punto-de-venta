import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import * as bcrypt from 'bcrypt';

@Schema()
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, type: String, enum: ['admin', 'user'] })
    role: string;

    @Prop({ required: true, default: true })
    isActive: boolean;

    @Prop({ required: true, default: Date.now() })
    lastLogin: number;

    @Prop({ required: true, default: Date.now() })
    createAt: number;

    @Prop({ required: true, default: Date.now() })
    updateAt: number;

}



export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.pre<User>('save', async function () {

    this.password = await bcrypt.hash(this.password, 10);
});
