import { Schema } from 'mongoose';

export const CustomerSchema = new Schema({
    name: String,
    lastname: String,
    direction: String,
    phone: String,
    city: String,
    department: String,
    country: String,
    createdAt: {
        type: Date,
        default: Date.now
    }    
});