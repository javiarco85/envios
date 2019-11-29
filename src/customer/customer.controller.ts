import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto'

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService){}

    @Get('/')
    getAllCustomer(@Res() res){
        res.status(HttpStatus.OK).json({
            message: 'List of customers',
            data: {}
        })
    }

    @Get(':id')
    getCustomerById(@Param() params, @Res() res){
        res.status(HttpStatus.OK).json({
            message: 'List of customers',
            data: {
                id: params.id
            }
        })
    }

}
