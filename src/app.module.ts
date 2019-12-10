import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SenderModule } from './sender/sender.module';
import { ReceiverModule } from './receiver/receiver.module';
import { CustomerModule } from './customer/customer.module';
import { ShipmentModule } from './shipment/shipment.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { ConfigModule } from './config/config.module';


@Module({
  imports: [    
    SenderModule,
    ReceiverModule,
    CustomerModule,
    ShipmentModule,
    ConfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
