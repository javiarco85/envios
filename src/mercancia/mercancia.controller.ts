import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { MercanciaService } from './mercancia.service';
import { CreateMercanciaDto } from './dto/mercancia.dto';

@Controller('mercancia')
export class MercanciaController {


    constructor(private mercanciaService: MercanciaService){}

    @Get('/')
    async getMercancia(@Res() res){
        const mercancias = await this.mercanciaService.getAllMercancia();
        return res.status(HttpStatus.OK).json({
            message: 'Listado de Mercancias',
            mercancias: mercancias
        });
    }
    
    @Post('/create')
    async createMercancia(@Res() res, @Body() createMercanciaDto: CreateMercanciaDto){                  
        const mercancia = await this.mercanciaService.createMercancia(createMercanciaDto);
        return res.status(HttpStatus.OK).json({
            message: 'Creado',
            mercancia: mercancia
        });
    }
}
