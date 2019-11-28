import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MercanciaController } from './mercancia.controller';
import { MercanciaService } from './mercancia.service';
import { MercanciaSchema } from './schemas/mercancia.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Mercancia', schema: MercanciaSchema }
    ])
  ],
  controllers: [MercanciaController],
  providers: [MercanciaService]
})


export class MercanciaModule {

}
