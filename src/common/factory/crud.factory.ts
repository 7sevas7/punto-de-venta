import { Model } from "mongoose";
import { ConflictException, NotFoundException, InternalServerErrorException, HttpException, HttpStatus } from "@nestjs/common";


export abstract class FactoryCrud<T> {
    constructor(private readonly model: Model<T>) { }

    async create(createDto: Partial<T>) {
        try {
            let nuevo = new this.model(createDto);
            return await nuevo.save();
        } catch (error) {

            if (error.code === 11000) {
                const field = Object.keys(error.keyValue)[0];
                const value = error.keyValue[field];
                console.log(error.code);
                throw new ConflictException(`El field ${field} con el valor ${value} ya esta registrado`);
            }
            throw new HttpException(
                {
                    statusCode: 500,
                    message: 'Error al crear el producto',
                    error: error.message,
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );

        }
    }

    async findAll() {
        return await this.model.find().exec();
    }

    async findOne(id: string): Promise<T | null> {
        return await this.model.findById(id).exec();
    }

    async update(id: string, updateDto: Partial<T>): Promise<T> {

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