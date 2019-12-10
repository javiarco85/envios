import { Injectable } from '@nestjs/common';
import { ICustomer } from './interfaces/customer.interface';
import { CustomerDto } from './dto/customer.dto';
import { database } from 'firebase-admin';



@Injectable()
export class CustomerService {
    
    constructor(){}    

    async createCustomer(createCustomerDto: CustomerDto){  
        return await database().ref('customer').push(CustomerDto);
    }

    async getAll(): Promise<ICustomer[]>{        
        return await database().ref('customer').once('value')
        .then((snapshot)=>{
            return snapshot.val();
        })         
    }

    async getCustomer(customerKey: string): Promise<ICustomer>{        
        return await database().ref('customer/'+customerKey).once('value').then((snapshot)=>{            
            return snapshot.val();        
        })
    }

    async updateCustomer(customerKey: string, createCustomerDto: CustomerDto,){        
        return await database().ref('customer/'+customerKey).set(createCustomerDto);
    }

    async deleteCustomer(customerKey){    
        return await database().ref('customer').child(customerKey).remove();
    }

    


}
