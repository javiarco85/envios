import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Mercancia } from './interfaces/mercancia.interface';
import { CreateMercanciaDto } from './dto/mercancia.dto';

@Injectable()
export class MercanciaService {

    constructor(@InjectModel('Mercancia') private readonly mercanciaModel: Model<Mercancia>){}

    async getAllMercancia(): Promise<Mercancia[]>{
        const mercancias = await this.mercanciaModel.find()
        return mercancias
    }

    async getMercancia(mercanciaId: string): Promise<Mercancia>{
        const mercancia = await this.mercanciaModel.findById(mercanciaId)
        return mercancia;
    }

    async createMercancia(createMercanciaDto: CreateMercanciaDto): Promise<Mercancia>{        
        const mercancia = new this.mercanciaModel(createMercanciaDto)            
        return await mercancia.save()
    }

    async deleteMercancia(mercanciaId: string): Promise<Mercancia>{
        const deletedMercancia = await this.mercanciaModel.finByIdAndDelete(mercanciaId)
        return deletedMercancia
    }

    async updateMercancia(mercanciaId: string, createMercanciaDto: CreateMercanciaDto): Promise<Mercancia>{
        const updatedMercancia = await this.mercanciaModel.findByIdAndUpdate(mercanciaId,createMercanciaDto,{new: true})
        return updatedMercancia
    }

}
