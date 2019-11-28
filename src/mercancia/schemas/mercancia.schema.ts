import { Schema } from 'mongoose';

export const MercanciaSchema = new Schema({
    nombre: String,
    descripcion: String,
    createdAt: {
        type: Date,
        default: Date.now
    }    
});