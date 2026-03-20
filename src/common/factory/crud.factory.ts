import { Model } from "mongoose";
import { NotFoundException } from "@nestjs/common";


export abstract class FactoryCrud<T> {
    constructor(private readonly model: Model<T>) { }

    async create(createDto: Partial<T>) {
        let nuevo = new this.model(createDto);
        return await nuevo.save();
    }

    async findAll() {
        return await this.model.find().exec();
    }

    async findOne(id: string) {
        return await this.model.findById(id).exec();
    }

    async update(id: string, updateDto: Partial<T>) {

        let user = await this.model.findById(id).exec();
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return await user.updateOne(updateDto);
    }

    async remove(id: string): Promise<any> {
        let user = await this.model.findById(id).exec();
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        return await user.deleteOne();
    }
}