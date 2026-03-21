import { Injectable } from '@nestjs/common';

import { FactoryCrud } from '@common/factory/crud.factory';
import { Inventory } from './entities/inventory.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoryService extends FactoryCrud<Inventory, CreateInventoryDto, UpdateInventoryDto> {

  constructor(@InjectModel(Inventory.name) model: Model<Inventory>) { super(model) }

}
