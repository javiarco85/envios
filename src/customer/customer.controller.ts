import { Controller, Get, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './dto/customer.dto'

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService){}

    @Get()
    async getCustomers(): Promise<CustomerDto[]>{
        const customers = await this.customerService.getAll();  
        console.log(process.env);
        return customers;       
    }

    @Get(':id')
    async getCustomer(@Param() id: string): Promise<CustomerDto>{
        const customer = await this.customerService.getCustomer(id);
        return customer;              
    }

    @Patch(':id')
    async updateCustomer(@Param() param, @Body() customerDto: CustomerDto){
        await this.customerService.updateCustomer(param.id,customerDto);
        return true;              
    }

    @Delete(':id')
    async deleteCustomer(@Param() param){
        await this.customerService.deleteCustomer(param.id);
        return true;
    }

    @Post('/save')
    async newCustomer(@Body() customerDto: CustomerDto){        
        const createdCostumer = await this.customerService.createCustomer(customerDto);       
        return true; 
    }

    

}
