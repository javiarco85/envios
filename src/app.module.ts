import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MercanciaModule } from './mercancia/mercancia.module';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { CustomerModule } from './customer/customer.module';
import { ShipmentModule } from './shipment/shipment.module';

@Module({
  imports: [
    MercanciaModule,
    MongooseModule.forRoot(
      'mongodb://localhost:27017/prueba',
      {
        useNewUrlParser: true
      }
    ),
    SenderModule,
    ReceiverModule,
    CustomerModule,
    ShipmentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
